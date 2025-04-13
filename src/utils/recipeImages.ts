interface RecipeImage {
  url: string;
  alt: string;
}

// Import all images
const recipeImages: { [key: number]: RecipeImage } = {
  1: {
    url: '/src/assets/Images for ChompChew Recipes/1.png',
    alt: 'Zucchini Noodles with Avocado Pesto'
  },
  2: {
    url: '/src/assets/Images for ChompChew Recipes/2.png',
    alt: 'Quinoa Buddha Bowl'
  },
  3: {
    url: '/src/assets/Images for ChompChew Recipes/3.png',
    alt: 'Low-FODMAP Chicken Stir Fry'
  },
  4: {
    url: '/src/assets/Images for ChompChew Recipes/4.png',
    alt: 'UC-Friendly Salmon with Mashed Potatoes'
  },
  5: {
    url: '/src/assets/Images for ChompChew Recipes/5.png',
    alt: 'Vegan Lentil Curry'
  },
  6: {
    url: '/src/assets/Images for ChompChew Recipes/6.png',
    alt: 'Gluten-Free Banana Pancakes'
  },
  7: {
    url: '/src/assets/Images for ChompChew Recipes/7.png',
    alt: 'Low-FODMAP Turkey Meatballs'
  },
  8: {
    url: '/src/assets/Images for ChompChew Recipes/8.png',
    alt: 'Low-FODMAP Overnight Oats'
  },
  9: {
    url: '/src/assets/Images for ChompChew Recipes/9.png',
    alt: 'UC-Friendly Butternut Squash Soup'
  },
  10: {
    url: '/src/assets/Images for ChompChew Recipes/10.png',
    alt: 'Gluten-Free Buckwheat Crepes'
  },
  11: {
    url: '/src/assets/Images for ChompChew Recipes/11.png',
    alt: 'Vegan Tofu Scramble'
  },
  12: {
    url: '/src/assets/Images for ChompChew Recipes/12.png',
    alt: 'Low-FODMAP Fish Tacos'
  },
  13: {
    url: '/src/assets/Images for ChompChew Recipes/13.png',
    alt: 'UC-Friendly Chicken and Rice'
  },
  14: {
    url: '/src/assets/Images for ChompChew Recipes/14.png',
    alt: 'Vegan Chocolate Avocado Mousse'
  }
};

// Default image for recipes without a matching image
const DEFAULT_IMAGE: RecipeImage = {
  url: '/src/assets/Images for ChompChew Recipes/default.png',
  alt: 'Default recipe image'
};

export const getRecipeImage = (recipeId: number): RecipeImage => {
  return recipeImages[recipeId] || DEFAULT_IMAGE;
}; 