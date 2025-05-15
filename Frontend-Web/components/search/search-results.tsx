import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Building, MapPin, Briefcase, Calendar, Zap } from "lucide-react"

interface JobResult {
  id: string
  title: string
  company: string
  location: string
  type: string
  salary?: string
  description: string
  skills: string[]
  postedAt: string
  matchScore?: number
}

interface CandidateResult {
  id: string
  name: string
  title: string
  location: string
  experience: string
  education: string
  skills: string[]
  lastActive: string
  matchScore?: number
}

interface SearchResultsProps {
  type: "job" | "candidate"
  results: JobResult[] | CandidateResult[]
  totalResults: number
}

export function SearchResults({ type, results, totalResults }: SearchResultsProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">
          {totalResults} {type === "job" ? "Jobs" : "Candidates"} Found
        </h2>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Sort by:</span>
          <Select defaultValue="relevance">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="relevance">Relevance</SelectItem>
              <SelectItem value="recent">Most Recent</SelectItem>
              <SelectItem value="match">Match Score</SelectItem>
              {type === "job" ? (
                <SelectItem value="salary">Salary</SelectItem>
              ) : (
                <SelectItem value="experience">Experience</SelectItem>
              )}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-4">
        {type === "job"
          ? (results as JobResult[]).map((job) => <JobResultCard key={job.id} job={job} />)
          : (results as CandidateResult[]).map((candidate) => (
              <CandidateResultCard key={candidate.id} candidate={candidate} />
            ))}
      </div>

      <div className="flex justify-center pt-4">
        <Button variant="outline">Load More Results</Button>
      </div>
    </div>
  )
}

function JobResultCard({ job }: { job: JobResult }) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div className="space-y-3 flex-1">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold">{job.title}</h3>
                <div className="flex items-center mt-1 text-muted-foreground">
                  <Building className="h-4 w-4 mr-1" />
                  <span>{job.company}</span>
                </div>
              </div>
              {job.matchScore && (
                <Badge variant={job.matchScore > 85 ? "default" : "secondary"} className="ml-2">
                  <Zap className="h-3 w-3 mr-1" />
                  {job.matchScore}% Match
                </Badge>
              )}
            </div>

            <div className="flex flex-wrap gap-y-2 gap-x-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                {job.location}
              </div>
              <div className="flex items-center">
                <Briefcase className="h-4 w-4 mr-1" />
                {job.type}
              </div>
              {job.salary && (
                <div className="flex items-center">
                  <span className="mr-1">💰</span>
                  {job.salary}
                </div>
              )}
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                Posted {job.postedAt}
              </div>
            </div>

            <p className="text-sm line-clamp-2">{job.description}</p>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {job.skills.map((skill) => (
                <Badge key={skill} variant="outline" className="text-xs">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex flex-row md:flex-col gap-2 md:w-32">
            <Button className="flex-1">Apply</Button>
            <Button variant="outline" className="flex-1">
              Save
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function CandidateResultCard({ candidate }: { candidate: CandidateResult }) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div className="space-y-3 flex-1">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold">{candidate.name}</h3>
                <div className="flex items-center mt-1 text-muted-foreground">
                  <Briefcase className="h-4 w-4 mr-1" />
                  <span>{candidate.title}</span>
                </div>
              </div>
              {candidate.matchScore && (
                <Badge variant={candidate.matchScore > 85 ? "default" : "secondary"} className="ml-2">
                  <Zap className="h-3 w-3 mr-1" />
                  {candidate.matchScore}% Match
                </Badge>
              )}
            </div>

            <div className="flex flex-wrap gap-y-2 gap-x-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                {candidate.location}
              </div>
              <div className="flex items-center">
                <span className="mr-1">🧠</span>
                {candidate.experience} experience
              </div>
              <div className="flex items-center">
                <span className="mr-1">🎓</span>
                {candidate.education}
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                Active {candidate.lastActive}
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {candidate.skills.map((skill) => (
                <Badge key={skill} variant="outline" className="text-xs">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex flex-row md:flex-col gap-2 md:w-32">
            <Button className="flex-1">Contact</Button>
            <Button variant="outline" className="flex-1">
              View Profile
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
