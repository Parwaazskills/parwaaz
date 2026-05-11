// app/coursera-digital-learning/page.tsx

import Navbar from "@/components/Navbar";
import LogoCardsSection from "../sections/LogoCardsSection1";
import Footer from "@/components/Footer";
import Aitech from "../sections/Aitechhero";
import Aitechsubsection from "../sections/Aitechsubsection";
import Aitechservicebreakdown from "../sections/Aitechservicebreakdown";

export default function CourseraDigitalLearningPage() {
  return (
    <main className="w-full overflow-hidden bg-white">
        <div className="absolute left-0 top-0 z-[999] w-full">
                <Navbar />
              </div>
     <Aitech/>
      <Aitechsubsection/>
      <Aitechservicebreakdown/>
      <LogoCardsSection/>
      <Footer/>
    </main>
  );
}