
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
            About <span className="text-food-orange">NourishHI</span>
          </h1>
          <p className="text-lg text-gray-600">
            Making delicious meals with food bank ingredients
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
          <h2 className="text-2xl font-bold text-food-dark mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-6">
            NourishHI was created by Healthy Steps Hawaii in partnership with the Food Vault at the University of Hawaii at Manoa and Well Fed Ohana. Our vision is for everyone in Hawaii to be able to have access to healthy and delicious meals no matter the price. We hope that this app will allow people to take control of their diet and therefore health, without sacrificing the taste of Hawaii that we all love. 
          </p>
          <p className="text-gray-700 mb-6">
            Our recipe selection is usable by anyone, but it has a focus on those that commonly shop at food pantries or have access to low-cost foods from the supermarket. Click the select foods tab to get started!
          </p>
          
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
          </ul>
        </div>
        
        <div className="text-center">
          <p className="text-lg text-gray-700 mb-6">
            Ready to start cooking with your food bank ingredients?
          </p>
          <Link to="/ingredients">
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
