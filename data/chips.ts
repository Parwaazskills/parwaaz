import { Lightbulb, Code2, FileText, GraduationCap, Database, Image as ImageIcon } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Chip = {
  label: string;
  icon: LucideIcon;
};

export const chips: Chip[] = [
  { label: "Brainstorm", icon: Lightbulb },
  { label: "Code", icon: Code2 },
  { label: "Summarize text", icon: FileText },
  { label: "Get advice", icon: GraduationCap },
  { label: "Analyze data", icon: Database },
  { label: "Analyze images", icon: ImageIcon },
];