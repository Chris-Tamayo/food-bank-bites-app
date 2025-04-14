
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { useBasket } from '@/hooks/useBasket';
import { findMatchingRecipes } from '@/data/recipes';
import { Button } from '@/components/ui/button';
import { Trash2, ArrowLeft, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

const Basket: React.FC = () => {
  const { basketItems, removeFromBasket, clearBasket } = useBasket();
  
  // Get matching recipes based on basket items
  const matchingRecipes = findMatchingRecipes(basketItems.map(item => item.id));
  
  const handleRemoveItem = (itemId: string, itemName: string) => {
    removeFromBasket(itemId);
    toast.success(`Removed ${itemName} from your basket`);
  };
  
  const handleClearBasket = () => {
    if (basketItems.length > 0) {
      clearBasket();
      toast.success("Your basket has been cleared");
    }
  };
  
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-food-dark mb-2">
            Your <span className="text-food-orange">Basket</span>
          </h1>
          <p className="text-gray-600">
            Review the items you've selected and find matching recipes.
          </p>
        </div>
        
        {basketItems.length > 0 ? (
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center">
                <h2 className="text-xl font-bold text-food-dark">Selected Items</h2>
                {matchingRecipes.length > 0 && (
                  <span className="ml-2 text-food-green text-sm font-medium">
                    ({matchingRecipes.length} recipe{matchingRecipes.length === 1 ? '' : 's'} matched)
                  </span>
                )}
              </div>
              
              <Button 
                variant="outline" 
                size="sm"
                onClick={handleClearBasket}
                className="text-red-500 border-red-500 hover:bg-red-50"
              >
                Clear All
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {basketItems.map((item) => (
                <div 
                  key={item.id}
                  className="flex items-center justify-between p-3 border border-gray-100 rounded-md hover:bg-gray-50"
                >
                  <div className="flex items-center">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-10 h-10 object-cover rounded-md mr-3"
                    />
                    <div>
                      <h3 className="font-medium text-food-dark">{item.name}</h3>
                      <p className="text-sm text-gray-500">{item.category}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleRemoveItem(item.id, item.name)}
                    className="text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>
            
            <div className="flex justify-between mt-6 pt-4 border-t border-gray-100">
              <Link to="/ingredients">
                <Button variant="outline" className="flex items-center gap-1">
                  <ArrowLeft className="h-4 w-4" /> Add More Items
                </Button>
              </Link>
              
              {matchingRecipes.length > 0 && (
                <Link to="/recipes">
                  <Button className="bg-food-orange hover:bg-food-orange/90 flex items-center gap-1">
                    View Recipes <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              )}
            </div>
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
              <path d="M2 3h2l3.4 9.4A1 1 0 0 0 8.4 13H20a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H8.8"/>
              <path d="M8 16a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
              <path d="M18 16a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
              <path d="M8.8 13h10.3l1.1-5.4A1 1 0 0 0 19.4 6H6.8"/>
            </svg>
          </div>
          <h2 className="text-xl font-bold text-food-dark mb-2">Your basket is empty</h2>
          <p className="text-gray-600 mb-6">
            Go back to the main page to add food items to your basket.
          </p>
          <Link to="/ingredients" className="block">
            <Button className="bg-food-orange hover:bg-food-orange/90 w-full sm:w-auto">
              Browse Food Items
            </Button>
          </Link>
        </div>
        )}
      </div>
    </Layout>
  );
};

export default Basket;
