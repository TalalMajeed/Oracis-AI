"use client";

import {
    Briefcase,
    Building2,
    Clock,
    MapPin,
    Search,
    Star,
    TrendingUp
} from "lucide-react";
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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export default function CandidateJobs() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({
    location: "",
    jobType: "",
    experience: "",
    salary: ""
  });

  // Mock job data
  const jobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "TechCorp",
      location: "Islamabad, Pakistan",
      type: "Full-time",
      salary: "$80,000 - $100,000",
      postedDate: "2 days ago",
      matchScore: 95,
      description: "We are looking for a Senior Frontend Developer to join our team...",
      requirements: [
        "5+ years of experience with React",
        "Strong TypeScript skills",
        "Experience with Next.js",
        "Understanding of modern web development practices"
      ],
      saved: false
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "WebSolutions",
      location: "Lahore, Pakistan",
      type: "Full-time",
      salary: "$70,000 - $90,000",
      postedDate: "1 week ago",
      matchScore: 85,
      description: "Join our team as a Full Stack Developer...",
      requirements: [
        "3+ years of full stack development",
        "Experience with Node.js and React",
        "Database design and optimization",
        "API development experience"
      ],
      saved: true
    },
    {
      id: 3,
      title: "React Developer",
      company: "Digital Innovations",
      location: "Karachi, Pakistan",
      type: "Contract",
      salary: "$60,000 - $80,000",
      postedDate: "3 days ago",
      matchScore: 90,
      description: "We need a React Developer for our growing team...",
      requirements: [
        "2+ years of React experience",
        "Understanding of state management",
        "Experience with REST APIs",
        "Good communication skills"
      ],
      saved: false
    }
  ];

  // AI recommended jobs
  const recommendedJobs = [
    {
      id: 4,
      title: "Senior React Developer",
      company: "AI Solutions",
      location: "Islamabad, Pakistan",
      type: "Full-time",
      salary: "$90,000 - $110,000",
      matchScore: 98,
      description: "Perfect match based on your React expertise and leadership experience..."
    },
    {
      id: 5,
      title: "Frontend Tech Lead",
      company: "Innovation Hub",
      location: "Lahore, Pakistan",
      type: "Full-time",
      salary: "$100,000 - $120,000",
      matchScore: 96,
      description: "Matches your experience level and technical leadership skills..."
    }
  ];

  return (
    <div className="space-y-6">
      {/* Search and Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Find Your Next Opportunity</CardTitle>
          <CardDescription>Search and filter jobs based on your preferences</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="flex gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <Input
                    placeholder="Search jobs, companies, or keywords"
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              <Button className="bg-[#001230] hover:bg-[#1d4ed8]">
                Search
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Select
                value={selectedFilters.location}
                onValueChange={(value) => setSelectedFilters({ ...selectedFilters, location: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="islamabad">Islamabad</SelectItem>
                  <SelectItem value="lahore">Lahore</SelectItem>
                  <SelectItem value="karachi">Karachi</SelectItem>
                  <SelectItem value="remote">Remote</SelectItem>
                </SelectContent>
              </Select>

              <Select
                value={selectedFilters.jobType}
                onValueChange={(value) => setSelectedFilters({ ...selectedFilters, jobType: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Job Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="full-time">Full-time</SelectItem>
                  <SelectItem value="part-time">Part-time</SelectItem>
                  <SelectItem value="contract">Contract</SelectItem>
                  <SelectItem value="internship">Internship</SelectItem>
                </SelectContent>
              </Select>

              <Select
                value={selectedFilters.experience}
                onValueChange={(value) => setSelectedFilters({ ...selectedFilters, experience: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Experience" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="entry">Entry Level</SelectItem>
                  <SelectItem value="mid">Mid Level</SelectItem>
                  <SelectItem value="senior">Senior Level</SelectItem>
                  <SelectItem value="lead">Lead Level</SelectItem>
                </SelectContent>
              </Select>

              <Select
                value={selectedFilters.salary}
                onValueChange={(value) => setSelectedFilters({ ...selectedFilters, salary: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Salary Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-50k">$0 - $50,000</SelectItem>
                  <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                  <SelectItem value="100k-150k">$100,000 - $150,000</SelectItem>
                  <SelectItem value="150k+">$150,000+</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* AI Recommendations */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>AI Recommended Jobs</CardTitle>
              <CardDescription>Jobs that match your profile and preferences</CardDescription>
            </div>
            <TrendingUp className="text-[#1d4ed8]" size={24} />
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recommendedJobs.map((job) => (
              <Card key={job.id} className="border-2 border-[#1d4ed8]">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{job.title}</CardTitle>
                      <CardDescription className="flex items-center gap-2">
                        <Building2 size={14} />
                        {job.company}
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="bg-[#1d4ed8] text-white px-2 py-1 rounded text-sm">
                        {job.matchScore}% Match
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Briefcase size={14} />
                      {job.type}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      {job.salary}
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">{job.description}</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-[#001230] hover:bg-[#1d4ed8]">
                    Apply Now
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* All Jobs */}
      <Card>
        <CardHeader>
          <CardTitle>All Jobs</CardTitle>
          <CardDescription>Browse through all available opportunities</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {jobs.map((job) => (
              <Card key={job.id}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{job.title}</CardTitle>
                      <CardDescription className="flex items-center gap-2">
                        <Building2 size={14} />
                        {job.company}
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className={job.saved ? "text-[#1d4ed8]" : ""}
                      >
                        <Star size={16} className={job.saved ? "fill-[#1d4ed8]" : ""} />
                      </Button>
                      <div className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm">
                        {job.matchScore}% Match
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Briefcase size={14} />
                      {job.type}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      {job.salary}
                    </div>
                    <div className="text-gray-500">
                      Posted {job.postedDate}
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">{job.description}</p>
                  <div className="mt-3">
                    <h4 className="text-sm font-medium mb-2">Requirements:</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600">
                      {job.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-[#001230] hover:bg-[#1d4ed8]">
                    Apply Now
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 