"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { RecommendationCard } from "@/components/dashboard/recommendation-card"
import { Zap, RefreshCw, Filter } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

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

export function AIRecommender({ type }: { type: "job" | "candidate" }) {
  const [relevanceValue, setRelevanceValue] = useState([75])
  const [refreshing, setRefreshing] = useState(false)

  const handleRefresh = () => {
    setRefreshing(true)
    setTimeout(() => setRefreshing(false), 1500)
  }

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2">
          <Zap className="h-5 w-5 text-primary" />
          Oracis AI {type === "job" ? "Job" : "Candidate"} Recommender
        </CardTitle>
        <Button variant="outline" size="icon" onClick={handleRefresh} disabled={refreshing}>
          <RefreshCw className={`h-4 w-4 ${refreshing ? "animate-spin" : ""}`} />
        </Button>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="recommended">
          <div className="flex items-center justify-between mb-4">
            <TabsList>
              <TabsTrigger value="recommended">Recommended</TabsTrigger>
              <TabsTrigger value="saved">Saved</TabsTrigger>
              <TabsTrigger value="applied">{type === "job" ? "Applied" : "Contacted"}</TabsTrigger>
            </TabsList>
            <Button variant="outline" size="sm" className="gap-1">
              <Filter className="h-3.5 w-3.5" />
              Filters
            </Button>
          </div>

          <TabsContent value="recommended" className="space-y-6">
            <div className="space-y-4">
              <div className="flex flex-col gap-1">
                <div className="flex justify-between">
                  <Label>Relevance to your profile</Label>
                  <span className="text-sm">{relevanceValue}%+</span>
                </div>
                <Slider
                  value={relevanceValue}
                  onValueChange={setRelevanceValue}
                  max={100}
                  step={5}
                  className="w-full"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                <div className="flex items-center gap-1.5">
                  <Switch id="use-location" defaultChecked />
                  <Label htmlFor="use-location" className="text-sm">
                    Use my location
                  </Label>
                </div>
                <div className="flex items-center gap-1.5">
                  <Switch id="remote-only" />
                  <Label htmlFor="remote-only" className="text-sm">
                    Remote only
                  </Label>
                </div>
                {type === "job" && (
                  <div className="ml-auto flex items-center gap-2">
                    <span className="text-sm">Industry:</span>
                    <Select defaultValue="tech">
                      <SelectTrigger className="h-8 w-[140px]">
                        <SelectValue placeholder="Select industry" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="tech">Technology</SelectItem>
                        <SelectItem value="finance">Finance</SelectItem>
                        <SelectItem value="healthcare">Healthcare</SelectItem>
                        <SelectItem value="education">Education</SelectItem>
                        <SelectItem value="all">All Industries</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium">Top Matches for Your Profile</h3>
                <Badge variant="outline" className="text-xs">
                  Oracis AI Powered
                </Badge>
              </div>

              <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                {type === "job" &&
                  jobRecommendations.map((job) => <RecommendationCard key={job.id} recommendation={job} type="job" />)}
                {type === "candidate" &&
                  [1, 2, 3].map((i) => (
                    <RecommendationCard
                      key={i}
                      recommendation={{
                        id: i.toString(),
                        name: `Candidate ${i}`,
                        title: "Software Engineer",
                        location: "New York, NY",
                        matchScore: 95 - i * 5,
                        skills: ["React", "Node.js", "TypeScript", "MongoDB", "AWS"],
                        experience: "5 years",
                      }}
                      type="candidate"
                    />
                  ))}
              </div>
            </div>

            <div className="flex justify-center pt-2">
              <Button variant="outline">View More Recommendations</Button>
            </div>
          </TabsContent>

          <TabsContent value="saved" className="min-h-[300px] flex items-center justify-center">
            <div className="text-center">
              <p className="text-muted-foreground">
                You haven't saved any {type === "job" ? "jobs" : "candidates"} yet
              </p>
              <Button variant="outline" className="mt-4">
                Browse Recommendations
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="applied" className="min-h-[300px] flex items-center justify-center">
            <div className="text-center">
              <p className="text-muted-foreground">
                You haven't {type === "job" ? "applied to any jobs" : "contacted any candidates"} yet
              </p>
              <Button variant="outline" className="mt-4">
                Browse Recommendations
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
