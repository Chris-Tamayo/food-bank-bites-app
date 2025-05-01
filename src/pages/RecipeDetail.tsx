
import React, { useMemo, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { recipes } from '@/data/recipes';
import { Button } from '@/components/ui/button';
import { 
  Clock, 
  Users, 
  Printer, 
  Download, 
  ChevronLeft, 
  CheckCircle2,
  Star
} from 'lucide-react';
import { toast } from 'sonner';
import { useBasket } from '@/hooks/useBasket';

const RecipeDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const printRef = useRef<HTMLDivElement>(null);
  const { favoriteRecipes, addToFavorites, removeFromFavorites } = useBasket();
  
  const recipe = useMemo(() => {
    return recipes.find(r => r.id === id);
  }, [id]);

  if (!recipe) {
    return (
      <Layout>
        <div className="text-center p-12">
          <h2 className="text-xl font-bold text-food-dark mb-4">Recipe not found</h2>
          <p className="text-gray-600 mb-6">The recipe you're looking for doesn't exist.</p>
          <Link to="/recipes">
            <Button>Back to Recipes</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const isFavorite = favoriteRecipes.some(favRecipe => favRecipe.id === recipe.id);

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFromFavorites(recipe.id);
      toast.success("Removed from favorites");
    } else {
      addToFavorites(recipe);
      toast.success("Added to favorites");
    }
  };

  const handlePrint = () => {
    if (printRef.current) {
      const printContent = printRef.current.innerHTML;
      const originalContent = document.body.innerHTML;
      
      document.body.innerHTML = `
        <div style="max-width: 800px; margin: 0 auto; padding: 20px;">
          <h1 style="text-align: center; margin-bottom: 20px; color: #687A61;">${recipe.title}</h1>
          ${printContent}
        </div>
      `;
      
      window.print();
      document.body.innerHTML = originalContent;
      window.location.reload();
    }
  };

  const handleSaveAsPDF = () => {
    // Use the native browser print functionality which offers "Save as PDF" option
    window.print();
    toast.success("Save dialog opened");
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <div className="mb-6 flex items-center">
          <Button 
            variant="ghost" 
            onClick={() => navigate(-1)}
            className="text-food-dark"
          >
            <ChevronLeft className="mr-1 h-4 w-4" />
            Back
          </Button>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-64 sm:h-80 bg-food-beige">
            <img 
              src={recipe.image} 
              alt={recipe.title} 
              className="w-full h-full object-cover" 
            />
          </div>
          
          <div className="p-6" ref={printRef}>
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl md:text-3xl font-bold text-food-dark">
                {recipe.title}
              </h1>
              <Button 
                variant="ghost" 
                onClick={toggleFavorite}
                className={isFavorite ? "text-yellow-500" : "text-gray-400"}
              >
                <Star className={`h-6 w-6 ${isFavorite ? "fill-yellow-500" : ""}`} />
              </Button>
            </div>
            
            <div className="flex flex-wrap items-center text-sm text-gray-600 mb-6">
              <div className="flex items-center mr-6 mb-2">
                <Clock className="h-4 w-4 mr-1 text-food-orange" />
                <span>Prep: {recipe.prepTime} mins</span>
              </div>
              <div className="flex items-center mr-6 mb-2">
                <Clock className="h-4 w-4 mr-1 text-food-orange" />
                <span>Cook: {recipe.cookTime} mins</span>
              </div>
              <div className="flex items-center mb-2">
                <Users className="h-4 w-4 mr-1 text-food-orange" />
                <span>{recipe.servings} {recipe.servings === 1 ? 'serving' : 'servings'}</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {recipe.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-food-beige text-food-brown rounded-full text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <p className="text-gray-600 mb-8">{recipe.description}</p>
            
            <div className="mb-8">
              <h2 className="text-xl font-bold text-food-dark mb-4">Ingredients</h2>
              <ul className="space-y-2">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 mr-2 text-food-green flex-shrink-0 mt-0.5" />
                    <span>
                      <span className="font-medium">{ingredient.quantity}</span> {ingredient.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-bold text-food-dark mb-4">Instructions</h2>
              <ol className="space-y-4 list-decimal list-inside">
                {recipe.instructions.map((step, index) => (
                  <li key={index} className="text-gray-700">
                    <span className="ml-2">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 flex flex-wrap gap-4">
            <Button 
              onClick={handlePrint}
              className="flex-1 md:flex-none bg-food-orange hover:bg-food-orange/90"
            >
              <Printer className="mr-2 h-5 w-5" />
              Print Recipe
            </Button>
            
            <Button 
              onClick={handleSaveAsPDF}
              variant="outline" 
              className="flex-1 md:flex-none"
            >
              <Download className="mr-2 h-5 w-5" />
              Save as PDF
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RecipeDetail;
