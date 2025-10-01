import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Github, Linkedin, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Trabajemos Juntos
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            ¿Tienes un proyecto en mente? Estaré encantada de ayudarte
          </p>
        </div>

        <Card className="p-8 md:p-12 bg-gradient-card border-border/50 animate-fade-in">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-display font-bold mb-6">
                Información de Contacto
              </h3>
              
              <div className="space-y-4">
                <a
                  href="mailto:tu@email.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground flex items-center justify-center transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span>tu@email.com</span>
                </a>

                <a
                  href="#"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground flex items-center justify-center transition-colors">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span>Tu Ciudad, País</span>
                </a>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-display font-semibold mb-4">
                  Sígueme en
                </h4>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="w-12 h-12 rounded-lg bg-secondary hover:bg-primary transition-colors flex items-center justify-center"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-lg bg-secondary hover:bg-primary transition-colors flex items-center justify-center"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-lg bg-secondary hover:bg-primary transition-colors flex items-center justify-center"
                  >
                    <Mail className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-display font-bold mb-6">
                Envíame un mensaje
              </h3>
              <Button
                size="lg"
                className="w-full bg-gradient-primary hover:opacity-90 transition-opacity shadow-lg hover:shadow-primary/50"
                onClick={() => window.location.href = "mailto:tu@email.com"}
              >
                <Mail className="w-5 h-5 mr-2" />
                Abrir correo
              </Button>
              <p className="text-muted-foreground text-sm mt-4 text-center">
                O contáctame directamente a través de tu cliente de correo favorito
              </p>
            </div>
          </div>
        </Card>

        <footer className="mt-16 text-center text-muted-foreground">
          <p>© 2025 Portfolio. Diseñado y desarrollado con ❤️</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
