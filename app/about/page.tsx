import ScrollToTopIndicator from "@/components/ScrollToTopIndicator";
import AbtHero from "../sections/AbtHero";
import CompanyHistorySection from "../sections/CompanyHistorySection";
import OurValuesSection from "../sections/OurValuesSection";
import WhoWeAreSection from "../sections/WhoWeAreSection";
import Footer from "@/components/Footer";


export default function AboutPage() {
  return (
    <main className="min-h-screen w-full bg-[#fff]">
      <ScrollToTopIndicator/>
      <AbtHero/>
      <WhoWeAreSection/>
      <OurValuesSection/>
      <CompanyHistorySection/>
      <Footer/>
    </main>
  );
}