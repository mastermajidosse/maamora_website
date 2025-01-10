import { useState, useEffect } from 'react';
import { Product } from '../types/product';
import { supabase } from '../lib/supabase';

// Helper function to build search conditions
function buildSearchCondition(searchQuery: string): string {
  const words = searchQuery.trim().split(/\s+/);
  const searchableWords = words.filter(word => word.length >= 4);
  
  if (searchableWords.length > 0) {
    return searchableWords
      .map(word => `or(name.ilike.%${word}%,description.ilike.%${word}%,author.ilike.%${word}%)`)
      .join(',');
  }
  
  // If no words are long enough, use the first word
  return `or(name.ilike.%${words[0]}%,description.ilike.%${words[0]}%,author.ilike.%${words[0]}%)`;
}

export function useProducts(selectedCategory: string = 'All', searchQuery: string = '') {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        setError(null);

        let query = supabase
          .from('products')
          .select('*, categories:category_id(*)');

        // Apply category filter
        if (selectedCategory !== 'All') {
          const { data: categoryData } = await supabase
            .from('categories')
            .select('id')
            .eq('name', selectedCategory)
            .single();

          if (categoryData) {
            query = query.eq('category_id', categoryData.id);
          }
        }

        // Apply search filter
        if (searchQuery.trim()) {
          const searchCondition = buildSearchCondition(searchQuery);
          query = query.or(searchCondition);
        }

        const { data, error: fetchError } = await query;

        if (fetchError) throw fetchError;
        setProducts(data || []);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Failed to load products');
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [selectedCategory, searchQuery]);

  return { products, loading, error };
}