import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import FeaturedProject from "@/components/FeaturedProject";
import Projects from "@/components/Projects";
import AITools from "@/components/AITools";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <TechStack />
      <FeaturedProject />
      <Projects />
      <AITools />
      <Contact />
    </div>
  );
};

export default Index;
