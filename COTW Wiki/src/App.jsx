import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppRouter from './router/AppRouter';
import ScrollToTop from './components/ScrollToTop';
import Breadcrumbs from './components/Breadcrumbs';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <ScrollToTop />
      <Navbar />
      <Breadcrumbs />
      <main className="flex-1 w-full">
        <AppRouter />
      </main>
      <Footer />
    </div>
  );
}