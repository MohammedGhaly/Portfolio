"use client";
import { useEffect, useRef } from "react";
import ProjectItem from "./ProjectItem";
import { gsap } from "gsap";
import { Draggable } from "gsap/all";
import { useMediaQuery } from "react-responsive";

function ProjectsStack() {
  const projectsStackRef = useRef(null);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    if (isMobile) return;
    gsap.registerPlugin(Draggable);
    const projectsStack = projectsStackRef.current;

    Draggable.create(projectsStack, {
      type: "scroll",
      edgeResistance: 0.9,
      dragClickables: true,
      cursor: "grab",
      activeCursor: "grabbing",
    });
  }, []);

  return (
    <div
      ref={projectsStackRef}
      className="projectsStack w-full md:mt-24 md:mr-0 md:mb-32 md:w-[110%] md:pl-10 lg:mt-32 lg:mb-52 lg:w-[115%] lg:pr-22 lg:pl-20"
    >
      <div className="projects-container flex w-full flex-col gap-6 px-4 md:w-[300vw] md:flex-row md:pr-24 lg:w-[200vw] lg:gap-10 lg:pr-48">
        <ProjectItem
          src="/videos/turjumanDemo.mp4"
          cn={null}
          name={"Turjuman"}
          description={
            "An Ai-powered translation application that provides accurate translations based on the context of the text. it also supports multiple languages and media translation."
          }
          techStack={[
            "React.js",
            "Typescript",
            "Tailwind CSS",
            "Framer-motion",
          ]}
          lightText={"#bdd8f1"}
          darkText={"#1b252e"}
        />

        <ProjectItem
          src="/videos/wildOasisWebsite.mp4"
          cn="h-[109%]"
          name={"Wild Oasis Website"}
          description={
            "A responsive website for the Wild Oasis hotel, showcasing its features and services, built with Next.js."
          }
          techStack={["Next.js", "Tailwind CSS", "Supabase", "Next-Auth"]}
          lightText={"#fffbd5"}
          darkText={"black"}
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
        />
        <ProjectItem
          src="/videos/spyltDemo.mp4"
          cn="h-[109%]"
          name={"Spylt landing page"}
          techStack={["React.js", "Tailwind CSS", "GSAP"]}
          description={
            "An awward-winning landing page with cool GSAP animations"
          }
          lightText={"#eee4D7"}
          darkText={"#513125"}
        />
      </div>
    </div>
  );
}

export default ProjectsStack;
