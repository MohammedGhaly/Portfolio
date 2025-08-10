import AboutTitles from "../_components/AboutTitles";
import HidingSquares from "../_components/HidingSquares";

function AboutSection() {
  return (
    <section className="mt-10 w-full px-6 lg:mt-20">
      {/* section title */}
      <h1 className="mb-14 w-full bg-gradient-to-b from-white/90 to-white/0 bg-clip-text text-center text-5xl tracking-[1.5rem] text-transparent uppercase md:text-8xl md:tracking-[3.2rem] lg:top-10 lg:mb-22 lg:text-9xl lg:tracking-[6.4rem]">
        {"About m"}
        <p className="inline-block bg-gradient-to-b from-white/5 to-white/0 bg-clip-text text-5xl tracking-normal text-transparent md:text-8xl lg:text-9xl">
          e
        </p>
      </h1>

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
