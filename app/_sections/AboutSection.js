import AboutTitles from "../_components/AboutTitles";
import HidingSquares from "../_components/HidingSquares";
import SectionTitle from "../_components/SectionTitle";

function AboutSection() {
  return (
    <section className="mt-10 flex w-full flex-col gap-0 px-6 md:gap-14 lg:mt-20">
      <SectionTitle title="About Me" cn={"mb-14 lg:mb-16"} />

      {/* section content */}
      <div className="flex flex-col gap-16 md:flex-row-reverse md:items-center md:gap-0">
        <div className="flex w-full flex-col gap-4 px-1 text-white md:w-3/5 lg:w-3/5 lg:gap-8">
          <AboutTitles />
        </div>
        <div className="w-full px-7 md:flex-1 lg:w-2/5 lg:px-12">
          <HidingSquares />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
