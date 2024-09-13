import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";

interface QualificationItem {
  title: string;
  data: Array<{
    institution?: string;
    degree?: string;
    period?: string;
    company?: string;
    role?: string;
  }>;
}

interface SkillItem {
  title: string;
  data: Array<{
    name?: string;
    imgPath?: string;
  }>;
}

type AboutData = QualificationItem | SkillItem;

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Victor Fazekas",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+55 81 99658-0195",
  },
  {
    icon: <MailIcon size={20} />,
    text: "victorfazekas3@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 21 Mar, 1995",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Master on Mechanical Engineering",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "211 Casa Forte, PE, BR",
  },
];

const qualificationData: QualificationItem[] = [
  {
    title: "Education",
    data: [
      {
        institution: "FBV University",
        degree: "Bachelor's in Mechanical Engineering",
        period: "2016 - 2022",
      },
      {
        institution: "SENAI Institute of Technology",
        degree: "Technical Degree in Mechatronics",
        period: "2014 - 2017",
      },
    ],
  },
  {
    title: "Experience",
    data: [
      {
        company: "Pateo Hyundai",
        role: "Trainee Engineer",
        period: "2020 - 2022",
      },
      {
        company: "Toyolex Toyota",
        role: "Implementation Engineer",
        period: "2022",
      },
    ],
  },
];

const skillData: SkillItem[] = [
  {
    title: "skills",
    data: [
      {
        name: "HTML, CSS",
      },
      {
        name: "Front-end Development",
      },
      {
        name: "Javascript",
      },
      {
        name: "Back-end Development",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/figma.svg",
      },
      {
        imgPath: "/about/notion.svg",
      },
      {
        imgPath: "/about/wordpress.svg",
      },
    ],
  },
];

const getData = (arr: AboutData[], title: string) => {
  return arr.find((item) => item.title === title);
};

const About = () => {
  return (
    <section className="xl:h-[860px] py-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About me
        </h2>
        <div>
          <div>
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc="/about/developer.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
