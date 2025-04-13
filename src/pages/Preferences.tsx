import { useLocalStorage } from '../hooks/useLocalStorage';
import { INGREDIENT_CLASSIFICATIONS } from '../data/ingredientClassifications';
import { BottomNav } from '../components/BottomNav';

export const Preferences = () => {
  const [avoidedIngredients, setAvoidedIngredients] = useLocalStorage<number[]>('AVOIDED_INGREDIENTS', []);

  const toggleIngredient = (index: number) => {
    setAvoidedIngredients(prev => 
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="py-4">
            <h1 className="text-xl font-semibold text-gray-900">Dietary Preferences</h1>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-4 pb-20">
        <div className="bg-white rounded-lg shadow-sm p-4">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Select ingredients to avoid
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {INGREDIENT_CLASSIFICATIONS.map((classification, index) => (
              <button
                key={index}
                onClick={() => toggleIngredient(index)}
                className={`p-3 rounded-lg text-left transition-colors ${
                  avoidedIngredients.includes(index)
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {classification.name}
              </button>
            ))}
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}; 