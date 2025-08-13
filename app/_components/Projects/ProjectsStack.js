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

  return <>{children}</>;
}

export default ProjectsStack;
