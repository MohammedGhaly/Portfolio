export default function AboutItemDate({ date }) {
  return (
    <h2 className="flex h-6 items-center justify-center overflow-hidden rounded-full bg-gray-600/10 px-2 py-[5px] text-center text-xs leading-5 whitespace-nowrap normal-case backdrop-blur-xs transition-all duration-300 ease-in-out md:text-lg lg:h-[2.2vw] lg:px-[0.8vw] lg:text-[1.2vw]">
      {date}
    </h2>
  );
}
