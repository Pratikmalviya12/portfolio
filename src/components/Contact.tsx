import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  Button,
  TextField,
  Box,
  Typography,
} from "@mui/material";
import { useSnackbar } from "notistack";
import { portfolioData } from '../data';

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: portfolioData.personal.email,
    href: `mailto:${portfolioData.personal.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: portfolioData.personal.phone,
    href: `tel:${portfolioData.personal.phone}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: portfolioData.personal.location,
    href: "https://maps.google.com",
  },
];

const socialLinks = portfolioData.socialLinks.map(social => ({
  icon: social.iconType === 'github' ? Github : 
        social.iconType === 'linkedin' ? Linkedin : 
        social.iconType === 'twitter' ? Twitter : Github,
  label: social.platform,
  href: social.url,
  color: social.platform === 'GitHub' ? 'hover:text-gray-600' :
         social.platform === 'LinkedIn' ? 'hover:text-blue-600' :
         'hover:text-blue-400',
}));

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };

    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Validate subject
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = "Subject must be at least 5 characters";
    }

    // Validate message
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error !== "");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form before submission
    if (!validateForm()) {
      enqueueSnackbar("Please fix the errors in the form", {
        variant: "error",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Create email content
      const recipientEmail = "pratik@example.com"; // Replace with your actual email
      const emailSubject = encodeURIComponent(
        `Portfolio Contact: ${formData.subject}`
      );

      // Create formatted email body
      const emailBody = encodeURIComponent(
        `Hi Pratik,

I'm reaching out through your portfolio website contact form.
${formData.message}

Name: ${formData.name}
---
This message was sent through your portfolio contact form.`
      );

      // Create mailto URL
      const mailtoUrl = `mailto:${recipientEmail}?subject=${emailSubject}&body=${emailBody}`;

      // Open email client
      window.location.href = mailtoUrl;

      // Show success message
      enqueueSnackbar(
        "Opening your email client with the message pre-filled!",
        {
          variant: "success",
        }
      );

      // Optional: Reset form after opening email client
      // You might want to keep the form filled in case the user wants to make changes
      setTimeout(() => {
        setFormData({ name: "", email: "", subject: "", message: "" });
        setErrors({ name: "", email: "", subject: "", message: "" });
      }, 1000);
    } catch (error) {
      console.error("Error opening email client:", error);
      enqueueSnackbar("Could not open email client. Please try again.", {
        variant: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const openQuickEmail = () => {
    const recipientEmail = "pratik@example.com"; // Replace with your actual email
    const emailSubject = encodeURIComponent("Contact from Portfolio Website");
    const emailBody = encodeURIComponent(
      `Hi Pratik,

I'd like to get in touch with you regarding...

Best regards,`
    );

    const mailtoUrl = `mailto:${recipientEmail}?subject=${emailSubject}&body=${emailBody}`;
    window.location.href = mailtoUrl;

    enqueueSnackbar("Opening email client for quick contact!", {
      variant: "info",
    });
  };

  return (
    <section id="contact" className="py-20 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{portfolioData.sections.contact.title}</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {portfolioData.sections.contact.subtitle}. Have a project in mind or just want to connect? I'd love to hear
            from you. Let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's Talk</h3>
              <p className="text-muted-foreground mb-8">
                I'm always open to discussing new opportunities, creative
                projects, or just having a friendly conversation about
                technology and design.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 rounded-lg bg-card hover:bg-accent transition-colors group"
                >
                  <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <info.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">{info.label}</div>
                    <div className="text-sm text-muted-foreground">
                      {info.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="pt-8"
            >
              <h4 className="font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={
                      isInView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0 }
                    }
                    transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 rounded-full bg-card border border-border transition-colors ${social.color}`}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <Card sx={{ 
              backgroundColor: 'var(--background)', 
              '&.MuiCard-root': {
                backgroundColor: { xs: 'background.paper', md: 'background.paper' },
                '@media (prefers-color-scheme: dark)': {
                  backgroundColor: '#000000'
                }
              },
              '.dark &': {
                backgroundColor: '#000000'
              }
            }}>
              <CardHeader>
                <Typography variant="h5" component="h2">
                  Send a Message
                </Typography>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                      }
                      transition={{ duration: 0.6, delay: 0.6 }}
                    >
                      <TextField
                        fullWidth
                        id="name"
                        name="name"
                        label="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        variant="outlined"
                        error={!!errors.name}
                        helperText={errors.name}
                        sx={{ mb: 2 }}
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                      }
                      transition={{ duration: 0.6, delay: 0.7 }}
                    >
                      <TextField
                        fullWidth
                        id="email"
                        name="email"
                        label="Email Address"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        variant="outlined"
                        error={!!errors.email}
                        helperText={errors.email}
                        sx={{ mb: 2 }}
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    <TextField
                      fullWidth
                      id="subject"
                      name="subject"
                      label="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      error={!!errors.subject}
                      helperText={errors.subject}
                      sx={{ mb: 2 }}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.6, delay: 0.9 }}
                  >
                    <TextField
                      fullWidth
                      id="message"
                      name="message"
                      label="Message"
                      multiline
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      error={!!errors.message}
                      helperText={errors.message}
                      sx={{ mb: 2 }}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.6, delay: 1 }}
                  >
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      disabled={isSubmitting}
                      fullWidth
                      sx={{ textTransform: "none", position: "relative" }}
                    >
                      <motion.div
                        className="flex items-center justify-center"
                        animate={isSubmitting ? { scale: 0.9 } : { scale: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {isSubmitting ? (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                            className="mr-2"
                          >
                            ⏳
                          </motion.div>
                        ) : (
                          <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        )}
                        {isSubmitting
                          ? "Opening Email..."
                          : "Open in Email App"}
                      </motion.div>
                    </Button>
                  </motion.div>

                  {/* Quick Email Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.6, delay: 1.1 }}
                    className="text-center"
                  >
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 1 }}
                    >
                      Or send a quick email directly:
                    </Typography>
                    <Button
                      variant="text"
                      onClick={openQuickEmail}
                      sx={{ textTransform: "none" }}
                      startIcon={<Mail className="h-4 w-4" />}
                    >
                      {portfolioData.personal.email}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
