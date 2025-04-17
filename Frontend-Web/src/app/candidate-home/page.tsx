"use client";

import {
    Activity,
    AlertCircle,
    Award,
    Bell,
    Calendar,
    ChevronRight,
    Clipboard,
    Clock,
    FileText,
    Github,
    Laptop,
    Layers,
    Linkedin,
    MapPin,
    MessageSquare,
    Settings,
    Star,
    User,
    X
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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

const CandidateHome = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  
  // Mock profile data
  const profile = {
    name: "Alex Johnson",
    title: "Frontend Developer",
    location: "Islamabad, Pakistan",
    profileCompleteness: 75,
    profileViews: 42,
    profileRank: "Intermediate",
    skills: ["React", "JavaScript", "TypeScript", "Next.js", "UI/UX"],
    notifications: [
      {
        id: 1,
        type: "message",
        content: "You have a new message from TechCorp",
        time: "2 hours ago",
      },
      {
        id: 2,
        type: "view",
        content: "Your profile was viewed by 3 companies",
        time: "Yesterday",
      },
      {
        id: 3,
        type: "match",
        content: "New job match found: UI Developer at WebSolutions",
        time: "2 days ago",
      }
    ]
  };

  // Mock job recommendations
  const jobRecommendations = [
    {
      id: 1, 
      title: "Senior Frontend Developer",
      company: "TechCorp",
      location: "Islamabad, Remote",
      salary: "$70,000 - $90,000",
      match: 92,
      posted: "2 days ago"
    },
    {
      id: 2,
      title: "React Native Developer",
      company: "MobileSoft",
      location: "Lahore, On-site",
      salary: "$60,000 - $75,000",
      match: 85,
      posted: "1 week ago"
    },
    {
      id: 3,
      title: "Full Stack JavaScript Developer",
      company: "WebSolutions",
      location: "Karachi, Hybrid",
      salary: "$80,000 - $100,000",
      match: 78,
      posted: "3 days ago"
    }
  ];

  // Mock skill insights
  const skillInsights = [
    {
      skill: "React",
      level: "Advanced",
      demand: "High",
      improvement: "Consider learning more about React Server Components"
    },
    {
      skill: "TypeScript",
      level: "Intermediate",
      demand: "Very High",
      improvement: "Complete advanced TypeScript courses to boost your profile"
    },
    {
      skill: "UI/UX Design",
      level: "Beginner",
      demand: "Medium",
      improvement: "Strengthen this skill to stand out in frontend roles"
    }
  ];

  // Mock upcoming interviews
  const upcomingInterviews = [
    {
      id: 1,
      company: "TechCorp",
      position: "Senior Frontend Developer",
      date: "April 22, 2025",
      time: "10:00 AM",
      type: "Video Call"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[var(--background-color)]">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-[#001230] text-white backdrop-blur">
        <div className="container max-w-none flex h-14 items-center px-[30px]">
          <div className="flex items-center mr-4">
            <Link href="/candidate" className="flex items-center space-x-2">
              <Image
                src="/images/logo-square-transparent.png"
                alt="Oracis Logo"
                width={32}
                height={32}
              />
              <span className="font-bold text-xl">Oracis AI</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium flex-1 justify-center">
            <Link
              href="/candidate/dashboard"
              className="transition-colors hover:text-[#1d4ed8]"
            >
              Dashboard
            </Link>
            <Link
              href="/candidate/jobs"
              className="transition-colors hover:text-[#1d4ed8]"
            >
              Find Jobs
            </Link>
            <Link
              href="/candidate/profile"
              className="transition-colors hover:text-[#1d4ed8]"
            >
              My Profile
            </Link>
            <Link
              href="/candidate/messages"
              className="transition-colors hover:text-[#1d4ed8]"
            >
              Messages
            </Link>
            <Link
              href="/candidate/contracts"
              className="transition-colors hover:text-[#1d4ed8]"
            >
              Contracts
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4 ml-auto">
            <div className="relative">
              <button 
                className="p-2 rounded-full hover:bg-[#0c2b5e] transition-colors"
                onClick={() => setShowNotifications(!showNotifications)}
              >
                <Bell size={20} />
                <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full text-xs flex items-center justify-center">{profile.notifications.length}</span>
              </button>
              
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg z-50 text-gray-800">
                  <div className="p-3 border-b flex justify-between items-center">
                    <h3 className="font-semibold">Notifications</h3>
                    <button 
                      className="text-gray-500 hover:text-gray-700"
                      onClick={() => setShowNotifications(false)}
                    >
                      <X size={16} />
                    </button>
                  </div>
                  <div className="max-h-80 overflow-y-auto">
                    {profile.notifications.map(notification => (
                      <div key={notification.id} className="p-3 border-b hover:bg-gray-100">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 mr-3">
                            {notification.type === "message" && <MessageSquare size={16} className="text-blue-500" />}
                            {notification.type === "view" && <Eye size={16} className="text-green-500" />}
                            {notification.type === "match" && <Star size={16} className="text-yellow-500" />}
                          </div>
                          <div>
                            <p className="text-sm">{notification.content}</p>
                            <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="p-2 text-center border-t">
                    <Link href="/candidate/notifications" className="text-sm text-[#1d4ed8] hover:underline">
                      View all notifications
                    </Link>
                  </div>
                </div>
              )}
            </div>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-[#1d4ed8] flex items-center justify-center">
                    <span className="text-white font-medium">{profile.name.charAt(0)}</span>
                  </div>
                  <span className="hidden md:inline-block">{profile.name}</span>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Activity className="mr-2 h-4 w-4" />
                  <span>Activity</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/login" className="flex items-center w-full">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Sidebar - Profile Summary */}
          <div className="lg:col-span-3">
            <Card className="mb-6">
              <CardHeader className="pb-2">
                <div className="flex justify-center">
                  <div className="w-20 h-20 rounded-full bg-[#1d4ed8] flex items-center justify-center text-white text-2xl font-bold">
                    {profile.name.charAt(0)}
                  </div>
                </div>
                <CardTitle className="text-center mt-4">{profile.name}</CardTitle>
                <CardDescription className="text-center">{profile.title}</CardDescription>
                <div className="flex items-center justify-center mt-1 text-sm text-gray-500">
                  <MapPin size={14} className="mr-1" />
                  {profile.location}
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Profile Completeness</span>
                      <span className="font-medium">{profile.profileCompleteness}%</span>
                    </div>
                    <Progress value={profile.profileCompleteness} className="h-2" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <div className="flex flex-col items-center p-2 bg-gray-50 rounded-md">
                      <span className="text-sm text-gray-500">Profile Views</span>
                      <span className="font-semibold">{profile.profileViews}</span>
                    </div>
                    <div className="flex flex-col items-center p-2 bg-gray-50 rounded-md">
                      <span className="text-sm text-gray-500">AI Rank</span>
                      <span className="font-semibold">{profile.profileRank}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  variant="outline" 
                  className="w-full"
                  asChild
                >
                  <Link href="/candidate/profile">
                    Complete Profile
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {profile.skills.map((skill, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-blue-50 text-[#1d4ed8] rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  variant="link" 
                  className="p-0 h-auto text-[#1d4ed8]"
                  asChild
                >
                  <Link href="/candidate/skills">
                    Add more skills
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-6">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>AI Job Recommendations</CardTitle>
                <CardDescription>Based on your profile and skills</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {jobRecommendations.map(job => (
                    <div key={job.id} className="border rounded-lg p-4 hover:border-[#1d4ed8] transition-colors">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-lg">{job.title}</h3>
                          <p className="text-gray-600">{job.company} • {job.location}</p>
                          <p className="text-gray-600">{job.salary}</p>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-12 h-12 rounded-full border-4 border-blue-500 flex items-center justify-center font-bold text-blue-500">
                            {job.match}%
                          </div>
                          <span className="text-xs text-gray-500 mt-1">Match</span>
                        </div>
                      </div>
                      <div className="mt-4 flex items-center text-gray-500 text-sm">
                        <Clock size={14} className="mr-1" />
                        <span>Posted {job.posted}</span>
                      </div>
                      <div className="mt-4 flex space-x-3">
                        <Button 
                          size="sm" 
                          className="bg-[#001230] hover:bg-[#1d4ed8]"
                          asChild
                        >
                          <Link href={`/candidate/jobs/${job.id}`}>
                            View Details
                          </Link>
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline"
                          asChild
                        >
                          <Link href={`/candidate/jobs/${job.id}/apply`}>
                            Apply Now
                          </Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  variant="link" 
                  className="flex items-center text-[#1d4ed8]"
                  asChild
                >
                  <Link href="/candidate/jobs">
                    View more job recommendations
                    <ChevronRight size={16} className="ml-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            
            <Tabs defaultValue="insights">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="insights">AI Insights</TabsTrigger>
                <TabsTrigger value="applications">Applications</TabsTrigger>
                <TabsTrigger value="interviews">Interviews</TabsTrigger>
              </TabsList>
              
              <TabsContent value="insights">
                <Card>
                  <CardHeader>
                    <CardTitle>Skill Insights</CardTitle>
                    <CardDescription>AI-powered analysis of your skills</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {skillInsights.map((insight, index) => (
                        <div key={index} className="border rounded-lg p-4">
                          <div className="flex justify-between">
                            <h3 className="font-semibold">{insight.skill}</h3>
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              insight.demand === "High" ? "bg-green-100 text-green-800" :
                              insight.demand === "Very High" ? "bg-green-100 text-green-800" :
                              "bg-yellow-100 text-yellow-800"
                            }`}>
                              {insight.demand} Demand
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">Level: {insight.level}</p>
                          <div className="mt-3 flex items-start">
                            <AlertCircle size={16} className="mr-2 mt-0.5 text-blue-500" />
                            <p className="text-sm">{insight.improvement}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      variant="link" 
                      className="flex items-center text-[#1d4ed8]"
                      asChild
                    >
                      <Link href="/candidate/insights">
                        View detailed insights
                        <ChevronRight size={16} className="ml-1" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              
              <TabsContent value="applications">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Applications</CardTitle>
                    <CardDescription>Track your job applications</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8">
                      <Clipboard className="mx-auto h-12 w-12 text-gray-400" />
                      <h3 className="mt-4 text-lg font-medium">No recent applications</h3>
                      <p className="mt-2 text-sm text-gray-500">
                        You haven't applied to any jobs recently.
                      </p>
                      <Button 
                        className="mt-4 bg-[#001230] hover:bg-[#1d4ed8]"
                        asChild
                      >
                        <Link href="/candidate/jobs">
                          Find Jobs
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="interviews">
                <Card>
                  <CardHeader>
                    <CardTitle>Upcoming Interviews</CardTitle>
                    <CardDescription>Your scheduled interviews</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {upcomingInterviews.length > 0 ? (
                      <div className="space-y-4">
                        {upcomingInterviews.map(interview => (
                          <div key={interview.id} className="border rounded-lg p-4">
                            <h3 className="font-semibold">{interview.position}</h3>
                            <p className="text-gray-600">{interview.company}</p>
                            <div className="mt-3 flex items-center">
                              <Calendar size={16} className="mr-2 text-gray-500" />
                              <span className="text-sm">{interview.date} at {interview.time}</span>
                            </div>
                            <div className="mt-1 flex items-center">
                              <Laptop size={16} className="mr-2 text-gray-500" />
                              <span className="text-sm">{interview.type}</span>
                            </div>
                            <div className="mt-4">
                              <Button 
                                size="sm"
                                className="bg-[#001230] hover:bg-[#1d4ed8]"
                              >
                                Prepare with AI
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <Calendar className="mx-auto h-12 w-12 text-gray-400" />
                        <h3 className="mt-4 text-lg font-medium">No upcoming interviews</h3>
                        <p className="mt-2 text-sm text-gray-500">
                          You don't have any scheduled interviews.
                        </p>
                      </div>
                    )}
                  </CardContent>
                  <CardFooter>
                    <Button 
                      variant="link" 
                      className="flex items-center text-[#1d4ed8]"
                      asChild
                    >
                      <Link href="/candidate/interviews">
                        View all interviews
                        <ChevronRight size={16} className="ml-1" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Right Sidebar */}
          <div className="lg:col-span-3">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg">Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  asChild
                >
                  <Link href="/candidate/profile/cv">
                    <FileText className="mr-2 h-4 w-4" />
                    Update CV with AI
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  asChild
                >
                  <Link href="/candidate/profile/optimization">
                    <Award className="mr-2 h-4 w-4" />
                    Optimize Profile
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  asChild
                >
                  <Link href="/candidate/contracts">
                    <Layers className="mr-2 h-4 w-4" />
                    Manage Contracts
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  asChild
                >
                  <Link href="/candidate/messages">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Messages
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Connect Accounts</CardTitle>
                <CardDescription>
                  Connect your accounts to enhance your profile
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                >
                  <Github className="mr-2 h-4 w-4" />
                  Connect GitHub
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  Connect LinkedIn
                </Button>
              </CardContent>
              <CardFooter>
                <p className="text-xs text-gray-500">
                  Connecting your accounts allows our AI to better analyze your skills and provide personalized recommendations.
                </p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}  
      <footer className="bg-[var(--primary-color)] text-white py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © 2025 Oracis AI. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link
                href="/privacy-policy"
                className="text-gray-400 hover:text-white text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white text-sm"
              >
                Terms of Service
              </Link>
              <Link
                href="/support"
                className="text-gray-400 hover:text-white text-sm"
              >
                Support
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Missing component for LogOut icon
const LogOut = (props:any) => {
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
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" y1="12" x2="9" y2="12" />
    </svg>
  );
};

// Missing component for Eye icon
const Eye = (props:any) => {
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
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
};

export default CandidateHome;