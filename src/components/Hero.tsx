import { Button } from "@/components/ui/button";
import { Github, Mail, Linkedin } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 pt-20"
    >
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center md:justify-end order-1 md:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-2xl opacity-30 animate-glow"></div>
              <img
                src={profileImage}
                alt="Profile"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl object-cover border-4 border-primary/20 shadow-2xl animate-float transition-transform duration-500 hover:scale-110 hover:rotate-[10deg] cursor-pointer"
              />
            </div>
          </div>

          {/* Content */}
          <div className="text-center md:text-left order-2 md:order-1 animate-fade-in">
            <p className="text-primary font-medium mb-4 text-lg">Hola, soy</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-4">
              <span className="bg-gradient-primary bg-clip-text text-transparent transition-all duration-300 hover:bg-gradient-hover">
                Desarrolladora
              </span>
              <br />
              <span className="text-foreground transition-all duration-300 hover:bg-gradient-hover hover:bg-clip-text hover:text-transparent">Frontend</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-2xl">
              Creo experiencias digitales responsivas, interactivas y visualmente
              impresionantes. Mi enfoque está en construir interfaces de usuario
              que funcionen perfectamente en todos los dispositivos.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
              <Button
                size="lg"
                className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-lg hover:shadow-primary/50"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contáctame
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary/50 hover:border-primary hover:bg-primary/10"
              >
                <Github className="w-5 h-5 mr-2" />
                Ver GitHub
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary hover:bg-primary transition-colors flex items-center justify-center"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary hover:bg-primary transition-colors flex items-center justify-center"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary hover:bg-primary transition-colors flex items-center justify-center"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
