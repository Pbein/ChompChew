import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { RecipeDetail } from './pages/RecipeDetail';
import { SavedRecipes } from './pages/SavedRecipes';
import { Preferences } from './pages/Preferences';
import { BottomNav } from './components/BottomNav';
import { DesktopNav } from './components/DesktopNav';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <DesktopNav />
        <main className="pb-16 md:pb-0">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/recipe/:id" element={<RecipeDetail />} />
            <Route path="/saved" element={<SavedRecipes />} />
            <Route path="/preferences" element={<Preferences />} />
          </Routes>
        </main>
        <BottomNav />
      </div>
    </Router>
  );
};

export default App;
