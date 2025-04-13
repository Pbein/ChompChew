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
  const [avoidedIngredients] = useLocalStorage<number[]>('AVOIDED_INGREDIENTS', []);
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
    const filtered = recipes.filter((recipe: Recipe) => {
      const matchesSearch = recipe.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesDiet = selectedDietTags.length === 0 || 
        selectedDietTags.every(tag => recipe.dietTags.includes(tag));
      const hasWarnings = recipe.ingredients.some((ingredient: { item: string; warning: boolean }) => 
        ingredient.warning
      );
      return matchesSearch && matchesDiet && !hasWarnings;
    });
    setFilteredRecipes(filtered);
  }, [searchQuery, selectedDietTags, avoidedIngredients]);

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
                className={`group px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedDietTags.includes(tag)
                    ? 'bg-teal-50 text-teal-700'
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                }`}
              >
                {selectedDietTags.includes(tag) && (
                  <span className="mr-1 text-teal-600">✓</span>
                )}
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Recipe Grid */}
        {isLoading ? (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="break-inside-avoid-column bg-white rounded-xl shadow-sm overflow-hidden animate-pulse">
                <div className="aspect-w-16 aspect-h-12 bg-gray-200" />
                <div className="p-4">
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
                  <div className="flex gap-2">
                    <div className="h-6 bg-gray-200 rounded-full w-16" />
                    <div className="h-6 bg-gray-200 rounded-full w-16" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
            {filteredRecipes.map((recipe) => (
              <div key={recipe.id} className="break-inside-avoid-column mb-8">
                <RecipeCard
                  recipe={recipe}
                  onSave={handleSaveRecipe}
                  isSaved={savedRecipes.includes(recipe.id)}
                />
              </div>
            ))}
          </div>
        )}
      </div>
      <BottomNav />
    </div>
  );
};

export default HomePage; 