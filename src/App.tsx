
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { BasketProvider } from "@/hooks/useBasket";

import Landing from "./pages/Landing";
import Index from "./pages/Index";
import Basket from "./pages/Basket";
import Recipes from "./pages/Recipes";
import RecipeDetail from "./pages/RecipeDetail";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BasketProvider>
        <Toaster />
        <Sonner position="bottom-left" />
        <HashRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/ingredients" element={<Index />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/recipe/:id" element={<RecipeDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HashRouter>
      </BasketProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
