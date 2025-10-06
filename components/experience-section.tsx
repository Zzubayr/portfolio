"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Calendar, MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Freelancer",
    company: "Self-Employed",
    period: "2025 – Present",
    location: "Remote",
    description:
      "Working on multiple freelance projects while open to internship and job opportunities. Building custom web solutions for clients across various industries.",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
  },
  {
    title: "Frontend Developer",
    company: "Nexatage",
    period: "Early 2025",
    location: "Remote",
    description:
      "Collaborated with a startup team to build scalable, responsive web interfaces. Focused on creating intuitive user experiences and implementing modern design patterns.",
    tags: ["React", "Next.js", "JavaScript", "CSS"],
  },
  {
    title: "Frontend Engineer",
    company: "Reldrop",
    period: "2024",
    location: "Remote",
    description:
      "Worked on the front-end of a delivery company's web platform, focusing on clean UI and smooth user interactions. Implemented responsive designs and optimized performance.",
    tags: ["React", "Tailwind CSS", "JavaScript"],
  },
  {
    title: "Learning Web Development",
    company: "Self-Taught",
    period: "Since 2020",
    location: "Lagos, Nigeria",
    description:
      "Started my journey in web development, learning HTML, CSS, JavaScript, and modern frameworks. Built numerous personal projects and continuously expanded my skill set.",
    tags: ["HTML", "CSS", "JavaScript", "React"],
  },
]

const timelineVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      delay: index * 0.2,
      ease: "easeOut",
    },
  }),
}

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto" ref={ref}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-center"
          >
            My <span className="gradient-text">Journey</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-center mb-12 sm:mb-16 text-base sm:text-lg"
          >
            The road so far
          </motion.p>

          <div className="relative">
            <motion.div
              initial={{ height: 0 }}
              animate={isInView ? { height: "100%" } : { height: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute left-0 sm:left-8 top-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary"
            />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={timelineVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="relative pl-8 sm:pl-20"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                    className="absolute left-[-6px] sm:left-[26px] top-0 w-3 h-3 rounded-full bg-primary ring-4 ring-background"
                  />

                  <motion.div whileHover={{ x: 10 }} transition={{ type: "spring", stiffness: 300 }} className="group">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 gap-2">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold group-hover:text-primary transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-primary font-semibold">{exp.company}</p>
                      </div>
                      <div className="flex flex-col sm:items-end gap-1 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
