
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import LogoCardsSection from "../sections/LogoCardsSection1";
import WorkplaceHero from "../sections/WorkplaceHero";
import Workplacesubsection from "../sections/Workplacesubsection";
import WorkplaceServiceBreakdown from "../sections/Workplaceservicebreakdown";

export default function WorkplacePage() {
  return (
    <main className="w-full overflow-hidden bg-white">
        <div className="absolute left-0 top-0 z-[999] w-full">
                <Navbar />
              </div>
              <WorkplaceHero/>
              <Workplacesubsection/>
              <WorkplaceServiceBreakdown/>
           <LogoCardsSection/>
      <Footer/>
    </main>
  );
}