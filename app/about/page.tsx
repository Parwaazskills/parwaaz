import ScrollToTopIndicator from "@/components/ScrollToTopIndicator";
import AbtHero from "../sections/AbtHero";
import CompanyHistorySection from "../sections/CompanyHistorySection";
import OurValuesSection from "../sections/OurValuesSection";
import WhoWeAreSection from "../sections/WhoWeAreSection";


export default function AboutPage() {
  return (
    <main className="min-h-screen w-full bg-[#fff]">
      <ScrollToTopIndicator/>
      <AbtHero/>
      <WhoWeAreSection/>
      <OurValuesSection/>
      <CompanyHistorySection/>
    </main>
  );
}