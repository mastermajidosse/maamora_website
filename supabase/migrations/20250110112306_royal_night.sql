/*
  # Update Categories

  1. Changes
    - Remove Beauty and Fashion categories
    - Update product categories to maintain data integrity
*/

-- Delete Beauty and Fashion categories
DELETE FROM categories WHERE slug IN ('beauty', 'fashion');

-- Update any products that were in those categories to a default category
UPDATE products 
SET category_id = (SELECT id FROM categories WHERE slug = 'clothes')
WHERE category_id IN (
  SELECT id FROM categories WHERE slug IN ('beauty', 'fashion')
);