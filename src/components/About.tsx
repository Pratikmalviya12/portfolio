import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Get to know more about who I am, what I do, and what skills I have
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
                    <p className="text-sm font-semibold">San Francisco, CA</p>
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
                    <p className="text-sm font-semibold">5+ Years</p>
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
                    <p className="text-sm font-semibold">pratik@example.com</p>
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
                Full Stack Developer
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm a passionate Full Stack Developer with over 5 years of
                experience in creating beautiful, functional, and user-friendly
                web applications. I specialize in React, Next.js, TypeScript,
                and modern web technologies. When I'm not coding, you can find
                me exploring new technologies, contributing to open source
                projects, or sharing knowledge with the developer community.
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
                      Creating responsive and interactive user interfaces with
                      modern frameworks
                    </p>
                  </div>
                  <div className="bg-card border rounded-xl p-6 shadow-sm">
                    <h5 className="font-semibold mb-2">3D Web Development</h5>
                    <p className="text-sm text-muted-foreground">
                      Creating immersive 3D experiences using Three.js
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-card border rounded-xl p-6 shadow-sm">
                    <h5 className="font-semibold mb-2">Backend Development</h5>
                    <p className="text-sm text-muted-foreground">
                      Building robust APIs and server-side applications
                    </p>
                  </div>
                  <div className="bg-card border rounded-xl p-6 shadow-sm">
                    <h5 className="font-semibold mb-2">UI/UX Design</h5>
                    <p className="text-sm text-muted-foreground">
                      Designing beautiful and user-friendly interfaces
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button
                onClick={scrollToContact}
                className="bg-purple-600 hover:bg-purple-700 text-black border border-purple-500"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Get in Touch
              </Button>
              <Button
                variant="outline"
                className="px-6 py-3 flex items-center justify-center gap-2"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                Download Resume
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
