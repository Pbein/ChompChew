import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Home } from './pages/Home';
import { RecipeDetail } from './pages/RecipeDetail';
import { SavedRecipes } from './pages/SavedRecipes';
import { Preferences } from './pages/Preferences';
import { useLocalStorage } from './hooks/useLocalStorage';
import { AvoidableIngredient } from './constants';

function Navigation() {
  const location = useLocation();
  const [avoidedIngredients] = useLocalStorage<AvoidableIngredient[]>('AVOIDED_INGREDIENTS', []);

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col space-y-4">
          <div className="flex justify-between items-start">
            <Link to="/" className="block">
              <h1 className="text-3xl font-bold text-gray-800">
                Dietary-Friendly Recipes
              </h1>
              <p className="text-gray-600 mt-2">
                Discover recipes tailored to your dietary needs
              </p>
            </Link>
            
            <nav className="flex space-x-4">
              <Link
                to="/saved"
                className={`px-4 py-2 rounded-lg ${
                  location.pathname === '/saved'
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Saved Recipes
              </Link>
              <Link
                to="/preferences"
                className={`px-4 py-2 rounded-lg ${
                  location.pathname === '/preferences'
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Preferences
              </Link>
            </nav>
          </div>

          {location.pathname === '/' && avoidedIngredients.length > 0 && (
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">
                <span className="font-medium">Active Preferences:</span>{' '}
                {avoidedIngredients.map(ingredient => 
                  ingredient.charAt(0).toUpperCase() + ingredient.slice(1)
                ).join(', ')}
              </p>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipe/:id" element={<RecipeDetail />} />
            <Route path="/saved" element={<SavedRecipes />} />
            <Route path="/preferences" element={<Preferences />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
