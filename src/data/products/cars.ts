import { Product } from '../../types/product';

export const cars: Product[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=800',
    name: 'Tesla Model 3',
    description: 'All-electric sedan with autopilot capabilities',
    categoryId: "Cars",
    author: "AutoDealer",
    rating: 4.9,
    reviews: 892,
    discount: 5,
    price: 42999,
    date: new Date().toISOString(),
    inStock: 10,
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1617654112368-307921291f42?auto=format&fit=crop&q=80&w=800',
    name: 'BMW M4 Competition',
    description: 'High-performance luxury sports coupe',
    categoryId: "Cars",
    author: "AutoDealer",
    rating: 4.8,
    reviews: 456,
    discount: 8,
    price: 74999,
    date: new Date().toISOString(),
    inStock: 5,
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1619682817481-e994891cd1f5?auto=format&fit=crop&q=80&w=800',
    name: 'Range Rover Sport',
    description: 'Luxury SUV with off-road capabilities',
    categoryId: "Cars",
    author: "AutoDealer",
    rating: 4.7,
    reviews: 634,
    discount: 10,
    price: 89999,
    date: new Date().toISOString(),
    inStock: 8,
  }
];