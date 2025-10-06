import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";
import {
  ExternalLink,
  Github,
  ChevronLeft,
  ChevronRight,
  X,
  Calendar,
  Code,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import {
  Card,
  CardContent,
  Chip,
  Button,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { projectsData, portfolioData } from "../data";

const projects = projectsData.projects.map((project) => ({
  id: parseInt(project.id),
  title: project.title,
  description: project.description,
  image:
    project.images?.[0] ||
    "https://images.unsplash.com/photo-1592773307163-962d25055c3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzU3MzM5MTAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  technologies: project.technologies,
  category:
    project.category === "fullstack"
      ? "Full Stack"
      : project.category === "frontend"
      ? "Frontend"
      : project.category === "backend"
      ? "Backend"
      : "Full Stack",
  github: project.githubUrl || "#",
  demo: project.demoUrl || "#",
  featured: project.featured,
}));

const categories = projectsData.categories.map((cat) =>
  cat.name === "All Projects" ? "All" : cat.name
);

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleProjectClick = (project: any) => {
    // Find the full project data from projectsData
    const fullProject = projectsData.projects.find(
      (p) => p.id === project.id.toString()
    );
    setSelectedProject(fullProject);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  const featuredProjects = projects.filter((project) => project.featured);

  // Auto-carousel functionality
  useEffect(() => {
    if (featuredProjects.length <= 1 || isHovered || modalOpen) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredProjects.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [featuredProjects.length, isHovered, modalOpen]);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredProjects.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length
    );
  };

  return (
    <section id="projects" className="py-20 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {portfolioData.sections.projects.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {portfolioData.sections.projects.subtitle}. A selection of my recent
            work showcasing different technologies and approaches to
            problem-solving.
          </p>
        </motion.div>

        {/* Featured Projects Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mb-16"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="overflow-hidden rounded-lg">
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {featuredProjects.map((project) => (
                <div key={project.id} className="w-full flex-shrink-0">
                  <Card
                    className="overflow-hidden cursor-pointer"
                    onClick={() => handleProjectClick(project)}
                  >
                    <div className="grid md:grid-cols-2 gap-0">
                      <div className="relative h-64 md:h-auto">
                        <ImageWithFallback
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      </div>
                      <CardContent className="p-8 flex flex-col justify-center">
                        <Chip
                          label={project.category}
                          color="primary"
                          variant="filled"
                          sx={{ mb: 2 }}
                        />
                        <h3 className="text-2xl font-bold mb-4">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground mb-6">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.technologies.map((tech) => (
                            <Chip
                              key={tech}
                              label={tech}
                              variant="outlined"
                              size="small"
                              sx={{ mr: 1, mb: 1 }}
                            />
                          ))}
                        </div>
                        <div className="flex gap-4">
                          <Button
                            variant="outlined"
                            size="small"
                            component="a"
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ textTransform: "none" }}
                            startIcon={<Github className="h-4 w-4" />}
                          >
                            Code
                          </Button>
                          <Button
                            variant="contained"
                            size="small"
                            component="a"
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ textTransform: "none" }}
                            startIcon={<ExternalLink className="h-4 w-4" />}
                          >
                            Live Demo
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Carousel Controls */}
          <IconButton
            onClick={prevSlide}
            sx={{
              position: "absolute",
              left: "16px",
              top: "50%",
              transform: "translateY(-50%)",
              backgroundColor: "background.paper",
            }}
            size="small"
          >
            <ChevronLeft className="h-4 w-4" />
          </IconButton>
          <IconButton
            onClick={nextSlide}
            sx={{
              position: "absolute",
              right: "16px",
              top: "50%",
              transform: "translateY(-50%)",
              backgroundColor: "background.paper",
            }}
            size="small"
          >
            <ChevronRight className="h-4 w-4" />
          </IconButton>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {featuredProjects.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-100 ${
                  index === currentSlide
                    ? "bg-primary w-8"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                onClick={() => setCurrentSlide(index)}
                title={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "contained" : "outlined"}
              size="small"
              onClick={() => setActiveCategory(category)}
              sx={{ textTransform: "none", transition: "all 0.2s" }}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card
                className="overflow-hidden h-full transition-all duration-300 group-hover:shadow-lg cursor-pointer"
                onClick={() => handleProjectClick(project)}
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  <div className="absolute top-4 right-4">
                    <Chip
                      label={project.category}
                      color="primary"
                      variant="filled"
                      size="small"
                    />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        variant="outlined"
                        size="small"
                        sx={{ fontSize: "0.75rem", height: "20px" }}
                      />
                    ))}
                    {project.technologies.length > 3 && (
                      <Chip
                        label={`+${project.technologies.length - 3}`}
                        variant="outlined"
                        size="small"
                        sx={{ fontSize: "0.75rem", height: "20px" }}
                      />
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outlined"
                      size="small"
                      component="a"
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ flex: 1, textTransform: "none" }}
                      startIcon={<Github className="h-4 w-4" />}
                    >
                      Code
                    </Button>
                    <Button
                      variant="contained"
                      size="small"
                      component="a"
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ flex: 1, textTransform: "none" }}
                      startIcon={<ExternalLink className="h-4 w-4" />}
                    >
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Details Modal */}
      <Dialog
        open={modalOpen}
        onClose={handleCloseModal}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: { maxHeight: "90vh" },
        }}
      >
        {selectedProject && (
          <>
            <DialogTitle sx={{ pb: 1 }}>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="h5" component="h2">
                  {selectedProject.title}
                </Typography>
                <IconButton onClick={handleCloseModal} size="small">
                  <X />
                </IconButton>
              </Box>
              <Box display="flex" alignItems="center" gap={2} mt={1}>
                <Chip
                  label={
                    selectedProject.category === "fullstack"
                      ? "Full Stack"
                      : selectedProject.category === "frontend"
                      ? "Frontend"
                      : selectedProject.category === "backend"
                      ? "Backend"
                      : "Full Stack"
                  }
                  color="primary"
                  size="small"
                />
                <Box display="flex" alignItems="center" gap={1}>
                  <Calendar size={16} />
                  <Typography variant="body2" color="text.secondary">
                    {selectedProject.year}
                  </Typography>
                </Box>
                <Chip
                  label={selectedProject.status}
                  color={
                    selectedProject.status === "completed"
                      ? "success"
                      : "warning"
                  }
                  size="small"
                />
              </Box>
            </DialogTitle>

            <DialogContent>
              {/* Project Image */}
              {selectedProject.images && selectedProject.images[0] && (
                <Box mb={3}>
                  <img
                    src={selectedProject.images[0]}
                    alt={selectedProject.title}
                    style={{
                      width: "100%",
                      maxHeight: "300px",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                </Box>
              )}

              {/* Description */}
              <Typography variant="body1" paragraph>
                {selectedProject.longDescription}
              </Typography>

              {/* Technologies */}
              <Box mb={3}>
                <Typography variant="h6" gutterBottom>
                  <Code
                    size={20}
                    style={{ verticalAlign: "middle", marginRight: "8px" }}
                  />
                  Technologies Used
                </Typography>
                <Box display="flex" flexWrap="wrap" gap={1}>
                  {selectedProject.technologies.map((tech: string) => (
                    <Chip
                      key={tech}
                      label={tech}
                      variant="outlined"
                      size="small"
                    />
                  ))}
                </Box>
              </Box>

              {/* Features */}
              {selectedProject.features &&
                selectedProject.features.length > 0 && (
                  <Box mb={3}>
                    <Typography variant="h6" gutterBottom>
                      <CheckCircle
                        size={20}
                        style={{ verticalAlign: "middle", marginRight: "8px" }}
                      />
                      Key Features
                    </Typography>
                    <List dense>
                      {selectedProject.features.map(
                        (feature: string, index: number) => (
                          <ListItem key={index} sx={{ py: 0.5 }}>
                            <ListItemIcon sx={{ minWidth: "30px" }}>
                              <CheckCircle size={16} color="green" />
                            </ListItemIcon>
                            <ListItemText primary={feature} />
                          </ListItem>
                        )
                      )}
                    </List>
                  </Box>
                )}

              {/* Challenges */}
              {selectedProject.challenges &&
                selectedProject.challenges.length > 0 && (
                  <Box mb={3}>
                    <Typography variant="h6" gutterBottom>
                      <AlertCircle
                        size={20}
                        style={{ verticalAlign: "middle", marginRight: "8px" }}
                      />
                      Challenges Overcome
                    </Typography>
                    <List dense>
                      {selectedProject.challenges.map(
                        (challenge: string, index: number) => (
                          <ListItem key={index} sx={{ py: 0.5 }}>
                            <ListItemIcon sx={{ minWidth: "30px" }}>
                              <AlertCircle size={16} color="orange" />
                            </ListItemIcon>
                            <ListItemText primary={challenge} />
                          </ListItem>
                        )
                      )}
                    </List>
                  </Box>
                )}

              {/* Achievements */}
              {selectedProject.achievements &&
                selectedProject.achievements.length > 0 && (
                  <Box>
                    <Typography variant="h6" gutterBottom>
                      <CheckCircle
                        size={20}
                        style={{ verticalAlign: "middle", marginRight: "8px" }}
                      />
                      Achievements
                    </Typography>
                    <List dense>
                      {selectedProject.achievements.map(
                        (achievement: string, index: number) => (
                          <ListItem key={index} sx={{ py: 0.5 }}>
                            <ListItemIcon sx={{ minWidth: "30px" }}>
                              <CheckCircle size={16} color="blue" />
                            </ListItemIcon>
                            <ListItemText primary={achievement} />
                          </ListItem>
                        )
                      )}
                    </List>
                  </Box>
                )}
            </DialogContent>

            <DialogActions sx={{ p: 3, pt: 1 }}>
              {selectedProject.githubUrl &&
                selectedProject.githubUrl !== "#" && (
                  <Button
                    variant="outlined"
                    startIcon={<Github />}
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ textTransform: "none" }}
                  >
                    View Code
                  </Button>
                )}
              {selectedProject.demoUrl && selectedProject.demoUrl !== "#" && (
                <Button
                  variant="contained"
                  startIcon={<ExternalLink />}
                  href={selectedProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ textTransform: "none" }}
                >
                  Live Demo
                </Button>
              )}
            </DialogActions>
          </>
        )}
      </Dialog>
    </section>
  );
}
