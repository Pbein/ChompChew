import { RecipeList } from '../components/RecipeList';
import { recipes } from '../data/recipes';

export const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">All Recipes</h1>
      <RecipeList recipes={recipes} />
    </div>
  );
}; 