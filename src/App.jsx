import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HomePage from "@/pages/HomePage";
import ServicesPage from "@/pages/ServicesPage";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";
import TechnologiesPage from "@/pages/TechnologiesPage";
import ScrollToTop from "@/components/utils/ScrollToTop";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import BlogPage from "./pages/blog/BlogPage";
import BlogArticleRouter from "./pages/blog/BlogArticleRouter";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage key={Date.now()} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogArticleRouter />} />
            <Route path="/technologies" element={<TechnologiesPage />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
};

export default App;