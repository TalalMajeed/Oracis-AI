"use client";

import { useEffect, useState } from "react";
import { Briefcase, Eye, MessageSquare, Users } from "lucide-react";
import { SidebarWrapper } from "@/components/sidebar";
import { StatCard } from "@/components/dashboard/stat-card";
import { ActivityTimeline } from "@/components/dashboard/activity-timeline";
import { RecommendationCard } from "@/components/dashboard/recommendation-card";
import { useAuth } from "@/lib/auth-context";

// Define types for our data
interface ActivityEvent {
  id: string;
  title: string;
  description: string;
  time: string;
  type: "application" | "view" | "message" | "recommendation";
}

interface CandidateRecommendation {
  id: string;
  name: string;
  title: string;
  location: string;
  matchScore: number;
  skills: string[];
  experience: string;
}

// Default empty data
const emptyActivityEvents: ActivityEvent[] = [];
const emptyCandidateRecommendations: CandidateRecommendation[] = [];

export default function EmployerDashboard() {
  const { user } = useAuth();
  const [activityEvents, setActivityEvents] = useState(emptyActivityEvents);
  const [candidateRecommendations, setCandidateRecommendations] = useState(
    emptyCandidateRecommendations
  );
  const [dashboardStats, setDashboardStats] = useState({
    activeJobs: "0",
    totalApplicants: "0",
    jobViews: "0",
    messages: "0",
  });

  useEffect(() => {
    // In a real app, you would fetch this data from your API
    // For now, we'll just set some example data if the user exists
    if (user?.id) {
      // This is where you would make API calls to fetch the employer's real data
      // For example: fetchEmployerActivity(user.id), fetchCandidateRecommendations(user.id), etc.

      // For demonstration, we'll just populate with some example data
      setActivityEvents([
        {
          id: "1",
          title: "New application received",
          description: "Senior Frontend Developer position",
          time: "2 hours ago",
          type: "application" as const,
        },
        {
          id: "2",
          title: "Job posting viewed",
          description: "Your Full Stack Engineer job was viewed 24 times today",
          time: "Yesterday",
          type: "view" as const,
        },
      ]);

      setCandidateRecommendations([
        {
          id: "1",
          name: "Emily Johnson",
          title: "Senior Frontend Developer",
          location: "San Francisco, CA",
          matchScore: 92,
          skills: ["React", "TypeScript", "Next.js", "GraphQL", "UI/UX"],
          experience: "5 years",
        },
        {
          id: "2",
          name: "David Chen",
          title: "Full Stack Engineer",
          location: "Remote",
          matchScore: 87,
          skills: ["Node.js", "React", "MongoDB", "AWS", "Docker"],
          experience: "4 years",
        },
      ]);

      setDashboardStats({
        activeJobs: "8",
        totalApplicants: "156",
        jobViews: "1,248",
        messages: "12",
      });
    }
  }, [user?.id]);

  return (
    <SidebarWrapper userType="employer">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back, {user?.email || "Company"}! Here's what's happening
            with your hiring.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Active Jobs"
            value={dashboardStats.activeJobs}
            description="Currently active job postings"
            icon={Briefcase}
            trend={{ value: 2, isPositive: true }}
          />
          <StatCard
            title="Total Applicants"
            value={dashboardStats.totalApplicants}
            description="Across all job postings"
            icon={Users}
            trend={{ value: 23, isPositive: true }}
          />
          <StatCard
            title="Job Views"
            value={dashboardStats.jobViews}
            description="Total views on your jobs"
            icon={Eye}
            trend={{ value: 12, isPositive: true }}
          />
          <StatCard
            title="Messages"
            value={dashboardStats.messages}
            description="Unread messages"
            icon={MessageSquare}
            trend={{ value: 3, isPositive: true }}
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <div>
              <h2 className="text-xl font-semibold mb-4">
                AI Candidate Recommendations
              </h2>
              {candidateRecommendations.length > 0 ? (
                <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
                  {candidateRecommendations.slice(0, 2).map((candidate) => (
                    <RecommendationCard
                      key={candidate.id}
                      recommendation={candidate}
                      type="candidate"
                    />
                  ))}
                </div>
              ) : (
                <div className="rounded-lg border bg-card p-4 text-center">
                  <p className="text-muted-foreground">
                    No recommendations available yet.
                  </p>
                </div>
              )}
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Job Performance</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border bg-card p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">Senior Frontend Developer</h3>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                      Active
                    </span>
                  </div>
                  <div className="mt-2 flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Applications</span>
                    <span className="font-medium">48</span>
                  </div>
                  <div className="mt-1 flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Views</span>
                    <span className="font-medium">312</span>
                  </div>
                  <div className="mt-1 flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">
                      Avg. Match Score
                    </span>
                    <span className="font-medium">76%</span>
                  </div>
                </div>
                <div className="rounded-lg border bg-card p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">Full Stack Engineer</h3>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                      Active
                    </span>
                  </div>
                  <div className="mt-2 flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Applications</span>
                    <span className="font-medium">36</span>
                  </div>
                  <div className="mt-1 flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Views</span>
                    <span className="font-medium">278</span>
                  </div>
                  <div className="mt-1 flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">
                      Avg. Match Score
                    </span>
                    <span className="font-medium">82%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:row-span-1">
            <ActivityTimeline events={activityEvents} />
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Hiring Analytics</h2>
          <div className="rounded-lg border bg-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium">Application Funnel</h3>
              <select className="text-sm border rounded p-1">
                <option>Last 30 days</option>
                <option>Last 90 days</option>
                <option>All time</option>
              </select>
            </div>
            <div className="h-[200px] flex items-end justify-around gap-2">
              <div className="relative flex flex-col items-center">
                <div className="h-[160px] w-12 rounded bg-primary/20"></div>
                <span className="mt-2 text-xs">Applications</span>
                <span className="absolute top-0 text-xs font-medium">156</span>
              </div>
              <div className="relative flex flex-col items-center">
                <div className="h-[100px] w-12 rounded bg-primary/40"></div>
                <span className="mt-2 text-xs">Screened</span>
                <span className="absolute top-0 text-xs font-medium">98</span>
              </div>
              <div className="relative flex flex-col items-center">
                <div className="h-[60px] w-12 rounded bg-primary/60"></div>
                <span className="mt-2 text-xs">Interviewed</span>
                <span className="absolute top-0 text-xs font-medium">42</span>
              </div>
              <div className="relative flex flex-col items-center">
                <div className="h-[30px] w-12 rounded bg-primary/80"></div>
                <span className="mt-2 text-xs">Offered</span>
                <span className="absolute top-0 text-xs font-medium">18</span>
              </div>
              <div className="relative flex flex-col items-center">
                <div className="h-[15px] w-12 rounded bg-primary"></div>
                <span className="mt-2 text-xs">Hired</span>
                <span className="absolute top-0 text-xs font-medium">12</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SidebarWrapper>
  );
}
