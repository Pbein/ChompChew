import { useState, useEffect } from 'react';
import { Recipe } from '../data/recipes';
import { recipes } from '../data/recipes';
import { RecipeCard } from '../components/recipe/RecipeCard';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { DIET_TAGS } from '../constants';
import BottomNav from '../components/navigation/BottomNav';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDietTags, setSelectedDietTags] = useState<string[]>([]);
  const [savedRecipes, setSavedRecipes] = useLocalStorage<number[]>('SAVED_RECIPES', []);
  const [avoidedIngredients] = useLocalStorage<string[]>('AVOIDED_INGREDIENTS', []);
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const filtered = recipes.filter(recipe => {
      // Check if recipe matches search query
      const matchesSearch = searchQuery === '' || 
        recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        recipe.ingredients.some(ingredient => 
          ingredient.item.toLowerCase().includes(searchQuery.toLowerCase())
        );

      // Check if recipe matches selected diet tags
      const matchesDiet = selectedDietTags.length === 0 || 
        selectedDietTags.every(tag => recipe.dietTags.includes(tag));

      return matchesSearch && matchesDiet;
    });
    setFilteredRecipes(filtered);
  }, [recipes, searchQuery, selectedDietTags]);

  const handleSaveRecipe = (id: number) => {
    setSavedRecipes(prev => {
      if (prev.includes(id)) {
        return prev.filter(recipeId => recipeId !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const handleDietTagToggle = (tag: string) => {
    setSelectedDietTags(prev => 
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  return (
    <div className="min-h-screen bg-white pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header - Only show on mobile */}
        <div className="md:hidden text-center mb-8">
          <h1 className="text-4xl font-bold text-teal-900 mb-2 flex items-center justify-center gap-2">
            ChompChew
            <span role="img" aria-label="fork" className="text-gray-400">🍴</span>
          </h1>
          <p className="text-gray-600 text-lg">Find recipes that fit your dietary needs</p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-400"
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
            <input
              type="text"
              placeholder="Search recipes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-full bg-gray-50 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-shadow duration-200"
            />
          </div>
        </div>

        {/* Diet Tags */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-2 justify-center">
            {DIET_TAGS.map((tag: string) => (
              <button
                key={tag}
                onClick={() => handleDietTagToggle(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedDietTags.includes(tag)
                    ? 'bg-teal-100 text-teal-800 border border-teal-200'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Recipe Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading ? (
            <div className="col-span-full text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-500 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading recipes...</p>
            </div>
          ) : filteredRecipes.length > 0 ? (
            filteredRecipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                isSaved={savedRecipes.includes(recipe.id)}
                onSaveToggle={() => handleSaveRecipe(recipe.id)}
                avoidedIngredients={avoidedIngredients}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-600">No recipes found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default HomePage; 