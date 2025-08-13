import ContactForm from "../_components/Contact/ContactForm";
import ContactLinks from "../_components/Contact/ContactLinks";
import SectionTitle from "../_components/Others/SectionTitle";

function ContactSection() {
  return (
    <section className="flex flex-col gap-10 bg-gray-400/20 pt-10 backdrop-blur-xs">
      <SectionTitle title="Contact" />

      <div className="flex flex-col p-6 md:flex-row md:gap-6 md:py-10 md:pl-10 lg:gap-12 lg:pb-4">
        <div className="w-full text-white md:w-3/5">
          <ContactForm />
        </div>
        <div className="mt-6 w-full p-6 md:flex-1 md:space-y-8">
          <h4 className="hidden w-full text-start text-white md:block md:text-2xl lg:text-3xl">
            Let&apos;s discuss projects
          </h4>
          <ContactLinks />
        </div>
      </div>
    </section>
  );
}

function Stencil() {
  return (
    <>
      <div id="text">You can put your text here</div>

      <div className="main"></div>
    </>
  );
}

export default ContactSection;
