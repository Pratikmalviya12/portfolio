import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Badge } from "./ui/badge";
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
  SiVuedotjs,
  SiPostgresql,
} from "react-icons/si";

const timelineEvents = [
  {
    year: "2023-10",
    period: "Present",
    title: "Associate Analyst",
    company: "Deloitte USI",
    location: "Mumbai, India",
    description:
      "Associate Analyst at Deloitte USI focusing on web development, API optimization, and database performance improvements using cutting-edge technologies.",
    technologies: [
      "React",
      "TypeScript",
      "Python",
      "FastAPI",
      "SQL",
      "Tailwind CSS",
    ],
    achievements: [
      "Increased user engagement metrics by 25% by refining user interface design and functionality",
      "Lowered development costs by 15% by enhancing coding efficiency",
      "Enhanced API performance, resulting in a 30% reduction in system latency",
      "Optimized user interface performance by 20% employing cutting-edge React techniques",
      "Improved database query efficiency by 50% by restructuring SQL tables and queries",
      "Enhanced system reliability by 40% through timely debugging and resolution of critical issues",
    ],
  },
  {
    year: "2022-08",
    period: "2023-09",
    title: "Full Stack Developer",
    company: "Digital Solutions Ltd.",
    location: "Remote",
    description:
      "Developed and maintained multiple client projects, focusing on performance and user experience optimization.",
    technologies: ["Vue.js", "Python", "PostgreSQL", "Docker"],
    achievements: [
      "Built responsive web applications serving 10,000+ daily active users",
      "Reduced page load times by 40% through code optimization and caching strategies",
      "Implemented automated testing reducing bugs in production by 60%",
    ],
  },
  {
    year: "2020-06",
    period: "2022-07",
    title: "Frontend Developer",
    company: "Creative Agency",
    location: "New York, USA",
    description:
      "Created responsive web interfaces and collaborated with design teams to deliver pixel-perfect implementations.",
    technologies: ["JavaScript", "CSS", "React", "Figma"],
    achievements: [
      "Delivered 25+ high-quality web projects for diverse client portfolio",
      "Improved cross-browser compatibility reducing support tickets by 45%",
      "Collaborated with UX team to increase user satisfaction scores by 35%",
    ],
  },
];

const technologyIcons: Record<string, { icon: any; color: string }> = {
  React: { icon: SiReact, color: "#61DAFB" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  Python: { icon: SiPython, color: "#3776AB" },
  FastAPI: { icon: SiFastapi, color: "#009688" },
  SQL: { icon: SiMysql, color: "#4479A1" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },
  "Vue.js": { icon: SiVuedotjs, color: "#4FC08D" },
  PostgreSQL: { icon: SiPostgresql, color: "#336791" },
  Docker: { icon: SiDocker, color: "#2496ED" },
  JavaScript: { icon: SiJavascript, color: "#F7DF1E" },
  CSS: { icon: SiCss3, color: "#1572B6" },
  Figma: { icon: SiFigma, color: "#F24E1E" },
  HTML5: { icon: SiHtml5, color: "#E34F26" },
  "Node.js": { icon: SiNodedotjs, color: "#339933" },
  "Next.js": { icon: SiNextdotjs, color: "#000000" },
  Git: { icon: SiGit, color: "#F05032" },
};

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="experience" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My professional journey and the impact I've made throughout my
            career
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Professional Timeline */}
          {/* Professional Timeline */}
          <div className="relative">
            {/* Simple Timeline Line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-300 dark:bg-gray-600"></div>

            <div className="space-y-8">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{
                    duration: 0.6,
                    delay: 0.3 + index * 0.15,
                    ease: "easeOut",
                  }}
                  className="relative pl-12"
                >
                  {/* Simple Timeline Dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.15 }}
                    className="absolute left-2.5 top-6 w-3 h-3 bg-blue-600 dark:bg-blue-400 rounded-full border-2 border-white dark:border-gray-900 shadow-sm z-10"
                  ></motion.div>

                  {/* Experience Card */}
                  <motion.div
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                    className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                          {event.title}
                        </h4>
                        <div className="flex items-center gap-2 text-sm mb-2">
                          <span className="font-medium text-blue-600 dark:text-blue-400">
                            {event.company}
                          </span>
                          <span className="text-gray-500">•</span>
                          <span className="text-gray-600 dark:text-gray-300">
                            {event.location}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-300 font-medium">
                        <svg
                          className="w-3 h-3"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>
                          {event.year} - {event.period}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-700 dark:text-gray-200 mb-4 leading-relaxed">
                      {event.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-4">
                      <h5 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                        Technologies:
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {event.technologies.map((tech) => {
                          const techInfo = technologyIcons[tech];
                          if (techInfo) {
                            const IconComponent = techInfo.icon;
                            return (
                              <Badge variant="dark:primary secondary" key={tech}>
                                <IconComponent
                                  className="text-sm"
                                  style={{ color: techInfo.color }}
                                />
                                <span className="text-gray-700 dark:text-gray-300">
                                  {tech}
                                </span>
                              </Badge>
                            );
                          }
                          return (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="text-xs"
                            >
                              {tech}
                            </Badge>
                          );
                        })}
                      </div>
                    </div>

                    {/* Key Achievements */}
                    <div>
                      <h5 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                        Key Achievements:
                      </h5>
                      <ul className="space-y-2">
                        {event.achievements.map((achievement, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-200"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 mt-2 flex-shrink-0"></span>
                            <span className="leading-relaxed">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Professional Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-16"
          >
            <div className="text-center mb-8">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Career Milestones
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Key numbers that define my professional journey
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {
                  number: "50+",
                  label: "Projects Delivered",
                  icon: "🚀",
                  color: "from-blue-500 to-blue-600",
                },
                {
                  number: "6+",
                  label: "Years Experience",
                  icon: "⏱️",
                  color: "from-green-500 to-green-600",
                },
                {
                  number: "15+",
                  label: "Technologies Mastered",
                  icon: "⚡",
                  color: "from-purple-500 to-purple-600",
                },
                {
                  number: "25+",
                  label: "Happy Clients",
                  icon: "👥",
                  color: "from-orange-500 to-orange-600",
                },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.8 }
                  }
                  transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <div
                    className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}
                  >
                    {stat.number}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 font-medium leading-tight">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
