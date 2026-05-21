
import AbtHero from "../sections/AbtHero";
import CompanyHistorySection from "../sections/CompanyHistorySection";
import OurValuesSection from "../sections/OurValuesSection";
import WhoWeAreSection from "../sections/WhoWeAreSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function AboutPage() {
  return (
    <main className="min-h-screen w-full bg-white">
      <div className="absolute left-0 top-0 z-[999] w-full">
        <Navbar />
      </div>

      {/* <ScrollToTopIndicator /> */}
      <AbtHero />
      <WhoWeAreSection />
      <OurValuesSection />
      <CompanyHistorySection />
      <Footer />
    </main>
  );
}