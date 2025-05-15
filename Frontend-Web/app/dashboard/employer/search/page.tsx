import { SidebarWrapper } from "@/components/sidebar"
import { SearchFilters } from "@/components/search/search-filters"
import { SearchResults } from "@/components/search/search-results"

// Mock data for candidate search results
const candidateResults = [
  {
    id: "1",
    name: "Emily Johnson",
    title: "Senior Frontend Developer",
    location: "San Francisco, CA",
    experience: "5 years",
    education: "B.S. Computer Science, Stanford",
    skills: ["React", "TypeScript", "Next.js", "GraphQL", "UI/UX"],
    lastActive: "2 days ago",
    matchScore: 92,
  },
  {
    id: "2",
    name: "David Chen",
    title: "Full Stack Engineer",
    location: "Remote",
    experience: "4 years",
    education: "M.S. Software Engineering, MIT",
    skills: ["Node.js", "React", "MongoDB", "AWS", "Docker"],
    lastActive: "1 week ago",
    matchScore: 87,
  },
  {
    id: "3",
    name: "Sophia Martinez",
    title: "UI/UX Developer",
    location: "New York, NY",
    experience: "3 years",
    education: "B.A. Design, RISD",
    skills: ["Figma", "React", "CSS", "User Research", "Prototyping"],
    lastActive: "3 days ago",
    matchScore: 78,
  },
  {
    id: "4",
    name: "Michael Brown",
    title: "Backend Developer",
    location: "Chicago, IL",
    experience: "6 years",
    education: "B.S. Computer Engineering, UIUC",
    skills: ["Python", "Django", "PostgreSQL", "Redis", "API Design"],
    lastActive: "1 week ago",
    matchScore: 75,
  },
  {
    id: "5",
    name: "Jennifer Lee",
    title: "DevOps Engineer",
    location: "Remote",
    experience: "4 years",
    education: "B.S. Information Technology, Georgia Tech",
    skills: ["AWS", "Kubernetes", "Docker", "Terraform", "CI/CD"],
    lastActive: "5 days ago",
    matchScore: 82,
  },
]

export default function EmployerSearch() {
  return (
    <SidebarWrapper userType="employer">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Search Candidates</h1>
          <p className="text-muted-foreground">Find the perfect talent with AI-powered candidate matching</p>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          <div className="md:col-span-1">
            <SearchFilters type="candidate" />
          </div>
          <div className="md:col-span-3">
            <SearchResults type="candidate" results={candidateResults} totalResults={candidateResults.length} />
          </div>
        </div>
      </div>
    </SidebarWrapper>
  )
}
