import React from 'react';
import { Link } from 'react-router-dom';

export function FeaturedBrands() {
  const brands = [
    {
      id: 1,
      name: 'Nike',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=300',
      category: 'Sports'
    },
    {
      id: 2,
      name: 'Apple',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=300',
      category: 'Electronics'
    },
    {
      id: 3,
      name: 'Samsung',
      image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&q=80&w=300',
      category: 'Electronics'
    },
    {
      id: 4,
      name: 'Adidas',
      image: 'https://images.unsplash.com/photo-1518002171953-a080ee817e1f?auto=format&fit=crop&q=80&w=300',
      category: 'Sports'
    },
    {
      id: 5,
      name: 'Sony',
      image: 'https://images.unsplash.com/photo-1585399000684-d2f72660f092?auto=format&fit=crop&q=80&w=300',
      category: 'Electronics'
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-8">Featured Brands</h2>
        <div className="grid grid-cols-5 gap-6">
          {brands.map((brand) => (
            <Link
              key={brand.id}
              to={`/products`}
              state={{ selectedCategory: brand.category }}
              className="group"
            >
              <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="mt-3 text-center font-medium text-gray-900 group-hover:text-[#fb7701]">
                {brand.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}