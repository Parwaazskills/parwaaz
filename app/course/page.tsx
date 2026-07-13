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
import CurriculumSection from "../sections/CurriculumSection";
import ExploreCareersSection from "../sections/ExploreCareersSection";
import Footer from "@/components/Footer";

export default function CoursesPage() {
  return (
    <main className="course-page w-full overflow-visible bg-white">
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
      <CurriculumSection/>
      {/* <ExploreCareersSection/> */}
      <Footer/>
    </main>
  );
}
