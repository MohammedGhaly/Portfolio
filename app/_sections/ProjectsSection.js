import ProjectsStack from "../_components/ProjectsStack";

function ProjectsSection() {
  return (
    <section className="mt-14 w-full overflow-hidden uppercase lg:mt-28">
      <h1 className="mb-14 w-full bg-gradient-to-b from-white/90 to-white/0 bg-clip-text text-center text-5xl tracking-[1.6rem] text-transparent uppercase md:mb-0 md:text-8xl md:tracking-[3.2rem] lg:top-10 lg:mb-22 lg:text-9xl lg:tracking-[6.4rem]">
        {"Project"}
        <p className="inline-block bg-gradient-to-b from-white/5 to-white/0 bg-clip-text text-5xl tracking-normal text-transparent md:text-8xl lg:text-9xl">
          s
        </p>
      </h1>
      <ProjectsStack />
    </section>
  );
}

export default ProjectsSection;
