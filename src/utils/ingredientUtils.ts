import { INGREDIENT_CLASSIFICATIONS } from '../data/ingredientClassifications';

interface RecipeIngredient {
  item: string;
  warning: boolean;
}

export const checkIngredientAgainstPreferences = (
  ingredient: string,
  avoidedIngredientIds: number[]
): boolean => {
  const lowerIngredient = ingredient.toLowerCase();
  
  return avoidedIngredientIds.some(id => {
    const classification = INGREDIENT_CLASSIFICATIONS[id];
    if (!classification) return false;
    
    return classification.ingredients.some(avoidedIngredient => 
      lowerIngredient.includes(avoidedIngredient.toLowerCase())
    );
  });
};

export const getIngredientWarnings = (
  ingredients: RecipeIngredient[],
  avoidedIngredientIds: number[]
): RecipeIngredient[] => {
  return ingredients.map(ingredient => {
    const isWarning = checkIngredientAgainstPreferences(ingredient.item, avoidedIngredientIds);
    if (!isWarning) return { ...ingredient, warning: false };

    return {
      ...ingredient,
      warning: true
    };
  });
}; 