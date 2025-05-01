
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBasket } from 'lucide-react';
import { useBasket } from '@/hooks/useBasket';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { basketItems } = useBasket();
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-food-dark">
            FoodBank <span className="text-food-orange">Bites</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/about" className="text-food-dark hover:text-food-orange transition-colors">
              About
            </Link>
            <Link to="/ingredients" className="text-food-dark hover:text-food-orange transition-colors">
              Select Foods
            </Link>
            <Link to="/recipes" className="text-food-dark hover:text-food-orange transition-colors">
              Recipes
            </Link>
            <Link to="/basket" className="relative">
              <ShoppingBasket className="h-6 w-6 text-food-orange" />
              {basketItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-food-green text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {basketItems.length}
                </span>
              )}
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Link to="/basket" className="mr-4 relative">
              <ShoppingBasket className="h-6 w-6 text-food-orange" />
              {basketItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-food-green text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {basketItems.length}
                </span>
              )}
            </Link>
            <button 
              onClick={toggleMenu} 
              className="text-food-dark hover:text-food-orange"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/ingredients" 
                className="text-food-dark hover:text-food-orange transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Select Foods
              </Link>
              <Link 
                to="/recipes" 
                className="text-food-dark hover:text-food-orange transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Recipes
              </Link>
              <Link 
                to="/about" 
                className="text-food-dark hover:text-food-orange transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
