import React from 'react';
import Layout from '@/components/layout/Layout';
import { useBasket } from '@/hooks/useBasket';
import { Button } from '@/components/ui/button';
import { Trash2, ChefHat } from 'lucide-react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';

const Basket: React.FC = () => {
  const { basketItems, removeFromBasket, clearBasket } = useBasket();
  
  const handleRemoveItem = (itemId: string, itemName: string) => {
    removeFromBasket(itemId);
    toast.success(`Removed ${itemName} from your basket`);
  };
  
  const handleClearBasket = () => {
    clearBasket();
    toast.info("Your basket has been cleared");
  };

  return (
    <Layout>
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-food-dark mb-2">
          Your <span className="text-food-orange">Basket</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Review the items in your basket before generating recipes.
        </p>
      </div>

      {basketItems.length > 0 ? (
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-4 mb-6">
            {basketItems.map(item => (
              <div 
                key={item.id} 
                className="py-4 border-b border-gray-100 last:border-0 flex items-center justify-between"
              >
                <div className="flex items-center space-x-4 flex-grow">
                  <div className="h-16 w-16 bg-food-beige rounded-md flex items-center justify-center">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="h-10 w-10 object-contain" 
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-food-dark">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.unit}</p>
                  </div>
                </div>
                
                <button 
                  onClick={() => handleRemoveItem(item.id, item.name)}
                  className="p-2 text-red-500 hover:text-red-700 rounded-full hover:bg-red-50"
                  aria-label="Remove item"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            ))}
            
            <div className="flex flex-col sm:flex-row sm:justify-between gap-4 mt-6">
              <Button
                variant="outline"
                onClick={handleClearBasket}
                className="text-gray-600 w-full sm:w-auto"
              >
                Clear Basket
              </Button>
              
              <Link to="/recipes" className="w-full sm:w-auto">
                <Button className="bg-food-orange hover:bg-food-orange/90 w-full">
                  <ChefHat className="mr-2 h-5 w-5" />
                  Find Recipes
                </Button>
              </Link>
            </div>
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
    </Layout>
  );
};

export default Basket;
