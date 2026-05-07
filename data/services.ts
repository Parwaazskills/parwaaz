import {
  FileText,
  Hammer,
  Monitor,
  Lightbulb,
  BookOpen,
  Users,
  Award,
  Briefcase,
  ClipboardList,
  BarChart3,
  LineChart,
  PieChart,
  Target,
  CheckCircle2,
  TrendingUp,
  MessageSquare,
  Smile,
  Globe,
  Database,
  GraduationCap,
  Mail,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

import {
  OfficeChair,
  PayrollIcon,
  ServiceIcon,
} from "@/components/ServiceIcons";

export type ServiceItem = {
  eyebrow: string;
  title: string;
  body: string;
  icon:
    | LucideIcon
    | typeof OfficeChair
    | typeof PayrollIcon
    | typeof ServiceIcon;
  btn: string;
};

export const servicesData: Record<string, ServiceItem[]> = {
  Training: [
    {
      eyebrow: "Office Accommodation",
      title: "Services",
      body:
        "End-to-end workspace and accommodation solutions to support your team's productivity. From office setup to housing, we handle all logistics for a seamless experience.",
      icon: OfficeChair,
      btn: "Learn More",
    },

    {
      eyebrow: "Design & Construction",
      title: "Management",
      body:
        "Delivering comprehensive project support from concept to completion. Our services include architecture, BIM modeling, and construction management to ensure your projects are executed with precision.",
      icon: Hammer,
      btn: "Learn More",
    },

    {
      eyebrow: "Customized Technology",
      title: "Solutions",
      body:
        "Providing bespoke technology solutions designed to meet your unique business needs. Our team of experts specializes in developing custom programs and systems that not only drive innovation but also ensure sustainable growth and success for your business.",
      icon: Monitor,
      btn: "Learn More",
    },

    {
      eyebrow: "Coursera &",
      title: "Digital Learning",
      body:
        "World-class skills through global partnerships like Coursera. Tailored programs for modern professionals.",
      icon: FileText,
      btn: "Learn More",
    },

    {
      eyebrow: "International Recruitment",
      title: "& Payroll",
      body:
        "Connecting top Pakistani talent with global opportunities. We provide comprehensive recruitment and manpower solutions to meet the needs of international partners.",
      icon: PayrollIcon,
      btn: "Learn More",
    },

    {
      eyebrow: "Payroll, Contract & Visa Management",
      title: "Services",
      body:
        "Empowering Pakistan's workforce with world-class skills through global partnerships like Coursera. Unlock new career opportunities with tailored programs designed for modern professionals.",
      icon: ServiceIcon,
      btn: "Learn More",
    },
  ],

  "HR services": [
    {
      eyebrow: "Talent Acquisition &",
      title: "Recruitment",
      body:
        "End-to-end recruitment from sourcing to onboarding. Build high-performing teams aligned with your goals.",
      icon: Users,
      btn: "Get Started",
    },

    {
      eyebrow: "Performance &",
      title: "Employee Engagement",
      body:
        "Boost productivity with engagement programs, performance reviews and culture-building that drives retention.",
      icon: Award,
      btn: "Get Started",
    },

    {
      eyebrow: "Compensation &",
      title: "Benefits Strategy",
      body:
        "Design competitive packages and benefits programs to attract and retain top talent in your industry.",
      icon: Briefcase,
      btn: "Get Started",
    },

    {
      eyebrow: "HR Policy &",
      title: "Compliance Audit",
      body:
        "Review HR policies, contracts and procedures for legal compliance. Stay aligned with labor laws and best practices.",
      icon: ClipboardList,
      btn: "Get Started",
    },

    {
      eyebrow: "Learning &",
      title: "Development Programs",
      body:
        "Custom L&D roadmaps tied to business goals. Upskill your people and build internal pipelines for key roles.",
      icon: GraduationCap,
      btn: "Get Started",
    },

    {
      eyebrow: "HR Tech &",
      title: "HRIS Implementation",
      body:
        "Modernize HR with the right HRIS, ATS and payroll tools. We handle selection, setup and team training.",
      icon: Database,
      btn: "Get Started",
    },
  ],

  Reports: [
    {
      eyebrow: "Market Intelligence &",
      title: "Industry Reports",
      body:
        "Detailed market analysis covering trends, competitive landscape and growth opportunities backed by data.",
      icon: BarChart3,
      btn: "Download Sample",
    },

    {
      eyebrow: "Financial Performance",
      title: "Analytics",
      body:
        "Comprehensive reports with revenue analysis, profitability insights and forecasting tailored to your KPIs.",
      icon: LineChart,
      btn: "Download Sample",
    },

    {
      eyebrow: "Workforce &",
      title: "HR Analytics",
      body:
        "Workforce trends, productivity metrics and engagement scores via detailed analytics dashboards.",
      icon: PieChart,
      btn: "Download Sample",
    },

    {
      eyebrow: "Competitor &",
      title: "Benchmark Reports",
      body:
        "Side-by-side comparisons with industry leaders. Spot gaps, replicate wins and sharpen your competitive edge.",
      icon: Target,
      btn: "Download Sample",
    },

    {
      eyebrow: "Diversity &",
      title: "Inclusion Reports",
      body:
        "Track DEI metrics across hiring, pay and promotion. Quantify progress and identify where to focus next.",
      icon: CheckCircle2,
      btn: "Download Sample",
    },

    {
      eyebrow: "Training Impact &",
      title: "ROI Reports",
      body:
        "Measure the business impact of every training program. Connect learning spend to performance outcomes.",
      icon: TrendingUp,
      btn: "Download Sample",
    },
  ],

  Surveys: [
    {
      eyebrow: "Employee",
      title: "Satisfaction Surveys",
      body:
        "Measure morale, engagement and culture fit. Get actionable insights to improve workplace experience.",
      icon: MessageSquare,
      btn: "Run Survey",
    },

    {
      eyebrow: "Customer Experience &",
      title: "NPS Surveys",
      body:
        "Track satisfaction with NPS, CSAT and feedback collection systems built for modern businesses.",
      icon: Target,
      btn: "Run Survey",
    },

    {
      eyebrow: "Market Research &",
      title: "Consumer Insights",
      body:
        "Large-scale research surveys to validate ideas, understand consumer behavior and identify opportunities.",
      icon: ClipboardList,
      btn: "Run Survey",
    },

    {
      eyebrow: "Pulse &",
      title: "Quick-Check Surveys",
      body:
        "Short, frequent surveys to take the team's pulse on morale, focus and blockers without survey fatigue.",
      icon: Smile,
      btn: "Run Survey",
    },

    {
      eyebrow: "Exit &",
      title: "Offboarding Surveys",
      body:
        "Capture honest feedback from departing employees. Spot retention issues before they cost you more talent.",
      icon: Users,
      btn: "Run Survey",
    },

    {
      eyebrow: "Brand &",
      title: "Reputation Tracking",
      body:
        "Monitor how your brand is perceived in the market. Track sentiment, awareness and advocacy over time.",
      icon: Globe,
      btn: "Run Survey",
    },
  ],
};