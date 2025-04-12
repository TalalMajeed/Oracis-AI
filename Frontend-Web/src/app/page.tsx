"use client";

import {
  Brain,
  Briefcase,
  ChevronRight,
  Code,
  Database,
  FileText,
  Github,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  MessageSquare,
  PhoneCall,
  Search,
  Shield,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";

const Home = () => {
  return (
    <main>
      <div className="flex flex-col min-h-screen bg-background">
        {/* Navbar */}
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container max-w-none flex h-14 items-center">
            <div className="flex items-center mr-4">
              <Link href="/" className="flex items-center space-x-2">
                <Image
                  src="/images/logo-square-transparent.png"
                  alt="Oracis Logo"
                  width={32}
                  height={32}
                />
                <span className="font-bold text-xl">Oracis AI</span>
              </Link>
            </div>
            <nav className="flex items-center space-x-6 text-sm font-medium flex-1 justify-center">
              <Link
                href="#about"
                className="transition-colors hover:text-primary"
              >
                About
              </Link>
              <Link
                href="#features"
                className="transition-colors hover:text-primary"
              >
                Features
              </Link>
              <Link
                href="#pricing"
                className="transition-colors hover:text-primary"
              >
                Pricing
              </Link>
              <Link
                href="#contact"
                className="transition-colors hover:text-primary"
              >
                Contact
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="outline">Log In</Button>
              <Button>Sign Up</Button>
            </div>
          </div>
        </header>

        <main className="flex-1">
          {/* Hero Section (Full Page) */}
          <section className="relative h-screen flex items-center bg-[var(--primary-color)] text-white">
            <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 flex flex-col items-start space-y-8">
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  AI & Blockchain Powered{" "}
                  <span className="text-[var(--secondary-color)]">
                    Profile Evaluation
                  </span>
                </h1>
                <p className="text-xl opacity-80">
                  Connecting companies and individuals seeking professional
                  opportunities through intelligent analysis
                </p>
                <div className="flex space-x-4">
                  <Button
                    size="lg"
                    className="bg-[var(--secondary-color)] hover:bg-blue-700"
                  >
                    Get Started
                  </Button>
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
                <div className="w-full max-w-md relative">
                  <Image
                    src="/oracis.png"
                    alt="Oracis AI Dashboard"
                    width={500}
                    height={400}
                    className="rounded-lg shadow-xl"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-20 bg-[var(--background-color)]">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">About Oracis AI</h2>
                <p className="text-lg max-w-3xl mx-auto text-gray-600">
                  We're a team of computer science students from NUST University
                  building the future of professional networking and opportunity
                  matching.
                </p>
              </div>

              <div className="flex flex-col md:flex-row justify-center gap-8 mt-12">
                <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
                  <Brain
                    size={48}
                    className="text-[var(--secondary-color)] mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">
                    AI-Powered Analysis
                  </h3>
                  <p className="text-gray-600">
                    Advanced algorithms to evaluate profiles and match skills
                    with opportunities
                  </p>
                </div>

                <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
                  <Code
                    size={48}
                    className="text-[var(--secondary-color)] mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">
                    Blockchain Security
                  </h3>
                  <p className="text-gray-600">
                    Secure NDA signing using smart contracts for confidentiality
                    and trust
                  </p>
                </div>

                <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
                  <Database
                    size={48}
                    className="text-[var(--secondary-color)] mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">
                    Data Optimization
                  </h3>
                  <p className="text-gray-600">
                    Web scraping and data processing for comprehensive profile
                    analysis
                  </p>
                </div>

                <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
                  <Globe
                    size={48}
                    className="text-[var(--secondary-color)] mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">
                    Modern Tech Stack
                  </h3>
                  <p className="text-gray-600">
                    Built with Next.js, Express, FastAPI, and Solidity for
                    optimal performance
                  </p>
                </div>
              </div>

              <div className="mt-16 text-center">
                <h3 className="text-2xl font-bold mb-6">Our Team</h3>
                <div className="flex flex-wrap justify-center gap-8">
                  {[
                    { name: "Talal Majeed", github: "TalalMajeed" },
                    { name: "Fozan Mujtaba", github: "fozanmujtaba" },
                    { name: "Labib Kamran", github: "labibkamran" },
                    { name: "Syed Abdul Ahad", github: "OnlyAhad13" },
                  ].map((member, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                      <div className="w-20 h-20 rounded-full bg-gray-300 mb-3 flex items-center justify-center">
                        <span className="text-3xl">
                          {member.name.charAt(0)}
                        </span>
                      </div>
                      <h4 className="font-medium">{member.name}</h4>
                      <a
                        href={`https://github.com/${member.github}`}
                        className="flex items-center text-sm text-gray-600 hover:text-[var(--secondary-color)]"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={16} className="mr-1" />
                        {member.github}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section id="features" className="py-20">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">Platform Features</h2>
                <p className="text-lg max-w-3xl mx-auto text-gray-600">
                  Discover how Oracis AI transforms the way professionals
                  connect with opportunities
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="flex">
                  <div className="mr-4">
                    <div className="p-3 rounded-full bg-blue-100">
                      <FileText
                        size={28}
                        className="text-[var(--secondary-color)]"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      AI-Based CV Constructor
                    </h3>
                    <p className="text-gray-600">
                      Create professional CVs with AI-generated suggestions
                      tailored to your career goals and industry standards.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="mr-4">
                    <div className="p-3 rounded-full bg-blue-100">
                      <Search
                        size={28}
                        className="text-[var(--secondary-color)]"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Profile Analyzer
                    </h3>
                    <p className="text-gray-600">
                      Comprehensive evaluation of your professional profile with
                      actionable insights to improve your marketability.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="mr-4">
                    <div className="p-3 rounded-full bg-blue-100">
                      <Briefcase
                        size={28}
                        className="text-[var(--secondary-color)]"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Employer Panel
                    </h3>
                    <p className="text-gray-600">
                      Post job openings and receive AI-powered candidate
                      suggestions based on skill matching algorithms.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="mr-4">
                    <div className="p-3 rounded-full bg-blue-100">
                      <Shield
                        size={28}
                        className="text-[var(--secondary-color)]"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      NDA Signing with Blockchain
                    </h3>
                    <p className="text-gray-600">
                      Secure and verifiable non-disclosure agreements using
                      smart contracts on the blockchain.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="mr-4">
                    <div className="p-3 rounded-full bg-blue-100">
                      <Search
                        size={28}
                        className="text-[var(--secondary-color)]"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      AI-Powered Search Engine
                    </h3>
                    <p className="text-gray-600">
                      Find the perfect opportunities or candidates with our
                      intelligent matching system.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="mr-4">
                    <div className="p-3 rounded-full bg-blue-100">
                      <MessageSquare
                        size={28}
                        className="text-[var(--secondary-color)]"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Messaging System
                    </h3>
                    <p className="text-gray-600">
                      Real-time communication between companies and candidates
                      in a secure environment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section id="pricing" className="py-20 bg-[var(--background-color)]">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">Simple Pricing</h2>
                <p className="text-lg max-w-3xl mx-auto text-gray-600">
                  Choose the plan that works best for your needs
                </p>
              </div>

              <div className="flex flex-col lg:flex-row justify-center gap-8">
                <Card className="w-full max-w-sm">
                  <CardHeader>
                    <CardTitle>Basic</CardTitle>
                    <CardDescription>
                      For individuals just starting out
                    </CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">Free</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <ChevronRight
                          size={16}
                          className="mr-2 text-[var(--secondary-color)]"
                        />
                        Basic profile analysis
                      </li>
                      <li className="flex items-center">
                        <ChevronRight
                          size={16}
                          className="mr-2 text-[var(--secondary-color)]"
                        />
                        CV builder with templates
                      </li>
                      <li className="flex items-center">
                        <ChevronRight
                          size={16}
                          className="mr-2 text-[var(--secondary-color)]"
                        />
                        Limited job search
                      </li>
                      <li className="flex items-center">
                        <ChevronRight
                          size={16}
                          className="mr-2 text-[var(--secondary-color)]"
                        />
                        Community forum access
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Get Started</Button>
                  </CardFooter>
                </Card>

                <Card className="w-full max-w-sm border-[var(--secondary-color)]">
                  <CardHeader>
                    <CardTitle>Professional</CardTitle>
                    <CardDescription>For active job seekers</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">$19</span>
                      <span className="text-gray-500 ml-1">/month</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <ChevronRight
                          size={16}
                          className="mr-2 text-[var(--secondary-color)]"
                        />
                        Advanced profile analysis
                      </li>
                      <li className="flex items-center">
                        <ChevronRight
                          size={16}
                          className="mr-2 text-[var(--secondary-color)]"
                        />
                        AI-powered CV recommendations
                      </li>
                      <li className="flex items-center">
                        <ChevronRight
                          size={16}
                          className="mr-2 text-[var(--secondary-color)]"
                        />
                        Unlimited job search
                      </li>
                      <li className="flex items-center">
                        <ChevronRight
                          size={16}
                          className="mr-2 text-[var(--secondary-color)]"
                        />
                        Direct messaging (20/month)
                      </li>
                      <li className="flex items-center">
                        <ChevronRight
                          size={16}
                          className="mr-2 text-[var(--secondary-color)]"
                        />
                        Profile promotion
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-[var(--secondary-color)] hover:bg-blue-700">
                      Get Started
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="w-full max-w-sm">
                  <CardHeader>
                    <CardTitle>Enterprise</CardTitle>
                    <CardDescription>
                      For companies and businesses
                    </CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">$99</span>
                      <span className="text-gray-500 ml-1">/month</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <ChevronRight
                          size={16}
                          className="mr-2 text-[var(--secondary-color)]"
                        />
                        Full employer dashboard
                      </li>
                      <li className="flex items-center">
                        <ChevronRight
                          size={16}
                          className="mr-2 text-[var(--secondary-color)]"
                        />
                        AI candidate matching
                      </li>
                      <li className="flex items-center">
                        <ChevronRight
                          size={16}
                          className="mr-2 text-[var(--secondary-color)]"
                        />
                        Unlimited job postings
                      </li>
                      <li className="flex items-center">
                        <ChevronRight
                          size={16}
                          className="mr-2 text-[var(--secondary-color)]"
                        />
                        Blockchain NDA signing
                      </li>
                      <li className="flex items-center">
                        <ChevronRight
                          size={16}
                          className="mr-2 text-[var(--secondary-color)]"
                        />
                        Dedicated support
                      </li>
                      <li className="flex items-center">
                        <ChevronRight
                          size={16}
                          className="mr-2 text-[var(--secondary-color)]"
                        />
                        Analytics dashboard
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Contact Sales</Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </section>

          {/* Contact Form Section */}
          <section id="contact" className="py-20">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
                <p className="text-lg max-w-3xl mx-auto text-gray-600">
                  Have questions? We're here to help you get started with Oracis
                  AI
                </p>
              </div>

              <div className="flex flex-col md:flex-row gap-12">
                {/* Contact Form */}
                <div className="flex-1">
                  <Card>
                    <CardHeader>
                      <CardTitle>Send us a message</CardTitle>
                      <CardDescription>
                        Fill out the form below and we'll get back to you as
                        soon as possible.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label
                              htmlFor="name"
                              className="text-sm font-medium"
                            >
                              Full Name
                            </label>
                            <Input id="name" placeholder="John Doe" />
                          </div>
                          <div className="space-y-2">
                            <label
                              htmlFor="email"
                              className="text-sm font-medium"
                            >
                              Email Address
                            </label>
                            <Input
                              id="email"
                              type="email"
                              placeholder="john@example.com"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="subject"
                            className="text-sm font-medium"
                          >
                            Subject
                          </label>
                          <Input
                            id="subject"
                            placeholder="How can we help you?"
                          />
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="message"
                            className="text-sm font-medium"
                          >
                            Message
                          </label>
                          <Textarea
                            id="message"
                            placeholder="Tell us more about your inquiry..."
                            rows={5}
                          />
                        </div>
                      </form>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Send Message</Button>
                    </CardFooter>
                  </Card>
                </div>

                {/* Contact Information */}
                <div className="flex-1">
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold mb-6">
                        Contact Information
                      </h3>
                      <div className="space-y-6">
                        <div className="flex items-start">
                          <MapPin
                            size={24}
                            className="mt-1 mr-4 text-[var(--secondary-color)]"
                          />
                          <div>
                            <h4 className="font-medium mb-1">Location</h4>
                            <p className="text-gray-600">
                              NUST University, H-12, Islamabad, Pakistan
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <Mail
                            size={24}
                            className="mt-1 mr-4 text-[var(--secondary-color)]"
                          />
                          <div>
                            <h4 className="font-medium mb-1">Email</h4>
                            <a
                              href="mailto:info@oracisai.com"
                              className="text-gray-600 hover:text-[var(--secondary-color)]"
                            >
                              info@oracisai.com
                            </a>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <PhoneCall
                            size={24}
                            className="mt-1 mr-4 text-[var(--secondary-color)]"
                          />
                          <div>
                            <h4 className="font-medium mb-1">Phone</h4>
                            <a
                              href="tel:+923001234567"
                              className="text-gray-600 hover:text-[var(--secondary-color)]"
                            >
                              +92 300 123 4567
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-12">
                      <h4 className="font-medium mb-4">Follow us</h4>
                      <div className="flex space-x-4">
                        <a
                          href="#"
                          className="p-2 bg-gray-100 rounded-full hover:bg-[var(--secondary-color)] hover:text-white transition-colors"
                        >
                          <Github size={20} />
                        </a>
                        <a
                          href="#"
                          className="p-2 bg-gray-100 rounded-full hover:bg-[var(--secondary-color)] hover:text-white transition-colors"
                        >
                          <Linkedin size={20} />
                        </a>
                        <a
                          href="#"
                          className="p-2 bg-gray-100 rounded-full hover:bg-[var(--secondary-color)] hover:text-white transition-colors"
                        >
                          <Mail size={20} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-[var(--primary-color)] text-white py-12">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="mb-8 md:mb-0">
                <div className="flex items-center space-x-2 mb-4">
                  <Image
                    src="/oracis.png"
                    alt="Oracis Logo"
                    width={32}
                    height={32}
                  />
                  <span className="font-bold text-xl">Oracis AI</span>
                </div>
                <p className="max-w-md text-gray-300">
                  AI & Blockchain Powered Platform for profile evaluation,
                  connecting companies and individuals seeking professional
                  opportunities.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                <div>
                  <h4 className="font-medium text-lg mb-4">Platform</h4>
                  <ul className="space-y-2">
                    <li>
                      <Link href="#" className="text-gray-300 hover:text-white">
                        CV Builder
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-gray-300 hover:text-white">
                        Profile Analysis
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-gray-300 hover:text-white">
                        Job Matching
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-gray-300 hover:text-white">
                        Smart Contracts
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-lg mb-4">Company</h4>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="#about"
                        className="text-gray-300 hover:text-white"
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-gray-300 hover:text-white">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-gray-300 hover:text-white">
                        Careers
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#contact"
                        className="text-gray-300 hover:text-white"
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-lg mb-4">Legal</h4>
                  <ul className="space-y-2">
                    <li>
                      <Link href="#" className="text-gray-300 hover:text-white">
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-gray-300 hover:text-white">
                        Terms of Service
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-gray-300 hover:text-white">
                        Cookie Policy
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <Separator className="my-8 bg-gray-700" />

            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400">
                © 2025 Oracis AI. All rights reserved.
              </p>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Github size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
};

export default Home;
