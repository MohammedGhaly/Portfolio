import ProjectsStack from "../_components/Projects/ProjectsStack";
import SectionTitle from "../_components/Others/SectionTitle";
import ProjectItem from "../_components/Projects/ProjectItem";

function ProjectsSection() {
  return (
    <section className="mt-14 w-full overflow-hidden uppercase lg:mt-28">
      <SectionTitle title="Projects" cn={"mb-14 lg:mb-[2vw] "} />
      <ProjectsStack>
        <ProjectItem
          src="/videos/turjumanDemo.mp4"
          cn={null}
          name={"Turjuman"}
          description={
            "An Ai-powered translation application that provides accurate translations, supporting multiple languages and media translation."
          }
          techStack={[
            "React.js",
            "Typescript",
            "Tailwind CSS",
            "Framer-motion",
          ]}
          lightText={"#bdd8f1"}
          darkText={"#1b252e"}
          githubLink={"https://github.com/MohammedGhaly/Turjuman"}
        />

        <ProjectItem
          src="/videos/wildOasisWebsite.mp4"
          cn="h-[109%]"
          name={"Wild Oasis Website"}
          description={
            "A responsive website for the Wild Oasis hotel, enabling guests to explore and book cabins, built with Next.js."
          }
          techStack={["Next.js", "Tailwind CSS", "Supabase", "Next-Auth"]}
          lightText={"#fffbd5"}
          darkText={"#000000"}
          githubLink={"https://github.com/MohammedGhaly/The-Wild-Oasis-Website"}
          liveLink={"https://the-wild-oasis-website-kohl-three.vercel.app/"}
        />
        <ProjectItem
          src="/videos/wildOasisAdminDemo.mp4"
          cn="h-[110%]"
          name={"Wild Oasis Admin"}
          description={
            "A comprehensive admin dashboard for managing a hotel reservations and check-ins, built with React.js."
          }
          techStack={[
            "React.js",
            "Styled-Components",
            "React Query",
            "Supabase",
          ]}
          lightText={"#dccbee"}
          darkText={"#291d36"}
          githubLink={"https://github.com/MohammedGhaly/the-wild-oasis-admin"}
        />
        <ProjectItem
          src="/videos/spyltDemo.mp4"
          cn="h-[109%]"
          name={"Spylt landing page"}
          techStack={["React.js", "Tailwind CSS", "GSAP"]}
          description={
            "Modern responsive landing page with GSAP animations, smooth transitions, and polished design built using React and Tailwind CSS."
          }
          lightText={"#eee4D7"}
          darkText={"#513125"}
          githubLink={"https://github.com/MohammedGhaly/SPYLT"}
          liveLink={"https://spyltpage.netlify.app/"}
        />
      </ProjectsStack>
    </section>
  );
}

export default ProjectsSection;
