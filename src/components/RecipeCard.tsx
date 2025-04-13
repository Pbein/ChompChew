import { Link } from 'react-router-dom';
import { Recipe } from '../data/recipes';
import { PlaceholderImage } from './PlaceholderImage';

interface RecipeCardProps {
  recipe: Recipe;
  onSave: (recipeId: number) => void;
  isSaved: boolean;
}

export const RecipeCard = ({ recipe, onSave, isSaved }: RecipeCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-w-16 aspect-h-9">
        <PlaceholderImage className="w-full h-48" />
      </div>
      <div className="p-4">
        <Link to={`/recipe/${recipe.id}`} className="block">
          <h3 className="text-lg font-semibold text-gray-800 mb-2 hover:text-blue-600 transition-colors">
            {recipe.title}
          </h3>
        </Link>
        <div className="flex flex-wrap gap-2 mb-3">
          {recipe.dietTags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <button
          onClick={() => onSave(recipe.id)}
          className={`px-4 py-2 rounded ${
            isSaved
              ? 'bg-gray-300 text-gray-700'
              : 'bg-blue-500 text-white hover:bg-blue-600'
          }`}
        >
          {isSaved ? 'Saved' : 'Save Recipe'}
        </button>
      </div>
    </div>
  );
}; 