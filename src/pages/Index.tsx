
import React, { useState, useMemo } from 'react';
import Layout from '@/components/layout/Layout';
import { foodCategories, foodItems } from '@/data/foodItems';
import { useBasket, FoodItem } from '@/hooks/useBasket';
import { Button } from '@/components/ui/button';
import { Plus, Check, Search, X } from 'lucide-react';
import { toast } from 'sonner';
import FloatingBasketButton from '@/components/FloatingBasketButton';

const Index: React.FC = () => {
  const { basketItems, addToBasket, removeFromBasket } = useBasket();
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchTerm, setSearchTerm] = useState<string>("");
  
  // Add "All" to the categories
  const allCategories = ["All", ...foodCategories];

  const filteredItems = useMemo(() => {
    let items = foodItems;
    
    // Filter by search term
    if (searchTerm) {
      items = items.filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by category (if not "All")
    if (activeCategory !== "All") {
      items = items.filter(item => item.category === activeCategory);
    }
    
    return items;
  }, [activeCategory, searchTerm]);
  
  const isItemInBasket = (id: string) => {
    return basketItems.some(item => item.id === id);
  };

  const handleToggleItem = (item: FoodItem) => {
    if (isItemInBasket(item.id)) {
      removeFromBasket(item.id);
      toast.info(`Removed ${item.name} from your basket`);
    } else {
      addToBasket({ ...item });
      toast.success(`Added ${item.name} to your basket`, {
        description: "Go to your basket to view all items."
      });
    }
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

      {/* Search Bar */}
      <div className="mb-6 relative">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search ingredients..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-food-orange"
          />
        </div>
      </div>

      {/* Categories Navigation - Vertical on mobile, horizontal on desktop */}
      <div className="mb-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap gap-2">
          {allCategories.map(category => (
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
        {filteredItems.length > 0 ? (
          filteredItems.map(item => (
            <div key={item.id} className="food-card">
              <div className="flex items-center justify-center h-36 sm:h-32 bg-food-beige rounded-md mb-3">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="h-28 w-28 object-contain" 
                />
              </div>
              <h3 className="font-medium text-food-dark mb-1">{item.name}</h3>
              <p className="text-sm text-gray-500 mb-3">{item.unit}</p>
              
              <Button
                onClick={() => handleToggleItem(item)}
                className={isItemInBasket(item.id) 
                  ? "w-full bg-food-green hover:bg-food-green/90" 
                  : "w-full bg-food-orange hover:bg-food-orange/90"}
              >
                {isItemInBasket(item.id) ? (
                  <>
                    <X className="mr-1 h-4 w-4" /> Remove
                  </>
                ) : (
                  <>
                    <Plus className="mr-1 h-4 w-4" /> Add to Basket
                  </>
                )}
              </Button>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-8">
            <p className="text-gray-500">No ingredients found matching your search.</p>
          </div>
        )}
      </div>
      
      {/* Floating Basket Button */}
      <FloatingBasketButton />
    </Layout>
  );
};

export default Index;
