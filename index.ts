export interface Product {
  _id: string;
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
  discountPercentage?: number;
  createdAt: string;
  updatedAt: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  price: number;
}

export interface Cart {
  _id: string;
  items: CartItem[];
  subtotal: number;
}

export interface Address {
  fullName: string;
  phone: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  area: string;
  postalCode?: string;
  isDefault: boolean;
}

export interface User {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  role: 'customer' | 'admin';
  addresses: Address[];
  wishlist: string[];
  isEmailVerified: boolean;
}

export interface Order {
  _id: string;
  orderNumber: string;
  user: string | User;
  items: {
    product: string | Product;
    productName: string;
    productImage: string;
    quantity: number;
    price: number;
    subtotal: number;
  }[];
  shippingAddress: Address;
  paymentMethod: 'cod' | 'stripe' | 'sslcommerz' | 'bkash';
  paymentStatus: 'pending' | 'paid' | 'failed' | 'refunded';
  orderStatus: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  subtotal: number;
  shippingCost: number;
  discount: number;
  couponCode?: string;
  total: number;
  paymentDetails?: {
    transactionId?: string;
    paymentDate?: Date;
    paymentMethod?: string;
  };
  notes?: string;
  trackingNumber?: string;
  estimatedDelivery?: Date;
  deliveredAt?: Date;
  cancelledAt?: Date;
  cancellationReason?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  success: boolean;
  data: T[];
  pagination: {
    page: number;
    limit: number;
    totalPages: number;
    totalItems: number;
    hasMore: boolean;
  };
}

export type PaymentMethod = 'cod' | 'stripe' | 'sslcommerz' | 'bkash';
export type OrderStatus = 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
export type PaymentStatus = 'pending' | 'paid' | 'failed' | 'refunded';
