
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReskillingHero from "../sections/ReskillingHero";
import ReskillingSubsection from "../sections/Reskillingsubsection";
import Reskillingservicebreakdown from "../sections/Reskillingservicebreakdown";
import LogoCardsSection from "../sections/LogoCardsSection1";

export default function Reskilling() {
  return (
    <main className="w-full overflow-hidden bg-white">
        <div className="absolute left-0 top-0 z-[999] w-full">
                <Navbar />   
              </div>
<ReskillingHero/>
<ReskillingSubsection/>
<Reskillingservicebreakdown/>
<LogoCardsSection/>
      <Footer/>
    </main>
  );
}