"use client";

import {
    Calendar,
    Clock,
    MessageSquare,
    Star,
    Video
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

export default function CandidateInterviews() {
  const [timeFilter, setTimeFilter] = useState("upcoming");

  // Mock interviews data
  const interviews = [
    {
      id: 1,
      jobTitle: "Senior Frontend Developer",
      company: "TechCorp",
      interviewType: "Technical Interview",
      date: "2024-02-20",
      time: "10:00 AM",
      duration: "60 minutes",
      format: "Video Call",
      status: "upcoming",
      preparation: {
        progress: 75,
        topics: [
          "React Hooks and State Management",
          "TypeScript Best Practices",
          "System Design",
          "Problem Solving"
        ]
      },
      interviewer: {
        name: "Sarah Johnson",
        title: "Senior Engineering Manager",
        email: "sarah.johnson@techcorp.com"
      }
    },
    {
      id: 2,
      jobTitle: "Full Stack Developer",
      company: "WebSolutions",
      interviewType: "HR Screening",
      date: "2024-02-18",
      time: "2:00 PM",
      duration: "30 minutes",
      format: "Phone Call",
      status: "upcoming",
      preparation: {
        progress: 50,
        topics: [
          "Company Culture",
          "Career Goals",
          "Salary Expectations",
          "Availability"
        ]
      },
      interviewer: {
        name: "Michael Chen",
        title: "HR Manager",
        email: "michael.chen@websolutions.com"
      }
    },
    {
      id: 3,
      jobTitle: "React Developer",
      company: "Digital Innovations",
      interviewType: "Technical Assessment",
      date: "2024-02-15",
      time: "11:00 AM",
      duration: "90 minutes",
      format: "Video Call",
      status: "completed",
      feedback: {
        rating: 4.5,
        strengths: [
          "Strong technical knowledge",
          "Clear communication",
          "Problem-solving approach"
        ],
        areas: [
          "System design could be more detailed",
          "Consider edge cases more thoroughly"
        ]
      }
    }
  ];

  const filteredInterviews = timeFilter === "all" 
    ? interviews 
    : interviews.filter(interview => interview.status === timeFilter);

  const stats = {
    total: interviews.length,
    upcoming: interviews.filter(i => i.status === "upcoming").length,
    completed: interviews.filter(i => i.status === "completed").length,
    successRate: Math.round((interviews.filter(i => i.status === "completed" && i.feedback?.rating >= 4).length / interviews.filter(i => i.status === "completed").length) * 100) || 0
  };

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Interviews</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.total}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Upcoming</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.upcoming}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.completed}</div>
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

      {/* Interviews List */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Your Interviews</CardTitle>
              <CardDescription>Manage and prepare for your upcoming interviews</CardDescription>
            </div>
            <Select
              value={timeFilter}
              onValueChange={setTimeFilter}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by time" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Interviews</SelectItem>
                <SelectItem value="upcoming">Upcoming</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {filteredInterviews.map((interview) => (
              <Card key={interview.id}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{interview.jobTitle}</CardTitle>
                      <CardDescription className="flex items-center gap-2">
                        {interview.company} • {interview.interviewType}
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                      {interview.status === "upcoming" ? (
                        <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                          Upcoming
                        </div>
                      ) : (
                        <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                          Completed
                        </div>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          {interview.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={14} />
                          {interview.time} ({interview.duration})
                        </div>
                        <div className="flex items-center gap-1">
                          <Video size={14} />
                          {interview.format}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                          <MessageSquare className="mr-2 h-4 w-4" />
                          Contact
                        </Button>
                        {interview.status === "upcoming" && (
                          <Button variant="outline" size="sm">
                            Reschedule
                          </Button>
                        )}
                      </div>
                    </div>

                    {interview.status === "upcoming" && (
                      <>
                        <div className="bg-blue-50 p-3 rounded-lg">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium text-blue-800">Interviewer</p>
                              <p className="text-sm text-blue-600">{interview.interviewer.name}</p>
                              <p className="text-sm text-blue-600">{interview.interviewer.title}</p>
                            </div>
                            <Button variant="outline" size="sm" className="text-blue-800 border-blue-200">
                              View Profile
                            </Button>
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Preparation Progress</span>
                            <span className="font-medium">{interview.preparation.progress}%</span>
                          </div>
                          <Progress value={interview.preparation.progress} className="h-2" />
                          <div className="mt-3">
                            <h4 className="text-sm font-medium mb-2">Topics to Prepare:</h4>
                            <ul className="list-disc list-inside text-sm text-gray-600">
                              {interview.preparation.topics.map((topic, index) => (
                                <li key={index}>{topic}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </>
                    )}

                    {interview.status === "completed" && interview.feedback && (
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <p className="font-medium">Interview Feedback</p>
                            <div className="flex items-center gap-1 mt-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  size={16}
                                  className={i < Math.floor(interview.feedback.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                                />
                              ))}
                              <span className="text-sm text-gray-600 ml-1">
                                {interview.feedback.rating}/5
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <h4 className="text-sm font-medium mb-2">Strengths:</h4>
                            <ul className="list-disc list-inside text-sm text-gray-600">
                              {interview.feedback.strengths.map((strength, index) => (
                                <li key={index}>{strength}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium mb-2">Areas for Improvement:</h4>
                            <ul className="list-disc list-inside text-sm text-gray-600">
                              {interview.feedback.areas.map((area, index) => (
                                <li key={index}>{area}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
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