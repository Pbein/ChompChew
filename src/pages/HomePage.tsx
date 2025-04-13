import { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { RecipeCard } from '../components/RecipeCard';
import { recipes } from '../data/recipes';
import { BottomNav } from '../components/BottomNav';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { getIngredientWarnings } from '../utils/ingredientUtils';
import { INGREDIENT_CLASSIFICATIONS } from '../data/ingredientClassifications';

export const HomePage = () => {
  const [savedRecipes, setSavedRecipes] = useLocalStorage<number[]>('SAVED_RECIPES', []);
  const [avoidedIngredients] = useLocalStorage<number[]>('AVOIDED_INGREDIENTS', []);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDiets, setSelectedDiets] = useState<string[]>([]);

  const dietaryTags = [
    'vegan', 'vegetarian', 'gluten-free',
    'dairy-free', 'nut-free', 'soy-free',
    'low-carb', 'paleo', 'low-fodmap',
    'ulcerative-colitis-friendly'
  ];

  const handleSaveRecipe = (recipeId: number) => {
    const newSavedRecipes = savedRecipes.includes(recipeId)
      ? savedRecipes.filter(id => id !== recipeId)
      : [...savedRecipes, recipeId];
    setSavedRecipes(newSavedRecipes);
  };

  const toggleDiet = (diet: string) => {
    setSelectedDiets(prev =>
      prev.includes(diet)
        ? prev.filter(d => d !== diet)
        : [...prev, diet]
    );
  };

  const filteredRecipes = recipes.filter(recipe => {
    const matchesSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDiet = selectedDiets.length === 0 || 
      selectedDiets.every(diet => recipe.dietTags.includes(diet));
    const ingredientsWithWarnings = getIngredientWarnings(recipe.ingredients, avoidedIngredients);
    const hasWarnings = ingredientsWithWarnings.some(ingredient => ingredient.warning);
    return matchesSearch && matchesDiet && !hasWarnings;
  });

  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header - Desktop */}
      <header className="hidden md:block bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <Link to="/" className="flex items-center">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-blue-600">ChompChew</span>
                <span className="text-sm text-gray-500">Find your perfect recipes</span>
              </div>
            </Link>
            <div className="flex items-center space-x-6">
              <Link
                to="/saved"
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                <span>Saved Recipes</span>
              </Link>
              <Link
                to="/preferences"
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Preferences</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Search Header - Mobile */}
      <div className="md:hidden bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="py-4">
            <div className="mb-4">
              <Link to="/" className="block">
                <span className="text-2xl font-bold text-blue-600">ChompChew</span>
                <span className="block text-sm text-gray-500">Find your perfect recipe</span>
              </Link>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search recipes..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full pl-10 pr-4 py-3 bg-gray-100 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <svg
                className="absolute left-3 top-3.5 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-4 pb-20">
        {/* Search - Desktop */}
        <div className="hidden md:block mb-6">
          <div className="relative max-w-md">
            <input
              type="text"
              placeholder="Search recipes..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full pl-10 pr-4 py-3 bg-gray-100 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <svg
              className="absolute left-3 top-3.5 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Active Preferences */}
        {avoidedIngredients.length > 0 && (
          <div className="bg-blue-50 rounded-lg p-3 mb-4">
            <h2 className="text-xs font-semibold text-blue-800 mb-2">
              Active Preferences:
            </h2>
            <div className="flex flex-wrap gap-2">
              {avoidedIngredients.map((id) => (
                <span key={id} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                  {INGREDIENT_CLASSIFICATIONS[id]?.name}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Diet Filters */}
        <div className="mb-6 -mx-4">
          <div className="px-4 overflow-x-auto">
            <div className="flex gap-2 pb-2">
              {dietaryTags.map(diet => (
                <button
                  key={diet}
                  onClick={() => toggleDiet(diet)}
                  className={`whitespace-nowrap text-sm px-3 py-1.5 rounded-full transition-colors ${
                    selectedDiets.includes(diet)
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {diet}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Recipe Grid */}
        {filteredRecipes.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {filteredRecipes.map(recipe => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                onSave={handleSaveRecipe}
                isSaved={savedRecipes.includes(recipe.id)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4.5 4.5 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">No recipes found</h3>
            <p className="mt-1 text-sm text-gray-500">
              Try adjusting your search or filters
            </p>
          </div>
        )}
      </main>

      {/* Bottom Navigation - Mobile Only */}
      <div className="md:hidden">
        <BottomNav />
      </div>
    </div>
  );
}; 