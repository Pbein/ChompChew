import { useLocalStorage } from '../hooks/useLocalStorage';
import { DIET_TAGS } from '../constants';
import BottomNav from '../components/navigation/BottomNav';

const PreferencesPage = () => {
  const [selectedDietTags, setSelectedDietTags] = useLocalStorage<string[]>('SELECTED_TAGS', []);
  const [avoidedIngredients, setAvoidedIngredients] = useLocalStorage<string[]>('AVOIDED_INGREDIENTS', []);

  const handleDietTagToggle = (tag: string) => {
    setSelectedDietTags(prev => 
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  return (
    <div className="min-h-screen bg-white pb-16">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Dietary Preferences</h1>
        
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Dietary Restrictions</h2>
          <div className="flex flex-wrap gap-2">
            {DIET_TAGS.map((tag) => (
              <button
                key={tag}
                onClick={() => handleDietTagToggle(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedDietTags.includes(tag)
                    ? 'bg-teal-100 text-teal-800 border border-teal-200'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Ingredient Warnings</h2>
          <p className="text-gray-600 mb-4">
            Recipes containing these ingredients will be flagged with a warning icon.
          </p>
          <div className="space-y-4">
            {['Nuts', 'Dairy', 'Gluten', 'Soy'].map((ingredient) => (
              <div key={ingredient} className="flex items-center">
                <input
                  type="checkbox"
                  id={ingredient.toLowerCase()}
                  checked={avoidedIngredients.includes(ingredient.toLowerCase())}
                  onChange={() => {
                    setAvoidedIngredients(prev => 
                      prev.includes(ingredient.toLowerCase())
                        ? prev.filter(i => i !== ingredient.toLowerCase())
                        : [...prev, ingredient.toLowerCase()]
                    );
                  }}
                  className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                />
                <label htmlFor={ingredient.toLowerCase()} className="ml-2 block text-sm text-gray-700">
                  {ingredient}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-teal-50 p-4 rounded-lg">
          <h3 className="text-teal-800 font-medium mb-2">How this works</h3>
          <p className="text-teal-700 text-sm">
            When you select dietary restrictions and ingredient warnings, recipes that don't match your preferences will be flagged with a warning icon. This helps you quickly identify recipes that might not be suitable for your dietary needs.
          </p>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default PreferencesPage; 