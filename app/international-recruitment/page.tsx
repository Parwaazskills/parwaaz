// app/international-recruitment/page.tsx

import Footer from "@/components/Footer";
import InternationalRecruitmentHero from "../sections/InternationalRecruitmentHero";
import LogoCardsSection2 from "../sections/LogoCardsSection2";
import OurServicesIncludeSection from "../sections/OurServicesIncludeSection";
import WorkforceStrategySection from "../sections/WorkforceStrategySection";

export default function InternationalRecruitmentPage() {
  return (
    <main className="w-full overflow-hidden bg-white">
      <InternationalRecruitmentHero />
      <WorkforceStrategySection/>
      <OurServicesIncludeSection/>
      <LogoCardsSection2/>
      <Footer/>
    </main>
  );
}