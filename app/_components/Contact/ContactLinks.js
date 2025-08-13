import { Github, Linkedin, MailIcon, MessageCircle, Phone } from "lucide-react";
import ContactItem from "./ContactItem";

function ContactLinks() {
  return (
    <div className="flex flex-col gap-5">
      <ContactItem
        title="Email"
        details="ghaly140302@gmail.com"
        href="mailto:ghaly140302@gmail.com"
      >
        <MailIcon className="h-9 w-9 text-gray-100" />
      </ContactItem>
      <ContactItem
        title="Phone"
        details="+20 1100286256"
        href="tel:+201100286256"
      >
        <Phone className="h-9 w-9 text-gray-100" />
      </ContactItem>
      <ContactItem
        title="LinkedIn"
        details="mohammed-ghaly-16a401150"
        href="https://www.linkedin.com/in/mohammed-ghaly-16a401150"
        target="_blank"
      >
        <Linkedin className="h-9 w-9 text-gray-100" />
      </ContactItem>
      <ContactItem
        title="WhatsApp"
        details="+20 1100286256"
        href="https://wa.me/201100286256"
        target="_blank"
      >
        <div className="">
          <MessageCircle strokeWidth={2} className="h-9 w-9 text-gray-100" />
          <Phone
            strokeWidth={3}
            size={13}
            className="absolute top-[50%] left-[50%] h-4 w-4 -translate-x-1/2 -translate-y-1/2 text-gray-100 lg:top-[47%]"
          />
        </div>
      </ContactItem>
      <ContactItem
        title="Github"
        details="@MohammedGhaly"
        href="https://github.com/MohammedGhaly"
        target="_blank"
      >
        <Github className="h-9 w-9 text-gray-100" />
      </ContactItem>
    </div>
  );
}

export default ContactLinks;
