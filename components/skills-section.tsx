"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"

const skillCategories = [
  {
    title: "Frontend Frameworks",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "React Native", level: 85 },
      { name: "TypeScript", level: 88 },
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Nest.js", level: 80 },
      { name: "REST APIs", level: 88 },
      { name: "GraphQL", level: 82 },
    ],
  },
  {
    title: "Programming Languages",
    skills: [
      { name: "JavaScript", level: 95 },
      { name: "TypeScript", level: 88 },
      { name: "Python", level: 85 },
      { name: "SQL", level: 80 },
    ],
  },
  {
    title: "AI/ML & Data Science",
    skills: [
      { name: "Machine Learning", level: 75 },
      { name: "Data Analysis", level: 80 },
      { name: "Python Libraries", level: 82 },
      { name: "Model Training", level: 70 },
    ],
  },
  {
    title: "GIS & Geospatial",
    skills: [
      { name: "GeoPandas", level: 85 },
      { name: "Folium", level: 80 },
      { name: "Shapely", level: 82 },
      { name: "Rasterio", level: 75 },
    ],
  },
  {
    title: "Styling & Design",
    skills: [
      { name: "Tailwind CSS", level: 95 },
      { name: "CSS/SCSS", level: 90 },
      { name: "Responsive Design", level: 95 },
      { name: "UI/UX Design", level: 85 },
    ],
  },
  {
    title: "Tools & CMS",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Sanity CMS", level: 85 },
      { name: "Docker", level: 75 },
      { name: "Vercel/Netlify", level: 90 },
    ],
  },
  {
    title: "Geospatial Tools",
    skills: [
      { name: "PyProj", level: 78 },
      { name: "OSMnx", level: 75 },
      { name: "QGIS", level: 80 },
      { name: "ArcGIS", level: 72 },
    ],
  },
]

function SkillBar({ name, level, index }: { name: string; level: number; index: number }) {
  const [width, setWidth] = useState(0)
  const barRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(barRef, { once: true, margin: "-50px" })

  useEffect(() => {
    if (isInView) {
      setTimeout(() => setWidth(level), index * 100)
    }
  }, [isInView, level, index])

  return (
    <motion.div
      ref={barRef}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-6"
    >
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium">{name}</span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
          className="text-sm text-muted-foreground"
        >
          {level}%
        </motion.span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
          style={{ width: `${width}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  )
}

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto" ref={ref}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-center"
          >
            My <span className="gradient-text">Skills</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-center mb-12 sm:mb-16 text-base sm:text-lg"
          >
            Code arsenal
          </motion.p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                <h3 className="text-xl font-bold mb-6 text-primary">{category.title}</h3>
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} index={skillIndex} />
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
