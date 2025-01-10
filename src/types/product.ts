export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  discount: number;
  category_id: string;
  image_url: string;
  stock: number;
  author: string;
  rating: number;
  reviews_count: number;
  created_at: string;
  updated_at: string;
  categories?: {
    id: string;
    name: string;
    slug: string;
  };
}