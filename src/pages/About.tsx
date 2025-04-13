
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-food-dark mb-4">
            About <span className="text-food-orange">FoodBank Bites</span>
          </h1>
          <p className="text-lg text-gray-600">
            Making delicious meals with food bank ingredients
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
          <h2 className="text-2xl font-bold text-food-dark mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-6">
            FoodBank Bites was created to help people make the most of the ingredients they receive from food banks. 
            We believe that everyone deserves access to nutritious and delicious meals, regardless of their circumstances.
          </p>
          <p className="text-gray-700 mb-6">
            Our recipe suggestions are specifically designed to work with common food bank items, 
            ensuring that you can create satisfying meals with what you have on hand.
          </p>
          
          <h2 className="text-2xl font-bold text-food-dark mb-4 mt-8">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-food-beige p-5 rounded-lg text-center">
              <div className="text-4xl font-bold text-food-orange mb-2">1</div>
              <h3 className="font-bold text-food-dark mb-2">Select Your Items</h3>
              <p className="text-gray-700 text-sm">
                Add the food items you've received to your virtual basket.
              </p>
            </div>
            
            <div className="bg-food-beige p-5 rounded-lg text-center">
              <div className="text-4xl font-bold text-food-orange mb-2">2</div>
              <h3 className="font-bold text-food-dark mb-2">Get Recipes</h3>
              <p className="text-gray-700 text-sm">
                We'll suggest recipes based on the ingredients in your basket.
              </p>
            </div>
            
            <div className="bg-food-beige p-5 rounded-lg text-center">
              <div className="text-4xl font-bold text-food-orange mb-2">3</div>
              <h3 className="font-bold text-food-dark mb-2">Cook & Enjoy</h3>
              <p className="text-gray-700 text-sm">
                Follow the simple instructions to create delicious meals.
              </p>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-food-dark mb-4 mt-8">Our Values</h2>
          <ul className="space-y-4 mb-6">
            <li className="flex items-start">
              <div className="h-6 w-6 rounded-full bg-food-orange text-white flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                ✓
              </div>
              <div>
                <h3 className="font-bold text-food-dark">Accessibility</h3>
                <p className="text-gray-700">
                  Our recipes are designed to be simple, using common ingredients and requiring minimal kitchen equipment.
                </p>
              </div>
            </li>
            
            <li className="flex items-start">
              <div className="h-6 w-6 rounded-full bg-food-orange text-white flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                ✓
              </div>
              <div>
                <h3 className="font-bold text-food-dark">Practicality</h3>
                <p className="text-gray-700">
                  We focus on real-world solutions for making the most of available ingredients.
                </p>
              </div>
            </li>
            
            <li className="flex items-start">
              <div className="h-6 w-6 rounded-full bg-food-orange text-white flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                ✓
              </div>
              <div>
                <h3 className="font-bold text-food-dark">Dignity</h3>
                <p className="text-gray-700">
                  We believe that everyone deserves to enjoy good food, prepared with care and respect.
                </p>
              </div>
            </li>
          </ul>
        </div>
        
        <div className="text-center">
          <p className="text-lg text-gray-700 mb-6">
            Ready to start cooking with your food bank ingredients?
          </p>
          <Link to="/">
            <Button size="lg" className="bg-food-orange hover:bg-food-orange/90">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default About;
