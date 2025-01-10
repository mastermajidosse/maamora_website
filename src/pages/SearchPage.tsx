import React from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { ProductGrid } from '../components/ProductGrid';
import { FilterSidebar } from '../components/FilterSidebar';
import { ProductSort } from '../components/ProductSort';
import { useProducts } from '../hooks/useProducts';
import { sortProducts } from '../utils/product';
import { categories } from '../data/categories';
import { Search } from 'lucide-react';

export function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const query = searchParams.get('q') || '';
  const [selectedCategory, setSelectedCategory] = React.useState<Category | 'All'>('All');
  const [sortBy, setSortBy] = React.useState('popular');
  const [searchInput, setSearchInput] = React.useState(query);
  
  const { filteredProducts } = useProducts(selectedCategory, query);
  const sortedProducts = sortProducts(filteredProducts, sortBy);

  // Reset search when category changes
  React.useEffect(() => {
    if (selectedCategory !== 'All') {
      setSearchParams({});
    }
  }, [selectedCategory]);

  const handleSearch = () => {
    if (searchInput.trim()) {
      setSearchParams({ q: searchInput.trim() });
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category as Category | 'All');
    setSearchInput('');
    if (category === 'All') {
      navigate('/products');
    } else {
      // Clear search params and navigate to current URL without query
      setSearchParams({});
      navigate(location.pathname);
    }
  };

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="max-w-2xl mx-auto">
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Search products..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyPress={handleKeyPress}
                className="w-full pl-4 pr-14 py-2.5 bg-white border border-gray-200 rounded-full focus:outline-none focus:border-[#fb7701] focus:ring-1 focus:ring-[#fb7701] transition-colors"
              />
              <button 
                onClick={handleSearch}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#fb7701] text-white p-2 rounded-full hover:bg-[#e66901] transition-colors"
              >
                <Search className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          <FilterSidebar 
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />
          
          <div className="flex-1">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-2xl font-medium text-gray-900 mb-2">
                  {query ? 'Search Results' : `${selectedCategory} Products`}
                </h2>
                {query && (
                  <p className="text-gray-600">
                    {sortedProducts.length} results for "{query}"
                  </p>
                )}
              </div>
              <ProductSort onChange={setSortBy} />
            </div>
            
            {sortedProducts.length > 0 ? (
              <ProductGrid products={sortedProducts} />
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No products found matching your search.</p>
                <p className="text-gray-400 mt-2">Try adjusting your search or filters.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}