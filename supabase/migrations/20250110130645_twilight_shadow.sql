/*
  # Add new books to products table
  
  1. New Content
    - Add Arabic books with descriptions
    - Set appropriate prices and metadata
    
  2. Notes
    - Prices converted from MAD to standard currency
    - Added meaningful descriptions for each book
*/

INSERT INTO products (
  name, 
  slug, 
  description, 
  price, 
  category_id, 
  image_url, 
  stock, 
  author, 
  rating, 
  reviews_count,
  sku
)
SELECT 
  'فكر وازدد ثراء',
  'think-and-grow-rich-ar',
  'كتاب يجمع بين الفلسفة والتنمية الذاتية، يقدم أسرار النجاح والثراء من خلال تجارب الناجحين',
  18, -- Converted from 180 MAD
  c.id,
  'https://kotob.ma/book/images/01.jpeg',
  10,
  'نابليون هيل',
  4.8,
  120,
  'BOOK-AR-001'
FROM categories c WHERE c.slug = 'books'
UNION ALL
SELECT 
  'أربعون 40',
  'forty-ar',
  'مجموعة من الدروس والحكم المستخلصة من تجارب الحياة، تقدم رؤية عميقة للتطور الشخصي',
  13.5, -- Converted from 135 MAD
  c.id,
  'https://kotob.ma/book/images/02.jpg',
  10,
  'أحمد الشقيري',
  4.7,
  95,
  'BOOK-AR-002'
FROM categories c WHERE c.slug = 'books'
UNION ALL
SELECT 
  'فن اللامبالاة',
  'subtle-art-ar',
  'نظرة مختلفة للحياة تدعو إلى التركيز على ما يهم حقاً وترك ما لا يستحق الاهتمام',
  14.4, -- Converted from 144 MAD
  c.id,
  'https://kotob.ma/book/images/03.jpg',
  10,
  'مارك مانسون',
  4.6,
  150,
  'BOOK-AR-003'
FROM categories c WHERE c.slug = 'books'
UNION ALL
SELECT 
  'خوارق اللاشعور',
  'subconscious-miracles',
  'دراسة عميقة في قوة العقل الباطن وتأثيره على حياتنا وكيفية تسخيره لتحقيق النجاح',
  12.7, -- Converted from 127 MAD
  c.id,
  'https://kotob.ma/book/images/04.jpg',
  10,
  'علي الوردي',
  4.5,
  80,
  'BOOK-AR-004'
FROM categories c WHERE c.slug = 'books'
UNION ALL
SELECT 
  'صاحب الظل الطويل',
  'daddy-long-legs-ar',
  'رواية كلاسيكية تحكي قصة فتاة يتيمة وعلاقتها بداعمها المجهول، مليئة بالأمل والإنسانية',
  12.3, -- Converted from 123 MAD
  c.id,
  'https://kotob.ma/book/images/05.jpg',
  10,
  'جين ويبستر',
  4.4,
  70,
  'BOOK-AR-005'
FROM categories c WHERE c.slug = 'books'
UNION ALL
SELECT 
  'لأنك الله',
  'because-you-are-allah',
  'كتاب روحاني يتناول العلاقة بين العبد وربه، مليء بالتأملات والخواطر الإيمانية',
  7.5, -- Converted from 75 MAD
  c.id,
  'https://kotob.ma/book/images/06.jpg',
  10,
  'علي جابر الفيفي',
  4.9,
  200,
  'BOOK-AR-006'
FROM categories c WHERE c.slug = 'books'
UNION ALL
SELECT 
  'الخيميائي',
  'alchemist-ar',
  'رواية رمزية عن رحلة البحث عن الذات والأحلام، وكيف أن الكون بأسره يتآمر لمساعدة من يسعى لتحقيق أحلامه',
  13.5, -- Converted from 135 MAD
  c.id,
  'https://kotob.ma/book/images/07.jpg',
  10,
  'باولو كويلو',
  4.8,
  180,
  'BOOK-AR-007'
FROM categories c WHERE c.slug = 'books'
UNION ALL
SELECT 
  'نظرية الفستق',
  'pistachio-theory',
  'كتاب يقدم نظرة مبتكرة للحياة والنجاح من خلال مقارنات بسيطة وعميقة',
  13.5, -- Converted from 135 MAD
  c.id,
  'https://kotob.ma/book/images/08.jpg',
  10,
  'فهد الأحمدي',
  4.6,
  90,
  'BOOK-AR-008'
FROM categories c WHERE c.slug = 'books'
UNION ALL
SELECT 
  'قواعد العشق الأربعون',
  'forty-rules-of-love-ar',
  'رواية تمزج بين الماضي والحاضر، تستكشف العلاقة بين الرومي وشمس التبريزي وتعاليم الصوفية',
  18, -- Converted from 180 MAD
  c.id,
  'https://kotob.ma/book/images/09.jpg',
  10,
  'إليف شافاق',
  4.9,
  220,
  'BOOK-AR-009'
FROM categories c WHERE c.slug = 'books'
UNION ALL
SELECT 
  'مهزلة العقل البشري',
  'human-mind-paradox',
  'تحليل نقدي للعقل البشري وتناقضاته، يكشف عن الأنماط السلوكية والفكرية للإنسان',
  19, -- Converted from 190 MAD
  c.id,
  'https://kotob.ma/book/images/10.jpg',
  10,
  'علي الوردي',
  4.7,
  110,
  'BOOK-AR-010'
FROM categories c WHERE c.slug = 'books'
UNION ALL
SELECT 
  'ممر الصفصاف',
  'willow-alley',
  'رواية تصور الحياة في حي قديم، مليئة بالتفاصيل الإنسانية والعلاقات الاجتماعية',
  14.9, -- Converted from 149 MAD
  c.id,
  'https://kotob.ma/book/images/12.jpeg',
  10,
  'أحمد الزناتي',
  4.5,
  75,
  'BOOK-AR-011'
FROM categories c WHERE c.slug = 'books'
UNION ALL
SELECT 
  'مميز بالأصفر',
  'highlighted-in-yellow',
  'مجموعة من القصص الملهمة والدروس الحياتية المستفادة من تجارب حقيقية',
  13.5, -- Converted from 135 MAD
  c.id,
  'https://kotob.ma/book/images/13.jpg',
  10,
  'محمد السالم',
  4.6,
  85,
  'BOOK-AR-012'
FROM categories c WHERE c.slug = 'books'
UNION ALL
SELECT 
  'العادات السبع للناس الأكثر فعالية',
  'seven-habits-ar',
  'دليل عملي لتطوير الذات وتحقيق النجاح الشخصي والمهني من خلال سبع عادات أساسية',
  28, -- Converted from 280 MAD
  c.id,
  'https://kotob.ma/book/images/14.png',
  10,
  'ستيفن كوفي',
  4.8,
  160,
  'BOOK-AR-013'
FROM categories c WHERE c.slug = 'books'
UNION ALL
SELECT 
  'السر',
  'the-secret-ar',
  'كتاب يكشف عن قانون الجذب وكيفية استخدامه لتحقيق الأحلام والأهداف',
  25.4, -- Converted from 254 MAD
  c.id,
  'https://kotob.ma/book/images/15.jpg',
  10,
  'روندا بايرن',
  4.7,
  190,
  'BOOK-AR-014'
FROM categories c WHERE c.slug = 'books'
UNION ALL
SELECT 
  'أرض السافيلين',
  'safileen-land',
  'رواية خيالية تأخذ القارئ في رحلة مثيرة إلى عالم غريب مليء بالمغامرات',
  17, -- Converted from 170 MAD
  c.id,
  'https://kotob.ma/book/images/16.jpg',
  10,
  'أحمد خالد توفيق',
  4.8,
  140,
  'BOOK-AR-015'
FROM categories c WHERE c.slug = 'books'
UNION ALL
SELECT 
  'خراب - كتاب عن الامل',
  'kharab-book-of-hope',
  'كتاب يتناول موضوع الأمل في خضم الصعوبات والتحديات، ويقدم رؤية إيجابية للمستقبل',
  17, -- Converted from 170 MAD
  c.id,
  'https://kotob.ma/book/images/17.jpg',
  10,
  'محمد المنسي',
  4.5,
  95,
  'BOOK-AR-016'
FROM categories c WHERE c.slug = 'books'
UNION ALL
SELECT 
  'ارض زيكولا',
  'zikola-land',
  'رواية خيال علمي تدور أحداثها في عالم مستقبلي غريب، مليئة بالإثارة والتشويق',
  11.1, -- Converted from 111 MAD
  c.id,
  'https://kotob.ma/book/images/18.jpg',
  10,
  'عمرو عبد الحميد',
  4.6,
  130,
  'BOOK-AR-017'
FROM categories c WHERE c.slug = 'books'
UNION ALL
SELECT 
  'انتيخريستوس',
  'antichristus',
  'رواية تمزج بين الخيال والواقع، تتناول صراع الخير والشر في إطار مثير',
  11.1, -- Converted from 111 MAD
  c.id,
  'https://kotob.ma/book/images/19.jpg',
  10,
  'أحمد خالد مصطفى',
  4.7,
  115,
  'BOOK-AR-018'
FROM categories c WHERE c.slug = 'books'
UNION ALL
SELECT 
  'شيفرة بلال',
  'bilal-code',
  'رواية تاريخية تتناول قصة بلال بن رباح في إطار جديد ومشوق',
  17.4, -- Converted from 174 MAD
  c.id,
  'https://kotob.ma/book/images/20.jpg',
  10,
  'أحمد خيري العمري',
  4.8,
  170,
  'BOOK-AR-019'
FROM categories c WHERE c.slug = 'books'
UNION ALL
SELECT 
  'شيفرة دا فينشي',
  'da-vinci-code-ar',
  'رواية مثيرة تمزج بين التاريخ والغموض والمغامرة، تكشف أسرار عمل ليوناردو دا فينشي',
  27.5, -- Converted from 275 MAD
  c.id,
  'https://kotob.ma/book/images/21.jpg',
  10,
  'دان براون',
  4.7,
  200,
  'BOOK-AR-020'
FROM categories c WHERE c.slug = 'books'
UNION ALL
SELECT 
  'الأب الغني والأب الفقير',
  'rich-dad-poor-dad-ar',
  'كتاب يقدم دروساً قيمة في التعليم المالي والاستثمار من خلال مقارنة بين نهجين مختلفين في الحياة',
  12.7, -- Converted from 127 MAD
  c.id,
  'https://kotob.ma/book/images/22.jpg',
  10,
  'روبرت كيوساكي',
  4.9,
  250,
  'BOOK-AR-021'
FROM categories c WHERE c.slug = 'books'
UNION ALL
SELECT 
  'فن الحرب',
  'art-of-war-ar',
  'كتاب كلاسيكي في الاستراتيجية العسكرية والقيادة، يقدم دروساً قيمة تطبق في مختلف مجالات الحياة',
  8, -- Converted from 80 MAD
  c.id,
  'https://kotob.ma/book/images/23.jpg',
  10,
  'صن تزو',
  4.8,
  180,
  'BOOK-AR-022'
FROM categories c WHERE c.slug = 'books'
UNION ALL
SELECT 
  'ابدأ بالاهم ولو كان صعبا',
  'start-with-important',
  'دليل عملي لإدارة الوقت وتحديد الأولويات وتحقيق الأهداف المهمة في الحياة',
  12.2, -- Converted from 122 MAD
  c.id,
  'https://kotob.ma/book/images/24.jpg',
  10,
  'برايان تريسي',
  4.6,
  110,
  'BOOK-AR-023'
FROM categories c WHERE c.slug = 'books'
UNION ALL
SELECT 
  'ساق البامبو',
  'bamboo-stalk',
  'رواية تتناول قضايا الهوية والانتماء من خلال قصة إنسانية مؤثرة',
  7.5, -- Converted from 75 MAD
  c.id,
  'https://kotob.ma/book/images/25.png',
  10,
  'سعود السنعوسي',
  4.7,
  160,
  'BOOK-AR-024'
FROM categories c WHERE c.slug = 'books'
UNION ALL
SELECT 
  'ليطمئن قلبي',
  'to-reassure-my-heart',
  'كتاب روحاني يتناول رحلة البحث عن السكينة والطمأنينة في الحياة',
  15.8, -- Converted from 158 MAD
  c.id,
  'https://kotob.ma/book/images/26.jpg',
  10,
  'أدهم شرقاوي',
  4.8,
  190,
  'BOOK-AR-025'
FROM categories c WHERE c.slug = 'books'
UNION ALL
SELECT 
  'ليطمئن عقلي',
  'to-reassure-my-mind',
  'كتاب يجمع بين العلم والإيمان، يقدم إجابات منطقية للأسئلة الوجودية',
  6.8, -- Converted from 68 MAD
  c.id,
  'https://kotob.ma/book/images/27.jpg',
  10,
  'أدهم شرقاوي',
  4.7,
  150,
  'BOOK-AR-026'
FROM categories c WHERE c.slug = 'books'
UNION ALL
SELECT 
  'أسرار عقل المليونير',
  'millionaire-mind-secrets',
  'كتاب يكشف عن العقلية والعادات التي تميز الأثرياء وكيفية تطبيقها في حياتك',
  6.7, -- Converted from 67 MAD
  c.id,
  'https://kotob.ma/book/images/28.jpg',
  10,
  'تي هارف إيكر',
  4.8,
  170,
  'BOOK-AR-027'
FROM categories c WHERE c.slug = 'books';