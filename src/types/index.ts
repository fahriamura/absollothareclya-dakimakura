export interface NavItem {
  id: string;
  label: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface LearningResource {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  collab: string;
  avatar: string;
  link : string;
}

export interface ProgrammingLanguage {
  name: string;
  description: string;
  lazyLevel: number;
}
