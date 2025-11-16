import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Plan from "./sections/Plan";
import Tracks from "./sections/Tracks";
import Members from "./sections/Members";
import Join from "./sections/Join";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Plan />
        <Tracks />
        <Members />
        <Join />
      </main>
      <Footer />
    </div>
  );
}

export default App;
