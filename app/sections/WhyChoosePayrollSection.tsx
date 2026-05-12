// app/sections/WhyChoosePayrollSection.tsx

const whyChooseItems = [
  {
    title: "Support For International Payments",
    description:
      "Our Team Stays Updated With The Latest Laws And Ensures Your Payroll Processes Meet Both Local And International Requirements.",
  },
  {
    title: "Tailored Solution",
    description:
      "We Offer Flexible And Customised Payroll Services To Fit Your Business’s Unique Needs.",
    extra:
      "Expertise In Expat Payroll: With Years Of Experience Managing Expatriate Payroll, We Ensure A Smooth And Efficient Payroll Experience For Your International Workforce.",
  },
  {
    title: "End-To-End Payroll Management",
    description:
      "From Payroll Processing To Benefits Management, Parwaaz Handles Every Aspect Of Payroll To Free Up Your Team’s Time And Resources.",
    extra: ".",
  },
];

export default function WhyChoosePayrollSection() {
  return (
    <section className="w-full bg-white px-4 py-[32px] max-[768px]:py-[24px]">
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="rounded-[15px] bg-[#75FB69]/10 px-[78px] pb-[60px] pt-[58px] max-[1024px]:px-[52px] max-[768px]:px-[28px] max-[768px]:pb-[46px] max-[768px]:pt-[42px] max-[480px]:px-[20px] max-[480px]:pb-[38px] max-[480px]:pt-[34px]">
          <h2 className="font-montserrat text-[32px] font-semibold leading-[1.2] tracking-[-0.4px] text-[#000572] max-[768px]:text-[28px] max-[480px]:text-[24px]">
            Why Choose Parwaaz For Payroll Services?
          </h2>

          <div className="mt-[46px] space-y-[42px] max-[768px]:mt-[36px] max-[768px]:space-y-[34px]">
            {whyChooseItems.map((item) => (
              <div key={item.title}>
                <h3 className="font-montserrat text-[24px] font-semibold leading-[1.25] tracking-[-0.25px] text-[#000000] max-[768px]:text-[21px] max-[480px]:text-[19px]">
                  {item.title}
                </h3>

                <div className="mt-[16px] font-montserrat text-[16px] font-normal leading-[1.75] tracking-[0.2px] text-[#000000] max-[768px]:text-[14px] max-[480px]:text-[13px]">
                  <p>{item.description}</p>

                  {item.extra && <p className="mt-[8px]">{item.extra}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}