"use client";

import type React from "react";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin, Instagram, Music } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser"; // 1. Import library-nya

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 1. Ambil data dari state formData
    const templateParams = {
      title: formData.title, // Sesuai dengan {{title}} di subjek EmailJS
      name: formData.name, // Sesuai dengan {{name}}
      email: formData.email, // Sesuai dengan {{email}}
      message: formData.message, // Sesuai dengan {{message}}
    };

    try {
      // 2. Proses pengiriman via EmailJS
      const response = await emailjs.send(
        "service_zcbebgo",
        "template_5q8qlkw",
        templateParams,
        "Fug07NfooGaDfiQiH",
      );

      // 3. Jika berhasil (status 200)
      if (response.status === 200) {
        toast({
          title: "Message Sent Successfully! 🚀",
          description: `Thanks ${formData.name}, your message has been sent to Dian's email.`,
          variant: "default", // Memberikan warna default/sukses (biasanya biru atau hijau tergantung tema)
        });

        // Reset form agar input kosong kembali
        setFormData({ title: "", name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error("EmailJS Error:", error);

      // 4. Notifikasi jika gagal (misal: kuota habis atau internet mati)
      toast({
        variant: "destructive", // Memberikan warna merah (error)
        title: "Failed to Send Message ❌",
        description:
          "Something went wrong. Please check your connection or try again later.",
      });
    } finally {
      // 5. Matikan status loading pada tombol
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      url: "mailto:dianf7673@gmail.com",
      handle: "dianf7673@gmail.com",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/dianfauzi16",
      handle: "@dianfauzi16",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/dian-fauzi-7bb8332ab",
      handle: "Dian Fauzi",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/m.dianfauzii",
      handle: "@m.dianfauzii",
    },
    {
      name: "TikTok",
      icon: Music,
      url: "https://tiktok.com/@dianfauzi16",
      handle: "@Dianfauzi",
    },
  ];

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
            <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4 text-primary">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Have a project in mind or want to collaborate? I'd love to hear
              from you!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="font-heading text-2xl text-primary">
                  Send Me a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="title"
                      className="block text-sm font-medium mb-2"
                    >
                      Title
                    </label>
                    <Input
                      id="title"
                      name="title"
                      type="text"
                      required
                      value={formData.title}
                      onChange={handleInputChange}
                      placeholder="Masukan Judul Pesan"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
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
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
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
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
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

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info & Social Links */}
            <div className="space-y-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl text-primary">
                    Let's Connect
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-pretty">
                    I'm always open to discussing new opportunities, interesting
                    projects, or just having a chat about technology and
                    innovation. Feel free to reach out through any of these
                    platforms!
                  </p>

                  <div className="space-y-4">
                    {socialLinks.map((link) => (
                      <div
                        key={link.name}
                        className="flex items-center space-x-4"
                      >
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
                  <h3 className="font-heading font-semibold text-xl mb-2">
                    Quick Contact
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    For immediate inquiries
                  </p>
                  <Button
                    onClick={() => window.open("mailto:dianf7673@gmail.com")}
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
  );
}
