
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { foodCategories, foodItems } from '@/data/foodItems';
import { useBasket, FoodItem } from '@/hooks/useBasket';
import { Button } from '@/components/ui/button';
import { Plus, Check } from 'lucide-react';
import { toast } from 'sonner';

const Index: React.FC = () => {
  const { basketItems, addToBasket } = useBasket();
  const [activeCategory, setActiveCategory] = useState<string>(foodCategories[0]);

  const filteredItems = foodItems.filter(item => item.category === activeCategory);
  
  const isItemInBasket = (id: string) => {
    return basketItems.some(item => item.id === id);
  };

  const handleAddItem = (item: FoodItem) => {
    addToBasket({ ...item });
    toast.success(`Added ${item.name} to your basket`, {
      description: "Go to your basket to view all items."
    });
  };

  return (
    <Layout>
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-food-dark mb-2">
          Select Your <span className="text-food-orange">Ingredients</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Choose the items you've received from the food bank. 
          These will be used to generate recipe suggestions for you.
        </p>
      </div>

      {/* Categories Navigation */}
      <div className="mb-8 overflow-x-auto">
        <div className="flex space-x-2 pb-2 min-w-max">
          {foodCategories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap
                ${activeCategory === category 
                  ? 'bg-food-orange text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Food Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredItems.map(item => (
          <div key={item.id} className="food-card">
            <div className="flex items-center justify-center h-32 bg-food-beige rounded-md mb-3">
              <img 
                src={item.image} 
                alt={item.name} 
                className="h-24 w-24 object-contain" 
              />
            </div>
            <h3 className="font-medium text-food-dark mb-1">{item.name}</h3>
            <p className="text-sm text-gray-500 mb-3">{item.unit}</p>
            
            <Button
              onClick={() => handleAddItem(item)}
              className={isItemInBasket(item.id) 
                ? "w-full bg-food-green hover:bg-food-green/90" 
                : "w-full bg-food-orange hover:bg-food-orange/90"}
              disabled={isItemInBasket(item.id)}
            >
              {isItemInBasket(item.id) ? (
                <>
                  <Check className="mr-1 h-4 w-4" /> Added
                </>
              ) : (
                <>
                  <Plus className="mr-1 h-4 w-4" /> Add to Basket
                </>
              )}
            </Button>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Index;
