import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Product from '@/models/Product';

export async function GET(request: NextRequest) {
  try {
    await dbConnect();

    const searchParams = request.nextUrl.searchParams;
    const category = searchParams.get('category');
    const filter = searchParams.get('filter');
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '12');
    const sort = searchParams.get('sort') || '-createdAt';

    // Build query
    const query: any = { isInStock: true };

    if (category && category !== 'all') {
      query.category = category.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ');
    }

    if (filter === 'featured') {
      query.isFeatured = true;
    } else if (filter === 'new-arrivals') {
      query.isNewArrival = true;
    } else if (filter === 'best-sellers') {
      query.isBestSeller = true;
    }

    // Execute query with pagination
    const skip = (page - 1) * limit;
    
    const [products, totalCount] = await Promise.all([
      Product.find(query)
        .sort(sort)
        .limit(limit)
        .skip(skip)
        .lean(),
      Product.countDocuments(query),
    ]);

    const totalPages = Math.ceil(totalCount / limit);

    return NextResponse.json({
      success: true,
      data: products,
      pagination: {
        page,
        limit,
        totalPages,
        totalItems: totalCount,
        hasMore: page < totalPages,
      },
    });
  } catch (error: any) {
    console.error('Products API Error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch products',
        message: error.message,
      },
      { status: 500 }
    );
  }
}
