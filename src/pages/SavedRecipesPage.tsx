import { RecipeCard } from '../components/recipe/RecipeCard';
import { recipes } from '../data/recipes';
import { useLocalStorage } from '../hooks/useLocalStorage';
import BottomNav from '../components/navigation/BottomNav';

const SavedRecipesPage = () => {
  const [savedRecipes, setSavedRecipes] = useLocalStorage<number[]>('SAVED_RECIPES', []);
  const [avoidedIngredients] = useLocalStorage<string[]>('AVOIDED_INGREDIENTS', []);

  const handleSaveToggle = (recipeId: number) => {
    setSavedRecipes(prev => prev.filter(id => id !== recipeId));
  };

  const savedRecipesList = recipes.filter(recipe => savedRecipes.includes(recipe.id));

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="py-4">
            <h1 className="text-xl font-semibold text-gray-900">Saved Recipes</h1>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-4 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {savedRecipesList.map(recipe => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              isSaved={true}
              onSaveToggle={() => handleSaveToggle(recipe.id)}
              avoidedIngredients={avoidedIngredients}
            />
          ))}
        </div>
        {savedRecipesList.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500">No saved recipes yet</p>
          </div>
        )}
      </main>

      <BottomNav />
    </div>
  );
};

export default SavedRecipesPage; 