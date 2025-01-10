/*
  # Update Categories

  1. Changes
    - Update existing categories to match the homepage categories
    - Add new categories: Toys & Baby, Pets, Health & Beauty, Clothes
*/

-- Update existing categories
UPDATE categories
SET name = 'Toys & Baby', slug = 'toys-baby', description = 'Products for babies and children'
WHERE slug = 'kids';

-- Insert new categories
INSERT INTO categories (name, slug, description)
VALUES 
  ('Pets', 'pets', 'Pet supplies and accessories'),
  ('Health & Beauty', 'health-beauty', 'Health and beauty products'),
  ('Clothes', 'clothes', 'Fashion and apparel')
ON CONFLICT (slug) DO NOTHING;