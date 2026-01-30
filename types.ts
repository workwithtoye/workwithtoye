
export interface Project {
  id: string;
  title: string;
  description: string;
  year: string;
  category: string;
  image: string;
  tags: string[];
}

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
