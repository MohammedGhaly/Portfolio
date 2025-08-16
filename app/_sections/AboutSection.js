import { Code, GraduationCap, School } from "lucide-react";
import AboutItem from "../_components/About/AboutItem";
import AboutTitles from "../_components/About/AboutTitles";
import HidingSquares from "../_components/About/HidingSquares";
import SectionTitle from "../_components/Others/SectionTitle";

function AboutSection() {
  return (
    <section className="mt-10 flex w-full flex-col gap-0 px-3 md:gap-14 md:px-6 lg:mt-20">
      <SectionTitle title="About Me" cn={"mb-14 lg:mb-16"} />

      {/* section content */}
      <div className="flex flex-col gap-16 md:flex-row-reverse md:items-center md:gap-0">
        <div className="flex w-full flex-col gap-4 text-white md:w-3/5 lg:w-3/5 lg:gap-8">
          <AboutTitles>
            {/* university */}
            <AboutItem
              title={"Mansoura University"}
              description={
                "Graduated from the Faculty of Engineering at Computer and Systems department "
              }
              date={"2020 - 2025"}
            >
              <GraduationCap
                className="h-16 w-16 items-start md:h-16 md:w-16 lg:h-[6vw] lg:w-[6vw]"
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
                className="h-16 w-16 items-start md:h-16 md:w-16 lg:h-[6vw] lg:w-[6vw]"
                strokeWidth={1}
              />
            </AboutItem>

            {/* code */}
            <AboutItem
              title={"Frontend Development"}
              description={
                "Currently working as a Frontend Developer using React, Next.js, TypeScript, and other modern tools to build great interactive UIs."
              }
              date={"2024 - Now"}
            >
              <Code
                className="h-16 w-16 items-start md:h-16 md:w-16 lg:h-[6vw] lg:w-[6vw]"
                strokeWidth={1}
              />
            </AboutItem>
          </AboutTitles>
        </div>

        <HidingSquares />
      </div>
    </section>
  );
}

export default AboutSection;
