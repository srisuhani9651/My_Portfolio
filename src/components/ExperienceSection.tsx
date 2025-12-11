import { portfolioData } from "@/data/portfolio";
import { Briefcase, MapPin, Calendar, ChevronRight, Building2 } from "lucide-react";

export function ExperienceSection() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and key projects
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {experience.map((job, index) => (
            <div
              key={index}
              className="relative bg-card border border-border rounded-2xl overflow-hidden hover:shadow-card transition-all duration-500 group"
            >
              {/* Accent bar */}
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-accent" />

              <div className="p-6 md:p-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <Building2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">
                        {job.role}
                      </h3>
                      <p className="text-primary font-semibold">{job.company}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-sm">
                    <span className="flex items-center gap-1.5 px-3 py-1.5 bg-secondary rounded-full text-muted-foreground">
                      <Calendar className="w-3.5 h-3.5" />
                      {job.period}
                    </span>
                    <span className="flex items-center gap-1.5 px-3 py-1.5 bg-secondary rounded-full text-muted-foreground">
                      <MapPin className="w-3.5 h-3.5" />
                      {job.location}
                    </span>
                  </div>
                </div>

                {/* Projects */}
                <div className="grid md:grid-cols-2 gap-4">
                  {job.projects.map((project, pIndex) => (
                    <div
                      key={pIndex}
                      className="bg-secondary/50 rounded-xl p-5 hover:bg-secondary/80 transition-colors duration-300"
                    >
                      <div className="flex items-center gap-2 mb-4">
                        <Briefcase className="w-4 h-4 text-primary" />
                        <h4 className="font-semibold text-foreground">
                          {project.name}
                        </h4>
                      </div>
                      <ul className="space-y-2.5">
                        {project.highlights.map((highlight, hIndex) => (
                          <li
                            key={hIndex}
                            className="flex items-start gap-2 text-muted-foreground text-sm leading-relaxed"
                          >
                            <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
