import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import lovableLogo from "@/assets/lovable-logo.png";
import claudeLogo from "@/assets/claude-logo.png";
import chatgptLogo from "@/assets/chatgpt-logo.png";
import copilotLogo from "@/assets/copilot-logo.png";

const AITools = () => {
  const tools = [
    {
      name: "Lovable",
      logo: lovableLogo,
    },
    {
      name: "Claude",
      logo: claudeLogo,
    },
    {
      name: "ChatGPT",
      logo: chatgptLogo,
    },
    {
      name: "Copilot",
      logo: copilotLogo,
    },
  ];

  return (
    <section id="ai-tools" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent transition-all duration-300 hover:bg-gradient-hover">
              Herramientas IA
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tecnologías de inteligencia artificial que utilizo en mi flujo de trabajo
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {tools.map((tool, index) => (
                <CarouselItem key={tool.name} className="md:basis-1/2 lg:basis-1/3">
                  <Card
                    className="p-8 bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 animate-fade-in group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex flex-col items-center justify-center gap-4">
                      <div className="w-32 h-32 rounded-2xl bg-background/50 p-6 flex items-center justify-center overflow-hidden group-hover:bg-background/80 transition-colors duration-300">
                        <img
                          src={tool.logo}
                          alt={`${tool.name} logo`}
                          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <h3 className="text-xl font-display font-bold text-foreground">
                        {tool.name}
                      </h3>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default AITools;
