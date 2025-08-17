import { Github, Linkedin, MailIcon, MessageCircle, Phone } from "lucide-react";
import ContactItem from "./ContactItem";
import Image from "next/image";

function ContactLinks() {
  return (
    <div className="flex flex-col gap-5 xl:gap-[1vw]">
      <ContactItem
        title="Email"
        details="ghaly140302@gmail.com"
        href="mailto:ghaly140302@gmail.com"
      >
        <MailIcon className="h-9 w-9 text-gray-100 xl:h-[2.8vw] xl:w-[2.8vw]" />
      </ContactItem>
      <ContactItem
        title="Phone"
        details="+20 1100286256"
        href="tel:+201100286256"
      >
        <Phone className="h-9 w-9 text-gray-100 xl:h-[2.8vw] xl:w-[2.8vw]" />
      </ContactItem>
      <ContactItem
        title="LinkedIn"
        details="mohammed-ghaly-16a401150"
        href="https://www.linkedin.com/in/mohammed-ghaly-16a401150"
        target="_blank"
      >
        <Linkedin className="h-9 w-9 text-gray-100 xl:h-[2.8vw] xl:w-[2.8vw]" />
      </ContactItem>
      <ContactItem
        title="WhatsApp"
        details="+20 1100286256"
        href="https://wa.me/201100286256"
        target="_blank"
      >
        <div className="">
          <Image
            width={36}
            height={36}
            src="/whatsapp.svg"
            alt="WhatsApp"
            className="h-9 w-9 text-gray-100 xl:h-[2.8vw] xl:w-[2.8vw]"
          />
        </div>
      </ContactItem>
      <ContactItem
        title="Github"
        details="@MohammedGhaly"
        href="https://github.com/MohammedGhaly"
        target="_blank"
      >
        <Github className="h-9 w-9 text-gray-100 xl:h-[2.8vw] xl:w-[2.8vw]" />
      </ContactItem>
    </div>
  );
}

export default ContactLinks;
