import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black text-white antialiased selection:bg-white selection:text-black">
      <Hero />
      <About />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
