import { useParams, Link } from 'react-router-dom';
import { recipes } from '../data/recipes';
import { hasWarningIngredient } from '../utils/recipeUtils';

export const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === Number(id));

  if (!recipe) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Recipe Not Found</h1>
          <p className="text-gray-600 mb-6">
            The recipe you're looking for doesn't exist or may have been removed.
          </p>
          <Link
            to="/"
            className="inline-block px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Back to Recipes
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          <Link
            to="/"
            className="inline-block text-blue-500 hover:text-blue-600 mb-4"
          >
            ← Back to Recipes
          </Link>
        </div>

        <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {recipe.dietTags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Ingredients</h2>
            <ul className="space-y-2">
              {recipe.ingredients.map((ingredient, index) => {
                const hasWarning = hasWarningIngredient(ingredient.item);
                
                return (
                  <li key={index} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span className={hasWarning ? "text-red-600" : ""}>
                      {ingredient.item}
                      {hasWarning && (
                        <span className="ml-2 text-xs bg-red-100 text-red-800 px-2 py-1 rounded">
                          Warning
                        </span>
                      )}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Instructions</h2>
            <div className="whitespace-pre-line bg-gray-50 p-4 rounded-lg">
              {recipe.instructions}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 