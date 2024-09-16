import Image from "next/image";
import DevImg from "./DevImg";
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
        period: "2022 - Present",
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
        <div className="flex flex-col xl:flex-row">
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc="/about/developer.png"
            />
          </div>
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualifications"
                >
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skill">
                  Skills
                </TabsTrigger>
              </TabsList>
              <div className="text-lg mt-40 xl:mt-8">
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">
                      Unmatched Service Quality for Over 10 Years
                    </h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      I specialize in crafting intuitive websites with
                      cutting-edge tech, delivering dynamic and engaging user
                      experiences.
                    </p>
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className="flex items-center gap-x-4 mx-auto xl:mx-0"
                            key={index}
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Language Skill</div>
                      <div className="border-b border-border xl:max-w-[600px]"></div>
                      <div>Portuguese, English, Spanish</div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      My Awesome Journey
                    </h3>
                    <div className="grid md:grid-cols-2 gap-y-8">
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "Experience")?.title}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "Experience")?.data.map(
                            (item, index) => {
                              if ("company" in item) {
                                const { company, role, period } = item;
                                return (
                                  <div
                                    className="flex gap-x-8 group"
                                    key={index}
                                  >
                                    <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                      <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                    </div>
                                    <div>
                                      <div className="font-semibold text-xl leading-none mb-2">
                                        {company}
                                      </div>
                                      <div className="text-lg leading-none text-muted-foreground mb-4">
                                        {role}
                                      </div>
                                      <div className="text-base font-medium">
                                        {period}
                                      </div>
                                    </div>
                                  </div>
                                );
                              }
                            }
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "Education")?.title}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "Education")?.data.map(
                            (item, index) => {
                              if ("institution" in item) {
                                const { institution, degree, period } = item;
                                return (
                                  <div
                                    className="flex gap-x-8 group"
                                    key={index}
                                  >
                                    <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                      <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                    </div>
                                    <div>
                                      <div className="font-semibold text-xl leading-none mb-2">
                                        {institution}
                                      </div>
                                      <div className="text-lg leading-none text-muted-foreground mb-4">
                                        {degree}
                                      </div>
                                      <div className="text-base font-medium">
                                        {period}
                                      </div>
                                    </div>
                                  </div>
                                );
                              }
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="skill">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">Tools I Use Everyday</h3>
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2">
                        Skills
                      </h4>
                      <div className="border-b border-border mb-4"></div>
                      <div>
                        {getData(skillData, "skills")?.data.map(
                          (item: { name?: string }, index) => {
                            const { name } = item;
                            return (
                              <div
                                className="w-2/4 text-center xl:text-left mx-auto xl:mx-0"
                                key={index}
                              >
                                <div className="font-medium">{name}</div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold mb-2 xl:text-left">
                        Tools
                      </h4>
                      <div className="border-b border-border mb-4"></div>
                      <div className="flex gap-x-8 justify-center xl:justify-start">
                        {getData(skillData, "tools")?.data.map(
                          (item: { imgPath?: string }, index) => {
                            const { imgPath } = item;
                            return (
                              <div className="" key={index}>
                                <Image
                                  src={imgPath as string}
                                  width={48}
                                  height={48}
                                  alt="skill_icon"
                                  priority
                                />
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
