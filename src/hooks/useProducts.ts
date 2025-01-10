import { useState, useEffect } from 'react';
import { Product } from '../types/product';
import { supabase } from '../lib/supabase';

// Helper function to normalize Arabic text for search
function normalizeArabicText(text: string): string {
  return text
    .trim()
    .toLowerCase()
    .replace(/[ًٌٍَُِّْ]/g, '') // Remove tashkeel
    .replace(/[إأآ]/g, 'ا') // Normalize alef
    .replace(/[ى]/g, 'ي') // Normalize yaa
    .replace(/[ة]/g, 'ه'); // Normalize taa marbouta
}

export function useProducts(selectedCategory: string, searchQuery: string = '') {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    fetchProducts();
  }, [selectedCategory, searchQuery]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);

      let query = supabase
        .from('products')
        .select(`
          *,
          categories:category_id (
            name,
            slug
          )
        `);

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

      // Apply search filter using Supabase's full-text search
      if (searchQuery.trim()) {
        const normalizedQuery = normalizeArabicText(searchQuery.trim());
        query = query.or(
          `name.ilike.%${normalizedQuery}%,` +
          `description.ilike.%${normalizedQuery}%,` +
          `author.ilike.%${normalizedQuery}%`
        );
      }

      const { data, error: fetchError } = await query;

      if (fetchError) throw fetchError;
      setProducts(data || []);
      setFilteredProducts(data || []);

    } catch (err) {
      console.error('Error fetching products:', err);
      setError('Failed to load products');
      setProducts([]);
      setFilteredProducts([]);
    } finally {
      setLoading(false);
    }
  };

  return { products, filteredProducts, loading, error };
}