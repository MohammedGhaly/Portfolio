import { Codesandbox } from "lucide-react";
import SectionTitle from "../_components/SectionTitle";
import ServiceItem from "../_components/ServiceItem";
import LayersIcon from "../_components/LayersIcon";
import CodeIcon from "../_components/CodeIcon";
import AnimationIcon from "../_components/AnimationIcon";

function ServicesSection() {
  return (
    <section className="mt-10 w-full px-6 lg:mt-20 lg:mb-14">
      <SectionTitle title="Services" cn="mb-18 md:mb-24 lg:mb-44" />
      {/* items */}
      <div className="flex flex-col gap-18 md:flex-row md:justify-center md:gap-8">
        <ServiceItem
          title="Website Designing"
          description="Crafting visually stunning, responsive, and user-friendly websites tailored to your brand and audience"
        >
          <LayersIcon />
        </ServiceItem>
        <ServiceItem
          title="Web Apps Development"
          description="Building fast, scalable, and secure web applications for seamless user experiences across all devices"
        >
          <CodeIcon />
        </ServiceItem>
        <ServiceItem
          title="Animated Websites"
          description="Creating engaging animations and interactive elements to captivate visitors and enhance storytelling"
        >
          <AnimationIcon />
        </ServiceItem>
      </div>
    </section>
  );
}

export default ServicesSection;
