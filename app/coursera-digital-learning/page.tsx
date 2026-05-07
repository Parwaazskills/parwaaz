// app/coursera-digital-learning/page.tsx

import Navbar from "@/components/Navbar";
import CourseraDigitalLearningHero from "../sections/CourseraDigitalLearningHero";
import LearningPlatformsSection from "../sections/LearningPlatformsSection";
import LogoCardsSection from "../sections/LogoCardsSection1";

import OurMissionSection from "../sections/OurMissionSection";
import Footer from "@/components/Footer";

export default function CourseraDigitalLearningPage() {
  return (
    <main className="w-full overflow-hidden bg-white">
        <div className="absolute left-0 top-0 z-[999] w-full">
                <Navbar />
              </div>
      <CourseraDigitalLearningHero />
      <OurMissionSection/>
      <LearningPlatformsSection/>
      <LogoCardsSection/>
      <Footer/>
    </main>
  );
}