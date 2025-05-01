
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { foodItems } from '@/data/foodItems';
import { useBasket } from '@/hooks/useBasket';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Search, ShoppingBasket, Trash2 } from 'lucide-react';
import { toast } from 'sonner';

const Index: React.FC = () => {
  const { basketItems, addToBasket, removeFromBasket } = useBasket();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // Get unique categories from foodItems
  const categories = ['all', ...Array.from(new Set(foodItems.map(item => item.category)))];

  // Filter items based on search term and active category
  const filteredItems = foodItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const isItemInBasket = (itemId: string): boolean => {
    return basketItems.some(item => item.id === itemId);
  };

  const handleAddToBasket = (item: any) => {
    addToBasket(item);
    toast.success(`Added ${item.name} to your basket`);
  };

  const handleRemoveFromBasket = (itemId: string, itemName: string) => {
    removeFromBasket(itemId);
    toast.success(`Removed ${itemName} from your basket`);
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-food-dark mb-2">
            Select Your <span className="text-food-orange">Ingredients</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the ingredients you have available to find recipes you can make.
          </p>
        </div>

        {/* Search and Category Filters */}
        <div className="mb-8">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search ingredients..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-food-orange focus:border-transparent"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-3 py-1 text-sm rounded-full transition-colors ${
                  activeCategory === category
                    ? 'bg-food-orange text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Ingredients Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {filteredItems.map((item) => {
              const inBasket = isItemInBasket(item.id);
              return (
                <div
                  key={item.id}
                  className="food-card flex flex-col"
                >
                  <div className="h-32 bg-food-beige rounded-md mb-2 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-food-dark font-medium mb-1">{item.name}</h3>
                  <p className="text-sm text-gray-500 mb-3">{item.category}</p>
                  <div className="mt-auto">
                    {inBasket ? (
                      <Button
                        onClick={() => handleRemoveFromBasket(item.id, item.name)}
                        variant="outline"
                        className="w-full border-food-red text-food-red hover:bg-food-red/10"
                        size="sm"
                      >
                        <Trash2 className="mr-1 h-4 w-4" /> Remove
                      </Button>
                    ) : (
                      <Button
                        onClick={() => handleAddToBasket(item)}
                        className="w-full bg-food-orange hover:bg-food-orange/90"
                        size="sm"
                      >
                        <ShoppingBasket className="mr-1 h-4 w-4" /> Add to Basket
                      </Button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center p-12 bg-white rounded-lg shadow-sm">
            <div className="mb-4 text-food-orange">
              <Search className="mx-auto h-12 w-12" />
            </div>
            <h2 className="text-xl font-bold text-food-dark mb-2">No ingredients found</h2>
            <p className="text-gray-600 mb-4">
              Try adjusting your search or filter to find what you're looking for.
            </p>
            <Button
              onClick={() => {
                setSearchTerm('');
                setActiveCategory('all');
              }}
              className="bg-food-orange hover:bg-food-orange/90"
            >
              Clear filters
            </Button>
          </div>
        )}

        {/* Basket Link */}
        {basketItems.length > 0 && (
          <div className="text-center">
            <Link to="/basket">
              <Button className="bg-food-orange hover:bg-food-orange/90">
                <ShoppingBasket className="mr-2 h-5 w-5" />
                View Basket ({basketItems.length} {basketItems.length === 1 ? 'item' : 'items'})
              </Button>
            </Link>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Index;
