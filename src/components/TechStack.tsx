import { Card } from "@/components/ui/card";

const TechStack = () => {
  const technologies = [
    { name: "React", icon: "⚛️" },
    { name: "TypeScript", icon: "📘" },
    { name: "JavaScript", icon: "💛" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "Next.js", icon: "▲" },
    { name: "HTML5", icon: "🌐" },
    { name: "CSS3", icon: "🎭" },
    { name: "Git", icon: "🔧" },
  ];

  return (
    <section id="stack" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tecnologías que uso para dar vida a las ideas
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {technologies.map((tech, index) => (
            <Card
              key={tech.name}
              className="p-6 bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center">
                <div className="text-4xl mb-3">{tech.icon}</div>
                <h3 className="font-display font-semibold text-foreground">
                  {tech.name}
                </h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
