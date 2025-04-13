import { AvoidableIngredient } from '../constants';
import { INGREDIENT_CLASSIFICATIONS } from '../data/ingredientClassifications';

export const checkIngredientAgainstPreferences = (
  ingredient: string,
  avoidedIngredients: AvoidableIngredient[]
): boolean => {
  const lowerIngredient = ingredient.toLowerCase();
  
  return avoidedIngredients.some(category => {
    const classification = INGREDIENT_CLASSIFICATIONS.find(c => c.category === category);
    if (!classification) return false;
    
    return classification.ingredients.some(avoidedIngredient => 
      lowerIngredient.includes(avoidedIngredient.toLowerCase())
    );
  });
};

export const getIngredientWarnings = (
  ingredients: { item: string; warning: boolean }[],
  avoidedIngredients: AvoidableIngredient[]
): { item: string; warning: boolean; reason?: string }[] => {
  return ingredients.map(ingredient => {
    const isWarning = checkIngredientAgainstPreferences(ingredient.item, avoidedIngredients);
    if (!isWarning) return ingredient;

    const matchingCategories = avoidedIngredients.filter(category => {
      const classification = INGREDIENT_CLASSIFICATIONS.find(c => c.category === category);
      if (!classification) return false;
      return classification.ingredients.some(avoidedIngredient => 
        ingredient.item.toLowerCase().includes(avoidedIngredient.toLowerCase())
      );
    });

    return {
      ...ingredient,
      warning: true,
      reason: matchingCategories.map(category => 
        INGREDIENT_CLASSIFICATIONS.find(c => c.category === category)?.name
      ).join(', ')
    };
  });
}; 