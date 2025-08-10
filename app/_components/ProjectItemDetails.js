import Image from "next/image";
import { useEffect, useState } from "react";

const techImages = {
  "React.js": "/reactBlue.svg",
  GSAP: "/gsapGreen.svg",
  Typescript: "/tsblue.svg",
  "Next.js": "/nextjsBlack.svg",
  "Tailwind CSS": "/tailwindcss.svg",
  "Framer-motion": "/framer.svg",
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
      className={`absolute inset-0 z-10 flex flex-col justify-between rounded-2xl p-4 backdrop-blur-sm transition-opacity duration-300 ${
        isHovered ? "opacity-100" : "opacity-0"
      }`}
    >
      <h4
        style={{ color: textColor }}
        className={`text-2xl font-semibold transition-all duration-200 md:text-6xl`}
      >
        {name}
      </h4>
      <p
        style={{ color: textColor }}
        className={`pr-14 text-base leading-5 normal-case transition-all duration-200 md:pr-22 md:text-3xl md:leading-9`}
      >
        {description}
      </p>
      <div className="flex gap-4">
        {techStack.map((tech) => (
          <Image
            key={tech}
            src={techImages[tech]}
            alt={tech}
            width={64}
            height={64}
            className="h-[2.4rem] w-[2.4rem] md:h-22 md:w-22"
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectItemDetails;
