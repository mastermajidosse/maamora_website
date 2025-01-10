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
          <h3 className="text-lg font-medium text-gray-900 mb-1">{product.name}</h3>
          <p className="text-sm text-gray-500 mb-2">{product.category_id}</p>
          <div className="text-lg font-bold text-gray-900">{formatPrice(discountedPrice)} dhs</div>
        </div>
      </div>
    );
  }

  return (
    <div className="group cursor-pointer" onClick={handleClick}>
      <div className="aspect-square overflow-hidden bg-gray-100 rounded-lg relative">
        <img
          src={product.image_url}
          alt={product.name}
          className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
        />
        {product.discount > 0 && (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
            -{product.discount}%
          </div>
        )}
      </div>
      <div className="mt-4 space-y-1">
        <h3 className="text-sm font-medium text-gray-900 line-clamp-2">{product.name}</h3>
        <p className="text-sm text-gray-500 line-clamp-1">{product.author}</p>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-900">
            {formatPrice(discountedPrice)} dhs
          </span>
          {product.discount > 0 && (
            <span className="text-sm text-gray-500 line-through">
              {formatPrice(product.price)} dhs
            </span>
          )}
        </div>
      </div>
      <button
        onClick={handleAddToCart}
        className="w-full mt-2 flex items-center justify-center gap-2 bg-[#fb7701] text-white py-2 rounded-lg font-medium hover:bg-[#e66901] transition-colors"
      >
        <ShoppingCart className="w-4 h-4" />
        Add to Cart
      </button>
    </div>
  );
}