"use client";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs";
import {
    ArrowLeft,
    Calendar,
    Github,
    Linkedin,
    Mail,
    MapPin,
    MessageSquare,
    Phone,
    Star
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CandidateDetail({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("profile");

  // Mock data
  const candidate = {
    id: params.id,
    name: "John Doe",
    title: "Senior Frontend Developer",
    location: "Islamabad, Pakistan",
    email: "john@example.com",
    phone: "+92 300 1234567",
    matchScore: 92,
    status: "active",
    lastActive: "2024-03-15",
    skills: [
      "React", "TypeScript", "Next.js", "Node.js", "GraphQL",
      "Tailwind CSS", "Jest", "Cypress", "Docker", "AWS"
    ],
    experience: [
      {
        id: 1,
        company: "TechCorp",
        title: "Senior Frontend Developer",
        period: "Jan 2022 - Present",
        description: "Leading frontend development for enterprise applications. Implemented micro-frontend architecture and improved performance by 40%."
      },
      {
        id: 2,
        company: "WebSolutions",
        title: "Frontend Developer",
        period: "Mar 2020 - Dec 2021",
        description: "Developed responsive web applications using React and TypeScript. Collaborated with UX designers to implement pixel-perfect interfaces."
      }
    ],
    education: [
      {
        id: 1,
        institution: "University of Technology",
        degree: "Bachelor of Science in Computer Science",
        period: "2016 - 2020",
        description: "Graduated with honors. Specialized in Software Engineering."
      }
    ],
    applications: [
      {
        id: 1,
        job: "Senior Frontend Developer",
        company: "TechCorp",
        status: "Interview Scheduled",
        date: "2024-03-10",
        matchScore: 95
      },
      {
        id: 2,
        job: "Full Stack Developer",
        company: "WebSolutions",
        status: "Under Review",
        date: "2024-03-05",
        matchScore: 88
      }
    ],
    socialLinks: {
      linkedin: "https://linkedin.com/in/johndoe",
      github: "https://github.com/johndoe"
    }
  };

  return (
    <div className="min-h-screen bg-[var(--background-color)]">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-[#001230] text-white backdrop-blur">
        <div className="container max-w-none flex h-14 items-center px-[30px]">
          <div className="flex items-center mr-4">
            <Link href="/company/dashboard" className="flex items-center space-x-2">
              <Image
                src="/images/logo-square-transparent.png"
                alt="Oracis Logo"
                width={32}
                height={32}
              />
              <span className="font-bold text-xl">Oracis AI</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-4 mb-6">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => router.back()}
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <h1 className="text-2xl font-bold">Candidate Profile</h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Basic Info */}
            <div className="lg:col-span-1 space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex justify-center">
                    <div className="w-24 h-24 rounded-full bg-[#1d4ed8] flex items-center justify-center text-white text-3xl font-bold">
                      {candidate.name.charAt(0)}
                    </div>
                  </div>
                  <CardTitle className="text-center mt-4">{candidate.name}</CardTitle>
                  <CardDescription className="text-center">{candidate.title}</CardDescription>
                  <div className="flex items-center justify-center mt-1 text-sm text-gray-500">
                    <MapPin size={14} className="mr-1" />
                    {candidate.location}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-gray-500" />
                      <a
                        href={`mailto:${candidate.email}`}
                        className="text-[#1d4ed8] hover:underline text-sm"
                      >
                        {candidate.email}
                      </a>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-gray-500" />
                      <a
                        href={`tel:${candidate.phone}`}
                        className="text-[#1d4ed8] hover:underline text-sm"
                      >
                        {candidate.phone}
                      </a>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Linkedin className="h-4 w-4 text-gray-500" />
                      <a
                        href={candidate.socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#1d4ed8] hover:underline text-sm"
                      >
                        LinkedIn Profile
                      </a>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Github className="h-4 w-4 text-gray-500" />
                      <a
                        href={candidate.socialLinks.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#1d4ed8] hover:underline text-sm"
                      >
                        GitHub Profile
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Match Score</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center">
                    <div className="relative">
                      <div className="w-32 h-32 rounded-full border-8 border-blue-500 flex items-center justify-center">
                        <span className="text-3xl font-bold text-blue-500">{candidate.matchScore}%</span>
                      </div>
                      <div className="absolute -top-2 -right-2">
                        <Star className="h-8 w-8 text-yellow-400 fill-yellow-400" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {candidate.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-50 text-[#1d4ed8] rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="flex space-x-2">
                <Button
                  className="w-full bg-[#001230] hover:bg-[#1d4ed8]"
                  asChild
                >
                  <Link href={`/company/interviews/schedule?candidate=${candidate.id}`}>
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule Interview
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  asChild
                >
                  <Link href={`/company/messages?candidate=${candidate.id}`}>
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Message
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Column - Detailed Info */}
            <div className="lg:col-span-2">
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="mb-6">
                  <TabsTrigger value="profile">Profile</TabsTrigger>
                  <TabsTrigger value="experience">Experience</TabsTrigger>
                  <TabsTrigger value="applications">Applications</TabsTrigger>
                </TabsList>

                <TabsContent value="profile">
                  <Card>
                    <CardHeader>
                      <CardTitle>About</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        Experienced frontend developer with a strong focus on React and TypeScript.
                        Passionate about creating performant and user-friendly web applications.
                        Skilled in modern frontend technologies and best practices.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="mt-6">
                    <CardHeader>
                      <CardTitle>Education</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {candidate.education.map((edu) => (
                          <div key={edu.id} className="border-l-2 border-blue-500 pl-4">
                            <h3 className="font-semibold">{edu.institution}</h3>
                            <p className="text-gray-600">{edu.degree}</p>
                            <p className="text-sm text-gray-500">{edu.period}</p>
                            <p className="mt-2 text-gray-600">{edu.description}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="experience">
                  <div className="space-y-6">
                    {candidate.experience.map((exp) => (
                      <Card key={exp.id}>
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <div>
                              <CardTitle>{exp.title}</CardTitle>
                              <CardDescription>{exp.company}</CardDescription>
                            </div>
                            <span className="text-sm text-gray-500">{exp.period}</span>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600">{exp.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="applications">
                  <Card>
                    <CardContent className="p-0">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Job</TableHead>
                            <TableHead>Company</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Match</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {candidate.applications.map((app) => (
                            <TableRow key={app.id}>
                              <TableCell>
                                <Link
                                  href={`/company/jobs/${app.id}`}
                                  className="font-medium text-[#1d4ed8] hover:underline"
                                >
                                  {app.job}
                                </Link>
                              </TableCell>
                              <TableCell>{app.company}</TableCell>
                              <TableCell>
                                <span className={`px-2 py-1 rounded-full text-xs ${
                                  app.status === "Interview Scheduled" ? "bg-blue-100 text-blue-800" :
                                  app.status === "Under Review" ? "bg-yellow-100 text-yellow-800" :
                                  "bg-gray-100 text-gray-800"
                                }`}>
                                  {app.status}
                                </span>
                              </TableCell>
                              <TableCell>
                                <div className="flex items-center">
                                  <div className="w-16 bg-gray-200 rounded-full h-2.5">
                                    <div
                                      className="bg-blue-600 h-2.5 rounded-full"
                                      style={{ width: `${app.matchScore}%` }}
                                    ></div>
                                  </div>
                                  <span className="ml-2 text-sm">{app.matchScore}%</span>
                                </div>
                              </TableCell>
                              <TableCell>{new Date(app.date).toLocaleDateString()}</TableCell>
                              <TableCell>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  asChild
                                >
                                  <Link href={`/company/jobs/${app.id}/applications`}>
                                    View Details
                                  </Link>
                                </Button>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 