
import React from 'react';
import { Project, ProjectCategory } from './types';

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
];

export const FAQ_DATA = [
    {
        question: "What services do you offer?",
        answer: "I offer a range of creative services including custom web design & development, 2D illustration (character design, concept art), 3D modeling & rendering, and 2D/3D animation for explainer videos, logos, and more."
    },
    {
        question: "What is your design process?",
        answer: "My process is collaborative and starts with a deep dive into your goals. It typically involves discovery and research, wireframing/storyboarding, visual design, development/animation, and finally, revisions and delivery to ensure the final product exceeds your expectations."
    },
    {
        question: "How long does a project typically take?",
        answer: "Project timelines vary greatly depending on the scope and complexity. A simple website might take 4-6 weeks, while a complex animation could take several months. I provide a detailed timeline after our initial consultation."
    },
    {
        question: "How do I get a quote for my project?",
        answer: "The best way to get a quote is to fill out the contact form below with as much detail as possible about your project. I'll review your request and get back to you within 1-2 business days to schedule a free consultation."
    }
]

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'E-commerce Platform',
    category: ProjectCategory.WEB_DESIGN,
    imageUrl: 'https://picsum.photos/seed/project1/600/400',
    description: 'A modern, responsive e-commerce site with a focus on user experience.',
  },
  {
    id: 2,
    title: 'Character Concept Art',
    category: ProjectCategory.ILLUSTRATION_2D,
    imageUrl: 'https://picsum.photos/seed/project2/600/400',
    description: 'Vibrant character designs for a new indie game.',
  },
  {
    id: 3,
    title: 'Product Visualization',
    category: ProjectCategory.ILLUSTRATION_3D,
    imageUrl: 'https://picsum.photos/seed/project3/600/400',
    description: 'Photorealistic 3D renders of a new tech gadget.',
  },
  {
    id: 4,
    title: 'Explainer Video',
    category: ProjectCategory.ANIMATION,
    imageUrl: 'https://picsum.photos/seed/project4/600/400',
    description: 'An engaging 2D animated video for a startup.',
  },
  {
    id: 5,
    title: 'Corporate Branding',
    category: ProjectCategory.WEB_DESIGN,
    imageUrl: 'https://picsum.photos/seed/project5/600/400',
    description: 'Complete brand identity and website for a corporate client.',
  },
  {
    id: 6,
    title: 'Architectural Render',
    category: ProjectCategory.ILLUSTRATION_3D,
    imageUrl: 'https://picsum.photos/seed/project6/600/400',
    description: 'A stunning 3D visualization of a modern home.',
  },
  {
    id: 7,
    title: 'Logo Motion Graphics',
    category: ProjectCategory.ANIMATION,
    imageUrl: 'https://picsum.photos/seed/project7/600/400',
    description: 'A dynamic logo animation for a creative agency.',
  },
  {
    id: 8,
    title: 'Digital Painting Series',
    category: ProjectCategory.ILLUSTRATION_2D,
    imageUrl: 'https://picsum.photos/seed/project8/600/400',
    description: 'A series of detailed fantasy landscapes.',
  },
   {
    id: 9,
    title: 'Mobile App UI/UX',
    category: ProjectCategory.WEB_DESIGN,
    imageUrl: 'https://picsum.photos/seed/project9/600/400',
    description: 'Intuitive and beautiful interface design for a new mobile app.',
  },
];

export const FacebookIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
       <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
       <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
    </svg>
);

export const InstagramIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
       <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
       <rect x="4" y="4" width="16" height="16" rx="4"></rect>
       <circle cx="12" cy="12" r="3"></circle>
       <line x1="16.5" y1="7.5" x2="16.5" y2="7.501"></line>
    </svg>
);

export const XIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
       <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
       <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
       <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
    </svg>
);