import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { CompetencyTree } from './components/CompetencyTree';
import { ConsultationSection } from './components/ConsultationSection';
import { Footer } from './components/Footer';
import { FloatingButton } from './components/FloatingButton';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <CompetencyTree />
        <ConsultationSection />
      </main>
      <Footer />
      <FloatingButton />
    </div>
  );
}

export default App;