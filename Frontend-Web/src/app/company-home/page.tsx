"use client";

import {
    Bell,
    Brain,
    Briefcase,
    Calendar,
    ClipboardList,
    FileSearch,
    FileText,
    Loader2,
    LogOut,
    MessageSquare,
    Plus,
    Search,
    Settings,
    Shield,
    User,
    UserPlus
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CompanyDashboard = () => {
  const [activeCandidateTab, setActiveCandidateTab] = useState("matches");
  const [isLoading, setIsLoading] = useState(false);

  const refreshAIMatches = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-[#001230] text-white backdrop-blur">
        <div className="container max-w-none flex h-14 items-center px-4">
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

          <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/company/dashboard"
              className="text-primary transition-colors hover:text-primary/80"
            >
              Dashboard
            </Link>
            <Link
              href="/company/jobs"
              className="transition-colors hover:text-primary"
            >
              Jobs
            </Link>
            <Link
              href="/company/candidates"
              className="transition-colors hover:text-primary"
            >
              Candidates
            </Link>
            <Link
              href="/company/contracts"
              className="transition-colors hover:text-primary"
            >
              Contracts
            </Link>
            <Link
              href="/company/messaging"
              className="transition-colors hover:text-primary"
            >
              Messages
            </Link>
            <Link
              href="/company/analytics"
              className="transition-colors hover:text-primary"
            >
              Analytics
            </Link>
          </div>

          <div className="ml-auto flex items-center gap-2">
            <div className="relative">
              <Bell className="h-5 w-5 text-muted-foreground cursor-pointer hover:text-primary transition-colors" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-8 w-8 rounded-full"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/images/company-logo.png" alt="Company" />
                    <AvatarFallback>AC</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">Acme Inc.</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      admin@acme.com
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Briefcase className="mr-2 h-4 w-4" />
                  <span>Company Info</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container px-4 py-6 md:px-6 md:py-8">
        {/* Welcome Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Welcome back, Acme Inc.</h1>
            <p className="text-muted-foreground mt-1">
              Here's what's happening with your recruitment activities today.
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex gap-3">
            <Button className="bg-[#001230] hover:bg-[#1d4ed8]">
              <Plus className="mr-2 h-4 w-4" /> Post a New Job
            </Button>
            <Button variant="outline">
              <Search className="mr-2 h-4 w-4" /> Search Candidates
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Active Job Postings</CardTitle>
              <Briefcase className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">
                +2 from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Total Applications</CardTitle>
              <ClipboardList className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">243</div>
              <p className="text-xs text-muted-foreground">
                +18% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">AI Matched Candidates</CardTitle>
              <Brain className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">68</div>
              <p className="text-xs text-muted-foreground">
                +12 new this week
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Contracts Signed</CardTitle>
              <Shield className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-muted-foreground">
                +3 this month
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Column - Job Listings */}
          <div className="md:col-span-2">
            <Card className="mb-6">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle>Your Active Job Postings</CardTitle>
                  <Button variant="outline" size="sm">
                    View All Jobs
                  </Button>
                </div>
                <CardDescription>
                  Monitor and manage your current job openings
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      title: "Senior Full Stack Developer",
                      applicants: 34,
                      matches: 12,
                      progress: 70,
                      expiry: "5 days",
                      status: "active",
                    },
                    {
                      title: "UX/UI Designer",
                      applicants: 28,
                      matches: 15,
                      progress: 85,
                      expiry: "12 days",
                      status: "active",
                    },
                    {
                      title: "Product Manager",
                      applicants: 41,
                      matches: 22,
                      progress: 60,
                      expiry: "8 days",
                      status: "active",
                    },
                    {
                      title: "Cloud DevOps Engineer",
                      applicants: 19,
                      matches: 8,
                      progress: 40,
                      expiry: "15 days",
                      status: "active",
                    },
                  ].map((job, index) => (
                    <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-medium">{job.title}</h3>
                          <div className="flex items-center mt-1 text-sm text-muted-foreground">
                            <span>Posted 2 weeks ago</span>
                            <span className="mx-2">•</span>
                            <span>Expires in {job.expiry}</span>
                          </div>
                        </div>
                        <Badge variant={job.status === "active" ? "default" : "outline"}>
                          {job.status === "active" ? "Active" : "Closed"}
                        </Badge>
                      </div>
                      <div className="mt-4 grid grid-cols-3 gap-2 text-sm">
                        <div>
                          <span className="text-muted-foreground">Applicants</span>
                          <p className="font-medium">{job.applicants}</p>
                        </div>
                        <div>
                          <span className="text-muted-foreground">AI Matches</span>
                          <p className="font-medium">{job.matches}</p>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Fill Progress</span>
                          <div className="mt-1">
                            <Progress value={job.progress} className="h-2" />
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2 mt-4">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                        <Button size="sm" className="bg-[#001230] hover:bg-[#1d4ed8]">
                          Review Applicants
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>
                  Latest updates on your recruitment activities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      type: "application",
                      title: "New application received",
                      description: "John Doe applied for Senior Full Stack Developer",
                      time: "2 hours ago",
                      icon: <ClipboardList className="h-5 w-5" />,
                    },
                    {
                      type: "match",
                      title: "New AI matches available",
                      description: "5 new candidates matched for UX/UI Designer",
                      time: "4 hours ago",
                      icon: <Brain className="h-5 w-5" />,
                    },
                    {
                      type: "message",
                      title: "New message",
                      description: "Sarah Miller responded to your interview invitation",
                      time: "Yesterday",
                      icon: <MessageSquare className="h-5 w-5" />,
                    },
                    {
                      type: "contract",
                      title: "Contract signed",
                      description: "Mike Johnson signed the NDA for Product Manager position",
                      time: "2 days ago",
                      icon: <Shield className="h-5 w-5" />,
                    },
                  ].map((activity, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className={`p-2 rounded-full bg-blue-100 text-[#1d4ed8]`}>
                        {activity.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium">{activity.title}</h4>
                          <span className="text-xs text-muted-foreground">
                            {activity.time}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          {activity.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full">
                  View All Activity
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Right Column - AI Matches */}
          <div>
            {/* AI Candidate Matches */}
            <Card className="mb-6">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>AI Candidate Matches</CardTitle>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={refreshAIMatches}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Refreshing
                      </>
                    ) : (
                      <>
                        <Brain className="mr-2 h-4 w-4" />
                        Refresh
                      </>
                    )}
                  </Button>
                </div>
                <CardDescription>
                  Top candidates matched by our AI for your open positions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs
                  defaultValue="matches"
                  onValueChange={setActiveCandidateTab}
                  value={activeCandidateTab}
                >
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="matches">Best Matches</TabsTrigger>
                    <TabsTrigger value="new">New Recommendations</TabsTrigger>
                  </TabsList>
                  <TabsContent value="matches" className="mt-4 space-y-4">
                    {[
                      {
                        name: "Emily Chen",
                        role: "UX/UI Designer",
                        match: 95,
                        image: "/api/placeholder/40/40",
                        skills: ["Figma", "UI Design", "User Research"],
                      },
                      {
                        name: "David Wilson",
                        role: "Senior Full Stack Developer",
                        match: 92,
                        image: "/api/placeholder/40/40",
                        skills: ["React", "Node.js", "MongoDB"],
                      },
                      {
                        name: "Alex Johnson",
                        role: "Product Manager",
                        match: 89,
                        image: "/api/placeholder/40/40",
                        skills: ["Agile", "Product Strategy", "Analytics"],
                      },
                    ].map((candidate, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-4 border rounded-lg p-3 hover:bg-slate-50 cursor-pointer"
                      >
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={candidate.image} alt={candidate.name} />
                          <AvatarFallback>{candidate.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium truncate">{candidate.name}</p>
                          <p className="text-sm text-muted-foreground truncate">
                            {candidate.role}
                          </p>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {candidate.skills.map((skill, i) => (
                              <Badge key={i} variant="outline" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="flex flex-col items-end">
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                            {candidate.match}% Match
                          </Badge>
                          <Button variant="ghost" size="sm" className="mt-2">
                            View
                          </Button>
                        </div>
                      </div>
                    ))}
                    <Button variant="outline" className="w-full">
                      View All Matches
                    </Button>
                  </TabsContent>
                  <TabsContent value="new" className="mt-4 space-y-4">
                    {[
                      {
                        name: "Sarah Parker",
                        role: "Cloud DevOps Engineer",
                        match: 88,
                        image: "/api/placeholder/40/40",
                        skills: ["AWS", "Docker", "Kubernetes"],
                      },
                      {
                        name: "Michael Lee",
                        role: "Senior Full Stack Developer",
                        match: 85,
                        image: "/api/placeholder/40/40",
                        skills: ["JavaScript", "Python", "AWS"],
                      },
                    ].map((candidate, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-4 border rounded-lg p-3 hover:bg-slate-50 cursor-pointer"
                      >
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={candidate.image} alt={candidate.name} />
                          <AvatarFallback>{candidate.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center">
                            <p className="font-medium truncate">{candidate.name}</p>
                            <Badge variant="outline" className="ml-2 bg-blue-50">New</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground truncate">
                            {candidate.role}
                          </p>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {candidate.skills.map((skill, i) => (
                              <Badge key={i} variant="outline" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="flex flex-col items-end">
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                            {candidate.match}% Match
                          </Badge>
                          <Button variant="ghost" size="sm" className="mt-2">
                            View
                          </Button>
                        </div>
                      </div>
                    ))}
                    <Button variant="outline" className="w-full">
                      View All Recommendations
                    </Button>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Smart Contract Status */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Blockchain Contracts</CardTitle>
                <CardDescription>
                  Status of your blockchain-secured NDAs and agreements
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      candidate: "David Wilson",
                      position: "Senior Full Stack Developer",
                      status: "signed",
                      date: "Apr 15, 2025",
                    },
                    {
                      candidate: "Emily Chen",
                      position: "UX/UI Designer",
                      status: "pending",
                      date: "Apr 17, 2025",
                    },
                    {
                      candidate: "Alex Johnson",
                      position: "Product Manager",
                      status: "draft",
                      date: "Apr 18, 2025",
                    },
                  ].map((contract, index) => (
                    <div
                      key={index}
                      className="border rounded-lg p-3 flex items-center justify-between"
                    >
                      <div>
                        <p className="font-medium">{contract.candidate}</p>
                        <p className="text-sm text-muted-foreground">
                          {contract.position}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {contract.date}
                        </p>
                      </div>
                      <div className="flex flex-col items-end">
                        <Badge
                          variant={
                            contract.status === "signed"
                              ? "default"
                              : contract.status === "pending"
                              ? "outline"
                              : "secondary"
                          }
                          className={
                            contract.status === "signed"
                              ? "bg-green-100 text-green-800 hover:bg-green-200"
                              : ""
                          }
                        >
                          {contract.status === "signed"
                            ? "Signed"
                            : contract.status === "pending"
                            ? "Pending"
                            : "Draft"}
                        </Badge>
                        <Button variant="ghost" size="sm" className="mt-2">
                          View
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#001230] hover:bg-[#1d4ed8]">
                  <Shield className="mr-2 h-4 w-4" /> Create New NDA
                </Button>
              </CardFooter>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-2">
                <Button variant="outline" className="justify-start">
                  <UserPlus className="mr-2 h-4 w-4" />
                  Invite Team Members
                </Button>
                <Button variant="outline" className="justify-start">
                  <FileText className="mr-2 h-4 w-4" />
                  Create Job Template
                </Button>
                <Button variant="outline" className="justify-start">
                  <Brain className="mr-2 h-4 w-4" />
                  Run AI Profile Analysis
                </Button>
                <Button variant="outline" className="justify-start">
                  <FileSearch className="mr-2 h-4 w-4" />
                  View Analytics Report
                </Button>
                <Button variant="outline" className="justify-start">
                  <Settings className="mr-2 h-4 w-4" />
                  Configure AI Preferences
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Upcoming Events Calendar */}
        <div className="mt-8">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Upcoming Interviews & Events</CardTitle>
                <Button variant="outline" size="sm">
                  <Calendar className="mr-2 h-4 w-4" /> View Calendar
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    title: "Interview with David Wilson",
                    type: "interview",
                    date: "Today",
                    time: "2:00 PM",
                    position: "Senior Full Stack Developer",
                  },
                  {
                    title: "Portfolio Review with Emily Chen",
                    type: "review",
                    date: "Tomorrow",
                    time: "11:30 AM",
                    position: "UX/UI Designer",
                  },
                  {
                    title: "Technical Assessment",
                    type: "assessment",
                    date: "Apr 20, 2025",
                    time: "10:00 AM",
                    position: "Cloud DevOps Engineer",
                  },
                  {
                    title: "Team Interview with Alex Johnson",
                    type: "interview",
                    date: "Apr 21, 2025",
                    time: "3:30 PM",
                    position: "Product Manager",
                  },
                ].map((event, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 border rounded-lg p-4"
                  >
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Calendar className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">{event.title}</h4>
                        <Badge variant="outline">
                          {event.type === "interview"
                            ? "Interview"
                            : event.type === "review"
                            ? "Review"
                            : "Assessment"}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {event.position}
                      </p>
                      <div className="flex items-center mt-2 text-sm">
                        <span className="font-medium">{event.date}</span>
                        <span className="mx-2">•</span>
                        <span>{event.time}</span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        Reschedule
                      </Button>
                      <Button size="sm" className="bg-[#001230] hover:bg-[#1d4ed8]">
                        Join
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[var(--primary-color)] text-white py-6">
        <div className="container mx-auto px-6 flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center space-x-2">
            <Image
              src="/images/logo-square-transparent.png"
              alt="Oracis Logo"
              width={24}
              height={24}
            />
            <p className="text-sm text-muted-foreground">
              © 2025 Oracis AI. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-foreground">
              Help Center
            </Link>
            <Link href="#" className="hover:text-foreground">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-foreground">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CompanyDashboard;