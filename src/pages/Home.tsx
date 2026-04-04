import Seo from "../components/Seo";
import { SEO } from "../constants/seo";
import Hero from "../components/Hero";
import PictureGallerySection from "../components/PictureGallerySection";
import AboutSection from "../components/AboutSection";
import ActivitySection from "../components/ActivitySection";
import NewsSection from "../components/NewsSection";
import MembersSection from "../components/MembersSection";
import SponsorsSection from "../components/SponsorsSection";
import FaqSection from "../components/FaqSection";
import CallToActionSection from "../components/CallToActionSection";

const Home = () => {
  return (
    <>
      <Seo title={SEO.DEFAULT_TITLE} description={SEO.DEFAULT_DESCRIPTION} />
      <Hero />
      <AboutSection />
      <PictureGallerySection />
      <ActivitySection />
      <NewsSection />
      <MembersSection />
      <SponsorsSection />
      <FaqSection />
      <CallToActionSection />
    </>
  );
};

export default Home;
