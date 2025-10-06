"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card } from "@/components/ui/card"
import { GraduationCap, BookOpen, Award } from "lucide-react"

const education = [
  {
    icon: GraduationCap,
    title: "University of Lagos",
    degree: "B.Eng. Surveying & Geoinformatics",
    period: "2023 - 2028 (Expected)",
    description: "Specializing in Geographic Information Systems, Remote Sensing, and Spatial Data Analysis",
  },
  {
    icon: BookOpen,
    title: "Online Learning Platforms",
    degree: "AI/ML & Data Science Courses",
    period: "2024 - Present",
    description: "Active learner on World Quant University, Datacamp, Coursera, and Deeplearning.ai",
  },
]

const certifications = [
  "Machine Learning Specialization - Coursera",
  "Python for Data Science - Datacamp",
  "Deep Learning Specialization - Deeplearning.ai",
  "Applied Data Science - World Quant University",
]

export function EducationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="education" className="py-20 sm:py-32 bg-muted/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto" ref={ref}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-center"
          >
            Education & <span className="gradient-text">Learning</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-center mb-12 sm:mb-16 text-base sm:text-lg"
          >
            Continuous learning journey
          </motion.p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:glow h-full">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4"
                  >
                    <edu.icon className="text-primary" size={24} />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-1">{edu.title}</h3>
                  <p className="text-primary font-semibold mb-2">{edu.degree}</p>
                  <p className="text-sm text-muted-foreground mb-3">{edu.period}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{edu.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="p-6 sm:p-8 bg-card border-border">
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center"
                >
                  <Award className="text-primary" size={24} />
                </motion.div>
                <h3 className="text-2xl font-bold">Certifications & Courses</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p className="text-sm">{cert}</p>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
