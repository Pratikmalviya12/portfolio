import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Chip, Card, CardContent, Button } from "@mui/material";
import { portfolioData, experienceData } from "../data";

const timelineEvents = experienceData.experiences.map((exp) => ({
  year: exp.startDate.substring(0, 4),
  period: exp.current ? "Present" : exp.endDate?.substring(0, 4) || "",
  title: exp.position,
  company: exp.company,
  location: exp.location,
  description: exp.description,
  technologies: exp.technologies,
  achievements: exp.achievements,
}));

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-20 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {portfolioData.sections.about.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {portfolioData.sections.about.subtitle}.{" "}
            {portfolioData.personal.bio}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Profile Avatar */}
            <div className="relative mb-8">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 rounded-3xl p-8 shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10">
                  <span className="text-8xl font-bold text-black">
                    Pratik Malviya
                  </span>
                </div>
              </div>
            </div>

            {/* Info Cards */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-card border rounded-xl p-4 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-purple-600 dark:text-purple-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      Location
                    </p>
                    <p className="text-sm font-semibold">
                      {portfolioData.personal.location}
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-card border rounded-xl p-4 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-blue-600 dark:text-blue-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      Experience
                    </p>
                    <p className="text-sm font-semibold">
                      {portfolioData.stats.yearsExperience} Years
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-card border rounded-xl p-4 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-green-600 dark:text-green-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      Email
                    </p>
                    <p className="text-sm font-semibold">
                      {portfolioData.personal.email}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Full Stack Developer Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                {portfolioData.personal.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {portfolioData.personal.description}
              </p>
            </motion.div>

            {/* What I Do Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h4 className="text-xl font-semibold mb-6">What I Do</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-card border rounded-xl p-6 shadow-sm">
                    <h5 className="font-semibold mb-2">Frontend Development</h5>
                    <p className="text-sm text-muted-foreground">
                      Building responsive and interactive user interfaces with
                      React, TypeScript, and modern CSS frameworks like Tailwind
                      CSS
                    </p>
                  </div>
                  <div className="bg-card border rounded-xl p-6 shadow-sm">
                    <h5 className="font-semibold mb-2">
                      Full Stack Development
                    </h5>
                    <p className="text-sm text-muted-foreground">
                      Creating end-to-end web applications combining modern
                      frontend with robust backend solutions
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-card border rounded-xl p-6 shadow-sm">
                    <h5 className="font-semibold mb-2">Backend Development</h5>
                    <p className="text-sm text-muted-foreground">
                      Developing high-performance APIs and server-side
                      applications using Python, FastAPI, and SQL databases
                    </p>
                  </div>
                  <div className="bg-card border rounded-xl p-6 shadow-sm">
                    <h5 className="font-semibold mb-2">
                      Performance Optimization
                    </h5>
                    <p className="text-sm text-muted-foreground">
                      Optimizing web applications for better user experience,
                      API performance, and database query efficiency
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
