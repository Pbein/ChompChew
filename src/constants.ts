export const DIET_TAGS = [
  'vegan',
  'vegetarian',
  'gluten-free',
  'dairy-free',
  'nut-free',
  'soy-free',
  'low-fodmap',
  'ulcerative-colitis-friendly',
  'paleo',
  'low-carb'
] as const;

export type DietTag = typeof DIET_TAGS[number];

export const WARNING_INGREDIENTS = [
  'onion',
  'garlic',
  'wheat',
  'dairy',
  'nuts',
  'soy'
] as const;

export type WarningIngredient = typeof WARNING_INGREDIENTS[number];

export const STORAGE_KEYS = {
  SAVED_RECIPES: 'savedRecipes',
  SELECTED_TAGS: 'selectedTags'
} as const; 