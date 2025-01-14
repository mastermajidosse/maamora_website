import React from 'react';
import { ProductCard } from './ProductCard';
import { Product } from '../types/product';

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={`${product.categoryId}-${product.id}`} product={product} />
      ))}
    </div>
  );
}