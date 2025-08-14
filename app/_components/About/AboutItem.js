import AboutItemDate from "./AboutItemDate";

function AboutItem({ title, description, date, children }) {
  return (
    <div className="about-item flex w-full items-center gap-4 rounded-lg bg-gray-400/20 px-3 py-3 backdrop-blur-xs md:px-4 md:py-4 lg:gap-[2vw] lg:rounded-[1vw]">
      {children}
      <div className="flex w-full flex-col gap-1">
        <div className="flex items-center justify-between">
          <h2 className="flex-1 text-lg normal-case md:text-2xl lg:text-[2.2vw]">
            {title}
          </h2>
          <AboutItemDate date={date} />
        </div>
        <h3 className="flex-1 text-base font-normal normal-case md:text-lg lg:pr-[7vw] lg:text-[1.5vw]">
          {description}
        </h3>
      </div>
    </div>
  );
}

export default AboutItem;
