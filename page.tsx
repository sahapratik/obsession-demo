'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ShoppingBag, Heart, Star, ChevronRight, Sparkles, Package, TruckIcon } from 'lucide-react';

// Mock product data
const featuredProducts = [
  {
    id: '1',
    name: 'Al Kiswa',
    category: 'Body Mist',
    price: 999,
    compareAtPrice: 1200,
    image: 'https://yoursobsession.com/wp-content/uploads/2026/02/IMG_7780-2.jpg',
    rating: 4.8,
    reviews: 156,
    isBestSeller: true,
  },
  {
    id: '2',
    name: 'Pretty and Soft',
    category: 'Roll-on Perfume',
    price: 320,
    image: 'https://yoursobsession.com/wp-content/uploads/2026/02/IMG_7949-500x800.jpg',
    rating: 4.9,
    reviews: 243,
    isNewArrival: true,
  },
  {
    id: '3',
    name: 'Ramadan Essentials',
    category: 'Package',
    price: 1680,
    compareAtPrice: 1770,
    image: 'https://yoursobsession.com/wp-content/uploads/2026/03/IMG_8573-522x800.jpeg',
    rating: 4.7,
    reviews: 89,
    isFeatured: true,
  },
  {
    id: '4',
    name: 'Fabulous Four',
    category: 'Package',
    price: 1650,
    compareAtPrice: 1690,
    image: 'https://yoursobsession.com/wp-content/uploads/2026/02/IMG_7783-584x800.jpg',
    rating: 4.8,
    reviews: 124,
  },
];

const categories = [
  { name: 'Body Mist', count: 20, image: 'https://yoursobsession.com/wp-content/uploads/2026/02/IMG_7780-2.jpg', link: '/products?category=body-mist' },
  { name: 'Spray Perfume', count: 21, image: 'https://yoursobsession.com/wp-content/uploads/2026/02/IMG_8068-1.jpg', link: '/products?category=spray-perfume' },
  { name: 'Roll-on Perfume', count: 60, image: 'https://yoursobsession.com/wp-content/uploads/2026/02/IMG_7787-1.jpg', link: '/products?category=roll-on' },
  { name: 'Room Mist', count: 6, image: 'https://yoursobsession.com/wp-content/uploads/2026/02/IMG_7510-1.jpg', link: '/products?category=room-mist' },
  { name: 'Scented Candle', count: 7, image: 'https://yoursobsession.com/wp-content/uploads/2026/02/IMG_7772-1.jpg', link: '/products?category=candle' },
  { name: 'Packages', count: 13, image: 'https://yoursobsession.com/wp-content/uploads/2026/02/IMG_8353-2.jpg', link: '/products?category=packages' },
];

const features = [
  {
    icon: Sparkles,
    title: 'A Pioneer in Body Mist',
    description: 'One of the first brands to introduce premium-quality body mists in Bangladesh',
  },
  {
    icon: Star,
    title: 'Loved From Day One',
    description: 'Trusted and loved by thousands of customers from the very first launch',
  },
  {
    icon: Package,
    title: 'Budget Friendly',
    description: 'Quality without the luxury price tag - premium fragrances for everyone',
  },
  {
    icon: TruckIcon,
    title: 'Fast & Safe Delivery',
    description: 'Quick delivery with secure packaging across Bangladesh',
  },
];

export default function HomePage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <div className="bg-white">
      {/* Announcement Bar */}
      <div className="bg-obsession-primary text-white py-3 overflow-hidden">
        <div className="marquee-container">
          <div className="flex animate-marquee">
            <p className="text-sm font-medium whitespace-nowrap px-4">
              ✨ Ramadan Mubarak - The Eid Delights 1680 Taka • Al Kiswa by Obsession 999 Taka • Check out our packages for amazing offers ✨
            </p>
            <p className="text-sm font-medium whitespace-nowrap px-4">
              ✨ Ramadan Mubarak - The Eid Delights 1680 Taka • Al Kiswa by Obsession 999 Taka • Check out our packages for amazing offers ✨
            </p>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen overflow-hidden bg-gradient-to-br from-obsession-primary via-obsession-dark to-obsession-secondary">
        <motion.div
          style={{ opacity, scale }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-obsession-primary/60 via-obsession-primary/30 to-transparent z-10" />
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        </motion.div>

        <div className="relative z-20 h-full flex items-center">
          <div className="container-padding w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-3xl"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="inline-block mb-6"
              >
                <span className="px-4 py-2 bg-obsession-accent/90 backdrop-blur-sm text-white rounded-full text-sm font-medium">
                  Looking for your new favourites
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-6xl md:text-8xl font-display font-bold text-white mb-6 leading-tight"
              >
                Find Your{' '}
                <span className="text-gradient-gold">Obsession</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl md:text-2xl text-white/90 mb-8 font-light"
              >
                Uncompromised quality, quick service, and prices you'll love. From body mists to scented candles, discover fragrances that become your signature.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="flex flex-wrap gap-4"
              >
                <Link href="/products">
                  <button className="group px-8 py-4 bg-white text-obsession-primary rounded-full font-semibold text-lg hover:bg-obsession-accent hover:text-white transition-all duration-300 shadow-lg hover:shadow-glow-pink flex items-center gap-2">
                    Explore Collection
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
                <Link href="/products?category=packages">
                  <button className="px-8 py-4 bg-transparent text-white border-2 border-white rounded-full font-semibold text-lg hover:bg-white hover:text-obsession-primary transition-all duration-300">
                    View Packages
                  </button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-20 right-20 w-32 h-32 bg-obsession-accent/20 rounded-full blur-3xl"
        />
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-b from-obsession-light to-white">
        <div className="container-padding">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { value: '95%', label: 'Positive Reviews' },
              { value: '120K+', label: 'Satisfied Customers' },
              { value: '60%', label: 'Repeat Customers' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8"
              >
                <div className="text-5xl font-display font-bold text-obsession-primary mb-2">{stat.value}</div>
                <div className="text-lg text-neutral-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section-padding bg-white">
        <div className="container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-display font-bold text-obsession-primary mb-4">
              Explore Your Obsession
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Discover our curated collection of premium fragrances
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Link key={category.name} href={category.link}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group relative overflow-hidden rounded-2xl cursor-pointer h-64"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-obsession-dark via-obsession-dark/40 to-transparent z-10 group-hover:from-obsession-primary/90 transition-all duration-500" />
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 z-20 flex flex-col justify-end p-6">
                    <h3 className="text-2xl font-display font-bold text-white mb-1">
                      {category.name}
                    </h3>
                    <p className="text-white/80 text-sm mb-3">{category.count} products</p>
                    <div className="flex items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-sm font-medium">Explore</span>
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding bg-neutral-50">
        <div className="container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-display font-bold text-obsession-primary mb-4">
              The Best Sellers
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Tried, loved, and re-loved by thousands
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link href="/products">
              <button className="btn-primary">View All Products</button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gradient-obsession text-white">
        <div className="container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-4">
              Why People Are Obsessed
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Uncompromised quality, quick service, and prices you'll love
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                  <feature.icon className="w-8 h-8 text-obsession-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-padding">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-obsession-primary via-obsession-secondary to-obsession-accent p-12 md:p-20 text-center"
          >
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
                Too Cute to Choose Just One
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Because one obsession isn't enough - explore our exclusive packages
              </p>
              <Link href="/products?category=packages">
                <button className="px-10 py-5 bg-white text-obsession-primary rounded-full font-bold text-lg hover:bg-obsession-accent hover:text-white transition-all duration-300 shadow-lg">
                  Explore Packages
                </button>
              </Link>
            </div>

            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-obsession-accent/20 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Product Card Component
function ProductCard({ product, index }: { product: any; index: number }) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const discountPercentage = product.compareAtPrice
    ? Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100)
    : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card-product"
    >
      <div className="relative aspect-product overflow-hidden">
        {/* Badges */}
        <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
          {product.isBestSeller && (
            <span className="badge badge-featured">Best Seller</span>
          )}
          {product.isNewArrival && (
            <span className="badge badge-new">New</span>
          )}
          {discountPercentage > 0 && (
            <span className="badge badge-sale">-{discountPercentage}%</span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
        >
          <Heart
            className={`w-5 h-5 ${
              isWishlisted ? 'fill-red-500 text-red-500' : 'text-neutral-600'
            }`}
          />
        </button>

        {/* Product Image */}
        <div className="product-image-hover h-full">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Quick Add to Cart */}
        <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="w-full py-3 bg-white text-obsession-primary rounded-full font-semibold hover:bg-obsession-accent hover:text-white transition-colors flex items-center justify-center gap-2">
            <ShoppingBag className="w-5 h-5" />
            Add to Cart
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <p className="text-sm text-neutral-500 mb-1">{product.category}</p>
        <h3 className="text-lg font-semibold text-obsession-primary mb-2 line-clamp-1">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < Math.floor(product.rating)
                  ? 'fill-obsession-gold text-obsession-gold'
                  : 'text-neutral-300'
              }`}
            />
          ))}
          <span className="text-sm text-neutral-600 ml-1">
            ({product.reviews})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-obsession-primary">
            ৳{product.price}
          </span>
          {product.compareAtPrice && (
            <span className="text-sm text-neutral-400 line-through">
              ৳{product.compareAtPrice}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
