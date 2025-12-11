import { portfolioData } from "@/data/portfolio";
import { GraduationCap, Calendar } from "lucide-react";

export function EducationSection() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            <span className="text-gradient">Education</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic background
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-8 hover:shadow-card transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-primary font-medium mb-3">{edu.institution}</p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">
                      {edu.grade}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
