
import React, { createContext, useContext, useState, useEffect } from 'react';

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
  updateQuantity: (itemId: string, quantity: number) => void;
  clearBasket: () => void;
}

const BasketContext = createContext<BasketContextType | undefined>(undefined);

export const BasketProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [basketItems, setBasketItems] = useState<FoodItem[]>(() => {
    const savedBasket = localStorage.getItem('foodBasket');
    return savedBasket ? JSON.parse(savedBasket) : [];
  });

  useEffect(() => {
    localStorage.setItem('foodBasket', JSON.stringify(basketItems));
  }, [basketItems]);

  const addToBasket = (item: FoodItem) => {
    setBasketItems(prevItems => {
      const existingItemIndex = prevItems.findIndex(i => i.id === item.id);
      
      if (existingItemIndex >= 0) {
        // Item already exists, update quantity
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += item.quantity;
        return updatedItems;
      } else {
        // Item doesn't exist, add it
        return [...prevItems, item];
      }
    });
  };

  const removeFromBasket = (itemId: string) => {
    setBasketItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    setBasketItems(prevItems => 
      prevItems.map(item => 
        item.id === itemId ? { ...item, quantity } : item
      )
    );
  };

  const clearBasket = () => {
    setBasketItems([]);
  };

  return (
    <BasketContext.Provider value={{ 
      basketItems, 
      addToBasket, 
      removeFromBasket, 
      updateQuantity,
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
