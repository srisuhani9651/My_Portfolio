import { portfolioData } from "@/data/portfolio";
import { Github, Linkedin, Mail, MapPin, ArrowDown } from "lucide-react";

export function HeroSection() {
  const { personal } = portfolioData;

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50" />
      
      {/* Animated circles */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float-delayed" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary mb-8 animate-fade-in">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">{personal.location}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold font-display mb-6 animate-slide-up">
            Hi, I'm{" "}
            <span className="text-gradient">{personal.name.split(" ")[0]}</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-slide-up animation-delay-100">
            {personal.title}
          </p>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-slide-up animation-delay-200">
            {personal.summary}
          </p>

          <div className="flex items-center justify-center gap-4 animate-slide-up animation-delay-300">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
            >
              <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
            >
              <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
            >
              <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>

        <a
          href="#about"
          className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </a>
      </div>
    </section>
  );
}
