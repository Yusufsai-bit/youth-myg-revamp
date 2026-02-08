import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import OurPeoplePage from "./pages/OurPeoplePage";
import ProgramsPage from "./pages/ProgramsPage";
import GetInvolvedPage from "./pages/GetInvolvedPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";
import PrivacyPage from "./pages/PrivacyPage";
import DisclaimerPage from "./pages/DisclaimerPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/our-people" element={<OurPeoplePage />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/get-involved" element={<GetInvolvedPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/disclaimer" element={<DisclaimerPage />} />
            {/* Legacy URL redirects */}
            <Route path="/contact-us" element={<ContactPage />} />
            <Route path="/members" element={<AboutPage />} />
            <Route path="/partners" element={<GetInvolvedPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
