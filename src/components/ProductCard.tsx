import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { Product } from '../types/product';
import { calculateDiscountedPrice, formatPrice } from '../utils/product';
import { useCart } from '../contexts/CartContext';

interface ProductCardProps {
  product: Product;
  featured?: boolean;
}

export function ProductCard({ product, featured = false }: ProductCardProps) {
  const discountedPrice = calculateDiscountedPrice(product.price, product.discount);
  const { dispatch } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch({ 
      type: 'ADD_ITEM', 
      payload: {
        ...product,
        image: product.image_url,
        categoryId: product.category_id,
        reviews: product.reviews_count
      }
    });
  };

  const handleClick = () => {
    navigate(`/products/${product.id}`);
  };
  if (featured) {
    return (
      <div 
        onClick={handleClick}
        className="group cursor-pointer bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
      >
        <div className="aspect-square overflow-hidden">
          <img
            src={product.image_url}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium text-gray-900 mb-1 truncate">{product.name}</h3>
          <p className="text-sm text-gray-500 mb-2">{product.category_id}</p>
          <div className="text-lg font-bold text-gray-900">{formatPrice(discountedPrice)} dhs</div>
        </div>
      </div>
    );
  }

  return (
    <div className="group cursor-pointer bg-gray-50 p-4 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300" onClick={handleClick}>
      <div className="aspect-square overflow-hidden bg-gray-100 rounded-lg relative">
        <img
          src={product.image_url}
          alt={product.name}
          className="h-full w-full object-cover object-center group-hover:scale-105 transition-all duration-300"
        />
        {product.discount > 0 && (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
            -{product.discount}%
          </div>
        )}
      </div>
      <div className="mt-4 space-y-1">
        <h3 className="text-base font-semibold text-gray-900 truncate group-hover:text-[#fb7701] transition-colors">{product.name}</h3>
        <p className="text-sm text-gray-500 truncate">{product.author}</p>
        <div className="flex items-center justify-between mt-2">
          <span className="text-lg font-bold text-[#fb7701]">
            {formatPrice(discountedPrice)} dhs
          </span>
          <div>
            {product.discount > 0 && (
              <span className="text-sm text-gray-400 line-through">
                {formatPrice(product.price)} dhs
              </span>
            )}
          </div>
        </div>
      </div>
      <button
        onClick={handleAddToCart}
        className="w-full mt-4 bg-gray-50 border-2 border-gray-200 text-black py-2.5 rounded-xl font-semibold hover:bg-[#fb7701] hover:text-white transition-all duration-300"
      >
        Add
      </button>
    </div>
  );
}