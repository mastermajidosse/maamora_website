import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Laptop, 
  Baby, 
  Cat, 
  Home, 
  BookOpen, 
  Dumbbell, 
  Sparkles, 
  Shirt
} from 'lucide-react';
import { supabase } from '../../lib/supabase';

interface Category {
  id: string;
  name: string;
  slug: string;
}

export function CategoryGrid() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const { data, error } = await supabase
        .from('categories')
        .select('*')
        .not('slug', 'in', '(cars,food)')
        .order('name');

      if (error) throw error;
      setCategories(data || []);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const getCategoryIcon = (slug: string) => {
    switch (slug) {
      case 'electronics': return Laptop;
      case 'toys-baby': return Baby;
      case 'pets': return Cat;
      case 'home-decor': return Home;
      case 'books': return BookOpen;
      case 'sports': return Dumbbell;
      case 'health-beauty': return Sparkles;
      case 'clothes': return Shirt;
      default: return Home;
    }
  };

  const getCategoryColor = (slug: string) => {
    switch (slug) {
      case 'electronics': return 'text-blue-600';
      case 'toys-baby': return 'text-pink-500';
      case 'pets': return 'text-orange-500';
      case 'home-decor': return 'text-green-600';
      case 'books': return 'text-purple-600';
      case 'sports': return 'text-red-500';
      case 'health-beauty': return 'text-teal-500';
      case 'clothes': return 'text-indigo-500';
      default: return 'text-gray-600';
    }
  };

  return (
    <section className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-4 sm:grid-cols-8 gap-4">
          {categories.map((category) => {
            const Icon = getCategoryIcon(category.slug);
            const colorClass = getCategoryColor(category.slug);
            
            return (
              <Link 
                key={category.id}
                to="/products" 
                state={{ selectedCategory: category.name }}
                className="flex flex-col items-center gap-2 text-center group"
              >
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center transition-colors group-hover:bg-gray-200">
                  <Icon className={`w-6 h-6 ${colorClass} transition-colors group-hover:text-primary`} />
                </div>
                <span className="text-xs text-gray-600 group-hover:text-primary">{category.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}