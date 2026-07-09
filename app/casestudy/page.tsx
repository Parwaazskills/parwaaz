import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudyHero from "../sections/CaseStudyHero";
import CaseStudyStats from "../sections/CaseStudyStats";
import CaseStudyDetails from "../sections/CaseStudyDetails";
import SecureTalentSection from "../sections/SecureTalentSection";
import DefenseCompetitionsSection from "../sections/DefenseCompetitionsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CaseStudyResultsSection from "../sections/CaseStudyResultsSection";

export default function Casestudy() {
  return (
    <main className="w-full overflow-visible bg-white">
      <div className="absolute left-0 top-0 z-[999] w-full">
                      <Navbar/>
      </div>

      <CaseStudyHero/>
      <CaseStudyStats/>
      <CaseStudyDetails/>
      <SecureTalentSection/>
      <DefenseCompetitionsSection/>
      <CaseStudyResultsSection/>
      <TestimonialsSection/>
      <Footer/>
    </main>
  );
}