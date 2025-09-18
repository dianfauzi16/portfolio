"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Github, Linkedin, Instagram, Music } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const { toast } = useToast()

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      })
      setFormData({ name: "", email: "", message: "" })
      setIsSubmitting(false)
    }, 1000)
  }

  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      url: "mailto:mdianfauzi@example.com",
      handle: "mdianfauzi@example.com",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/mdianfauzi",
      handle: "@mdianfauzi",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/mdianfauzi",
      handle: "/in/mdianfauzi",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/mdianfauzi",
      handle: "@mdianfauzi",
    },
    {
      name: "TikTok",
      icon: Music,
      url: "https://tiktok.com/@mdianfauzi",
      handle: "@mdianfauzi",
    },
  ]

  return (
    <section id="contact" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4 text-primary">Get In Touch</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Have a project in mind or want to collaborate? I'd love to hear from you!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="font-heading text-2xl text-primary">Send Me a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or just say hello!"
                      rows={5}
                      className="w-full"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info & Social Links */}
            <div className="space-y-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl text-primary">Let's Connect</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-pretty">
                    I'm always open to discussing new opportunities, interesting projects, or just having a chat about
                    technology and innovation. Feel free to reach out through any of these platforms!
                  </p>

                  <div className="space-y-4">
                    {socialLinks.map((link) => (
                      <div key={link.name} className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <link.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">{link.name}</p>
                          <Button
                            variant="link"
                            className="p-0 h-auto text-muted-foreground hover:text-primary"
                            onClick={() => window.open(link.url, "_blank")}
                          >
                            {link.handle}
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
                <CardContent className="p-6 text-center">
                  <h3 className="font-heading font-semibold text-xl mb-2">Quick Contact</h3>
                  <p className="text-muted-foreground mb-4">For immediate inquiries</p>
                  <Button
                    onClick={() => window.open("mailto:mdianfauzi@example.com")}
                    className="bg-primary hover:bg-primary/90"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Email Me Directly
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
