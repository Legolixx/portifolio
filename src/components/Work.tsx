"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import ProjectCard from "@/components/ProjectCard";

interface DataProject {
  image: string;
  category: string;
  name: string;
  description: string;
  link: string;
  github: string;
}

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
    category: "next js",
    name: "ESG System for MTR Control",
    description:
      "Manage the Material Transfer Record (MTR) as part of a company's ESG initiatives.",
    link: "/projects",
    github: "/",
  },
];

const Work = () => {
  return (
    <section className="relative mb-20 xl:mb-48">
      <div className="container mx-auto">
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">
            I am constantly working on exciting projects that blend technology,
            creativity, and problem-solving. Here’s a glimpse of some of my most
            recent work:
          </p>
          <Link href="/projects">
            <Button>All projects</Button>
          </Link>
        </div>
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0 xl:pr-10">
          <Swiper
            className="h-[480px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {projectData.slice(0, 4).map((project: DataProject, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
