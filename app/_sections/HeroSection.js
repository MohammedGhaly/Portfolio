import HeroBtns from "../_components/HeroBtns";
import HeroImageGradient from "../_components/HeroImageGradient";
import WhoAmI from "../_components/WhoAmI";

function HeroSection() {
  return (
    <section className="relative flex h-auto w-screen flex-col gap-4 md:justify-between md:gap-10 lg:mx-0 lg:my-0 lg:flex-row-reverse lg:items-center">
      <HeroImageGradient />
      <div className="flex h-fit w-full flex-col justify-start gap-2 py-3 md:flex-1 lg:mr-[-100px] lg:gap-0 lg:pt-20">
        <WhoAmI />
        <HeroBtns />
      </div>
    </section>
  );
}

export default HeroSection;
