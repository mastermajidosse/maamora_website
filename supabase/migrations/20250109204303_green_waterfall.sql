/*
  # Update product images

  1. Changes
    - Update image URLs for all products to match their categories and descriptions
    - Use high-quality Unsplash images that match each product
*/

-- Update Books
UPDATE products 
SET image_url = 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800'
WHERE slug = 'hebrew-woman-in-my-heart';

UPDATE products 
SET image_url = 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800'
WHERE slug = 'art-of-not-giving';

UPDATE products 
SET image_url = 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800'
WHERE slug = 'the-alchemist';

-- Update Electronics
UPDATE products 
SET image_url = 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&q=80&w=800'
WHERE slug = 'samsung-galaxy-s21';

UPDATE products 
SET image_url = 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=800'
WHERE slug = 'macbook-pro-m3';

-- Update Fashion
UPDATE products 
SET image_url = 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800'
WHERE slug = 'casual-mens-tshirt';

UPDATE products 
SET image_url = 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&q=80&w=800'
WHERE slug = 'elegant-evening-dress';

-- Update Beauty
UPDATE products 
SET image_url = 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=800'
WHERE slug = 'maybelline-matte-lipstick';

-- Update Home Decor
UPDATE products 
SET image_url = 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&q=80&w=800'
WHERE slug = 'wall-decor-set';

-- Update Sports
UPDATE products 
SET image_url = 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&q=80&w=800'
WHERE slug = 'resistance-bands';

-- Update Food
UPDATE products 
SET image_url = 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&q=80&w=800'
WHERE slug = 'natural-honey';

-- Update Cars
UPDATE products 
SET image_url = 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=800'
WHERE slug = 'car-seat-cover';