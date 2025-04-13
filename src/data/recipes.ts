export interface Recipe {
  id: number;
  title: string;
  dietTags: string[];
  ingredients: {
    item: string;
    warning: boolean;
  }[];
  instructions: string;
  image: string;
}

export const recipes: Recipe[] = [
  {
    id: 1,
    title: "Zucchini Noodles with Avocado Pesto",
    dietTags: ["vegan", "gluten-free", "dairy-free", "paleo", "low-carb"],
    ingredients: [
      { item: "Zucchini", warning: false },
      { item: "Avocado", warning: false },
      { item: "Pine Nuts", warning: false },
      { item: "Basil", warning: false },
      { item: "Lemon Juice", warning: false },
      { item: "Olive Oil", warning: false },
      { item: "Salt", warning: false }
    ],
    instructions: "1. Spiralize zucchini into noodles\n2. In a food processor, blend avocado, pine nuts, basil, lemon juice, and olive oil until smooth\n3. Toss zucchini noodles with the pesto sauce\n4. Season with salt to taste",
    image: "zucchini-pesto.jpg"
  },
  {
    id: 2,
    title: "Quinoa Buddha Bowl",
    dietTags: ["vegan", "gluten-free", "dairy-free", "nut-free"],
    ingredients: [
      { item: "Quinoa", warning: false },
      { item: "Cucumber", warning: false },
      { item: "Carrots", warning: false },
      { item: "Avocado", warning: false },
      { item: "Tahini", warning: false },
      { item: "Lemon Juice", warning: false },
      { item: "Olive Oil", warning: false }
    ],
    instructions: "1. Cook quinoa according to package instructions\n2. Chop vegetables into bite-sized pieces\n3. Mix tahini, lemon juice, and olive oil for dressing\n4. Assemble bowl with quinoa, vegetables, and drizzle with dressing",
    image: "buddha-bowl.jpg"
  },
  {
    id: 3,
    title: "Low-FODMAP Chicken Stir Fry",
    dietTags: ["low-fodmap", "gluten-free", "dairy-free", "soy-free", "paleo"],
    ingredients: [
      { item: "Chicken Breast", warning: false },
      { item: "Bell Peppers", warning: false },
      { item: "Carrots", warning: false },
      { item: "Green Beans", warning: false },
      { item: "Ginger", warning: false },
      { item: "Gluten-free Soy Sauce", warning: false },
      { item: "Rice", warning: false }
    ],
    instructions: "1. Cook rice according to package instructions\n2. Cut chicken into bite-sized pieces\n3. Stir-fry vegetables in a pan with ginger\n4. Add chicken and cook until done\n5. Add gluten-free soy sauce and serve over rice",
    image: "chicken-stir-fry.jpg"
  },
  {
    id: 4,
    title: "UC-Friendly Salmon with Mashed Potatoes",
    dietTags: ["ulcerative-colitis-friendly", "gluten-free", "dairy-free", "nut-free", "soy-free"],
    ingredients: [
      { item: "Salmon Fillet", warning: false },
      { item: "Potatoes", warning: false },
      { item: "Olive Oil", warning: false },
      { item: "Salt", warning: false },
      { item: "Dill", warning: false },
      { item: "Lemon", warning: false }
    ],
    instructions: "1. Boil potatoes until soft\n2. Mash potatoes with olive oil and salt\n3. Season salmon with dill and lemon\n4. Bake salmon at 375°F for 15-20 minutes\n5. Serve salmon over mashed potatoes",
    image: "salmon-mashed.jpg"
  },
  {
    id: 5,
    title: "Vegan Lentil Curry",
    dietTags: ["vegan", "gluten-free", "dairy-free", "nut-free"],
    ingredients: [
      { item: "Red Lentils", warning: false },
      { item: "Coconut Milk", warning: false },
      { item: "Curry Powder", warning: false },
      { item: "Spinach", warning: false },
      { item: "Onion", warning: false },
      { item: "Garlic", warning: false },
      { item: "Rice", warning: false }
    ],
    instructions: "1. Cook lentils until tender\n2. Sauté onion and garlic (optional)\n3. Add curry powder and coconut milk\n4. Simmer until thickened\n5. Add spinach and cook until wilted\n6. Serve over rice",
    image: "lentil-curry.jpg"
  },
  {
    id: 6,
    title: "Gluten-Free Banana Pancakes",
    dietTags: ["gluten-free", "vegetarian", "nut-free", "soy-free"],
    ingredients: [
      { item: "Ripe Bananas", warning: false },
      { item: "Eggs", warning: false },
      { item: "Almond Flour", warning: false },
      { item: "Baking Powder", warning: false },
      { item: "Maple Syrup", warning: false },
      { item: "Berries", warning: false }
    ],
    instructions: "1. Mash bananas in a bowl\n2. Add eggs and mix well\n3. Stir in almond flour and baking powder\n4. Cook on a griddle until golden brown\n5. Top with berries and maple syrup",
    image: "banana-pancakes.jpg"
  },
  {
    id: 7,
    title: "Low-FODMAP Turkey Meatballs",
    dietTags: ["low-fodmap", "gluten-free", "dairy-free", "nut-free", "soy-free"],
    ingredients: [
      { item: "Ground Turkey", warning: false },
      { item: "Egg", warning: false },
      { item: "Gluten-free Breadcrumbs", warning: false },
      { item: "Parsley", warning: false },
      { item: "Salt", warning: false },
      { item: "Pepper", warning: false }
    ],
    instructions: "1. Mix all ingredients in a bowl\n2. Form into meatballs\n3. Bake at 375°F for 20-25 minutes\n4. Serve with gluten-free pasta or rice",
    image: "turkey-meatballs.jpg"
  },
  {
    id: 8,
    title: "Low-FODMAP Overnight Oats",
    dietTags: ["low-fodmap", "gluten-free", "vegetarian", "nut-free", "soy-free"],
    ingredients: [
      { item: "Gluten-free Oats", warning: false },
      { item: "Lactose-free Milk", warning: false },
      { item: "Chia Seeds", warning: false },
      { item: "Maple Syrup", warning: false },
      { item: "Blueberries", warning: false },
      { item: "Cinnamon", warning: false }
    ],
    instructions: "1. Mix oats, milk, and chia seeds in a jar\n2. Add maple syrup and cinnamon\n3. Refrigerate overnight\n4. Top with blueberries before serving",
    image: "overnight-oats.jpg"
  },
  {
    id: 9,
    title: "UC-Friendly Butternut Squash Soup",
    dietTags: ["ulcerative-colitis-friendly", "vegan", "gluten-free", "dairy-free", "nut-free", "soy-free"],
    ingredients: [
      { item: "Butternut Squash", warning: false },
      { item: "Carrots", warning: false },
      { item: "Olive Oil", warning: false },
      { item: "Vegetable Broth", warning: false },
      { item: "Salt", warning: false },
      { item: "Ginger", warning: false }
    ],
    instructions: "1. Roast squash and carrots with olive oil\n2. Blend with vegetable broth until smooth\n3. Add ginger and salt to taste\n4. Simmer for 10 minutes",
    image: "butternut-soup.jpg"
  },
  {
    id: 10,
    title: "Gluten-Free Buckwheat Crepes",
    dietTags: ["gluten-free", "vegetarian", "nut-free", "soy-free"],
    ingredients: [
      { item: "Buckwheat Flour", warning: false },
      { item: "Eggs", warning: false },
      { item: "Lactose-free Milk", warning: false },
      { item: "Butter", warning: false },
      { item: "Strawberries", warning: false },
      { item: "Honey", warning: false }
    ],
    instructions: "1. Mix flour, eggs, and milk into a batter\n2. Heat butter in a pan\n3. Cook thin crepes until golden\n4. Serve with strawberries and honey",
    image: "buckwheat-crepes.jpg"
  },
  {
    id: 11,
    title: "Vegan Tofu Scramble",
    dietTags: ["vegan", "gluten-free", "dairy-free", "nut-free"],
    ingredients: [
      { item: "Firm Tofu", warning: false },
      { item: "Turmeric", warning: false },
      { item: "Bell Peppers", warning: false },
      { item: "Spinach", warning: false },
      { item: "Nutritional Yeast", warning: false },
      { item: "Olive Oil", warning: false }
    ],
    instructions: "1. Crumble tofu into a pan\n2. Add turmeric for color\n3. Sauté with vegetables\n4. Stir in nutritional yeast\n5. Cook until heated through",
    image: "tofu-scramble.jpg"
  },
  {
    id: 12,
    title: "Low-FODMAP Fish Tacos",
    dietTags: ["low-fodmap", "gluten-free", "dairy-free", "nut-free", "soy-free"],
    ingredients: [
      { item: "White Fish", warning: false },
      { item: "Corn Tortillas", warning: false },
      { item: "Cabbage", warning: false },
      { item: "Lime", warning: false },
      { item: "Cilantro", warning: false },
      { item: "Avocado", warning: false }
    ],
    instructions: "1. Season and grill fish\n2. Warm tortillas\n3. Shred cabbage\n4. Assemble tacos with fish, cabbage, and avocado\n5. Top with lime and cilantro",
    image: "fish-tacos.jpg"
  },
  {
    id: 13,
    title: "UC-Friendly Chicken and Rice",
    dietTags: ["ulcerative-colitis-friendly", "gluten-free", "dairy-free", "nut-free", "soy-free"],
    ingredients: [
      { item: "Chicken Breast", warning: false },
      { item: "White Rice", warning: false },
      { item: "Carrots", warning: false },
      { item: "Zucchini", warning: false },
      { item: "Olive Oil", warning: false },
      { item: "Salt", warning: false }
    ],
    instructions: "1. Cook rice according to package\n2. Sauté vegetables in olive oil\n3. Grill chicken until done\n4. Combine and season with salt",
    image: "chicken-rice.jpg"
  },
  {
    id: 14,
    title: "Vegan Chocolate Avocado Mousse",
    dietTags: ["vegan", "gluten-free", "dairy-free", "nut-free", "soy-free"],
    ingredients: [
      { item: "Ripe Avocados", warning: false },
      { item: "Cocoa Powder", warning: false },
      { item: "Maple Syrup", warning: false },
      { item: "Vanilla Extract", warning: false },
      { item: "Almond Milk", warning: false },
      { item: "Berries", warning: false }
    ],
    instructions: "1. Blend avocados until smooth\n2. Add cocoa powder and maple syrup\n3. Mix in vanilla and almond milk\n4. Chill for 2 hours\n5. Top with berries",
    image: "chocolate-mousse.jpg"
  }
]; 