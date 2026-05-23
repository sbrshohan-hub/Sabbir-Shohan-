export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  links: {
    live: string;
    dribbble?: string;
    behance?: string;
  };
  metrics?: { label: string; value: string }[];
  keyFeatures?: string[];
  role?: string;
  year?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string; // Markdown representation
  image: string;
  category: string;
  date: string;
  readTime: string;
  tags: string[];
  author: {
    name: string;
    avatar: string;
  };
  featured?: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string; // Dynamic rendering from Lucide Icons
  features: string[];
}

export interface Experience {
  id: string;
  year: string;
  role: string;
  company: string;
  description: string;
  skills: string[];
}
