export const Mycategories = ['All','books', 'toys-baby', 'clothes', 'electronics', 'home-decor', 'pets', 'health-beauty', 'sports','gaming-accessories','food','cars'] as const;

// const desiredOrder = ['books', 'toys-baby', 'clothes', 'electronics', 'home-decor', 'pets', 'health-beauty', 'sports'];


export type Category = typeof Mycategories[number];