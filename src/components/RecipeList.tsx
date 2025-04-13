import { useState, useEffect } from 'react';
import { Recipe } from '../data/recipes';
import { RecipeCard } from './RecipeCard';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { DIET_TAGS, DietTag } from '../constants';

interface RecipeListProps {
  recipes: Recipe[];
  showFilters?: boolean;
}

export const RecipeList = ({ recipes: initialRecipes, showFilters = true }: RecipeListProps) => {
  const [selectedTags, setSelectedTags] = useLocalStorage<DietTag[]>('SELECTED_TAGS', []);
  const [savedRecipes, setSavedRecipes] = useLocalStorage<number[]>('SAVED_RECIPES', []);
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>(initialRecipes);

  // Filter recipes based on selected tags
  useEffect(() => {
    if (selectedTags.length === 0) {
      setFilteredRecipes(initialRecipes);
    } else {
      setFilteredRecipes(
        initialRecipes.filter((recipe) =>
          selectedTags.every((tag) => recipe.dietTags.includes(tag))
        )
      );
    }
  }, [selectedTags, initialRecipes]);

  const handleTagToggle = (tag: DietTag) => {
    setSelectedTags((prev) =>
      prev.includes(tag)
        ? prev.filter((t) => t !== tag)
        : [...prev, tag]
    );
  };

  const handleClearAll = () => {
    setSelectedTags([]);
  };

  const handleSaveRecipe = (recipeId: number) => {
    setSavedRecipes((prev) =>
      prev.includes(recipeId)
        ? prev.filter((id) => id !== recipeId)
        : [...prev, recipeId]
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {showFilters && (
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800">Filter by Diet</h2>
            {selectedTags.length > 0 && (
              <button
                onClick={handleClearAll}
                className="text-sm text-gray-600 hover:text-gray-800 transition-colors"
              >
                Clear All
              </button>
            )}
          </div>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {DIET_TAGS.map((tag) => (
              <button
                key={tag}
                onClick={() => handleTagToggle(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedTags.includes(tag)
                    ? 'bg-blue-500 text-white hover:bg-blue-600'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {selectedTags.length > 0 && (
            <div className="text-sm text-gray-600">
              Filters Applied: {selectedTags.join(', ')}
            </div>
          )}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRecipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            onSave={handleSaveRecipe}
            isSaved={savedRecipes.includes(recipe.id)}
          />
        ))}
      </div>
    </div>
  );
}; 