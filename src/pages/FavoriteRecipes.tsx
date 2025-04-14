
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { useBasket } from '@/hooks/useBasket';
import { Button } from '@/components/ui/button';
import { Star, Clock, Users } from 'lucide-react';
import { toast } from 'sonner';

const FavoriteRecipes: React.FC = () => {
  const { favoriteRecipes, removeFromFavorites } = useBasket();

  const handleRemoveFromFavorites = (recipeId: string, recipeName: string) => {
    removeFromFavorites(recipeId);
    toast.success(`Removed "${recipeName}" from favorites`);
  };

  return (
    <Layout>
      <div className="mb-8 max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-food-dark mb-2">
          Your <span className="text-food-orange">Favorite Recipes</span>
        </h1>
        <p className="text-gray-600">
          Quick access to your saved recipes, regardless of your basket contents.
        </p>
      </div>

      {favoriteRecipes.length > 0 ? (
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {favoriteRecipes.map(recipe => (
            <div key={recipe.id} className="recipe-card relative">
              <div className="absolute top-2 right-2">
                <Button
                  variant="ghost"
                  onClick={() => handleRemoveFromFavorites(recipe.id, recipe.title)}
                  className="h-8 w-8 p-0 text-yellow-500"
                >
                  <Star className="h-5 w-5 fill-yellow-500" />
                </Button>
              </div>
              
              <div className="h-40 bg-food-beige mb-4 overflow-hidden">
                <img 
                  src={recipe.image} 
                  alt={recipe.title} 
                  className="w-full h-full object-cover" 
                />
              </div>
              
              <h2 className="text-xl font-bold text-food-dark mb-2">
                {recipe.title}
              </h2>
              
              <div className="flex items-center text-sm text-gray-600 mb-4">
                <Clock className="h-4 w-4 mr-1 text-food-orange" />
                <span className="mr-4">
                  {recipe.prepTime + recipe.cookTime} mins
                </span>
                <Users className="h-4 w-4 mr-1 text-food-orange" />
                <span>
                  {recipe.servings} {recipe.servings === 1 ? 'serving' : 'servings'}
                </span>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {recipe.tags.slice(0, 3).map((tag, index) => (
                  <span 
                    key={index}
                    className="px-2 py-1 bg-food-beige text-food-brown rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <p className="text-gray-600 mb-4 line-clamp-3">
                {recipe.description}
              </p>
              
              <Link to={`/recipe/${recipe.id}`}>
                <Button className="w-full bg-food-orange hover:bg-food-orange/90">
                  View Recipe
                </Button>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="max-w-4xl mx-auto text-center p-12 bg-white rounded-lg shadow-sm">
          <div className="mb-4 text-yellow-500">
            <Star className="h-16 w-16 mx-auto" />
          </div>
          <h2 className="text-xl font-bold text-food-dark mb-2">
            No Favorites Yet
          </h2>
          <p className="text-gray-600 mb-6">
            You haven't added any recipes to your favorites.
            Browse recipes and click the star icon to save them here.
          </p>
          <Link to="/recipes">
            <Button className="bg-food-orange hover:bg-food-orange/90">
              Browse Recipes
            </Button>
          </Link>
        </div>
      )}
    </Layout>
  );
};

export default FavoriteRecipes;
