import { useEffect, useState } from 'react';
import { RecipeList } from '../components/RecipeList';
import { Recipe } from '../data/recipes';

export const SavedRecipes = () => {
  const [savedRecipes, setSavedRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const savedRecipeIds = JSON.parse(localStorage.getItem('SAVED_RECIPES') || '[]');
    const recipes = JSON.parse(localStorage.getItem('recipes') || '[]');
    const filteredRecipes = recipes.filter((recipe: Recipe) => 
      savedRecipeIds.includes(recipe.id)
    );
    setSavedRecipes(filteredRecipes);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Saved Recipes</h1>
      {savedRecipes.length > 0 ? (
        <RecipeList recipes={savedRecipes} showFilters={false} />
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">
            You haven't saved any recipes yet. Click the heart on a recipe to save it.
          </p>
        </div>
      )}
    </div>
  );
}; 