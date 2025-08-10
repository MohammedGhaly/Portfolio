function HeroTitles() {
  return (
    <div className="w-full lg:w-[50vw] lg:flex lg:justify-center h-fit">
      <div className="flex flex-1 gap-8 h-fit py-1 mb-6 lg:mb-18 justify-center lg:justify-center text-white ">
        {/* <h2 classname="uppercase" className="cursor-default -translate-y-8">{`{`}</h2> */}
        <div className="bg-transparent flex flex-col *:lg:text-7xl *:text-5xl *:tracking-[0.2rem] *:flex *:items-center *:justify-center">
          {/* <h2>I</h2>
        <h2>am</h2>
        <h2>Mohamed</h2>
        <h2>Ghaly</h2> */}
          <div className="hidden lg:flex gap-4">
            <p className="hidden lg:block text-5xl lg:text-6xl lg:-translate-x-2 text-yellow self-start font-bold align-top">
              {"{"}
            </p>{" "}
            <div className="flex flex-col gap-2 lg:gap-0 items-center lg:items-start">
              <h2 className="uppercase border-b border-orange">Frontend</h2>
              <h2 className="uppercase border-b border-purple">developer</h2>
              <h2 className="uppercase border-b border-cyan">& software</h2>
              <h2 className="uppercase border-b border-fuschia">Enthusiast </h2>
            </div>
            <p className="lg:self-end hidden lg:block text-5xl lg:text-6xl self-start text-yellow font-bold align-top lg:mb-2 translate-y-2 lg:translate-y-1">
              {"}"}
            </p>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroTitles;
