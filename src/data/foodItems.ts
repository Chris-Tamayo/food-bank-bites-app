
import { FoodItem } from "@/hooks/useBasket";
import cannedTuna from "../assets/canned-tuna.jpg";
import cannedChicken from "../assets/canned-chicken.jpg";
import eggs from "../assets/eggs.jpg";
import peanutButter from "../assets/peanut-butter.webp";
import driedBeans from "../assets/dried-beans.jpg"
import rice from "../assets/rice.jpg"
import pasta from "../assets/pasta.jpg"
import cereal from "../assets/cereal.png"
import bread from "../assets/bread.jpg"
import oatmeal from "../assets/oatmeal.avif";
import cannedSoup from "../assets/canned-soup.jpg";
import cannedBeans from "../assets/canned-beans.webp";
import cannedVegetables from "../assets/canned-vegetables.jpg";
import cannedFruit from "../assets/canned-fruit.webp";
import cannedTomato from "../assets/canned-tomatos.webp"
import potato from "../assets/potato.webp"
import onion from "../assets/onion.webp"
import carrot from "../assets/carrot.webp"
import apple from "../assets/apple.webp"
import banana from "../assets/banana.webp"
import milk from "../assets/milk.webp"
import cheese from "../assets/cheese.webp"
import butter from "../assets/butter.webp"
import flour from "../assets/flour.webp"
import sugar from "../assets/sugar.webp"
import cookingOil from "../assets/olive-oil.webp"
import ketchup from "../assets/ketchup.webp"
import mustard from "../assets/mustard.webp"
import mayo from "../assets/mayo.webp"
import salt from "../assets/salt.webp"
import pepper from "../assets/pepper.webp"



// Mock food items that are typically available at food banks
export const foodCategories = [
  "Proteins",
  "Grains",
  "Canned Goods",
  "Vegetables",
  "Fruits",
  "Dairy",
  "Baking & Cooking",
  "Condiments",
];

export const foodItems: FoodItem[] = [
  // Proteins
  {
    id: "1",
    name: "Canned Tuna",
    category: "Proteins",
    quantity: 1,
    unit: "can",
    image: cannedTuna,
  },
  {
    id: "2",
    name: "Canned Chicken",
    category: "Proteins",
    quantity: 1,
    unit: "can",
    image: cannedChicken,
  },
  {
    id: "3",
    name: "Eggs",
    category: "Proteins",
    quantity: 1,
    unit: "dozen",
    image: eggs,
  },
  {
    id: "4",
    name: "Peanut Butter",
    category: "Proteins",
    quantity: 1,
    unit: "jar",
    image: peanutButter,
  },
  {
    id: "5",
    name: "Dried Beans",
    category: "Proteins",
    quantity: 1,
    unit: "lb",
    image: driedBeans,
  },
  
  // Grains
  {
    id: "6",
    name: "Rice",
    category: "Grains",
    quantity: 1,
    unit: "lb",
    image: rice,
  },
  {
    id: "7",
    name: "Pasta",
    category: "Grains",
    quantity: 1,
    unit: "box",
    image: pasta,
  },
  {
    id: "8",
    name: "Cereal",
    category: "Grains",
    quantity: 1,
    unit: "box",
    image: cereal,
  },
  {
    id: "9",
    name: "Bread",
    category: "Grains",
    quantity: 1,
    unit: "loaf",
    image: bread,
  },
  {
    id: "10",
    name: "Oatmeal",
    category: "Grains",
    quantity: 1,
    unit: "container",
    image: oatmeal,
  },
  
  // Canned Goods
  {
    id: "11",
    name: "Canned Soup",
    category: "Canned Goods",
    quantity: 1,
    unit: "can",
    image: cannedSoup,
  },
  {
    id: "12",
    name: "Canned Beans",
    category: "Canned Goods",
    quantity: 1,
    unit: "can",
    image: cannedBeans,
  },
  {
    id: "13",
    name: "Canned Vegetables",
    category: "Canned Goods",
    quantity: 1,
    unit: "can",
    image: cannedVegetables,
  },
  {
    id: "14",
    name: "Canned Fruit",
    category: "Canned Goods",
    quantity: 1,
    unit: "can",
    image: cannedFruit,
  },
  {
    id: "15",
    name: "Canned Tomatoes",
    category: "Canned Goods",
    quantity: 1,
    unit: "can",
    image: cannedTomato,
  },
  
  // Vegetables
  {
    id: "16",
    name: "Potatoes",
    category: "Vegetables",
    quantity: 1,
    unit: "lb",
    image: potato,
  },
  {
    id: "17",
    name: "Onions",
    category: "Vegetables",
    quantity: 1,
    unit: "lb",
    image: onion,
  },
  {
    id: "18",
    name: "Carrots",
    category: "Vegetables",
    quantity: 1,
    unit: "lb",
    image: carrot,
  },
  
  // Fruits
  {
    id: "19",
    name: "Apples",
    category: "Fruits",
    quantity: 1,
    unit: "lb",
    image: apple,
  },
  {
    id: "20",
    name: "Bananas",
    category: "Fruits",
    quantity: 1,
    unit: "bunch",
    image: banana,
  },
  
  // Dairy
  {
    id: "21",
    name: "Milk",
    category: "Dairy",
    quantity: 1,
    unit: "gallon",
    image: milk,
  },
  {
    id: "22",
    name: "Cheese",
    category: "Dairy",
    quantity: 1,
    unit: "package",
    image: cheese,
  },
  {
    id: "23",
    name: "Butter",
    category: "Dairy",
    quantity: 1,
    unit: "stick",
    image: butter,
  },
  
  // Baking & Cooking
  {
    id: "24",
    name: "Flour",
    category: "Baking & Cooking",
    quantity: 1,
    unit: "lb",
    image: flour,
  },
  {
    id: "25",
    name: "Sugar",
    category: "Baking & Cooking",
    quantity: 1,
    unit: "lb",
    image: sugar,
  },
  {
    id: "26",
    name: "Cooking Oil",
    category: "Baking & Cooking",
    quantity: 1,
    unit: "bottle",
    image: cookingOil,
  },
  
  // Condiments
  {
    id: "27",
    name: "Ketchup",
    category: "Condiments",
    quantity: 1,
    unit: "bottle",
    image: ketchup,
  },
  {
    id: "28",
    name: "Mustard",
    category: "Condiments",
    quantity: 1,
    unit: "bottle",
    image: mustard,
  },
  {
    id: "29",
    name: "Mayonnaise",
    category: "Condiments",
    quantity: 1,
    unit: "jar",
    image: mayo,
  },
  {
    id: "30",
    name: "Salt",
    category: "Condiments",
    quantity: 1,
    unit: "container",
    image: salt,
  },
  {
    id: "31",
    name: "Pepper",
    category: "Condiments",
    quantity: 1,
    unit: "container",
    image: pepper,
  },
];
