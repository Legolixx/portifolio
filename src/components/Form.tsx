/* eslint-disable react/no-unescaped-entities */
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react";
import { sendEmail } from "@/actions/sendEmail";
import { useFormStatus } from "react-dom";
import { useToast } from "@/hooks/use-toast";
import React from "react";

const Form = () => {
  const { toast } = useToast();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const { error } = await sendEmail(formData);
    if (error) {
      toast({
        title: "Error",
        description: error,
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Success",
      description: "Email sent",
    });

    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
      <div className="relative flex items-center">
        <Input type="text" name="Name" placeholder="Name" />
        <User className="absolute right-6" size={20} />
      </div>
      <div className="relative flex items-center">
        <Input type="email" name="senderEmail" placeholder="Email" />
        <MailIcon className="absolute right-6" size={20} />
      </div>
      <div className="relative flex items-center">
        <Textarea name="message" placeholder="Type Your Message Here." />
        <MessageSquare className="absolute top-4 right-6" size={20} />
      </div>
      <SubmitButton />
    </form>
  );
};

export default Form;

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      className="flex gap-x-2 items-center justify-center h-[54px] rounded-full max-w-[166px]"
      type="submit"
      disabled={pending}
    >
      {pending ? "Sending..." : "Send Email"}
      <ArrowRightIcon size={16} />
    </Button>
  );
}
