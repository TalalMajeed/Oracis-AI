"use client";

import {
    BookOpen,
    CheckCircle2,
    ChevronRight,
    Clock,
    GraduationCap,
    TrendingUp
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function CandidateSkills() {
  const [activeTab, setActiveTab] = useState("assessment");
  const [skillFilter, setSkillFilter] = useState("all");

  // Mock skills data
  const skills = {
    technical: [
      {
        name: "React",
        level: "Advanced",
        verified: true,
        demand: "High",
        marketValue: "$90,000 - $120,000",
        lastUpdated: "2 months ago",
        progress: 85,
        learningPath: {
          nextSteps: ["React Server Components", "Advanced State Management"],
          resources: [
            {
              title: "React Server Components Deep Dive",
              type: "Course",
              duration: "4 hours",
              link: "#"
            },
            {
              title: "Advanced React Patterns",
              type: "Book",
              duration: "12 hours",
              link: "#"
            }
          ]
        }
      },
      {
        name: "TypeScript",
        level: "Intermediate",
        verified: false,
        demand: "Very High",
        marketValue: "$85,000 - $110,000",
        lastUpdated: "1 month ago",
        progress: 65,
        learningPath: {
          nextSteps: ["Advanced Types", "TypeScript with React"],
          resources: [
            {
              title: "TypeScript Advanced Concepts",
              type: "Course",
              duration: "6 hours",
              link: "#"
            }
          ]
        }
      }
    ],
    soft: [
      {
        name: "Communication",
        level: "Advanced",
        verified: true,
        demand: "High",
        lastUpdated: "3 months ago",
        progress: 90
      },
      {
        name: "Leadership",
        level: "Intermediate",
        verified: false,
        demand: "High",
        lastUpdated: "1 month ago",
        progress: 70
      }
    ]
  };

  // Mock skill gaps
  const skillGaps = [
    {
      skill: "GraphQL",
      demand: "High",
      marketValue: "$80,000 - $100,000",
      priority: "High",
      learningTime: "2-3 months",
      resources: [
        {
          title: "GraphQL Fundamentals",
          type: "Course",
          duration: "5 hours",
          link: "#"
        }
      ]
    },
    {
      skill: "AWS",
      demand: "Very High",
      marketValue: "$90,000 - $120,000",
      priority: "Medium",
      learningTime: "3-4 months",
      resources: [
        {
          title: "AWS Certified Developer",
          type: "Certification",
          duration: "3 months",
          link: "#"
        }
      ]
    }
  ];

  // Mock learning resources
  const learningResources = [
    {
      title: "Frontend Development Path",
      description: "Comprehensive path to become a senior frontend developer",
      duration: "6 months",
      skills: ["React", "TypeScript", "Next.js", "GraphQL"],
      progress: 45,
      type: "Learning Path"
    },
    {
      title: "Advanced TypeScript",
      description: "Master TypeScript for enterprise applications",
      duration: "2 months",
      skills: ["TypeScript", "React"],
      progress: 30,
      type: "Course"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Skills Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {skills.technical.length + skills.soft.length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Verified Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {skills.technical.filter(s => s.verified).length + 
               skills.soft.filter(s => s.verified).length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Skill Gaps</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{skillGaps.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Learning Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {Math.round(learningResources.reduce((acc, curr) => acc + curr.progress, 0) / learningResources.length)}%
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList>
          <TabsTrigger value="assessment">Skill Assessment</TabsTrigger>
          <TabsTrigger value="gaps">Skill Gaps</TabsTrigger>
          <TabsTrigger value="learning">Learning Resources</TabsTrigger>
        </TabsList>

        {/* Skill Assessment Tab */}
        <TabsContent value="assessment">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Your Skills</CardTitle>
                  <CardDescription>Track and verify your technical and soft skills</CardDescription>
                </div>
                <Select
                  value={skillFilter}
                  onValueChange={setSkillFilter}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter skills" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Skills</SelectItem>
                    <SelectItem value="technical">Technical Skills</SelectItem>
                    <SelectItem value="soft">Soft Skills</SelectItem>
                    <SelectItem value="verified">Verified Skills</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Technical Skills */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Technical Skills</h3>
                  <div className="space-y-4">
                    {skills.technical.map((skill, index) => (
                      <Card key={index}>
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start">
                            <div>
                              <CardTitle className="text-lg">{skill.name}</CardTitle>
                              <CardDescription className="flex items-center gap-2">
                                <span>Level: {skill.level}</span>
                                {skill.verified && (
                                  <span className="flex items-center text-green-600">
                                    <CheckCircle2 size={14} className="mr-1" />
                                    Verified
                                  </span>
                                )}
                              </CardDescription>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className={`px-2 py-1 rounded-full text-xs ${
                                skill.demand === "High" ? "bg-green-100 text-green-800" :
                                "bg-blue-100 text-blue-800"
                              }`}>
                                {skill.demand} Demand
                              </div>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span>Skill Level</span>
                                <span className="font-medium">{skill.progress}%</span>
                              </div>
                              <Progress value={skill.progress} className="h-2" />
                            </div>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                              <div>
                                <span className="text-gray-500">Market Value:</span>
                                <p className="font-medium">{skill.marketValue}</p>
                              </div>
                              <div>
                                <span className="text-gray-500">Last Updated:</span>
                                <p className="font-medium">{skill.lastUpdated}</p>
                              </div>
                            </div>
                            {skill.learningPath && (
                              <div className="bg-blue-50 p-3 rounded-lg">
                                <h4 className="font-medium text-blue-800 mb-2">Learning Path</h4>
                                <div className="space-y-2">
                                  <p className="text-sm text-blue-600">Next Steps:</p>
                                  <ul className="list-disc list-inside text-sm text-blue-600">
                                    {skill.learningPath.nextSteps.map((step, idx) => (
                                      <li key={idx}>{step}</li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            )}
                          </div>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                          <Button variant="outline" size="sm">
                            Update Level
                          </Button>
                          {!skill.verified && (
                            <Button size="sm" className="bg-[#001230] hover:bg-[#1d4ed8]">
                              Verify Skill
                            </Button>
                          )}
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Soft Skills */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Soft Skills</h3>
                  <div className="space-y-4">
                    {skills.soft.map((skill, index) => (
                      <Card key={index}>
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start">
                            <div>
                              <CardTitle className="text-lg">{skill.name}</CardTitle>
                              <CardDescription className="flex items-center gap-2">
                                <span>Level: {skill.level}</span>
                                {skill.verified && (
                                  <span className="flex items-center text-green-600">
                                    <CheckCircle2 size={14} className="mr-1" />
                                    Verified
                                  </span>
                                )}
                              </CardDescription>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                                {skill.demand} Demand
                              </div>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span>Skill Level</span>
                                <span className="font-medium">{skill.progress}%</span>
                              </div>
                              <Progress value={skill.progress} className="h-2" />
                            </div>
                            <div className="text-sm">
                              <span className="text-gray-500">Last Updated:</span>
                              <p className="font-medium">{skill.lastUpdated}</p>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                          <Button variant="outline" size="sm">
                            Update Level
                          </Button>
                          {!skill.verified && (
                            <Button size="sm" className="bg-[#001230] hover:bg-[#1d4ed8]">
                              Verify Skill
                            </Button>
                          )}
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Skill Gaps Tab */}
        <TabsContent value="gaps">
          <Card>
            <CardHeader>
              <CardTitle>Skill Gaps Analysis</CardTitle>
              <CardDescription>Skills in demand that you should consider developing</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {skillGaps.map((gap, index) => (
                  <Card key={index}>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">{gap.skill}</CardTitle>
                          <CardDescription className="flex items-center gap-2">
                            <TrendingUp size={14} className="text-blue-500" />
                            {gap.demand} Demand
                          </CardDescription>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className={`px-2 py-1 rounded-full text-xs ${
                            gap.priority === "High" ? "bg-red-100 text-red-800" :
                            "bg-yellow-100 text-yellow-800"
                          }`}>
                            {gap.priority} Priority
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-500">Market Value:</span>
                          <p className="font-medium">{gap.marketValue}</p>
                        </div>
                        <div>
                          <span className="text-gray-500">Learning Time:</span>
                          <p className="font-medium">{gap.learningTime}</p>
                        </div>
                      </div>
                      {gap.resources && (
                        <div className="mt-4">
                          <h4 className="text-sm font-medium mb-2">Recommended Resources:</h4>
                          <div className="space-y-2">
                            {gap.resources.map((resource, idx) => (
                              <div key={idx} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                                <div className="flex items-center gap-2">
                                  <BookOpen size={14} className="text-gray-500" />
                                  <span className="text-sm">{resource.title}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                  <Clock size={14} />
                                  {resource.duration}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-[#001230] hover:bg-[#1d4ed8]">
                        Start Learning
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Learning Resources Tab */}
        <TabsContent value="learning">
          <Card>
            <CardHeader>
              <CardTitle>Learning Resources</CardTitle>
              <CardDescription>Track your learning progress and access resources</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {learningResources.map((resource, index) => (
                  <Card key={index}>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">{resource.title}</CardTitle>
                          <CardDescription className="flex items-center gap-2">
                            <GraduationCap size={14} />
                            {resource.type}
                          </CardDescription>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                            {resource.duration}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <p className="text-sm text-gray-600">{resource.description}</p>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Progress</span>
                            <span className="font-medium">{resource.progress}%</span>
                          </div>
                          <Progress value={resource.progress} className="h-2" />
                        </div>
                        <div>
                          <h4 className="text-sm font-medium mb-2">Skills Covered:</h4>
                          <div className="flex flex-wrap gap-2">
                            {resource.skills.map((skill, idx) => (
                              <span 
                                key={idx}
                                className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-[#001230] hover:bg-[#1d4ed8]">
                        Continue Learning
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                variant="outline" 
                className="w-full"
                asChild
              >
                <Link href="/candidate/learning">
                  View All Learning Resources
                  <ChevronRight size={16} className="ml-2" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
} 