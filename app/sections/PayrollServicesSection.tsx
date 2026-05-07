// app/sections/PayrollServicesSection.tsx

import Image from "next/image";

const payrollServices = [
  {
    title: "Contract Management",
    description:
      "We Handle End-To-End Contract Management, Ensuring That All Employment Contracts Are Properly Managed, Documented, And Compliant With Local Laws And International Agreements.",
  },
  {
    title: "Payroll Processing",
    description:
      "Our Team Ensures Timely And Accurate Payroll Processing, Including Calculation Of Salaries, Deductions, Allowances, Bonuses, And Other Employee Compensations. We Also Ensure Compliance With Both Local And International Payroll Regulations.",
  },
  {
    title: "Statutory Reporting",
    description:
      "We Take Care Of All Statutory Payroll Reporting To Ensure Full Compliance With Local Labor Laws And Tax Regulations. This Includes Filing Necessary Reports With Local Authorities To Avoid Penalties Or Legal Issues.",
  },
  {
    title: "Customised Reporting",
    description:
      "We Offer Customised Payroll Reports Tailored To Your Organisation's Specific Needs, Providing Clear Visibility Into Payroll Expenses, Liabilities, And Employee Compensation Breakdowns.",
  },
  {
    title: "Preparation & Submission Of Monthly Liabilities",
    description:
      "We Prepare And Submit Monthly Payroll Liabilities, Ensuring Accurate Calculation And Timely Payment Of Taxes, Insurance, And Other Statutory Deductions Required By Local Laws.",
  },
  {
    title: "Preparation & Submission Of Year-End Activities",
    description:
      "At The End Of Each Fiscal Year, We Handle All Year-End Payroll Activities, Including Preparing Tax Statements, Reconciling Payroll Accounts, And Submitting Necessary Reports To Authorities.",
  },
  {
    title: "Bank Transfers Of Salaries",
    description:
      "Our Payroll Services Include The Secure And Timely Transfer Of Employee Salaries Directly To Their Bank Accounts, Ensuring A Smooth And Efficient Payment Process.",
  },
  {
    title: "Payroll Advisory Services",
    description:
      "Our Expert Team Provides Payroll Advisory Services, Offering Guidance On Best Practices, Tax Optimization, Compliance With International And Local Regulations, And More.",
  },
  {
    title: "Benefits Management",
    description:
      "At The End Of Each Fiscal Year, We Handle All Year-End Payroll Activities, Including Preparing Tax Statements, Reconciling Payroll Accounts, And Submitting Necessary Reports To Authorities.",
  },
  {
    title: "Support For International Payments",
    description:
      "We Provide Support For International Payroll Payments, Ensuring That Expatriates And Foreign Employees Receive Their Salaries On Time, No Matter Where They Are Located.",
  },
  {
    title: "Taxes And Local Compliance",
    description:
      ". We Ensure That Your Business Adheres To All Local Tax Laws And Labor Regulations, Handling Tax Filing, Employee Tax Deductions, And Compliance With Social Security And Other Mandatory Contributions.",
  },
];

export default function PayrollServicesSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white px-4 pb-[105px] pt-[78px] max-[900px]:pb-[80px] max-[900px]:pt-[62px] max-[480px]:pb-[60px] max-[480px]:pt-[48px]">
      {/* Right side orbit image */}
      <div className="pointer-events-none absolute bottom-[-145px] right-[-210px] z-0 h-[620px] w-[620px] opacity-[0.28] max-[900px]:hidden">
        <Image
          src="/orbit.svg"
          alt="Decorative orbit lines"
          fill
          priority
          className="object-contain"
        />
      </div>

      <div className="relative z-[2] mx-auto w-full max-w-[1400px]">
        <div className="max-w-[1280px] font-montserrat text-[16px] font-normal leading-[1.75] tracking-[0.2px] text-[#000000] max-[768px]:text-[14px] max-[480px]:text-[13px]">
          <p>
            Parwaaz Offers Comprehensive Payroll Services To Support Businesses
            In Managing Their Workforce, Both Locally And Internationally.
          </p>

          <p>
            Our Payroll Solutions Are Designed To Ensure Seamless, Compliant,
            And Efficient Payroll Processing For Expatriates Working In
            Pakistan, While Meeting Local And International Regulatory
          </p>

          <p>
            Requirements. Below Are The Key Services Included In Our Payroll
            Management Offerings:
          </p>
        </div>

        <div className="mt-[78px] grid grid-cols-3 gap-x-[24px] gap-y-[21px] max-[1024px]:grid-cols-2 max-[768px]:mt-[48px] max-[768px]:grid-cols-1">
          {payrollServices.map((service) => (
            <article
              key={service.title}
              className="flex min-h-[298px] w-full flex-col items-center rounded-[12px] border border-[#CFCFCF] bg-white px-[40px] pb-[40px] pt-[47px] text-center max-[1024px]:min-h-[270px] max-[480px]:min-h-[245px] max-[480px]:px-[24px] max-[480px]:pt-[36px]"
            >
              <h3 className="max-w-[360px] font-montserrat text-[22px] font-bold leading-[1.12] tracking-[-0.45px] text-[#000000] max-[480px]:text-[19px]">
                {service.title}
              </h3>

              <p className="mt-[26px] max-w-[355px] font-montserrat text-[15px] font-normal leading-[1.9] tracking-[0.4px] text-[#000000] max-[480px]:mt-[20px] max-[480px]:text-[13px] max-[480px]:leading-[1.75]">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}