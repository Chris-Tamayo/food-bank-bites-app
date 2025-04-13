
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-food-dark text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">FoodBank Bites</h3>
            <p className="text-gray-300">
              Helping you create delicious meals with food bank ingredients.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-food-orange transition-colors">
                  Select Foods
                </Link>
              </li>
              <li>
                <Link to="/recipes" className="text-gray-300 hover:text-food-orange transition-colors">
                  Recipes
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-food-orange transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-300">
              Have questions or suggestions? <br />
              <a href="mailto:contact@foodbankbites.org" className="text-food-orange hover:underline">
                contact@foodbankbites.org
              </a>
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-300">
          &copy; {currentYear} FoodBank Bites. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
