// app/courses/page.tsx

import CourseHero from "../sections/CourseHero";
import CourseTrustSection from "../sections/CourseTrustSection";
import CourseProgramDetailsSection from "../sections/CourseProgramDetailsSection";
import CourseSkillsSection from "../sections/CourseSkillsSection";
import CourseJobsSection from "../sections/CourseJobsSection";
import CourseCareersSection from "../sections/CourseCareersSection";
import CourseCareerBannerSection from "../sections/CourseCareerBannerSection";

export default function CoursesPage() {
  return (
    <main className="w-full overflow-visible bg-white">
      <CourseHero />
      <CourseTrustSection />
      <CourseProgramDetailsSection />
      <CourseSkillsSection/>
      <CourseJobsSection/>
      <CourseCareersSection/>
      <CourseCareerBannerSection/>
    </main>
  );
}