"use client";

import {
    Briefcase,
    Building2,
    Calendar,
    CheckCircle2,
    Clock,
    MessageSquare,
    X
} from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export default function CandidateApplications() {
  const [statusFilter, setStatusFilter] = useState("all");

  // Mock applications data
  const applications = [
    {
      id: 1,
      jobTitle: "Senior Frontend Developer",
      company: "TechCorp",
      location: "Islamabad, Pakistan",
      appliedDate: "2024-02-15",
      status: "interview",
      nextStep: "Technical Interview",
      nextStepDate: "2024-02-20",
      matchScore: 95,
      stages: [
        { name: "Application Submitted", completed: true },
        { name: "Screening", completed: true },
        { name: "Technical Interview", completed: false },
        { name: "Final Interview", completed: false },
        { name: "Offer", completed: false }
      ]
    },
    {
      id: 2,
      jobTitle: "Full Stack Developer",
      company: "WebSolutions",
      location: "Lahore, Pakistan",
      appliedDate: "2024-02-10",
      status: "screening",
      nextStep: "HR Screening",
      nextStepDate: "2024-02-18",
      matchScore: 85,
      stages: [
        { name: "Application Submitted", completed: true },
        { name: "Screening", completed: false },
        { name: "Technical Interview", completed: false },
        { name: "Final Interview", completed: false },
        { name: "Offer", completed: false }
      ]
    },
    {
      id: 3,
      jobTitle: "React Developer",
      company: "Digital Innovations",
      location: "Karachi, Pakistan",
      appliedDate: "2024-02-05",
      status: "rejected",
      nextStep: "None",
      nextStepDate: null,
      matchScore: 75,
      stages: [
        { name: "Application Submitted", completed: true },
        { name: "Screening", completed: true },
        { name: "Technical Interview", completed: false },
        { name: "Final Interview", completed: false },
        { name: "Offer", completed: false }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "interview":
        return "text-blue-600";
      case "screening":
        return "text-yellow-600";
      case "rejected":
        return "text-red-600";
      case "accepted":
        return "text-green-600";
      default:
        return "text-gray-600";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "interview":
        return <Calendar className="h-4 w-4" />;
      case "screening":
        return <Clock className="h-4 w-4" />;
      case "rejected":
        return <X className="h-4 w-4" />;
      case "accepted":
        return <CheckCircle2 className="h-4 w-4" />;
      default:
        return <Briefcase className="h-4 w-4" />;
    }
  };

  const filteredApplications = statusFilter === "all" 
    ? applications 
    : applications.filter(app => app.status === statusFilter);

  const stats = {
    total: applications.length,
    inProgress: applications.filter(app => app.status === "screening" || app.status === "interview").length,
    interviews: applications.filter(app => app.status === "interview").length,
    successRate: Math.round((applications.filter(app => app.status === "accepted").length / applications.length) * 100) || 0
  };

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Applications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.total}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">In Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.inProgress}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Interviews</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.interviews}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.successRate}%</div>
          </CardContent>
        </Card>
      </div>

      {/* Applications List */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Your Applications</CardTitle>
              <CardDescription>Track the status of your job applications</CardDescription>
            </div>
            <Select
              value={statusFilter}
              onValueChange={setStatusFilter}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Applications</SelectItem>
                <SelectItem value="screening">In Screening</SelectItem>
                <SelectItem value="interview">Interview Stage</SelectItem>
                <SelectItem value="accepted">Accepted</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {filteredApplications.map((application) => (
              <Card key={application.id}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{application.jobTitle}</CardTitle>
                      <CardDescription className="flex items-center gap-2">
                        <Building2 size={14} />
                        {application.company} • {application.location}
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm">
                        {application.matchScore}% Match
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          Applied: {application.appliedDate}
                        </div>
                        <div className={`flex items-center gap-1 ${getStatusColor(application.status)}`}>
                          {getStatusIcon(application.status)}
                          {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                          <MessageSquare className="mr-2 h-4 w-4" />
                          Contact Recruiter
                        </Button>
                        <Button variant="outline" size="sm">
                          View Application
                        </Button>
                      </div>
                    </div>

                    {application.nextStep && (
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-blue-800">Next Step: {application.nextStep}</p>
                            {application.nextStepDate && (
                              <p className="text-sm text-blue-600">
                                Scheduled for: {application.nextStepDate}
                              </p>
                            )}
                          </div>
                          <Button variant="outline" size="sm" className="text-blue-800 border-blue-200">
                            View Details
                          </Button>
                        </div>
                      </div>
                    )}

                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Application Progress</span>
                        <span className="font-medium">
                          {Math.round((application.stages.filter(s => s.completed).length / application.stages.length) * 100)}%
                        </span>
                      </div>
                      <Progress 
                        value={(application.stages.filter(s => s.completed).length / application.stages.length) * 100} 
                        className="h-2"
                      />
                      <div className="mt-2 flex justify-between text-xs text-gray-500">
                        {application.stages.map((stage, index) => (
                          <div 
                            key={index}
                            className={`flex flex-col items-center ${stage.completed ? 'text-blue-600' : ''}`}
                          >
                            <div className={`w-2 h-2 rounded-full mb-1 ${stage.completed ? 'bg-blue-600' : 'bg-gray-300'}`} />
                            {stage.name}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 