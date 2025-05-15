import { SidebarWrapper } from "@/components/sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Building,
  Edit,
  Facebook,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Plus,
  Share,
  Twitter,
  Users,
} from "lucide-react"

export default function EmployerProfile() {
  return (
    <SidebarWrapper userType="employer">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Company Profile</h1>
            <p className="text-muted-foreground">Manage your company profile and public information</p>
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
                  <span className="sr-only">Edit company logo</span>
                </Button>
              </div>
              <div className="flex flex-col items-center">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="/placeholder.svg?height=96&width=96" />
                  <AvatarFallback>AC</AvatarFallback>
                </Avatar>
                <CardTitle className="mt-4 text-xl">Acme Corporation</CardTitle>
                <CardDescription className="text-center">Technology & Software</CardDescription>
                <div className="mt-2 flex items-center gap-1 text-sm text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Company Information</h3>
                <Separator />
                <div className="grid gap-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Building className="h-4 w-4 text-muted-foreground" />
                    <span>Founded in 2010</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>50-200 employees</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Globe className="h-4 w-4 text-muted-foreground" />
                    <a href="#" className="hover:underline">
                      www.acmecorp.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium">Contact Information</h3>
                <Separator />
                <div className="grid gap-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span>careers@acmecorp.com</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span>+1 (555) 987-6543</span>
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
                      linkedin.com/company/acmecorp
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Twitter className="h-4 w-4 text-[#1DA1F2]" />
                    <a href="#" className="hover:underline">
                      twitter.com/acmecorp
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Facebook className="h-4 w-4 text-[#1877F2]" />
                    <a href="#" className="hover:underline">
                      facebook.com/acmecorp
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Instagram className="h-4 w-4 text-[#E4405F]" />
                    <a href="#" className="hover:underline">
                      instagram.com/acmecorp
                    </a>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium">Industry Tags</h3>
                <Separator />
                <div className="flex flex-wrap gap-1.5">
                  <Badge variant="secondary">Technology</Badge>
                  <Badge variant="secondary">Software</Badge>
                  <Badge variant="secondary">SaaS</Badge>
                  <Badge variant="secondary">Cloud Computing</Badge>
                  <Badge variant="secondary">AI</Badge>
                  <Badge variant="secondary">Web Development</Badge>
                  <Button variant="outline" size="sm" className="mt-2 h-7 w-full gap-1 text-xs">
                    <Plus className="h-3 w-3" />
                    Add Tag
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6 md:col-span-2">
            <Tabs defaultValue="about">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="jobs">Jobs</TabsTrigger>
                <TabsTrigger value="team">Team</TabsTrigger>
                <TabsTrigger value="benefits">Benefits</TabsTrigger>
              </TabsList>
              <TabsContent value="about" className="space-y-6 pt-4">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>About Acme Corporation</CardTitle>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Acme Corporation is a leading technology company specializing in innovative software solutions for
                      businesses of all sizes. Founded in 2010, we've grown from a small startup to a global company
                      with offices in San Francisco, New York, and London.
                    </p>
                    <p className="mt-4 text-sm text-muted-foreground">
                      Our mission is to create intuitive, powerful software that helps businesses streamline their
                      operations and achieve their goals. We're passionate about technology and committed to delivering
                      exceptional products and services to our clients.
                    </p>
                    <p className="mt-4 text-sm text-muted-foreground">
                      With a team of over 150 talented professionals, we combine technical expertise with creative
                      thinking to solve complex problems and drive innovation in the industry.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Company Culture</CardTitle>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      At Acme, we believe in fostering a collaborative, inclusive, and innovative work environment. Our
                      culture is built on the following core values:
                    </p>
                    <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                      <li>
                        • <strong>Innovation:</strong> We encourage creative thinking and embrace new ideas.
                      </li>
                      <li>
                        • <strong>Excellence:</strong> We strive for the highest quality in everything we do.
                      </li>
                      <li>
                        • <strong>Collaboration:</strong> We work together across teams to achieve common goals.
                      </li>
                      <li>
                        • <strong>Integrity:</strong> We act with honesty and transparency in all our interactions.
                      </li>
                      <li>
                        • <strong>Customer Focus:</strong> We prioritize understanding and meeting our customers' needs.
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="jobs" className="space-y-6 pt-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">Active Job Postings</h3>
                  <Button size="sm" className="gap-1">
                    <Plus className="h-4 w-4" />
                    Post New Job
                  </Button>
                </div>

                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle>Senior Frontend Developer</CardTitle>
                        <CardDescription className="flex items-center gap-1 mt-1">
                          <MapPin className="h-3.5 w-3.5" />
                          San Francisco, CA (On-site)
                        </CardDescription>
                      </div>
                      <Badge>Active</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 text-sm text-muted-foreground mb-4">
                      <Badge variant="outline">Full-time</Badge>
                      <Badge variant="outline">$120K - $150K</Badge>
                      <Badge variant="outline">5+ years experience</Badge>
                      <Badge variant="outline">Posted 2 weeks ago</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      We're looking for a Senior Frontend Developer to join our product team. You'll be responsible for
                      building user interfaces for our web applications using React and TypeScript.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      <Badge variant="secondary">React</Badge>
                      <Badge variant="secondary">TypeScript</Badge>
                      <Badge variant="secondary">Next.js</Badge>
                      <Badge variant="secondary">GraphQL</Badge>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="text-sm">
                        <span className="font-medium">48</span> applications received
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                        <Button variant="outline" size="sm">
                          View Applications
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle>Full Stack Engineer</CardTitle>
                        <CardDescription className="flex items-center gap-1 mt-1">
                          <MapPin className="h-3.5 w-3.5" />
                          Remote (US)
                        </CardDescription>
                      </div>
                      <Badge>Active</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 text-sm text-muted-foreground mb-4">
                      <Badge variant="outline">Full-time</Badge>
                      <Badge variant="outline">$110K - $140K</Badge>
                      <Badge variant="outline">3+ years experience</Badge>
                      <Badge variant="outline">Posted 1 week ago</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      We're seeking a Full Stack Engineer to help build and maintain our cloud-based software solutions.
                      Experience with Node.js and React required.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      <Badge variant="secondary">Node.js</Badge>
                      <Badge variant="secondary">React</Badge>
                      <Badge variant="secondary">MongoDB</Badge>
                      <Badge variant="secondary">AWS</Badge>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="text-sm">
                        <span className="font-medium">36</span> applications received
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                        <Button variant="outline" size="sm">
                          View Applications
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="team" className="space-y-6 pt-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">Leadership Team</h3>
                  <Button size="sm" className="gap-1">
                    <Plus className="h-4 w-4" />
                    Add Team Member
                  </Button>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader className="text-center pb-2">
                      <Avatar className="mx-auto h-20 w-20">
                        <AvatarImage src="/placeholder.svg?height=80&width=80" />
                        <AvatarFallback>JS</AvatarFallback>
                      </Avatar>
                      <CardTitle className="mt-4 text-base">Jane Smith</CardTitle>
                      <CardDescription>Chief Executive Officer</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-sm text-muted-foreground">
                        Co-founder and CEO with 15+ years of experience in the tech industry. Previously led product
                        development at TechGiant.
                      </p>
                      <div className="mt-4 flex justify-center gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                          <Linkedin className="h-4 w-4 text-[#0077B5]" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                          <Twitter className="h-4 w-4 text-[#1DA1F2]" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                          <Mail className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="text-center pb-2">
                      <Avatar className="mx-auto h-20 w-20">
                        <AvatarImage src="/placeholder.svg?height=80&width=80" />
                        <AvatarFallback>MJ</AvatarFallback>
                      </Avatar>
                      <CardTitle className="mt-4 text-base">Michael Johnson</CardTitle>
                      <CardDescription>Chief Technology Officer</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-sm text-muted-foreground">
                        Co-founder and CTO with expertise in scalable architecture and cloud infrastructure. Previously
                        at CloudTech.
                      </p>
                      <div className="mt-4 flex justify-center gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                          <Linkedin className="h-4 w-4 text-[#0077B5]" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                          <Twitter className="h-4 w-4 text-[#1DA1F2]" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                          <Mail className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="text-center pb-2">
                      <Avatar className="mx-auto h-20 w-20">
                        <AvatarImage src="/placeholder.svg?height=80&width=80" />
                        <AvatarFallback>EW</AvatarFallback>
                      </Avatar>
                      <CardTitle className="mt-4 text-base">Emily Wilson</CardTitle>
                      <CardDescription>VP of Product</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-sm text-muted-foreground">
                        Product leader with a passion for user-centered design. Has led product teams at several
                        successful startups.
                      </p>
                      <div className="mt-4 flex justify-center gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                          <Linkedin className="h-4 w-4 text-[#0077B5]" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                          <Twitter className="h-4 w-4 text-[#1DA1F2]" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                          <Mail className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="benefits" className="space-y-6 pt-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">Employee Benefits</h3>
                  <Button size="sm" className="gap-1">
                    <Plus className="h-4 w-4" />
                    Add Benefit
                  </Button>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Health & Wellness</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <div className="mt-0.5 h-4 w-4 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                            <Plus className="h-3 w-3" />
                          </div>
                          <span>Comprehensive health, dental, and vision insurance</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="mt-0.5 h-4 w-4 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                            <Plus className="h-3 w-3" />
                          </div>
                          <span>Mental health resources and support</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="mt-0.5 h-4 w-4 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                            <Plus className="h-3 w-3" />
                          </div>
                          <span>Gym membership reimbursement</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="mt-0.5 h-4 w-4 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                            <Plus className="h-3 w-3" />
                          </div>
                          <span>Wellness programs and activities</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Work-Life Balance</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <div className="mt-0.5 h-4 w-4 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                            <Plus className="h-3 w-3" />
                          </div>
                          <span>Flexible working hours</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="mt-0.5 h-4 w-4 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                            <Plus className="h-3 w-3" />
                          </div>
                          <span>Remote work options</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="mt-0.5 h-4 w-4 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                            <Plus className="h-3 w-3" />
                          </div>
                          <span>Unlimited PTO policy</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="mt-0.5 h-4 w-4 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                            <Plus className="h-3 w-3" />
                          </div>
                          <span>Paid parental leave</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Professional Development</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <div className="mt-0.5 h-4 w-4 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                            <Plus className="h-3 w-3" />
                          </div>
                          <span>Learning and development budget</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="mt-0.5 h-4 w-4 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                            <Plus className="h-3 w-3" />
                          </div>
                          <span>Conference attendance opportunities</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="mt-0.5 h-4 w-4 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                            <Plus className="h-3 w-3" />
                          </div>
                          <span>Mentorship programs</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="mt-0.5 h-4 w-4 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                            <Plus className="h-3 w-3" />
                          </div>
                          <span>Career advancement opportunities</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Financial Benefits</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <div className="mt-0.5 h-4 w-4 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                            <Plus className="h-3 w-3" />
                          </div>
                          <span>Competitive salary packages</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="mt-0.5 h-4 w-4 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                            <Plus className="h-3 w-3" />
                          </div>
                          <span>401(k) matching program</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="mt-0.5 h-4 w-4 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                            <Plus className="h-3 w-3" />
                          </div>
                          <span>Employee stock options</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="mt-0.5 h-4 w-4 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                            <Plus className="h-3 w-3" />
                          </div>
                          <span>Performance-based bonuses</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Company Analytics</CardTitle>
                  <Button variant="outline" size="sm">
                    View Detailed Analytics
                  </Button>
                </div>
                <CardDescription>Overview of your company's performance on the platform</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-medium">Profile Views</h4>
                      <span className="text-xs text-green-500">+12%</span>
                    </div>
                    <div className="text-2xl font-bold">1,248</div>
                    <p className="text-xs text-muted-foreground">Last 30 days</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-medium">Job Applications</h4>
                      <span className="text-xs text-green-500">+8%</span>
                    </div>
                    <div className="text-2xl font-bold">156</div>
                    <p className="text-xs text-muted-foreground">Across all job postings</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-medium">Candidate Matches</h4>
                      <span className="text-xs text-green-500">+15%</span>
                    </div>
                    <div className="text-2xl font-bold">48</div>
                    <p className="text-xs text-muted-foreground">AI-recommended matches</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Application Sources</h4>
                  <div className="h-[200px] w-full rounded-md border p-4">
                    <div className="flex h-full flex-col justify-between">
                      <div className="flex items-end justify-between h-[140px]">
                        <div className="flex flex-col items-center">
                          <div className="w-12 bg-primary rounded-t-md" style={{ height: "70%" }}></div>
                          <span className="mt-2 text-xs">Direct</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-12 bg-primary/80 rounded-t-md" style={{ height: "50%" }}></div>
                          <span className="mt-2 text-xs">Search</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-12 bg-primary/60 rounded-t-md" style={{ height: "90%" }}></div>
                          <span className="mt-2 text-xs">AI Match</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-12 bg-primary/40 rounded-t-md" style={{ height: "30%" }}></div>
                          <span className="mt-2 text-xs">Referral</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-12 bg-primary/20 rounded-t-md" style={{ height: "20%" }}></div>
                          <span className="mt-2 text-xs">Other</span>
                        </div>
                      </div>
                      <div className="text-xs text-muted-foreground text-center">
                        Application sources for the last 30 days
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </SidebarWrapper>
  )
}
