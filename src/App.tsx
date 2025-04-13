import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/common/ErrorBoundary';
import LoadingSpinner from './components/common/LoadingSpinner';
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
        <div className="flex flex-col min-h-screen">
          <DesktopNav />
          <main className="flex-grow">
            <Suspense fallback={<LoadingSpinner className="min-h-screen" />}>
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
