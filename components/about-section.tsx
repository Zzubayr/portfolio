"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Code2, Heart, Brain, Map } from "lucide-react"
import { Card } from "@/components/ui/card"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto" ref={ref}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-center"
          >
            About <span className="gradient-text">Me</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-center mb-12 sm:mb-16 text-base sm:text-lg"
          >
            Get to know me better
          </motion.p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            <motion.div variants={itemVariants}>
              <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:glow h-full">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4"
                >
                  <Code2 className="text-primary" size={24} />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">5+ Years Experience</h3>
                <p className="text-muted-foreground text-sm">
                  Building web and mobile applications with modern frameworks
                </p>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:glow h-full">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4"
                >
                  <GraduationCap className="text-primary" size={24} />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">Engineering Student</h3>
                <p className="text-muted-foreground text-sm">Surveying & Geoinformatics at University of Lagos</p>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:glow h-full">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4"
                >
                  <Heart className="text-primary" size={24} />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">Passion Driven</h3>
                <p className="text-muted-foreground text-sm">Creating seamless UX and solving real-world problems</p>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 gap-6 mb-12"
          >
            <motion.div variants={itemVariants}>
              <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:glow h-full">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4"
                >
                  <Brain className="text-primary" size={24} />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">Aspiring AI/ML Engineer</h3>
                <p className="text-muted-foreground text-sm">
                  Learning machine learning and data science through World Quant University, Datacamp, Coursera, and
                  Deeplearning.ai
                </p>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:glow h-full">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4"
                >
                  <Map className="text-primary" size={24} />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">GIS Specialist</h3>
                <p className="text-muted-foreground text-sm">
                  Working with geospatial data using GeoPandas, Shapely, Rasterio, Folium, and OSMnx
                </p>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="prose prose-invert max-w-none"
          >
            <motion.p
              variants={itemVariants}
              className="text-muted-foreground leading-relaxed text-base sm:text-lg mb-6"
            >
              I'm a passionate Full-Stack Developer with over 5 years of experience building web and mobile applications
              using modern frameworks like <span className="text-primary font-semibold">Next.js</span>,
              <span className="text-primary font-semibold"> React</span>,
              <span className="text-primary font-semibold"> Node.js</span>,
              <span className="text-primary font-semibold"> Nest.js</span>, and
              <span className="text-primary font-semibold"> React Native</span>. I also work extensively with
              <span className="text-primary font-semibold"> Python</span> for data analysis, machine learning, and
              geospatial applications.
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-muted-foreground leading-relaxed text-base sm:text-lg mb-6"
            >
              Currently pursuing my degree in Surveying and Geoinformatics Engineering at the University of Lagos
              (expected graduation 2028), I'm expanding my expertise into
              <span className="text-primary font-semibold"> AI/ML engineering</span> through courses on World Quant
              University, Datacamp, Coursera, and Deeplearning.ai. I specialize in
              <span className="text-primary font-semibold"> Geographic Information Systems (GIS)</span>, working with
              tools like GeoPandas, Shapely, Rasterio, Folium, and OSMnx to analyze and visualize spatial data.
            </motion.p>
            <motion.p variants={itemVariants} className="text-muted-foreground leading-relaxed text-base sm:text-lg">
              Whether it's building corporate websites, e-commerce platforms, mobile apps, scalable backend APIs, or
              developing geospatial analysis tools and machine learning models, I'm always excited to take on new
              challenges. I love solving real-world problems through elegant design, clean code, and data-driven
              insights.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
