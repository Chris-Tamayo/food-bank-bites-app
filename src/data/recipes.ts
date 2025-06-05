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
    title: "Easy Local Saimin",
    description: "This Saimin Recipe is comfort in a bowl and comes together in just 20 minutes! Saimin is a Hawaiian noodle soup dish influenced by Japanese, Chinese, and Filipino cuisines. It consists of soft wheat noodles served in a light, clear dashi-based broth. The toppings are entirely customizable, but some popular choices include kamaboko (fish cake), char siu (Chinese BBQ pork), and spam.",
    ingredients: [
      { name: "Chicken broth", quantity: "4 cups" },
      { name: "Dashi", quantity: "2 cups" },
      { name: "Ginger, sliced", quantity: "1 nub" },
      { name: "Green onion, chopped", quantity: "3 stalks" },
      { name: "Shoyu", quantity: "1 tbsp" },
      { name: "Mirin", quantity: "1 tbsp" },
      { name: "Saimin noodles", quantity: "1 packet" },
      { name: "Kamaboko, sliced", quantity: "1/2 stick" },
      { name: "Salt", quantity: "to taste" }
    ],
    instructions: [
      "In a pot, combine chicken broth, dashi, shoyu, mirin, salt, ginger, and white parts of the green onion.",
      "Bring to a simmer over medium heat and let it cook for 10 minutes.",
      "In a separate pot, bring water to a boil.",
      "Cook the noodles according to package instructions, usually 2–3 minutes.",
      "Drain and rinse with warm water to remove excess starch.",
      "Divide the cooked noodles into bowls and pour the hot broth over the noodles.",
      "Top with kamaboko and green onions.",
      "You may also serve with a side of hot mustard for dipping!"
    ],
    prepTime: 5,
    cookTime: 15,
    servings: 2,
    tags: [RecipeTag.LUNCH, RecipeTag.DINNER, RecipeTag.QUICK, RecipeTag.EASY],
    image: "/placeholder.svg",
    requiredFoodIds: ["7", "17", "18", "30"]
  },
  {
    id: "3",
    title: "Chicken, Sausage, and Shrimp Gumbo",
    description: "Chicken, Sausage, and Shrimp Gumbo is a rich and hearty Louisiana-style stew made with a dark roux, the \"Holy Trinity\" of Cajun cooking (onions, bell peppers, and celery), and a flavorful broth. It features tender chicken, smoky andouille sausage, and succulent shrimp, all simmered with Cajun spices for a deep, complex flavor. This dish is definitely a labor of love as it takes approximately 2 hours to make, so make a big batch and have leftovers for days!",
    ingredients: [
      { name: "Vegetable oil", quantity: "½ cup" },
      { name: "All-purpose flour", quantity: "½ cup" },
      { name: "Boneless, skinless chicken thighs", quantity: "1 lb" },
      { name: "Andouille sausage, sliced", quantity: "1 lb" },
      { name: "Shrimp, peeled and deveined", quantity: "1 lb" },
      { name: "Onion, diced", quantity: "1 medium" },
      { name: "Bell pepper, diced", quantity: "1" },
      { name: "Celery stalks, diced", quantity: "2" },
      { name: "Garlic, minced", quantity: "4 cloves" },
      { name: "Chicken broth", quantity: "6 cups" },
      { name: "Diced tomatoes", quantity: "1/2 can" },
      { name: "Bay leaves", quantity: "2" },
      { name: "Tony's cajun seasoning", quantity: "1 tbsp" },
      { name: "Smoked paprika", quantity: "1 tsp" },
      { name: "Dried thyme", quantity: "1 tsp" },
      { name: "White rice, cooked", quantity: "2 cups" }
    ],
    instructions: [
      "In a large heavy-bottomed pot or Dutch oven, heat vegetable oil over medium heat.",
      "Gradually whisk in flour and cook, stirring continuously, until it turns a deep brown color (about 15-20 minutes). Be careful not to burn it.",
      "Add the onion, bell pepper, celery, and garlic to the roux. Stir well and cook for 5 minutes until softened.",
      "Stir in the andouille sausage and chicken and cook for 2–3 minutes on medium heat",
      "Pour in the chicken broth and stir well to combine.",
      "Add diced tomatoes, bay leaves, Tony's cajun seasoning, paprika, thyme, and salt.",
      "Bring to a boil, then reduce heat and let simmer for 45–60 minutes, stirring occasionally.",
      "Add the shrimp in the last 5 minutes of cooking and simmer until pink and cooked through.",
      "Remove bay leaves.",
      "Adjust seasoning with salt and black pepper",
      "Spoon gumbo over white rice."
    ],
    prepTime: 20,
    cookTime: 90,
    servings: 6,
    tags: [RecipeTag.DINNER, RecipeTag.HIGH_PROTEIN],
    image: "/placeholder.svg",
    requiredFoodIds: ["26", "9", "2", "8", "17", "19", "6"]
  },
  {
    id: "4",
    title: "Survival Lentils",
    description: "A simple, nutritious meal using canned lentils, vegetables, and rice. This vegan powerhouse combo is perfect for quick, filling meals and makes the most of pantry staples.",
    ingredients: [
      { name: "Canned lentils", quantity: "1 can" },
      { name: "Canned vegetables", quantity: "1 can" },
      { name: "Rice", quantity: "1 cup" }
    ],
    instructions: [
      "Cook the rice according to your preferences.",
      "Mix the canned vegetables with the rice when the rice is ready.",
      "Pour the lentils in a bowl and heat up the lentils in the microwave for about 2 minutes.",
      "Serve the rice with vegetables next to the lentils and enjoy this vegan powerful combo!"
    ],
    prepTime: 5,
    cookTime: 35,
    servings: 2,
    tags: [RecipeTag.LUNCH, RecipeTag.DINNER, RecipeTag.VEGAN, RecipeTag.HIGH_PROTEIN, RecipeTag.EASY],
    image: "/placeholder.svg",
    requiredFoodIds: ["6", "11", "13"]
  },
  {
    id: "5",
    title: "Knock-off Zippy's Chili (easy version)",
    description: "Easy, knock-off Zippy's chili that I made when I was a college student on the continent living off a $30/week food budget. 1 hour total (15 minutes prep, 45 minutes cooking time).",
    ingredients: [
      { name: "Vegetable oil", quantity: "1 tbsp" },
      { name: "Ground beef", quantity: "1 lb" },
      { name: "Portuguese sausage or kielbasa", quantity: "1/2 lb" },
      { name: "Onion, chopped", quantity: "1 medium" },
      { name: "Celery, chopped", quantity: "2 stalks" },
      { name: "Green bell pepper", quantity: "1 medium" },
      { name: "Tomato sauce", quantity: "2 cans (8 oz)" },
      { name: "Kidney beans, drained", quantity: "2 cans (16 oz)" },
      { name: "Cream of chicken or mushroom soup", quantity: "1 can (10.5 oz)" },
      { name: "Sugar", quantity: "1.5 tbsp" },
      { name: "Worcestershire sauce", quantity: "1.5 tsp" },
      { name: "Chili seasoning packet", quantity: "1 packet" },
      { name: "Black pepper", quantity: "to taste" }
    ],
    instructions: [
      "In a large pot on medium heat, add oil, then brown ground beef, portuguese sausage, and onions.",
      "Add celery and bell peppers, and cook until the celery starts to get soft.",
      "Then, add chili seasoning, and saute for 1-2 minutes.",
      "Add tomato sauce, kidney beans, cream of chicken/mushroom soup and stir well. Fill tomato sauce and cream soup cans with water to take out excess sauce on sides of can and pour into pot.",
      "Add sugar, Worcestershire sauce, and black pepper to taste. Simmer until chili is thick, about 45 minutes.",
      "Serve with rice, spaghetti, hot dog, anykine."
    ],
    prepTime: 15,
    cookTime: 45,
    servings: 6,
    tags: [RecipeTag.DINNER, RecipeTag.HIGH_PROTEIN],
    image: "/placeholder.svg",
    requiredFoodIds: ["26", "2", "8", "17", "19", "15", "12"]
  },
  {
    id: "6",
    title: "Chicken Salad with Sautéed Rice and Steamed Vegetables",
    description: "A complete meal featuring chicken salad made with canned chicken, served as open-face sandwiches with sautéed rice and steamed vegetables on the side.",
    ingredients: [
      { name: "Basil", quantity: "2 teaspoons" },
      { name: "Black pepper", quantity: "2 teaspoons" },
      { name: "Vegetable or olive oil", quantity: "1 teaspoon" },
      { name: "Onions, diced", quantity: "3 cups" },
      { name: "Garlic, minced", quantity: "1/4 cup" },
      { name: "White rice", quantity: "1 cup" },
      { name: "Water", quantity: "3 cups" },
      { name: "Canned corn", quantity: "1 can" },
      { name: "Kale, shredded", quantity: "2 cups" },
      { name: "Potato bread", quantity: "2 slices" },
      { name: "Canned chicken breast", quantity: "1 can" },
      { name: "Mayonnaise", quantity: "3 teaspoons" },
      { name: "Margarine", quantity: "3 teaspoons" },
      { name: "Yellow mustard", quantity: "2 squares" }
    ],
    instructions: [
      "Mix one cup of rice with 2 cups of water. Add 1 teaspoon of basil and black pepper. Add one spoonful of margarine. Boil for five minutes and then steam on low heat for 15 minutes.",
      "Put the kale and the corn in a pot add 1 teaspoon of margarine and one cup of water. Boil the water and then reduce the heat to about five. Let the vegetable steam until you see the kale turn bright green and turn very moist and soft.",
      "Put one cup of diced onions and the entire amount of diced garlic into a sauté skillet. Add the oil and add 1 teaspoon of margarine. Sauté on medium heat until sufficiently caramelized. Use to top the rice or you can also put it in your chicken salad.",
      "Mix the mayonnaise with the canned chicken and 1 teaspoon of black pepper and 1 teaspoon of basil and stir until you get the right consistency and everything is mixed and then plate on the potato bread slices.",
      "Add yellow mustard on top for finish."
    ],
    prepTime: 10,
    cookTime: 25,
    servings: 2,
    tags: [RecipeTag.LUNCH, RecipeTag.HIGH_PROTEIN],
    image: "/placeholder.svg",
    requiredFoodIds: ["6", "17", "18", "14", "16", "9", "2"]
  },
  {
    id: "7",
    title: "Creme de la Creme PBD",
    description: "A quick and indulgent dessert featuring pitted Medjool dates stuffed with peanut butter and drizzled with condensed milk. Even better when frozen!",
    ingredients: [
      { name: "Pitted Medjool dates", quantity: "6-8 dates" },
      { name: "Peanut butter", quantity: "1 tbsp per date" },
      { name: "Condensed milk", quantity: "1 tsp per date" }
    ],
    instructions: [
      "Take out the seed of the Medjool dates by hand or with a knife.",
      "Use a spoon to fill the dates with peanut butter.",
      "Use a smaller spoon to drizzle condensed milk on top.",
      "For best results, freeze before serving!"
    ],
    prepTime: 5,
    cookTime: 0,
    servings: 2,
    tags: [RecipeTag.DESSERT, RecipeTag.SNACK, RecipeTag.QUICK, RecipeTag.EASY, RecipeTag.VEGETARIAN],
    image: "/placeholder.svg",
    requiredFoodIds: ["20", "4", "21"]
  },
  {
    id: "8",
    title: "Ginger Chicken Fried Rice",
    description: "This delicious recipe combines two local favorites: Fried rice and Cold Ginger Chicken. It is the perfect way to use any leftover rice and cold ginger chicken sauce. Estimated prep time is 10 minutes with a 10 minute cook time.",
    ingredients: [
      { name: "Cold ginger chicken sauce", quantity: "1/3 cup" },
      { name: "Leftover cooked rice", quantity: "3 cups" },
      { name: "Low sodium shoyu", quantity: "2 teaspoons" },
      { name: "Sugar", quantity: "1/4 teaspoon" },
      { name: "Sesame oil", quantity: "1 teaspoon" },
      { name: "Canned chicken, drained", quantity: "1 can (4.5 oz)" },
      { name: "Mild-flavor cooking oil", quantity: "1/3 cup" },
      { name: "Green onions, finely chopped", quantity: "1 cup" },
      { name: "Fresh ginger, minced", quantity: "1/3 cup" },
      { name: "Table salt", quantity: "1 teaspoon" }
    ],
    instructions: [
      "To make the ginger sauce: Pour oil into a pan over medium-high heat",
      "Once oil is hot, add ginger and cook for 15 seconds",
      "Add green onion and cook for another 20-30 seconds, mixing every 10 seconds with a spatula",
      "Turn off the heat and transfer to a bowl. Add salt and sesame oil",
      "To make fried rice: Pour ginger sauce into a large pan over medium-high heat",
      "Once sauce is sizzling, add the cooked rice. Spread rice across the pan.",
      "Cook for 3-4 minutes, tossing occasionally and breaking up chunks of rice with the spatula.",
      "Add shoyu, sugar, and sesame oil. Mix until rice is evenly coated.",
      "Add chicken. Cook for 2-3 more minutes to warm up chicken.",
      "Serve while hot."
    ],
    prepTime: 10,
    cookTime: 10,
    servings: 3,
    tags: [RecipeTag.LUNCH, RecipeTag.DINNER, RecipeTag.QUICK, RecipeTag.HIGH_PROTEIN],
    image: "/placeholder.svg",
    requiredFoodIds: ["6", "2", "17", "18", "25", "26"]
  },
  {
    id: "9",
    title: "Crunchy Tuna Salad",
    description: "A delicious and quick recipe that can be made into a snack or light meal— it pairs especially well with crackers or toast! It can be made in 10 minutes with ingredients that most people have on hand - tuna, mayo, onion, celery, salt, and pepper. The beauty of this dish is how easily it can be customized.",
    ingredients: [
      { name: "Canned tuna", quantity: "1 can" },
      { name: "Mayonnaise", quantity: "2-3 tablespoons" },
      { name: "Onion", quantity: "1/2" },
      { name: "Celery stalks", quantity: "3-4" },
      { name: "Salt", quantity: "to taste" },
      { name: "Pepper", quantity: "to taste" }
    ],
    instructions: [
      "Grab a medium sized bowl",
      "Dice celery and onions",
      "Add celery and onions to the bowl",
      "Open and drain can of tuna",
      "Add tuna to the bowl",
      "Add mayo to the bowl",
      "Add salt and pepper to taste",
      "Mix ingredients together"
    ],
    prepTime: 10,
    cookTime: 0,
    servings: 2,
    tags: [RecipeTag.LUNCH, RecipeTag.SNACK, RecipeTag.QUICK, RecipeTag.EASY, RecipeTag.HIGH_PROTEIN],
    image: "/placeholder.svg",
    requiredFoodIds: ["1", "17", "19", "30", "31"]
  },
  {
    id: "10",
    title: "Veggie Pasta with Broccoli and Zucchini",
    description: "Easy meal to make with your bestie! Delicious and hearty, vegetarian friendly pasta with three vegetables. We grated cheese inside for a creamy touch. Estimated time is 20 minutes.",
    ingredients: [
      { name: "Dry pasta", quantity: "8oz" },
      { name: "Marinara sauce", quantity: "1 jar" },
      { name: "Zucchini, diced", quantity: "1" },
      { name: "Onion, diced", quantity: "1" },
      { name: "Colby jack cheese", quantity: "4oz" },
      { name: "Frozen broccoli", quantity: "4oz" },
      { name: "Parmesan cheese", quantity: "for topping" },
      { name: "Pepper", quantity: "to taste" }
    ],
    instructions: [
      "Boil some dried pasta in a pot for 8 minutes.",
      "Cut up one zucchini, one onion, and frozen veggies of your choice (we used broccoli) and stir fry with oil or butter over medium/high heat for about five minutes.",
      "Add your sauce into the veggies. Save some pasta water!",
      "Add the noodles into the sauce mixture, stir it and grate some Colby jack cheese into the mix!",
      "After the cheese is melted or after 5 more min, turn off the heat and serve with some grated Parmesan on top."
    ],
    prepTime: 5,
    cookTime: 15,
    servings: 4,
    tags: [RecipeTag.LUNCH, RecipeTag.DINNER, RecipeTag.VEGETARIAN, RecipeTag.QUICK, RecipeTag.EASY],
    image: "/placeholder.svg",
    requiredFoodIds: ["7", "15", "19", "17", "22", "13"]
  },
  {
    id: "11",
    title: "Chicken Enchiladas",
    description: "As a grad student, weightlifter, and home chef, I'm always on the lookout for cost-effective, nutritious, and tasty ways to meal prep for the week ahead. When I saw the rice and beans offered at the Food Vault, Mexican food immediately came to my mind. Estimated prep time: 1.5 hours. Makes 10 enchiladas (5-6 servings).",
    ingredients: [
      { name: "Black beans", quantity: "1 can" },
      { name: "Chicken, boneless skinless", quantity: "2 lbs" },
      { name: "Enchilada sauce", quantity: "1 can" },
      { name: "Garlic", quantity: "10 cloves" },
      { name: "Jalapeños", quantity: "3" },
      { name: "Mexican four cheese blend", quantity: "1 16 oz bag" },
      { name: "Onion", quantity: "1 large" },
      { name: "White vinegar", quantity: "1/3 cup" },
      { name: "Vegetable oil", quantity: "4 tbsp" },
      { name: "Tortillas, burrito-sized", quantity: "10" },
      { name: "Salt", quantity: "to taste" },
      { name: "Black pepper", quantity: "to taste" },
      { name: "Red chili powder", quantity: "to taste" }
    ],
    instructions: [
      "Preheat your oven to 350 degrees F.",
      "Dice up the chicken into 1/2\" thick pieces. Place into a large bowl.",
      "Sprinkle 3 tbsp of salt over the chicken, mix, then set aside to let the chicken absorb the salt.",
      "Mince your onion, garlic, and dice your jalapeños.",
      "Heat 3 tbsp of vegetable oil in a pot over a stove on high heat. When the oil is hot, add the onions. Stir, add 1/2 tbsp of salt, then stir again. Reduce heat to medium-high.",
      "Allow onions to brown, stirring occasionally for at least 15 minutes.",
      "Add one more tbsp of vegetable oil into the pot. Let the oil heat up for 30 seconds, then add the garlic. Stir continuously for 30 seconds.",
      "Open and drain your black beans. Add the black beans, jalapeños, and chicken to the pot. Mix well, then let the mixture heat up.",
      "Cover the pot and let the chicken cook until fully cooked.",
      "Season to taste with salt, black pepper, and red chili powder.",
      "For enchilada sauce: Pour the can of sauce into a bowl. Add 1/3 cup of white vinegar and salt to taste.",
      "Spray your baking tray with non-stick cooking spray.",
      "Lay a tortilla out on a plate. Spread two tbsp of enchilada sauce around the tortilla.",
      "Add 3/4 cup of the enchilada filling in a straight line going horizontally across the center of the tortilla.",
      "Add 1/3 cup of the cheese on top.",
      "Roll up the enchilada and place within the baking tray with the rolled tortilla edges on the bottom.",
      "When the baking tray is full, spread a generous amount of enchilada sauce on top of the enchiladas, then spread cheese on top.",
      "Bake for 25 minutes, allowing the cheese to melt and the edges of the tortillas to get a little crispy.",
      "Serve while hot."
    ],
    prepTime: 30,
    cookTime: 60,
    servings: 6,
    tags: [RecipeTag.DINNER, RecipeTag.HIGH_PROTEIN],
    image: "/placeholder.svg",
    requiredFoodIds: ["12", "2", "15", "17", "18", "22", "9", "26"]
  },
  {
    id: "12",
    title: "Beef/Turkey Chili",
    description: "A hearty chili recipe. Serves about 5 to 6 people. Takes about 15 minutes of Prep time, about 1 hour of active cooking time. Serve with toppings and sides like cheese, rice, or chips.",
    ingredients: [
      { name: "Ground beef or turkey", quantity: "2 lbs" },
      { name: "Bacon (optional)", quantity: "4 strips" },
      { name: "Olive or vegetable oil", quantity: "2 tsps" },
      { name: "Onion, diced", quantity: "1" },
      { name: "Garlic, minced", quantity: "5 cloves" },
      { name: "Jalapeño, diced (optional)", quantity: "1" },
      { name: "Tomato sauce", quantity: "2 15oz cans" },
      { name: "Diced tomatoes", quantity: "2 15oz cans" },
      { name: "Black beans, drained", quantity: "2 15oz cans" },
      { name: "Kidney beans, drained", quantity: "1 15oz can" },
      { name: "Corn, drained", quantity: "2 15oz cans" },
      { name: "Salt", quantity: "1.5 tsp" },
      { name: "Ground black pepper", quantity: "1/2 tsp" },
      { name: "Chili powder", quantity: "2 tbsp" },
      { name: "Cumin powder", quantity: "2.25 tsp" },
      { name: "Garlic powder", quantity: "1 tsp" },
      { name: "Ground oregano", quantity: "1 tsp" }
    ],
    instructions: [
      "If using bacon, cook the bacon on a pan on medium heat until cooked, but not crispy. Chop up the bacon into pieces and set aside the bacon fat in the pan.",
      "Bring a large pot up to temperature over medium heat. Add oil (or bacon fat) to the pot, and add onions.",
      "Sauté onions until they turn translucent. If using jalapeños, add them at the same time as the onions. Cook for about three minutes.",
      "Add in the minced garlic. Sauté until fragrant, about 40 seconds.",
      "Add in ground beef and cook until brown. Should take about 7 to 10 minutes. Be sure to use a wooden spoon to break ground beef up into small pieces.",
      "Drain the excess oil from the ground beef and discard the oil. Add in the salt, pepper, cumin, chili powder, oregano, and garlic powder. Mix well.",
      "Once seasonings have been mixed into the meat, add the beans, corn, diced tomatoes (and all the diced tomato juice), and tomato sauce. Add in the bacon if using.",
      "Bring to a simmer. Let it simmer for about 40 minutes.",
      "After simmering, chili is done! Serve with toppings and sides!"
    ],
    prepTime: 15,
    cookTime: 60,
    servings: 6,
    tags: [RecipeTag.DINNER, RecipeTag.HIGH_PROTEIN],
    image: "/placeholder.svg",
    requiredFoodIds: ["2", "17", "18", "15", "12", "14", "30", "31", "26"]
  },
  {
    id: "13",
    title: "Cluck & Bok Ramen",
    description: "Cluck & Bok Ramen is a delicious bowl of ramen featuring tender chicken thigh strips, a perfectly cooked egg, crisp bok choy, a sheet of nori topped with crispy garlic, and a green onion garnish. This dish offers a satisfying blend of textures and flavors, using the simplest of ingredients. It can all be made in 20 minutes.",
    ingredients: [
      { name: "Chicken thigh", quantity: "1" },
      { name: "Ramen noodles", quantity: "1 package" },
      { name: "Bok choy", quantity: "few stalks/leaves" },
      { name: "Egg", quantity: "1" },
      { name: "Garlic", quantity: "4 cloves" },
      { name: "Vegetable oil", quantity: "splash" },
      { name: "Nori", quantity: "1 piece" },
      { name: "Sesame oil", quantity: "to taste" },
      { name: "Green onion", quantity: "2 stalks" }
    ],
    instructions: [
      "Bring a pot of water to a boil.",
      "Add the uncooked ramen noodles and egg. Cook according to the package instructions.",
      "Once the noodles and egg are cooked, stir in the ramen seasoning.",
      "Pour the ramen, egg, and broth into a bowl.",
      "Drizzle sesame oil into the broth to taste.",
      "Mince the garlic.",
      "In a separate pan, heat a splash of vegetable oil and pan-fry the chicken thigh until fully cooked.",
      "Slice the chicken into strips and place on top of your ramen.",
      "Sauté the minced garlic (using the chicken grease or a splash of vegetable oil) until it's lightly browned and crispy.",
      "Place a piece of nori on top of the ramen and sprinkle the crispy garlic over it.",
      "Rinse the bok choy and add it to the ramen. You can either keep it fresh or sauté it if you prefer.",
      "Garnish bowl with green onion",
      "Enjoy!"
    ],
    prepTime: 5,
    cookTime: 15,
    servings: 1,
    tags: [RecipeTag.LUNCH, RecipeTag.DINNER, RecipeTag.QUICK, RecipeTag.HIGH_PROTEIN],
    image: "/placeholder.svg",
    requiredFoodIds: ["2", "7", "16", "3", "18", "26"]
  },
  {
    id: "14",
    title: "Creamed Tuna",
    description: "Creamed tuna is a comforting dish made with canned tuna and a creamy sauce. The sauce base is made with butter, flour, onions, and milk (or evaporated milk mixed with water). You can also add other ingredients like hard boiled eggs, frozen peas and carrots, smoked paprika and/or parsley. The estimated preparation time is about 15 minutes.",
    ingredients: [
      { name: "Butter", quantity: "4 tbsp" },
      { name: "Onion, diced", quantity: "1 medium" },
      { name: "Flour", quantity: "4 tbsp" },
      { name: "Milk", quantity: "2 cups" },
      { name: "Salt", quantity: "1/2 tsp" },
      { name: "Pepper", quantity: "1/2 tsp" },
      { name: "Canned tuna", quantity: "1 can" },
      { name: "Frozen peas and carrots (optional)", quantity: "1/2 cup" },
      { name: "Smoked paprika (optional)", quantity: "1/4 tsp" },
      { name: "Parsley, chopped (optional)", quantity: "1 tbsp" },
      { name: "Hard boiled eggs, chopped (optional)", quantity: "2" }
    ],
    instructions: [
      "Melt butter in a pot on medium heat",
      "Add onions and cook until translucent",
      "Stir in flour and cook until flour incorporated with onions",
      "Add milk, salt, and pepper until bubbling and thickened",
      "Add tuna into milk mixture while breaking up large chunks",
      "Add any desired optional ingredients",
      "Serve with steamed rice, crackers, or toast"
    ],
    prepTime: 5,
    cookTime: 10,
    servings: 4,
    tags: [RecipeTag.LUNCH, RecipeTag.DINNER, RecipeTag.QUICK, RecipeTag.EASY, RecipeTag.HIGH_PROTEIN],
    image: "/placeholder.svg",
    requiredFoodIds: ["1", "17", "21", "23", "30", "31", "3"]
  },
  {
    id: "15",
    title: "Vietnamese Pancake",
    description: "Vietnamese pancake that can be eaten with fresh vegetables. A crispy, savory pancake filled with your choice of protein and served with fresh herbs and dipping sauce.",
    ingredients: [
      { name: "Rice flour", quantity: "1 cup" },
      { name: "Cornstarch (optional)", quantity: "1/4 cup" },
      { name: "Cold water", quantity: "1 3/4 cup" },
      { name: "Coconut milk (optional)", quantity: "1/2 cup" },
      { name: "Turmeric powder", quantity: "1/2 teaspoon" },
      { name: "Salt", quantity: "1/2 teaspoon" },
      { name: "Green onion, sliced", quantity: "1 stalk" },
      { name: "Spam, diced OR canned chicken OR canned tuna", quantity: "1 can" },
      { name: "Onion, sliced", quantity: "1/2" },
      { name: "Bean sprouts", quantity: "1 cup" },
      { name: "Fish sauce", quantity: "3 tbsp" },
      { name: "Sugar", quantity: "3 tbsp" },
      { name: "Lime juice", quantity: "3 tbsp" },
      { name: "Minced garlic and chili", quantity: "to taste" }
    ],
    instructions: [
      "In a large bowl, mix rice flour, cornstarch, turmeric powder, and salt.",
      "Add water and coconut milk (if using). Stir until smooth, then add sliced green onions.",
      "Let the batter rest for at least 30 minutes.",
      "Add 1 tsp oil into a pan, add garlic, then sauté the protein (diced Spam or chicken or tuna) with bean sprouts. Put them into a bowl.",
      "Heat a nonstick or cast iron pan (8–10 inches) over medium-high heat. Add about 1 tsp oil and swirl.",
      "Pour in just enough batter to thinly coat the pan (about 1/3 cup). Quickly tilt the pan to spread batter evenly.",
      "Add 2 spoons of the filling and spread them over the pan.",
      "Cover the pan and cook for 2–3 minutes with medium heat.",
      "Remove the cover and cook uncovered for another 2 minutes or until the pancake is crispy and golden.",
      "Fold the pancake in half and slide onto a plate.",
      "For dipping sauce: Mix fish sauce, sugar, lime juice, water, minced garlic and chopped chili. Stir until sugar dissolves.",
      "Serve by wrapping pieces of Vietnamese pancake in lettuce leaves with herbs, and dip in the dipping sauce."
    ],
    prepTime: 40,
    cookTime: 20,
    servings: 4,
    tags: [RecipeTag.LUNCH, RecipeTag.DINNER, RecipeTag.GLUTEN_FREE],
    image: "/placeholder.svg",
    requiredFoodIds: ["6", "17", "18", "1", "2", "8", "25", "30"]
  },
  {
    id: "16",
    title: "Fried Rice",
    description: "Easy fried rice using canned food. A versatile dish that can be customized with whatever protein and vegetables you have on hand.",
    ingredients: [
      { name: "Cooked rice (preferably day-old)", quantity: "3 cups" },
      { name: "Cooking oil", quantity: "2 tablespoons" },
      { name: "Canned tuna OR canned chicken OR Spam OR Vienna sausages", quantity: "1 can" },
      { name: "Canned corn, drained", quantity: "1/2 cup" },
      { name: "Canned green beans, drained", quantity: "1/2 cup" },
      { name: "Garlic, minced", quantity: "1 clove" },
      { name: "Soy sauce", quantity: "1 tablespoon" },
      { name: "Pepper", quantity: "1/8 teaspoon" },
      { name: "Tomato sauce (optional)", quantity: "1 tablespoon" },
      { name: "Chili sauce (optional)", quantity: "1 tablespoon" },
      { name: "Egg", quantity: "1" },
      { name: "Fresh kai choy, sliced", quantity: "to taste" }
    ],
    instructions: [
      "Prep your rice – Best if it's cold and clumpy. Break it apart with a fork.",
      "In a large pan or wok, heat 2 tbsp oil over medium-high heat. Add diced onion and garlic. Sauté until fragrant, about 1 minute.",
      "Add your combo of canned protein (e.g., Spam, chicken, tuna, sausages). Cook for 2–3 minutes to slightly crisp the meat.",
      "Toss in canned veggies and fresh kai choy. Stir-fry for another 2 minutes.",
      "Push everything to the side of the pan. Crack in one egg and scramble until set, then mix it all together.",
      "Add cooked rice. Break up any clumps and mix well with the rest. Cook for 3–4 minutes, stirring frequently.",
      "Add soy sauce (and tomato sauce if you have). Stir well to coat the rice evenly. Add a little pepper.",
      "Serve hot."
    ],
    prepTime: 10,
    cookTime: 15,
    servings: 4,
    tags: [RecipeTag.LUNCH, RecipeTag.DINNER, RecipeTag.QUICK, RecipeTag.EASY],
    image: "/placeholder.svg",
    requiredFoodIds: ["6", "26", "1", "2", "8", "14", "13", "18", "3", "16"]
  },
  {
    id: "17",
    title: "Vietnamese Stew Beef",
    description: "Traditional Vietnamese Stew Beef featuring tender beef chunks in an aromatic, spiced broth with carrots. Perfect served with rice or bread.",
    ingredients: [
      { name: "Beef chuck or brisket, cubed", quantity: "2.5 lbs" },
      { name: "Garlic, minced", quantity: "1 tbsp" },
      { name: "Lemongrass, minced", quantity: "1 tbsp" },
      { name: "Shallot, minced", quantity: "1 tbsp" },
      { name: "Sugar", quantity: "1 tbsp" },
      { name: "Fish sauce", quantity: "1 tbsp" },
      { name: "Soy sauce", quantity: "1 tbsp" },
      { name: "Oyster sauce", quantity: "1 tbsp" },
      { name: "Five-spice powder", quantity: "1 tsp" },
      { name: "Ground black pepper", quantity: "1/2 tsp" },
      { name: "Vegetable oil", quantity: "2 tbsp" },
      { name: "Tomato paste (optional)", quantity: "1 tbsp" },
      { name: "Onion, chopped", quantity: "1 medium" },
      { name: "Lemongrass stalks", quantity: "2-3" },
      { name: "Star anise", quantity: "3" },
      { name: "Cinnamon stick", quantity: "1" },
      { name: "Carrots, chunked", quantity: "2-3" },
      { name: "Water or beef broth", quantity: "4-5 cups" }
    ],
    instructions: [
      "Combine beef with garlic, lemongrass, shallot, sugar, fish sauce, soy sauce, oyster sauce, five-spice powder, and black pepper. Mix well and let it sit for at least 1 hour, preferably overnight in the fridge.",
      "Heat oil in a large pot over medium-high heat.",
      "Add chopped onion and sauté until fragrant.",
      "Add the marinated beef and sear until browned on all sides.",
      "Stir in tomato paste and cook for 2 more minutes for deeper flavor.",
      "Add lemongrass stalks, star anise, and cinnamon stick.",
      "Pour in enough water or beef broth to cover the meat.",
      "Bring to a boil, skim off any scum, then reduce heat to low.",
      "Simmer gently for 1.5 to 2 hours, until beef is tender.",
      "About 30 minutes before it's done, add the carrots.",
      "Taste and adjust with fish sauce, salt, or a little sugar as needed.",
      "Garnish with chopped cilantro or basil."
    ],
    prepTime: 20,
    cookTime: 120,
    servings: 6,
    tags: [RecipeTag.DINNER, RecipeTag.HIGH_PROTEIN],
    image: "/placeholder.svg",
    requiredFoodIds: ["2", "17", "18", "19", "25", "26", "15"]
  },
  {
    id: "18",
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
    id: "19",
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
    id: "20",
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
    id: "21",
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
  },
  {
    id: "22",
    title: "Yogurt",
    description: "Easy recipe to make yogurt using evaporated milk and a yogurt starter. Perfect for a homemade treat with your favorite canned fruits.",
    ingredients: [
      { name: "Evaporated milk", quantity: "1 can" },
      { name: "Sugar", quantity: "5 tablespoons" },
      { name: "Hot water", quantity: "1 can (same size as milk can)" },
      { name: "Plain yogurt with live cultures", quantity: "1 cup" },
      { name: "Canned fruit", quantity: "1 cup" }
    ],
    instructions: [
      "In a large bowl, whisk together evaporated milk, sugar, and hot water (160–170°F). Stir until smooth.",
      "Let the milk mixture cool to around 110°F (warm to touch, not hot).",
      "Add plain yogurt and mix gently until fully dissolved.",
      "Add diced canned fruit and stir to mix everything well.",
      "Use yogurt maker or Instant Pot yogurt setting for 8-10 hours, or let sit undisturbed for 8-10 hours until set.",
      "After incubation, refrigerate for at least 4 hours.",
      "Serve cold with honey, chia seeds, or eat plain."
    ],
    prepTime: 15,
    cookTime: 480, // 8 hours incubation
    servings: 4,
    tags: [RecipeTag.BREAKFAST, RecipeTag.DESSERT, RecipeTag.VEGETARIAN],
    image: "/placeholder.svg",
    requiredFoodIds: ["21", "25", "1", "20"]
  },
  {
    id: "23",
    title: "Spring Rolls (Chả Giò)",
    description: "Vietnamese-style spring rolls made with canned ingredients. Crispy fried rolls filled with tuna or chicken, vegetables, and ramen noodles.",
    ingredients: [
      { name: "Canned tuna or chicken", quantity: "1 can" },
      { name: "Ramen noodles, cooked and chopped", quantity: "1 pack" },
      { name: "Canned corn or green beans", quantity: "1/4 cup" },
      { name: "Onion, minced", quantity: "1/4 medium" },
      { name: "Garlic, minced", quantity: "1 clove" },
      { name: "Zucchini, finely shredded", quantity: "1/2 cup" },
      { name: "Egg", quantity: "1" },
      { name: "Fish sauce or soy sauce", quantity: "1 tsp" },
      { name: "Sugar", quantity: "1/2 tsp" },
      { name: "Rice paper sheets", quantity: "10" },
      { name: "Oil for frying", quantity: "for frying" }
    ],
    instructions: [
      "Mix drained tuna/chicken, cooked ramen, corn/vegetables, onion, garlic, zucchini, egg, fish sauce, sugar, and pepper in a bowl.",
      "Soften rice paper sheets in warm water for 3-5 seconds and place on damp towel.",
      "Place 2 tablespoons of filling near edge of wrapper.",
      "Fold sides in, then roll tightly from bottom up. Seal end with water or beaten egg.",
      "Heat 1 inch of oil in pan over medium heat.",
      "Fry rolls in batches until golden brown and crispy, about 4-5 minutes per side.",
      "Remove and drain on paper towels.",
      "Serve hot with dipping sauce and fresh vegetables."
    ],
    prepTime: 30,
    cookTime: 15,
    servings: 4,
    tags: [RecipeTag.LUNCH, RecipeTag.DINNER, RecipeTag.SNACK],
    image: "/placeholder.svg",
    requiredFoodIds: ["1", "2", "7", "17", "18", "3", "25"]
  },
  {
    id: "24",
    title: "Jangy Noodles",
    description: "A fusion dish combining Korean jang (fermented sauces) with Italian pasta. An easy dish that blends Korean flavors with classic tomato-based pasta.",
    ingredients: [
      { name: "Spaghetti noodles", quantity: "1 box" },
      { name: "Onion", quantity: "1/2" },
      { name: "Button mushrooms", quantity: "1 can" },
      { name: "Garlic", quantity: "6 cloves" },
      { name: "Tomato paste", quantity: "1 can or 6 tbsp" },
      { name: "Jang (doenjang, gochujang, or ssamjang)", quantity: "4 tbsp" },
      { name: "Milk", quantity: "1 cup" },
      { name: "Salt", quantity: "to taste" },
      { name: "Black pepper", quantity: "for garnish" },
      { name: "Green onion", quantity: "for garnish" },
      { name: "Sesame seeds", quantity: "for garnish" }
    ],
    instructions: [
      "Cook spaghetti noodles according to box instructions in a large pot of boiling water.",
      "Mince mushrooms and garlic.",
      "Brown mushrooms and garlic in a pan over medium heat.",
      "Add tomato paste and choice of jang, mix well.",
      "Slowly mix in milk to create sauce.",
      "Add cooked noodles and mix thoroughly.",
      "Garnish with black pepper, green onion, and sesame seeds."
    ],
    prepTime: 10,
    cookTime: 20,
    servings: 4,
    tags: [RecipeTag.LUNCH, RecipeTag.DINNER, RecipeTag.VEGETARIAN],
    image: "/placeholder.svg",
    requiredFoodIds: ["7", "17", "18", "15", "21"]
  },
  {
    id: "25",
    title: "Spaghetti Goreng (Stir Fry Spaghetti)",
    description: "Indonesian-inspired stir-fried spaghetti with sweet soy sauce and spam. A unique fusion dish that combines Italian pasta with Southeast Asian flavors.",
    ingredients: [
      { name: "Spaghetti", quantity: "1/2 pack" },
      { name: "Kecap manis (sweet soy sauce)", quantity: "4 tbsp" },
      { name: "Oyster sauce", quantity: "3 tbsp" },
      { name: "Ketchup", quantity: "1 tbsp" },
      { name: "Vegetable oil", quantity: "3 tbsp" },
      { name: "Eggs", quantity: "2" },
      { name: "Garlic, chopped", quantity: "3 cloves" },
      { name: "Spam, cubed", quantity: "1/2 can" },
      { name: "Shrimp (optional)", quantity: "7" },
      { name: "Cabbage, sliced", quantity: "2 cups" },
      { name: "Green onions", quantity: "2 stalks" },
      { name: "Salt", quantity: "to taste" }
    ],
    instructions: [
      "Boil spaghetti until soft (10-15 minutes). Rinse with cold water and drain.",
      "Mix noodles with sweet soy sauce and salt. Set aside.",
      "Heat 1 tbsp oil in pan. Scramble eggs into small pieces and set aside.",
      "Cut spam and vegetables into small pieces.",
      "Heat 1 tbsp oil in large pan. Add garlic and stir-fry for 2 minutes.",
      "Add spam and shrimp, stir-fry on high heat for 2 minutes.",
      "Reduce to medium heat, add eggs, vegetables, and prepared spaghetti.",
      "Pour in oyster sauce and mix thoroughly. Adjust seasoning.",
      "Add green onions and give final stir before serving."
    ],
    prepTime: 15,
    cookTime: 15,
    servings: 4,
    tags: [RecipeTag.LUNCH, RecipeTag.DINNER, RecipeTag.HIGH_PROTEIN],
    image: "/placeholder.svg",
    requiredFoodIds: ["7", "3", "18", "8", "26"]
  },
  {
    id: "26",
    title: "Minestrone",
    description: "A hearty Italian soup made with whatever canned ingredients you have on hand. Simple one-pot meal that's ready in 30 minutes.",
    ingredients: [
      { name: "Canned chicken", quantity: "1 can" },
      { name: "Canned spam", quantity: "1 can" },
      { name: "Canned beans or legumes", quantity: "1 can" },
      { name: "Canned vegetables", quantity: "1 can" },
      { name: "Tomato sauce or marinara", quantity: "1 can" },
      { name: "Dried pasta", quantity: "1/4 box" },
      { name: "Pepper", quantity: "to taste" },
      { name: "Salt", quantity: "to taste" },
      { name: "Water", quantity: "3 cups" },
      { name: "Chicken bouillon cubes", quantity: "2" },
      { name: "Fresh vegetables", quantity: "as desired" }
    ],
    instructions: [
      "Boil 3 cups of water in a large pot.",
      "Cut vegetables and spam into small pieces while water heats.",
      "Add all ingredients to the boiling water.",
      "Let simmer for 30 minutes until pasta is cooked and flavors meld.",
      "Season with salt and pepper to taste.",
      "Serve hot."
    ],
    prepTime: 10,
    cookTime: 30,
    servings: 6,
    tags: [RecipeTag.LUNCH, RecipeTag.DINNER, RecipeTag.EASY],
    image: "/placeholder.svg",
    requiredFoodIds: ["2", "8", "12", "13", "15", "7", "30", "31"]
  },
  {
    id: "27",
    title: "Khichuri with Beef and Eggplant",
    description: "A popular Southeast Asian comfort dish combining rice and lentils with spiced beef curry and fried eggplant. Perfect for rainy days.",
    ingredients: [
      { name: "Rice", quantity: "2 cups" },
      { name: "Lentils", quantity: "1 cup" },
      { name: "Oil", quantity: "5 tbsp + 10 tbsp for beef" },
      { name: "Onion", quantity: "3 pieces total" },
      { name: "Chili powder", quantity: "5 tbsp total" },
      { name: "Salt", quantity: "7 tbsp total" },
      { name: "Turmeric powder", quantity: "2 tbsp total" },
      { name: "Garlic paste", quantity: "4 tbsp total" },
      { name: "Ginger paste", quantity: "4 tbsp total" },
      { name: "Carrot", quantity: "1 medium" },
      { name: "Potato", quantity: "1" },
      { name: "Beef", quantity: "1 lb" },
      { name: "Beef masala", quantity: "5 tbsp" },
      { name: "Eggplant", quantity: "1" }
    ],
    instructions: [
      "For Khichuri: Wash rice, lentils, onion, carrot, and potato. Chop onion finely and cut carrot and potato into medium pieces.",
      "Mix rice, lentils, 1 chopped onion, 2 tbsp chili powder, 3 tbsp salt, 1 tbsp turmeric, 1 tbsp garlic paste, 1/2 tbsp ginger paste, carrot, and potato.",
      "Cook in rice cooker for about 30 minutes.",
      "For Beef: Wash beef and mix with 2 chopped onions, 3 tbsp chili powder, 3 tbsp salt, 1 tbsp turmeric, 3 tbsp garlic paste, 3 tbsp ginger paste, and beef masala.",
      "Marinate in refrigerator for 10 minutes, then cook in frying pan on low heat for 40 minutes.",
      "For Eggplant: Wash and slice eggplant into rounds. Mix with 1 tbsp salt and 1/2 tbsp turmeric.",
      "Fry in oil for 5 minutes until golden.",
      "Serve all three components together."
    ],
    prepTime: 20,
    cookTime: 75,
    servings: 6,
    tags: [RecipeTag.DINNER, RecipeTag.HIGH_PROTEIN],
    image: "/placeholder.svg",
    requiredFoodIds: ["6", "11", "17", "18", "25", "26", "2"]
  },
  {
    id: "28",
    title: "Balanced Bite Nachos",
    description: "A quick and balanced snack combining chips, cheese, chicken, and vegetables. Perfect for busy lifestyles and ready in just 20 minutes.",
    ingredients: [
      { name: "Canned chicken", quantity: "1 can" },
      { name: "Mexican blend cheese", quantity: "1 bag" },
      { name: "Tortilla chips", quantity: "1/2 bag" },
      { name: "Red bell pepper", quantity: "1" },
      { name: "Yellow bell pepper", quantity: "1" },
      { name: "Lime", quantity: "1" },
      { name: "Hot sauce", quantity: "to taste" }
    ],
    instructions: [
      "Preheat oven to 250°F. Wash and dice bell peppers.",
      "Drain and shred chicken. Cut lime into quarters.",
      "On oven-safe tray with parchment paper, lay out chips.",
      "Add cheese on top, then spread chicken evenly with no overlapping.",
      "Insert tray into heated oven. Check every 5 minutes.",
      "After 10 minutes, add bell peppers for light toasting.",
      "Cook 5 more minutes (total cooking time should not exceed 20 minutes).",
      "Remove from oven and let cool.",
      "Add lime juice to taste and hot sauce as desired."
    ],
    prepTime: 5,
    cookTime: 20,
    servings: 4,
    tags: [RecipeTag.SNACK, RecipeTag.QUICK, RecipeTag.EASY],
    image: "/placeholder.svg",
    requiredFoodIds: ["2", "22", "9", "19"]
  },
  {
    id: "29",
    title: "Nutty Curry Ramen",
    description: "Elevated packaged ramen with a rich, nutty curry sauce. Perfect comfort food for chilly days that tastes like a restaurant meal.",
    ingredients: [
      { name: "Almond milk", quantity: "1/3 cup" },
      { name: "Onion, chopped", quantity: "1/4 round" },
      { name: "Garlic, minced", quantity: "to taste" },
      { name: "Peanut butter", quantity: "2 tbsp" },
      { name: "Soy sauce", quantity: "2 tbsp" },
      { name: "Curry powder", quantity: "1 tbsp" },
      { name: "Salt and pepper", quantity: "to taste" },
      { name: "Lemon juice", quantity: "1 wedge worth" },
      { name: "Ramen noodles", quantity: "1 pack" },
      { name: "Carrots, chopped", quantity: "4 baby carrots" },
      { name: "Fresh cilantro", quantity: "1 handful" },
      { name: "Garlic chili oil", quantity: "to taste" },
      { name: "Sesame seeds", quantity: "for garnish" },
      { name: "Sesame oil", quantity: "dash" }
    ],
    instructions: [
      "Boil ramen noodles in a pot according to package instructions.",
      "In a saucepan, sauté onion and garlic until fragrant.",
      "Add almond milk and bring to boil.",
      "Add peanut butter and soy sauce, stir until smooth.",
      "Add curry powder, salt, pepper, and lemon juice.",
      "When noodles are done, add them to the curry sauce and mix.",
      "Serve topped with chopped carrots, cilantro, sesame seeds, chili oil, and a dash of sesame oil."
    ],
    prepTime: 5,
    cookTime: 10,
    servings: 1,
    tags: [RecipeTag.LUNCH, RecipeTag.DINNER, RecipeTag.QUICK, RecipeTag.VEGETARIAN],
    image: "/placeholder.svg",
    requiredFoodIds: ["7", "17", "18", "4", "21"]
  },
  {
    id: "30",
    title: "Rotini Pasta",
    description: "Simple Italian-style pasta from Northern Italy. The spiral shape holds sauce well, making it perfect for a quick and satisfying meal.",
    ingredients: [
      { name: "Pasta", quantity: "100g" },
      { name: "Oil", quantity: "2 tbsp" },
      { name: "Onion", quantity: "1/4 medium" },
      { name: "Chili powder", quantity: "2 tbsp" },
      { name: "Salt", quantity: "2 tbsp" },
      { name: "Turmeric powder", quantity: "1/4 tbsp" },
      { name: "Tomato sauce", quantity: "5 tbsp" }
    ],
    instructions: [
      "Boil water and add a few drops of oil.",
      "Add 100g pasta and cook until 80% soft, then drain.",
      "In another frying pan, fry onion until translucent.",
      "Add chili powder, salt, turmeric, and tomato sauce as required.",
      "Stir for 1 minute, then add boiled pasta.",
      "Mix properly and cook for 5 minutes until ready to eat."
    ],
    prepTime: 5,
    cookTime: 15,
    servings: 2,
    tags: [RecipeTag.LUNCH, RecipeTag.DINNER, RecipeTag.QUICK, RecipeTag.EASY, RecipeTag.VEGETARIAN],
    image: "/placeholder.svg",
    requiredFoodIds: ["7", "17", "15", "26", "30"]
  },
  {
    id: "31",
    title: "Chicken Enchiladas (Revised)",
    description: "Updated version of chicken enchiladas using cream soup base for the sauce instead of traditional enchilada sauce. Perfect for meal prep.",
    ingredients: [
      { name: "Black beans", quantity: "1 can (15 oz)" },
      { name: "Chicken", quantity: "2 lbs" },
      { name: "Cream of chicken or mushroom soup", quantity: "2 cans (11 oz)" },
      { name: "Garlic", quantity: "10 cloves" },
      { name: "Green chiles", quantity: "6 cans (4 oz)" },
      { name: "Milk", quantity: "2 cups" },
      { name: "Mexican four cheese blend", quantity: "1 bag (16 oz)" },
      { name: "Onion", quantity: "1 large" },
      { name: "Tortillas, burrito-sized", quantity: "10" },
      { name: "Vegetable oil", quantity: "4 tbsp" },
      { name: "Salt", quantity: "to taste" },
      { name: "Black pepper", quantity: "to taste" },
      { name: "Red chili powder", quantity: "to taste" }
    ],
    instructions: [
      "Preheat oven to 350°F. Dice chicken into 1/2 inch pieces and season with 3 tbsp salt.",
      "Mince onion and garlic.",
      "Heat 3 tbsp oil in pot on high heat. Add onions, stir with 1/2 tbsp salt, reduce to medium-high.",
      "Brown onions for 15 minutes. Add 1 tbsp oil, then garlic. Stir for 30 seconds.",
      "Add drained black beans, 3 cans green chiles, and chicken. Cook until chicken is done.",
      "Season with salt, pepper, and chili powder.",
      "For sauce: Heat cream soup and milk in saucepan. Add 3 cans diced green chiles. Season with salt, pepper, and chili powder.",
      "Spread 2 tbsp sauce on tortilla. Add 3/4 cup filling and 1/3 cup cheese. Roll and place in baking tray.",
      "Top with remaining sauce and cheese. Bake 25 minutes until cheese melts and edges crisp."
    ],
    prepTime: 30,
    cookTime: 60,
    servings: 6,
    tags: [RecipeTag.DINNER, RecipeTag.HIGH_PROTEIN],
    image: "/placeholder.svg",
    requiredFoodIds: ["12", "2", "17", "18", "22", "9", "21", "26"]
  },
  {
    id: "32",
    title: "Hot Milk Tea",
    description: "A globally popular hot beverage similar to chai. Rich, flavorful, and affordable comfort drink perfect for any time of day.",
    ingredients: [
      { name: "Tea bags", quantity: "2" },
      { name: "Evaporated milk", quantity: "30 ml" },
      { name: "Sugar", quantity: "2 tbsp" },
      { name: "Ginger", quantity: "1 small slice" },
      { name: "Hot water", quantity: "2/3 cup" }
    ],
    instructions: [
      "In a cup, add evaporated milk and sugar. Mix properly.",
      "Add tea bags and ginger slice to the cup.",
      "Pour 2/3 cup hot water into the cup and mix properly.",
      "Microwave for 1 minute.",
      "Remove from microwave, stir well, and discard tea bags.",
      "Serve hot. The ginger will give extra flavor."
    ],
    prepTime: 2,
    cookTime: 3,
    servings: 1,
    tags: [RecipeTag.BREAKFAST, RecipeTag.QUICK, RecipeTag.VEGETARIAN],
    image: "/placeholder.svg",
    requiredFoodIds: ["21", "25", "18"]
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
