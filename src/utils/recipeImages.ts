interface RecipeImage {
  url: string;
  alt: string;
}

// Import all images
const recipeImages: { [key: number]: RecipeImage } = {
  1: {
    url: '/images/1.png',
    alt: 'Zucchini Noodles with Avocado Pesto'
  },
  2: {
    url: '/images/2.png',
    alt: 'Quinoa Buddha Bowl'
  },
  3: {
    url: '/images/3.png',
    alt: 'Low-FODMAP Chicken Stir Fry'
  },
  4: {
    url: '/images/4.png',
    alt: 'UC-Friendly Salmon with Mashed Potatoes'
  },
  5: {
    url: '/images/5.png',
    alt: 'Vegan Lentil Curry'
  },
  6: {
    url: '/images/6.png',
    alt: 'Gluten-Free Banana Pancakes'
  },
  7: {
    url: '/images/7.png',
    alt: 'Low-FODMAP Turkey Meatballs'
  },
  8: {
    url: '/images/8.png',
    alt: 'Low-FODMAP Overnight Oats'
  },
  9: {
    url: '/images/9.png',
    alt: 'UC-Friendly Butternut Squash Soup'
  },
  10: {
    url: '/images/10.png',
    alt: 'Gluten-Free Buckwheat Crepes'
  },
  11: {
    url: '/images/11.png',
    alt: 'Vegan Tofu Scramble'
  },
  12: {
    url: '/images/12.png',
    alt: 'Low-FODMAP Fish Tacos'
  },
  13: {
    url: '/images/13.png',
    alt: 'UC-Friendly Chicken and Rice'
  },
  14: {
    url: '/images/14.png',
    alt: 'Vegan Chocolate Avocado Mousse'
  }
};

// Default image for recipes without a matching image
const DEFAULT_IMAGE: RecipeImage = {
  url: '/images/default.png',
  alt: 'Default recipe image'
};

export const getRecipeImage = (recipeId: number): RecipeImage => {
  return recipeImages[recipeId] || DEFAULT_IMAGE;
}; 