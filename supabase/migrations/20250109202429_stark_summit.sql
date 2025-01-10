/*
  # Add initial products data

  1. New Data
    - Insert sample products for different categories
    - Update image URLs to use Unsplash images
    - Set proper relationships with categories

  2. Categories
    - Books
    - Electronics
    - Fashion
    - Beauty
    - Home Decor
    - Kids
    - Sports
    - Food
    - Cars
*/

-- First, insert categories
INSERT INTO categories (name, slug, description)
VALUES 
  ('Books', 'books', 'Books and publications'),
  ('Electronics', 'electronics', 'Electronic devices and gadgets'),
  ('Fashion', 'fashion', 'Clothing and accessories'),
  ('Beauty', 'beauty', 'Beauty and personal care products'),
  ('Home Decor', 'home-decor', 'Home decoration items'),
  ('Kids', 'kids', 'Products for children'),
  ('Sports', 'sports', 'Sports equipment and accessories'),
  ('Food', 'food', 'Food and beverages'),
  ('Cars', 'cars', 'Car accessories and parts')
ON CONFLICT (slug) DO NOTHING;

-- Books
INSERT INTO products (name, slug, description, price, discount, category_id, image_url, stock, author, rating, reviews_count)
SELECT
  'في قلبي أنثى عبرية',
  'hebrew-woman-in-my-heart',
  'قصة حب تتجاوز الحدود الثقافية والاجتماعية.',
  40,
  10,
  c.id,
  'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800',
  10,
  'Imad',
  4.8,
  1
FROM categories c WHERE c.slug = 'books'
UNION ALL
SELECT
  'فن اللامبالاة',
  'art-of-not-giving',
  'دليل لبناء حياة مليئة بالقيم الحقيقية.',
  40,
  15,
  c.id,
  'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800',
  10,
  'Imad',
  4.6,
  1
FROM categories c WHERE c.slug = 'books'
UNION ALL
SELECT
  'الخيميائي',
  'the-alchemist',
  'رحلة البحث عن الأحلام والكنوز الشخصية.',
  40,
  13,
  c.id,
  'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800',
  10,
  'Imad',
  4.9,
  1
FROM categories c WHERE c.slug = 'books';

-- Electronics
INSERT INTO products (name, slug, description, price, discount, category_id, image_url, stock, author, rating, reviews_count)
SELECT
  'Samsung Galaxy S21 5G 128GB',
  'samsung-galaxy-s21',
  'هاتف ذكي عالي الأداء بكاميرا ثلاثية.',
  4045,
  27,
  c.id,
  'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&q=80&w=800',
  10,
  'Yassine',
  4.7,
  1
FROM categories c WHERE c.slug = 'electronics'
UNION ALL
SELECT
  'Apple MacBook Pro 16.2" with M3 Max Chip',
  'macbook-pro-m3',
  'Laptop powered by M3 Max chip.',
  82027,
  0,
  c.id,
  'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=800',
  10,
  'Yassine',
  4.9,
  1
FROM categories c WHERE c.slug = 'electronics';

-- Fashion
INSERT INTO products (name, slug, description, price, discount, category_id, image_url, stock, author, rating, reviews_count)
SELECT
  'تيشيرت كاجوال للرجال',
  'casual-mens-tshirt',
  'تيشيرت مريح وأنيق يناسب الاستخدام اليومي.',
  150,
  20,
  c.id,
  'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800',
  10,
  'Mohamed66',
  4.5,
  190
FROM categories c WHERE c.slug = 'fashion'
UNION ALL
SELECT
  'فستان سهرة أنيق',
  'elegant-evening-dress',
  'فستان للسهرات مصنوع من القماش الفاخر.',
  600,
  10,
  c.id,
  'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&q=80&w=800',
  10,
  'Mohamed66',
  4.7,
  120
FROM categories c WHERE c.slug = 'fashion';

-- Beauty
INSERT INTO products (name, slug, description, price, discount, category_id, image_url, stock, author, rating, reviews_count)
SELECT
  'أحمر شفاه مايبيلين مات',
  'maybelline-matte-lipstick',
  'أحمر شفاه بتركيبة طويلة الأمد.',
  120,
  15,
  c.id,
  'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=800',
  10,
  'asmae',
  4.8,
  145
FROM categories c WHERE c.slug = 'beauty';

-- Home Decor
INSERT INTO products (name, slug, description, price, discount, category_id, image_url, stock, author, rating, reviews_count)
SELECT
  'طقم ديكورات حائط',
  'wall-decor-set',
  'مجموعة من اللوحات الفنية لتزيين الجدران.',
  200,
  20,
  c.id,
  'https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&q=80&w=800',
  10,
  'youssef',
  4.7,
  98
FROM categories c WHERE c.slug = 'home-decor';

-- Sports
INSERT INTO products (name, slug, description, price, discount, category_id, image_url, stock, author, rating, reviews_count)
SELECT
  'حزام تمدد لتمارين الرياضية',
  'resistance-bands',
  'حزام تمدد لتمارين الرياضية.',
  66,
  15,
  c.id,
  'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&q=80&w=800',
  10,
  'yazid88',
  4.8,
  240
FROM categories c WHERE c.slug = 'sports';

-- Food
INSERT INTO products (name, slug, description, price, discount, category_id, image_url, stock, author, rating, reviews_count)
SELECT
  'عسل الفرنان طبيعي',
  'natural-honey',
  'عسل طبيعي من أجود الأنواع.',
  250,
  0,
  c.id,
  'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&q=80&w=800',
  10,
  'ayoub9',
  4.8,
  180
FROM categories c WHERE c.slug = 'food';

-- Cars
INSERT INTO products (name, slug, description, price, discount, category_id, image_url, stock, author, rating, reviews_count)
SELECT
  'غطاء مقاعد السيارة',
  'car-seat-cover',
  'غطاء أنيق ومريح لمقاعد السيارة.',
  200,
  10,
  c.id,
  'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=800',
  10,
  'zaidbb',
  4.5,
  90
FROM categories c WHERE c.slug = 'cars';