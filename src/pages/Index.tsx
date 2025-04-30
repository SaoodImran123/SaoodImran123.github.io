import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

interface ResumeData {
  personalInfo: {
    name: string;
    tagline: string;
    email: string;
    linkedin: string;
    github: string;
    website?: string; // Optional website
    profilePicture?: string; // Placeholder for profile picture URL
  };
  summary: string;
  experience: Array<{
    title: string;
    company: string;
    location: string;
    years: string;
    description: string[];
    companyLogo?: string; // Placeholder for company logo URL
  }>;
  education: Array<{
    degree: string;
    institution: string;
    location: string;
    years: string;
    details?: string;
    institutionLogo?: string; // Placeholder for institution logo URL
  }>;
  skills: string[];
  projects: Array<{
    name: string;
    description: string;
    technologies: string[];
    link?: string;
    image?: string; // Placeholder for project image URL
  }>;
}

const Index = () => {
  const [resumeData, setResumeData] = useState<ResumeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Add metadata for SEO
  React.useEffect(() => {
    document.title = "Saood Imran | Full-Stack Web Developer";
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Saood Imran is a full-stack web developer specializing in building efficient, scalable, and user-friendly web applications.';
    document.head.appendChild(metaDescription);

    return () => {
      document.head.removeChild(metaDescription);
    };
  }, []);

  // Fetch resume data
  useEffect(() => {
    fetch('/data/resume.json')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setResumeData(data as ResumeData);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching resume data:", err);
        setError('Failed to load resume data.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="min-h-screen flex justify-center items-center">Loading...</div>; // Basic loading indicator
  }

  if (error) {
    return <div className="min-h-screen flex justify-center items-center text-red-500">Error: {error}</div>; // Basic error message
  }

  if (!resumeData) {
    return <div className="min-h-screen flex justify-center items-center">No resume data found.</div>; // Handle case where data is null after loading
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar personalInfo={resumeData.personalInfo} />
      <main>
        <Hero personalInfo={resumeData.personalInfo} />
        <About summary={resumeData.summary} profilePicture={resumeData.personalInfo.profilePicture} />
        <Projects projects={resumeData.projects} />
        <Experience experience={resumeData.experience} />
        <Skills skills={resumeData.skills} />
        <Contact personalInfo={resumeData.personalInfo} />
      </main>
      <Footer personalInfo={resumeData.personalInfo} />
      <Toaster />
    </div>
  );
};

export default Index;
