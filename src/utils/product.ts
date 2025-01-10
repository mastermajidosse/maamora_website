import { Product } from '../types/product';

export function calculateDiscountedPrice(price: number, discount: number): number {
  return price * (1 - discount / 100);
}

export function formatPrice(price: number): string {
  return price.toFixed(2);
}

export function sortProducts(products: Product[], sortBy: string): Product[] {
  switch (sortBy) {
    case 'newest':
      return [...products].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    case 'price-asc':
      return [...products].sort((a, b) => a.price - b.price);
    case 'price-desc':
      return [...products].sort((a, b) => b.price - a.price);
    default:
      return [...products].sort((a, b) => b.rating - a.rating);
  }
}