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
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs";
import {
    ArrowLeft,
    Calendar,
    Clock,
    FileText,
    MessageSquare,
    Users,
    Video
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function InterviewDetail({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("details");

  // Mock data
  const interview = {
    id: params.id,
    candidate: {
      id: 1,
      name: "John Doe",
      title: "Senior Frontend Developer",
      email: "john@example.com",
      phone: "+92 300 1234567"
    },
    job: {
      id: 1,
      title: "Senior Frontend Developer",
      department: "Engineering"
    },
    type: "Technical",
    status: "scheduled",
    date: "2024-03-20",
    time: "10:00 AM",
    duration: "60 min",
    location: "https://meet.google.com/abc-defg-hij",
    interviewers: [
      { id: 1, name: "Sarah Smith", role: "Engineering Manager" },
      { id: 2, name: "Mike Johnson", role: "Tech Lead" }
    ],
    notes: "Focus on React and TypeScript experience. Review previous projects and problem-solving approach.",
    feedback: [
      {
        id: 1,
        interviewer: "Sarah Smith",
        rating: 4,
        strengths: [
          "Strong technical knowledge",
          "Good problem-solving skills",
          "Clear communication"
        ],
        areas: [
          "Could improve on system design",
          "More experience needed with large-scale applications"
        ],
        notes: "Overall a strong candidate. Would recommend for the next round."
      }
    ]
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
            <h1 className="text-2xl font-bold">Interview Details</h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Basic Info */}
            <div className="lg:col-span-1 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Interview Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-gray-500" />
                    <span>{new Date(interview.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span>{interview.time} ({interview.duration})</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Video className="h-4 w-4 text-gray-500" />
                    <a
                      href={interview.location}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1d4ed8] hover:underline"
                    >
                      Join Meeting
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-gray-500" />
                    <div className="flex flex-wrap gap-1">
                      {interview.interviewers.map((interviewer) => (
                        <span
                          key={interviewer.id}
                          className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs"
                        >
                          {interviewer.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Candidate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium">{interview.candidate.name}</h3>
                      <p className="text-sm text-gray-500">{interview.candidate.title}</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4 text-gray-500" />
                        <a
                          href={`mailto:${interview.candidate.email}`}
                          className="text-[#1d4ed8] hover:underline text-sm"
                        >
                          {interview.candidate.email}
                        </a>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4 text-gray-500" />
                        <a
                          href={`tel:${interview.candidate.phone}`}
                          className="text-[#1d4ed8] hover:underline text-sm"
                        >
                          {interview.candidate.phone}
                        </a>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full"
                        asChild
                      >
                        <Link href={`/company/candidates/${interview.candidate.id}`}>
                          <FileText className="mr-2 h-4 w-4" />
                          View Profile
                        </Link>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full"
                        asChild
                      >
                        <Link href={`/company/messages?candidate=${interview.candidate.id}`}>
                          <MessageSquare className="mr-2 h-4 w-4" />
                          Message
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Job Position</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h3 className="font-medium">{interview.job.title}</h3>
                    <p className="text-sm text-gray-500">{interview.job.department}</p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full"
                      asChild
                    >
                      <Link href={`/company/jobs/${interview.job.id}`}>
                        <FileText className="mr-2 h-4 w-4" />
                        View Job Details
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Detailed Info */}
            <div className="lg:col-span-2">
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="mb-6">
                  <TabsTrigger value="details">Details</TabsTrigger>
                  <TabsTrigger value="feedback">Feedback</TabsTrigger>
                </TabsList>

                <TabsContent value="details">
                  <Card>
                    <CardHeader>
                      <CardTitle>Interview Notes</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 whitespace-pre-wrap">{interview.notes}</p>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="feedback">
                  <div className="space-y-6">
                    {interview.feedback.map((item) => (
                      <Card key={item.id}>
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <div>
                              <CardTitle>{item.interviewer}</CardTitle>
                              <CardDescription>
                                Rating: {item.rating}/5
                              </CardDescription>
                            </div>
                            <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                              Recommended
                            </span>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div>
                            <h4 className="font-medium mb-2">Strengths</h4>
                            <ul className="list-disc list-inside space-y-1">
                              {item.strengths.map((strength, index) => (
                                <li key={index} className="text-gray-600">{strength}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium mb-2">Areas for Improvement</h4>
                            <ul className="list-disc list-inside space-y-1">
                              {item.areas.map((area, index) => (
                                <li key={index} className="text-gray-600">{area}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium mb-2">Notes</h4>
                            <p className="text-gray-600">{item.notes}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}

                    <Card>
                      <CardHeader>
                        <CardTitle>Add Feedback</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <Button className="w-full">
                          Submit Feedback
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// Missing components for icons
const Mail = (props:any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
};

const Phone = (props:any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}; 