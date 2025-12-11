import { portfolioData } from "@/data/portfolio";
import { Database, Code, Server, Container, GitBranch, Wrench, Sparkles } from "lucide-react";

const categoryIcons: Record<string, React.ReactNode> = {
  Databases: <Database className="w-5 h-5" />,
  Languages: <Code className="w-5 h-5" />,
  Frameworks: <Server className="w-5 h-5" />,
  ORM: <Database className="w-5 h-5" />,
  Deployment: <Container className="w-5 h-5" />,
  "CI/CD": <GitBranch className="w-5 h-5" />,
  Tools: <Wrench className="w-5 h-5" />,
};

export function SkillsSection() {
  const { technicalSkills, softSkills } = portfolioData;

  return (
    <section id="skills" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to build robust applications
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {technicalSkills.map((category, index) => (
            <div
              key={category.category}
              className="bg-card border border-border rounded-2xl p-6 hover:shadow-card transition-all duration-300 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {categoryIcons[category.category] || <Code className="w-5 h-5" />}
                </div>
                <h3 className="font-semibold text-foreground">{category.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-secondary text-muted-foreground rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="bg-card border border-border rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-accent text-accent-foreground">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-foreground text-lg">Soft Skills</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {softSkills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 text-foreground rounded-full border border-border hover:border-primary/50 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
