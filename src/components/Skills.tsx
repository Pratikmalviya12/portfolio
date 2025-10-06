import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Card, CardContent } from "@mui/material";
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
import {
  FaCode,
  FaDatabase,
  FaCogs,
  FaSearch,
  FaPalette,
  FaBug,
  FaChartBar,
  FaServer,
} from "react-icons/fa";
import { skillsData, portfolioData } from "../data";

// Helper function to get icon color
function getIconColor(skillName: string): string {
  const colorMap: Record<string, string> = {
    TypeScript: "#3178C6",
    JavaScript: "#F7DF1E",
    React: "#61DAFB",
    Python: "#3776AB",
    FastAPI: "#009688",
    "Tailwind CSS": "#06B6D4",
    HTML: "#E34F26",
    CSS: "#1572B6",
    SQL: "#336791",
    "Node.js": "#339933",
    "Next.js": "#000000",
    Git: "#F05032",
    Docker: "#2496ED",
    Figma: "#F24E1E",
    Zustand: "#FF6B6B",
    "Object-oriented Programming": "#4CAF50",
    "Full Stack Development": "#9C27B0",
    "Web Application Optimization": "#FF9800",
    "UI/UX Enhancement": "#E91E63",
    "Debugging and Troubleshooting": "#795548",
    "API Performance Optimization": "#607D8B",
    "Database Query Optimization": "#3F51B5",
  };
  return colorMap[skillName] || "#666666";
}

// Map skill names to icons
const iconMap: Record<string, any> = {
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  React: SiReact,
  Python: SiPython,
  FastAPI: SiFastapi,
  "Tailwind CSS": SiTailwindcss,
  HTML: SiHtml5,
  CSS: SiCss3,
  SQL: SiMysql,
  "Node.js": SiNodedotjs,
  "Next.js": SiNextdotjs,
  Git: SiGit,
  Docker: SiDocker,
  Figma: SiFigma,
  Zustand: FaCode,
  "Object-oriented Programming": FaCogs,
  "Full Stack Development": FaCode,
  "Web Application Optimization": FaChartBar,
  "UI/UX Enhancement": FaPalette,
  "Debugging and Troubleshooting": FaBug,
  "API Performance Optimization": FaServer,
  "Database Query Optimization": FaDatabase,
};

const skills = skillsData.skills.map((skill) => ({
  name: skill.name,
  icon: iconMap[skill.name] || FaCode, // fallback icon
  bgColor: "bg-gray-50 dark:bg-gray-800",
  iconColor: getIconColor(skill.name),
  level: skill.level,
  category: skill.category,
}));

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
            {portfolioData.sections.skills.title}
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
              className="w-24 sm:w-28"
              style={{ minWidth: "96px" }}
            >
              <Card className="border shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer h-24 sm:h-28">
                <CardContent className="p-2 text-center h-full flex flex-col justify-center items-center">
                  <motion.div
                    className="mb-1"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.1 }}
                  >
                    <skill.icon
                      className="text-2xl sm:text-3xl"
                      style={{ color: skill.iconColor }}
                    />
                  </motion.div>
                  <p
                    className="font-medium text-xs text-foreground leading-tight text-center px-1"
                    style={{
                      wordBreak: "normal",
                      overflowWrap: "break-word",
                      hyphens: "auto",
                    }}
                  >
                    {skill.name}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
