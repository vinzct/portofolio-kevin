"use client"

import { useState } from "react"
import { Github, Linkedin, Mail, Moon, Sun } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Portfolio() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle("dark")
  }

  return (
    <div className={`min-h-screen bg-background ${isDarkMode ? "dark" : ""}`}>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <span className="hidden font-bold sm:inline-block">Kevin Then</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#projects" className="transition-colors hover:text-foreground/80">
                Projects
              </Link>
              <Link href="#skills" className="transition-colors hover:text-foreground/80">
                Skills
              </Link>
              <Link href="#contact" className="transition-colors hover:text-foreground/80">
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              <span className="sr-only">Toggle dark mode</span>
            </Button>
          </div>
        </div>
      </header>
      <main className="container py-6">
        <section className="flex flex-col items-center justify-center py-12 text-center md:py-24">
          <Image
            src="/placeholder.svg?height=150&width=150"
            alt="Profile picture"
            width={150}
            height={150}
            className="rounded-full"
            priority
          />
          <h1 className="mt-6 text-4xl font-bold">Kevin Then</h1>
          <p className="mt-4 text-xl text-muted-foreground">Full Stack Web Developer / Middleware Developer</p>
          <div className="mt-6 flex space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="mailto:john@example.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
        </section>

        <section id="projects" className="py-12">
          <h2 className="mb-8 text-3xl font-bold">Projects</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>API Development QRIS for Bank (Hibank)</CardTitle>
                <CardDescription>SoftwareAG webMethods, Java, PostgreSQL</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="QRIS Hibank Screenshot"
                  width={400}
                  height={200}
                  className="rounded-lg"
                />
                <p className="mt-4">
                  Integrate QRIS Payment System for mobile App Hibank
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Improvement on QRIS Payment System for POS</CardTitle>
                <CardDescription>.NET 7, SignalR, Redis, SQL Server</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="QRIS Screenshot"
                  width={400}
                  height={200}
                  className="rounded-lg"
                />
                <p className="mt-4">Improve QRIS Payment System by using SignalR Technologies and .NET 7</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Portfolio Website</CardTitle>
                <CardDescription>Next.js, Tailwind CSS</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Portfolio project screenshot"
                  width={400}
                  height={200}
                  className="rounded-lg"
                />
                <p className="mt-4">A responsive portfolio website showcasing my projects and skills.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="skills" className="py-12">
          <h2 className="mb-8 text-3xl font-bold">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "JQuery",
              "React",              
              "Node.js",
              "MongoDB",
              "PostgreSQL",
              "Git",                            
              ".NET",
              "C#",
              "Redis",
              "Java",
              "SoftwareAG webMethods",
              "Oracle"              
            ].map((skill) => (
              <div
                key={skill}
                className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="py-12">
          <h2 className="mb-8 text-3xl font-bold">Contact</h2>
          <Card>
            <CardContent className="mt-6">
              <form className="space-y-4">
                <div>
                  <Input placeholder="Name" />
                </div>
                <div>
                  <Input type="email" placeholder="Email" />
                </div>
                <div>
                  <Textarea placeholder="Message" />
                </div>
                <Button>Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </main>
      <footer className="border-t py-6">
        <div className="container text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Kevin Then. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

