
import React, { useMemo } from 'react';
import Layout from '@/components/layout/Layout';
import { useBasket } from '@/hooks/useBasket';
import { findMatchingRecipes } from '@/data/recipes';
import { Button } from '@/components/ui/button';
import { Clock, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Recipes: React.FC = () => {
  const { basketItems } = useBasket();
  
  const matchingRecipes = useMemo(() => {
    const basketItemIds = basketItems.map(item => item.id);
    return findMatchingRecipes(basketItemIds);
  }, [basketItems]);

  return (
    <Layout>
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-food-dark mb-2">
          Your <span className="text-food-orange">Recipe Matches</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Based on the items in your basket, here are some recipes you can make.
        </p>
      </div>

      {matchingRecipes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {matchingRecipes.map(recipe => (
            <div key={recipe.id} className="recipe-card">
              <div className="h-48 bg-food-beige rounded-md mb-4 overflow-hidden">
                <img 
                  src={recipe.image} 
                  alt={recipe.title} 
                  className="w-full h-full object-cover" 
                />
              </div>
              
              <h2 className="text-xl font-bold text-food-dark mb-2">{recipe.title}</h2>
              
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <div className="flex items-center mr-4">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{recipe.prepTime + recipe.cookTime} mins</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-1" />
                  <span>{recipe.servings} {recipe.servings === 1 ? 'serving' : 'servings'}</span>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4 line-clamp-3">
                {recipe.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {recipe.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-2 py-1 bg-food-beige text-food-brown rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <Link to={`/recipe/${recipe.id}`}>
                <Button className="w-full bg-food-orange hover:bg-food-orange/90">
                  View Recipe <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center p-12 bg-white rounded-lg shadow-sm">
          <div className="mb-4 text-food-orange">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="64" 
              height="64" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="mx-auto"
            >
              <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"/>
              <line x1="6" y1="17" x2="18" y2="17"/>
            </svg>
          </div>
          <h2 className="text-xl font-bold text-food-dark mb-2">No matching recipes found</h2>
          <p className="text-gray-600 mb-6">
            Try adding more items to your basket to find recipes you can make.
          </p>
          <Link to="/">
            <Button className="bg-food-orange hover:bg-food-orange/90 mr-4">
              Add More Items
            </Button>
          </Link>
          <Link to="/basket">
            <Button variant="outline">
              View Your Basket
            </Button>
          </Link>
        </div>
      )}
    </Layout>
  );
};

export default Recipes;
