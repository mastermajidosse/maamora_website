export const categories = [
  'Books',
  'Electronics',
  'Fashion',
  'Home Decor',
  'Beauty',
  'Kids',
  'Sports',
  'Food',
  'Cars'
] as const;

export type Category = typeof categories[number];