import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";
import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";
import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-20 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Web Developer
            </div>
            <h1 className="h1 mb-4">Hello, my name is Victor Fazekas</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              A Junior Full-Stack Developer specializing in React and AWS. With
              a background in industrial mechatronics and mechanical
              engineering, I bring a problem-solving mindset and precision to
              building dynamic web applications.
            </p>
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact me <Send size={18} />
                </Button>
              </Link>
              <Button variant="outline" className="gap-x-2">
                Download CV
                <Download size={18} />
              </Button>
            </div>

            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>
          <div className="hidden xl:flex relative">
            <Badge
              containerStyles="absolute top-[8%] -left-[3em]"
              icon={<RiBriefcase4Fill />}
              endCountNum={1}
              badgeText="Years Of Experience"
              endCountText=""
            />
            <Badge
              containerStyles="absolute top-[65%] -left-[0.5em]"
              icon={<RiTodoFill />}
              endCountNum={20}
              badgeText="Finished Projects"
              endCountText=""
            />
            <Badge
              containerStyles="absolute top-[35%] -right-[6em]"
              icon={<RiTeamFill />}
              endCountNum={10}
              badgeText="Happy Clients"
              endCountText=""
            />
            <div className="bg-hero_shape2_light w-[500px] h-[500px] bg-no-repeat absolute -top-10 -right-10"></div>
            <DevImg
              containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom -top-10 -right-10"
              imgSrc="/hero/developer.png"
            />
          </div>
        </div>
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
