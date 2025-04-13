import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { RecipeDetail } from './pages/RecipeDetail';
import { SavedRecipes } from './pages/SavedRecipes';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm">
          <div className="container mx-auto px-4 py-6">
            <Link to="/" className="block">
              <h1 className="text-3xl font-bold text-gray-800">
                Dietary-Friendly Recipes
              </h1>
              <p className="text-gray-600 mt-2">
                Discover recipes tailored to your dietary needs
              </p>
            </Link>
          </div>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipe/:id" element={<RecipeDetail />} />
            <Route path="/saved" element={<SavedRecipes />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
