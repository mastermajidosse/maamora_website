import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Mycategories } from '../data/categories';
import { Book, Baby, Shirt, Laptop, Home, Dog, Sparkles, Trophy, Gamepad2, Apple, Car, Grid } from 'lucide-react';

interface Category {
  name: string;
  slug: string;
}

interface FilterSidebarProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'All':
      return <Grid className="w-6 h-6" />;
    case 'books':
      return <Book className="w-6 h-6" />;
    case 'toys-baby':
      return <Baby className="w-6 h-6" />;
    case 'clothes':
      return <Shirt className="w-6 h-6" />;
    case 'electronics':
      return <Laptop className="w-6 h-6" />;
    case 'home-decor':
      return <Home className="w-6 h-6" />;
    case 'pets':
      return <Dog className="w-6 h-6" />;
    case 'health-beauty':
      return <Sparkles className="w-6 h-6" />;
    case 'sports':
      return <Trophy className="w-6 h-6" />;
    case 'gaming-accessories':
      return <Gamepad2 className="w-6 h-6" />;
    case 'food':
      return <Apple className="w-6 h-6" />;
    case 'cars':
      return <Car className="w-6 h-6" />;
    default:
      return null;
  }
};

export function FilterSidebar({ selectedCategory, onCategoryChange }: FilterSidebarProps) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCategories();
  }, []);

  // const desiredOrder = ['books', 'toys-baby', 'clothes', 'electronics', 'home-decor', 'pets', 'health-beauty', 'sports','food','cars'];

  const fetchCategories = async () => {
    try {
      const { data, error } = await supabase
        .from('categories')
        .select('name, slug')
        .order('name');

      if (error) throw error;

      // Sort fetched categories based on desired order
      const sortedCategories = data.sort((a, b) => {
        const indexA = Mycategories.indexOf(a.slug);
        const indexB = Mycategories.indexOf(b.slug);
        return indexA - indexB;
      });

      sortedCategories.unshift({
        name: "All",
        slug: "All"
    });

      setCategories(sortedCategories);
    } catch (error) {
      console.error('Error fetching categories:', error);
    } finally {
      setLoading(false);
    }
  };
  

  if (loading) {
    return <div className="w-64 pr-8">Loading categories...</div>;
  }
 
  return (
    <div className="w-full lg:w-64 lg:flex-shrink-0">
      <h3 className="text-lg font-medium text-gray-900 mb-4 hidden lg:block">Categories</h3>
      <div className="grid grid-cols-4 gap-2 lg:flex lg:flex-col">
        {categories.map((category) => (
          <button
            key={category.name}
            onClick={() => onCategoryChange(category.name)}
            className={`flex flex-col lg:flex-row items-center lg:items-start gap-1 p-2 lg:px-4 lg:py-2 rounded-lg transition-colors lg:w-full ${
              selectedCategory === category.name
                ? 'bg-[#fb7701] text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <span className="lg:hidden">
              {getCategoryIcon(category.slug)}
            </span>
            <span className="text-xs lg:text-base lg:ml-2">
              {category.name === 'All' ? 'All' : category.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
  // (
  //   <div className="max-w-md w-12 pr-8 sm:w-64">
  //     <div className="space-y-8">
  //       <div>
  //         <h3 className="text-lg font-medium text-gray-900 mb-4">Categories</h3>
  //         <div className="space-y-3">
  //           <label className="flex items-center">
  //             <input
  //               type="radio"
  //               name="category"
  //               checked={selectedCategory === 'All'}
  //               onChange={() => onCategoryChange('All')}
  //               className="h-4 w-4 border-gray-300 text-black focus:ring-black"
  //             />
  //             <span className="ml-3 text-xs sm:text-sm text-gray-600">All Categories</span>
  //           </label>
  //           {categories.map((category) => (
  //             <label key={category.slug} className="flex items-center">
  //               <input
  //                 type="radio"
  //                 name="category"
  //                 checked={category.name === selectedCategory}
  //                 onChange={() => onCategoryChange(category.name)}
  //                 className="h-4 w-4 border-gray-300 text-black focus:ring-black"
  //               />
  //               <span className="ml-3 text-sm text-gray-600">{category.name}</span>
  //             </label>
  //           ))}
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
}