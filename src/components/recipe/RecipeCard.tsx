import { Link } from 'react-router-dom';
import { Recipe } from '../../data/recipes';
import { getRecipeImage } from '../../utils/recipeImages';
import { useState } from 'react';

interface RecipeCardProps {
  recipe: Recipe;
  onSave: (id: number) => void;
  isSaved: boolean;
}

export const RecipeCard = ({ recipe, onSave, isSaved }: RecipeCardProps) => {
  const image = getRecipeImage(recipe.id);
  const [isLoading, setIsLoading] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-white rounded-xl shadow-sm overflow-hidden transition-transform duration-200 hover:-translate-y-1 hover:shadow-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <Link to={`/recipe/${recipe.id}`} className="block">
          <div className="aspect-w-16 aspect-h-12 relative">
            {isLoading && (
              <div className="absolute inset-0 bg-gray-100 animate-pulse" />
            )}
            <img
              src={image.url}
              alt={image.alt}
              className={`w-full h-full object-cover transition-opacity duration-300 ${
                isLoading ? 'opacity-0' : 'opacity-100'
              }`}
              onLoad={() => setIsLoading(false)}
            />
            {isHovered && (
              <div className="absolute inset-0 bg-black/30 transition-all duration-200 flex items-center justify-center">
                <span className="px-4 py-2 bg-white bg-opacity-90 rounded-full text-sm font-medium text-gray-900">
                  View Recipe
                </span>
              </div>
            )}
          </div>
        </Link>
        {isSaved && (
          <button
            onClick={() => onSave(recipe.id)}
            className="absolute top-3 right-3 p-2 rounded-full bg-white bg-opacity-90 shadow-sm hover:bg-opacity-100 transition-all duration-200"
          >
            <svg className="w-5 h-5 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
          </button>
        )}
      </div>

      <div className="p-4">
        <Link to={`/recipe/${recipe.id}`}>
          <h3 className="text-lg font-medium text-gray-900 mb-2 line-clamp-2 hover:text-teal-700 transition-colors duration-200">
            {recipe.title}
          </h3>
        </Link>
        <div className="flex flex-wrap gap-2">
          {recipe.dietTags.map((tag: string, index: number) => (
            <span
              key={index}
              className="px-3 py-1 bg-teal-50 text-teal-700 text-sm font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
          {!isSaved && (
            <button
              onClick={() => onSave(recipe.id)}
              className="px-3 py-1 bg-gray-50 text-gray-600 text-sm font-medium rounded-full hover:bg-gray-100 transition-colors duration-200"
            >
              + Save
            </button>
          )}
        </div>
      </div>
    </div>
  );
}; 