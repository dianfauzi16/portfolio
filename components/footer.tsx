"use client"

import { Github, Linkedin, Mail, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left - Branding */}
          <div>
            <h3 className="font-heading font-bold text-2xl mb-2">M Dian Fauzi</h3>
            <p className="text-primary-foreground/80">Informatics Student | Web & AI Enthusiast</p>
          </div>

          {/* Center - Social Links */}
          <div className="flex justify-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-primary-foreground hover:bg-primary-foreground/10"
              onClick={() => window.open("https://github.com/mdianfauzi", "_blank")}
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-primary-foreground hover:bg-primary-foreground/10"
              onClick={() => window.open("https://linkedin.com/in/mdianfauzi", "_blank")}
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-primary-foreground hover:bg-primary-foreground/10"
              onClick={() => window.open("mailto:mdianfauzi@example.com")}
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Button>
          </div>

          {/* Right - Copyright */}
          <div className="text-center md:text-right">
            <p className="text-primary-foreground/80 text-sm">© {currentYear} M Dian Fauzi. All rights reserved.</p>
            <p className="text-primary-foreground/60 text-xs mt-1 flex items-center justify-center md:justify-end">
              Made with <Heart className="h-3 w-3 mx-1 text-red-400" /> using Next.js
            </p>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">Built with modern web technologies • Deployed on Vercel</p>
        </div>
      </div>
    </footer>
  )
}
