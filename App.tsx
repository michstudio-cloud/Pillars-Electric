

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
      {/* Main floating content container */}
      {/* The calculation (100vh - header_height - footer_height - main_content_my) is approximated for general layout.
          Header (h-20 + p-4 wrapper) = 5rem + 2rem = 7rem
          Footer (py-12 + p-4 wrapper + mt-8 wrapper) = 6rem + 2rem + 2rem = 10rem
          Main content container (my-8) = 2rem * 2 = 4rem
          Total = 7rem + 10rem + 4rem = 21rem
          So, min-h-[calc(100vh-21rem)] */}
      <div className="max-w-7xl mx-auto my-8 bg-neutral-900 shadow-2xl rounded-5xl overflow-hidden min-h-[calc(100vh-21rem)]"> {/* Adjusted margin-top for header and margin-bottom for footer */}
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
              <div className="min-h-screen flex flex-col items-center justify-center p-20 bg-neutral-900 text-white"> {/* Adjusted padding and background */}
                <h1 className="text-5xl md:text-6xl font-extrabold text-gold-accent mb-4">404</h1>
                <p className="text-xl md:text-2xl text-white">Page Not Found</p>
              </div>
            } />
          </Routes>
        </main>
      </div>
      <Footer />
    </Router>
  );
};

export default App;