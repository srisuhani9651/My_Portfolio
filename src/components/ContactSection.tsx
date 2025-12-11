import { portfolioData } from "@/data/portfolio";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";

export function ContactSection() {
  const { personal } = portfolioData;

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting projects
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-card transition-all duration-300 group">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a
                      href={`mailto:${personal.email}`}
                      className="text-foreground font-medium hover:text-primary transition-colors"
                    >
                      {personal.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-card transition-all duration-300 group">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <a
                      href={`tel:${personal.phone}`}
                      className="text-foreground font-medium hover:text-primary transition-colors"
                    >
                      {personal.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-card transition-all duration-300 group">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-foreground font-medium">{personal.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 text-primary-foreground flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold font-display mb-4">
                  Let's work together!
                </h3>
                <p className="opacity-90 mb-8">
                  I'm currently open to new opportunities and would love to hear about your project.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href={`mailto:${personal.email}`}
                  className="flex items-center justify-center gap-2 w-full py-3 px-6 bg-background text-foreground rounded-xl font-medium hover:opacity-90 transition-opacity"
                >
                  <Send className="w-5 h-5" />
                  Send me an email
                </a>
                <div className="flex justify-center gap-4">
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-primary-foreground/20 hover:bg-primary-foreground/30 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-primary-foreground/20 hover:bg-primary-foreground/30 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
