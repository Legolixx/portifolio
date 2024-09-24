"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";


const projectData = [
  {
    image: "/work/3.png",
    category: "Next js",
    name: "SmartFinances",
    description:
      "A finance management app helping users track expenses and set budgets effectively.",
    link: "/projects",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "Next js",
    name: "Pate Hyundai Warranty System",
    description:
      "A SaaS tool simplifying warranty management for car dealerships.",
    link: "/projects",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "React js",
    name: "Ecommerce Platform",
    description:
      "A modern and scalable platform designed for seamless online shopping experiences.",
    link: "/projects",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "Next js",
    name: "ESG System for MTR Control",
    description:
      "A system developed to monitor and manage the Material Transfer Record (MTR) as part of a company's ESG initiatives.",
    link: "/projects",
    github: "/",
  },
];

const uniqueCategories = [
  "all projects",
  ...Array.from(new Set(projectData.map((item) => item.category))),
];

const ProjectsPage = () => {
  const [categories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");

  const filteredProjects = projectData.filter((project) => {
    return category === "all projects"
      ? project
      : project.category === category;
  });


  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        <Tabs defaultValue={category} className="mb-24">
          <TabsList className="w-full grid h-full md:grid-cols-3 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  key={index}
                  value={category}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-2 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default ProjectsPage;
