// app/courses/page.tsx

import CourseHero from "../sections/CourseHero";
import CourseTrustSection from "../sections/CourseTrustSection";
import CourseProgramDetailsSection from "../sections/CourseProgramDetailsSection";
import CourseSkillsSection from "../sections/CourseSkillsSection";
import CourseJobsSection from "../sections/CourseJobsSection";
import CourseCareersSection from "../sections/CourseCareersSection";
import CourseCareerBannerSection from "../sections/CourseCareerBannerSection";
import Navbar from "@/components/Navbar";
import CoursesSection from "../sections/CoursesSection";
import AiProfessionalsCollection from "../sections/AiProfessionalsCollection";

export default function CoursesPage() {
  return (
    <main className="w-full overflow-visible bg-white">
      <div className="absolute left-0 top-0 z-[999] w-full">
                      <Navbar/>
                    </div>
      <CourseHero />
      <CourseTrustSection />
      <CourseProgramDetailsSection />
      <CourseSkillsSection/>
      <CourseJobsSection/>
      <CourseCareersSection/>
      <CourseCareerBannerSection/>
      <CoursesSection/>
      <AiProfessionalsCollection/>
    </main>
  );
}