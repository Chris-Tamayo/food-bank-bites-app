
import React from 'react';
import { ArrowRight, Carrot, UtensilsCrossed, ChefHat } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Landing: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {/* Hero Section */}
      <section className="bg-food-beige py-20 px-4 flex-grow flex items-center">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-food-dark leading-tight mb-6">
                We're here to help you eat healthy without compromising taste.
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                Turn your food bank items into delicious, nutritious recipes with our free recipe generator.
              </p>
              <Link to="/ingredients">
                <Button className="bg-food-orange hover:bg-food-orange/90 px-8 py-6 text-lg">
                  Get Started <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <img 
                  src="/placeholder.svg" 
                  alt="Healthy Meal" 
                  className="w-full h-auto rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section (from About page) */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-food-dark mb-8">How It Works</h2>
          
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
          
          <div className="mt-12 text-center">
            <Link to="/ingredients">
              <Button className="bg-food-orange hover:bg-food-orange/90">
                Start Building Your Recipe List
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Landing;
