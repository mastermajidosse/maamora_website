import { Product } from '../../types/product';

export const kids: Product[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&q=80&w=800',
    name: 'Educational Building Blocks',
    description: '100-piece colorful learning blocks set',
    categoryId: "Kids",
    author: "Lisa",
    rating: 4.8,
    reviews: 320,
    discount: 20,
    price: 49.99,
    date: new Date().toISOString(),
    inStock: 50,
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1584661156681-540e80a161d3?auto=format&fit=crop&q=80&w=800',
    name: 'Kids Smart Watch',
    description: 'Child-friendly smartwatch with GPS tracking',
    categoryId: "Kids",
    author: "Lisa",
    rating: 4.6,
    reviews: 185,
    discount: 15,
    price: 79.99,
    date: new Date().toISOString(),
    inStock: 25,
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=800',
    name: 'Art Supply Set',
    description: 'Complete art kit for young artists',
    categoryId: "Kids",
    author: "Lisa",
    rating: 4.7,
    reviews: 230,
    discount: 10,
    price: 39.99,
    date: new Date().toISOString(),
    inStock: 40,
  }
];