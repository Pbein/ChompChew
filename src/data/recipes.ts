export interface Recipe {
  id: number;
  title: string;
  description: string;
  dietTags: string[];
  ingredients: {
    item: string;
    warning: boolean;
  }[];
  sections: {
    introduction?: string;
    ingredients: {
      title: string;
      items: string[];
    }[];
    instructions: {
      title: string;
      steps: string[];
    }[];
    tips?: string[];
  };
  instructions: string;
  image: string;
}

export const recipes: Recipe[] = [
  {
    id: 1,
    title: "Zucchini Noodles with Avocado Pesto",
    description: "Light, refreshing, and packed with flavor—perfect for a healthy lunch or dinner. Vegan, gluten-free, and low-carb, but still creamy and satisfying.",
    dietTags: ["vegan", "gluten-free", "low-carb"],
    ingredients: [
      { item: "Zucchini", warning: false },
      { item: "Avocado", warning: false },
      { item: "Pine Nuts", warning: false },
      { item: "Fresh Basil", warning: false },
      { item: "Lemon", warning: false },
      { item: "Olive Oil", warning: false },
      { item: "Salt", warning: false }
    ],
    sections: {
      introduction: "This dish is light, refreshing, and packed with flavor—perfect for a healthy lunch or dinner. It's vegan, gluten-free, and low-carb, but still creamy and satisfying.",
      ingredients: [
        {
          title: "For the noodles:",
          items: [
            "2 medium zucchinis",
            "A spiralizer or julienne peeler"
          ]
        },
        {
          title: "For the avocado pesto:",
          items: [
            "1 ripe avocado",
            "1/4 cup pine nuts (plus extra for topping if you like)",
            "1/2 cup fresh basil leaves (packed)",
            "2 tablespoons lemon juice (freshly squeezed if possible)",
            "2 tablespoons olive oil",
            "Salt, to taste"
          ]
        }
      ],
      instructions: [
        {
          title: "Prep the Zucchini Noodles:",
          steps: [
            "Rinse and dry your zucchinis.",
            "Cut off the ends, then spiralize them into noodles using a spiralizer. If you don't have one, a julienne peeler or even a regular peeler will work—you'll just get slightly thicker ribbons instead of spaghetti-like noodles.",
            "Once spiralized, lightly pat the zucchini noodles with a paper towel to absorb excess moisture. Set them aside in a bowl."
          ]
        },
        {
          title: "Make the Avocado Pesto:",
          steps: [
            "Cut the avocado in half, remove the pit, and scoop the flesh into a food processor.",
            "Add the pine nuts, fresh basil, lemon juice, and olive oil.",
            "Blend everything together until it's completely smooth. You may need to scrape down the sides once or twice to make sure it all blends evenly.",
            "Taste it and add salt as needed. If the pesto is too thick, you can add a splash of water or a bit more olive oil to thin it slightly."
          ]
        },
        {
          title: "Combine Everything:",
          steps: [
            "Add the pesto to the bowl of zucchini noodles.",
            "Gently toss everything together using tongs or clean hands until the noodles are well coated in the pesto."
          ]
        },
        {
          title: "Serve:",
          steps: [
            "Transfer the zucchini noodles to plates or bowls.",
            "If you like, top with a few extra pine nuts or a sprinkle of chopped basil for garnish.",
            "Serve immediately—this dish is best enjoyed fresh and cool!"
          ]
        }
      ],
      tips: [
        "You don't need to cook the zucchini noodles—they're delicious raw and keep their crunch.",
        "Want it warm? You can briefly sauté the noodles in a pan over medium heat for 1–2 minutes before mixing in the pesto.",
        "This pesto also works great on toast, sandwiches, or grain bowls!"
      ]
    },
    instructions: "1. Spiralize zucchini into noodles\n2. Blend avocado, pine nuts, basil, lemon juice, and olive oil for pesto\n3. Combine and serve fresh",
    image: "/images/1.png"
  },
  {
    id: 2,
    title: "Quinoa Buddha Bowl",
    description: "A wholesome, colorful bowl that's both nourishing and delicious. It's perfect for a vegan, gluten-free, dairy-free, and nut-free meal—packed with plant-based protein, healthy fats, and vibrant veggies.",
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
    sections: {
      introduction: "A wholesome, colorful bowl that's both nourishing and delicious. It's perfect for a vegan, gluten-free, dairy-free, and nut-free meal—packed with plant-based protein, healthy fats, and vibrant veggies.",
      ingredients: [
        {
          title: "For the quinoa:",
          items: [
            "1 cup quinoa",
            "2 cups water or vegetable broth (for extra flavor)"
          ]
        },
        {
          title: "For the fresh toppings:",
          items: [
            "1 cucumber",
            "2 medium carrots",
            "1 ripe avocado"
          ]
        },
        {
          title: "For the dressing:",
          items: [
            "1/4 cup tahini",
            "2 tablespoons lemon juice",
            "2 tablespoons olive oil"
          ]
        }
      ],
      instructions: [
        {
          title: "Cook the Quinoa:",
          steps: [
            "Rinse the quinoa under cold water using a fine-mesh strainer. This removes any bitterness.",
            "In a medium saucepan, combine quinoa and water or broth.",
            "Bring it to a boil, then reduce the heat to low, cover, and let simmer for 15–20 minutes until all liquid is absorbed and the quinoa is fluffy.",
            "Once cooked, fluff with a fork and set aside to cool slightly."
          ]
        },
        {
          title: "Prepare the Veggies:",
          steps: [
            "Peel and slice the carrots into matchsticks or thin rounds.",
            "Dice the cucumber into small chunks.",
            "Slice the avocado in half, remove the pit, and carefully scoop out the flesh. Slice or dice it as desired."
          ]
        },
        {
          title: "Make the Dressing:",
          steps: [
            "In a small bowl, whisk together the tahini, lemon juice, and olive oil until smooth.",
            "If it's too thick, add a splash of water to thin it to your desired consistency.",
            "Taste and adjust with more lemon juice or olive oil if needed."
          ]
        },
        {
          title: "Assemble the Bowl:",
          steps: [
            "In each serving bowl, add a scoop of quinoa as the base.",
            "Top with cucumber, carrots, and avocado.",
            "Drizzle generously with tahini dressing.",
            "Optional: Sprinkle with sesame seeds, fresh herbs, or a squeeze of lemon for an extra pop."
          ]
        }
      ],
      tips: [
        "Feel free to add in leafy greens like spinach or kale for an extra boost.",
        "Chickpeas, edamame, or roasted sweet potatoes make great additions if you want to mix it up.",
        "This bowl is best eaten fresh, but the components (quinoa, dressing, and chopped veggies) can be prepped ahead for quick assembly later."
      ]
    },
    instructions: "1. Cook quinoa with water or broth until fluffy\n2. Prepare fresh vegetables and avocado\n3. Make tahini dressing\n4. Assemble bowl with quinoa base, veggies, and dressing",
    image: "/images/2.png"
  },
  {
    id: 3,
    title: "Low-FODMAP Chicken Stir Fry",
    description: "This dish is flavorful, colorful, and perfect for anyone following a low-FODMAP lifestyle. Packed with lean protein and crisp veggies, it's gluten-free, dairy-free, soy-free (if you use coconut aminos), and paleo-friendly too!",
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
    sections: {
      introduction: "This dish is flavorful, colorful, and perfect for anyone following a low-FODMAP lifestyle. Packed with lean protein and crisp veggies, it's gluten-free, dairy-free, soy-free (if you use coconut aminos), and paleo-friendly too!",
      ingredients: [
        {
          title: "For the stir fry:",
          items: [
            "1 lb chicken breast (boneless, skinless)",
            "1 red bell pepper",
            "1 orange or yellow bell pepper",
            "2 medium carrots",
            "1 cup green beans (trimmed)",
            "1 tablespoon fresh ginger (grated or finely minced)",
            "2 tablespoons gluten-free soy sauce or coconut aminos",
            "2 tablespoons olive oil or garlic-infused oil (for low-FODMAP)",
            "Salt, to taste"
          ]
        },
        {
          title: "For the base:",
          items: [
            "1 cup uncooked white or jasmine rice",
            "2 cups water"
          ]
        }
      ],
      instructions: [
        {
          title: "Cook the Rice:",
          steps: [
            "Rinse the rice under cold water to remove excess starch.",
            "In a pot, bring 2 cups of water to a boil.",
            "Add the rice, reduce heat to low, cover, and simmer for 15–18 minutes or until all water is absorbed.",
            "Turn off heat and let sit covered for 5 minutes, then fluff with a fork."
          ]
        },
        {
          title: "Prepare the Chicken:",
          steps: [
            "Cut the chicken breast into bite-sized pieces, about 1-inch cubes.",
            "Pat dry with a paper towel and lightly season with a pinch of salt."
          ]
        },
        {
          title: "Prep the Veggies:",
          steps: [
            "Slice bell peppers into thin strips.",
            "Peel and cut carrots into matchsticks or thin rounds.",
            "Trim the ends of the green beans and cut in half if needed.",
            "Grate or finely mince the fresh ginger."
          ]
        },
        {
          title: "Stir-fry the Vegetables:",
          steps: [
            "In a large skillet or wok, heat 1 tablespoon of oil over medium-high heat.",
            "Add the carrots and green beans first; cook for 2–3 minutes until they begin to soften.",
            "Add the bell peppers and ginger; stir-fry another 2–3 minutes until veggies are crisp-tender.",
            "Remove the vegetables from the pan and set aside."
          ]
        },
        {
          title: "Cook the Chicken:",
          steps: [
            "In the same pan, add another tablespoon of oil.",
            "Add the chicken pieces and stir-fry until they are cooked through and lightly browned, about 5–7 minutes depending on size."
          ]
        },
        {
          title: "Combine and Finish:",
          steps: [
            "Return the cooked vegetables to the pan with the chicken.",
            "Add the gluten-free soy sauce or coconut aminos. Stir everything together and let cook for 1–2 more minutes so flavors meld.",
            "Taste and adjust salt or sauce as needed."
          ]
        },
        {
          title: "Serve:",
          steps: [
            "Spoon the cooked rice into bowls.",
            "Top with the stir fry mixture.",
            "Garnish with optional green onion tops (green parts only, if tolerated) or sesame seeds."
          ]
        }
      ],
      tips: [
        "Feel free to customize the vegetables based on what's in season or what your body tolerates.",
        "For a soy-free version, coconut aminos work perfectly and add a naturally sweet note.",
        "Garlic-infused oil adds flavor without triggering FODMAP issues—just be sure it's made without garlic solids.",
        "Best served immediately, but leftovers can be stored for up to 2 days and reheated gently."
      ]
    },
    instructions: "1. Cook rice and set aside\n2. Prepare chicken and vegetables\n3. Stir-fry vegetables and set aside\n4. Cook chicken until done\n5. Combine everything with sauce\n6. Serve over rice with optional garnishes",
    image: "/images/3.png"
  },
  {
    id: 4,
    title: "UC-Friendly Salmon with Mashed Potatoes",
    description: "This soothing, simple, and satisfying meal is designed with ulcerative colitis in mind—gentle on the gut yet full of flavor. It's gluten-free, dairy-free, soy-free, nut-free, and a great choice when you want something nourishing and comforting.",
    dietTags: ["ulcerative-colitis-friendly", "gluten-free", "dairy-free", "nut-free", "soy-free"],
    ingredients: [
      { item: "Salmon Fillet", warning: false },
      { item: "Potatoes", warning: false },
      { item: "Olive Oil", warning: false },
      { item: "Salt", warning: false },
      { item: "Dill", warning: false },
      { item: "Lemon", warning: false }
    ],
    sections: {
      introduction: "This soothing, simple, and satisfying meal is designed with ulcerative colitis in mind—gentle on the gut yet full of flavor. It's gluten-free, dairy-free, soy-free, nut-free, and a great choice when you want something nourishing and comforting.",
      ingredients: [
        {
          title: "For the mashed potatoes:",
          items: [
            "4 medium white or gold potatoes (peeled and cubed for easier digestion)",
            "2 tablespoons olive oil",
            "Salt, to taste"
          ]
        },
        {
          title: "For the salmon:",
          items: [
            "2 salmon fillets (skinless if preferred)",
            "1 tablespoon olive oil",
            "1 tablespoon fresh dill (or 1 tsp dried)",
            "Juice of half a lemon",
            "Optional: lemon slices for garnish"
          ]
        }
      ],
      instructions: [
        {
          title: "Boil the Potatoes:",
          steps: [
            "Peel and cube the potatoes for quicker and more even cooking.",
            "Add to a pot of cold, salted water and bring to a boil over high heat.",
            "Reduce heat and simmer for 12–15 minutes or until potatoes are fork-tender.",
            "Drain and return to the pot."
          ]
        },
        {
          title: "Mash the Potatoes:",
          steps: [
            "While still hot, mash the potatoes using a potato masher or fork.",
            "Drizzle in olive oil and add salt to taste.",
            "Stir until smooth and creamy. You can add a splash of water or broth if needed for texture."
          ]
        },
        {
          title: "Season the Salmon:",
          steps: [
            "Preheat your oven to 375°F (190°C).",
            "Place salmon fillets on a parchment-lined baking tray.",
            "Drizzle olive oil over the top.",
            "Sprinkle with dill and squeeze lemon juice evenly over the fillets.",
            "Optional: place a thin slice of lemon on each piece for flavor and presentation."
          ]
        },
        {
          title: "Bake the Salmon:",
          steps: [
            "Bake in the oven for 15–20 minutes, depending on thickness, until the salmon is opaque and flakes easily with a fork."
          ]
        },
        {
          title: "Serve:",
          steps: [
            "Spoon mashed potatoes onto each plate.",
            "Gently place a salmon fillet over the potatoes.",
            "Garnish with fresh dill or lemon slices if desired.",
            "Serve warm and enjoy immediately."
          ]
        }
      ],
      tips: [
        "Use Yukon gold or white potatoes for a creamier, gentler mash.",
        "For UC-sensitive days, avoid pepper or heavy spices. This simple seasoning keeps it gut-friendly.",
        "If tolerated, a splash of unsweetened oat milk or lactose-free milk can be added to the mash for extra creaminess.",
        "Leftovers can be stored in the fridge for up to 2 days and reheated gently."
      ]
    },
    instructions: "1. Boil and mash potatoes with olive oil\n2. Season salmon with dill and lemon\n3. Bake salmon at 375°F for 15-20 minutes\n4. Serve salmon over mashed potatoes with optional garnishes",
    image: "/images/4.png"
  },
  {
    id: 5,
    title: "Vegan Lentil Curry",
    description: "Warm, comforting, and full of flavor—this vegan lentil curry is a go-to meal for a cozy night in. It's naturally gluten-free, dairy-free, nut-free, and packed with plant-based protein and fiber. A perfect one-pot wonder!",
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
    sections: {
      introduction: "Warm, comforting, and full of flavor—this vegan lentil curry is a go-to meal for a cozy night in. It's naturally gluten-free, dairy-free, nut-free, and packed with plant-based protein and fiber. A perfect one-pot wonder!",
      ingredients: [
        {
          title: "For the curry base:",
          items: [
            "1 cup red lentils",
            "1 can (13.5 oz) coconut milk",
            "1–2 tablespoons curry powder (adjust to taste)",
            "1 teaspoon salt (or to taste)",
            "1–2 cups water (as needed for cooking consistency)"
          ]
        },
        {
          title: "For the aromatics:",
          items: [
            "1 medium onion, diced",
            "2 cloves garlic, minced",
            "1 tablespoon olive oil or coconut oil"
          ]
        },
        {
          title: "For the greens:",
          items: [
            "2 cups fresh spinach (lightly packed)"
          ]
        },
        {
          title: "For serving:",
          items: [
            "1 cup uncooked white or brown rice",
            "2 cups water or broth"
          ]
        }
      ],
      instructions: [
        {
          title: "Cook the Rice:",
          steps: [
            "Rinse the rice thoroughly under cold water.",
            "Combine with 2 cups of water or broth in a pot.",
            "Bring to a boil, then reduce heat, cover, and simmer for 15–18 minutes (or according to package instructions) until water is absorbed and rice is tender.",
            "Set aside and fluff with a fork."
          ]
        },
        {
          title: "Rinse and Cook the Lentils:",
          steps: [
            "Rinse the red lentils under cold water until the water runs clear.",
            "Add them to a medium saucepan with 2 cups of water.",
            "Bring to a boil, then reduce heat to medium and simmer for 10–15 minutes until the lentils are soft but not mushy. Drain any excess water if needed."
          ]
        },
        {
          title: "Sauté the Aromatics:",
          steps: [
            "In a large skillet or pot, heat 1 tablespoon of oil over medium heat.",
            "Add diced onion and cook for 3–4 minutes until softened.",
            "Add minced garlic and sauté for another 30 seconds, just until fragrant."
          ]
        },
        {
          title: "Build the Curry:",
          steps: [
            "Stir in the cooked lentils, curry powder, coconut milk, and salt.",
            "Mix well and let it simmer for 5–10 minutes, stirring occasionally, until the curry thickens slightly. Add water as needed to reach your preferred consistency."
          ]
        },
        {
          title: "Add the Spinach:",
          steps: [
            "Stir in the spinach and cook for 1–2 more minutes until wilted and tender.",
            "Taste and adjust seasoning if needed."
          ]
        },
        {
          title: "Serve:",
          steps: [
            "Spoon the cooked rice into bowls.",
            "Ladle the lentil curry on top.",
            "Optionally, garnish with fresh herbs (like cilantro) or a squeeze of lemon for brightness."
          ]
        }
      ],
      tips: [
        "Feel free to add chopped carrots, sweet potato, or zucchini to the curry for extra texture and nutrients.",
        "If you're sensitive to onion or garlic, you can omit them entirely and still have a flavorful dish thanks to the curry powder and coconut milk.",
        "This curry stores well—refrigerate leftovers in an airtight container for up to 3 days. Reheat gently on the stove or in the microwave.",
        "It's cozy, filling, and great for meal prep—plant-powered comfort food at its finest! 🌱🍲"
      ]
    },
    instructions: "1. Cook rice and set aside\n2. Rinse and cook lentils until tender\n3. Sauté onion and garlic\n4. Build curry with lentils, coconut milk, and spices\n5. Add spinach and simmer\n6. Serve over rice with optional garnishes",
    image: "/images/5.png"
  },
  {
    id: 6,
    title: "Gluten-Free Banana Pancakes",
    description: "These fluffy, naturally sweet pancakes are a perfect way to start your day—especially if you're avoiding gluten. They're made with simple ingredients and can be dressed up with your favorite toppings. Note: For nut-free version, use oat flour instead of almond flour.",
    dietTags: ["gluten-free", "vegetarian", "soy-free"],
    ingredients: [
      { item: "ripe bananas", warning: false },
      { item: "eggs", warning: false },
      { item: "almond flour (or oat flour for nut-free)", warning: true },
      { item: "baking powder", warning: false },
      { item: "maple syrup", warning: false },
      { item: "berries", warning: false }
    ],
    sections: {
      introduction: "These fluffy, naturally sweet pancakes are a perfect way to start your day—especially if you're avoiding gluten. They're made with simple ingredients and can be dressed up with your favorite toppings. Note: For nut-free version, use oat flour instead of almond flour.",
      ingredients: [
        {
          title: "For the pancakes:",
          items: [
            "2 ripe bananas",
            "2 large eggs",
            "1/3 cup almond flour (or oat flour for nut-free version)",
            "1/2 teaspoon baking powder",
            "Pinch of salt (optional)"
          ]
        },
        {
          title: "For topping and serving:",
          items: [
            "Fresh berries (like blueberries, raspberries, or sliced strawberries)",
            "Pure maple syrup"
          ]
        }
      ],
      instructions: [
        {
          title: "Mash the Bananas:",
          steps: [
            "Peel the bananas and place them in a medium mixing bowl.",
            "Use a fork to mash them thoroughly until smooth with minimal lumps."
          ]
        },
        {
          title: "Add Eggs and Mix:",
          steps: [
            "Crack the eggs into the bowl with the mashed bananas.",
            "Whisk together until the mixture is fully combined and slightly frothy."
          ]
        },
        {
          title: "Stir in Flour and Baking Powder:",
          steps: [
            "Add the almond flour (or oat flour for nut-free version) and baking powder to the bowl.",
            "Stir until everything is well incorporated into a smooth pancake batter.",
            "Add a pinch of salt if desired to enhance the flavor."
          ]
        },
        {
          title: "Cook the Pancakes:",
          steps: [
            "Heat a non-stick skillet or griddle over medium heat and lightly grease with oil or cooking spray.",
            "Pour small rounds of batter (about 1/4 cup each) onto the hot surface.",
            "Cook for 2–3 minutes, or until bubbles form on the surface and the edges look set.",
            "Flip carefully and cook another 1–2 minutes until golden brown and cooked through.",
            "Transfer to a plate and repeat with the remaining batter."
          ]
        },
        {
          title: "Add Toppings and Serve:",
          steps: [
            "Stack your pancakes high and top with fresh berries.",
            "Drizzle with maple syrup and enjoy immediately while warm."
          ]
        }
      ],
      tips: [
        "Make sure your bananas are ripe—they should be soft and spotted for maximum natural sweetness.",
        "You can double the batch and refrigerate leftovers for up to 2 days. Just reheat in a toaster or microwave.",
        "For a nut-free version, substitute almond flour with oat flour or another nut-free flour alternative.",
        "Want more protein? Add a scoop of your favorite vanilla protein powder and reduce the flour slightly.",
        "These gluten-free banana pancakes are a cozy, feel-good breakfast treat that's as nutritious as it is delicious. 🍌✨"
      ]
    },
    instructions: "1. Mash bananas until smooth\n2. Whisk in eggs until frothy\n3. Stir in flour (almond or oat) and baking powder\n4. Cook pancakes on a hot griddle\n5. Top with berries and maple syrup",
    image: "/images/6.png"
  },
  {
    id: 7,
    title: "Low-FODMAP Turkey Meatballs",
    description: "These juicy, herby meatballs are the perfect protein-packed addition to your meal plan—especially if you're following a low-FODMAP lifestyle. They're gluten-free, dairy-free, soy-free, and easy on the digestive system without sacrificing flavor.",
    dietTags: ["low-fodmap", "gluten-free", "dairy-free", "nut-free", "soy-free"],
    ingredients: [
      { item: "Ground Turkey", warning: false },
      { item: "Egg", warning: false },
      { item: "Gluten-free Breadcrumbs", warning: false },
      { item: "Parsley", warning: false },
      { item: "Salt", warning: false },
      { item: "Pepper", warning: false }
    ],
    sections: {
      introduction: "These juicy, herby meatballs are the perfect protein-packed addition to your meal plan—especially if you're following a low-FODMAP lifestyle. They're gluten-free, dairy-free, soy-free, and easy on the digestive system without sacrificing flavor.",
      ingredients: [
        {
          title: "For the meatballs:",
          items: [
            "1 lb ground turkey",
            "1 large egg",
            "1/2 cup gluten-free breadcrumbs",
            "2 tablespoons chopped fresh parsley (or 1 tablespoon dried)",
            "1/2 teaspoon salt",
            "1/4 teaspoon black pepper"
          ]
        },
        {
          title: "Optional for serving:",
          items: [
            "Gluten-free pasta or white rice",
            "Drizzle of garlic-infused oil (FODMAP-safe if no garlic pieces are included)",
            "Fresh herbs or chopped chives for garnish"
          ]
        }
      ],
      instructions: [
        {
          title: "Preheat the Oven:",
          steps: [
            "Preheat your oven to 375°F (190°C).",
            "Line a baking sheet with parchment paper or lightly grease it with oil."
          ]
        },
        {
          title: "Mix the Ingredients:",
          steps: [
            "In a large bowl, combine the ground turkey, egg, gluten-free breadcrumbs, chopped parsley, salt, and pepper.",
            "Mix everything together using clean hands or a fork until well combined, but don't overmix or the meatballs can become dense."
          ]
        },
        {
          title: "Form into Meatballs:",
          steps: [
            "Scoop out portions of the mixture and roll them into balls about 1 to 1.5 inches in diameter.",
            "Place them evenly spaced on the prepared baking sheet."
          ]
        },
        {
          title: "Bake:",
          steps: [
            "Bake the meatballs in the oven for 20–25 minutes, or until cooked through and golden on the outside. The internal temperature should reach 165°F (74°C)."
          ]
        },
        {
          title: "Serve:",
          steps: [
            "Serve the meatballs warm over a bed of gluten-free pasta or white rice.",
            "Drizzle with a little garlic-infused oil (FODMAP-friendly) or garnish with more parsley or chives if desired."
          ]
        }
      ],
      tips: [
        "Want to sneak in extra greens? Finely chopped spinach or kale can be mixed into the meatball blend.",
        "These also freeze well—just let them cool completely, then freeze in a sealed container for up to 2 months.",
        "You can pan-sear the meatballs before baking for extra browning and flavor.",
        "Perfect for a comforting dinner or meal prep, these turkey meatballs are simple, satisfying, and gentle on the gut. 🍽️💚"
      ]
    },
    instructions: "1. Preheat oven to 375°F\n2. Mix turkey, egg, breadcrumbs, and seasonings\n3. Form into 1-1.5 inch balls\n4. Bake for 20-25 minutes until golden\n5. Serve over pasta or rice with optional garnishes",
    image: "/images/7.png"
  },
  {
    id: 8,
    title: "Low-FODMAP Overnight Oats",
    description: "A no-fuss, prep-ahead breakfast that's both satisfying and gentle on digestion. These overnight oats are gluten-free, nut-free, soy-free, and perfect for a low-FODMAP diet—making mornings smooth, nutritious, and delicious.",
    dietTags: ["low-fodmap", "gluten-free", "vegetarian", "nut-free", "soy-free"],
    ingredients: [
      { item: "Gluten-free Oats", warning: false },
      { item: "Lactose-free Milk", warning: false },
      { item: "Chia Seeds", warning: false },
      { item: "Maple Syrup", warning: false },
      { item: "Blueberries", warning: false },
      { item: "Cinnamon", warning: false }
    ],
    sections: {
      introduction: "A no-fuss, prep-ahead breakfast that's both satisfying and gentle on digestion. These overnight oats are gluten-free, nut-free, soy-free, and perfect for a low-FODMAP diet—making mornings smooth, nutritious, and delicious.",
      ingredients: [
        {
          title: "For the oats:",
          items: [
            "1/2 cup gluten-free oats",
            "1/2 cup lactose-free milk (or a FODMAP-friendly plant milk like almond or oat milk)",
            "1 tablespoon chia seeds",
            "1 tablespoon maple syrup (pure, not flavored syrup)",
            "1/4 teaspoon ground cinnamon",
            "1/4 cup fresh or frozen blueberries (limit to 20 blueberries per serving for low-FODMAP compliance)"
          ]
        }
      ],
      instructions: [
        {
          title: "Mix the Base:",
          steps: [
            "In a mason jar, bowl, or meal-prep container, combine the gluten-free oats, lactose-free milk, and chia seeds.",
            "Stir well to make sure the chia seeds are evenly distributed (so they don't clump together)."
          ]
        },
        {
          title: "Add Flavor:",
          steps: [
            "Stir in the maple syrup and cinnamon.",
            "Mix everything until well combined. You can taste and adjust the sweetness if needed."
          ]
        },
        {
          title: "Refrigerate Overnight:",
          steps: [
            "Cover the container with a lid or wrap and place it in the fridge overnight (or at least 4–6 hours).",
            "The oats and chia seeds will absorb the liquid and soften, creating a creamy, pudding-like consistency."
          ]
        },
        {
          title: "Add Toppings and Serve:",
          steps: [
            "In the morning, give the oats a quick stir.",
            "Top with fresh or thawed blueberries right before serving.",
            "Optionally, sprinkle a little extra cinnamon or a drizzle of maple syrup if you like."
          ]
        }
      ],
      tips: [
        "Keep portions of fruit FODMAP-safe—20 blueberries per serving is generally well tolerated.",
        "Want extra creaminess? Stir in a spoonful of lactose-free yogurt before serving.",
        "These oats are great for meal prep—make multiple jars for the week!",
        "Best enjoyed cold, but you can gently warm them on the stove or in the microwave if preferred.",
        "This is a wholesome, make-ahead breakfast that makes your mornings easier—and your tummy happier. 🫐🥄"
      ]
    },
    instructions: "1. Mix oats, milk, and chia seeds in a jar\n2. Add maple syrup and cinnamon\n3. Refrigerate overnight (4-6 hours minimum)\n4. Top with blueberries and serve",
    image: "/images/8.png"
  },
  {
    id: 9,
    title: "UC-Friendly Butternut Squash Soup",
    description: "This creamy, warming soup is gentle on the digestive system and full of natural sweetness and flavor. Ideal for those with ulcerative colitis, it's vegan, gluten-free, dairy-free, nut-free, and soy-free—making it a perfect comfort food for sensitive tummies.",
    dietTags: ["ulcerative-colitis-friendly", "vegan", "gluten-free", "dairy-free", "nut-free", "soy-free"],
    ingredients: [
      { item: "Butternut Squash", warning: false },
      { item: "Carrots", warning: false },
      { item: "Olive Oil", warning: false },
      { item: "Vegetable Broth", warning: false },
      { item: "Ginger", warning: false },
      { item: "Salt", warning: false }
    ],
    sections: {
      introduction: "This creamy, warming soup is gentle on the digestive system and full of natural sweetness and flavor. Ideal for those with ulcerative colitis, it's vegan, gluten-free, dairy-free, nut-free, and soy-free—making it a perfect comfort food for sensitive tummies.",
      ingredients: [
        {
          title: "For the soup:",
          items: [
            "1 medium butternut squash (peeled, seeded, and cubed)",
            "2 medium carrots (peeled and sliced)",
            "1–2 tablespoons olive oil",
            "3 cups low-sodium vegetable broth (UC-friendly, no garlic/onion if needed)",
            "1 teaspoon freshly grated ginger (or 1/2 tsp ground)",
            "1/2 teaspoon salt (or to taste)"
          ]
        }
      ],
      instructions: [
        {
          title: "Roast the Squash and Carrots:",
          steps: [
            "Preheat your oven to 400°F (200°C).",
            "Spread the cubed butternut squash and sliced carrots on a baking sheet.",
            "Drizzle with olive oil and toss to coat.",
            "Roast for 25–30 minutes, flipping once, until the vegetables are tender and slightly golden."
          ]
        },
        {
          title: "Blend with Broth:",
          steps: [
            "Transfer the roasted vegetables to a high-powered blender or large pot (if using an immersion blender).",
            "Add the vegetable broth and blend until the mixture is smooth and creamy.",
            "Add more broth if needed to adjust the consistency to your liking."
          ]
        },
        {
          title: "Add Seasoning:",
          steps: [
            "Pour the blended soup into a saucepan if not already using one.",
            "Stir in the grated ginger and salt.",
            "Bring to a gentle simmer over medium heat."
          ]
        },
        {
          title: "Simmer and Serve:",
          steps: [
            "Let the soup simmer for 10 minutes to bring all the flavors together.",
            "Taste and adjust seasoning if needed.",
            "Ladle into bowls and serve warm."
          ]
        }
      ],
      tips: [
        "For even easier prep, you can use pre-cut butternut squash from the grocery store.",
        "If you're sensitive to fiber, strain the soup after blending for an extra-smooth consistency.",
        "Add a swirl of lactose-free yogurt or a drizzle of olive oil on top for a little richness.",
        "This soup stores well—refrigerate leftovers for up to 3 days or freeze for up to 2 months.",
        "This nourishing soup is simple, soothing, and perfect for cozy days or gentle gut resets. 🍂🥕"
      ]
    },
    instructions: "1. Roast squash and carrots at 400°F for 25-30 minutes\n2. Blend with vegetable broth until smooth\n3. Add ginger and salt, bring to simmer\n4. Simmer for 10 minutes and serve warm",
    image: "/images/9.png"
  },
  {
    id: 10,
    title: "Gluten-Free Buckwheat Crepes",
    description: "These light and tender crepes are a beautiful, gluten-free twist on a classic favorite. Made with hearty buckwheat flour, they're perfect for breakfast, brunch, or even dessert—and completely safe for those avoiding gluten, nuts, and soy.",
    dietTags: ["gluten-free", "vegetarian", "nut-free", "soy-free"],
    ingredients: [
      { item: "Buckwheat Flour", warning: false },
      { item: "Eggs", warning: false },
      { item: "Lactose-free Milk", warning: false },
      { item: "Butter", warning: false },
      { item: "Strawberries", warning: false },
      { item: "Honey", warning: false }
    ],
    sections: {
      introduction: "These light and tender crepes are a beautiful, gluten-free twist on a classic favorite. Made with hearty buckwheat flour, they're perfect for breakfast, brunch, or even dessert—and completely safe for those avoiding gluten, nuts, and soy.",
      ingredients: [
        {
          title: "For the crepes:",
          items: [
            "1 cup buckwheat flour",
            "2 large eggs",
            "1 1/4 cups lactose-free milk (or FODMAP-friendly plant milk)",
            "1 tablespoon butter (plus extra for cooking)"
          ]
        },
        {
          title: "For serving:",
          items: [
            "Fresh strawberries (sliced)",
            "Honey (for drizzling)",
            "Optional: powdered sugar or a dollop of lactose-free yogurt"
          ]
        }
      ],
      instructions: [
        {
          title: "Mix the Batter:",
          steps: [
            "In a large mixing bowl, whisk together the buckwheat flour and eggs.",
            "Slowly add the milk while whisking to form a smooth, lump-free batter.",
            "Let the batter rest for 10–15 minutes at room temperature—this helps create tender crepes."
          ]
        },
        {
          title: "Heat the Pan:",
          steps: [
            "Heat a non-stick skillet or crepe pan over medium heat.",
            "Add a small amount of butter and swirl to coat the surface."
          ]
        },
        {
          title: "Cook the Crepes:",
          steps: [
            "Pour about 1/4 cup of batter into the hot pan.",
            "Immediately tilt and rotate the pan in a circular motion to spread the batter into a thin, even layer.",
            "Cook for 1–2 minutes until the bottom is lightly golden and the edges lift easily.",
            "Flip and cook for another 30–60 seconds on the other side.",
            "Transfer to a plate and repeat with remaining batter, adding a little butter between crepes if needed."
          ]
        },
        {
          title: "Serve and Enjoy:",
          steps: [
            "Fill or top the crepes with fresh strawberries and a drizzle of honey.",
            "Fold into quarters, roll them up, or layer them flat—however you love to eat them.",
            "Optional: Dust with powdered sugar or add a spoonful of yogurt for extra indulgence."
          ]
        }
      ],
      tips: [
        "These crepes work great with both sweet and savory fillings—try sautéed mushrooms or spinach with an egg for a savory twist.",
        "The batter can be made ahead and stored in the fridge for up to 24 hours.",
        "To keep crepes warm while cooking the rest, place them on a baking sheet in a 200°F (95°C) oven.",
        "Delicate, satisfying, and full of flavor—these crepes are a gluten-free delight for any time of day. 🥞🍯"
      ]
    },
    instructions: "1. Mix buckwheat flour, eggs, and milk into a smooth batter\n2. Heat butter in a non-stick pan\n3. Cook thin crepes until golden on both sides\n4. Serve with strawberries and honey",
    image: "/images/10.png"
  },
  {
    id: 11,
    title: "Vegan Tofu Scramble",
    description: "A plant-powered alternative to scrambled eggs, this tofu scramble is colorful, packed with protein, and perfect for a satisfying vegan breakfast or brunch. It's gluten-free, dairy-free, nut-free, and endlessly customizable with your favorite veggies.",
    dietTags: ["vegan", "gluten-free", "dairy-free", "nut-free"],
    ingredients: [
      { item: "Firm Tofu", warning: false },
      { item: "Turmeric", warning: false },
      { item: "Bell Pepper", warning: false },
      { item: "Spinach", warning: false },
      { item: "Nutritional Yeast", warning: false },
      { item: "Olive Oil", warning: false }
    ],
    sections: {
      introduction: "A plant-powered alternative to scrambled eggs, this tofu scramble is colorful, packed with protein, and perfect for a satisfying vegan breakfast or brunch. It's gluten-free, dairy-free, nut-free, and endlessly customizable with your favorite veggies.",
      ingredients: [
        {
          title: "For the scramble:",
          items: [
            "1 block firm tofu (pressed and drained)",
            "1/2 teaspoon turmeric (for color and mild flavor)",
            "1 bell pepper (any color, diced)",
            "1 cup fresh spinach (lightly packed)",
            "2 tablespoons nutritional yeast",
            "1 tablespoon olive oil",
            "Salt and pepper, to taste (optional)"
          ]
        }
      ],
      instructions: [
        {
          title: "Prep the Tofu:",
          steps: [
            "Press your tofu using a tofu press or wrap it in a clean towel and place a heavy object on top for 10–15 minutes to remove excess moisture.",
            "Once pressed, crumble the tofu into small pieces using your hands or a fork—like scrambled egg texture."
          ]
        },
        {
          title: "Start the Scramble:",
          steps: [
            "Heat olive oil in a non-stick skillet over medium heat.",
            "Add the crumbled tofu and stir in the turmeric.",
            "Cook for 2–3 minutes, allowing the tofu to absorb the turmeric and turn golden yellow."
          ]
        },
        {
          title: "Add the Veggies:",
          steps: [
            "Toss in the diced bell peppers and sauté for 4–5 minutes until they begin to soften.",
            "Add the spinach and stir until wilted."
          ]
        },
        {
          title: "Stir in the Nutritional Yeast:",
          steps: [
            "Sprinkle in the nutritional yeast and stir to combine.",
            "This adds a cheesy, umami flavor that takes the scramble up a notch."
          ]
        },
        {
          title: "Finish Cooking:",
          steps: [
            "Continue cooking for another 2–3 minutes, stirring occasionally, until everything is heated through and flavors are combined.",
            "Taste and adjust seasoning with salt and pepper if desired."
          ]
        },
        {
          title: "Serve:",
          steps: [
            "Serve hot, either on its own, over toast, in a breakfast burrito, or with a side of avocado and roasted potatoes."
          ]
        }
      ],
      tips: [
        "Want extra texture? Add mushrooms or zucchini to the veggie mix.",
        "This scramble keeps well—store leftovers in the fridge for up to 2 days and reheat in a skillet.",
        "You can make it spicy with a dash of smoked paprika or chili flakes.",
        "High in protein, full of fiber, and totally satisfying—this tofu scramble is a breakfast hero for plant-based eaters. 🌱🍽️"
      ]
    },
    instructions: "1. Press and crumble tofu\n2. Cook with turmeric until golden\n3. Add bell peppers and spinach\n4. Stir in nutritional yeast\n5. Cook until heated through\n6. Serve with your favorite sides",
    image: "/images/11.png"
  },
  {
    id: 12,
    title: "Low-FODMAP Fish Tacos",
    description: "These fresh and zesty tacos are light, satisfying, and gut-friendly. Perfect for a low-FODMAP lifestyle, they're made with simple whole ingredients and come together in no time for a nutritious meal that's both gluten- and dairy-free.",
    dietTags: ["low-fodmap", "gluten-free", "dairy-free", "nut-free", "soy-free"],
    ingredients: [
      { item: "white fish fillets", warning: false },
      { item: "corn tortillas", warning: false },
      { item: "shredded cabbage", warning: false },
      { item: "avocado (1/8 per serving for low-FODMAP)", warning: true },
      { item: "lime", warning: false },
      { item: "cilantro", warning: false },
      { item: "olive oil", warning: false }
    ],
    sections: {
      introduction: "These fresh and zesty tacos are light, satisfying, and gut-friendly. Perfect for a low-FODMAP lifestyle, they're made with simple whole ingredients and come together in no time for a nutritious meal that's both gluten- and dairy-free.",
      ingredients: [
        {
          title: "For the tacos:",
          items: [
            "2 white fish fillets (such as cod, tilapia, or haddock)",
            "4–6 small corn tortillas (gluten-free)",
            "1 cup shredded cabbage (green or red)",
            "1 ripe avocado, sliced or mashed (limit to 1/8 per serving for low-FODMAP)",
            "1 lime (cut into wedges)",
            "1/4 cup fresh cilantro (chopped)",
            "1 tablespoon olive oil (for grilling)",
            "Salt and pepper, to taste"
          ]
        }
      ],
      instructions: [
        {
          title: "Season and Cook the Fish:",
          steps: [
            "Pat the fish fillets dry with paper towels.",
            "Drizzle with olive oil and season lightly with salt and pepper.",
            "Heat a non-stick skillet or grill pan over medium heat.",
            "Cook fish for 3–4 minutes per side, or until opaque and flaky.",
            "Set aside and gently break into large pieces for taco filling."
          ]
        },
        {
          title: "Prepare the Tortillas:",
          steps: [
            "Warm the corn tortillas in a dry skillet for 30–60 seconds per side, or until soft and pliable.",
            "Alternatively, wrap them in foil and heat in a low oven."
          ]
        },
        {
          title: "Prep the Veggies:",
          steps: [
            "Shred the cabbage finely using a knife or mandoline.",
            "Slice the avocado or mash it if you prefer a creamy texture.",
            "Chop the cilantro and cut the lime into wedges."
          ]
        },
        {
          title: "Assemble the Tacos:",
          steps: [
            "Place a few pieces of cooked fish onto each tortilla.",
            "Top with shredded cabbage and avocado.",
            "Squeeze fresh lime juice over each taco."
          ]
        },
        {
          title: "Garnish and Serve:",
          steps: [
            "Sprinkle chopped cilantro on top.",
            "Serve immediately while warm and fresh."
          ]
        }
      ],
      tips: [
        "Want a little more zest? Add a sprinkle of paprika or cumin to the fish before cooking.",
        "For a creamy topping, try a small dollop of lactose-free yogurt or a drizzle of garlic-infused oil.",
        "Keep portion sizes FODMAP-friendly—especially with avocado (safe amount is ~1/8 per serving).",
        "These tacos are light, vibrant, and packed with fresh flavors—perfect for a feel-good meal any day of the week. 🐟🌿💛"
      ]
    },
    instructions: "1. Season and cook fish until flaky\n2. Warm corn tortillas\n3. Prep cabbage, avocado, and cilantro\n4. Assemble tacos with fish and toppings\n5. Garnish with lime and cilantro",
    image: "/images/12.png"
  },
  {
    id: 13,
    title: "UC-Friendly Chicken and Rice",
    description: "Simple, soothing, and satisfying—this dish is perfect for those with ulcerative colitis looking for a gentle yet nutritious meal. It's made with gut-friendly ingredients that are easy to digest, gluten-free, dairy-free, nut-free, and soy-free.",
    dietTags: ["ulcerative-colitis-friendly", "gluten-free", "dairy-free", "nut-free", "soy-free"],
    ingredients: [
      { item: "Chicken Breast", warning: false },
      { item: "White Rice", warning: false },
      { item: "Carrots", warning: false },
      { item: "Zucchini", warning: false },
      { item: "Olive Oil", warning: false },
      { item: "Salt", warning: false }
    ],
    sections: {
      introduction: "Simple, soothing, and satisfying—this dish is perfect for those with ulcerative colitis looking for a gentle yet nutritious meal. It's made with gut-friendly ingredients that are easy to digest, gluten-free, dairy-free, nut-free, and soy-free.",
      ingredients: [
        {
          title: "For the chicken and rice:",
          items: [
            "2 boneless, skinless chicken breasts",
            "1 cup white rice",
            "2 cups water or low-sodium broth",
            "2 medium carrots (peeled and sliced)",
            "1 small zucchini (sliced or diced)",
            "1–2 tablespoons olive oil",
            "Salt, to taste"
          ]
        }
      ],
      instructions: [
        {
          title: "Cook the Rice:",
          steps: [
            "Rinse the rice under cold water until the water runs clear.",
            "In a pot, bring 2 cups of water or broth to a boil.",
            "Add rice, reduce heat to low, cover, and simmer for 15–18 minutes or until water is absorbed.",
            "Remove from heat and let sit covered for 5 minutes. Fluff with a fork."
          ]
        },
        {
          title: "Sauté the Vegetables:",
          steps: [
            "While the rice cooks, heat olive oil in a skillet over medium heat.",
            "Add sliced carrots and cook for 2–3 minutes, then add the zucchini.",
            "Sauté until both are tender but not mushy, about 5–6 minutes total.",
            "Remove from heat and set aside."
          ]
        },
        {
          title: "Cook the Chicken:",
          steps: [
            "Season chicken breasts lightly with salt (omit other spices if needed for UC sensitivity).",
            "Grill on a stovetop grill pan or non-stick skillet over medium heat for 6–7 minutes per side, or until internal temperature reaches 165°F (74°C).",
            "Let rest for a few minutes, then slice into strips or cubes."
          ]
        },
        {
          title: "Assemble and Season:",
          steps: [
            "In a bowl or plate, layer a scoop of rice, the sautéed vegetables, and sliced chicken.",
            "Drizzle with a little extra olive oil and sprinkle with salt to taste.",
            "Serve warm."
          ]
        }
      ],
      tips: [
        "If chewing is difficult or you're in a flare, steam the vegetables and shred or dice the chicken for easier digestion.",
        "You can batch-cook the rice and chicken ahead of time for easy reheating throughout the week.",
        "Feel free to swap zucchini or carrots for other UC-friendly veggies like peeled cucumber or cooked spinach.",
        "This gentle, gut-friendly dish is great for flare-up days or simply when you want something nourishing and easy on the stomach. 🐔🥕💛"
      ]
    },
    instructions: "1. Cook rice until fluffy\n2. Sauté carrots and zucchini until tender\n3. Grill chicken until cooked through\n4. Layer rice, vegetables, and chicken\n5. Season with olive oil and salt",
    image: "/images/13.png"
  },
  {
    id: 14,
    title: "Vegan Chocolate Avocado Mousse",
    description: "This rich and creamy dessert is the perfect blend of indulgence and nutrition. Made with ripe avocados and sweetened naturally, it's a chocolate-lover's dream that's vegan, gluten-free, dairy-free, and soy-free—perfect for almost any dietary need. Note: For nut-free version, use oat milk instead of almond milk.",
    dietTags: ["vegan", "gluten-free", "dairy-free", "soy-free"],
    ingredients: [
      { item: "ripe avocados", warning: false },
      { item: "cocoa powder", warning: false },
      { item: "maple syrup", warning: false },
      { item: "vanilla extract", warning: false },
      { item: "almond milk (or oat milk for nut-free)", warning: true },
      { item: "berries", warning: false }
    ],
    sections: {
      introduction: "This rich and creamy dessert is the perfect blend of indulgence and nutrition. Made with ripe avocados and sweetened naturally, it's a chocolate-lover's dream that's vegan, gluten-free, dairy-free, and soy-free—perfect for almost any dietary need. Note: For nut-free version, use oat milk instead of almond milk.",
      ingredients: [
        {
          title: "For the mousse:",
          items: [
            "2 ripe avocados (soft and creamy)",
            "1/4 cup cocoa powder (unsweetened)",
            "1/4 cup maple syrup (or to taste)",
            "1 teaspoon vanilla extract",
            "1/4 cup almond milk (or oat milk for nut-free version)",
            "fresh berries (such as raspberries, strawberries, or blueberries), for topping"
          ]
        }
      ],
      instructions: [
        {
          title: "Blend the Avocados:",
          steps: [
            "Scoop the flesh of the ripe avocados into a food processor or high-speed blender.",
            "Blend until completely smooth and creamy with no lumps remaining."
          ]
        },
        {
          title: "Add the Chocolate Base:",
          steps: [
            "Add cocoa powder and maple syrup to the blended avocado.",
            "Blend again until fully combined. Scrape down the sides as needed."
          ]
        },
        {
          title: "Mix in Flavor and Creaminess:",
          steps: [
            "Add vanilla extract and almond milk (or oat milk for nut-free version).",
            "Blend one more time until silky and mousse-like in texture.",
            "Taste and adjust sweetness or cocoa if desired."
          ]
        },
        {
          title: "Chill the Mousse:",
          steps: [
            "Transfer the mousse to small bowls, jars, or ramekins.",
            "Cover and refrigerate for at least 2 hours to firm up and develop flavor."
          ]
        },
        {
          title: "Add Toppings and Serve:",
          steps: [
            "Before serving, top with a handful of fresh berries.",
            "Optionally, sprinkle with a dusting of cocoa powder or shaved dark chocolate."
          ]
        }
      ],
      tips: [
        "For extra decadence, stir in a tablespoon of melted dark chocolate before chilling.",
        "Want a richer flavor? Use Dutch-processed cocoa for a deeper chocolate taste.",
        "This mousse keeps well in the fridge for up to 2 days—great for make-ahead treats.",
        "Make sure your avocados are perfectly ripe—soft but not brown—for the best texture and flavor.",
        "For a nut-free version, substitute almond milk with oat milk or another nut-free plant milk.",
        "Creamy, dreamy, and loaded with antioxidants—this dessert proves that healthy and indulgent can go hand in hand. 🥑🍓🍮"
      ]
    },
    instructions: "1. Blend avocados until smooth\n2. Add cocoa powder and maple syrup\n3. Mix in vanilla and almond milk (or oat milk for nut-free)\n4. Chill for 2 hours\n5. Top with fresh berries",
    image: "/images/14.png"
  }
]; 