import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import MemberSection from './components/MemberSection';
import ActivitySection from './components/ActivitySection';
import ChatBot from './components/ChatBot';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col font-sans text-stone-900 selection:bg-black selection:text-white">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <AboutSection />
        <MemberSection />
        <ActivitySection />
        
        {/* Call to Action Area */}
        <section id="join" className="py-32 md:py-48 bg-emerald-600 text-stone-900 text-center relative overflow-hidden">
           <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-multiply"></div>
           <div className="relative z-10 max-w-4xl mx-auto px-6">
              <p className="font-syncopate font-bold text-sm tracking-[0.5em] mb-6 uppercase text-emerald-900">
                Are you ready?
              </p>
              <h2 className="font-bodoni text-5xl md:text-8xl mb-12 text-white">
                JOIN THE MOVEMENT
              </h2>
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <a 
                    href="#line" 
                    className="w-full md:w-auto bg-stone-900 text-white px-12 py-5 text-sm font-bold tracking-[0.2em] hover:bg-stone-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
                >
                    新歓LINEに登録
                </a>
                <a 
                    href="#visit" 
                    className="w-full md:w-auto border-2 border-stone-900 text-stone-900 px-12 py-5 text-sm font-bold tracking-[0.2em] hover:bg-stone-900 hover:text-white transition-all"
                >
                    見学申し込み
                </a>
              </div>
           </div>
        </section>
      </main>

      <Footer />
      <ChatBot />
    </div>
  );
};

export default App;