import { useParams, Link } from 'react-router-dom';
import { recipes } from '../data/recipes';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { getIngredientWarnings } from '../utils/ingredientUtils';
import { getRecipeImage } from '../utils/recipeImages';

const RecipeDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const recipe = recipes.find(r => r.id === Number(id));
  const [savedRecipes, setSavedRecipes] = useLocalStorage<number[]>('SAVED_RECIPES', []);
  const [avoidedIngredients] = useLocalStorage<number[]>('AVOIDED_INGREDIENTS', []);

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  const image = getRecipeImage(recipe.id);
  const isSaved = savedRecipes.includes(recipe.id);
  const ingredientsWithWarnings = getIngredientWarnings(recipe.ingredients, avoidedIngredients);
  const hasWarnings = ingredientsWithWarnings.some(i => i.warning);

  const toggleSaved = () => {
    setSavedRecipes(prev => 
      prev.includes(recipe.id)
        ? prev.filter(id => id !== recipe.id)
        : [...prev, recipe.id]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-6">
          <Link
            to="/"
            className="inline-block text-blue-500 hover:text-blue-600 mb-4"
          >
            ← Back to Recipes
          </Link>
        </div>

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

        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="relative max-h-[400px] overflow-hidden">
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-[400px] object-cover object-center"
            />
          </div>

          <div className="p-6">
            <div className="flex items-start justify-between">
              <h1 className="text-3xl font-bold text-gray-900">{recipe.title}</h1>
              <button
                onClick={toggleSaved}
                className={`p-2 rounded-full ${
                  isSaved
                    ? 'text-blue-500 hover:text-blue-600'
                    : 'text-gray-400 hover:text-gray-500'
                }`}
              >
                <svg
                  className="w-6 h-6"
                  fill={isSaved ? 'currentColor' : 'none'}
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
              </button>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {recipe.dietTags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="mt-6 text-gray-600 text-lg">{recipe.sections.introduction}</p>

            {recipe.sections.ingredients.map((section, index) => (
              <div key={index} className="mt-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">{section.title}</h2>
                <ul className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start text-gray-600">
                      <span className="mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {recipe.sections.instructions.map((section, index) => (
              <div key={index} className="mt-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">{section.title}</h2>
                <ol className="space-y-4">
                  {section.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="flex items-start">
                      <span className="font-medium text-blue-500 mr-4">{stepIndex + 1}.</span>
                      <span className="text-gray-600">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}

            {recipe.sections.tips && (
              <div className="mt-8 bg-yellow-50 p-6 rounded-lg">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">💡 Pro Tips</h2>
                <ul className="space-y-2">
                  {recipe.sections.tips.map((tip, index) => (
                    <li key={index} className="flex items-start text-gray-600">
                      <span className="mr-2">•</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetailPage; 