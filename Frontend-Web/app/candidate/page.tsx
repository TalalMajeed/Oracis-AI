import { Briefcase, Eye, MessageSquare, Zap } from "lucide-react"
import { SidebarWrapper } from "@/components/sidebar"
import { StatCard } from "@/components/dashboard/stat-card"
import { ActivityTimeline } from "@/components/dashboard/activity-timeline"
import { RecommendationCard } from "@/components/dashboard/recommendation-card"

// Mock data for activity timeline
const activityEvents = [
  {
    id: "1",
    title: "Applied to Senior Frontend Developer",
    description: "TechCorp Inc.",
    time: "2 hours ago",
    type: "application",
  },
  {
    id: "2",
    title: "Your profile was viewed by Google",
    description: "Recruiter from Google viewed your profile",
    time: "Yesterday",
    type: "view",
  },
  {
    id: "3",
    title: "Message from Sarah at InnovateSoft",
    description: "Regarding your application for Full Stack Engineer",
    time: "2 days ago",
    type: "message",
  },
  {
    id: "4",
    title: "AI recommended a new job",
    description: "UI/UX Developer at DesignHub matches your skills",
    time: "3 days ago",
    type: "recommendation",
  },
]

// Mock data for job recommendations
const jobRecommendations = [
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
  {
    id: "3",
    title: "UI/UX Developer",
    company: "DesignHub",
    location: "New York, NY",
    matchScore: 78,
    salary: "$90K - $120K",
    skills: ["Figma", "React", "CSS", "User Research", "Prototyping"],
    postedAt: "3 days ago",
  },
]

export default function CandidateDashboard() {
  return (
    <SidebarWrapper userType="candidate">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, John! Here's what's happening with your job search.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Profile Views"
            value="128"
            description="Total profile views"
            icon={Eye}
            trend={{ value: 12, isPositive: true }}
          />
          <StatCard
            title="Applications"
            value="24"
            description="Jobs you've applied to"
            icon={Briefcase}
            trend={{ value: 4, isPositive: true }}
          />
          <StatCard
            title="Messages"
            value="8"
            description="Unread messages"
            icon={MessageSquare}
            trend={{ value: 2, isPositive: true }}
          />
          <StatCard
            title="Match Score"
            value="85%"
            description="Average AI match score"
            icon={Zap}
            trend={{ value: 5, isPositive: true }}
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <div>
              <h2 className="text-xl font-semibold mb-4">AI Job Recommendations</h2>
              <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
                {jobRecommendations.slice(0, 2).map((job) => (
                  <RecommendationCard key={job.id} recommendation={job} type="job" />
                ))}
              </div>
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
                    <div className="h-full rounded-full bg-primary" style={{ width: "85%" }}></div>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">
                    Your technical skills are strong. Consider adding more project examples.
                  </p>
                </div>
                <div className="rounded-lg border bg-card p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">Experience</h3>
                    <span className="text-sm text-muted-foreground">72%</span>
                  </div>
                  <div className="mt-2 h-2 w-full rounded-full bg-secondary">
                    <div className="h-full rounded-full bg-primary" style={{ width: "72%" }}></div>
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
              <div className="relative flex flex-col items-center">
                <div className="h-[10px] w-12 rounded bg-primary"></div>
                <span className="mt-2 text-xs">Accepted</span>
                <span className="absolute top-0 text-xs font-medium">2</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SidebarWrapper>
  )
}
