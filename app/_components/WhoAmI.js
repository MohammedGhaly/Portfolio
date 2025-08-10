import HeroTitles from "./HeroTitles";
import TechStack from "./TechStack";

function WhoAmI() {
  return (
    <div className="w-full border-t border-b border-white/30 py-1">
      <div className="flex flex-col justify-start bg-gray-400/20 py-6 backdrop-blur-xs lg:items-start">
        <HeroTitles />
        <TechStack />
      </div>
    </div>
  );
}

export default WhoAmI;
