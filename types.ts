
export interface ExperienceItem {
  period: string;
  company: string;
  position: string;
  description: string;
  details: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: string;
}

export interface StatItem {
  label: string;
  value: string;
}
