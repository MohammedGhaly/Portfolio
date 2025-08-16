"use client";

import { useEffect, useRef, useState } from "react";
import ProjectItemDetails from "./ProjectItemDetails";

function ProjectItem({
  src,
  cn,
  techStack,
  description,
  name,
  lightText,
  darkText,
  githubLink,
  liveLink,
}) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (hovered) videoRef.current.pause();
    else videoRef.current.play();
  }, [hovered]);

  return (
    <div
      id={`project-${name}`}
      className="group relative flex aspect-video w-full items-center overflow-hidden rounded-2xl shadow-2xl"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <ProjectItemDetails
        isHovered={hovered}
        name={name}
        description={description}
        techStack={techStack}
        videoRef={videoRef}
        canvasRef={canvasRef}
        lightText={lightText}
        darkText={darkText}
        githubLink={githubLink}
        liveLink={liveLink}
      />
      <video
        ref={videoRef}
        src={src}
        autoPlay
        muted
        className={`w-full object-fill ${cn || ""}`}
        loop
      />
      <canvas ref={canvasRef} style={{ display: "none" }} />
    </div>
  );
}

export default ProjectItem;
