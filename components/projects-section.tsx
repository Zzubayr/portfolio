"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "Arh Consulting Solutions Website",
    year: "2025",
    description:
      "Built a full-scale corporate website for a consulting firm — focusing on clean, professional design, responsive layout, and performance optimization.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "Responsive Design"],
    image: "/modern-corporate-consulting-website.jpg",
  },
  {
    title: "Conference Registration Platform",
    year: "2024",
    description:
      "Built using Next.js, Tailwind CSS, and Zod. Includes admin-controlled invitation management, ticket generation, and QR scanning for event entry.",
    tags: ["Next.js", "Zod", "QR Code", "Admin Dashboard"],
    image: "/conference-registration-platform-with-tickets.jpg",
  },
  {
    title: "Geospatial Data Visualization Tool",
    year: "2025",
    description:
      "Interactive mapping application for analyzing and visualizing spatial data using Python. Features include choropleth maps, route optimization, and spatial queries.",
    tags: ["Python", "GeoPandas", "Folium", "Shapely", "OSMnx"],
    image: "/geospatial-data-visualization-map.jpg",
  },
  {
    title: "E-commerce Clothing Platform",
    year: "2024",
    description:
      "Developed with Next.js, Sanity CMS, and Tailwind CSS, integrating Paystack for secure payments. Full shopping cart and checkout experience.",
    tags: ["Next.js", "Sanity CMS", "Paystack", "E-commerce"],
    image: "/modern-ecommerce-clothing-store.jpg",
  },
  {
    title: "ML-Powered Property Price Predictor",
    year: "2025",
    description:
      "Machine learning model for predicting property prices based on location, size, and amenities. Built with Python, scikit-learn, and integrated with a web interface.",
    tags: ["Python", "Machine Learning", "scikit-learn", "Data Analysis"],
    image: "/machine-learning-property-price-prediction-dashboa.jpg",
  },
  {
    title: "Addawwamuun School Landing Page",
    year: "2024",
    description:
      "Displays different currencies based on user location. Includes a dynamic form for students to upload payment receipts with automated email notifications.",
    tags: ["Next.js", "Geolocation", "Google Drive API", "Email Integration"],
    image: "/school-landing-page-with-forms.jpg",
  },
  {
    title: "Qur'an Mobile App",
    year: "2025 – Ongoing",
    description:
      "A mobile app built with React Native and NativeWind for studying and reading the Qur'an. Features include bookmarks, translations, and audio recitations.",
    tags: ["React Native", "NativeWind", "Mobile", "In Progress"],
    image: "/quran-mobile-app-interface.jpg",
  },
  {
    title: "Department Consortium Platform",
    year: "2025",
    description:
      "A collaborative portal for the University of Lagos Surveying and Geoinformatics Department — providing study guides, learning materials, and alumni communication.",
    tags: ["Next.js", "Community Platform", "Education", "CMS"],
    image: "/university-department-portal-platform.jpg",
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: index * 0.15,
      ease: "easeOut",
    },
  }),
}

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto" ref={ref}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-center"
          >
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-center mb-12 sm:mb-16 text-base sm:text-lg"
          >
            What I've built
          </motion.p>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                <Card className="group overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 hover:glow h-full">
                  <motion.div
                    className="relative overflow-hidden aspect-video"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                  </motion.div>

                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">{project.year}</p>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed text-sm">{project.description}</p>

                    <motion.div
                      className="flex flex-wrap gap-2"
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                      variants={{
                        visible: {
                          transition: {
                            staggerChildren: 0.05,
                            delayChildren: index * 0.15 + 0.3,
                          },
                        },
                      }}
                    >
                      {project.tags.map((tag) => (
                        <motion.div
                          key={tag}
                          variants={{
                            hidden: { opacity: 0, scale: 0.8 },
                            visible: { opacity: 1, scale: 1 },
                          }}
                        >
                          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-xs">
                            {tag}
                          </Badge>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
