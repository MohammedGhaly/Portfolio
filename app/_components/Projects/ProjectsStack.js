"use client";
import { gsap } from "gsap";
import { Draggable } from "gsap/all";
import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import ProjectItem from "./ProjectItem";

function ProjectsStack({ children }) {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    if (isMobile) return;
    gsap.registerPlugin(Draggable);

    Draggable.create(".projectsStack", {
      type: "scroll",
      edgeResistance: 0.9,
      dragClickables: true,
      cursor: "grab",
      activeCursor: "grabbing",
    });
  });

  return (
    <div className="projectsStack w-full md:mt-24 md:mr-0 md:mb-32 md:w-[110%] md:pl-10 lg:mt-32 lg:mb-[14vw] lg:w-[115%] lg:pr-22 lg:pl-[4vw]">
      <div className="projects-container flex w-full flex-col gap-6 px-4 md:w-[300vw] md:flex-row md:pr-24 lg:w-[260vw] lg:gap-10 lg:pr-56">
        {children}
      </div>
    </div>
  );
}

export default ProjectsStack;
