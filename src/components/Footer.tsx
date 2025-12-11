import { portfolioData } from "@/data/portfolio";

export function Footer() {
  const { personal } = portfolioData;

  return (
    <footer className="py-8 border-t border-border bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {personal.name}. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
          </p>
        </div>
      </div>
    </footer>
  );
}
