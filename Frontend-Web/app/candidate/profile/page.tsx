import { SidebarWrapper } from "@/components/sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Briefcase,
  Edit,
  ExternalLink,
  Github,
  Globe,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Plus,
  Share,
  Twitter,
} from "lucide-react"

export default function CandidateProfile() {
  return (
    <SidebarWrapper userType="candidate">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">My Profile</h1>
            <p className="text-muted-foreground">Manage your profile information and visibility</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-1">
              <Share className="h-4 w-4" />
              Share Profile
            </Button>
            <Button size="sm" className="gap-1">
              <Edit className="h-4 w-4" />
              Edit Profile
            </Button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="md:col-span-1">
            <CardHeader className="relative">
              <div className="absolute right-4 top-4">
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                  <Edit className="h-4 w-4" />
                  <span className="sr-only">Edit profile picture</span>
                </Button>
              </div>
              <div className="flex flex-col items-center">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="/placeholder.svg?height=96&width=96" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <CardTitle className="mt-4 text-xl">John Doe</CardTitle>
                <CardDescription className="text-center">Senior Frontend Developer</CardDescription>
                <div className="mt-2 flex items-center gap-1 text-sm text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Contact Information</h3>
                <Separator />
                <div className="grid gap-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span>john.doe@example.com</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium">Social Profiles</h3>
                <Separator />
                <div className="grid gap-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Linkedin className="h-4 w-4 text-[#0077B5]" />
                    <a href="#" className="hover:underline">
                      linkedin.com/in/johndoe
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Github className="h-4 w-4 text-black" />
                    <a href="#" className="hover:underline">
                      github.com/johndoe
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Twitter className="h-4 w-4 text-[#1DA1F2]" />
                    <a href="#" className="hover:underline">
                      twitter.com/johndoe
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Globe className="h-4 w-4 text-muted-foreground" />
                    <a href="#" className="hover:underline">
                      johndoe.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium">Skills</h3>
                <Separator />
                <div className="flex flex-wrap gap-1.5">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">JavaScript</Badge>
                  <Badge variant="secondary">HTML/CSS</Badge>
                  <Badge variant="secondary">UI/UX</Badge>
                  <Badge variant="secondary">GraphQL</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">Git</Badge>
                  <Badge variant="secondary">Tailwind CSS</Badge>
                  <Button variant="outline" size="sm" className="mt-2 h-7 w-full gap-1 text-xs">
                    <Plus className="h-3 w-3" />
                    Add Skill
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium">Languages</h3>
                <Separator />
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>English</span>
                    <span className="text-muted-foreground">Native</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Spanish</span>
                    <span className="text-muted-foreground">Intermediate</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>French</span>
                    <span className="text-muted-foreground">Basic</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6 md:col-span-2">
            <Tabs defaultValue="about">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
              </TabsList>
              <TabsContent value="about" className="space-y-6 pt-4">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>About Me</CardTitle>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Senior Frontend Developer with 5+ years of experience building responsive and user-friendly web
                      applications. Specialized in React, TypeScript, and Next.js. Passionate about creating clean,
                      efficient, and accessible user interfaces.
                    </p>
                    <p className="mt-4 text-sm text-muted-foreground">
                      I enjoy solving complex problems and continuously learning new technologies. In my free time, I
                      contribute to open-source projects and mentor junior developers.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Career Objectives</CardTitle>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Looking for a challenging role as a Lead Frontend Developer or Frontend Architect where I can
                      leverage my expertise in building scalable web applications and mentoring teams. Interested in
                      companies with a strong engineering culture and opportunities to work on innovative products.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="experience" className="space-y-6 pt-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">Work Experience</h3>
                  <Button size="sm" className="gap-1">
                    <Plus className="h-4 w-4" />
                    Add Experience
                  </Button>
                </div>

                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle>Senior Frontend Developer</CardTitle>
                        <CardDescription className="flex items-center gap-1">
                          <Briefcase className="h-3.5 w-3.5" />
                          TechCorp Inc.
                        </CardDescription>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="text-sm">Jan 2021 - Present</span>
                        <span className="text-xs text-muted-foreground">2 years, 5 months</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5" />
                      <span>San Francisco, CA</span>
                    </div>
                    <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                      <li>
                        • Led the frontend development of the company's flagship product, improving performance by 40%
                      </li>
                      <li>
                        • Implemented a component library used across multiple projects, reducing development time by
                        30%
                      </li>
                      <li>• Mentored junior developers and conducted code reviews to ensure code quality</li>
                      <li>• Collaborated with UX designers to implement responsive and accessible interfaces</li>
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      <Badge variant="outline">React</Badge>
                      <Badge variant="outline">TypeScript</Badge>
                      <Badge variant="outline">Next.js</Badge>
                      <Badge variant="outline">GraphQL</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle>Frontend Developer</CardTitle>
                        <CardDescription className="flex items-center gap-1">
                          <Briefcase className="h-3.5 w-3.5" />
                          InnovateSoft
                        </CardDescription>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="text-sm">Mar 2018 - Dec 2020</span>
                        <span className="text-xs text-muted-foreground">2 years, 10 months</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5" />
                      <span>Boston, MA</span>
                    </div>
                    <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                      <li>• Developed and maintained multiple client-facing web applications</li>
                      <li>• Migrated legacy applications from jQuery to React, improving maintainability</li>
                      <li>• Implemented automated testing, achieving 80% code coverage</li>
                      <li>• Participated in agile development processes and sprint planning</li>
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      <Badge variant="outline">React</Badge>
                      <Badge variant="outline">JavaScript</Badge>
                      <Badge variant="outline">Redux</Badge>
                      <Badge variant="outline">Jest</Badge>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="education" className="space-y-6 pt-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">Education</h3>
                  <Button size="sm" className="gap-1">
                    <Plus className="h-4 w-4" />
                    Add Education
                  </Button>
                </div>

                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle>Master of Science in Computer Science</CardTitle>
                        <CardDescription className="flex items-center gap-1">
                          <GraduationCap className="h-3.5 w-3.5" />
                          Stanford University
                        </CardDescription>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="text-sm">2016 - 2018</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5" />
                      <span>Stanford, CA</span>
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground">
                      Specialized in Human-Computer Interaction and Web Technologies. Thesis on "Improving Web
                      Accessibility through Automated Testing."
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      <Badge variant="outline">GPA: 3.8/4.0</Badge>
                      <Badge variant="outline">Dean's List</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle>Bachelor of Science in Computer Engineering</CardTitle>
                        <CardDescription className="flex items-center gap-1">
                          <GraduationCap className="h-3.5 w-3.5" />
                          University of California, Berkeley
                        </CardDescription>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="text-sm">2012 - 2016</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5" />
                      <span>Berkeley, CA</span>
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground">
                      Coursework included Data Structures, Algorithms, Software Engineering, and Web Development. Active
                      member of the Computer Science Club.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      <Badge variant="outline">GPA: 3.7/4.0</Badge>
                      <Badge variant="outline">Cum Laude</Badge>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="portfolio" className="space-y-6 pt-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">Portfolio Projects</h3>
                  <Button size="sm" className="gap-1">
                    <Plus className="h-4 w-4" />
                    Add Project
                  </Button>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">E-commerce Dashboard</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="aspect-video overflow-hidden rounded-md bg-muted">
                        <img
                          src="/placeholder.svg?height=200&width=400"
                          alt="E-commerce Dashboard Preview"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        A responsive admin dashboard for e-commerce platforms with real-time analytics and inventory
                        management.
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        <Badge variant="outline">React</Badge>
                        <Badge variant="outline">TypeScript</Badge>
                        <Badge variant="outline">Chart.js</Badge>
                      </div>
                      <div className="flex items-center gap-2 pt-2">
                        <Button variant="outline" size="sm" className="gap-1">
                          <ExternalLink className="h-3.5 w-3.5" />
                          Demo
                        </Button>
                        <Button variant="outline" size="sm" className="gap-1">
                          <Github className="h-3.5 w-3.5" />
                          Code
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Task Management App</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="aspect-video overflow-hidden rounded-md bg-muted">
                        <img
                          src="/placeholder.svg?height=200&width=400"
                          alt="Task Management App Preview"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        A drag-and-drop task management application with team collaboration features and progress
                        tracking.
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        <Badge variant="outline">Next.js</Badge>
                        <Badge variant="outline">TypeScript</Badge>
                        <Badge variant="outline">Tailwind CSS</Badge>
                      </div>
                      <div className="flex items-center gap-2 pt-2">
                        <Button variant="outline" size="sm" className="gap-1">
                          <ExternalLink className="h-3.5 w-3.5" />
                          Demo
                        </Button>
                        <Button variant="outline" size="sm" className="gap-1">
                          <Github className="h-3.5 w-3.5" />
                          Code
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>AI Profile Analysis</CardTitle>
                  <Button variant="outline" size="sm">
                    Refresh Analysis
                  </Button>
                </div>
                <CardDescription>
                  Our AI has analyzed your profile to provide insights and recommendations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Profile Strength</h4>
                  <div className="flex items-center gap-4">
                    <div className="relative h-16 w-16 rounded-full">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-lg font-bold">85%</span>
                      </div>
                      <svg className="h-16 w-16" viewBox="0 0 36 36">
                        <circle cx="18" cy="18" r="16" fill="none" stroke="#f3f4f6" strokeWidth="2" />
                        <circle
                          cx="18"
                          cy="18"
                          r="16"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeDasharray="100"
                          strokeDashoffset="15"
                          className="text-primary"
                          transform="rotate(-90 18 18)"
                        />
                      </svg>
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span>Experience</span>
                            <span>90%</span>
                          </div>
                          <div className="h-2 rounded-full bg-muted">
                            <div className="h-full rounded-full bg-primary" style={{ width: "90%" }}></div>
                          </div>
                        </div>
                        <div className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span>Skills</span>
                            <span>85%</span>
                          </div>
                          <div className="h-2 rounded-full bg-muted">
                            <div className="h-full rounded-full bg-primary" style={{ width: "85%" }}></div>
                          </div>
                        </div>
                        <div className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span>Education</span>
                            <span>95%</span>
                          </div>
                          <div className="h-2 rounded-full bg-muted">
                            <div className="h-full rounded-full bg-primary" style={{ width: "95%" }}></div>
                          </div>
                        </div>
                        <div className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span>Portfolio</span>
                            <span>70%</span>
                          </div>
                          <div className="h-2 rounded-full bg-muted">
                            <div className="h-full rounded-full bg-primary" style={{ width: "70%" }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Recommendations</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="mt-0.5 h-4 w-4 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                        <Plus className="h-3 w-3" />
                      </div>
                      <span>Add more details about your achievements in your current role</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-0.5 h-4 w-4 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                        <Plus className="h-3 w-3" />
                      </div>
                      <span>Include more portfolio projects to showcase your skills</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-0.5 h-4 w-4 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                        <Plus className="h-3 w-3" />
                      </div>
                      <span>Add certifications to validate your technical expertise</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </SidebarWrapper>
  )
}
