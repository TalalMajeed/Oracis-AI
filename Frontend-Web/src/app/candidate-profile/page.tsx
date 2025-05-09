"use client";

import {
  Activity,
  AlertCircle,
  Award,
  Bell,
  Briefcase,
  Edit,
  Eye,
  Github,
  Globe,
  Layers,
  Linkedin,
  LogOut,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Plus,
  Save,
  Settings,
  Star,
  User,
  X
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const CandidateProfile = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [editMode, setEditMode] = useState({
    basicInfo: false,
    about: false,
    skills: false,
  });
  const [newSkill, setNewSkill] = useState("");
  
  // Mock profile data
  const [profile, setProfile] = useState({
    name: "User Name",
    title: "Frontend Developer",
    email: "user@gmail.com",
    phone: "+92 300 1234567",
    location: "Islamabad, Pakistan",
    profileCompleteness: 75,
    profileViews: 42,
    profileRank: "Expert",
    about: "Passionate frontend developer with 4+ years of experience building responsive web applications using React, Next.js, and modern JavaScript. Strong focus on clean code and user experience.",
    skills: ["React", "JavaScript", "TypeScript", "Next.js", "UI/UX", "HTML5", "CSS3", "Tailwind CSS"],
    experience: [
      {
        id: 1,
        title: "Senior Frontend Developer",
        company: "TechSolutions Inc.",
        location: "Islamabad, Pakistan",
        type: "Full-time",
        startDate: "Jan 2023",
        endDate: "Present",
        description: "Leading frontend development for enterprise web applications, implementing modern React architectures with Next.js and TypeScript."
      },
      {
        id: 2,
        title: "Frontend Developer",
        company: "WebCraft Studios",
        location: "Lahore, Pakistan",
        type: "Full-time",
        startDate: "Mar 2020",
        endDate: "Dec 2022",
        description: "Developed responsive web interfaces for clients across e-commerce and SaaS sectors."
      }
    ],
    education: [
      {
        id: 1,
        degree: "Bachelor of Science in Computer Science",
        institution: "National University of Computer and Emerging Sciences",
        location: "Islamabad, Pakistan",
        startDate: "2016",
        endDate: "2020",
        description: "Focused on web technologies and software engineering."
      }
    ],
    projects: [
      {
        id: 1,
        title: "E-commerce Dashboard",
        description: "A comprehensive dashboard for e-commerce vendors to track sales, inventory, and customer analytics.",
        technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
        link: "https://github.com/alexjohnson/ecommerce-dashboard"
      },
      {
        id: 2,
        title: "Task Management System",
        description: "A collaborative task management application with real-time updates and team features.",
        technologies: ["React", "Firebase", "Material UI"],
        link: "https://github.com/alexjohnson/task-manager"
      }
    ],
    certifications: [
      {
        id: 1,
        name: "Advanced React Patterns",
        issuer: "Frontend Masters",
        date: "Aug 2023",
        link: "https://frontendmasters.com/certificates/advanced-react-patterns"
      },
      {
        id: 2,
        name: "TypeScript for JavaScript Developers",
        issuer: "Udemy",
        date: "Mar 2022",
        link: "https://udemy.com/certificate/typescript-dev"
      }
    ],
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
    ],
    languages: [
      { language: "English", proficiency: "Professional" },
      { language: "Urdu", proficiency: "Native" }
    ],
    socialLinks: {
      linkedin: "https://linkedin.com/in/alex-johnson",
      github: "https://github.com/alexjohnson",
      portfolio: "https://alexjohnson.dev"
    }
  });

  // AI insights based on profile
  const profileInsights = [
    {
      id: 1,
      type: "improvement",
      title: "Add more project details",
      description: "Employers are 50% more likely to contact candidates with detailed project descriptions."
    },
    {
      id: 2,
      type: "skill",
      title: "Consider adding React Native",
      description: "This skill is in high demand and aligns with your current skillset."
    },
    {
      id: 3,
      type: "profile",
      title: "Complete your about section",
      description: "A more detailed background improves your visibility in searches."
    }
  ];

  // Function to handle skill addition
  const handleAddSkill = () => {
    if (newSkill && !profile.skills.includes(newSkill)) {
      setProfile({
        ...profile,
        skills: [...profile.skills, newSkill]
      });
      setNewSkill("");
    }
  };

  // Function to handle skill removal
  const handleRemoveSkill = (skillToRemove:any) => {
    setProfile({
      ...profile,
      skills: profile.skills.filter(skill => skill !== skillToRemove)
    });
  };

  // Function to update profile
  const handleProfileUpdate = (section:any, data:any) => {
    setProfile({
      ...profile,
      [section]: data
    });
    setEditMode({
      ...editMode,
      [section]: false
    });
  };

  // Graduation icon component
  const Graduation = (props:any) => {
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
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
      </svg>
    );
  };

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
              className="transition-colors hover:text-[#1d4ed8] text-[#1d4ed8]"
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
                  <div className="w-24 h-24 rounded-full bg-[#1d4ed8] flex items-center justify-center text-white text-3xl font-bold">
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

                  <div className="pt-2 space-y-3">
                    <div className="flex items-center text-sm">
                      <Mail className="h-4 w-4 mr-2 text-gray-500" />
                      <span>{profile.email}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Phone className="h-4 w-4 mr-2 text-gray-500" />
                      <span>{profile.phone}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                      <span>{profile.location}</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <h4 className="text-sm font-medium mb-2">Social Links</h4>
                    <div className="space-y-2">
                      <Link 
                        href={profile.socialLinks.linkedin} 
                        className="flex items-center text-sm text-[#1d4ed8] hover:underline"
                      >
                        <Linkedin className="h-4 w-4 mr-2" />
                        LinkedIn Profile
                      </Link>
                      <Link 
                        href={profile.socialLinks.github} 
                        className="flex items-center text-sm text-[#1d4ed8] hover:underline"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        GitHub Profile
                      </Link>
                      <Link 
                        href={profile.socialLinks.portfolio} 
                        className="flex items-center text-sm text-[#1d4ed8] hover:underline"
                      >
                        <Globe className="h-4 w-4 mr-2" />
                        Portfolio Website
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  variant="outline" 
                  className="w-full flex items-center"
                  onClick={() => setEditMode({ ...editMode, basicInfo: true })}
                >
                  <Edit size={16} className="mr-2" />
                  Edit Basic Info
                </Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">AI Profile Insights</CardTitle>
                <CardDescription>AI-powered suggestions to improve your profile</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {profileInsights.map(insight => (
                    <div 
                      key={insight.id} 
                      className="p-3 bg-blue-50 border border-blue-100 rounded-md"
                    >
                      <div className="flex items-start">
                        <AlertCircle size={16} className="mr-2 mt-0.5 text-blue-500" />
                        <div>
                          <h4 className="font-medium text-sm">{insight.title}</h4>
                          <p className="text-xs text-gray-600 mt-1">{insight.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  variant="link" 
                  className="p-0 h-auto text-[#1d4ed8]"
                  asChild
                >
                  <Link href="/candidate/profile/ai-analysis">
                    View detailed AI analysis
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-9">
            {/* About Me Section */}
            <Card className="mb-6">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <div>
                  <CardTitle>About Me</CardTitle>
                  <CardDescription>Tell employers about your background and skills</CardDescription>
                </div>
                {!editMode.about ? (
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => setEditMode({ ...editMode, about: true })}
                  >
                    <Edit size={16} className="mr-2" />
                    Edit
                  </Button>
                ) : (
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => setEditMode({ ...editMode, about: false })}
                  >
                    <X size={16} className="mr-2" />
                    Cancel
                  </Button>
                )}
              </CardHeader>
              <CardContent>
                {!editMode.about ? (
                  <p className="text-gray-700">{profile.about}</p>
                ) : (
                  <div className="space-y-4">
                    <Textarea 
                      value={profile.about}
                      onChange={(e) => setProfile({ ...profile, about: e.target.value })}
                      rows={5}
                      placeholder="Write about your professional experience, skills, and career goals..."
                      className="w-full"
                    />
                    <Button 
                      onClick={() => setEditMode({ ...editMode, about: false })}
                      className="bg-[#001230] hover:bg-[#1d4ed8]"
                    >
                      Save Changes
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Skills Section */}
            <Card className="mb-6">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <div>
                  <CardTitle>Skills</CardTitle>
                  <CardDescription>Showcase your technical and professional skills</CardDescription>
                </div>
                {!editMode.skills ? (
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => setEditMode({ ...editMode, skills: true })}
                  >
                    <Edit size={16} className="mr-2" />
                    Edit
                  </Button>
                ) : (
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => setEditMode({ ...editMode, skills: false })}
                  >
                    <X size={16} className="mr-2" />
                    Cancel
                  </Button>
                )}
              </CardHeader>
              <CardContent>
                {!editMode.skills ? (
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
                ) : (
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {profile.skills.map((skill, index) => (
                        <div 
                          key={index} 
                          className="flex items-center px-3 py-1 bg-blue-50 text-[#1d4ed8] rounded-full text-sm"
                        >
                          {skill}
                          <button 
                            className="ml-2 text-red-500 hover:text-red-700"
                            onClick={() => handleRemoveSkill(skill)}
                          >
                            <X size={12} />
                          </button>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center space-x-2">
                      <Input 
                        value={newSkill}
                        onChange={(e) => setNewSkill(e.target.value)}
                        placeholder="Add a new skill..."
                        className="flex-1"
                      />
                      <Button 
                        onClick={handleAddSkill}
                        className="bg-[#001230] hover:bg-[#1d4ed8]"
                      >
                        <Plus size={16} className="mr-2" />
                        Add Skill
                      </Button>
                    </div>
                    <div className="pt-2">
                      <Button 
                        onClick={() => setEditMode({ ...editMode, skills: false })}
                        variant="outline"
                      >
                        Save Changes
                      </Button>
                      <Button 
                        className="ml-2 bg-[#001230] hover:bg-[#1d4ed8]"
                        asChild
                      >
                        <Link href="/candidate/profile/ai-skills-recommender">
                          Get AI Skill Recommendations
                        </Link>
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Professional Experience */}
            <Card className="mb-6">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <div>
                  <CardTitle>Professional Experience</CardTitle>
                  <CardDescription>Your work history and achievements</CardDescription>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      variant="ghost" 
                      size="sm"
                    >
                      <Plus size={16} className="mr-2" />
                      Add Experience
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[550px]">
                    <DialogHeader>
                      <DialogTitle>Add Professional Experience</DialogTitle>
                      <DialogDescription>
                        Add details about your work experience
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="job-title" className="text-right">
                          Title
                        </Label>
                        <Input
                          id="job-title"
                          placeholder="Senior Frontend Developer"
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="company" className="text-right">
                          Company
                        </Label>
                        <Input
                          id="company"
                          placeholder="Company Name"
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="location" className="text-right">
                          Location
                        </Label>
                        <Input
                          id="location"
                          placeholder="City, Country"
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="employment-type" className="text-right">
                          Type
                        </Label>
                        <Select>
                          <SelectTrigger className="col-span-3">
                            <SelectValue placeholder="Select employment type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="full-time">Full-time</SelectItem>
                            <SelectItem value="part-time">Part-time</SelectItem>
                            <SelectItem value="contract">Contract</SelectItem>
                            <SelectItem value="freelance">Freelance</SelectItem>
                            <SelectItem value="internship">Internship</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="start-date" className="text-right">
                          Start Date
                        </Label>
                        <Input
                          id="start-date"
                          placeholder="MMM YYYY"
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="end-date" className="text-right">
                          End Date
                        </Label>
                        <Input
                          id="end-date"
                          placeholder="MMM YYYY or Present"
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-start gap-4">
                        <Label htmlFor="description" className="text-right pt-2">
                          Description
                        </Label>
                        <Textarea
                          id="description"
                          placeholder="Describe your responsibilities and achievements..."
                          className="col-span-3"
                          rows={3}
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="button" variant="outline">Cancel</Button>
                      <Button type="submit" className="bg-[#001230] hover:bg-[#1d4ed8]">Add Experience</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {profile.experience.map((exp) => (
                    <div key={exp.id} className="border-b pb-5 last:border-0 last:pb-0">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold">{exp.title}</h3>
                          <p className="text-gray-600">{exp.company} • {exp.location}</p>
                          <p className="text-gray-500 text-sm">{exp.startDate} - {exp.endDate} • {exp.type}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button variant="ghost" size="sm">
                            <Edit size={14} />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <X size={14} />
                          </Button>
                        </div>
                      </div>
                      <p className="mt-2 text-sm text-gray-700">{exp.description}</p>
                    </div>
                  ))}
                </div>
                {profile.experience.length === 0 && (
                  <div className="text-center py-8">
                    <Briefcase className="mx-auto h-12 w-12 text-gray-400" />
                    <h3 className="mt-4 text-lg font-medium">No experience added yet</h3>
                    <p className="mt-2 text-sm text-gray-500">
                      Add your professional experience to improve your profile.
                    </p>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          className="mt-4 bg-[#001230] hover:bg-[#1d4ed8]"
                        >
                          Add Experience
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[550px]">
                        {/* Dialog content - same as above */}
                      </DialogContent>
                    </Dialog>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Education */}
            <Card className="mb-6">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <div>
                  <CardTitle>Education</CardTitle>
                  <CardDescription>Your academic background and qualifications</CardDescription>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      variant="ghost" 
                      size="sm"
                    >
                      <Plus size={16} className="mr-2" />
                      Add Education
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[550px]">
                    <DialogHeader>
                      <DialogTitle>Add Education</DialogTitle>
                      <DialogDescription>
                        Add details about your educational background
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="degree" className="text-right">
                          Degree
                        </Label>
                        <Input
                          id="degree"
                          placeholder="Bachelor of Science in Computer Science"
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="institution" className="text-right">
                          Institution
                        </Label>
                        <Input
                          id="institution"
                          placeholder="University Name"
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="edu-location" className="text-right">
                          Location
                        </Label>
                        <Input
                          id="edu-location"
                          placeholder="City, Country"
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="edu-start-date" className="text-right">
                          Start Year
                        </Label>
                        <Input
                          id="edu-start-date"
                          placeholder="YYYY"
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="edu-end-date" className="text-right">
                          End Year
                        </Label>
                        <Input
                          id="edu-end-date"
                          placeholder="YYYY or Present"
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-start gap-4">
                        <Label htmlFor="edu-description" className="text-right pt-2">
                          Description
                        </Label>
                        <Textarea
                          id="edu-description"
                          placeholder="Describe your area of study, achievements, etc."
                          className="col-span-3"
                          rows={3}
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="button" variant="outline">Cancel</Button>
                      <Button type="submit" className="bg-[#001230] hover:bg-[#1d4ed8]">Add Education</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {profile.education.map((edu) => (
                    <div key={edu.id} className="border-b pb-5 last:border-0 last:pb-0">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold">{edu.degree}</h3>
                          <p className="text-gray-600">{edu.institution} • {edu.location}</p>
                          <p className="text-gray-500 text-sm">{edu.startDate} - {edu.endDate}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button variant="ghost" size="sm">
                            <Edit size={14} />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <X size={14} />
                          </Button>
                        </div>
                      </div>
                      <p className="mt-2 text-sm text-gray-700">{edu.description}</p>
                    </div>
                  ))}
                  
                  {profile.education.length === 0 && (
                    <div className="text-center py-8">
                      <Graduation className="mx-auto h-12 w-12 text-gray-400" />
                      <h3 className="mt-4 text-lg font-medium">No education added yet</h3>
                      <p className="mt-2 text-sm text-gray-500">
                        Add your educational background to complete your profile.
                      </p>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            className="mt-4 bg-[#001230] hover:bg-[#1d4ed8]"
                          >
                            Add Education
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[550px]">
                          {/* Dialog content - same as above */}
                        </DialogContent>
                      </Dialog>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Projects */}
            <Card className="mb-6">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <div>
                  <CardTitle>Projects</CardTitle>
                  <CardDescription>Showcase your work and portfolio</CardDescription>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      variant="ghost" 
                      size="sm"
                    >
                      <Plus size={16} className="mr-2" />
                      Add Project
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[550px]">
                    <DialogHeader>
                      <DialogTitle>Add Project</DialogTitle>
                      <DialogDescription>
                        Showcase your work samples and projects
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="project-title" className="text-right">
                          Title
                        </Label>
                        <Input
                          id="project-title"
                          placeholder="Project Name"
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-start gap-4">
                        <Label htmlFor="project-description" className="text-right pt-2">
                          Description
                        </Label>
                        <Textarea
                          id="project-description"
                          placeholder="Describe your project, its purpose, and your role..."
                          className="col-span-3"
                          rows={3}
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="project-tech" className="text-right">
                          Technologies
                        </Label>
                        <Input
                          id="project-tech"
                          placeholder="React, Node.js, MongoDB, etc."
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="project-link" className="text-right">
                          Project Link
                        </Label>
                        <Input
                          id="project-link"
                          placeholder="https://github.com/username/project"
                          className="col-span-3"
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="button" variant="outline">Cancel</Button>
                      <Button type="submit" className="bg-[#001230] hover:bg-[#1d4ed8]">Add Project</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {profile.projects.map((project) => (
                    <div key={project.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold">{project.title}</h3>
                          <p className="mt-2 text-sm text-gray-700">{project.description}</p>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {project.technologies.map((tech, idx) => (
                              <Badge key={idx} variant="secondary" className="bg-gray-100 text-gray-800">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button variant="ghost" size="sm">
                            <Edit size={14} />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <X size={14} />
                          </Button>
                        </div>
                      </div>
                      <div className="mt-4">
                        <Link 
                          href={project.link} 
                          className="text-sm text-[#1d4ed8] hover:underline flex items-center"
                          target="_blank"
                        >
                          <Github className="mr-1 h-4 w-4" />
                          View Project
                        </Link>
                      </div>
                    </div>
                  ))}
                  
                  {profile.projects.length === 0 && (
                    <div className="text-center py-8">
                      <Layers className="mx-auto h-12 w-12 text-gray-400" />
                      <h3 className="mt-4 text-lg font-medium">No projects added yet</h3>
                      <p className="mt-2 text-sm text-gray-500">
                        Showcase your work by adding projects to your portfolio.
                      </p>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            className="mt-4 bg-[#001230] hover:bg-[#1d4ed8]"
                          >
                            Add Project
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[550px]">
                          {/* Dialog content - same as above */}
                        </DialogContent>
                      </Dialog>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card className="mb-6">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <div>
                  <CardTitle>Certifications</CardTitle>
                  <CardDescription>Your professional certifications and credentials</CardDescription>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      variant="ghost" 
                      size="sm"
                    >
                      <Plus size={16} className="mr-2" />
                      Add Certification
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[550px]">
                    <DialogHeader>
                      <DialogTitle>Add Certification</DialogTitle>
                      <DialogDescription>
                        Add details about your professional certifications
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="cert-name" className="text-right">
                          Name
                        </Label>
                        <Input
                          id="cert-name"
                          placeholder="Certificate Name"
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="cert-issuer" className="text-right">
                          Issuer
                        </Label>
                        <Input
                          id="cert-issuer"
                          placeholder="Issuing Organization"
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="cert-date" className="text-right">
                          Date
                        </Label>
                        <Input
                          id="cert-date"
                          placeholder="MMM YYYY"
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="cert-link" className="text-right">
                          Link
                        </Label>
                        <Input
                          id="cert-link"
                          placeholder="https://credential-verify.com/abc123"
                          className="col-span-3"
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="button" variant="outline">Cancel</Button>
                      <Button type="submit" className="bg-[#001230] hover:bg-[#1d4ed8]">Add Certification</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {profile.certifications.map((cert) => (
                    <div key={cert.id} className="flex justify-between items-center p-3 border rounded-lg">
                      <div>
                        <h3 className="font-semibold">{cert.name}</h3>
                        <p className="text-gray-600 text-sm">{cert.issuer} • {cert.date}</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Link 
                          href={cert.link} 
                          className="text-[#1d4ed8] hover:underline text-sm"
                          target="_blank"
                        >
                          View
                        </Link>
                        <div className="flex items-center space-x-1">
                          <Button variant="ghost" size="sm">
                            <Edit size={14} />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <X size={14} />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {profile.certifications.length === 0 && (
                    <div className="text-center py-8">
                      <Award className="mx-auto h-12 w-12 text-gray-400" />
                      <h3 className="mt-4 text-lg font-medium">No certifications added yet</h3>
                      <p className="mt-2 text-sm text-gray-500">
                        Add your professional certifications to enhance your profile.
                      </p>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            className="mt-4 bg-[#001230] hover:bg-[#1d4ed8]"
                          >
                            Add Certification
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[550px]">
                          {/* Dialog content - same as above */}
                        </DialogContent>
                      </Dialog>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Languages */}
            <Card className="mb-6">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <div>
                  <CardTitle>Languages</CardTitle>
                  <CardDescription>Languages you speak and your proficiency level</CardDescription>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      variant="ghost" 
                      size="sm"
                    >
                      <Plus size={16} className="mr-2" />
                      Add Language
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[550px]">
                    <DialogHeader>
                      <DialogTitle>Add Language</DialogTitle>
                      <DialogDescription>
                        Add a language and your proficiency level
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="language" className="text-right">
                          Language
                        </Label>
                        <Input
                          id="language"
                          placeholder="English"
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="proficiency" className="text-right">
                          Proficiency
                        </Label>
                        <Select>
                          <SelectTrigger className="col-span-3">
                            <SelectValue placeholder="Select proficiency level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="native">Native</SelectItem>
                            <SelectItem value="fluent">Fluent</SelectItem>
                            <SelectItem value="professional">Professional Working</SelectItem>
                            <SelectItem value="intermediate">Intermediate</SelectItem>
                            <SelectItem value="basic">Basic</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="button" variant="outline">Cancel</Button>
                      <Button type="submit" className="bg-[#001230] hover:bg-[#1d4ed8]">Add Language</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {profile.languages.map((lang, index) => (
                    <div key={index} className="flex justify-between items-center p-3 border rounded-lg">
                      <div>
                        <h3 className="font-semibold">{lang.language}</h3>
                        <p className="text-gray-600 text-sm">{lang.proficiency}</p>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Button variant="ghost" size="sm">
                          <Edit size={14} />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <X size={14} />
                        </Button>
                      </div>
                    </div>
                  ))}
                  
                  {profile.languages.length === 0 && (
                    <div className="text-center py-8">
                      <Globe className="mx-auto h-12 w-12 text-gray-400" />
                      <h3 className="mt-4 text-lg font-medium">No languages added yet</h3>
                      <p className="mt-2 text-sm text-gray-500">
                        Add languages you speak to enhance your profile.
                      </p>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            className="mt-4 bg-[#001230] hover:bg-[#1d4ed8]"
                          >
                            Add Language
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[550px]">
                          {/* Dialog content - same as above */}
                        </DialogContent>
                      </Dialog>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Save Profile Button */}
            <div className="flex justify-end space-x-4 mb-6">
              <Button variant="outline">Cancel</Button>
              <Button className="bg-[#001230] hover:bg-[#1d4ed8]">
                <Save className="mr-2 h-4 w-4" />
                Save Profile
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}  
      <footer className="bg-[#001230] text-white py-6">
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

      {/* Edit Basic Info Dialog */}
      <Dialog open={editMode.basicInfo} onOpenChange={(open:any) => setEditMode({ ...editMode, basicInfo: !open })}>
        <DialogContent className="sm:max-w-[550px]">
          <DialogHeader>
            <DialogTitle>Edit Basic Information</DialogTitle>
            <DialogDescription>
              Update your personal and contact information
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Full Name
              </Label>
              <Input
                id="name"
                value={profile.name}
                onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Title
              </Label>
              <Input
                id="title"
                value={profile.title}
                onChange={(e) => setProfile({ ...profile, title: e.target.value })}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={profile.email}
                onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="phone" className="text-right">
                Phone
              </Label>
              <Input
                id="phone"
                value={profile.phone}
                onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="location" className="text-right">
                Location
              </Label>
              <Input
                id="location"
                value={profile.location}
                onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="linkedin" className="text-right">
                LinkedIn
              </Label>
              <Input
                id="linkedin"
                value={profile.socialLinks.linkedin}
                onChange={(e) => setProfile({ 
                  ...profile, 
                  socialLinks: { 
                    ...profile.socialLinks, 
                    linkedin: e.target.value 
                  } 
                })}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="github" className="text-right">
                GitHub
              </Label>
              <Input
                id="github"
                value={profile.socialLinks.github}
                onChange={(e) => setProfile({ 
                  ...profile, 
                  socialLinks: { 
                    ...profile.socialLinks, 
                    github: e.target.value 
                  } 
                })}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="portfolio" className="text-right">
                Portfolio
              </Label>
              <Input
                id="portfolio"
                value={profile.socialLinks.portfolio}
                onChange={(e) => setProfile({ 
                  ...profile, 
                  socialLinks: { 
                    ...profile.socialLinks, 
                    portfolio: e.target.value 
                  } 
                })}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setEditMode({ ...editMode, basicInfo: false })}>
              Cancel
            </Button>
            <Button 
              type="submit" 
              className="bg-[#001230] hover:bg-[#1d4ed8]"
              onClick={() => setEditMode({ ...editMode, basicInfo: false })}
            >
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CandidateProfile;