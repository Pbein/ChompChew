import { useLocalStorage } from '../hooks/useLocalStorage';
import { AVOIDABLE_INGREDIENTS, AvoidableIngredient } from '../constants';
import { Link } from 'react-router-dom';

export const Preferences = () => {
  const [avoidedIngredients, setAvoidedIngredients] = useLocalStorage<AvoidableIngredient[]>(
    'AVOIDED_INGREDIENTS',
    []
  );

  const handleToggleIngredient = (ingredient: AvoidableIngredient) => {
    setAvoidedIngredients(prev =>
      prev.includes(ingredient)
        ? prev.filter(i => i !== ingredient)
        : [...prev, ingredient]
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Dietary Preferences</h1>
          <Link
            to="/"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Back to Recipes
          </Link>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6">
          <p className="text-gray-600 mb-6">
            Select ingredients you'd like to avoid in your recipes. This will help us filter out recipes that contain these ingredients.
          </p>

          <div className="space-y-4">
            {AVOIDABLE_INGREDIENTS.map((ingredient) => (
              <label
                key={ingredient}
                className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={avoidedIngredients.includes(ingredient)}
                  onChange={() => handleToggleIngredient(ingredient)}
                  className="w-5 h-5 text-blue-500 rounded border-gray-300 focus:ring-blue-500"
                />
                <span className="text-gray-700 capitalize">{ingredient}</span>
              </label>
            ))}
          </div>

          {avoidedIngredients.length > 0 && (
            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">Currently Avoiding:</h2>
              <p className="text-gray-600">
                {avoidedIngredients.map(ingredient => 
                  ingredient.charAt(0).toUpperCase() + ingredient.slice(1)
                ).join(', ')}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}; 