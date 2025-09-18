"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Eye } from "lucide-react"

const projects = [
  {
    title: "Personal Blog Website",
    description:
      "A modern, responsive blog website with a content management system for posting technology articles. Features include article categorization, search functionality, and responsive design.",
    image: "/modern-blog-website-interface-clean-design.jpg",
    technologies: ["React", "Node.js", "MongoDB", "CSS"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Sentiment Analysis App",
    description:
      "An intelligent application that analyzes customer reviews from e-commerce platforms using Natural Language Processing to determine sentiment polarity and provide business insights.",
    image: "/data-visualization-sentiment-analysis-dashboard.jpg",
    technologies: ["Python", "Machine Learning", "NLP", "Flask"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Data Visualization Dashboard",
    description:
      "An interactive dashboard for visualizing weather and financial data with real-time updates, charts, and customizable filters. Built with modern data visualization libraries.",
    image: "/interactive-dashboard-charts-graphs-data-visualiza.jpg",
    technologies: ["JavaScript", "D3.js", "Python", "API Integration"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
]

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
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
    <section id="projects" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4 text-primary">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              A showcase of my recent work in web development, data science, and machine learning
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className={`group hover:shadow-xl transition-all duration-300 overflow-hidden ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div
                    className={`absolute inset-0 bg-primary/80 flex items-center justify-center transition-opacity duration-300 ${
                      hoveredProject === index ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div className="flex space-x-4">
                      <Button size="sm" variant="secondary" onClick={() => window.open(project.liveUrl, "_blank")}>
                        <Eye className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                      <Button size="sm" variant="secondary" onClick={() => window.open(project.githubUrl, "_blank")}>
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                    </div>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="font-heading text-xl text-foreground">{project.title}</CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed text-pretty">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2 pt-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 bg-transparent"
                      onClick={() => window.open(project.liveUrl, "_blank")}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 bg-transparent"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View More Projects */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" onClick={() => window.open("https://github.com/mdianfauzi", "_blank")}>
              View More Projects on GitHub
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
