import { Link } from 'react-router-dom';
import { Recipe } from '../data/recipes';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { getIngredientWarnings } from '../utils/ingredientUtils';

interface RecipeCardProps {
  recipe: Recipe;
  onSave: (id: number) => void;
  isSaved: boolean;
}

export const RecipeCard = ({ recipe, onSave, isSaved }: RecipeCardProps) => {
  const [avoidedIngredients] = useLocalStorage<number[]>('AVOIDED_INGREDIENTS', []);
  const ingredientsWithWarnings = getIngredientWarnings(recipe.ingredients, avoidedIngredients);
  const hasWarnings = ingredientsWithWarnings.some(ingredient => ingredient.warning);

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <Link to={`/recipe/${recipe.id}`} className="block">
        <div className="aspect-w-16 aspect-h-9 bg-gray-200">
          {/* Placeholder for recipe image */}
          <div className="flex items-center justify-center">
            <svg
              className="w-8 h-8 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        </div>
      </Link>

      <div className="p-4">
        <div className="flex justify-between items-start">
          <Link to={`/recipe/${recipe.id}`} className="block">
            <h3 className="text-lg font-medium text-gray-900 line-clamp-2">
              {recipe.title}
            </h3>
          </Link>
          <button
            onClick={() => onSave(recipe.id)}
            className="flex-shrink-0 ml-2"
          >
            <svg
              className={`w-6 h-6 ${isSaved ? 'text-red-500' : 'text-gray-400'}`}
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

        <div className="mt-2 flex flex-wrap gap-1">
          {recipe.dietTags.map(tag => (
            <span
              key={tag}
              className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {hasWarnings && (
          <div className="mt-2 flex items-center text-red-500 text-sm">
            <svg
              className="w-4 h-4 mr-1"
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
            Contains ingredients to avoid
          </div>
        )}
      </div>
    </div>
  );
}; 