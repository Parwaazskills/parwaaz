import AbtHero from "../sections/AbtHero";
import CompanyHistorySection from "../sections/CompanyHistorySection";
import OurValuesSection from "../sections/OurValuesSection";
import WhoWeAreSection from "../sections/WhoWeAreSection";


export default function AboutPage() {
  return (
    <main className="min-h-screen w-full bg-[#fff]">
      <AbtHero/>
      <WhoWeAreSection/>
      <OurValuesSection/>
      <CompanyHistorySection/>
    </main>
  );
}