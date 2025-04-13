import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useLocalStorage } from '../hooks/useLocalStorage';

const DIETARY_FLAGS = [
  'Dairy',
  'Eggs',
  'Fish',
  'Shellfish',
  'Tree Nuts',
  'Peanuts',
  'Wheat',
  'Soy',
  'Sesame',
  'Gluten',
  'Garlic',
  'Onion',
  'Lactose',
  'FODMAPs',
  'Nightshades',
  'Caffeine',
  'Alcohol',
  'Processed Sugar',
  'Artificial Sweeteners',
  'MSG',
  'Sulfites',
  'Histamine',
  'Oxalates',
  'Lectins',
  'Salicylates'
];

const PreferencesPage = () => {
  const navigate = useNavigate();
  const [avoidedIngredients, setAvoidedIngredients] = useLocalStorage<string[]>('AVOIDED_INGREDIENTS', []);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSavePreferences = () => {
    navigate('/');
  };

  const toggleIngredient = (ingredient: string) => {
    setAvoidedIngredients(prev => {
      if (prev.includes(ingredient)) {
        return prev.filter(item => item !== ingredient);
      } else {
        return [...prev, ingredient];
      }
    });
  };

  const filteredFlags = DIETARY_FLAGS.filter(flag =>
    flag.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Back to Recipes
          </button>
          <button
            onClick={handleSavePreferences}
            className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors duration-200"
          >
            Save Preferences
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Dietary Preferences</h1>
          
          <div className="mb-6">
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
              Search Dietary Flags
            </label>
            <input
              type="text"
              id="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for ingredients to avoid..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-medium text-gray-900">Select ingredients to avoid:</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {filteredFlags.map((flag) => (
                <button
                  key={flag}
                  onClick={() => toggleIngredient(flag)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    avoidedIngredients.includes(flag)
                      ? 'bg-teal-100 text-teal-800 border-2 border-teal-500'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border-2 border-transparent'
                  }`}
                >
                  {flag}
                </button>
              ))}
            </div>
          </div>

          {avoidedIngredients.length > 0 && (
            <div className="mt-8">
              <h2 className="text-lg font-medium text-gray-900 mb-3">Currently Avoiding:</h2>
              <div className="flex flex-wrap gap-2">
                {avoidedIngredients.map((ingredient) => (
                  <span
                    key={ingredient}
                    className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm font-medium flex items-center gap-1"
                  >
                    {ingredient}
                    <button
                      onClick={() => toggleIngredient(ingredient)}
                      className="ml-1 text-teal-600 hover:text-teal-800"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PreferencesPage; 