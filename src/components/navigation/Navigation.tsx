import { Link } from 'react-router-dom';
import { useState } from 'react';

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-12">
          {/* Logo/Title */}
          <Link to="/" className="text-lg font-bold text-gray-900">
            Dietary-Friendly
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/saved"
              className="text-sm text-gray-600 hover:text-blue-600"
            >
              Saved Recipes
            </Link>
            <Link
              to="/preferences"
              className="text-sm text-gray-600 hover:text-blue-600"
            >
              Preferences
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-blue-600 focus:outline-none p-1"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-2 border-t border-gray-100">
            <div className="flex flex-col space-y-2">
              <Link
                to="/saved"
                className="text-sm text-gray-600 hover:text-blue-600 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Saved Recipes
              </Link>
              <Link
                to="/preferences"
                className="text-sm text-gray-600 hover:text-blue-600 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Preferences
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}; 