import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Card, CardContent } from "./ui/card";
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiPython,
  SiFastapi,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiNodedotjs,
  SiNextdotjs,
  SiGit,
  SiDocker,
  SiFigma,
} from "react-icons/si";

const skills = [
  {
    name: "TypeScript",
    icon: SiTypescript,
    bgColor: "bg-gray-50 dark:bg-gray-800",
    iconColor: "#3178C6",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    bgColor: "bg-gray-50 dark:bg-gray-800",
    iconColor: "#F7DF1E",
  },
  {
    name: "React",
    icon: SiReact,
    bgColor: "bg-gray-50 dark:bg-gray-800",
    iconColor: "#61DAFB",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    bgColor: "bg-gray-50 dark:bg-gray-800",
    iconColor: "#000000",
  },
  {
    name: "Python",
    icon: SiPython,
    bgColor: "bg-gray-50 dark:bg-gray-800",
    iconColor: "#3776AB",
  },
  {
    name: "FastAPI",
    icon: SiFastapi,
    bgColor: "bg-gray-50 dark:bg-gray-800",
    iconColor: "#009688",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    bgColor: "bg-gray-50 dark:bg-gray-800",
    iconColor: "#06B6D4",
  },
  {
    name: "HTML5",
    icon: SiHtml5,
    bgColor: "bg-gray-50 dark:bg-gray-800",
    iconColor: "#E34F26",
  },
  {
    name: "CSS3",
    icon: SiCss3,
    bgColor: "bg-gray-50 dark:bg-gray-800",
    iconColor: "#1572B6",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    bgColor: "bg-gray-50 dark:bg-gray-800",
    iconColor: "#339933",
  },
  {
    name: "Git",
    icon: SiGit,
    bgColor: "bg-gray-50 dark:bg-gray-800",
    iconColor: "#F05032",
  },
  {
    name: "Docker",
    icon: SiDocker,
    bgColor: "bg-gray-50 dark:bg-gray-800",
    iconColor: "#2496ED",
  },
  {
    name: "SQL",
    icon: SiMysql,
    bgColor: "bg-gray-50 dark:bg-gray-800",
    iconColor: "#4479A1",
  },
  {
    name: "Figma",
    icon: SiFigma,
    bgColor: "bg-gray-50 dark:bg-gray-800",
    iconColor: "#F24E1E",
  },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="skills" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of the technologies and tools I work with
            to bring ideas to life.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 motion-safe-fallback">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.2, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="w-20"
              style={{ minWidth: "80px" }}
            >
              <Card className="border shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer aspect-square w-full h-full">
                <CardContent className="p-4 pt-6 text-center h-full flex flex-col justify-center items-center">
                  <motion.div
                    className="mb-2"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.1 }}
                  >
                    <skill.icon
                      className="text-3xl"
                      style={{ color: skill.iconColor }}
                    />
                  </motion.div>
                  <h3 className="font-medium text-xs text-foreground leading-tight">
                    {skill.name}
                  </h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
