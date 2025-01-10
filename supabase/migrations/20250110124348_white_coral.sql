/*
  # Add Dream Room Products
  
  1. New Products
    - Adds luxury children's beds and playhouses
    - All products in "Toys & Baby" category with "chambre de reve" description
    - Prices converted from MAD to USD (approximate conversion)
    - All products set with stock of 1
*/

INSERT INTO products (name, slug, description, price, category_id, image_url, stock, author, rating, reviews_count)
SELECT 
  'lit cabane',
  'lit-cabane-dream-1',
  'chambre de reve',
  1750, -- Converted from 17,500 MAD
  c.id,
  'https://hkids.store/cdn/shop/files/374267220_747246220538261_8186366465657023869_n.jpg',
  1,
  'hkids',
  4.5,
  0
FROM categories c WHERE c.slug = 'toys-baby'
UNION ALL
SELECT 
  'Natty bunk bed',
  'natty-bunk-bed',
  'chambre de reve',
  1600, -- Converted from 16,000 MAD
  c.id,
  'https://hkids.store/cdn/shop/files/WhatsAppImage2023-11-10at06.10.54.jpg',
  1,
  'hkids',
  4.5,
  0
FROM categories c WHERE c.slug = 'toys-baby'
UNION ALL
SELECT 
  'Lit tower',
  'lit-tower',
  'chambre de reve',
  2500, -- Converted from 25,000 MAD
  c.id,
  'https://hkids.store/cdn/shop/files/WhatsAppImage2023-11-13at11.26.57_1.jpg',
  1,
  'hkids',
  4.5,
  0
FROM categories c WHERE c.slug = 'toys-baby'
UNION ALL
SELECT 
  'Lit teintes en harmonie',
  'lit-teintes-harmonie',
  'chambre de reve',
  750, -- Converted from 7,500 MAD
  c.id,
  'https://hkids.store/cdn/shop/files/WhatsAppImage2023-11-07at14.24.24.jpg',
  1,
  'hkids',
  4.5,
  0
FROM categories c WHERE c.slug = 'toys-baby'
UNION ALL
SELECT 
  'Lit Spaceship',
  'lit-spaceship',
  'chambre de reve',
  2800, -- Converted from 28,000 MAD
  c.id,
  'https://hkids.store/cdn/shop/files/WhatsAppImage2023-11-10at06.10.58.jpg',
  1,
  'hkids',
  4.5,
  0
FROM categories c WHERE c.slug = 'toys-baby'
UNION ALL
SELECT 
  'Lit shed house',
  'lit-shed-house',
  'chambre de reve',
  1500, -- Converted from 15,000 MAD
  c.id,
  'https://hkids.store/cdn/shop/files/WhatsAppImage2023-11-10at06.10.58_1.jpg',
  1,
  'hkids',
  4.5,
  0
FROM categories c WHERE c.slug = 'toys-baby'
UNION ALL
SELECT 
  'Lit point de joie',
  'lit-point-joie',
  'chambre de reve',
  2700, -- Converted from 27,000 MAD
  c.id,
  'https://hkids.store/cdn/shop/files/WhatsAppImage2023-11-13at11.25.29.jpg',
  1,
  'hkids',
  4.5,
  0
FROM categories c WHERE c.slug = 'toys-baby'
UNION ALL
SELECT 
  'Lit playground',
  'lit-playground',
  'chambre de reve',
  2600, -- Converted from 26,000 MAD
  c.id,
  'https://hkids.store/cdn/shop/files/WhatsAppImage2023-11-13at11.25.00.jpg',
  1,
  'hkids',
  4.5,
  0
FROM categories c WHERE c.slug = 'toys-baby'
UNION ALL
SELECT 
  'Lit nuits de rêve',
  'lit-nuits-reve',
  'chambre de reve',
  850, -- Converted from 8,500 MAD
  c.id,
  'https://hkids.store/cdn/shop/files/WhatsAppImage2023-11-10at17.19.12.jpg',
  1,
  'hkids',
  4.5,
  0
FROM categories c WHERE c.slug = 'toys-baby'
UNION ALL
SELECT 
  'Lit maison',
  'lit-maison',
  'chambre de reve',
  2500, -- Converted from 25,000 MAD
  c.id,
  'https://hkids.store/cdn/shop/files/WhatsAppImage2023-11-14at10.00.40_9.jpg',
  1,
  'hkids',
  4.5,
  0
FROM categories c WHERE c.slug = 'toys-baby'
UNION ALL
SELECT 
  'Lit Livre sous lumière',
  'lit-livre-lumiere',
  'chambre de reve',
  850, -- Converted from 8,500 MAD
  c.id,
  'https://hkids.store/cdn/shop/files/WhatsAppImage2023-11-10at16.39.11_1.jpg',
  1,
  'hkids',
  4.5,
  0
FROM categories c WHERE c.slug = 'toys-baby'
UNION ALL
SELECT 
  'Lit histoires à fenêtre',
  'lit-histoires-fenetre',
  'chambre de reve',
  1200, -- Converted from 12,000 MAD
  c.id,
  'https://hkids.store/cdn/shop/files/WhatsAppImage2023-11-07at14.24.30.jpg',
  1,
  'hkids',
  4.5,
  0
FROM categories c WHERE c.slug = 'toys-baby';