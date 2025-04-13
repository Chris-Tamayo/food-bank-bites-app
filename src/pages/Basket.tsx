
import React from 'react';
import Layout from '@/components/layout/Layout';
import { useBasket } from '@/hooks/useBasket';
import { Button } from '@/components/ui/button';
import { Trash2, Plus, Minus, ChefHat } from 'lucide-react';
import { Link } from 'react-router-dom';
import { foodItems } from '@/data/foodItems';
import { toast } from 'sonner';

const Basket: React.FC = () => {
  const { basketItems, removeFromBasket, updateQuantity, clearBasket } = useBasket();
  
  const handleRemoveItem = (itemId: string, itemName: string) => {
    removeFromBasket(itemId);
    toast.success(`Removed ${itemName} from your basket`);
  };
  
  const handleQuantityChange = (itemId: string, currentQuantity: number, change: number) => {
    const newQuantity = Math.max(1, currentQuantity + change);
    updateQuantity(itemId, newQuantity);
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
          Review and adjust the items in your basket before generating recipes.
        </p>
      </div>

      {basketItems.length > 0 ? (
        <>
          <div className="bg-white rounded-lg shadow-md p-4 mb-6">
            {basketItems.map(item => (
              <div 
                key={item.id} 
                className="py-4 border-b border-gray-100 last:border-0 flex items-center justify-between"
              >
                <div className="flex items-center">
                  <div className="h-16 w-16 bg-food-beige rounded-md flex items-center justify-center mr-4">
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
                
                <div className="flex items-center">
                  <div className="flex items-center mr-6">
                    <button 
                      onClick={() => handleQuantityChange(item.id, item.quantity, -1)}
                      className="p-1 rounded-full bg-gray-100 hover:bg-gray-200"
                      disabled={item.quantity <= 1}
                    >
                      <Minus className="h-4 w-4 text-gray-600" />
                    </button>
                    <span className="mx-3 min-w-[2rem] text-center">{item.quantity}</span>
                    <button 
                      onClick={() => handleQuantityChange(item.id, item.quantity, 1)}
                      className="p-1 rounded-full bg-gray-100 hover:bg-gray-200"
                    >
                      <Plus className="h-4 w-4 text-gray-600" />
                    </button>
                  </div>
                  
                  <button 
                    onClick={() => handleRemoveItem(item.id, item.name)}
                    className="p-2 text-red-500 hover:text-red-700 rounded-full hover:bg-red-50"
                    aria-label="Remove item"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
            
            <div className="flex justify-between mt-6">
              <Button
                variant="outline"
                onClick={handleClearBasket}
                className="text-gray-600"
              >
                Clear Basket
              </Button>
              
              <Link to="/recipes">
                <Button className="bg-food-orange hover:bg-food-orange/90">
                  <ChefHat className="mr-2 h-5 w-5" />
                  Find Recipes
                </Button>
              </Link>
            </div>
          </div>
        </>
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
          <Link to="/">
            <Button className="bg-food-orange hover:bg-food-orange/90">
              Browse Food Items
            </Button>
          </Link>
        </div>
      )}
    </Layout>
  );
};

export default Basket;
