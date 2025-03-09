import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Emergency from './components/Emergency';
import Features from './components/Features';
import Coverage from './components/Coverage';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import CityServicePage from './components/CityServicePage';

function HomePage() {
  return (
    <>
      <Hero />
      <Emergency />
      <Services />
      <Features />
      <Coverage />
      <Testimonials />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:cityId/:serviceId" element={<CityServicePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;