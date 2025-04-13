import { useParams } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { getIngredientWarnings } from '../utils/ingredientUtils';
import { recipes } from '../data/recipes';

export const RecipeDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [savedRecipes, setSavedRecipes] = useLocalStorage<number[]>('SAVED_RECIPES', []);
  const [avoidedIngredients] = useLocalStorage<number[]>('AVOIDED_INGREDIENTS', []);
  
  const recipe = recipes.find(r => r.id === Number(id));
  
  if (!recipe) {
    return <div>Recipe not found</div>;
  }
  
  const isSaved = savedRecipes.includes(recipe.id);
  const ingredientsWithWarnings = getIngredientWarnings(recipe.ingredients, avoidedIngredients);
  const hasWarnings = ingredientsWithWarnings.some(ingredient => ingredient.warning);
  
  const toggleSaved = () => {
    setSavedRecipes((prev: number[]) => {
      const newSavedRecipes = prev.includes(recipe.id) 
        ? prev.filter(id => id !== recipe.id)
        : [...prev, recipe.id];
      return newSavedRecipes;
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        {hasWarnings && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-8">
            <div className="flex items-start">
              <svg
                className="w-6 h-6 text-red-500 mr-3 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <div>
                <h3 className="text-lg font-semibold text-red-800">Warning: Contains Ingredients You're Avoiding</h3>
                <p className="text-red-600 mt-1">
                  This recipe contains ingredients that match your dietary preferences. Please review the ingredients list below.
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-between items-start mb-8">
          <h1 className="text-3xl font-bold text-gray-800">{recipe.title}</h1>
          <button
            onClick={toggleSaved}
            className={`p-2 rounded-full ${
              isSaved
                ? 'text-red-500 hover:text-red-600'
                : 'text-gray-400 hover:text-gray-500'
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill={isSaved ? 'currentColor' : 'none'}
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Dietary Tags</h2>
          <div className="flex flex-wrap gap-2">
            {recipe.dietTags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Ingredients</h2>
          <ul className="space-y-2">
            {ingredientsWithWarnings.map((ingredient, index) => (
              <li
                key={index}
                className={`flex items-center ${
                  ingredient.warning ? 'text-red-600' : 'text-gray-700'
                }`}
              >
                {ingredient.warning && (
                  <div className="flex items-center">
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
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                    <span>{ingredient.item}</span>
                  </div>
                )}
                {!ingredient.warning && ingredient.item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Instructions</h2>
          <div className="prose max-w-none">
            {recipe.instructions.split('\n').map((step, index) => (
              <p key={index} className="mb-4">
                {step}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}; 