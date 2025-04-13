import { Link, useLocation } from 'react-router-dom';

export const DesktopNav = () => {
  const location = useLocation();

  return (
    <nav className="hidden md:block bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to="/" className="text-3xl font-bold text-teal-900">
              ChompChew
              <span role="img" aria-label="fork" className="text-gray-400 ml-2">🍴</span>
            </Link>
            <p className="text-gray-600 text-sm ml-4">Find recipes that fit your dietary needs</p>
          </div>
          <div className="flex items-center gap-8">
            <Link
              to="/saved"
              className={`text-base font-medium transition-colors duration-200 ${
                location.pathname === '/saved' 
                  ? 'text-blue-700' 
                  : 'text-blue-500 hover:text-blue-600'
              }`}
            >
              Saved Recipes
            </Link>
            <Link
              to="/preferences"
              className={`text-base font-medium transition-colors duration-200 ${
                location.pathname === '/preferences' 
                  ? 'text-blue-700' 
                  : 'text-blue-500 hover:text-blue-600'
              }`}
            >
              Dietary Preferences
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}; 