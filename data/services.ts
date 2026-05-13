import {
  Briefcase,
  Target,
  BarChart3,
  FileSearch,
  TrendingUp,
  Lightbulb,
  Building2,
  Sofa,
  Server,
  Sparkles,
  Wrench,
  Leaf,
} from "lucide-react";

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
      href: "#",
    },
    {
      eyebrow: "International AI",
      title: "Partner Solutions",
      body:
        "Broker and integrate global AI infrastructure — connecting enterprises to leading international AI platforms with Parwaaz as trusted integrator.",
      icon: "/icons/international-ai-partner.svg",
      btn: "Learn More",
      href: "#",
    },
    {
      eyebrow: "Generative AI &",
      title: "LLM Deployment",
      body:
        "Empowering Pakistan's workforce with world-class skills through global partnerships like Coursera. Unlock new career opportunities with tailored programs designed for modern professionals.",
      icon: "/icons/generative-ai-llm.svg",
      btn: "Learn More",
      href: "#",
    },
    {
      eyebrow: "Process",
      title: "Automation",
      body:
        "Automate repetitive workflows across business functions using RPA combined with AI — smarter, adaptive automation that scales.",
      icon: "/icons/process-automation.svg",
      btn: "Learn More",
      href: "#",
    },
    {
      eyebrow: "Custom Technology",
      title: "Development",
      body:
        "Bespoke software and systems built for your specific requirements — from MVP to enterprise-scale platforms tailored to your market.",
      icon: "/icons/custom-technology-development.svg",
      btn: "Learn More",
      href: "#",
    },
    {
      eyebrow: "AI Governance &",
      title: "Compliance",
      body:
        "Ensure AI deployments are responsible, auditable, and aligned to organisational and regulatory standards from day one.",
      icon: "/icons/ai-governance-compliance.svg",
      btn: "Learn More",
      href: "#",
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
      href: "#",
    },
    {
      eyebrow: "Learning Programme",
      title: "Design",
      body:
        "Build evidence-based learning journeys mapped to real workforce needs — from curriculum architecture to delivery roadmaps that move the metrics that matter.",
      icon: "/icons/learning-programme-design.svg",
      btn: "Learn More",
      href: "#",
    },
    {
      eyebrow: "Platform Deployment",
      title: "& LMS",
      body:
        "Full Coursera enterprise licensing, setup, and integration as Pakistan's exclusive B2B Coursera partner — or connect Coursera to existing HR systems.",
      icon: "/icons/platform-deployment-lms.svg",
      btn: "Learn More",
      href: "#",
    },
    {
      eyebrow: "Credentials &",
      title: "Certification",
      body:
        "Issue globally recognised credentials and digital certifications that validate workforce capability and travel across employers, sectors, and borders.",
      icon: "/icons/credentials-certification.svg",
      btn: "Learn More",
      href: "#",
    },
    {
      eyebrow: "Workforce Reskilling",
      title: "& Upskilling",
      body:
        "Structured cohort programmes that move employees from current to future capability — in AI, data, digital tools, and leadership.",
      icon: "/icons/workforce-reskilling-upskilling.svg",
      btn: "Learn More",
      href: "#",
    },
    {
      eyebrow: "Learning Impact & Skills",
      title: "Intelligence",
      body:
        "Measure what learning actually changes — capability lift, completion rates, business outcomes, and ROI — in boardroom-ready reporting.",
      icon: "/icons/learning-impact-intelligence.svg",
      btn: "Learn More",
      href: "#",
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
      href: "#",
    },
    {
      eyebrow: "Payroll & Contract",
      title: "Management",
      body:
        "Full employer-of-record and payroll management — handling compliance, taxes, and legal requirements across multiple jurisdictions.",
      icon: "/icons/payroll-contract-management.svg",
      btn: "Get Started",
      href: "#",
    },
    {
      eyebrow: "Visa & Immigration",
      title: "Services",
      body:
        "Complete visa processing, immigration support, and legal documentation for smooth international workforce deployment with full compliance.",
      icon: "/icons/visa-immigration-services.svg",
      btn: "Get Started",
      href: "#",
    },
    {
      eyebrow: "Workforce Deployment &",
      title: "Settling-in",
      body:
        "End-to-end relocation support — ensuring deployed employees are housed, onboarded, and fully productive from their first day.",
      icon: "/icons/workforce-deployment-settling-in.svg",
      btn: "Get Started",
      href: "#",
    },
    {
      eyebrow: "Talent Intelligence &",
      title: "Analytics",
      body:
        "Data-driven insights on talent availability, mobility trends, and workforce planning to inform smarter hiring and deployment decisions.",
      icon: "/icons/talent-intelligence-analytics.svg",
      btn: "Get Started",
      href: "#",
    },
    {
      eyebrow: "Outsourced HR & People",
      title: "Operations",
      body:
        "Fully managed HR functions for companies that need professional people operations without the overhead of building an in-house HR team.",
      icon: "/icons/outsourced-hr-operations.svg",
      btn: "Get Started",
      href: "#",
    },
  ],

  // ─────────────────────────────────────────────────────────────
  // TAB 4: Consulting, Advisory & Research
  // (Placeholder content + lucide icons — update when final copy/SVGs arrive)
  // ─────────────────────────────────────────────────────────────
  "Consulting, Advisory & Research": [
    {
      eyebrow: "Strategic Business",
      title: "Consulting",
      body:
        "Helping organisations navigate market entry, partnerships, growth strategy, and operational transformation across emerging markets.",
      icon: Briefcase,
      btn: "Learn More",
      href: "#",
    },
    {
      eyebrow: "Executive",
      title: "Advisory",
      body:
        "Trusted advisory support for leadership teams — covering strategy execution, organisational design, and performance acceleration.",
      icon: Target,
      btn: "Learn More",
      href: "#",
    },
    {
      eyebrow: "Market",
      title: "Research",
      body:
        "Sector intelligence, competitor benchmarking, and workforce insights — turning raw data into actionable strategic decisions.",
      icon: BarChart3,
      btn: "Learn More",
      href: "#",
    },
    {
      eyebrow: "Policy & Public",
      title: "Research",
      body:
        "Evidence-based research supporting governments, multilaterals, and policy bodies on workforce, education, and economic development.",
      icon: FileSearch,
      btn: "Learn More",
      href: "#",
    },
    {
      eyebrow: "Impact",
      title: "Assessment",
      body:
        "Measure programme outcomes and long-term impact through structured evaluation frameworks aligned to international standards.",
      icon: TrendingUp,
      btn: "Learn More",
      href: "#",
    },
    {
      eyebrow: "Feasibility &",
      title: "Due Diligence",
      body:
        "Independent feasibility studies, due diligence reviews, and investment readiness assessments for projects and partnerships.",
      icon: Lightbulb,
      btn: "Learn More",
      href: "#",
    },
  ],

  // ─────────────────────────────────────────────────────────────
  // TAB 5: Workspace, Design & Infrastructure
  // (Placeholder content + lucide icons — update when final copy/SVGs arrive)
  // ─────────────────────────────────────────────────────────────
  "Workspace, Design & Infrastructure": [
    {
      eyebrow: "Workspace",
      title: "Design",
      body:
        "Designing modern, productive work environments — from concept and space planning through to detailed architectural execution.",
      icon: Building2,
      btn: "Learn More",
      href: "#",
    },
    {
      eyebrow: "Interior &",
      title: "Fit-out",
      body:
        "Full interior fit-out delivery — finishes, furniture, lighting, and brand-aligned environments built to international quality standards.",
      icon: Sofa,
      btn: "Learn More",
      href: "#",
    },
    {
      eyebrow: "IT",
      title: "Infrastructure",
      body:
        "Network, server, security, and connectivity infrastructure designed for performance, resilience, and enterprise-grade reliability.",
      icon: Server,
      btn: "Learn More",
      href: "#",
    },
    {
      eyebrow: "Smart Office",
      title: "Solutions",
      body:
        "IoT-enabled workspaces — smart access, occupancy intelligence, energy management, and integrated meeting room technology.",
      icon: Sparkles,
      btn: "Learn More",
      href: "#",
    },
    {
      eyebrow: "Facility",
      title: "Management",
      body:
        "Day-to-day facility operations, maintenance, and workplace services — keeping your environment running at peak efficiency.",
      icon: Wrench,
      btn: "Learn More",
      href: "#",
    },
    {
      eyebrow: "Sustainability &",
      title: "Green Design",
      body:
        "Energy-efficient, sustainable workspace solutions aligned to LEED, WELL, and net-zero workplace standards.",
      icon: Leaf,
      btn: "Learn More",
      href: "#",
    },
  ],
};