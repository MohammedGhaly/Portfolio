function SectionTitle({ title, cn }) {
  return (
    <h1
      className={`w-full bg-gradient-to-b from-white/90 to-white/0 bg-clip-text text-center text-5xl tracking-[1.6rem] text-transparent uppercase md:text-8xl md:tracking-[3.2rem] lg:mb-0 lg:text-9xl lg:tracking-[6rem] ${cn}`}
    >
      {title.slice(0, title.length - 1)}
      <p className="inline-block bg-gradient-to-b from-white/5 to-white/0 bg-clip-text text-5xl tracking-normal text-transparent md:text-8xl lg:text-9xl">
        {title[title.length - 1]}
      </p>
    </h1>
  );
}

export default SectionTitle;
