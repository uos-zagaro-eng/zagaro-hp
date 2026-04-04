import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CurriculumPage from "./pages/CurriculumPage";

function routerBasename(): string | undefined {
  const base = import.meta.env.BASE_URL;
  if (base === "/" || base === "") return undefined;
  return base.endsWith("/") ? base.slice(0, -1) : base;
}

const App = () => {
  return (
    <BrowserRouter basename={routerBasename()}>
      <div className="relative flex min-h-screen flex-col bg-page font-sans text-ink selection:bg-brand-soft selection:text-brand-active">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/curriculum" element={<CurriculumPage />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
