
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBasket } from 'lucide-react';
import { useBasket } from '@/hooks/useBasket';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

const FloatingBasketButton: React.FC = () => {
  const { basketItems } = useBasket();
  
  if (basketItems.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <HoverCard>
        <HoverCardTrigger asChild>
          <Link
            to="/basket"
            className="flex items-center justify-center w-12 h-12 bg-food-orange text-white rounded-full shadow-lg hover:bg-food-orange/90 transition-colors"
            aria-label="View Basket"
          >
            <ShoppingBasket className="h-6 w-6" />
            <span className="absolute -top-2 -right-2 bg-food-green text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {basketItems.length}
            </span>
          </Link>
        </HoverCardTrigger>
        <HoverCardContent className="w-48 p-3">
          <p className="text-sm font-medium">View your basket</p>
          <p className="text-xs text-gray-500 mt-1">
            {basketItems.length} {basketItems.length === 1 ? 'item' : 'items'} selected
          </p>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
};

export default FloatingBasketButton;

