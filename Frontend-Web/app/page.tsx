import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Briefcase, Database, Lock, Search, Shield, User, Zap, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="Oracis AI Logo" width={36} height={36} />
            <span className="text-xl font-bold">Oracis AI</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-primary">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:text-primary">
              How It Works
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-primary">
              Testimonials
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="outline">Log In</Button>
            </Link>
            <Link href="/register">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-20 md:py-28">
          <div className="container flex flex-col items-center text-center">
            <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm">
              <span className="mr-1 rounded-full bg-primary px-1.5 py-0.5 text-xs text-white">New</span>
              <span className="text-muted-foreground">AI-powered profile evaluation is now available!</span>
            </div>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tighter md:text-6xl lg:text-7xl">
              Connect with the <span className="text-primary">perfect match</span>
              <br />
              powered by AI & Blockchain
            </h1>
            <p className="mt-6 max-w-[42rem] text-muted-foreground md:text-xl">
              Oracis AI uses advanced artificial intelligence to evaluate profiles, connect companies and individuals,
              and secure agreements with blockchain technology.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/register?type=candidate">
                <Button size="lg" className="gap-1">
                  <User className="h-4 w-4" />
                  Join as Candidate
                </Button>
              </Link>
              <Link href="/register?type=employer">
                <Button size="lg" variant="outline" className="gap-1">
                  <Briefcase className="h-4 w-4" />
                  Join as Employer
                </Button>
              </Link>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 text-lg font-medium">AI-Powered Matching</h3>
                <p className="mt-2 text-center text-muted-foreground">
                  Our AI analyzes profiles to find the perfect match between candidates and employers.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 text-lg font-medium">Blockchain Security</h3>
                <p className="mt-2 text-center text-muted-foreground">
                  Smart contracts ensure secure and verifiable NDA signing between parties.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 text-lg font-medium">Data-Driven Insights</h3>
                <p className="mt-2 text-center text-muted-foreground">
                  Get detailed analytics and recommendations to improve your profile or hiring process.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="bg-slate-50 py-20">
          <div className="container">
            <div className="mx-auto max-w-[58rem] text-center">
              <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">
                Powerful features to transform your career or hiring process
              </h2>
              <p className="mt-4 text-muted-foreground md:text-xl">
                Our platform combines cutting-edge AI with blockchain technology to create a secure and efficient
                ecosystem for professional connections.
              </p>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="mt-4">AI-Based CV Constructor</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Create professional CVs with AI-generated suggestions tailored to your skills and target industry.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <User className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Profile Analyzer</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Our AI scrapes and analyzes data from LinkedIn and other profiles to generate detailed evaluations.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Briefcase className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Employer Panel</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Post job openings and contract opportunities with AI-powered suggestions for suitable candidates.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Search className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="mt-4">AI-Powered Search</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Get personalized recommendations based on skills, experience, and job requirements.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Lock className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="mt-4">NDA Signing with Blockchain</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Smart contracts for secure and verifiable NDA signing, ensuring confidentiality and trust.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <MessageSquare className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Messaging System</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Real-time communication between companies and clients for job discussions and negotiations.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-20">
          <div className="container">
            <div className="mx-auto max-w-[58rem] text-center">
              <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">How Oracis AI Works</h2>
              <p className="mt-4 text-muted-foreground md:text-xl">
                Our platform streamlines the connection between talent and opportunity with a simple process.
              </p>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-3">
              <div className="relative flex flex-col items-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="mt-6 text-xl font-medium">Create Your Profile</h3>
                <p className="mt-2 text-center text-muted-foreground">
                  Sign up and build your profile or upload your existing CV. Our AI will analyze and enhance it.
                </p>
                <div className="absolute right-0 top-7 hidden h-0.5 w-full translate-x-1/2 bg-primary/30 md:block md:w-1/2"></div>
              </div>
              <div className="relative flex flex-col items-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="mt-6 text-xl font-medium">Get AI Recommendations</h3>
                <p className="mt-2 text-center text-muted-foreground">
                  Receive personalized job or candidate recommendations based on your profile and preferences.
                </p>
                <div className="absolute right-0 top-7 hidden h-0.5 w-full translate-x-1/2 bg-primary/30 md:block md:w-1/2"></div>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="mt-6 text-xl font-medium">Connect Securely</h3>
                <p className="mt-2 text-center text-muted-foreground">
                  Connect with matches, sign NDAs with blockchain security, and start your professional relationship.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="bg-slate-50 py-20">
          <div className="container">
            <div className="mx-auto max-w-[58rem] text-center">
              <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">What Our Users Say</h2>
              <p className="mt-4 text-muted-foreground md:text-xl">
                Hear from candidates and employers who have found success with Oracis AI.
              </p>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/placeholder.svg?height=40&width=40" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-base">John Doe</CardTitle>
                      <CardDescription>Software Engineer</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    "The AI recommendations were spot on! I found a job that perfectly matched my skills and preferences
                    within a week of signing up."
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/placeholder.svg?height=40&width=40" />
                      <AvatarFallback>AC</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-base">Acme Corp</CardTitle>
                      <CardDescription>Technology Company</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    "Oracis AI has revolutionized our hiring process. The quality of candidates we've found through the
                    platform is exceptional."
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/placeholder.svg?height=40&width=40" />
                      <AvatarFallback>SM</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-base">Sarah Martinez</CardTitle>
                      <CardDescription>UX Designer</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    "The AI-powered CV builder helped me highlight my strengths in ways I hadn't considered. I'm now
                    working at my dream company!"
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="bg-primary py-20 text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">
              Ready to transform your career or hiring process?
            </h2>
            <p className="mx-auto mt-4 max-w-[42rem] text-primary-foreground/90 md:text-xl">
              Join thousands of professionals and companies already using Oracis AI to connect.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/register">
                <Button size="lg" variant="secondary" className="gap-1">
                  Get Started Now
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="#features">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-12">
        <div className="container">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="flex items-center gap-2">
              <Image src="/logo.png" alt="Oracis AI Logo" width={32} height={32} />
              <span className="text-lg font-bold">Oracis AI</span>
            </div>
            <nav className="flex flex-wrap items-center justify-center gap-6">
              <Link href="#features" className="text-sm text-muted-foreground hover:text-primary">
                Features
              </Link>
              <Link href="#how-it-works" className="text-sm text-muted-foreground hover:text-primary">
                How It Works
              </Link>
              <Link href="#testimonials" className="text-sm text-muted-foreground hover:text-primary">
                Testimonials
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                Privacy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                Terms
              </Link>
            </nav>
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Oracis AI. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function Avatar({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full ${className}`} {...props}>
      {children}
    </div>
  )
}

function AvatarImage({ src, alt = "", ...props }: React.ImgHTMLAttributes<HTMLImageElement>) {
  return <img src={src || "/placeholder.svg"} alt={alt} className="aspect-square h-full w-full" {...props} />
}

function AvatarFallback({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="flex h-full w-full items-center justify-center rounded-full bg-muted" {...props}>
      {children}
    </div>
  )
}
