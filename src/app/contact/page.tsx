/* eslint-disable react/no-unescaped-entities */
import FormEmail from "@/components/Form";
import { MailIcon, HomeIcon, PhoneCall } from "lucide-react";

const ContactPage = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="grid xl:grid-cols-2 pt-12 xl:h-[400px] mb-6 xl:mb-16">
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Say Hello ✌
            </div>
            <h1 className="h1 max-w-md mb-8">Let's Work together.</h1>
            <p className="subtitle max-w-[400px]">
              I’m always excited to collaborate on new and challenging projects.
              Feel free to reach out, and let’s create something amazing!
            </p>
          </div>
          <div className="hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat"></div>
        </div>
        <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
          <div className="flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg">
            <div className="flex items-center gap-x-8">
              <MailIcon size={18} className="text-primary" />
              <div>victorfazekas3@gmail.com</div>
            </div>
            <div className="flex items-center gap-x-8">
              <HomeIcon size={18} className="text-primary" />
              <div>Recife, Pernambuco, Brazil</div>
            </div>
            <div className="flex items-center gap-x-8">
              <PhoneCall size={18} className="text-primary" />
              <div>+55 81 99658-0195</div>
            </div>
          </div>
          <FormEmail />
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
