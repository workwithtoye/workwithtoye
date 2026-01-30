
import { Project, Post } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Penthel UX Strategy',
    description: 'Strategic implementation of journey mapping and persuasion psychology to boost website traffic by 20% and conversion rates by 15%.',
    year: '2024',
    category: 'Content Strategy',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop',
    tags: ['UX Writing', 'Journey Mapping', 'Persuasion Psych']
  },
  {
    id: '2',
    title: 'DCFPI Digital Audit',
    description: 'Comprehensive content audit and information architecture restructuring, resulting in a 35% increase in site traffic and engagement.',
    year: '2024',
    category: 'Information Architecture',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop',
    tags: ['Accessibility', 'SEO', 'Data Analytics']
  },
  {
    id: '3',
    title: 'Wellness Program Launch',
    description: 'Developing content models and utilizing user research to drive a 20% engagement boost for the Carers Network Ireland wellness initiative.',
    year: '2023',
    category: 'Product Design',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2000&auto=format&fit=crop',
    tags: ['User Research', 'Content Modeling', 'Community']
  }
];

export const POSTS: Post[] = [
  {
    id: 'p1',
    title: 'The Psychology of Persuasion in UX',
    excerpt: 'How understanding cognitive biases and tone can significantly improve conversion rates in digital products.',
    date: 'March 2024',
    readTime: '6 min'
  },
  {
    id: 'p2',
    title: 'Designing for Accessibility & SEO',
    excerpt: 'Why semantic information architecture is the foundation of both search visibility and inclusive user experiences.',
    date: 'Jan 2024',
    readTime: '8 min'
  }
];

export const BIO = "Olutoyese Oyedepo is a Content Strategist and UX Designer based in Dublin. With a background in Emerging Media and English, he specializes in boosting conversion rates and optimizing user journeys through research-backed design and multimedia storytelling. Currently shaping content strategy at Penthel.";

export const EXPERIENCE = [
  { company: 'Penthel', role: 'Content Strategist', period: 'Feb 2024 — Present' },
  { company: 'DC Fiscal Policy Institute', role: 'Content Designer', period: 'Jan 2024 — Mar 2024' },
  { company: 'Carers Network Ireland', role: 'Communication Lead', period: 'Apr 2023 — Oct 2023' },
  { company: 'FMI Ireland', role: 'CRM Executive', period: 'Aug 2022 — Jun 2023' },
  { company: 'GetIn Consulting', role: 'Digital Marketing Manager', period: 'Apr 2020 — Jul 2021' },
];

export const EDUCATION = [
  { institution: 'Dublin City University', degree: 'M.Sc Emerging Media', period: '2023' },
  { institution: 'Obafemi Awolowo University', degree: 'B.A. English', period: '2016' },
];
