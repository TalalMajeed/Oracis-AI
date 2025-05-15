"use client";

import { useState } from "react";
import { SidebarWrapper } from "@/components/sidebar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  Check,
  Download,
  FileText,
  Laptop,
  Layout,
  Loader2,
  Plus,
  Save,
  Sparkles,
  Trash,
  Upload,
  X,
  Zap,
} from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function CVBuilder() {
  const [activeTab, setActiveTab] = useState("editor");
  const [isGenerating, setIsGenerating] = useState(false);
  const [isAiSuggesting, setIsAiSuggesting] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setActiveTab("preview");
    }, 2000);
  };

  const handleAiSuggest = () => {
    setIsAiSuggesting(true);
    setTimeout(() => {
      setIsAiSuggesting(false);
    }, 1500);
  };

  return (
    <SidebarWrapper userType="candidate">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">CV Builder</h1>
            <p className="text-muted-foreground">
              Create and customize your professional CV with AI assistance
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-1">
              <Upload className="h-4 w-4" />
              Import
            </Button>
            <Button size="sm" className="gap-1">
              <Save className="h-4 w-4" />
              Save
            </Button>
          </div>
        </div>

        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="space-y-4"
        >
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="editor" className="gap-2">
                <FileText className="h-4 w-4" />
                Editor
              </TabsTrigger>
              <TabsTrigger value="templates" className="gap-2">
                <Layout className="h-4 w-4" />
                Templates
              </TabsTrigger>
              <TabsTrigger value="preview" className="gap-2">
                <Laptop className="h-4 w-4" />
                Preview
              </TabsTrigger>
            </TabsList>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="gap-1">
                <Download className="h-4 w-4" />
                Download PDF
              </Button>
            </div>
          </div>

          <TabsContent value="editor" className="space-y-4">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="space-y-4 md:col-span-1">
                <Card>
                  <CardHeader>
                    <CardTitle>CV Sections</CardTitle>
                    <CardDescription>
                      Customize the sections in your CV
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <Check className="h-3.5 w-3.5" />
                        </div>
                        <span className="text-sm font-medium">
                          Personal Information
                        </span>
                      </div>
                      <Switch checked={true} />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <Check className="h-3.5 w-3.5" />
                        </div>
                        <span className="text-sm font-medium">
                          Professional Summary
                        </span>
                      </div>
                      <Switch checked={true} />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <Check className="h-3.5 w-3.5" />
                        </div>
                        <span className="text-sm font-medium">
                          Work Experience
                        </span>
                      </div>
                      <Switch checked={true} />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <Check className="h-3.5 w-3.5" />
                        </div>
                        <span className="text-sm font-medium">Education</span>
                      </div>
                      <Switch checked={true} />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <Check className="h-3.5 w-3.5" />
                        </div>
                        <span className="text-sm font-medium">Skills</span>
                      </div>
                      <Switch checked={true} />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <Check className="h-3.5 w-3.5" />
                        </div>
                        <span className="text-sm font-medium">Languages</span>
                      </div>
                      <Switch checked={true} />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <X className="h-3.5 w-3.5" />
                        </div>
                        <span className="text-sm font-medium">
                          Certifications
                        </span>
                      </div>
                      <Switch checked={false} />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <X className="h-3.5 w-3.5" />
                        </div>
                        <span className="text-sm font-medium">Projects</span>
                      </div>
                      <Switch checked={false} />
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-2 w-full gap-1"
                    >
                      <Plus className="h-3.5 w-3.5" />
                      Add Section
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>AI Assistant</CardTitle>
                    <CardDescription>
                      Get AI-powered suggestions for your CV
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="rounded-md bg-primary/5 p-4">
                      <div className="flex items-start gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                          <Zap className="h-4 w-4" />
                        </div>
                        <div className="space-y-1">
                          <h4 className="text-sm font-medium">
                            AI Suggestions
                          </h4>
                          <p className="text-xs text-muted-foreground">
                            Our AI can help improve your CV by suggesting better
                            wording, highlighting achievements, and identifying
                            missing information.
                          </p>
                          <Button
                            size="sm"
                            className="mt-2 gap-1"
                            onClick={handleAiSuggest}
                            disabled={isAiSuggesting}
                          >
                            {isAiSuggesting ? (
                              <>
                                <Loader2 className="h-3.5 w-3.5 animate-spin" />
                                Generating...
                              </>
                            ) : (
                              <>
                                <Sparkles className="h-3.5 w-3.5" />
                                Get Suggestions
                              </>
                            )}
                          </Button>
                        </div>
                      </div>
                    </div>
                    <Alert className="bg-amber-50 border-amber-200">
                      <AlertCircle className="h-4 w-4 text-amber-600" />
                      <AlertTitle>Tip</AlertTitle>
                      <AlertDescription className="text-xs">
                        Be specific about your achievements. Use numbers and
                        metrics where possible to quantify your impact.
                      </AlertDescription>
                    </Alert>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6 md:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First Name</Label>
                        <Input id="first-name" defaultValue="John" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last Name</Label>
                        <Input id="last-name" defaultValue="Doe" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="job-title">Professional Title</Label>
                      <Input
                        id="job-title"
                        defaultValue="Senior Frontend Developer"
                      />
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          defaultValue="john.doe@example.com"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" defaultValue="+1 (555) 123-4567" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Input id="location" defaultValue="San Francisco, CA" />
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="linkedin">LinkedIn</Label>
                        <Input
                          id="linkedin"
                          defaultValue="linkedin.com/in/johndoe"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="website">Website/Portfolio</Label>
                        <Input id="website" defaultValue="johndoe.com" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Professional Summary</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <Label htmlFor="summary">Summary</Label>
                      <Textarea
                        id="summary"
                        className="min-h-[120px]"
                        defaultValue="Senior Frontend Developer with 5+ years of experience building responsive and user-friendly web applications. Specialized in React, TypeScript, and Next.js. Passionate about creating clean, efficient, and accessible user interfaces. Strong problem-solving skills and experience working in agile environments."
                      />
                      <p className="text-xs text-muted-foreground">
                        A concise overview of your professional background, key
                        skills, and career goals. Aim for 3-5 sentences.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>Work Experience</CardTitle>
                    <Button size="sm" variant="outline" className="gap-1">
                      <Plus className="h-4 w-4" />
                      Add Experience
                    </Button>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="rounded-md border p-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <Input
                              className="h-7 border-0 p-0 text-base font-medium focus-visible:ring-0"
                              defaultValue="Senior Frontend Developer"
                            />
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-7 w-7"
                            >
                              <Trash className="h-4 w-4 text-muted-foreground" />
                            </Button>
                          </div>
                          <div className="flex items-center gap-2">
                            <Input
                              className="h-6 border-0 p-0 text-sm text-muted-foreground focus-visible:ring-0"
                              defaultValue="TechCorp Inc."
                            />
                          </div>
                        </div>
                        <div className="text-right text-sm">
                          <div className="flex items-center gap-2">
                            <Input
                              className="h-6 w-24 border-0 p-0 text-right focus-visible:ring-0"
                              defaultValue="Jan 2021"
                            />
                            <span>-</span>
                            <Input
                              className="h-6 w-24 border-0 p-0 text-right focus-visible:ring-0"
                              defaultValue="Present"
                            />
                          </div>
                          <Input
                            className="h-6 border-0 p-0 text-right text-muted-foreground focus-visible:ring-0"
                            defaultValue="San Francisco, CA"
                          />
                        </div>
                      </div>
                      <Separator className="my-4" />
                      <div className="space-y-2">
                        <Label htmlFor="job1-description" className="text-sm">
                          Description & Achievements
                        </Label>
                        <Textarea
                          id="job1-description"
                          className="min-h-[120px]"
                          defaultValue="• Led the frontend development of the company's flagship product, improving performance by 40%
• Implemented a component library used across multiple projects, reducing development time by 30%
• Mentored junior developers and conducted code reviews to ensure code quality
• Collaborated with UX designers to implement responsive and accessible interfaces"
                        />
                      </div>
                      <div className="mt-4 space-y-2">
                        <Label className="text-sm">Skills Used</Label>
                        <div className="flex flex-wrap gap-1.5">
                          <Badge variant="secondary">React</Badge>
                          <Badge variant="secondary">TypeScript</Badge>
                          <Badge variant="secondary">Next.js</Badge>
                          <Badge variant="secondary">GraphQL</Badge>
                          <Button
                            variant="outline"
                            size="sm"
                            className="h-6 gap-1 text-xs"
                          >
                            <Plus className="h-3 w-3" />
                            Add Skill
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-md border p-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <Input
                              className="h-7 border-0 p-0 text-base font-medium focus-visible:ring-0"
                              defaultValue="Frontend Developer"
                            />
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-7 w-7"
                            >
                              <Trash className="h-4 w-4 text-muted-foreground" />
                            </Button>
                          </div>
                          <div className="flex items-center gap-2">
                            <Input
                              className="h-6 border-0 p-0 text-sm text-muted-foreground focus-visible:ring-0"
                              defaultValue="InnovateSoft"
                            />
                          </div>
                        </div>
                        <div className="text-right text-sm">
                          <div className="flex items-center gap-2">
                            <Input
                              className="h-6 w-24 border-0 p-0 text-right focus-visible:ring-0"
                              defaultValue="Mar 2018"
                            />
                            <span>-</span>
                            <Input
                              className="h-6 w-24 border-0 p-0 text-right focus-visible:ring-0"
                              defaultValue="Dec 2020"
                            />
                          </div>
                          <Input
                            className="h-6 border-0 p-0 text-right text-muted-foreground focus-visible:ring-0"
                            defaultValue="Boston, MA"
                          />
                        </div>
                      </div>
                      <Separator className="my-4" />
                      <div className="space-y-2">
                        <Label htmlFor="job2-description" className="text-sm">
                          Description & Achievements
                        </Label>
                        <Textarea
                          id="job2-description"
                          className="min-h-[120px]"
                          defaultValue="• Developed and maintained multiple client-facing web applications
• Migrated legacy applications from jQuery to React, improving maintainability
• Implemented automated testing, achieving 80% code coverage
• Participated in agile development processes and sprint planning"
                        />
                      </div>
                      <div className="mt-4 space-y-2">
                        <Label className="text-sm">Skills Used</Label>
                        <div className="flex flex-wrap gap-1.5">
                          <Badge variant="secondary">React</Badge>
                          <Badge variant="secondary">JavaScript</Badge>
                          <Badge variant="secondary">Redux</Badge>
                          <Badge variant="secondary">Jest</Badge>
                          <Button
                            variant="outline"
                            size="sm"
                            className="h-6 gap-1 text-xs"
                          >
                            <Plus className="h-3 w-3" />
                            Add Skill
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>Education</CardTitle>
                    <Button size="sm" variant="outline" className="gap-1">
                      <Plus className="h-4 w-4" />
                      Add Education
                    </Button>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="rounded-md border p-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <Input
                              className="h-7 border-0 p-0 text-base font-medium focus-visible:ring-0"
                              defaultValue="Master of Science in Computer Science"
                            />
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-7 w-7"
                            >
                              <Trash className="h-4 w-4 text-muted-foreground" />
                            </Button>
                          </div>
                          <div className="flex items-center gap-2">
                            <Input
                              className="h-6 border-0 p-0 text-sm text-muted-foreground focus-visible:ring-0"
                              defaultValue="Stanford University"
                            />
                          </div>
                        </div>
                        <div className="text-right text-sm">
                          <div className="flex items-center gap-2">
                            <Input
                              className="h-6 w-16 border-0 p-0 text-right focus-visible:ring-0"
                              defaultValue="2016"
                            />
                            <span>-</span>
                            <Input
                              className="h-6 w-16 border-0 p-0 text-right focus-visible:ring-0"
                              defaultValue="2018"
                            />
                          </div>
                          <Input
                            className="h-6 border-0 p-0 text-right text-muted-foreground focus-visible:ring-0"
                            defaultValue="Stanford, CA"
                          />
                        </div>
                      </div>
                      <Separator className="my-4" />
                      <div className="space-y-2">
                        <Label htmlFor="edu1-description" className="text-sm">
                          Description
                        </Label>
                        <Textarea
                          id="edu1-description"
                          className="min-h-[80px]"
                          defaultValue="Specialized in Human-Computer Interaction and Web Technologies. Thesis on 'Improving Web Accessibility through Automated Testing.' GPA: 3.8/4.0"
                        />
                      </div>
                    </div>

                    <div className="rounded-md border p-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <Input
                              className="h-7 border-0 p-0 text-base font-medium focus-visible:ring-0"
                              defaultValue="Bachelor of Science in Computer Engineering"
                            />
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-7 w-7"
                            >
                              <Trash className="h-4 w-4 text-muted-foreground" />
                            </Button>
                          </div>
                          <div className="flex items-center gap-2">
                            <Input
                              className="h-6 border-0 p-0 text-sm text-muted-foreground focus-visible:ring-0"
                              defaultValue="University of California, Berkeley"
                            />
                          </div>
                        </div>
                        <div className="text-right text-sm">
                          <div className="flex items-center gap-2">
                            <Input
                              className="h-6 w-16 border-0 p-0 text-right focus-visible:ring-0"
                              defaultValue="2012"
                            />
                            <span>-</span>
                            <Input
                              className="h-6 w-16 border-0 p-0 text-right focus-visible:ring-0"
                              defaultValue="2016"
                            />
                          </div>
                          <Input
                            className="h-6 border-0 p-0 text-right text-muted-foreground focus-visible:ring-0"
                            defaultValue="Berkeley, CA"
                          />
                        </div>
                      </div>
                      <Separator className="my-4" />
                      <div className="space-y-2">
                        <Label htmlFor="edu2-description" className="text-sm">
                          Description
                        </Label>
                        <Textarea
                          id="edu2-description"
                          className="min-h-[80px]"
                          defaultValue="Coursework included Data Structures, Algorithms, Software Engineering, and Web Development. Active member of the Computer Science Club. GPA: 3.7/4.0, Cum Laude."
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Skills</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="technical-skills">
                          Technical Skills
                        </Label>
                        <Textarea
                          id="technical-skills"
                          className="min-h-[80px]"
                          defaultValue="React, TypeScript, JavaScript, Next.js, HTML5, CSS3, Tailwind CSS, GraphQL, REST APIs, Redux, Node.js, Express, MongoDB, Git, GitHub, Jest, Testing Library, Webpack, CI/CD, Docker"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="soft-skills">Soft Skills</Label>
                        <Textarea
                          id="soft-skills"
                          className="min-h-[80px]"
                          defaultValue="Team Leadership, Mentoring, Problem Solving, Communication, Project Management, Agile Methodologies, Time Management, Attention to Detail, Adaptability"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Languages</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="language-1">Language</Label>
                          <Input id="language-1" defaultValue="English" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="proficiency-1">Proficiency</Label>
                          <Select defaultValue="native">
                            <SelectTrigger id="proficiency-1">
                              <SelectValue placeholder="Select proficiency" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="native">Native</SelectItem>
                              <SelectItem value="fluent">Fluent</SelectItem>
                              <SelectItem value="advanced">Advanced</SelectItem>
                              <SelectItem value="intermediate">
                                Intermediate
                              </SelectItem>
                              <SelectItem value="basic">Basic</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="language-2">Language</Label>
                          <Input id="language-2" defaultValue="Spanish" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="proficiency-2">Proficiency</Label>
                          <Select defaultValue="intermediate">
                            <SelectTrigger id="proficiency-2">
                              <SelectValue placeholder="Select proficiency" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="native">Native</SelectItem>
                              <SelectItem value="fluent">Fluent</SelectItem>
                              <SelectItem value="advanced">Advanced</SelectItem>
                              <SelectItem value="intermediate">
                                Intermediate
                              </SelectItem>
                              <SelectItem value="basic">Basic</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="gap-1">
                        <Plus className="h-4 w-4" />
                        Add Language
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="templates" className="space-y-4">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="overflow-hidden">
                <CardHeader className="p-0">
                  <div className="aspect-[3/4] bg-muted">
                    <img
                      src="/placeholder.svg?height=400&width=300"
                      alt="Modern template preview"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="text-base">Modern</CardTitle>
                  <CardDescription>
                    Clean and contemporary design
                  </CardDescription>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button size="sm" className="w-full">
                    Select Template
                  </Button>
                </CardFooter>
              </Card>

              <Card className="overflow-hidden">
                <CardHeader className="p-0">
                  <div className="aspect-[3/4] bg-muted">
                    <img
                      src="/placeholder.svg?height=400&width=300"
                      alt="Professional template preview"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="text-base">Professional</CardTitle>
                  <CardDescription>
                    Traditional and elegant layout
                  </CardDescription>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button size="sm" variant="outline" className="w-full">
                    Select Template
                  </Button>
                </CardFooter>
              </Card>

              <Card className="overflow-hidden">
                <CardHeader className="p-0">
                  <div className="aspect-[3/4] bg-muted">
                    <img
                      src="/placeholder.svg?height=400&width=300"
                      alt="Creative template preview"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="text-base">Creative</CardTitle>
                  <CardDescription>Bold and distinctive design</CardDescription>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button size="sm" variant="outline" className="w-full">
                    Select Template
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="preview" className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <div className="mx-auto max-w-[800px] space-y-8">
                  <div className="text-center">
                    <h2 className="text-3xl font-bold">John Doe</h2>
                    <p className="text-lg text-muted-foreground">
                      Senior Frontend Developer
                    </p>
                    <div className="mt-2 flex items-center justify-center gap-4 text-sm text-muted-foreground">
                      <span>john.doe@example.com</span>
                      <span>•</span>
                      <span>+1 (555) 123-4567</span>
                      <span>•</span>
                      <span>San Francisco, CA</span>
                    </div>
                    <div className="mt-1 flex items-center justify-center gap-4 text-sm text-muted-foreground">
                      <span>linkedin.com/in/johndoe</span>
                      <span>•</span>
                      <span>johndoe.com</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold border-b pb-1">
                      Professional Summary
                    </h3>
                    <p className="mt-2 text-sm">
                      Senior Frontend Developer with 5+ years of experience
                      building responsive and user-friendly web applications.
                      Specialized in React, TypeScript, and Next.js. Passionate
                      about creating clean, efficient, and accessible user
                      interfaces. Strong problem-solving skills and experience
                      working in agile environments.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold border-b pb-1">
                      Work Experience
                    </h3>
                    <div className="mt-4 space-y-6">
                      <div>
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">
                              Senior Frontend Developer
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              TechCorp Inc.
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm">Jan 2021 - Present</p>
                            <p className="text-sm text-muted-foreground">
                              San Francisco, CA
                            </p>
                          </div>
                        </div>
                        <ul className="mt-2 space-y-1 text-sm">
                          <li>
                            • Led the frontend development of the company's
                            flagship product, improving performance by 40%
                          </li>
                          <li>
                            • Implemented a component library used across
                            multiple projects, reducing development time by 30%
                          </li>
                          <li>
                            • Mentored junior developers and conducted code
                            reviews to ensure code quality
                          </li>
                          <li>
                            • Collaborated with UX designers to implement
                            responsive and accessible interfaces
                          </li>
                        </ul>
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          <Badge variant="outline" className="text-xs">
                            React
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            TypeScript
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            Next.js
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            GraphQL
                          </Badge>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">Frontend Developer</h4>
                            <p className="text-sm text-muted-foreground">
                              InnovateSoft
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm">Mar 2018 - Dec 2020</p>
                            <p className="text-sm text-muted-foreground">
                              Boston, MA
                            </p>
                          </div>
                        </div>
                        <ul className="mt-2 space-y-1 text-sm">
                          <li>
                            • Developed and maintained multiple client-facing
                            web applications
                          </li>
                          <li>
                            • Migrated legacy applications from jQuery to React,
                            improving maintainability
                          </li>
                          <li>
                            • Implemented automated testing, achieving 80% code
                            coverage
                          </li>
                          <li>
                            • Participated in agile development processes and
                            sprint planning
                          </li>
                        </ul>
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          <Badge variant="outline" className="text-xs">
                            React
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            JavaScript
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            Redux
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            Jest
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold border-b pb-1">
                      Education
                    </h3>
                    <div className="mt-4 space-y-4">
                      <div>
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">
                              Master of Science in Computer Science
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              Stanford University
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm">2016 - 2018</p>
                            <p className="text-sm text-muted-foreground">
                              Stanford, CA
                            </p>
                          </div>
                        </div>
                        <p className="mt-1 text-sm">
                          Specialized in Human-Computer Interaction and Web
                          Technologies. Thesis on 'Improving Web Accessibility
                          through Automated Testing.' GPA: 3.8/4.0
                        </p>
                      </div>

                      <div>
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">
                              Bachelor of Science in Computer Engineering
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              University of California, Berkeley
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm">2012 - 2016</p>
                            <p className="text-sm text-muted-foreground">
                              Berkeley, CA
                            </p>
                          </div>
                        </div>
                        <p className="mt-1 text-sm">
                          Coursework included Data Structures, Algorithms,
                          Software Engineering, and Web Development. Active
                          member of the Computer Science Club. GPA: 3.7/4.0, Cum
                          Laude.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <h3 className="text-lg font-semibold border-b pb-1">
                        Skills
                      </h3>
                      <div className="mt-2">
                        <h4 className="text-sm font-medium">
                          Technical Skills
                        </h4>
                        <p className="mt-1 text-sm">
                          React, TypeScript, JavaScript, Next.js, HTML5, CSS3,
                          Tailwind CSS, GraphQL, REST APIs, Redux, Node.js,
                          Express, MongoDB, Git, GitHub, Jest, Testing Library,
                          Webpack, CI/CD, Docker
                        </p>
                        <h4 className="mt-3 text-sm font-medium">
                          Soft Skills
                        </h4>
                        <p className="mt-1 text-sm">
                          Team Leadership, Mentoring, Problem Solving,
                          Communication, Project Management, Agile
                          Methodologies, Time Management, Attention to Detail,
                          Adaptability
                        </p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold border-b pb-1">
                        Languages
                      </h3>
                      <div className="mt-2 space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm">English</span>
                          <span className="text-sm text-muted-foreground">
                            Native
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Spanish</span>
                          <span className="text-sm text-muted-foreground">
                            Intermediate
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="flex items-center justify-between">
          <Button variant="outline" className="gap-1">
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
          <Button
            onClick={handleGenerate}
            disabled={isGenerating}
            className="gap-1"
          >
            {isGenerating ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                Generate CV
                <ArrowRight className="h-4 w-4" />
              </>
            )}
          </Button>
        </div>
      </div>
    </SidebarWrapper>
  );
}
