"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Brain, GraduationCap } from "lucide-react"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
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
    <section id="about" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4 text-primary">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Get to know more about my journey in technology and my passion for innovation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="/professional-developer-working-on-laptop-modern-of.jpg"
                  alt="M Dian Fauzi working"
                  className="rounded-lg shadow-2xl w-full max-w-md mx-auto"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg -z-10" />
            </div>

            {/* Right Column - Content */}
            <div className="space-y-6">
              <div>
                <h3 className="font-heading font-semibold text-2xl mb-4 text-foreground">
                  Passionate Informatics Student
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 text-pretty">
                  I'm currently pursuing my degree in Informatics, where I've discovered my passion for the intersection
                  of web development, data science, and machine learning. My journey began with curiosity about how
                  technology can solve real-world problems, and it has evolved into a deep commitment to creating
                  innovative solutions.
                </p>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  When I'm not coding, you'll find me exploring the latest tech trends, contributing to open-source
                  projects, or experimenting with new frameworks and tools. I believe in continuous learning and staying
                  at the forefront of technological advancement.
                </p>
              </div>

              {/* Interest Cards */}
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Code className="h-8 w-8 text-primary mb-3" />
                    <h4 className="font-semibold mb-2">Web Development</h4>
                    <p className="text-sm text-muted-foreground">
                      Building responsive, user-friendly web applications with modern frameworks
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Database className="h-8 w-8 text-primary mb-3" />
                    <h4 className="font-semibold mb-2">Data Science</h4>
                    <p className="text-sm text-muted-foreground">
                      Extracting insights from data to drive informed decision-making
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Brain className="h-8 w-8 text-primary mb-3" />
                    <h4 className="font-semibold mb-2">Machine Learning</h4>
                    <p className="text-sm text-muted-foreground">Developing intelligent systems that learn and adapt</p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <GraduationCap className="h-8 w-8 text-primary mb-3" />
                    <h4 className="font-semibold mb-2">Continuous Learning</h4>
                    <p className="text-sm text-muted-foreground">
                      Always exploring new technologies and expanding my skillset
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
