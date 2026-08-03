import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollProgress from "./components/ScrollProgress";
import CustomCursor from "./components/CustomCursor";

const Work = lazy(() => import("./pages/Work"));
const About = lazy(() => import("./pages/About"));
const ArtworkDetail = lazy(() => import("./pages/ArtworkDetail"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <CustomCursor />
        <ScrollProgress />
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<Work category="fine-art" />} />
              <Route path="/ui-ux" element={<Work category="ui-ux" />} />
              <Route path="/clothing" element={<Work category="clothing" />} />
              <Route path="/about" element={<About />} />
              <Route path="/work/:slug" element={<ArtworkDetail />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
