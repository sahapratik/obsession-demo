import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IProduct extends Document {
  name: string;
  slug: string;
  description: string;
  shortDescription?: string;
  price: number;
  compareAtPrice?: number;
  category: string;
  subcategory?: string;
  images: string[];
  sku: string;
  stock: number;
  isInStock: boolean;
  isFeatured: boolean;
  isNewArrival: boolean;
  isBestSeller: boolean;
  tags: string[];
  scent?: {
    topNotes?: string[];
    middleNotes?: string[];
    baseNotes?: string[];
    scentFamily?: string;
  };
  volume?: string;
  longevity?: string;
  sillage?: string;
  rating?: number;
  reviewCount?: number;
  weight?: number;
  dimensions?: {
    length?: number;
    width?: number;
    height?: number;
  };
  metaTitle?: string;
  metaDescription?: string;
  createdAt: Date;
  updatedAt: Date;
}

const ProductSchema = new Schema<IProduct>(
  {
    name: {
      type: String,
      required: [true, 'Product name is required'],
      trim: true,
      maxlength: [200, 'Product name cannot exceed 200 characters'],
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Product description is required'],
      maxlength: [2000, 'Description cannot exceed 2000 characters'],
    },
    shortDescription: {
      type: String,
      maxlength: [300, 'Short description cannot exceed 300 characters'],
    },
    price: {
      type: Number,
      required: [true, 'Product price is required'],
      min: [0, 'Price must be positive'],
    },
    compareAtPrice: {
      type: Number,
      min: [0, 'Compare price must be positive'],
    },
    category: {
      type: String,
      required: [true, 'Product category is required'],
      enum: [
        'Body Mist',
        'Spray Perfume',
        'Roll-on Perfume',
        'Room Mist',
        'Scented Candle',
        'Packages',
      ],
    },
    subcategory: String,
    images: {
      type: [String],
      required: [true, 'At least one product image is required'],
      validate: {
        validator: function (v: string[]) {
          return v && v.length > 0;
        },
        message: 'Product must have at least one image',
      },
    },
    sku: {
      type: String,
      required: [true, 'SKU is required'],
      unique: true,
      uppercase: true,
    },
    stock: {
      type: Number,
      required: [true, 'Stock quantity is required'],
      min: [0, 'Stock cannot be negative'],
      default: 0,
    },
    isInStock: {
      type: Boolean,
      default: true,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    isNewArrival: {
      type: Boolean,
      default: false,
    },
    isBestSeller: {
      type: Boolean,
      default: false,
    },
    tags: [String],
    scent: {
      topNotes: [String],
      middleNotes: [String],
      baseNotes: [String],
      scentFamily: String,
    },
    volume: String,
    longevity: String,
    sillage: String,
    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },
    reviewCount: {
      type: Number,
      default: 0,
    },
    weight: Number,
    dimensions: {
      length: Number,
      width: Number,
      height: Number,
    },
    metaTitle: String,
    metaDescription: String,
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Indexes for better query performance
ProductSchema.index({ slug: 1 });
ProductSchema.index({ category: 1 });
ProductSchema.index({ sku: 1 });
ProductSchema.index({ isFeatured: 1, isInStock: 1 });
ProductSchema.index({ isBestSeller: 1, isInStock: 1 });
ProductSchema.index({ isNewArrival: 1, isInStock: 1 });
ProductSchema.index({ tags: 1 });
ProductSchema.index({ price: 1 });

// Virtual for discount percentage
ProductSchema.virtual('discountPercentage').get(function () {
  if (this.compareAtPrice && this.compareAtPrice > this.price) {
    return Math.round(((this.compareAtPrice - this.price) / this.compareAtPrice) * 100);
  }
  return 0;
});

// Pre-save middleware to update isInStock
ProductSchema.pre('save', function (next) {
  this.isInStock = this.stock > 0;
  next();
});

const Product: Model<IProduct> =
  mongoose.models.Product || mongoose.model<IProduct>('Product', ProductSchema);

export default Product;
