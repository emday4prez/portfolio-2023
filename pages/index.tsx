import Head from 'next/head';
import { Inter } from '@next/font/google';
import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import Education from '@/components/Education';
import portfolioData from '../data.json';
import educations from '../educations.json';
import Contact from '@/components/Contact';
import WordCloud from '@/components/WordCloud';
import SkillsDisplay from '@/components/Skills';
import ParallaxHeader from '@/components/ParallaxHeader';
import ProjectList from '@/components/ProjectsList';
const inter = Inter({ subsets: ['latin'] });

interface Skill {
  name: string;
}

interface Project {
  title: string;
  description: string;
  url: string;
  technologies: string[];
}

interface Contact {
  email: string;
  phone: string;
  location: string;
  image_url: string;
  linkedin_url: string;
  github_url: string;
}

interface PortfolioData {
  name: string;
  bio: string;
  skills: Skill[];
  projects: Project[];
  contact: Contact;
}

export default function Home() {
  const { name, bio, skills, projects, contact } =
    portfolioData as PortfolioData;

  return (
    <>
      <Head>
        <title>Emerson Day</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <WordCloud />

      <div className="bg-gradient-to-b from-slate-500 to-slate-100 p-10">
        <h2 className="text-xl font-medium text-slate-900 mt-10">Projects</h2>

        <ul className="mt-2 -mx-4 grid md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <li key={index} className="text-sm text-gray-600">
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
        <Education educations={educations} />
        <Contact contact={contact} />
      </div>
    </>
  );
}
