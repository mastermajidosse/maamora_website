import React from 'react';
import { CategoryGrid } from '../components/home/CategoryGrid';
import { FeaturedProducts } from '../components/home/FeaturedProducts';
import { FeaturedBrands } from '../components/home/FeaturedBrands';
import { SpecialOffers } from '../components/home/SpecialOffers';
import { TrendingProducts } from '../components/home/TrendingProducts';
import { Newsletter } from '../components/home/Newsletter';

export function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <CategoryGrid />
      <FeaturedProducts />
      <FeaturedBrands />
      <SpecialOffers />
      <TrendingProducts />
      <Newsletter />
    </div>
  );
}