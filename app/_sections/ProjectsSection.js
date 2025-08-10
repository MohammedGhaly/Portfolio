import ProjectsStack from "../_components/ProjectsStack";
import SectionTitle from "../_components/SectionTitle";

function ProjectsSection() {
  return (
    <section className="mt-14 w-full overflow-hidden uppercase lg:mt-28">
      <SectionTitle title="Projects" cn={"mb-14"} />
      <ProjectsStack />
    </section>
  );
}

export default ProjectsSection;
