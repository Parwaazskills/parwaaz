// app/payroll-contract-visa-management/page.tsx

import PayrollContractVisaHero from "../sections/PayrollContractVisaHero";
import PayrollServicesSection from "../sections/PayrollServicesSection";
import VisaConsultancySection from "../sections/VisaConsultancySection";
import WhyChoosePayrollSection from "../sections/WhyChoosePayrollSection";

export default function PayrollContractVisaManagementPage() {
  return (
    <main className="w-full overflow-hidden bg-white">
      <PayrollContractVisaHero />
      <PayrollServicesSection/>
      <WhyChoosePayrollSection/>
      <VisaConsultancySection/>
    </main>
  );
}