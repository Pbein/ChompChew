import { Link } from 'react-router-dom';
import { Recipe } from '../../data/recipes';
import { getRecipeImage } from '../../utils/recipeImages';
import { useState } from 'react';
import { HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

interface RecipeCardProps {
  recipe: Recipe;
  isSaved: boolean;
  onSaveToggle: () => void;
  avoidedIngredients: string[];
}

const INGREDIENT_MAPPINGS: { [key: string]: string[] } = {
  'Tree Nuts': [
    'almond', 'cashew', 'walnut', 'pecan', 'pine nut', 'pistachio', 
    'macadamia', 'brazil nut', 'hazelnut', 'pine nuts'
  ],
  'Dairy': [
    'milk', 'cheese', 'yogurt', 'cream', 'butter', 'whey', 
    'casein', 'lactose', 'parmesan', 'mozzarella'
  ],
  'Soy': [
    'soy', 'tofu', 'edamame', 'tempeh', 'miso', 'soya'
  ],
  'Gluten': [
    'wheat', 'barley', 'rye', 'malt', 'couscous', 'farro', 
    'semolina', 'spelt', 'graham'
  ],
  'Fish': [
    'cod', 'salmon', 'tuna', 'tilapia', 'halibut', 'anchovy',
    'sardine', 'trout', 'bass', 'fish'
  ],
  'Shellfish': [
    'shrimp', 'crab', 'lobster', 'prawn', 'clam', 'mussel',
    'oyster', 'scallop', 'crawfish'
  ],
  'Eggs': [
    'egg', 'eggs', 'mayonnaise', 'albumen', 'meringue'
  ],
  'Peanuts': [
    'peanut', 'groundnut', 'arachis', 'goober'
  ]
};

export const RecipeCard = ({ recipe, isSaved, onSaveToggle, avoidedIngredients }: RecipeCardProps) => {
  const image = getRecipeImage(recipe.id);
  const [isLoading, setIsLoading] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [showWarningDetails, setShowWarningDetails] = useState(false);

  const ingredientsWithWarnings = recipe.ingredients.filter(ingredient => 
    avoidedIngredients.some(avoided => {
      const ingredientName = ingredient.item?.toLowerCase() || '';
      const avoidedName = String(avoided).toLowerCase();
      
      // Skip if the ingredient is explicitly marked as safe
      if (ingredientName.includes(`${avoidedName}-free`) || 
          ingredientName.includes(`free of ${avoidedName}`) ||
          ingredientName.includes(`no ${avoidedName}`)) {
        return false;
      }
      
      // Check if the ingredient directly contains the avoided item
      if (ingredientName.includes(avoidedName)) {
        return true;
      }

      // Check if the ingredient matches any mapped items for the avoided category
      if (INGREDIENT_MAPPINGS[avoided]) {
        return INGREDIENT_MAPPINGS[avoided].some(mappedItem => 
          ingredientName.includes(mappedItem.toLowerCase())
        );
      }
      
      return false;
    })
  );

  const hasWarnings = ingredientsWithWarnings.length > 0;

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
            {hasWarnings && (
              <div 
                className="absolute top-2 right-2 max-w-[67%] bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium flex items-start gap-1 cursor-help"
                onMouseEnter={() => setShowWarningDetails(true)}
                onMouseLeave={() => setShowWarningDetails(false)}
              >
                <ExclamationTriangleIcon className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span className="line-clamp-2">⚠️ Contains: {ingredientsWithWarnings.map(ing => ing.item).join(', ')}</span>
                {showWarningDetails && (
                  <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg p-3 text-left z-10">
                    <p className="text-sm font-medium text-gray-900 mb-1">Ingredients to avoid:</p>
                    <ul className="text-sm text-gray-600">
                      {ingredientsWithWarnings.map((ingredient, index) => (
                        <li key={index} className="flex items-start gap-1">
                          <ExclamationTriangleIcon className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                          <span className="break-words">{ingredient.item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        </Link>
        <button
          onClick={onSaveToggle}
          className="absolute top-3 left-3 p-2 rounded-full bg-white bg-opacity-90 shadow-sm hover:bg-opacity-100 transition-all duration-200"
        >
          {isSaved ? (
            <HeartIconSolid className="w-5 h-5 text-red-500" />
          ) : (
            <HeartIcon className="w-5 h-5 text-gray-400" />
          )}
        </button>
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
        </div>
      </div>
    </div>
  );
}; 