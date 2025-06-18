"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Github, Linkedin, Mail, ExternalLink, Rocket, Heart, Coffee, Zap, Star, ArrowDown, MapPin } from "lucide-react"

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => {ls
      
      const sections = ["hero", "about", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  const skills = [
    { name: "React", icon: "⚛️", level: 90 },
    { name: "TypeScript", icon: "📘", level: 85 },
    { name: "Next.js", icon: "▲", level: 88 },
    { name: "Node.js", icon: "🟢", level: 82 },
    { name: "Python", icon: "🐍", level: 78 },
    { name: "Design", icon: "🎨", level: 75 },
  ]

  const projects = [
    {
      title: "AI Chat Application",
      description: "A real-time chat application powered by AI with beautiful animations and responsive design.",
      tech: ["React", "Node.js", "Socket.io", "OpenAI"],
      image: "/placeholder.svg?height=200&width=300",
      github: "#",
      demo: "#",
    },
    {
      title: "E-commerce Dashboard",
      description: "Modern dashboard for managing online stores with analytics, inventory, and order management.",
      tech: ["Next.js", "TypeScript", "Prisma", "Tailwind"],
      image: "/placeholder.svg?height=200&width=300",
      github: "#",
      demo: "#",
    },
    {
      title: "Weather App",
      description: "Beautiful weather application with location-based forecasts and interactive maps.",
      tech: ["React", "API Integration", "Charts.js"],
      image: "/placeholder.svg?height=200&width=300",
      github: "#",
      demo: "#",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="font-bold text-xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Portfolio
            </div>
            <div className="hidden md:flex space-x-6">
              {["hero", "about", "projects", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors ${
                    activeSection === section ? "text-purple-600 font-semibold" : "text-gray-600 hover:text-purple-600"
                  }`}
                >
                  {section === "hero" ? "Home" : section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div
          className={`text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="mb-8 relative">
            <Avatar className="w-32 h-32 mx-auto mb-6 ring-4 ring-purple-200 ring-offset-4">
              <AvatarImage src="/placeholder.svg?height=128&width=128" alt="Profile" />
              <AvatarFallback className="text-2xl bg-gradient-to-br from-purple-500 to-pink-500 text-white">
                JD
              </AvatarFallback>
            </Avatar>
            <div className="absolute -top-2 -right-2 animate-bounce">
              <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                <Zap className="w-3 h-3 text-white" />
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            Hi, I'm John Doe
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-2">Full-Stack Developer & Designer</p>

          <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
            I create beautiful, functional, and user-friendly digital experiences that make people's lives easier and
            more enjoyable.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              <Rocket className="w-4 h-4 mr-2" />
              View My Work
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection("contact")}>
              <Coffee className="w-4 h-4 mr-2" />
              Let's Chat
            </Button>
          </div>

          <div className="animate-bounce">
            <ArrowDown className="w-6 h-6 mx-auto text-gray-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              I'm passionate about creating digital experiences that combine beautiful design with powerful
              functionality. Here's what I bring to the table.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-purple-600" />
                <span className="text-gray-600">San Francisco, CA</span>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                With over 5 years of experience in web development, I specialize in creating modern, responsive
                applications using the latest technologies. I love turning complex problems into simple, beautiful
                solutions.
              </p>

              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-red-500" />
                  <span className="text-sm text-gray-600">Problem Solving</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <span className="text-sm text-gray-600">Clean Code</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-blue-500" />
                  <span className="text-sm text-gray-600">Fast Delivery</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{skill.icon}</span>
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and passion for development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. Let's connect and create something amazing
            together!
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Mail className="w-8 h-8 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-600 text-sm">john.doe@example.com</p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Linkedin className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-600 text-sm">linkedin.com/in/johndoe</p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Github className="w-8 h-8 text-gray-800 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">GitHub</h3>
              <p className="text-gray-600 text-sm">github.com/johndoe</p>
            </Card>
          </div>

          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            asChild
          >
            <a href="mailto:john.doe@example.com">
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">
            © 2024 John Doe. Made with <Heart className="w-4 h-4 inline text-red-500" /> and lots of coffee.
          </p>
        </div>
      </footer>
    </div>
  )
}
