import { SidebarWrapper } from "@/components/sidebar"
import { SearchFilters } from "@/components/search/search-filters"
import { SearchResults } from "@/components/search/search-results"

// Mock data for job search results
const jobResults = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$120K - $150K",
    description:
      "We are looking for a Senior Frontend Developer to join our team. You will be responsible for building user interfaces for our web applications using React and TypeScript.",
    skills: ["React", "TypeScript", "Next.js", "GraphQL", "UI/UX"],
    postedAt: "2 days ago",
    matchScore: 92,
  },
  {
    id: "2",
    title: "Full Stack Engineer",
    company: "InnovateSoft",
    location: "Remote",
    type: "Full-time",
    salary: "$110K - $140K",
    description:
      "InnovateSoft is seeking a Full Stack Engineer to help build and maintain our cloud-based software solutions. Experience with Node.js and React required.",
    skills: ["Node.js", "React", "MongoDB", "AWS", "Docker"],
    postedAt: "1 week ago",
    matchScore: 87,
  },
  {
    id: "3",
    title: "UI/UX Developer",
    company: "DesignHub",
    location: "New York, NY",
    type: "Full-time",
    salary: "$90K - $120K",
    description:
      "Join our creative team as a UI/UX Developer. You'll work closely with designers and developers to implement beautiful, intuitive user interfaces.",
    skills: ["Figma", "React", "CSS", "User Research", "Prototyping"],
    postedAt: "3 days ago",
    matchScore: 78,
  },
  {
    id: "4",
    title: "Backend Developer",
    company: "DataSystems",
    location: "Chicago, IL",
    type: "Full-time",
    description:
      "DataSystems is looking for a Backend Developer to help build and scale our data processing systems. Strong knowledge of Python and databases required.",
    skills: ["Python", "Django", "PostgreSQL", "Redis", "API Design"],
    postedAt: "1 week ago",
    matchScore: 75,
  },
  {
    id: "5",
    title: "DevOps Engineer",
    company: "CloudTech",
    location: "Remote",
    type: "Contract",
    salary: "$100K - $130K",
    description:
      "We're seeking a DevOps Engineer to help automate and optimize our infrastructure. Experience with AWS, Kubernetes, and CI/CD pipelines is essential.",
    skills: ["AWS", "Kubernetes", "Docker", "Terraform", "CI/CD"],
    postedAt: "5 days ago",
    matchScore: 82,
  },
]

export default function CandidateSearch() {
  return (
    <SidebarWrapper userType="candidate">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Search Jobs</h1>
          <p className="text-muted-foreground">Find your next opportunity with AI-powered job matching</p>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          <div className="md:col-span-1">
            <SearchFilters type="job" />
          </div>
          <div className="md:col-span-3">
            <SearchResults type="job" results={jobResults} totalResults={jobResults.length} />
          </div>
        </div>
      </div>
    </SidebarWrapper>
  )
}
