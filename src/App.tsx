import { HeroSection } from "./components/HeroSection";
import { AboutSkills } from "./components/AboutSkills";
import { Education } from "./components/Education";
import { ExperienceTimeline } from "./components/ExperienceTimeline";
import { TechnicalProjects } from "./components/TechnicalProjects";
import { Certifications } from "./components/Certifications";
import { LeadershipAffiliations } from "./components/LeadershipAffiliations";
import { Awards } from "./components/Awards";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100">
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
  );
}