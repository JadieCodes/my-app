"use client";
import { useState } from "react";
import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react";

const Projects = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A modern e-commerce solution with real-time inventory management and seamless checkout experience.",
      tags: ["React", "Node.js", "Stripe"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Design System",
      description:
        "Comprehensive component library with 100+ customizable components for enterprise applications.",
      tags: ["TypeScript", "Storybook", "Tailwind"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Analytics Dashboard",
      description:
        "Real-time data visualization platform with interactive charts and comprehensive reporting.",
      tags: ["React", "D3.js", "PostgreSQL"],
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Social Media App",
      description:
        "Feature-rich social platform with live messaging, media sharing, and advanced privacy controls.",
      tags: ["Next.js", "WebSocket", "Redis"],
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "AI Content Generator",
      description:
        "Intelligent content creation tool powered by machine learning for marketing and copywriting.",
      tags: ["Python", "OpenAI", "React"],
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      title: "Fitness Tracker",
      description:
        "Comprehensive health and fitness tracking application with personalized workout plans.",
      tags: ["React Native", "Firebase", "Charts"],
      gradient: "from-teal-500 to-green-500",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="projects" className="min-h-screen py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-center animate-fade-in">
            Featured <span className="text-gradient">Projects</span>
          </h2>

          <p className="text-xl text-muted-foreground text-center mb-16 animate-fade-in">
            A selection of my recent work and personal projects
          </p>

          <div className="space-y-6">
            {projects.map((project, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`group relative bg-card border border-border rounded-2xl transition-all duration-500 hover:border-accent hover:shadow-lg hover:shadow-accent/10 animate-fade-in overflow-hidden`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-700`}
                  />

                  {/* Accordion Header */}
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex justify-between items-center p-6 relative z-10 text-left"
                  >
                    <h3 className="text-2xl font-bold group-hover:text-gradient transition-all duration-300">
                      {project.title}
                    </h3>
                    {isOpen ? (
                      <ChevronUp className="text-accent transition-transform duration-300 rotate-0" />
                    ) : (
                      <ChevronDown className="text-accent transition-transform duration-300 rotate-0" />
                    )}
                  </button>

                  {/* Accordion Content */}
                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                      isOpen
                        ? "max-h-[400px] opacity-100 translate-y-0"
                        : "max-h-0 opacity-0 -translate-y-2"
                    }`}
                  >
                    <div className="p-6 pt-0 relative z-10 transition-all duration-500">
                      <p className="text-muted-foreground mb-4">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-secondary text-sm rounded-full border border-border group-hover:border-accent/50 transition-all duration-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-4">
                        <button className="flex items-center gap-2 text-sm hover:text-accent hover:translate-x-1 transition-all duration-300">
                          <ExternalLink size={16} />
                          Live Demo
                        </button>
                        <button className="flex items-center gap-2 text-sm hover:text-accent hover:translate-x-1 transition-all duration-300">
                          <Github size={16} />
                          Source Code
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
