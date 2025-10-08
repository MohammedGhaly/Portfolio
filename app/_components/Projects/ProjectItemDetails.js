import { Binoculars, Github } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const techImages = {
  "React.js": "/reactBlue.svg",
  "Next.js": "/nextjsBlack.svg",
  "Tailwind CSS": "/tailwindcss.svg",
  "Framer-motion": "/framerMotion.svg",
  "Styled-Components": "/StyledComponents.svg",
  "React Query": "/reactQuery.svg",
  "Next-Auth": "/next-auth.svg",
  "Vue.js": "/vue.svg",
  Supabase: "/supabase.svg",
  GSAP: "/gsapGreen.svg",
  Typescript: "/tsblue.svg",
  openCV: "/opencv.svg",
  Tensorflow: "/tensorflow.svg",
  python: "/python.svg",
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
  titleSize,
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
      className={`absolute inset-0 z-10 flex flex-col justify-between rounded-2xl p-4 backdrop-blur-sm transition-opacity duration-300 md:gap-2 lg:p-[1.5vw] ${
        isHovered ? "opacity-100" : "opacity-0"
      }`}
    >
      <h4
        style={{ color: textColor }}
        className={`font-semibold transition-all duration-200 ${titleSize}`}
      >
        {name}
      </h4>
      <p
        style={{ color: textColor }}
        className={`pr-14 text-base leading-5 normal-case transition-all duration-200 md:pr-4 md:text-[1.3rem] md:leading-6 lg:pr-[1vw] lg:text-[2vw] lg:leading-[2.4vw]`}
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
              className="h-[2.4rem] w-[2.4rem] md:size-10 lg:size-[4vw]"
            />
          ))}
        </div>
        <div className="flex h-fit items-center gap-3 *:transition-all *:duration-200 *:hover:scale-[1.03] lg:gap-[0.8vw]">
          {githubLink && (
            <button
              id={`projectBtn-${name}-github`}
              onClick={() => window.open(githubLink, "_blank")}
              style={{
                borderColor: textColor,
                color: textColor,
                backgroundColor: `${textColor}20`,
              }}
              className={`aspect-square rounded-full border-[1px] p-2 md:p-2.5 lg:p-[1vw]`}
            >
              <Github color={textColor} className="md:size-6 lg:size-[2.2vw]" />
            </button>
          )}
          {liveLink && (
            <button
              id={`projectBtn-${name}-demo`}
              onClick={() => window.open(liveLink, "_blank")}
              style={{
                borderColor: textColor,
                color: textColor,
                backgroundColor: `${textColor}20`,
              }}
              className={`aspect-square h-fit rounded-full border-[1px] p-2 md:p-2.5 lg:p-[1vw]`}
            >
              <Binoculars
                color={textColor}
                className="md:size-6 lg:size-[2.2vw]"
              />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectItemDetails;
