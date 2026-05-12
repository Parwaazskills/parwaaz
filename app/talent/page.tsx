import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TalentHero from "../sections/TalentHero";
import Talentsubsection from "../sections/Talentsubsection";
import TalentMobilityServiceBreakdown from "../sections/Talentservicebreakdown";
import LogoCardsSection from "../sections/LogoCardsSection1";


export default function Talent() {
  return (
    <main className="w-full overflow-hidden bg-white">
        <div className="absolute left-0 top-0 z-[999] w-full">
                <Navbar />
              </div>
<TalentHero/>
<Talentsubsection/>
<TalentMobilityServiceBreakdown/>
<LogoCardsSection/>
      <Footer/>
    </main>
  );
}