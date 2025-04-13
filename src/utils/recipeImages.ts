interface RecipeImage {
  url: string;
  alt: string;
  source: 'unsplash' | 'pexels';
  photographer: string;
  photographerUrl: string;
}

export const recipeImages: Record<string, RecipeImage> = {
  "Zucchini Noodles with Avocado Pesto": {
    url: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    alt: "Zucchini noodles with avocado pesto in a white bowl",
    source: "unsplash",
    photographer: "Brooke Lark",
    photographerUrl: "https://unsplash.com/@brookelark"
  },
  "Quinoa Buddha Bowl": {
    url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
    alt: "Colorful quinoa buddha bowl with vegetables",
    source: "unsplash",
    photographer: "Eiliv-Sonas Aceron",
    photographerUrl: "https://unsplash.com/@shootdelicious"
  },
  "Low-FODMAP Chicken Stir Fry": {
    url: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg",
    alt: "Healthy chicken stir fry with vegetables",
    source: "pexels",
    photographer: "Ella Olsson",
    photographerUrl: "https://www.pexels.com/@ella-olsson"
  },
  "Vegan Chocolate Avocado Mousse": {
    url: "https://images.unsplash.com/photo-1563805042-7684c019e1cb",
    alt: "Chocolate avocado mousse in a glass",
    source: "unsplash",
    photographer: "Mgg Vitchakorn",
    photographerUrl: "https://unsplash.com/@mggbox"
  },
  "Gluten-Free Banana Pancakes": {
    url: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg",
    alt: "Stack of banana pancakes with syrup",
    source: "pexels",
    photographer: "Ash",
    photographerUrl: "https://www.pexels.com/@ash-376540"
  },
  "Mediterranean Quinoa Salad": {
    url: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
    alt: "Mediterranean quinoa salad with vegetables",
    source: "unsplash",
    photographer: "Eiliv-Sonas Aceron",
    photographerUrl: "https://unsplash.com/@shootdelicious"
  },
  "Vegan Lentil Curry": {
    url: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg",
    alt: "Vegan lentil curry in a bowl",
    source: "pexels",
    photographer: "Polina Tankilevitch",
    photographerUrl: "https://www.pexels.com/@polina-tankilevitch"
  },
  "Low-Carb Cauliflower Pizza": {
    url: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
    alt: "Cauliflower crust pizza with toppings",
    source: "unsplash",
    photographer: "Ivan Torres",
    photographerUrl: "https://unsplash.com/@iavnt"
  },
  "Vegan Mushroom Risotto": {
    url: "https://images.pexels.com/photos/1251208/pexels-photo-1251208.jpeg",
    alt: "Creamy mushroom risotto in a bowl",
    source: "pexels",
    photographer: "Marta Dzedyshko",
    photographerUrl: "https://www.pexels.com/@marta-dzedyshko-104378"
  },
  "Gluten-Free Chocolate Chip Cookies": {
    url: "https://images.unsplash.com/photo-1558964122-9fdfb16d0c0a",
    alt: "Freshly baked chocolate chip cookies",
    source: "unsplash",
    photographer: "Mgg Vitchakorn",
    photographerUrl: "https://unsplash.com/@mggbox"
  }
};

export const getRecipeImage = (recipeTitle: string): RecipeImage => {
  return recipeImages[recipeTitle] || {
    url: "https://images.unsplash.com/photo-1546069901-d5bfd2cbfb1f",
    alt: "Default recipe image",
    source: "unsplash",
    photographer: "Eiliv-Sonas Aceron",
    photographerUrl: "https://unsplash.com/@shootdelicious"
  };
}; 