import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import ErrorBoundary from './components/common/ErrorBoundary';
import BottomNav from './components/navigation/BottomNav';
import { DesktopNav } from './components/navigation/DesktopNav';

// Lazy load pages
const HomePage = lazy(() => import('./pages/HomePage'));
const RecipeDetailPage = lazy(() => import('./pages/RecipeDetailPage'));
const SavedRecipesPage = lazy(() => import('./pages/SavedRecipesPage'));
const PreferencesPage = lazy(() => import('./pages/PreferencesPage'));

const App: React.FC = () => {
  return (
    <Router>
      <ErrorBoundary>
        <div className="min-h-screen bg-white">
          <DesktopNav />
          <main className="pb-16">
            <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/recipe/:id" element={<RecipeDetailPage />} />
                <Route path="/saved" element={<SavedRecipesPage />} />
                <Route path="/preferences" element={<PreferencesPage />} />
              </Routes>
            </Suspense>
          </main>
          <BottomNav />
        </div>
      </ErrorBoundary>
    </Router>
  );
};

export default App;
