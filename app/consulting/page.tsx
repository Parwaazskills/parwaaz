
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConsultingHero from "../sections/ConsultingHero";
import Consultingsubsection from "../sections/Consultingsubsection";
import ConsultingServiceBreakdown from "../sections/Consultingservicebreakdown";
import LogoCardsSection from "../sections/LogoCardsSection1";

export default function ConsultingPage() {
  return (
    <main className="w-full overflow-hidden bg-white">
        <div className="absolute left-0 top-0 z-[999] w-full">
                <Navbar />
              </div>
           <ConsultingHero/>
           <Consultingsubsection/>
           <ConsultingServiceBreakdown/>
           <LogoCardsSection/>
      <Footer/>
    </main>
  );
}