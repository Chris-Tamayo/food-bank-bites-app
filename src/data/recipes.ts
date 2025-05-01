
export interface Recipe {
  id: string;
  title: string;
  description: string;
  ingredients: {
    name: string;
    quantity: string;
  }[];
  instructions: string[];
  prepTime: number;
  cookTime: number;
  servings: number;
  tags: RecipeTag[];
  image: string;
  requiredFoodIds: string[];
  matchPercentage?: number;
}

export enum RecipeTag {
  BREAKFAST = 'breakfast',
  LUNCH = 'lunch',
  DINNER = 'dinner',
  VEGETARIAN = 'vegetarian',
  VEGAN = 'vegan',
  GLUTEN_FREE = 'gluten-free',
  DAIRY_FREE = 'dairy-free',
  NUT_FREE = 'nut-free',
  LOW_CARB = 'low-carb',
  HIGH_PROTEIN = 'high-protein',
  QUICK = 'quick',
  EASY = 'easy',
  DESSERT = 'dessert',
  SNACK = 'snack',
}

export const recipes: Recipe[] = [
  {
    id: "1",
    title: "HK-Style French Toast (Air Fryer edition)",
    description: "Hong Kong-style French Toast traces its roots back to British colonial influence in Hong Kong. While traditional French toast originated in Europe, the Hong Kong version evolved in cha chaan tengs (Hong Kong-style cafés) as an indulgent twist. Typically served for breakfast and accompanied by milk tea, Hong-Kong Style French Toast only takes 15 minutes to make with just a few ingredients.",
    ingredients: [
      { name: "Bread, thickly sliced", quantity: "2 slices" },
      { name: "Peanut butter", quantity: "3 tablespoons" },
      { name: "Unsalted butter", quantity: "1 tablespoon" },
      { name: "Egg, beaten", quantity: "1" },
      { name: "Evaporated milk", quantity: "20 mL" },
      { name: "Salted butter", quantity: "1 teaspoon" },
      { name: "Maple syrup or condensed milk", quantity: "to taste" }
    ],
    instructions: [
      "Preheat airfryer to 390℉",
      "Mix egg and milk on a plate",
      "Spread peanut butter on one slice of bread and butter on the other. Press them together to form a sandwich.",
      "Coat sandwich in the egg-milk mixture until its well-soaked.",
      "Layer tin foil, parchment paper, and then the sandwich before placing it in to the heated airfryer.",
      "Once the sandwich is in, immediately set the airfryer temperature to 355℉ for 8 minutes, turning sandwich at 4 minutes. Depending on the sandwich it may take more time, aim for a crispy texture.",
      "Serve with salted butter and syrup of choice."
    ],
    prepTime: 5,
    cookTime: 10,
    servings: 1,
    tags: [RecipeTag.BREAKFAST, RecipeTag.QUICK, RecipeTag.EASY],
    image: "/placeholder.svg",
    requiredFoodIds: ["9", "4", "23", "3", "21"]
  },
  {
    id: "2",
    title: "Simple Tuna Pasta",
    description: "A quick and filling pasta dish that uses common food bank ingredients. This recipe is perfect for a quick lunch or dinner.",
    ingredients: [
      { name: "Pasta", quantity: "8 oz" },
      { name: "Canned tuna", quantity: "1 can" },
      { name: "Canned vegetables", quantity: "1 can" },
      { name: "Salt", quantity: "to taste" },
      { name: "Pepper", quantity: "to taste" },
      { name: "Cooking oil", quantity: "1 tablespoon" }
    ],
    instructions: [
      "Cook pasta according to package instructions.",
      "Drain the canned tuna and vegetables.",
      "Heat oil in a pan over medium heat.",
      "Add tuna and vegetables to the pan and cook for 2-3 minutes.",
      "Season with salt and pepper.",
      "Drain the pasta and add it to the pan.",
      "Mix well and serve hot."
    ],
    prepTime: 5,
    cookTime: 15,
    servings: 2,
    tags: [RecipeTag.LUNCH, RecipeTag.DINNER, RecipeTag.QUICK, RecipeTag.EASY],
    image: "/placeholder.svg",
    requiredFoodIds: ["7", "1", "13", "30", "31", "26"]
  },
  {
    id: "3",
    title: "Bean and Vegetable Soup",
    description: "A hearty soup that makes the most of food bank staples. Perfect for cold days and can be easily modified based on available ingredients.",
    ingredients: [
      { name: "Canned beans", quantity: "1 can" },
      { name: "Canned vegetables", quantity: "1 can" },
      { name: "Canned tomatoes", quantity: "1 can" },
      { name: "Onion, chopped", quantity: "1" },
      { name: "Salt", quantity: "to taste" },
      { name: "Pepper", quantity: "to taste" }
    ],
    instructions: [
      "In a large pot, sauté chopped onion until translucent.",
      "Add drained canned vegetables and beans.",
      "Add canned tomatoes with their juice.",
      "Add 2 cups of water and bring to a boil.",
      "Reduce heat and simmer for 15 minutes.",
      "Season with salt and pepper to taste.",
      "Serve hot."
    ],
    prepTime: 10,
    cookTime: 20,
    servings: 4,
    tags: [RecipeTag.DINNER, RecipeTag.VEGETARIAN, RecipeTag.VEGAN],
    image: "/placeholder.svg",
    requiredFoodIds: ["12", "13", "15", "17", "30", "31"]
  },
  {
    id: "4",
    title: "Peanut Butter Banana Oatmeal",
    description: "A nutritious and filling breakfast that can be prepared quickly with minimal ingredients. Great for kids and adults alike.",
    ingredients: [
      { name: "Oatmeal", quantity: "1 cup" },
      { name: "Milk", quantity: "2 cups" },
      { name: "Peanut butter", quantity: "2 tablespoons" },
      { name: "Banana", quantity: "1" },
      { name: "Sugar", quantity: "1 tablespoon" }
    ],
    instructions: [
      "In a saucepan, bring milk to a gentle boil.",
      "Add oatmeal and reduce heat to low.",
      "Cook for 5 minutes, stirring occasionally.",
      "Stir in sugar and peanut butter until well combined.",
      "Serve topped with sliced banana."
    ],
    prepTime: 2,
    cookTime: 8,
    servings: 2,
    tags: [RecipeTag.BREAKFAST, RecipeTag.VEGETARIAN, RecipeTag.QUICK],
    image: "/placeholder.svg",
    requiredFoodIds: ["10", "21", "4", "20", "25"]
  },
  {
    id: "5",
    title: "Rice and Bean Bowl",
    description: "A simple, protein-rich meal that can be customized with available toppings and seasonings. This is a versatile dish that works for any time of day.",
    ingredients: [
      { name: "Rice", quantity: "1 cup" },
      { name: "Canned beans", quantity: "1 can" },
      { name: "Salt", quantity: "to taste" },
      { name: "Pepper", quantity: "to taste" },
      { name: "Cheese (optional)", quantity: "1/4 cup" }
    ],
    instructions: [
      "Cook rice according to package instructions.",
      "Drain and rinse the canned beans.",
      "In a pot, heat the beans over medium heat for 5 minutes.",
      "Serve rice topped with beans.",
      "Season with salt and pepper.",
      "If available, sprinkle with cheese."
    ],
    prepTime: 5,
    cookTime: 20,
    servings: 2,
    tags: [RecipeTag.LUNCH, RecipeTag.DINNER, RecipeTag.VEGETARIAN],
    image: "/placeholder.svg",
    requiredFoodIds: ["6", "12", "30", "31", "22"]
  }
];

export const findMatchingRecipes = (basketItemIds: string[]): Recipe[] => {
  // This algorithm finds recipes where the basket contains most required items
  return recipes
    .map(recipe => {
      const requiredIngredients = recipe.requiredFoodIds;
      const matchedIngredients = requiredIngredients.filter(id => 
        basketItemIds.includes(id)
      );
      
      const matchPercentage = Math.round((matchedIngredients.length / requiredIngredients.length) * 100);
      
      // Create a new recipe object with the matchPercentage property
      return {
        ...recipe,
        matchPercentage,
        missingIngredients: requiredIngredients.filter(id => !basketItemIds.includes(id))
      };
    })
    .filter(result => result.matchPercentage >= 60) // At least 60% of ingredients match
    .sort((a, b) => b.matchPercentage - a.matchPercentage); // Sort by match percentage
};
