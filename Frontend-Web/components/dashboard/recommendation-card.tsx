import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Building, MapPin } from "lucide-react"

interface JobRecommendation {
  id: string
  title: string
  company: string
  location: string
  matchScore: number
  salary?: string
  skills: string[]
  postedAt: string
}

interface CandidateRecommendation {
  id: string
  name: string
  title: string
  location: string
  matchScore: number
  skills: string[]
  experience: string
}

interface RecommendationCardProps {
  recommendation: JobRecommendation | CandidateRecommendation
  type: "job" | "candidate"
}

export function RecommendationCard({ recommendation, type }: RecommendationCardProps) {
  if (type === "job") {
    const job = recommendation as JobRecommendation
    return (
      <Card className="h-full">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-lg">{job.title}</CardTitle>
              <CardDescription className="flex items-center mt-1">
                <Building className="h-3.5 w-3.5 mr-1" />
                {job.company}
              </CardDescription>
            </div>
            <Badge variant={job.matchScore > 85 ? "default" : "secondary"} className="text-xs">
              {job.matchScore}% Match
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center text-sm text-muted-foreground">
              <MapPin className="h-3.5 w-3.5 mr-1.5" />
              {job.location}
              {job.salary && (
                <>
                  <span className="mx-1.5">•</span>
                  {job.salary}
                </>
              )}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {job.skills.slice(0, 4).map((skill) => (
                <Badge key={skill} variant="outline" className="text-xs">
                  {skill}
                </Badge>
              ))}
              {job.skills.length > 4 && (
                <Badge variant="outline" className="text-xs">
                  +{job.skills.length - 4} more
                </Badge>
              )}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between border-t pt-4">
          <div className="text-xs text-muted-foreground">Posted {job.postedAt}</div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              Save
            </Button>
            <Button size="sm">Apply</Button>
          </div>
        </CardFooter>
      </Card>
    )
  } else {
    const candidate = recommendation as CandidateRecommendation
    return (
      <Card className="h-full">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-lg">{candidate.name}</CardTitle>
              <CardDescription className="flex items-center mt-1">
                <Briefcase className="h-3.5 w-3.5 mr-1" />
                {candidate.title}
              </CardDescription>
            </div>
            <Badge variant={candidate.matchScore > 85 ? "default" : "secondary"} className="text-xs">
              {candidate.matchScore}% Match
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center text-sm text-muted-foreground">
              <MapPin className="h-3.5 w-3.5 mr-1.5" />
              {candidate.location}
              <span className="mx-1.5">•</span>
              {candidate.experience} experience
            </div>
            <div className="flex flex-wrap gap-1.5">
              {candidate.skills.slice(0, 4).map((skill) => (
                <Badge key={skill} variant="outline" className="text-xs">
                  {skill}
                </Badge>
              ))}
              {candidate.skills.length > 4 && (
                <Badge variant="outline" className="text-xs">
                  +{candidate.skills.length - 4} more
                </Badge>
              )}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between border-t pt-4">
          <Button variant="outline" size="sm">
            View Profile
          </Button>
          <Button size="sm">Contact</Button>
        </CardFooter>
      </Card>
    )
  }
}
