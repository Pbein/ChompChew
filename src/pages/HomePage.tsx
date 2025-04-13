import { useState } from 'react';
import { RecipeCard } from '../components/RecipeCard';
import { recipes } from '../data/recipes';
import { Navigation } from '../components/Navigation';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { getIngredientWarnings } from '../utils/ingredientUtils';
import { AvoidableIngredient } from '../constants';

export const HomePage = () => {
  const [savedRecipes, setSavedRecipes] = useLocalStorage<number[]>('SAVED_RECIPES', []);
  const [avoidedIngredients] = useLocalStorage<AvoidableIngredient[]>('AVOIDED_INGREDIENTS', []);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSaveRecipe = (recipeId: number) => {
    const newSavedRecipes = savedRecipes.includes(recipeId)
      ? savedRecipes.filter(id => id !== recipeId)
      : [...savedRecipes, recipeId];
    setSavedRecipes(newSavedRecipes);
  };

  const filteredRecipes = recipes.filter(recipe => {
    const matchesSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase());
    const ingredientsWithWarnings = getIngredientWarnings(recipe.ingredients, avoidedIngredients);
    const hasWarnings = ingredientsWithWarnings.some(ingredient => ingredient.warning);
    return matchesSearch && !hasWarnings;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        {/* Search Section */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search recipes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-96 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Browse Recipes Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Browse Recipes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRecipes.map(recipe => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                onSave={handleSaveRecipe}
                isSaved={savedRecipes.includes(recipe.id)}
              />
            ))}
          </div>
        </section>

        {/* Saved Recipes Section */}
        {savedRecipes.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Saved Recipes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recipes
                .filter(recipe => savedRecipes.includes(recipe.id))
                .map(recipe => (
                  <RecipeCard
                    key={recipe.id}
                    recipe={recipe}
                    onSave={handleSaveRecipe}
                    isSaved={true}
                  />
                ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}; 