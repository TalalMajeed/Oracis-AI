import { Briefcase, Eye, MessageSquare, Users } from "lucide-react"
import { SidebarWrapper } from "@/components/sidebar"
import { StatCard } from "@/components/dashboard/stat-card"
import { ActivityTimeline } from "@/components/dashboard/activity-timeline"
import { RecommendationCard } from "@/components/dashboard/recommendation-card"

// Mock data for activity timeline
const activityEvents = [
  {
    id: "1",
    title: "New application for Senior Frontend Developer",
    description: "John Doe applied for this position",
    time: "2 hours ago",
    type: "application",
  },
  {
    id: "2",
    title: "Your job posting was viewed 45 times",
    description: "Full Stack Engineer position",
    time: "Yesterday",
    type: "view",
  },
  {
    id: "3",
    title: "Message from Sarah Williams",
    description: "Regarding the UI/UX Developer position",
    time: "2 days ago",
    type: "message",
  },
  {
    id: "4",
    title: "AI found a new candidate match",
    description: "Michael Brown matches your Full Stack Engineer position",
    time: "3 days ago",
    type: "recommendation",
  },
]

// Mock data for candidate recommendations
const candidateRecommendations = [
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
  {
    id: "3",
    name: "Sophia Martinez",
    title: "UI/UX Developer",
    location: "New York, NY",
    matchScore: 78,
    skills: ["Figma", "React", "CSS", "User Research", "Prototyping"],
    experience: "3 years",
  },
]

export default function EmployerDashboard() {
  return (
    <SidebarWrapper userType="employer">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, Acme Corp! Here's what's happening with your hiring.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Active Jobs"
            value="8"
            description="Currently active job postings"
            icon={Briefcase}
            trend={{ value: 2, isPositive: true }}
          />
          <StatCard
            title="Total Applicants"
            value="156"
            description="Across all job postings"
            icon={Users}
            trend={{ value: 23, isPositive: true }}
          />
          <StatCard
            title="Job Views"
            value="1,248"
            description="Total views on your jobs"
            icon={Eye}
            trend={{ value: 12, isPositive: true }}
          />
          <StatCard
            title="Messages"
            value="12"
            description="Unread messages"
            icon={MessageSquare}
            trend={{ value: 3, isPositive: true }}
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <div>
              <h2 className="text-xl font-semibold mb-4">AI Candidate Recommendations</h2>
              <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
                {candidateRecommendations.slice(0, 2).map((candidate) => (
                  <RecommendationCard key={candidate.id} recommendation={candidate} type="candidate" />
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Job Performance</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border bg-card p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">Senior Frontend Developer</h3>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">Active</span>
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
                    <span className="text-muted-foreground">Avg. Match Score</span>
                    <span className="font-medium">76%</span>
                  </div>
                </div>
                <div className="rounded-lg border bg-card p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">Full Stack Engineer</h3>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">Active</span>
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
                    <span className="text-muted-foreground">Avg. Match Score</span>
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
                <span className="mt-2 text-xs">Offer</span>
                <span className="absolute top-0 text-xs font-medium">18</span>
              </div>
              <div className="relative flex flex-col items-center">
                <div className="h-[15px] w-12 rounded bg-primary"></div>
                <span className="mt-2 text-xs">Hired</span>
                <span className="absolute top-0 text-xs font-medium">8</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SidebarWrapper>
  )
}
