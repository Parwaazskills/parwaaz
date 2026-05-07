// app/coursera-digital-learning/page.tsx

import CourseraDigitalLearningHero from "../sections/CourseraDigitalLearningHero";
import LearningPlatformsSection from "../sections/LearningPlatformsSection";
import LogoCardsSection from "../sections/LogoCardsSection1";

import OurMissionSection from "../sections/OurMissionSection";

export default function CourseraDigitalLearningPage() {
  return (
    <main className="w-full overflow-hidden bg-white">
      <CourseraDigitalLearningHero />
      <OurMissionSection/>
      <LearningPlatformsSection/>
      <LogoCardsSection/>
    </main>
  );
}