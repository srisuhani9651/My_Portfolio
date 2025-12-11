import { portfolioData } from "@/data/portfolio";
import { Briefcase, MapPin, Calendar, ChevronRight } from "lucide-react";

export function ExperienceSection() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and key projects
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experience.map((job, index) => (
            <div key={index} className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

              <div className="flex gap-6">
                {/* Timeline dot */}
                <div className="hidden md:flex flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 border-4 border-background items-center justify-center relative z-10">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>

                <div className="flex-1 pb-12">
                  <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-card transition-all duration-300">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-1">
                          {job.role}
                        </h3>
                        <p className="text-primary font-medium">{job.company}</p>
                      </div>
                      <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {job.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-6 mt-6">
                      {job.projects.map((project, pIndex) => (
                        <div key={pIndex}>
                          <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-primary" />
                            {project.name}
                          </h4>
                          <ul className="space-y-2 ml-4">
                            {project.highlights.map((highlight, hIndex) => (
                              <li
                                key={hIndex}
                                className="flex items-start gap-2 text-muted-foreground text-sm"
                              >
                                <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
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
