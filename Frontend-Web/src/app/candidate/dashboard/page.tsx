"use client";

import {
  Award,
  Briefcase,
  Building2,
  Calendar,
  Clock,
  DollarSign,
  Eye,
  FileText,
  MapPin,
  MessageSquare,
  TrendingUp,
  Upload,
  Users
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
import { Progress } from "@/components/ui/progress";

const CandidateDashboard = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  
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

  // Mock application status
  const applicationStatus = {
    total: 45,
    inProgress: 12,
    interviews: 8,
    offers: 3,
    successRate: 68
  };

  // Mock learning recommendations
  const learningRecommendations = [
    {
      title: "Advanced React Patterns",
      type: "Course",
      duration: "4 hours",
      progress: 60,
      skills: ["React", "JavaScript"]
    },
    {
      title: "TypeScript Masterclass",
      type: "Course",
      duration: "6 hours",
      progress: 30,
      skills: ["TypeScript", "JavaScript"]
    }
  ];

  // Mock network activity
  const networkActivity = {
    newConnections: 5,
    profileViews: 12,
    companyFollows: 3,
    messages: 8
  };

  // Mock career insights
  const careerInsights = {
    marketTrend: "Growing",
    salaryRange: "$70,000 - $100,000",
    topSkills: ["React", "TypeScript", "Node.js"],
    growthOpportunities: ["Full Stack Development", "Cloud Architecture"]
  };

  // Mock documents
  const documents = {
    resumes: [
      { name: "Resume_2024.pdf", lastUpdated: "2 days ago" },
      { name: "Resume_2023.pdf", lastUpdated: "3 months ago" }
    ],
    coverLetters: [
      { name: "Cover_Letter_Tech.pdf", lastUpdated: "1 week ago" }
    ],
    certificates: [
      { name: "React_Certification.pdf", lastUpdated: "1 month ago" }
    ]
  };

  return (
    <div className="space-y-6">
      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Button className="flex items-center justify-center gap-2 h-auto py-4">
          <Upload size={20} />
          <span>Upload Resume</span>
        </Button>
        <Button className="flex items-center justify-center gap-2 h-auto py-4">
          <Calendar size={20} />
          <span>Schedule Interview</span>
        </Button>
        <Button className="flex items-center justify-center gap-2 h-auto py-4">
          <MessageSquare size={20} />
          <span>View Messages</span>
        </Button>
        <Button className="flex items-center justify-center gap-2 h-auto py-4">
          <Briefcase size={20} />
          <span>Track Applications</span>
        </Button>
      </div>

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
              <CardTitle>Skills</CardTitle>
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
          {/* Application Status Summary */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Application Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">{applicationStatus.total}</div>
                  <div className="text-sm text-gray-500">Total</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{applicationStatus.inProgress}</div>
                  <div className="text-sm text-gray-500">In Progress</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{applicationStatus.interviews}</div>
                  <div className="text-sm text-gray-500">Interviews</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{applicationStatus.successRate}%</div>
                  <div className="text-sm text-gray-500">Success Rate</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* AI Job Recommendations */}
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
                      >
                        Quick Apply
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Learning Recommendations */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Learning Recommendations</CardTitle>
              <CardDescription>Boost your career with these courses</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {learningRecommendations.map((course, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">{course.title}</h3>
                        <p className="text-sm text-gray-500">{course.type} • {course.duration}</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {course.skills.map((skill, idx) => (
                            <span 
                              key={idx}
                              className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <div className="text-sm font-medium">{course.progress}%</div>
                        <Progress value={course.progress} className="w-20 h-2" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                variant="outline" 
                className="w-full"
                asChild
              >
                <Link href="/candidate/learning">
                  View All Learning Resources
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
        
        {/* Right Sidebar */}
        <div className="lg:col-span-3">
          {/* Network Activity */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Network Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Users size={16} className="text-gray-500" />
                    <span>New Connections</span>
                  </div>
                  <span className="font-medium">{networkActivity.newConnections}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Eye size={16} className="text-gray-500" />
                    <span>Profile Views</span>
                  </div>
                  <span className="font-medium">{networkActivity.profileViews}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Building2 size={16} className="text-gray-500" />
                    <span>Company Follows</span>
                  </div>
                  <span className="font-medium">{networkActivity.companyFollows}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MessageSquare size={16} className="text-gray-500" />
                    <span>New Messages</span>
                  </div>
                  <span className="font-medium">{networkActivity.messages}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Career Insights */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Career Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <TrendingUp size={14} />
                    <span>Market Trend</span>
                  </div>
                  <p className="font-medium">{careerInsights.marketTrend}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <DollarSign size={14} />
                    <span>Salary Range</span>
                  </div>
                  <p className="font-medium">{careerInsights.salaryRange}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Award size={14} />
                    <span>Top Skills</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {careerInsights.topSkills.map((skill, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-blue-50 text-blue-800 rounded-full text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Documents */}
          <Card>
            <CardHeader>
              <CardTitle>Documents</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium mb-2">Resumes</h4>
                  <div className="space-y-2">
                    {documents.resumes.map((resume, index) => (
                      <div key={index} className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <FileText size={14} className="text-gray-500" />
                          <span>{resume.name}</span>
                        </div>
                        <span className="text-gray-500">{resume.lastUpdated}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-2">Cover Letters</h4>
                  <div className="space-y-2">
                    {documents.coverLetters.map((letter, index) => (
                      <div key={index} className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <FileText size={14} className="text-gray-500" />
                          <span>{letter.name}</span>
                        </div>
                        <span className="text-gray-500">{letter.lastUpdated}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-2">Certificates</h4>
                  <div className="space-y-2">
                    {documents.certificates.map((cert, index) => (
                      <div key={index} className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <Award size={14} className="text-gray-500" />
                          <span>{cert.name}</span>
                        </div>
                        <span className="text-gray-500">{cert.lastUpdated}</span>
                      </div>
                    ))}
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
                <Link href="/candidate/documents">
                  Manage Documents
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
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

export default CandidateDashboard;