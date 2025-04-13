import { Link } from 'react-router-dom';
import { Recipe } from '../data/recipes';
import { PlaceholderImage } from './PlaceholderImage';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { getIngredientWarnings } from '../utils/ingredientUtils';
import { AvoidableIngredient } from '../constants';

interface RecipeCardProps {
  recipe: Recipe;
  onSave: (recipeId: number) => void;
  isSaved: boolean;
}

export const RecipeCard = ({ recipe, onSave, isSaved }: RecipeCardProps) => {
  const [avoidedIngredients] = useLocalStorage<AvoidableIngredient[]>('AVOIDED_INGREDIENTS', []);
  const ingredientsWithWarnings = getIngredientWarnings(recipe.ingredients, avoidedIngredients);
  const hasWarnings = ingredientsWithWarnings.some(ingredient => ingredient.warning);

  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ${
      hasWarnings ? 'border-l-4 border-red-500' : ''
    }`}>
      <div className="aspect-w-16 aspect-h-9">
        <PlaceholderImage className="w-full h-48" />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <Link to={`/recipe/${recipe.id}`} className="hover:text-blue-600">
            <h3 className="text-lg font-semibold text-gray-800">{recipe.title}</h3>
          </Link>
          <button
            onClick={() => onSave(recipe.id)}
            className={`p-2 rounded-full ${
              isSaved ? 'text-red-500 hover:text-red-600' : 'text-gray-400 hover:text-gray-500'
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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

        {hasWarnings && (
          <div className="flex items-center text-red-500 text-sm mb-2">
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
            Contains ingredients you're avoiding
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          {recipe.dietTags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}; 