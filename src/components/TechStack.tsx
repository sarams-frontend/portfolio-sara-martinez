import { Card } from "@/components/ui/card";
import { Code2, FileCode, Palette, Triangle, Globe, Paintbrush, Github } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const TechStack = () => {
  const technologies: { name: string; Icon: LucideIcon }[] = [
    { name: "React", Icon: Code2 },
    { name: "TypeScript", Icon: FileCode },
    { name: "JavaScript", Icon: FileCode },
    { name: "Tailwind CSS", Icon: Palette },
    { name: "Next.js", Icon: Triangle },
    { name: "HTML5", Icon: Globe },
    { name: "CSS3", Icon: Paintbrush },
    { name: "Git", Icon: Github },
  ];

  return (
    <section id="stack" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent transition-all duration-300 hover:bg-gradient-hover">
              Tech Stack
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tecnologías que uso para dar vida a las ideas
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {technologies.map((tech, index) => {
            const Icon = tech.Icon;
            return (
              <Card
                key={tech.name}
                className="p-6 bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 animate-fade-in cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center">
                  <div className="mb-3 flex justify-center">
                    <Icon className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground">
                    {tech.name}
                  </h3>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
