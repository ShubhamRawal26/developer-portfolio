export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  category: 'Frontend' | 'Fullstack' | 'Mobile' | 'AI & Data';
  image: string;
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  metrics?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string[];
  tags: string[];
}

export interface Skill {
  name: string;
  level: number; // percentage 0-100
  category: 'Frontend' | 'Backend' | 'DevOps & Tools' | 'Specialized';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  text: string;
}
