import mongoose, { Schema, Document, Model } from 'mongoose';

export interface ICartItem {
  product: mongoose.Types.ObjectId;
  quantity: number;
  price: number;
}

export interface ICart extends Document {
  user?: mongoose.Types.ObjectId;
  sessionId?: string;
  items: ICartItem[];
  subtotal: number;
  expiresAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const CartItemSchema = new Schema<ICartItem>({
  product: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: [1, 'Quantity must be at least 1'],
    default: 1,
  },
  price: {
    type: Number,
    required: true,
    min: [0, 'Price must be positive'],
  },
});

const CartSchema = new Schema<ICart>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      sparse: true,
    },
    sessionId: {
      type: String,
      sparse: true,
    },
    items: {
      type: [CartItemSchema],
      default: [],
    },
    subtotal: {
      type: Number,
      default: 0,
      min: [0, 'Subtotal must be positive'],
    },
    expiresAt: {
      type: Date,
      default: () => new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
    },
  },
  {
    timestamps: true,
  }
);

// Indexes
CartSchema.index({ user: 1 });
CartSchema.index({ sessionId: 1 });
CartSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

// Calculate subtotal before saving
CartSchema.pre('save', function (next) {
  this.subtotal = this.items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  next();
});

// Ensure either user or sessionId is set
CartSchema.pre('save', function (next) {
  if (!this.user && !this.sessionId) {
    next(new Error('Cart must have either a user or sessionId'));
  }
  next();
});

const Cart: Model<ICart> =
  mongoose.models.Cart || mongoose.model<ICart>('Cart', CartSchema);

export default Cart;
