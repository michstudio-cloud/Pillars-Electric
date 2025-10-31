
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import ServicesOverview from './pages/ServicesOverview';
import ServiceDetailPage from './pages/ServiceDetailPage';
import IndustriesOverview from './pages/IndustriesOverview';
import IndustryDetailPage from './pages/IndustryDetailPage';
import ServiceAreasOverview from './pages/ServiceAreasOverview';
import ServiceAreaDetailPage from './pages/ServiceAreaDetailPage';
import Blog from './pages/Blog';
import BlogPostPage from './pages/BlogPostPage';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesOverview />} />
          <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
          <Route path="/industries" element={<IndustriesOverview />} />
          <Route path="/industries/:industryId" element={<IndustryDetailPage />} />
          <Route path="/service-areas" element={<ServiceAreasOverview />} />
          <Route path="/service-areas/:areaId" element={<ServiceAreaDetailPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:postId" element={<BlogPostPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsAndConditions />} />
          {/* Fallback for unknown routes */}
          <Route path="*" element={
            <div className="min-h-screen pt-20 flex items-center justify-center bg-black text-white">
              <h1 className="text-4xl font-bold text-gold-accent">404 - Page Not Found</h1>
            </div>
          } />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;