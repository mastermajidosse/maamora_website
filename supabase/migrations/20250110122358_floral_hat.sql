/*
  # Add More Toys & Baby Products
  
  1. New Products
    - Adds baby cribs and furniture
    - Adds baby care products
    - Adds bedding sets
    - All products in "Toys & Baby" category
    - Prices converted from MAD to USD (approximate conversion)
    - All products set with stock of 1
*/

-- Baby Cribs
INSERT INTO products (name, slug, description, price, category_id, image_url, stock, author, rating, reviews_count)
SELECT 
  'Crib bébé',
  'crib-bebe-1',
  'Chambre bébé',
  290, -- Converted from 2,900 MAD
  c.id,
  'https://hkids.store/cdn/shop/files/Babycrib_diyproject_wieg_dipdye_coral_my.jpg',
  1,
  'hkids',
  4.5,
  0
FROM categories c WHERE c.slug = 'toys-baby'
UNION ALL
SELECT 
  'Crib bébé',
  'crib-bebe-2',
  'Chambre bébé',
  340, -- Converted from 3,400 MAD
  c.id,
  'https://hkids.store/cdn/shop/files/download_5.jpg',
  1,
  'hkids',
  4.5,
  0
FROM categories c WHERE c.slug = 'toys-baby'
UNION ALL
SELECT 
  'Le lit Bonbon',
  'lit-bonbon',
  'Chambre bébé',
  870, -- Converted from 8,700 MAD
  c.id,
  'https://hkids.store/cdn/shop/files/GHIATI_a_Montessori_design_crib_with_a_glued_screen_one_of_the__3be7ed4f-283d-479e-a0ff-ed2b71fe92ab_1.png',
  1,
  'hkids',
  4.5,
  0
FROM categories c WHERE c.slug = 'toys-baby'
UNION ALL
SELECT 
  'Le lit Douceur',
  'lit-douceur',
  'Chambre bébé',
  1200, -- Converted from 12,000 MAD
  c.id,
  'https://hkids.store/cdn/shop/files/GHIATI_a_Montessori_design_crib_with_a_glued_screen_one_of_the__8be5cacb-685d-44ce-9457-26f6c843b2c8_1.png',
  1,
  'hkids',
  4.5,
  0
FROM categories c WHERE c.slug = 'toys-baby'
UNION ALL
SELECT 
  'lit bébé',
  'lit-bebe',
  'Chambre bébé',
  280, -- Converted from 2,800 MAD
  c.id,
  'https://hkids.store/cdn/shop/files/VertbaudetBabyGitterbettGROssERBARinweiss_natur.jpg',
  1,
  'hkids',
  4.5,
  0
FROM categories c WHERE c.slug = 'toys-baby'
UNION ALL
SELECT 
  'Lit blanc',
  'lit-blanc',
  'Chambre bébé',
  240, -- Converted from 2,400 MAD
  c.id,
  'https://hkids.store/cdn/shop/files/10ofthebestcotsandcotbedsforbabiesandtoddlers.jpg',
  1,
  'hkids',
  4.5,
  0
FROM categories c WHERE c.slug = 'toys-baby'
UNION ALL
SELECT 
  'Lit de bébé convertible',
  'lit-bebe-convertible',
  'Chambre bébé',
  330, -- Converted from 3,299 MAD
  c.id,
  'https://hkids.store/cdn/shop/files/WhatsAppImage2023-11-14at10.00.40_1.jpg',
  1,
  'hkids',
  4.5,
  0
FROM categories c WHERE c.slug = 'toys-baby'
UNION ALL
SELECT 
  'Lit évolutif',
  'lit-evolutif',
  'Chambre bébé',
  659, -- Converted from 6,590 MAD
  c.id,
  'https://hkids.store/cdn/shop/files/WhatsAppImage2023-11-14at10.00.40.jpg',
  1,
  'hkids',
  4.5,
  0
FROM categories c WHERE c.slug = 'toys-baby';

-- Baby Care Products
INSERT INTO products (name, slug, description, price, category_id, image_url, stock, author, rating, reviews_count)
SELECT 
  'DODIE TASSE D''APRENTISSAGE +6 MOIS 200ML VERT',
  'dodie-tasse-apprentissage',
  'Para-kids',
  12.1, -- Converted from 121 MAD
  c.id,
  'https://hkids.store/cdn/shop/files/dodie-tasse-d-aprentissage-6-mois-200ml-vert.webp',
  1,
  'hkids',
  4.5,
  0
FROM categories c WHERE c.slug = 'toys-baby'
UNION ALL
SELECT 
  'DODIE TASSE PAILLE +18 MOIS 350ML JAUNE',
  'dodie-tasse-paille',
  'Para-kids',
  16, -- Converted from 160 MAD
  c.id,
  'https://hkids.store/cdn/shop/files/PR4AI8_SANS_1_X.jpg',
  1,
  'hkids',
  4.5,
  0
FROM categories c WHERE c.slug = 'toys-baby'
UNION ALL
SELECT 
  'SO BIO EAU MICELLAIRE NETTOYANTE',
  'so-bio-eau-micellaire',
  'Para-kids',
  13.95, -- Converted from 139.50 MAD
  c.id,
  'https://hkids.store/cdn/shop/files/so-bio-eau-micellaire-nettoyante-500ml_1.webp',
  1,
  'hkids',
  4.5,
  0
FROM categories c WHERE c.slug = 'toys-baby';

-- Bedding Sets
INSERT INTO products (name, slug, description, price, category_id, image_url, stock, author, rating, reviews_count)
SELECT 
  'Sheet set',
  'sheet-set',
  'la Litterie',
  89, -- Converted from 890 MAD
  c.id,
  'https://hkids.store/cdn/shop/files/WhatsAppImage2023-11-09at10.31.03_1.jpg',
  1,
  'hkids',
  4.5,
  0
FROM categories c WHERE c.slug = 'toys-baby'
UNION ALL
SELECT 
  'Modern kids Sheets and Pillowcase',
  'modern-kids-sheets',
  'la Litterie',
  79, -- Converted from 790 MAD
  c.id,
  'https://hkids.store/cdn/shop/files/WhatsAppImage2023-11-09at10.31.03.jpg',
  1,
  'hkids',
  4.5,
  0
FROM categories c WHERE c.slug = 'toys-baby'
UNION ALL
SELECT 
  'ensemble de draps pour enfants',
  'ensemble-draps-enfants',
  'la Litterie',
  48.9, -- Converted from 489 MAD
  c.id,
  'https://hkids.store/cdn/shop/files/WhatsAppImage2023-11-09at10.30.59.jpg',
  1,
  'hkids',
  4.5,
  0
FROM categories c WHERE c.slug = 'toys-baby'
UNION ALL
SELECT 
  'Ensemble de draps',
  'ensemble-draps',
  'la Litterie',
  78.9, -- Converted from 789 MAD
  c.id,
  'https://hkids.store/cdn/shop/files/WhatsAppImage2023-11-09at10.30.58.jpg',
  1,
  'hkids',
  4.5,
  0
FROM categories c WHERE c.slug = 'toys-baby';