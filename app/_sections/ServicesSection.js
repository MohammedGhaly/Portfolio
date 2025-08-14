import AnimationIcon from "../_components/Services/AnimationIcon";
import CodeIcon from "../_components/Services/CodeIcon";
import LayersIcon from "../_components/Services/LayersIcon";
import SectionTitle from "../_components/Others/SectionTitle";
import ServiceItem from "../_components/Services/ServiceItem";
import Services from "../_components/Services/Services";

function ServicesSection() {
  return (
    <section className="mt-10 w-full px-6 lg:mt-20 lg:mb-14 lg:min-h-[600px]">
      <SectionTitle
        title="Services"
        cn="mb-18 md:mb-24 lg:mb-44 2xl:mb-[12vw]"
      />
      {/* items */}
      <Services>
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
      </Services>
    </section>
  );
}

export default ServicesSection;
