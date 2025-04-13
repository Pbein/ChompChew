import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import { RecipeCard } from '../RecipeCard';
import type { Recipe } from '../../../data/recipes';

const mockRecipe: Recipe = {
  id: 1,
  title: 'Test Recipe',
  description: 'A test recipe description',
  dietTags: ['vegan', 'gluten-free'],
  ingredients: [
    { item: 'Tofu', warning: false },
    { item: 'Rice', warning: false },
    { item: 'Vegetables', warning: false }
  ],
  sections: {
    ingredients: [{
      title: 'Main Ingredients',
      items: ['1 block tofu', '1 cup rice', '2 cups mixed vegetables']
    }],
    instructions: [{
      title: 'Cooking Steps',
      steps: ['Step 1: Cook tofu', 'Step 2: Add vegetables']
    }]
  },
  instructions: 'Cook tofu, add vegetables, serve hot',
  image: '/images/test-recipe.jpg'
};

const renderWithRouter = (component: React.ReactElement) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

describe('RecipeCard', () => {
  test('renders recipe title and diet tags', () => {
    renderWithRouter(
      <RecipeCard
        recipe={mockRecipe}
        isSaved={false}
        onSaveToggle={() => {}}
        avoidedIngredients={[]}
      />
    );

    expect(screen.getByText('Test Recipe')).toBeInTheDocument();
    expect(screen.getByText('vegan')).toBeInTheDocument();
    expect(screen.getByText('gluten-free')).toBeInTheDocument();
  });

  test('shows save button', () => {
    renderWithRouter(
      <RecipeCard
        recipe={mockRecipe}
        isSaved={false}
        onSaveToggle={() => {}}
        avoidedIngredients={[]}
      />
    );

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('displays warning for avoided ingredients', () => {
    renderWithRouter(
      <RecipeCard
        recipe={mockRecipe}
        isSaved={false}
        onSaveToggle={() => {}}
        avoidedIngredients={['Tofu']}
      />
    );

    expect(screen.getByText(/Contains: Tofu/)).toBeInTheDocument();
  });
}); 