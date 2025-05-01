
import React, { useMemo, useState } from 'react';
import Layout from '@/components/layout/Layout';
import { useBasket } from '@/hooks/useBasket';
import { findMatchingRecipes, recipes, RecipeTag } from '@/data/recipes';
import { Button } from '@/components/ui/button';
import { Clock, Users, ArrowRight, Percent } from 'lucide-react';
import { Link } from 'react-router-dom';

const Recipes: React.FC = () => {
  const { basketItems } = useBasket();
  const [showAllRecipes, setShowAllRecipes] = useState(false);
  const [selectedTag, setSelectedTag] = useState<RecipeTag | null>(null);
  
  const matchingRecipes = useMemo(() => {
    const basketItemIds = basketItems.map(item => item.id);
    return findMatchingRecipes(basketItemIds);
  }, [basketItems]);

  const displayedRecipes = useMemo(() => {
    const recipesToFilter = showAllRecipes ? recipes : matchingRecipes;
    
    if (!selectedTag) {
      return recipesToFilter;
    }
    
    return recipesToFilter.filter(recipe => recipe.tags.includes(selectedTag));
  }, [showAllRecipes, matchingRecipes, selectedTag]);

  // Get unique tags from all recipes
  const availableTags = useMemo(() => {
    const tagsSet = new Set<RecipeTag>();
    recipes.forEach(recipe => {
      recipe.tags.forEach(tag => tagsSet.add(tag));
    });
    return Array.from(tagsSet);
  }, []);

  return (
    <Layout>
      <div className="mb-8 max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-food-dark mb-2">
          Your <span className="text-food-orange">Recipe Matches</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          Based on the items in your basket, here are some recipes you can make.
        </p>
        
        {/* Filtering section */}
        <div className="mb-8">
          {/* Browse All toggle button */}
          <div className="mb-4">
            <Button 
              onClick={() => setShowAllRecipes(!showAllRecipes)}
              className={`${showAllRecipes ? 'bg-gray-500' : 'bg-food-orange'} hover:opacity-90`}
              size="sm"
            >
              {showAllRecipes ? 'Matching Recipes Only' : 'Browse All Recipes'}
            </Button>
          </div>

          {/* Tag filtering */}
          <div className="flex flex-wrap justify-center gap-2">
            <Button
              onClick={() => setSelectedTag(null)}
              variant={selectedTag === null ? "default" : "outline"}
              className={selectedTag === null ? "bg-food-orange hover:bg-food-orange/90" : ""}
              size="sm"
            >
              All
            </Button>
            {availableTags.map((tag) => (
              <Button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                variant={selectedTag === tag ? "default" : "outline"}
                className={selectedTag === tag ? "bg-food-orange hover:bg-food-orange/90" : ""}
                size="sm"
              >
                {tag.charAt(0).toUpperCase() + tag.slice(1).replace('-', ' ')}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {displayedRecipes.length > 0 ? (
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {displayedRecipes.map(recipe => (
            <div key={recipe.id} className="recipe-card relative">
              {/* Match percentage badge */}
              {!showAllRecipes && (
                <div className="absolute top-4 right-4 bg-food-orange text-white rounded-full px-2 py-1 text-sm font-medium flex items-center">
                  <Percent className="mr-1 h-3 w-3" />
                  {recipe.matchPercentage}% Match
                </div>
              )}
              
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
                    {tag.charAt(0).toUpperCase() + tag.slice(1).replace('-', ' ')}
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
        <div className="max-w-4xl mx-auto text-center p-12 bg-white rounded-lg shadow-sm">
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
            {selectedTag ? 
              `No ${selectedTag} recipes found. Try selecting a different filter.` : 
              'Try adding more items to your basket to find recipes you can make.'}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/ingredients" className="w-full sm:w-auto">
              <Button className="bg-food-orange hover:bg-food-orange/90 w-full">
                Add More Items
              </Button>
            </Link>
            <Link to="/basket" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full">
                View Your Basket
              </Button>
            </Link>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Recipes;
