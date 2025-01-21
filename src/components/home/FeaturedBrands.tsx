import React from 'react';
import { Link } from 'react-router-dom';

export function FeaturedBrands() {
  const brands = [
    {
      id: 1,
      name: 'Lampa',
      image: 'https://lampa.ma/cdn/shop/files/IMG_20240315_173516_387.webp?v=1710525234',
      site:'https://lampa.ma',
      category: 'Light'
    },
    {
      id: 2,
      name: 'MonCoussin',
      image: 'https://moncoussindeco.ma/wp-content/uploads/2024/12/2A2A9166-scaled.jpg',
      site:'https://moncoussindeco.ma',

      category: 'maison'
    },
    {
      id: 3,
      name: 'Cactusia',
      image: 'https://www.cactusia.ma/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fcactusia-983c2.appspot.com%2Fo%2Fimages%252F1708114794861%3Falt%3Dmedia%26token%3D03586f4b-ee20-48ee-a1a2-250567a2e2f9&w=1080&q=75',
      site:'https://www.cactusia.ma/',
      category: 'decor'
    },
    {
      id: 4,
      name: 'Decozen',
      image: 'https://assets.lightfunnels.com/account-26352/images_library/9ce795d7-906d-4877-a5ff-94b925f58521.Artboard%201%20copy-min.png',
      site:'https://www.decozen.ma',
      category: 'decor'
    },
    {
      id: 5,
      name: 'Artislandy',
      image: 'https://www.artislandy.ma/cdn/shop/files/shopif_TRUE.png?v=1727458217&width=1946',
      site:'https://www.artislandy.ma',
      category: 'wood'
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-8">Featured Marketplaces</h2>
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-6">
          {brands.map((brand) => (
            <Link
              key={brand.id}
              to={brand.site}
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