export type DietTag = 'vegan' | 'vegetarian' | 'gluten-free' | 'dairy-free' | 'nut-free' | 'soy-free' | 'low-carb' | 'paleo' | 'low-fodmap' | 'ulcerative-colitis-friendly';

export const DIET_TAGS: DietTag[] = [
  'vegan',
  'vegetarian',
  'gluten-free',
  'dairy-free',
  'nut-free',
  'soy-free',
  'low-carb',
  'paleo',
  'low-fodmap',
  'ulcerative-colitis-friendly'
];

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

export type AvoidableIngredient = 'garlic' | 'onion' | 'dairy' | 'shellfish' | 'meat' | 'gluten' | 'nuts' | 'soy' | 'eggs' | 'fish';

export const AVOIDABLE_INGREDIENTS: AvoidableIngredient[] = [
  'garlic',
  'onion',
  'dairy',
  'shellfish',
  'meat',
  'gluten',
  'nuts',
  'soy',
  'eggs',
  'fish'
]; 