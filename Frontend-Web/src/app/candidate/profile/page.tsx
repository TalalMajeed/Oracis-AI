"use client";

import {
  AlertCircle,
  Edit,
  Github,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Plus,
  X
} from "lucide-react";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

const CandidateProfile = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [editMode, setEditMode] = useState({
    basicInfo: false,
    about: false,
    skills: false,
  });
  const [newSkill, setNewSkill] = useState("");
  const [activeTab, setActiveTab] = useState("overview");
  
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
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="certifications">Certifications</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>About Me</CardTitle>
                <CardDescription>Tell employers about your background and skills</CardDescription>
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

            <Card>
              <CardHeader>
                <CardTitle>Skills</CardTitle>
                <CardDescription>Showcase your technical and professional skills</CardDescription>
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

            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Email</Label>
                    <p className="text-sm text-gray-600">{profile.email}</p>
                  </div>
                  <div>
                    <Label>Phone</Label>
                    <p className="text-sm text-gray-600">{profile.phone}</p>
                  </div>
                  <div>
                    <Label>Location</Label>
                    <p className="text-sm text-gray-600">{profile.location}</p>
                  </div>
                  <div>
                    <Label>LinkedIn</Label>
                    <p className="text-sm text-gray-600">{profile.socialLinks.linkedin}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {profile.languages.map((language, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">{language.language}</p>
                        <p className="text-sm text-gray-500">{language.proficiency}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Experience Tab */}
          <TabsContent value="experience" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Professional Experience</CardTitle>
                  <Button variant="outline" size="sm">
                    <Edit className="mr-2 h-4 w-4" />
                    Add Experience
                  </Button>
                </div>
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
              </CardContent>
            </Card>
          </TabsContent>

          {/* Education Tab */}
          <TabsContent value="education" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Education</CardTitle>
                  <Button variant="outline" size="sm">
                    <Edit className="mr-2 h-4 w-4" />
                    Add Education
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {profile.education.map((edu) => (
                    <div key={edu.id} className="border-b pb-5 last:border-0 last:pb-0">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold">{edu.degree}</h3>
                          <p className="text-gray-600">{edu.institution}</p>
                          <p className="text-gray-500 text-sm">{edu.location}</p>
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
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Skills Tab */}
          <TabsContent value="skills" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Skills</CardTitle>
                  <Button variant="outline" size="sm">
                    <Edit className="mr-2 h-4 w-4" />
                    Add Skills
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {profile.skills.map((skill, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">{skill}</p>
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
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Certifications Tab */}
          <TabsContent value="certifications" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Certifications</CardTitle>
                  <Button variant="outline" size="sm">
                    <Edit className="mr-2 h-4 w-4" />
                    Add Certification
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {profile.certifications.map((cert) => (
                    <div key={cert.id} className="border-b pb-5 last:border-0 last:pb-0">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold">{cert.name}</h3>
                          <p className="text-gray-600">{cert.issuer}</p>
                          <p className="text-gray-500 text-sm">Issued: {cert.date}</p>
                          <a 
                            href={cert.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-sm text-blue-600 hover:underline"
                          >
                            View Certificate
                          </a>
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
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CandidateProfile;