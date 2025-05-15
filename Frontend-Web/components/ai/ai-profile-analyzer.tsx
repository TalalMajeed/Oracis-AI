"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, CheckCircle, FileText, Linkedin, Upload } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function AIProfileAnalyzer() {
  const [analyzing, setAnalyzing] = useState(false)
  const [analyzed, setAnalyzed] = useState(false)
  const [progress, setProgress] = useState(0)
  const [activeTab, setActiveTab] = useState("upload")

  const handleAnalyze = () => {
    setAnalyzing(true)
    setProgress(0)

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setAnalyzing(false)
          setAnalyzed(true)
          return 100
        }
        return prev + 5
      })
    }, 200)
  }

  const handleReset = () => {
    setAnalyzing(false)
    setAnalyzed(false)
    setProgress(0)
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>AI Profile Analyzer</CardTitle>
      </CardHeader>
      <CardContent>
        {!analyzing && !analyzed ? (
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="upload">Upload Resume</TabsTrigger>
              <TabsTrigger value="linkedin">LinkedIn Profile</TabsTrigger>
              <TabsTrigger value="manual">Manual Input</TabsTrigger>
            </TabsList>
            <TabsContent value="upload" className="space-y-4 pt-4">
              <div className="border-2 border-dashed rounded-lg p-8 text-center">
                <div className="flex flex-col items-center gap-2">
                  <Upload className="h-8 w-8 text-muted-foreground" />
                  <h3 className="text-lg font-medium">Upload your resume</h3>
                  <p className="text-sm text-muted-foreground max-w-md">
                    Drag and drop your resume file here, or click to browse
                  </p>
                  <Input type="file" className="hidden" id="resume-upload" accept=".pdf,.doc,.docx" />
                  <Button asChild className="mt-2">
                    <label htmlFor="resume-upload">Browse Files</label>
                  </Button>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <FileText className="h-4 w-4" />
                <span>Supported formats: PDF, DOC, DOCX (Max 5MB)</span>
              </div>
            </TabsContent>
            <TabsContent value="linkedin" className="space-y-4 pt-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Linkedin className="h-5 w-5 text-[#0077B5]" />
                  <span className="font-medium">LinkedIn Profile URL</span>
                </div>
                <Input placeholder="https://www.linkedin.com/in/your-profile" />
                <p className="text-sm text-muted-foreground">
                  Enter your LinkedIn profile URL to analyze your professional experience
                </p>
              </div>
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Permission Required</AlertTitle>
                <AlertDescription>
                  You'll need to make your LinkedIn profile public or grant access for analysis
                </AlertDescription>
              </Alert>
            </TabsContent>
            <TabsContent value="manual" className="space-y-4 pt-4">
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Professional Summary</label>
                  <Textarea placeholder="Enter a brief summary of your professional background and goals..." rows={4} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Skills (comma separated)</label>
                  <Input placeholder="React, JavaScript, UI/UX Design, Project Management..." />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Work Experience</label>
                  <Textarea
                    placeholder="List your work experience with company names, positions, and responsibilities..."
                    rows={6}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Education</label>
                  <Textarea
                    placeholder="List your educational background including degrees, institutions, and years..."
                    rows={3}
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        ) : analyzing ? (
          <div className="space-y-6 py-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Analyzing profile...</span>
                <span>{progress}%</span>
              </div>
              <Progress value={progress} />
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Extracting profile data</span>
              </div>
              <div className="flex items-center gap-2">
                {progress >= 30 ? (
                  <CheckCircle className="h-5 w-5 text-green-500" />
                ) : (
                  <div className="h-5 w-5 rounded-full border-2 border-muted-foreground border-t-transparent animate-spin" />
                )}
                <span>Analyzing skills and experience</span>
              </div>
              <div className="flex items-center gap-2">
                {progress >= 60 ? (
                  <CheckCircle className="h-5 w-5 text-green-500" />
                ) : (
                  <div className="h-5 w-5 rounded-full border-2 border-muted-foreground border-t-transparent animate-spin opacity-0" />
                )}
                <span className={progress < 60 ? "text-muted-foreground" : ""}>Generating recommendations</span>
              </div>
              <div className="flex items-center gap-2">
                {progress >= 90 ? (
                  <CheckCircle className="h-5 w-5 text-green-500" />
                ) : (
                  <div className="h-5 w-5 rounded-full border-2 border-muted-foreground border-t-transparent animate-spin opacity-0" />
                )}
                <span className={progress < 90 ? "text-muted-foreground" : ""}>Preparing final report</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6 py-2">
            <Alert className="bg-green-50 border-green-200">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <AlertTitle>Analysis Complete</AlertTitle>
              <AlertDescription>Your profile has been successfully analyzed by our Oracis AI</AlertDescription>
            </Alert>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Profile Strength</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Overall Strength</span>
                    <span>78%</span>
                  </div>
                  <Progress value={78} className="h-2" />
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Skills</span>
                        <span>85%</span>
                      </div>
                      <Progress value={85} className="h-1.5" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Experience</span>
                        <span>72%</span>
                      </div>
                      <Progress value={72} className="h-1.5" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Education</span>
                        <span>90%</span>
                      </div>
                      <Progress value={90} className="h-1.5" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Projects</span>
                        <span>65%</span>
                      </div>
                      <Progress value={65} className="h-1.5" />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Key Strengths</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Strong Technical Skills</Badge>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Project Management</Badge>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Team Leadership</Badge>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Problem Solving</Badge>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Areas for Improvement</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Add more project details</Badge>
                  <Badge variant="outline">Enhance certifications</Badge>
                  <Badge variant="outline">Expand on achievements</Badge>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Oracis AI Recommendations</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                    <span>Highlight specific achievements with quantifiable results in your work experience</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                    <span>Add more details about your project management experience to strengthen this area</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                    <span>Consider adding relevant certifications to validate your technical skills</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                    <span>Expand your LinkedIn network with industry professionals to increase visibility</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-end gap-2 mt-6">
          {!analyzing && !analyzed ? (
            <Button onClick={handleAnalyze}>Analyze Profile</Button>
          ) : analyzed ? (
            <>
              <Button variant="outline" onClick={handleReset}>
                Analyze Another Profile
              </Button>
              <Button>Download Full Report</Button>
            </>
          ) : (
            <Button disabled>Analyzing...</Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
