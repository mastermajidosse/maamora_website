import React from 'react';
import { ChevronDown } from 'lucide-react';

interface ProductSortProps {
  onChange: (value: string) => void;
}

export function ProductSort({ onChange }: ProductSortProps) {
  const options = [
    { value: 'newest', label: 'Newest Arrivals' },
    { value: 'popular', label: 'Most Popular' },
    { value: 'price-asc', label: 'Price: Low to High' },
    { value: 'price-desc', label: 'Price: High to Low' }
  ];

  return (
    <div className="relative">
      <select 
        onChange={(e) => onChange(e.target.value)}
        defaultValue="newest"
        className="appearance-none bg-white pl-4 pr-10 py-2.5 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:border-gray-300 focus:outline-none focus:border-[#fb7701] focus:ring-1 focus:ring-[#fb7701] cursor-pointer transition-colors"
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
        <ChevronDown className="h-4 w-4" />
      </div>
    </div>
  );
}