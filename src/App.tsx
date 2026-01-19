import { HeroSection } from "./components/HeroSection";
import { AboutSkills } from "./components/AboutSkills";
import { Education } from "./components/Education";
import { ExperienceTimeline } from "./components/ExperienceTimeline";
import { TechnicalProjects } from "./components/TechnicalProjects";
import { Certifications } from "./components/Certifications";
import { LeadershipAffiliations } from "./components/LeadershipAffiliations";
import { Awards } from "./components/Awards";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./contexts/ThemeContext";
import { ThemeToggle } from "./components/ThemeToggle";

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <ThemeToggle />
        <HeroSection />
        <AboutSkills />
        <Education />
        <ExperienceTimeline />
        <TechnicalProjects />
        <Certifications />
        <LeadershipAffiliations />
        <Awards />
        <Footer />
      </div>
    </ThemeProvider>
  );
}