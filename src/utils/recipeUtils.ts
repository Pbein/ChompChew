import { Recipe } from '../data/recipes';
import { DietTag, WARNING_INGREDIENTS } from '../constants';

export const filterRecipes = (recipes: Recipe[], tags: DietTag[]): Recipe[] => {
  if (tags.length === 0) return recipes;
  return recipes.filter(recipe =>
    tags.every(tag => recipe.dietTags.includes(tag))
  );
};

export const hasWarningIngredient = (ingredient: string): boolean => {
  return WARNING_INGREDIENTS.some(warning =>
    ingredient.toLowerCase().includes(warning)
  );
}; 