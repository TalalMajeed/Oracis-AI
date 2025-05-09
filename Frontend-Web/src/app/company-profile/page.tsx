"use client";

import {
    Activity,
    AlertCircle,
    Bell,
    Building2,
    ChevronRight,
    Clipboard,
    Clock,
    FileText,
    Github,
    Globe,
    Layers,
    Linkedin,
    MapPin,
    MessageSquare,
    Settings,
    Star,
    Twitter,
    Users,
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

const CompanyProfile = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedCompany, setEditedCompany] = useState({
    name: "TechCorp Solutions",
    industry: "Technology",
    location: "Islamabad, Pakistan",
    profileCompleteness: 85,
    profileViews: 156,
    profileRank: "Premium",
    employeeCount: "50-200",
    founded: "2018",
    activeJobs: 12,
    socialLinks: {
      website: "https://techcorp.com",
      linkedin: "https://linkedin.com/company/techcorp",
      twitter: "https://twitter.com/techcorp",
      github: "https://github.com/techcorp"
    },
    notifications: [
      {
        id: 1,
        type: "application",
        content: "New application for Senior Developer position",
        time: "2 hours ago",
      },
      {
        id: 2,
        type: "view",
        content: "Your profile was viewed by 15 candidates",
        time: "Yesterday",
      },
      {
        id: 3,
        type: "match",
        content: "New candidate match found for UI Developer role",
        time: "2 days ago",
      }
    ]
  });
  
  // Add edit handlers
  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    // Here you would typically make an API call to save the changes
    setIsEditing(false);
    // Update the company data with edited data
    // setCompany(editedCompany);
  };

  const handleCancel = () => {
    setEditedCompany({
      name: "TechCorp Solutions",
      industry: "Technology",
      location: "Islamabad, Pakistan",
      profileCompleteness: 85,
      profileViews: 156,
      profileRank: "Premium",
      employeeCount: "50-200",
      founded: "2018",
      activeJobs: 12,
      socialLinks: {
        website: "https://techcorp.com",
        linkedin: "https://linkedin.com/company/techcorp",
        twitter: "https://twitter.com/techcorp",
        github: "https://github.com/techcorp"
      },
      notifications: [
        {
          id: 1,
          type: "application",
          content: "New application for Senior Developer position",
          time: "2 hours ago",
        },
        {
          id: 2,
          type: "view",
          content: "Your profile was viewed by 15 candidates",
          time: "Yesterday",
        },
        {
          id: 3,
          type: "match",
          content: "New candidate match found for UI Developer role",
          time: "2 days ago",
        }
      ]
    });
    setIsEditing(false);
  };

  const handleInputChange = (field: string, value: any) => {
    if (field === 'socialLinks') {
      setEditedCompany(prev => ({
        ...prev,
        socialLinks: value
      }));
    } else {
      setEditedCompany(prev => ({
        ...prev,
        [field]: value
      }));
    }
  };

  // Mock company data
  const company = {
    name: "TechCorp Solutions",
    industry: "Technology",
    location: "Islamabad, Pakistan",
    profileCompleteness: 85,
    profileViews: 156,
    profileRank: "Premium",
    employeeCount: "50-200",
    founded: "2018",
    activeJobs: 12,
    socialLinks: {
      website: "https://techcorp.com",
      linkedin: "https://linkedin.com/company/techcorp",
      twitter: "https://twitter.com/techcorp",
      github: "https://github.com/techcorp"
    },
    notifications: [
      {
        id: 1,
        type: "application",
        content: "New application for Senior Developer position",
        time: "2 hours ago",
      },
      {
        id: 2,
        type: "view",
        content: "Your profile was viewed by 15 candidates",
        time: "Yesterday",
      },
      {
        id: 3,
        type: "match",
        content: "New candidate match found for UI Developer role",
        time: "2 days ago",
      }
    ]
  };

  // Mock active jobs
  const activeJobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      location: "Islamabad, Remote",
      salary: "$70,000 - $90,000",
      applicants: 24,
      posted: "2 days ago",
      type: "Full-time"
    },
    {
      id: 2,
      title: "React Native Developer",
      location: "Lahore, On-site",
      salary: "$60,000 - $75,000",
      applicants: 18,
      posted: "1 week ago",
      type: "Full-time"
    },
    {
      id: 3,
      title: "Full Stack JavaScript Developer",
      location: "Karachi, Hybrid",
      salary: "$80,000 - $100,000",
      applicants: 32,
      posted: "3 days ago",
      type: "Full-time"
    }
  ];

  // Mock company insights
  const companyInsights = [
    {
      metric: "Employee Satisfaction",
      score: 92,
      trend: "up",
      insight: "High employee satisfaction rate based on recent surveys"
    },
    {
      metric: "Market Position",
      score: 85,
      trend: "up",
      insight: "Strong position in the technology sector"
    },
    {
      metric: "Growth Rate",
      score: 78,
      trend: "up",
      insight: "Consistent growth over the past 3 years"
    }
  ];

  // Mock company benefits
  const companyBenefits = [
    {
      category: "Health & Wellness",
      benefits: ["Health Insurance", "Mental Health Support", "Gym Membership"]
    },
    {
      category: "Work-Life Balance",
      benefits: ["Flexible Hours", "Remote Work Options", "Paid Time Off"]
    },
    {
      category: "Professional Growth",
      benefits: ["Training Budget", "Conference Attendance", "Mentorship Program"]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[var(--background-color)]">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-[#001230] text-white backdrop-blur">
        <div className="container max-w-none flex h-14 items-center px-[30px]">
          <div className="flex items-center mr-4">
            <Link href="/company" className="flex items-center space-x-2">
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
              href="/company/dashboard"
              className="transition-colors hover:text-[#1d4ed8]"
            >
              Dashboard
            </Link>
            <Link
              href="/company/jobs"
              className="transition-colors hover:text-[#1d4ed8]"
            >
              Post Jobs
            </Link>
            <Link
              href="/company/profile"
              className="transition-colors hover:text-[#1d4ed8]"
            >
              Company Profile
            </Link>
            <Link
              href="/company/candidates"
              className="transition-colors hover:text-[#1d4ed8]"
            >
              Find Candidates
            </Link>
            <Link
              href="/company/contracts"
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
                <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full text-xs flex items-center justify-center">{company.notifications.length}</span>
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
                    {company.notifications.map(notification => (
                      <div key={notification.id} className="p-3 border-b hover:bg-gray-100">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 mr-3">
                            {notification.type === "application" && <Clipboard size={16} className="text-blue-500" />}
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
                    <Link href="/company/notifications" className="text-sm text-[#1d4ed8] hover:underline">
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
                    <Building2 size={20} className="text-white" />
                  </div>
                  <span className="hidden md:inline-block">{company.name}</span>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>Company Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Building2 className="mr-2 h-4 w-4" />
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
          {/* Left Sidebar - Company Summary */}
          <div className="lg:col-span-3">
            <Card className="mb-6">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex justify-center">
                      <div className="w-20 h-20 rounded-full bg-[#1d4ed8] flex items-center justify-center">
                        <Building2 size={40} className="text-white" />
                      </div>
                    </div>
                    {isEditing ? (
                      <div className="mt-4 space-y-2">
                        <input
                          type="text"
                          value={editedCompany.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          className="w-full text-center text-lg font-semibold border rounded-md p-1"
                        />
                        <input
                          type="text"
                          value={editedCompany.industry}
                          onChange={(e) => handleInputChange('industry', e.target.value)}
                          className="w-full text-center text-sm text-gray-500 border rounded-md p-1"
                        />
                        <div className="flex items-center justify-center">
                          <MapPin size={14} className="mr-1 text-gray-500" />
                          <input
                            type="text"
                            value={editedCompany.location}
                            onChange={(e) => handleInputChange('location', e.target.value)}
                            className="text-sm text-gray-500 border rounded-md p-1"
                          />
                        </div>
                      </div>
                    ) : (
                      <>
                        <CardTitle className="text-center mt-4">{company.name}</CardTitle>
                        <CardDescription className="text-center">{company.industry}</CardDescription>
                        <div className="flex items-center justify-center mt-1 text-sm text-gray-500">
                          <MapPin size={14} className="mr-1" />
                          {company.location}
                        </div>
                      </>
                    )}
                  </div>
                  {isEditing && (
                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={handleSave}
                        className="text-green-600 hover:text-green-700"
                      >
                        Save
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={handleCancel}
                        className="text-red-600 hover:text-red-700"
                      >
                        Cancel
                      </Button>
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Profile Completeness</span>
                      <span className="font-medium">{company.profileCompleteness}%</span>
                    </div>
                    <Progress value={company.profileCompleteness} className="h-2" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    {isEditing ? (
                      <>
                        <div className="flex flex-col items-center p-2 bg-gray-50 rounded-md">
                          <span className="text-sm text-gray-500">Employees</span>
                          <input
                            type="text"
                            value={editedCompany.employeeCount}
                            onChange={(e) => handleInputChange('employeeCount', e.target.value)}
                            className="text-center font-semibold border rounded-md p-1 w-full"
                          />
                        </div>
                        <div className="flex flex-col items-center p-2 bg-gray-50 rounded-md">
                          <span className="text-sm text-gray-500">Founded</span>
                          <input
                            type="text"
                            value={editedCompany.founded}
                            onChange={(e) => handleInputChange('founded', e.target.value)}
                            className="text-center font-semibold border rounded-md p-1 w-full"
                          />
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex flex-col items-center p-2 bg-gray-50 rounded-md">
                          <span className="text-sm text-gray-500">Employees</span>
                          <span className="font-semibold">{company.employeeCount}</span>
                        </div>
                        <div className="flex flex-col items-center p-2 bg-gray-50 rounded-md">
                          <span className="text-sm text-gray-500">Founded</span>
                          <span className="font-semibold">{company.founded}</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                {!isEditing ? (
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={handleEdit}
                  >
                    Edit Profile
                  </Button>
                ) : (
                  <div className="w-full flex space-x-2">
                    <Button 
                      variant="outline" 
                      className="flex-1"
                      onClick={handleSave}
                    >
                      Save Changes
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex-1"
                      onClick={handleCancel}
                    >
                      Cancel
                    </Button>
                  </div>
                )}
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg">Social Links</CardTitle>
                  {isEditing && (
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => {/* Add social link */}}
                    >
                      Add Link
                    </Button>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                {isEditing ? (
                  <>
                    <div className="flex items-center space-x-2">
                      <Globe className="h-4 w-4" />
                      <input
                        type="text"
                        value={editedCompany.socialLinks.website}
                        onChange={(e) => handleInputChange('socialLinks', { ...editedCompany.socialLinks, website: e.target.value })}
                        className="flex-1 border rounded-md p-1"
                        placeholder="Website URL"
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Linkedin className="h-4 w-4" />
                      <input
                        type="text"
                        value={editedCompany.socialLinks.linkedin}
                        onChange={(e) => handleInputChange('socialLinks', { ...editedCompany.socialLinks, linkedin: e.target.value })}
                        className="flex-1 border rounded-md p-1"
                        placeholder="LinkedIn URL"
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Twitter className="h-4 w-4" />
                      <input
                        type="text"
                        value={editedCompany.socialLinks.twitter}
                        onChange={(e) => handleInputChange('socialLinks', { ...editedCompany.socialLinks, twitter: e.target.value })}
                        className="flex-1 border rounded-md p-1"
                        placeholder="Twitter URL"
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Github className="h-4 w-4" />
                      <input
                        type="text"
                        value={editedCompany.socialLinks.github}
                        onChange={(e) => handleInputChange('socialLinks', { ...editedCompany.socialLinks, github: e.target.value })}
                        className="flex-1 border rounded-md p-1"
                        placeholder="GitHub URL"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <Button 
                      variant="outline" 
                      className="w-full justify-start"
                      asChild
                    >
                      <Link href={company.socialLinks.website}>
                        <Globe className="mr-2 h-4 w-4" />
                        Website
                      </Link>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full justify-start"
                      asChild
                    >
                      <Link href={company.socialLinks.linkedin}>
                        <Linkedin className="mr-2 h-4 w-4" />
                        LinkedIn
                      </Link>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full justify-start"
                      asChild
                    >
                      <Link href={company.socialLinks.twitter}>
                        <Twitter className="mr-2 h-4 w-4" />
                        Twitter
                      </Link>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full justify-start"
                      asChild
                    >
                      <Link href={company.socialLinks.github}>
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </Link>
                    </Button>
                  </>
                )}
              </CardContent>
            </Card>
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-6">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Active Job Postings</CardTitle>
                <CardDescription>Manage your current job openings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {activeJobs.map(job => (
                    <div key={job.id} className="border rounded-lg p-4 hover:border-[#1d4ed8] transition-colors">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-lg">{job.title}</h3>
                          <p className="text-gray-600">{job.location} • {job.type}</p>
                          <p className="text-gray-600">{job.salary}</p>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-12 h-12 rounded-full border-4 border-blue-500 flex items-center justify-center font-bold text-blue-500">
                            {job.applicants}
                          </div>
                          <span className="text-xs text-gray-500 mt-1">Applicants</span>
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
                          <Link href={`/company/jobs/${job.id}`}>
                            View Details
                          </Link>
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline"
                          asChild
                        >
                          <Link href={`/company/jobs/${job.id}/applicants`}>
                            View Applicants
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
                  <Link href="/company/jobs">
                    View all job postings
                    <ChevronRight size={16} className="ml-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            
            <Tabs defaultValue="insights">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="insights">Company Insights</TabsTrigger>
                <TabsTrigger value="benefits">Benefits</TabsTrigger>
                <TabsTrigger value="culture">Culture</TabsTrigger>
              </TabsList>
              
              <TabsContent value="insights">
                <Card>
                  <CardHeader>
                    <CardTitle>Company Analytics</CardTitle>
                    <CardDescription>AI-powered company analysis</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {companyInsights.map((insight, index) => (
                        <div key={index} className="border rounded-lg p-4">
                          <div className="flex justify-between">
                            <h3 className="font-semibold">{insight.metric}</h3>
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              insight.trend === "up" ? "bg-green-100 text-green-800" :
                              "bg-red-100 text-red-800"
                            }`}>
                              {insight.score}%
                            </span>
                          </div>
                          <div className="mt-3 flex items-start">
                            <AlertCircle size={16} className="mr-2 mt-0.5 text-blue-500" />
                            <p className="text-sm">{insight.insight}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="benefits">
                <Card>
                  <CardHeader>
                    <CardTitle>Company Benefits</CardTitle>
                    <CardDescription>What we offer to our employees</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {companyBenefits.map((category, index) => (
                        <div key={index} className="border rounded-lg p-4">
                          <h3 className="font-semibold mb-2">{category.category}</h3>
                          <div className="flex flex-wrap gap-2">
                            {category.benefits.map((benefit, idx) => (
                              <span 
                                key={idx}
                                className="px-3 py-1 bg-blue-50 text-[#1d4ed8] rounded-full text-sm"
                              >
                                {benefit}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="culture">
                <Card>
                  <CardHeader>
                    <CardTitle>Company Culture</CardTitle>
                    <CardDescription>Our values and work environment</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8">
                      <Users className="mx-auto h-12 w-12 text-gray-400" />
                      <h3 className="mt-4 text-lg font-medium">Coming Soon</h3>
                      <p className="mt-2 text-sm text-gray-500">
                        We're working on showcasing our company culture.
                      </p>
                      <Button 
                        className="mt-4 bg-[#001230] hover:bg-[#1d4ed8]"
                        asChild
                      >
                        <Link href="/company/culture">
                          Learn More
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Right Sidebar */}
          <div className="lg:col-span-3">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  asChild
                >
                  <Link href="/company/jobs/post">
                    <FileText className="mr-2 h-4 w-4" />
                    Post New Job
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  asChild
                >
                  <Link href="/company/candidates">
                    <Users className="mr-2 h-4 w-4" />
                    Find Candidates
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  asChild
                >
                  <Link href="/company/contracts">
                    <Layers className="mr-2 h-4 w-4" />
                    Manage Contracts
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  asChild
                >
                  <Link href="/company/messages">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Messages
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Company Stats</CardTitle>
                <CardDescription>
                  Key metrics and performance indicators
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-500">Active Jobs</p>
                    <p className="text-2xl font-bold">{company.activeJobs}</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-500">Total Views</p>
                    <p className="text-2xl font-bold">{company.profileViews}</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <p className="text-xs text-gray-500">
                  Stats are updated in real-time and include all company activities.
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

export default CompanyProfile; 