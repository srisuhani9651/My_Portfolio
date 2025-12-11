import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { EducationSection } from "@/components/EducationSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <section id="about" className="py-24">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold font-display mb-8">
                  About <span className="text-gradient">Me</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm a passionate Full Stack Software Engineer currently working at MPC Cloud Consulting. 
                  With a Master's degree in Computer Applications from Chandigarh University, I specialize 
                  in building scalable web applications using modern technologies like React, Node.js, 
                  Spring Boot, and PostgreSQL. I love solving complex problems and optimizing systems 
                  for better performance.
                </p>
              </div>
            </div>
          </section>
          <SkillsSection />
          <ExperienceSection />
          <EducationSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
