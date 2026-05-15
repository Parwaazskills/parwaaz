import type { LucideIcon } from "lucide-react";

export type ServiceItem = {
  eyebrow: string;
  title: string;
  body: string;
  /**
   * Icon can be either:
   *  - A path string to an SVG in /public (e.g. "/icons/ai-strategy-readiness.svg")
   *  - A Lucide React component (used as fallback / placeholder)
   */
  icon: string | LucideIcon;
  btn: string;
  href: string;
};

export const servicesData: Record<string, ServiceItem[]> = {
  // ─────────────────────────────────────────────────────────────
  // TAB 1: AI & Advanced Technology
  // ─────────────────────────────────────────────────────────────
  "AI & Advanced Technology": [
    {
      eyebrow: "AI Strategy &",
      title: "Readiness",
      body:
        "Help leadership understand AI, define where it adds value in their organization, and build a credible, board-ready adoption roadmap.",
      icon: "/icons/ai-strategy-readiness.svg",
      btn: "Learn More",
      href: "/aitech#ai-strategy-readiness",
    },
    {
      eyebrow: "International AI",
      title: "Partner Solutions",
      body:
        "Broker and integrate global AI infrastructure — connecting enterprises to leading international AI platforms with Parwaaz as trusted integrator.",
      icon: "/icons/international-ai-partner.svg",
      btn: "Learn More",
      href: "/aitech#international-ai-partner-brokerage",
    },
    {
      eyebrow: "Generative AI &",
      title: "LLM Deployment",
      body:
        "Empowering Pakistan's workforce with world-class skills through global partnerships like Coursera. Unlock new career opportunities with tailored programs designed for modern professionals.",
      icon: "/icon/LLM.svg",
      btn: "Learn More",
      href: "/aitech#generative-ai-llm-deployment",
    },
    {
      eyebrow: "Process",
      title: "Automation",
      body:
        "Automate repetitive workflows across business functions using RPA combined with AI — smarter, adaptive automation that scales.",
      icon: "/icons/process-automation.svg",
      btn: "Learn More",
      href: "/aitech#process-automation-ai-workflows",
    },
    {
      eyebrow: "Custom Technology",
      title: "Development",
      body:
        "Bespoke software and systems built for your specific requirements — from MVP to enterprise-scale platforms tailored to your market.",
      icon: "/icons/custom-technology-development.svg",
      btn: "Learn More",
      href: "/aitech#custom-technology-development",
    },
    {
      eyebrow: "AI Governance &",
      title: "Compliance",
      body:
        "Ensure AI deployments are responsible, auditable, and aligned to organisational and regulatory standards from day one.",
      icon: "/icons/ai-governance-compliance.svg",
      btn: "Learn More",
      href: "/aitech#ai-governance-compliance",
    },
  ],

  // ─────────────────────────────────────────────────────────────
  // TAB 2: Reskilling & Upskilling
  // ─────────────────────────────────────────────────────────────
  "Reskilling & Upskilling": [
    {
      eyebrow: "Skills Gap",
      title: "Diagnostics",
      body:
        "Identify workforce capability gaps before investing — at national, sectoral, or enterprise level — with WEF-aligned assessment frameworks.",
      icon: "/icons/skills-gap-diagnostics.svg",
      btn: "Learn More",
      href: "/reskilling#skills-gap-diagnostics",
    },
    {
      eyebrow: "Learning Programme",
      title: "Architecture",
      body:
        "Build evidence-based learning journeys mapped to real workforce needs — from curriculum architecture to delivery roadmaps that move the metrics that matter.",
      icon: "/icons/learning-programme-design.svg",
      btn: "Learn More",
      href: "/reskilling#learning-programme-architecture",
    },
    {
      eyebrow: "Platform Deployment",
      title: "& LMS",
      body:
        "Full Coursera enterprise licensing, setup, and integration as Pakistan's exclusive B2B Coursera partner — or connect Coursera to existing HR systems.",
      icon: "/icons/platform-deployment-lms.svg",
      btn: "Learn More",
      href: "/reskilling#coursera-enterprise-deployment",
    },
    {
      eyebrow: "Credentials &",
      title: "Certification",
      body:
        "Issue globally recognised credentials and digital certifications that validate workforce capability and travel across employers, sectors, and borders.",
      icon: "/icons/credentials-certification.svg",
      btn: "Learn More",
      href: "/reskilling#credentials-certification",
    },
    {
      eyebrow: "Workforce Reskilling",
      title: "& Upskilling",
      body:
        "Structured cohort programmes that move employees from current to future capability — in AI, data, digital tools, and leadership.",
      icon: "/icons/workforce-reskilling-upskilling.svg",
      btn: "Learn More",
      href: "/reskilling#workforce-reskilling-cohorts",
    },
    {
      eyebrow: "Learning Impact & Skills",
      title: "Intelligence",
      body:
        "Measure what learning actually changes — capability lift, completion rates, business outcomes, and ROI — in boardroom-ready reporting.",
      icon: "/icons/learning-impact-intelligence.svg",
      btn: "Learn More",
      href: "reskilling#learning-impact-skills-intelligence",
    },
  ],

  // ─────────────────────────────────────────────────────────────
  // TAB 3: Talent Mobility & Manpower Solutions
  // ─────────────────────────────────────────────────────────────
  "Talent Mobility & Manpower Solutions": [
    {
      eyebrow: "International",
      title: "Recruitment",
      body:
        "Connect top Pakistani talent with international opportunities — from executive search to high-volume specialist hiring across global markets.",
      icon: "/icons/international-recruitment.svg",
      btn: "Get Started",
      href: "/talent#international-recruitment",
    },
    {
      eyebrow: "Payroll & Contract",
      title: "Management",
      body:
        "Full employer-of-record and payroll management — handling compliance, taxes, and legal requirements across multiple jurisdictions.",
      icon: "/icons/payroll-contract-management.svg",
      btn: "Get Started",
      href: "/talent#payroll-contract-management",
    },
    {
      eyebrow: "Visa & Immigration",
      title: "Services",
      body:
        "Complete visa processing, immigration support, and legal documentation for smooth international workforce deployment with full compliance.",
      icon: "/icons/visa-immigration-services.svg",
      btn: "Get Started",
      href: "/talent#visa-immigration-services",
    },
    {
      eyebrow: "Workforce Deployment &",
      title: "Settling-in",
      body:
        "End-to-end relocation support — ensuring deployed employees are housed, onboarded, and fully productive from their first day.",
      icon: "/icons/workforce-deployment-settling-in.svg",
      btn: "Get Started",
      href: "/talent#workforce-deployment-settling-in",
    },
    {
      eyebrow: "Talent Intelligence &",
      title: "Analytics",
      body:
        "Data-driven insights on talent availability, mobility trends, and workforce planning to inform smarter hiring and deployment decisions.",
      icon: "/icons/talent-intelligence-analytics.svg",
      btn: "Get Started",
      href: "/talent#talent-intelligence-analytics",
    },
    {
      eyebrow: "Outsourced HR & People",
      title: "Operations",
      body:
        "Fully managed HR functions for companies that need professional people operations without the overhead of building an in-house HR team.",
      icon: "/icons/outsourced-hr-operations.svg",
      btn: "Get Started",
      href: "/talent#outsourced-hr-people-operations",
    },
  ],

  // ─────────────────────────────────────────────────────────────
  // TAB 4: Consulting, Advisory & Research
  // ─────────────────────────────────────────────────────────────
  "Consulting, Advisory & Research": [
    {
      eyebrow: "Digital Transformation",
      title: "Advisory",
      body:
        "End-to-end digital transformation engagements for enterprises and government bodies — from strategy and operating model redesign through to technology implementation and change management. Aligned to international frameworks (TOGAF, McKinsey 7S, Kotter) and calibrated to local execution realities.",
      icon: "/icon/advisory.svg",
      btn: "Learn More",
      href: "/consulting#digital-transformation-advisory",
    },
    {
      eyebrow: "Organisational Design &",
      title: "HR Transformation",
      body:
        "Redesign how organisations are structured, how decisions are made, and how people are managed — to unlock the performance that existing capability and resources should already be delivering. Built on Korn Ferry and Deloitte organisational design methodology.",
      icon: "/icon/HRTransformation.svg",
      btn: "Learn More",
      href: "/consulting#organisational-design-hr-transformation",
    },
    {
      eyebrow: "Public Sector",
      title: "Innovation",
      body:
        "Capacity building, service redesign, and programme delivery for government ministries, departments, and development organisations — backed by WEF frameworks and with a track record of delivery on donor-funded national programmes.",
      icon: "/icon/Innovation.svg",
      btn: "Learn More",
      href: "/consulting#public-sector-innovation",
    },
    {
      eyebrow: "Workforce & Market",
      title: "Research",
      body:
        "Proprietary research products that generate commercial-grade insights on Pakistan's talent landscape and digital economy — published under WEF co-branding to maximise credibility and reach with government, investors, and multinationals.",
      icon: "/icon/Marketresearch.svg",
      btn: "Learn More",
      href: "/consulting#workforce-market-research",
    },
    {
      eyebrow: "International Market Entry",
      title: "Support",
      body:
        "The on-the-ground delivery partner for multinationals entering or scaling in Pakistan, Saudi Arabia, or UAE. Parwaaz provides the local market intelligence, regulatory navigation, partner identification, and operational setup that international firms need to move from decision to operations.",
      icon: "/icon/InternationalMarket.svg",
      btn: "Learn More",
      href: "/consulting#international-market-entry-support",
    },
    {
      eyebrow: "Programme & Project",
      title: "Management",
      body:
        "PMO-as-a-service for large national, regional, or organisational implementation programmes — providing the governance infrastructure, reporting discipline, and delivery accountability that complex multi-stakeholder programmes require but rarely have.",
      icon: "/icon/outsoursedhr.svg",
      btn: "Learn More",
      href: "/consulting#programme-project-management",
    },
  ],

  // ─────────────────────────────────────────────────────────────
  // TAB 5: Workspace, Design & Infrastructure
  // ─────────────────────────────────────────────────────────────
  "Workspace, Design & Infrastructure": [
    {
      eyebrow: "Office Setup &",
      title: "Accommodation",
      body:
        "End-to-end workspace and housing solutions for teams setting up in Pakistan or relocating internationally — handled entirely by Parwaaz so leadership can focus on the business. From identifying and negotiating the right space to handing over a fully furnished, operational office on day one.",
      icon: "/icon/Officesetup.svg",
      btn: "Learn More",
      href: "/workspace#office-setup-accommodation",
    },
    {
      eyebrow: "Architecture & Interior",
      title: "Design",
      body:
        "Professional architecture and interior design services from concept to construction documentation — for commercial offices, institutional buildings, residential developments, and hospitality projects. Delivered through our Design Synergies partnership with full design team capability.",
      icon: "/icon/Architecture.svg",
      btn: "Learn More",
      href: "/workspace#architecture-interior-design",
    },
    {
      eyebrow: "BIM & Digital",
      title: "Construction",
      body:
        "Building Information Modelling services that bring coordination, precision, and cost control to complex construction projects. BIM reduces design clashes, eliminates construction waste, and produces an accurate digital twin that supports facilities management for the building's lifetime.",
      icon: "/icon/digitalconstruction.svg",
      btn: "Learn More",
      href: "/workspace#bim-digital-construction",
    },
    {
      eyebrow: "Construction",
      title: "Management",
      body:
        "Professional management of construction projects from procurement through to handover — providing the owner with a single point of accountability for time, cost, and quality. Our construction management team has delivered commercial, institutional, and infrastructure projects across Pakistan.",
      icon: "/icon/ConstructionManagement.svg",
      btn: "Learn More",
      href: "/workspace#construction-management",
    },
    {
      eyebrow: "Fit-out &",
      title: "Refurbishment",
      body:
        "Turnkey commercial fit-out — from Cat A shell-and-core to fully furnished, branded, technology-enabled workspaces. Also specialist refurbishment of existing spaces, including MEP upgrades, structural modifications, and full interior renewal while minimising business disruption.",
      icon: "/icon/refurbishment.svg",
      btn: "Learn More",
      href: "/workspace#fit-out-refurbishment",
    },
    {
      eyebrow: "Workspace Technology",
      title: "Integration",
      body:
        "The digital infrastructure that makes modern workspaces productive — designed and installed as part of the fit-out process, not retrofitted afterwards. From enterprise connectivity and AV systems to access control, smart building management, and IoT integration.",
      icon: "/icon/workspace.svg",
      btn: "Learn More",
      href: "/workspace#workspace-technology-integration",
    },
  ],
};