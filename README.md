# Obsession Fragrance - E-commerce Website

Premium e-commerce platform for Obsession Fragrance, built with Next.js 14.

**Developed by Pratik Studios**

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 📦 What's Included

- ✅ Full e-commerce functionality
- ✅ Product catalog with categories
- ✅ Shopping cart system
- ✅ User authentication ready
- ✅ Payment gateway integration ready
- ✅ MongoDB database integration
- ✅ Responsive design
- ✅ SEO optimized

---

## 🌐 Deploy to Vercel

**Read DEPLOY.md for complete step-by-step instructions!**

Quick summary:
1. Set up MongoDB Atlas (free)
2. Push to GitHub
3. Import to Vercel
4. Add environment variables
5. Deploy!

---

## 🔑 Required Environment Variables

Add these in Vercel dashboard:

```bash
MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_SECRET=your_generated_secret
NEXTAUTH_URL=https://your-project.vercel.app
```

See DEPLOY.md for detailed instructions on getting these values.

---

## 📁 Project Structure

```
src/
├── app/              # Next.js app router pages
├── components/       # React components
├── lib/             # Utilities (MongoDB, Stripe)
├── models/          # Database models
├── types/           # TypeScript types
└── styles/          # Global styles

public/
└── images/          # Static assets
```

---

## 🛠️ Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Database:** MongoDB
- **Auth:** NextAuth.js
- **Payments:** Stripe + SSLCommerz ready

---

## 📝 Documentation

- **DEPLOY.md** - Complete deployment guide
- **GITHUB_ALERT_FIX.md** - How to resolve GitHub secret alerts

---

## 🎯 Features

### Customer Features
- Product browsing & search
- Shopping cart
- Wishlist
- User accounts
- Order tracking
- Multiple payment options

### Admin Features
- Product management (add when needed)
- Order management (add when needed)
- Customer management (add when needed)

---

## 🔒 Security

- Password hashing with bcrypt
- JWT authentication
- Environment variables for secrets
- HTTPS ready
- CORS configured

---

## 📞 Support

**Developer:** Pratik Studios  
**Website:** pratiksaha.vercel.app

---

## 📄 License

Proprietary - Developed for Obsession Fragrance

---

**Built with ❤️ by Pratik Studios**
