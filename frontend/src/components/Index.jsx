
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ResourceCards from '../components/ResourceCards';
import Security from '../components/Security';
import Testimonial from '../components/Testimonial';
import Products from '../components/Products';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="app">
      <Header />
      <Hero />
      <ResourceCards />
      <Security />
      <Testimonial />
      <Products />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
