import {
  Blocks,
  Code,
  GraduationCap,
  Info,
  Palette,
  School,
} from "lucide-react";
import AboutItem from "./AboutItem";

function AboutTitles() {
  return (
    <>
      {/* university */}
      <AboutItem
        title={"Mansoura University"}
        description={
          "Graduated from the Faculty of Engineering at Computer and Systems department "
        }
        date={"2020 - 2025"}
      >
        <GraduationCap
          className="h-16 w-16 items-start md:h-16 md:w-16 lg:h-20 lg:w-20"
          strokeWidth={1}
        />
      </AboutItem>

      {/* alx */}
      <AboutItem
        title={"ALX Software Engineering"}
        description={
          "Completed ALX SWE Programme, a project-based comprehensive programme aligned with the curriculum of Holberton School."
        }
        date={"2023 - 2024"}
      >
        <School
          className="h-16 w-16 items-start md:h-16 md:w-16 lg:h-20 lg:w-20"
          strokeWidth={1}
        />
      </AboutItem>

      {/* code */}
      <AboutItem
        title={"Frontend Development"}
        description={
          "Currently working as a Frontend Developer using React, Next.js, TypeScript, and other modern tools to build great interactive UIs."
        }
        date={"2024 - Present"}
      >
        <Code
          className="h-16 w-16 items-start md:h-16 md:w-16 lg:h-20 lg:w-20"
          strokeWidth={1}
        />
      </AboutItem>
    </>
  );
}

export default AboutTitles;
