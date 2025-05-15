"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { User, Briefcase, ArrowRight } from "lucide-react";

export default function RegisterPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Oracis AI Logo"
              width={36}
              height={36}
            />
            <span className="text-xl font-bold">Oracis AI</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="outline">Log In</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 container py-16">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Join <span className="text-primary">Oracis AI</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Choose your account type to get started with our AI-powered platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="overflow-hidden transition-all hover:shadow-lg">
            <CardHeader className="bg-primary/5 border-b">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <User className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>Candidate</CardTitle>
              </div>
              <CardDescription>
                For job seekers looking to connect with employers
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Create an AI-enhanced CV that stands out</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Get matched with suitable job opportunities</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Secure communication with potential employers</span>
                </li>
              </ul>
              <Link href="/register/candidate" className="block w-full">
                <Button size="lg" className="w-full">
                  Register as Candidate
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="overflow-hidden transition-all hover:shadow-lg">
            <CardHeader className="bg-primary/5 border-b">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>Employer</CardTitle>
              </div>
              <CardDescription>
                For companies looking to find the perfect candidates
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Post job listings with AI-enhanced visibility</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Find candidates using AI-powered matching</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Secure NDA signing with blockchain technology</span>
                </li>
              </ul>
              <Link href="/register/employer" className="block w-full">
                <Button size="lg" variant="outline" className="w-full">
                  Register as Employer
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-8 text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link href="/login" className="text-primary hover:underline">
            Log in here
          </Link>
        </div>
      </main>

      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Image
              src="/logo.png"
              alt="Oracis AI Logo"
              width={24}
              height={24}
            />
            <span className="text-sm font-semibold">
              © Oracis AI {new Date().getFullYear()}
            </span>
          </div>
          <div className="flex gap-6">
            <Link
              href="/terms"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Privacy
            </Link>
            <Link
              href="/contact"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
