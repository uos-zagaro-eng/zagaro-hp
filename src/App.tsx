import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import ActivitySection from "./components/ActivitySection";
import CallToActionSection from "./components/CallToActionSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="relative min-h-screen flex flex-col font-sans text-stone-900 selection:bg-black selection:text-white">
      <Navbar />

      <main className="grow">
        <Hero />
        <AboutSection />
        <ActivitySection />
        <CallToActionSection />
      </main>

      <Footer />
    </div>
  );
};

export default App;
