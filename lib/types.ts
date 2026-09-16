export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: 'layout' | 'code' | 'sparkles' | 'trending-up';
  capabilities: string[];
  detailedOverview: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  number: string;
  name: string;
  title: string;
  category: string;
  description: string;
  challenge: string;
  solution: string;
  techStack: string[];
  metrics: ProjectMetric[];
  services: string[];
  year: string;
  image: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}
