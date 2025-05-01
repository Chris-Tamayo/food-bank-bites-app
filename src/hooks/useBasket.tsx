
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Recipe } from '@/data/recipes';

export interface FoodItem {
  id: string;
  name: string;
  category: string;
  quantity: number;
  unit: string;
  image: string;
}

interface BasketContextType {
  basketItems: FoodItem[];
  addToBasket: (item: FoodItem) => void;
  removeFromBasket: (itemId: string) => void;
  clearBasket: () => void;
}

const BasketContext = createContext<BasketContextType | undefined>(undefined);

export const BasketProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize basket items from localStorage
  const [basketItems, setBasketItems] = useState<FoodItem[]>(() => {
    const savedBasket = localStorage.getItem('foodBasket');
    return savedBasket ? JSON.parse(savedBasket) : [];
  });

  // Save basket to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('foodBasket', JSON.stringify(basketItems));
  }, [basketItems]);

  const addToBasket = (item: FoodItem) => {
    setBasketItems(prevItems => {
      const existingItemIndex = prevItems.findIndex(i => i.id === item.id);
      
      if (existingItemIndex >= 0) {
        // Item already exists, just return the existing array
        return prevItems;
      } else {
        // Item doesn't exist, add it
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromBasket = (itemId: string) => {
    setBasketItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  const clearBasket = () => {
    setBasketItems([]);
  };

  return (
    <BasketContext.Provider value={{ 
      basketItems,
      addToBasket, 
      removeFromBasket, 
      clearBasket
    }}>
      {children}
    </BasketContext.Provider>
  );
};

export const useBasket = (): BasketContextType => {
  const context = useContext(BasketContext);
  if (context === undefined) {
    throw new Error('useBasket must be used within a BasketProvider');
  }
  return context;
};
