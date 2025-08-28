import Heading from "@/components/Heading";
import SkillsFooter from "@/components/SkillsFotter";
import { Badge } from "@/components/ui/badge";
import { LightbulbIcon } from "lucide-react";
import FramerWrapper from "@/components/animation/FramerWrapper";
import { portfolioConfig } from "@/config/portfolio.config";

const SkillPage = () => {
  return (
    // SKILLS PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge variant="secondary" className="gap-1.5 py-1 ">
        <LightbulbIcon className="w-4 h-4" />
        My Skills
      </Badge>

      <div className="flex flex-col gap-3">
        <Heading>My Technical Experience/Skills.</Heading>

        {/* Intro */}
        <FramerWrapper y={0} x={200}>
          <p className="font-poppins text-xl w-full text-primary max-sm:text-lg">
           Currently I am a CSE (AI & ML) undergraduate and aspiring Full Stack Developer with a solid foundation in Java, Python, and JavaScript, along with expertise in modern frameworks like React, Next.js, Node.js, Express.js, and Spring Boot. I specialize in building scalable and responsive web applications, integrating secure authentication, and working with databases such as MongoDB, SQL, and Redis. Alongside full stack development, I actively explore AI & ML tools, data analytics libraries (NumPy, Pandas, Matplotlib, Seaborn), and contribute to open-source projects.
          </p>
        </FramerWrapper>

        {/* Roles */}
        <FramerWrapper y={100} delay={0.25} className="block w-full">
          <h1 className="text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl mb-4">
            Roles
          </h1>
          <div className="flex flex-wrap gap-3">
            {portfolioConfig.skills.roles.map((role, i) => (
              <Badge key={i} variant="outline" className="text-base px-3 py-1">
                {role}
              </Badge>
            ))}
          </div>
        </FramerWrapper>

        {/* Programming Languages */}
        <FramerWrapper y={100} delay={0.3} className="block w-full">
          <h1 className="text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl mb-4">
            Programming Languages
          </h1>
          <div className="w-full grid grid-cols-7 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4">
            <SkillsFooter items={portfolioConfig.skills.programmingLanguages} />
          </div>
        </FramerWrapper>

        {/* Frameworks & Libraries */}
        <FramerWrapper className="block w-full" y={100} delay={0.32}>
          <h1 className="text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl mb-4">
            Frameworks & Libraries
          </h1>
          <div className="w-full grid grid-cols-7 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4">
            <SkillsFooter items={portfolioConfig.skills.frameworks} />
          </div>
        </FramerWrapper>

        {/* Databases */}
        <FramerWrapper className="block w-full" y={100} delay={0.34}>
          <h1 className="text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl mb-4">
            Databases & Caching
          </h1>
          <div className="w-full grid grid-cols-7 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4">
            <SkillsFooter items={portfolioConfig.skills.databases} />
          </div>
        </FramerWrapper>

        {/* Data Analytics */}
        <FramerWrapper className="block w-full" y={100} delay={0.36}>
          <h1 className="text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl mb-4">
            Data Analytics
          </h1>
          <div className="w-full grid grid-cols-7 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4">
            <SkillsFooter items={portfolioConfig.skills.dataAnalytics} />
          </div>
        </FramerWrapper>

        {/* Tools & Technologies */}
        <FramerWrapper className="block w-full" y={100} delay={0.38}>
          <h1 className="text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl mb-4">
            Tools & Technologies
          </h1>
          <div className="w-full grid grid-cols-7 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4">
            <SkillsFooter items={portfolioConfig.skills.tools} />
          </div>
        </FramerWrapper>
      </div>
    </div>
  );
};

export default SkillPage;
