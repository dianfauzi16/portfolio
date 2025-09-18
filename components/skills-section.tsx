"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "JavaScript", level: 88 },
      { name: "React", level: 82 },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", level: 78 },
      { name: "Python", level: 85 },
    ],
  },
  {
    title: "Data Science & ML",
    skills: [
      { name: "Machine Learning", level: 75 },
      { name: "Data Analysis", level: 80 },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "GitHub", level: 88 },
      { name: "Git", level: 85 },
    ],
  },
]

const allSkills = [
  "HTML",
  "CSS",
  "JavaScript",
  "Python",
  "React",
  "Node.js",
  "Machine Learning",
  "GitHub",
  "Git",
  "Data Analysis",
  "SQL",
  "MongoDB",
]

export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedBars, setAnimatedBars] = useState<string[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate skill bars with delay
          setTimeout(() => {
            skillCategories.forEach((category, categoryIndex) => {
              category.skills.forEach((skill, skillIndex) => {
                setTimeout(
                  () => {
                    setAnimatedBars((prev) => [...prev, `${categoryIndex}-${skillIndex}`])
                  },
                  categoryIndex * 200 + skillIndex * 100,
                )
              })
            })
          }, 500)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4 text-primary">Skills & Technologies</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              A comprehensive overview of my technical skills and proficiency levels
            </p>
          </div>

          {/* Skills Overview */}
          <div className="mb-12">
            <h3 className="font-heading font-semibold text-xl mb-6 text-center">Technologies I Work With</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {allSkills.map((skill, index) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className={`px-4 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Detailed Skills */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <Card key={category.title} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-lg mb-4 text-primary">{category.title}</h3>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div
                            className={`bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-1000 ease-out ${
                              animatedBars.includes(`${categoryIndex}-${skillIndex}`) ? `w-[${skill.level}%]` : "w-0"
                            }`}
                            style={{
                              width: animatedBars.includes(`${categoryIndex}-${skillIndex}`) ? `${skill.level}%` : "0%",
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
