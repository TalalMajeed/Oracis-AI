"use client";

import { useEffect, useState } from "react";
import { Briefcase, Eye, MessageSquare, Zap } from "lucide-react";
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

interface JobRecommendation {
  id: string;
  title: string;
  company: string;
  location: string;
  matchScore: number;
  salary: string;
  skills: string[];
  postedAt: string;
}

// Default empty data
const emptyActivityEvents: ActivityEvent[] = [];
const emptyJobRecommendations: JobRecommendation[] = [];

export default function CandidateDashboard() {
  const { user } = useAuth();
  const [activityEvents, setActivityEvents] = useState(emptyActivityEvents);
  const [jobRecommendations, setJobRecommendations] = useState(
    emptyJobRecommendations
  );
  const [profileStats, setProfileStats] = useState({
    views: "0",
    applications: "0",
    messages: "0",
    matchScore: "0%",
  });

  useEffect(() => {
    // In a real app, you would fetch this data from your API
    // For now, we'll just set some example data if the user exists
    if (user?.id) {
      // This is where you would make API calls to fetch the user's real data
      // For example: fetchUserActivityEvents(user.id), fetchUserRecommendations(user.id), etc.

      // For demonstration, we'll just populate with some example data
      setActivityEvents([
        {
          id: "1",
          title: "Applied to Senior Frontend Developer",
          description: "TechCorp Inc.",
          time: "2 hours ago",
          type: "application" as const,
        },
        {
          id: "2",
          title: "Your profile was viewed by Google",
          description: "Recruiter from Google viewed your profile",
          time: "Yesterday",
          type: "view" as const,
        },
      ]);

      setJobRecommendations([
        {
          id: "1",
          title: "Senior Frontend Developer",
          company: "TechCorp Inc.",
          location: "San Francisco, CA",
          matchScore: 92,
          salary: "$120K - $150K",
          skills: ["React", "TypeScript", "Next.js", "GraphQL", "UI/UX"],
          postedAt: "2 days ago",
        },
        {
          id: "2",
          title: "Full Stack Engineer",
          company: "InnovateSoft",
          location: "Remote",
          matchScore: 87,
          salary: "$110K - $140K",
          skills: ["Node.js", "React", "MongoDB", "AWS", "Docker"],
          postedAt: "1 week ago",
        },
      ]);

      setProfileStats({
        views: "128",
        applications: "24",
        messages: "8",
        matchScore: "85%",
      });
    }
  }, [user?.id]);

  return (
    <SidebarWrapper userType="candidate">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back, {user?.email || "Guest"}! Here's what's happening with
            your job search.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Profile Views"
            value={profileStats.views}
            description="Total profile views"
            icon={Eye}
            trend={{ value: 12, isPositive: true }}
          />
          <StatCard
            title="Applications"
            value={profileStats.applications}
            description="Jobs you've applied to"
            icon={Briefcase}
            trend={{ value: 4, isPositive: true }}
          />
          <StatCard
            title="Messages"
            value={profileStats.messages}
            description="Unread messages"
            icon={MessageSquare}
            trend={{ value: 2, isPositive: true }}
          />
          <StatCard
            title="Match Score"
            value={profileStats.matchScore}
            description="Average AI match score"
            icon={Zap}
            trend={{ value: 5, isPositive: true }}
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <div>
              <h2 className="text-xl font-semibold mb-4">
                AI Job Recommendations
              </h2>
              {jobRecommendations.length > 0 ? (
                <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
                  {jobRecommendations.slice(0, 2).map((job) => (
                    <RecommendationCard
                      key={job.id}
                      recommendation={job}
                      type="job"
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
              <h2 className="text-xl font-semibold mb-4">Profile Strength</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border bg-card p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">Skills</h3>
                    <span className="text-sm text-muted-foreground">85%</span>
                  </div>
                  <div className="mt-2 h-2 w-full rounded-full bg-secondary">
                    <div
                      className="h-full rounded-full bg-primary"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">
                    Your technical skills are strong. Consider adding more
                    project examples.
                  </p>
                </div>
                <div className="rounded-lg border bg-card p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">Experience</h3>
                    <span className="text-sm text-muted-foreground">72%</span>
                  </div>
                  <div className="mt-2 h-2 w-full rounded-full bg-secondary">
                    <div
                      className="h-full rounded-full bg-primary"
                      style={{ width: "72%" }}
                    ></div>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">
                    Add more details about your achievements in previous roles.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:row-span-1">
            <ActivityTimeline events={activityEvents} />
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Job Search Analytics</h2>
          <div className="rounded-lg border bg-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium">Application Status</h3>
              <select className="text-sm border rounded p-1">
                <option>Last 30 days</option>
                <option>Last 90 days</option>
                <option>All time</option>
              </select>
            </div>
            <div className="h-[200px] flex items-end justify-around gap-2">
              <div className="relative flex flex-col items-center">
                <div className="h-[120px] w-12 rounded bg-primary/20"></div>
                <span className="mt-2 text-xs">Applied</span>
                <span className="absolute top-0 text-xs font-medium">24</span>
              </div>
              <div className="relative flex flex-col items-center">
                <div className="h-[80px] w-12 rounded bg-primary/40"></div>
                <span className="mt-2 text-xs">In Review</span>
                <span className="absolute top-0 text-xs font-medium">16</span>
              </div>
              <div className="relative flex flex-col items-center">
                <div className="h-[40px] w-12 rounded bg-primary/60"></div>
                <span className="mt-2 text-xs">Interview</span>
                <span className="absolute top-0 text-xs font-medium">8</span>
              </div>
              <div className="relative flex flex-col items-center">
                <div className="h-[20px] w-12 rounded bg-primary/80"></div>
                <span className="mt-2 text-xs">Offer</span>
                <span className="absolute top-0 text-xs font-medium">4</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SidebarWrapper>
  );
}
