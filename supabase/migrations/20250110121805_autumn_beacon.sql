/*
  # Add Toys & Baby Products
  
  1. New Products
    - Adds multiple Montessori-style beds and furniture items
    - All products set with stock of 1
    - All products in "Toys & Baby" category
    - Prices converted from MAD to USD (approximate conversion)
*/

INSERT INTO products (name, slug, description, price, category_id, image_url, stock, author, rating, reviews_count)
SELECT 
  'Lit Cabane',
  'lit-cabane-1',
  'Chambre Montessori',
  350, -- Converted from 3,500 MAD
  c.id,
  'https://hkids.store/cdn/shop/files/WhatsAppImage2023-11-14at10.00.40_7.jpg',
  1,
  'hkids',
  4.5,
  0
FROM categories c WHERE c.slug = 'toys-baby'
UNION ALL
SELECT 
  'Lit Montessori',
  'lit-montessori-1',
  'Chambre Montessori',
  380, -- Converted from 3,800 MAD
  c.id,
  'https://hkids.store/cdn/shop/files/WhatsAppImage2023-11-14at10.00.40_8.jpg',
  1,
  'hkids',
  4.5,
  0
FROM categories c WHERE c.slug = 'toys-baby'
UNION ALL
SELECT 
  'Lit cabane',
  'lit-cabane-2',
  'Chambre Montessori',
  400, -- Converted from 4,000 MAD
  c.id,
  'https://hkids.store/cdn/shop/files/LitCabane.jpg',
  1,
  'hkids',
  4.5,
  0
FROM categories c WHERE c.slug = 'toys-baby'
UNION ALL
SELECT 
  'Le lit Montessori Tiny',
  'lit-montessori-tiny-1',
  'Chambre Montessori',
  420, -- Converted from 4,200 MAD
  c.id,
  'https://hkids.store/cdn/shop/files/WhatsAppImage2023-11-14at10.00.40_5.jpg',
  1,
  'hkids',
  4.5,
  0
FROM categories c WHERE c.slug = 'toys-baby'
UNION ALL
SELECT 
  'Lit Montessori tiny',
  'lit-montessori-tiny-2',
  'Chambre Montessori',
  420, -- Converted from 4,200 MAD
  c.id,
  'https://hkids.store/cdn/shop/files/WhatsAppImage2023-11-14at10.00.40_10.jpg',
  1,
  'hkids',
  4.5,
  0
FROM categories c WHERE c.slug = 'toys-baby'
UNION ALL
SELECT 
  'Lit montessori',
  'lit-montessori-2',
  'Chambre Montessori',
  420, -- Converted from 4,200 MAD
  c.id,
  'https://hkids.store/cdn/shop/files/MontessorihousebedPDFplan_120x190cmbedplan_BedFrame_toddlerhousebedwithrailingsplans_DIYfloorbed_HouseBedFramePDF.jpg',
  1,
  'hkids',
  4.5,
  0
FROM categories c WHERE c.slug = 'toys-baby'
UNION ALL
SELECT 
  'Lit cabane',
  'lit-cabane-3',
  'Chambre Montessori',
  440, -- Converted from 4,400 MAD
  c.id,
  'https://hkids.store/cdn/shop/files/LastChance_CreateaDreamyPatioroomdecorideabedroomroomdecorformenParadisewithTheseOut.jpg',
  1,
  'hkids',
  4.5,
  0
FROM categories c WHERE c.slug = 'toys-baby'
UNION ALL
SELECT 
  'Lit cabane',
  'lit-cabane-4',
  'Chambre Montessori',
  450, -- Converted from 4,500 MAD
  c.id,
  'https://hkids.store/cdn/shop/files/LitCabaneDK-MonLitCabane.jpg',
  1,
  'hkids',
  4.5,
  0
FROM categories c WHERE c.slug = 'toys-baby'
UNION ALL
SELECT 
  'Lit cabane',
  'lit-cabane-5',
  'Chambre Montessori',
  450, -- Converted from 4,500 MAD
  c.id,
  'https://hkids.store/cdn/shop/files/bedroombedroominspirationsbedroominteriorkidsroominspirationwinternurseryroomkidsroom.jpg',
  1,
  'hkids',
  4.5,
  0
FROM categories c WHERE c.slug = 'toys-baby';