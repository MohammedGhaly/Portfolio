import { Binoculars, Github } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const techImages = {
  "React.js": "/reactBlue.svg",
  GSAP: "/gsapGreen.svg",
  Typescript: "/tsblue.svg",
  "Next.js": "/nextjsBlack.svg",
  "Tailwind CSS": "/tailwindcss.svg",
  "Framer-motion": "/framerMotion.svg",
  "Styled-Components": "/StyledComponents.svg",
  "React Query": "/reactQuery.svg",
  Supabase: "/supabase.svg",
  "Next-Auth": "/next-auth.svg",
};

function ProjectItemDetails({
  isHovered,
  name,
  description,
  techStack,
  videoRef,
  canvasRef,
  lightText,
  darkText,
  githubLink,
  liveLink,
}) {
  const [textColor, setTextColor] = useState(darkText);
  useEffect(() => {
    if (!isHovered) return;

    function getAverageBrightness() {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      if (!video || !canvas) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      // Draw current video frame onto the canvas
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

      // Get pixel data (you can sample only a part if you want)
      const { data } = ctx.getImageData(0, 0, canvas.width, canvas.height);

      let r = 0,
        g = 0,
        b = 0;
      const sampleSize = 10; // Sample every 10th pixel for speed
      let count = 0;

      for (let i = 0; i < data.length; i += 4 * sampleSize) {
        r += data[i];
        g += data[i + 1];
        b += data[i + 2];
        count++;
      }

      r /= count;
      g /= count;
      b /= count;

      // Calculate brightness
      const brightness = (r * 299 + g * 587 + b * 114) / 1000;
      return brightness;
    }

    const brightness = getAverageBrightness();
    if (brightness !== undefined) {
      setTextColor(brightness > 125 ? darkText : lightText);
    }
  }, [isHovered]);

  return (
    <div
      className={`absolute inset-0 z-10 flex flex-col justify-between rounded-2xl p-4 backdrop-blur-sm transition-opacity duration-300 md:p-10 lg:p-[2.2vw] ${
        isHovered ? "opacity-100" : "opacity-0"
      }`}
    >
      <h4
        style={{ color: textColor }}
        className={`text-2xl font-semibold transition-all duration-200 md:text-6xl lg:text-[5vw]`}
      >
        {name}
      </h4>
      <p
        style={{ color: textColor }}
        className={`pr-14 text-base leading-5 normal-case transition-all duration-200 md:pr-22 md:text-3xl md:leading-9 lg:pr-[12vw] lg:text-[2.5vw] lg:leading-[2.8vw]`}
      >
        {description}
      </p>
      <div className="flex items-center justify-between">
        <div className="flex gap-4">
          {techStack.map((tech) => (
            <Image
              key={tech}
              src={techImages[tech]}
              alt={tech}
              width={64}
              height={64}
              className="h-[2.4rem] w-[2.4rem] md:h-22 md:w-22 lg:h-[5vw] lg:w-[5vw]"
            />
          ))}
        </div>
        <div className="flex h-fit items-center gap-3 *:transition-all *:duration-200 *:hover:scale-[1.03] lg:gap-[0.8vw]">
          {githubLink && (
            <button
              onClick={() => window.open(githubLink, "_blank")}
              style={{
                borderColor: textColor,
                color: textColor,
                backgroundColor: `${textColor}20`,
              }}
              className={`aspect-square h-fit rounded-full border-[1px] p-2 md:p-3 lg:p-[1vw]`}
            >
              <Github
                color={textColor}
                className="md:h-[10] md:w-[10] lg:h-[3.2vw] lg:w-[3.2vw]"
              />
            </button>
          )}
          {liveLink && (
            <button
              onClick={() => window.open(liveLink, "_blank")}
              style={{
                borderColor: textColor,
                color: textColor,
                backgroundColor: `${textColor}20`,
              }}
              className={`aspect-square h-fit rounded-full border-[1px] p-2 md:p-3 lg:p-[1vw]`}
            >
              <Binoculars
                color={textColor}
                className="md:h-10 md:w-10 lg:h-[3.2vw] lg:w-[3.2vw]"
              />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectItemDetails;
