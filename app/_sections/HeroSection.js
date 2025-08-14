import HeroBtns from "../_components/Hero/HeroBtns";
import HeroImageGradient from "../_components/Hero/HeroImageGradient";
import HeroWrapper from "../_components/Hero/HeroWrapper";
import WhoAmI from "../_components/Hero/WhoAmI";

function HeroSection() {
  return (
    <section className="relative flex h-auto w-screen flex-col gap-4 md:justify-between md:gap-10 lg:mx-0 lg:my-0 lg:min-h-[700px] lg:flex-row-reverse lg:items-center">
      <HeroImageGradient />
      <HeroWrapper>
        <div className="flex w-full gap-0">
          <div className="flex flex-1 flex-col md:flex-auto">
            <WhoAmI />
            <HeroBtns key={1} />
          </div>
        </div>
      </HeroWrapper>
    </section>
  );
}

export default HeroSection;
