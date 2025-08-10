import ContactForm from "../_components/ContactForm";
import ContactLinks from "../_components/ContactLinks";
import SectionTitle from "../_components/SectionTitle";

function ContactSection() {
  return (
    <section className="flex flex-col gap-10 bg-gray-400/20 pt-10 backdrop-blur-xs">
      {/* <h1 className="w-full bg-gradient-to-b from-white/90 to-white/0 bg-clip-text text-center text-5xl tracking-[1.6rem] text-transparent uppercase md:text-8xl md:tracking-[3.2rem] lg:mb-0 lg:text-9xl lg:tracking-[6.4rem]">
        {"Contac"}
        <p className="inline-block bg-gradient-to-b from-white/5 to-white/0 bg-clip-text text-5xl tracking-normal text-transparent md:text-8xl lg:text-9xl">
          t
        </p>
      </h1> */}

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
