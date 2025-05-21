"use client";

import { useState, useEffect } from "react";
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
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

interface CVData {
  personal_info: {
    first_name: string;
    last_name: string;
    job_title: string;
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    website: string;
  };
  professional_summary: string;
  work_experience: Array<{
    title: string;
    company: string;
    start_date: string;
    end_date: string;
    location: string;
    description: string;
    skills: string[];
  }>;
  education: Array<{
    degree: string;
    institution: string;
    start_date: string;
    end_date: string;
    location: string;
    description: string;
  }>;
  skills: {
    technical: string;
    soft: string;
  };
  languages: Array<{
    language: string;
    proficiency: string;
  }>;
}

export default function CVBuilder() {
  const [activeTab, setActiveTab] = useState("editor");
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();
  const router = useRouter();

  const [cvData, setCvData] = useState<CVData>({
    personal_info: {
      first_name: "",
      last_name: "",
      job_title: "",
      email: "",
      phone: "",
      location: "",
      linkedin: "",
      website: "",
    },
    professional_summary: "",
    work_experience: [],
    education: [],
    skills: {
      technical: "",
      soft: "",
    },
    languages: [],
  });

  useEffect(() => {
    fetchCV();
  }, []);

  const fetchCV = async () => {
    try {
      const response = await fetch("/api/cv");
      if (response.ok) {
        const data = await response.json();
        if (data) {
          setCvData({
            personal_info: data.personal_info,
            professional_summary: data.professional_summary,
            work_experience: data.work_experience,
            education: data.education,
            skills: data.skills,
            languages: data.languages,
          });
        }
      }
    } catch (error) {
      console.error("Error fetching CV:", error);
      toast({
        title: "Error",
        description: "Failed to load CV data",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const response = await fetch("/api/cv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cvData),
      });

      if (response.ok) {
        toast({
          title: "Success",
          description: "CV saved successfully",
        });
      } else {
        throw new Error("Failed to save CV");
      }
    } catch (error) {
      console.error("Error saving CV:", error);
      toast({
        title: "Error",
        description: "Failed to save CV",
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  };

  const handleDownload = async () => {
    try {
      const element = document.getElementById("cv-preview");
      if (!element) return;

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      // Add margins (20mm on each side)
      const margin = 20;
      const pdfWidth = pdf.internal.pageSize.getWidth() - margin * 2;
      const imgProps = pdf.getImageProperties(imgData);
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(imgData, "PNG", margin, margin, pdfWidth, pdfHeight);
      pdf.save(
        `${cvData.personal_info.first_name}-${cvData.personal_info.last_name}-CV.pdf`
      );

      toast({
        title: "Success",
        description: "CV downloaded successfully",
      });
    } catch (error) {
      console.error("Error generating PDF:", error);
      toast({
        title: "Error",
        description: "Failed to generate PDF",
        variant: "destructive",
      });
    }
  };

  const handleImport = () => {
    // TODO: Implement CV import
    toast({
      title: "Coming Soon",
      description: "CV import feature will be available soon",
    });
  };

  if (isLoading) {
    return (
      <SidebarWrapper userType="candidate">
        <div className="flex h-[calc(100vh-4rem)] items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin" />
        </div>
      </SidebarWrapper>
    );
  }

  return (
    <SidebarWrapper userType="candidate">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">CV Builder</h1>
            <p className="text-muted-foreground">
              Create and customize your professional CV
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="gap-1"
              onClick={handleImport}
            >
              <Upload className="h-4 w-4" />
              Import
            </Button>
            <Button
              size="sm"
              className="gap-1"
              onClick={handleSave}
              disabled={isSaving}
            >
              {isSaving ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="h-4 w-4" />
                  Save
                </>
              )}
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
              <TabsTrigger value="preview" className="gap-2">
                <Laptop className="h-4 w-4" />
                Preview
              </TabsTrigger>
            </TabsList>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                className="gap-1"
                onClick={handleDownload}
              >
                <Download className="h-4 w-4" />
                Download PDF
              </Button>
            </div>
          </div>

          <TabsContent value="editor" className="space-y-4">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First Name</Label>
                        <Input
                          id="first-name"
                          value={cvData.personal_info.first_name}
                          onChange={(e) =>
                            setCvData({
                              ...cvData,
                              personal_info: {
                                ...cvData.personal_info,
                                first_name: e.target.value,
                              },
                            })
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last Name</Label>
                        <Input
                          id="last-name"
                          value={cvData.personal_info.last_name}
                          onChange={(e) =>
                            setCvData({
                              ...cvData,
                              personal_info: {
                                ...cvData.personal_info,
                                last_name: e.target.value,
                              },
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="job-title">Professional Title</Label>
                      <Input
                        id="job-title"
                        value={cvData.personal_info.job_title}
                        onChange={(e) =>
                          setCvData({
                            ...cvData,
                            personal_info: {
                              ...cvData.personal_info,
                              job_title: e.target.value,
                            },
                          })
                        }
                      />
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={cvData.personal_info.email}
                          onChange={(e) =>
                            setCvData({
                              ...cvData,
                              personal_info: {
                                ...cvData.personal_info,
                                email: e.target.value,
                              },
                            })
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          value={cvData.personal_info.phone}
                          onChange={(e) =>
                            setCvData({
                              ...cvData,
                              personal_info: {
                                ...cvData.personal_info,
                                phone: e.target.value,
                              },
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Input
                        id="location"
                        value={cvData.personal_info.location}
                        onChange={(e) =>
                          setCvData({
                            ...cvData,
                            personal_info: {
                              ...cvData.personal_info,
                              location: e.target.value,
                            },
                          })
                        }
                      />
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="linkedin">LinkedIn</Label>
                        <Input
                          id="linkedin"
                          value={cvData.personal_info.linkedin}
                          onChange={(e) =>
                            setCvData({
                              ...cvData,
                              personal_info: {
                                ...cvData.personal_info,
                                linkedin: e.target.value,
                              },
                            })
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="website">Website/Portfolio</Label>
                        <Input
                          id="website"
                          value={cvData.personal_info.website}
                          onChange={(e) =>
                            setCvData({
                              ...cvData,
                              personal_info: {
                                ...cvData.personal_info,
                                website: e.target.value,
                              },
                            })
                          }
                        />
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
                        value={cvData.professional_summary}
                        onChange={(e) =>
                          setCvData({
                            ...cvData,
                            professional_summary: e.target.value,
                          })
                        }
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
                    <Button
                      size="sm"
                      variant="outline"
                      className="gap-1"
                      onClick={() =>
                        setCvData({
                          ...cvData,
                          work_experience: [
                            ...cvData.work_experience,
                            {
                              title: "",
                              company: "",
                              start_date: "",
                              end_date: "",
                              location: "",
                              description: "",
                              skills: [],
                            },
                          ],
                        })
                      }
                    >
                      <Plus className="h-4 w-4" />
                      Add Experience
                    </Button>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {cvData.work_experience.map((exp, index) => (
                      <div key={index} className="rounded-md border p-4">
                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <Input
                                className="h-7 border-0 p-0 text-base font-medium focus-visible:ring-0"
                                value={exp.title}
                                onChange={(e) => {
                                  const newExp = [...cvData.work_experience];
                                  newExp[index].title = e.target.value;
                                  setCvData({
                                    ...cvData,
                                    work_experience: newExp,
                                  });
                                }}
                                placeholder="Job Title"
                              />
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-7 w-7"
                                onClick={() => {
                                  const newExp = [...cvData.work_experience];
                                  newExp.splice(index, 1);
                                  setCvData({
                                    ...cvData,
                                    work_experience: newExp,
                                  });
                                }}
                              >
                                <Trash className="h-4 w-4 text-muted-foreground" />
                              </Button>
                            </div>
                            <div className="flex items-center gap-2">
                              <Input
                                className="h-6 border-0 p-0 text-sm text-muted-foreground focus-visible:ring-0"
                                value={exp.company}
                                onChange={(e) => {
                                  const newExp = [...cvData.work_experience];
                                  newExp[index].company = e.target.value;
                                  setCvData({
                                    ...cvData,
                                    work_experience: newExp,
                                  });
                                }}
                                placeholder="Company"
                              />
                            </div>
                          </div>
                          <div className="text-right text-sm">
                            <div className="flex items-center gap-2">
                              <Input
                                className="h-6 w-24 border-0 p-0 text-right focus-visible:ring-0"
                                value={exp.start_date}
                                onChange={(e) => {
                                  const newExp = [...cvData.work_experience];
                                  newExp[index].start_date = e.target.value;
                                  setCvData({
                                    ...cvData,
                                    work_experience: newExp,
                                  });
                                }}
                                placeholder="Start Date"
                              />
                              <span>-</span>
                              <Input
                                className="h-6 w-24 border-0 p-0 text-right focus-visible:ring-0"
                                value={exp.end_date}
                                onChange={(e) => {
                                  const newExp = [...cvData.work_experience];
                                  newExp[index].end_date = e.target.value;
                                  setCvData({
                                    ...cvData,
                                    work_experience: newExp,
                                  });
                                }}
                                placeholder="End Date"
                              />
                            </div>
                            <Input
                              className="h-6 border-0 p-0 text-right text-muted-foreground focus-visible:ring-0"
                              value={exp.location}
                              onChange={(e) => {
                                const newExp = [...cvData.work_experience];
                                newExp[index].location = e.target.value;
                                setCvData({
                                  ...cvData,
                                  work_experience: newExp,
                                });
                              }}
                              placeholder="Location"
                            />
                          </div>
                        </div>
                        <Separator className="my-4" />
                        <div className="space-y-2">
                          <Label
                            htmlFor={`job${index}-description`}
                            className="text-sm"
                          >
                            Description & Achievements
                          </Label>
                          <Textarea
                            id={`job${index}-description`}
                            className="min-h-[120px]"
                            value={exp.description}
                            onChange={(e) => {
                              const newExp = [...cvData.work_experience];
                              newExp[index].description = e.target.value;
                              setCvData({
                                ...cvData,
                                work_experience: newExp,
                              });
                            }}
                          />
                        </div>
                        <div className="mt-4 space-y-2">
                          <Label className="text-sm">Skills Used</Label>
                          <div className="flex flex-wrap gap-1.5">
                            {exp.skills.map((skill, skillIndex) => (
                              <Badge
                                key={skillIndex}
                                variant="secondary"
                                className="cursor-pointer"
                                onClick={() => {
                                  const newExp = [...cvData.work_experience];
                                  newExp[index].skills.splice(skillIndex, 1);
                                  setCvData({
                                    ...cvData,
                                    work_experience: newExp,
                                  });
                                }}
                              >
                                {skill}
                                <X className="ml-1 h-3 w-3" />
                              </Badge>
                            ))}
                            <Button
                              variant="outline"
                              size="sm"
                              className="h-6 gap-1 text-xs"
                              onClick={() => {
                                const skill = prompt("Enter skill:");
                                if (skill) {
                                  const newExp = [...cvData.work_experience];
                                  newExp[index].skills.push(skill);
                                  setCvData({
                                    ...cvData,
                                    work_experience: newExp,
                                  });
                                }
                              }}
                            >
                              <Plus className="h-3 w-3" />
                              Add Skill
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>Education</CardTitle>
                    <Button
                      size="sm"
                      variant="outline"
                      className="gap-1"
                      onClick={() =>
                        setCvData({
                          ...cvData,
                          education: [
                            ...cvData.education,
                            {
                              degree: "",
                              institution: "",
                              start_date: "",
                              end_date: "",
                              location: "",
                              description: "",
                            },
                          ],
                        })
                      }
                    >
                      <Plus className="h-4 w-4" />
                      Add Education
                    </Button>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {cvData.education.map((edu, index) => (
                      <div key={index} className="rounded-md border p-4">
                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <Input
                                className="h-7 border-0 p-0 text-base font-medium focus-visible:ring-0"
                                value={edu.degree}
                                onChange={(e) => {
                                  const newEdu = [...cvData.education];
                                  newEdu[index].degree = e.target.value;
                                  setCvData({
                                    ...cvData,
                                    education: newEdu,
                                  });
                                }}
                                placeholder="Degree"
                              />
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-7 w-7"
                                onClick={() => {
                                  const newEdu = [...cvData.education];
                                  newEdu.splice(index, 1);
                                  setCvData({
                                    ...cvData,
                                    education: newEdu,
                                  });
                                }}
                              >
                                <Trash className="h-4 w-4 text-muted-foreground" />
                              </Button>
                            </div>
                            <div className="flex items-center gap-2">
                              <Input
                                className="h-6 border-0 p-0 text-sm text-muted-foreground focus-visible:ring-0"
                                value={edu.institution}
                                onChange={(e) => {
                                  const newEdu = [...cvData.education];
                                  newEdu[index].institution = e.target.value;
                                  setCvData({
                                    ...cvData,
                                    education: newEdu,
                                  });
                                }}
                                placeholder="Institution"
                              />
                            </div>
                          </div>
                          <div className="text-right text-sm">
                            <div className="flex items-center gap-2">
                              <Input
                                className="h-6 w-16 border-0 p-0 text-right focus-visible:ring-0"
                                value={edu.start_date}
                                onChange={(e) => {
                                  const newEdu = [...cvData.education];
                                  newEdu[index].start_date = e.target.value;
                                  setCvData({
                                    ...cvData,
                                    education: newEdu,
                                  });
                                }}
                                placeholder="Start"
                              />
                              <span>-</span>
                              <Input
                                className="h-6 w-16 border-0 p-0 text-right focus-visible:ring-0"
                                value={edu.end_date}
                                onChange={(e) => {
                                  const newEdu = [...cvData.education];
                                  newEdu[index].end_date = e.target.value;
                                  setCvData({
                                    ...cvData,
                                    education: newEdu,
                                  });
                                }}
                                placeholder="End"
                              />
                            </div>
                            <Input
                              className="h-6 border-0 p-0 text-right text-muted-foreground focus-visible:ring-0"
                              value={edu.location}
                              onChange={(e) => {
                                const newEdu = [...cvData.education];
                                newEdu[index].location = e.target.value;
                                setCvData({
                                  ...cvData,
                                  education: newEdu,
                                });
                              }}
                              placeholder="Location"
                            />
                          </div>
                        </div>
                        <Separator className="my-4" />
                        <div className="space-y-2">
                          <Label
                            htmlFor={`edu${index}-description`}
                            className="text-sm"
                          >
                            Description
                          </Label>
                          <Textarea
                            id={`edu${index}-description`}
                            className="min-h-[80px]"
                            value={edu.description}
                            onChange={(e) => {
                              const newEdu = [...cvData.education];
                              newEdu[index].description = e.target.value;
                              setCvData({
                                ...cvData,
                                education: newEdu,
                              });
                            }}
                          />
                        </div>
                      </div>
                    ))}
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
                          value={cvData.skills.technical}
                          onChange={(e) =>
                            setCvData({
                              ...cvData,
                              skills: {
                                ...cvData.skills,
                                technical: e.target.value,
                              },
                            })
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="soft-skills">Soft Skills</Label>
                        <Textarea
                          id="soft-skills"
                          className="min-h-[80px]"
                          value={cvData.skills.soft}
                          onChange={(e) =>
                            setCvData({
                              ...cvData,
                              skills: {
                                ...cvData.skills,
                                soft: e.target.value,
                              },
                            })
                          }
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
                      {cvData.languages.map((lang, index) => (
                        <div key={index} className="grid gap-4 sm:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor={`language-${index}`}>
                              Language
                            </Label>
                            <Input
                              id={`language-${index}`}
                              value={lang.language}
                              onChange={(e) => {
                                const newLang = [...cvData.languages];
                                newLang[index].language = e.target.value;
                                setCvData({
                                  ...cvData,
                                  languages: newLang,
                                });
                              }}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor={`proficiency-${index}`}>
                              Proficiency
                            </Label>
                            <Select
                              value={lang.proficiency}
                              onValueChange={(value) => {
                                const newLang = [...cvData.languages];
                                newLang[index].proficiency = value;
                                setCvData({
                                  ...cvData,
                                  languages: newLang,
                                });
                              }}
                            >
                              <SelectTrigger id={`proficiency-${index}`}>
                                <SelectValue placeholder="Select proficiency" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="native">Native</SelectItem>
                                <SelectItem value="fluent">Fluent</SelectItem>
                                <SelectItem value="advanced">
                                  Advanced
                                </SelectItem>
                                <SelectItem value="intermediate">
                                  Intermediate
                                </SelectItem>
                                <SelectItem value="basic">Basic</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      ))}
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-1"
                        onClick={() =>
                          setCvData({
                            ...cvData,
                            languages: [
                              ...cvData.languages,
                              { language: "", proficiency: "intermediate" },
                            ],
                          })
                        }
                      >
                        <Plus className="h-4 w-4" />
                        Add Language
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="preview" className="space-y-4">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="col-span-2">
                <Card className="w-full">
                  <CardContent className="p-0">
                    <div className="flex justify-center w-full bg-muted/20">
                      <div
                        id="cv-preview"
                        className="w-full max-w-[600px] bg-white p-8 space-y-6"
                      >
                        <div className="text-center">
                          <h2 className="text-2xl font-bold">
                            {cvData.personal_info.first_name}{" "}
                            {cvData.personal_info.last_name}
                          </h2>
                          <p className="text-base text-muted-foreground">
                            {cvData.personal_info.job_title}
                          </p>
                          <div className="mt-2 flex items-center justify-center gap-4 text-xs text-muted-foreground">
                            <span>{cvData.personal_info.email}</span>
                            <span>•</span>
                            <span>{cvData.personal_info.phone}</span>
                            <span>•</span>
                            <span>{cvData.personal_info.location}</span>
                          </div>
                          <div className="mt-1 flex items-center justify-center gap-4 text-xs text-muted-foreground">
                            <span>{cvData.personal_info.linkedin}</span>
                            <span>•</span>
                            <span>{cvData.personal_info.website}</span>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-base font-semibold border-b pb-1">
                            Professional Summary
                          </h3>
                          <p className="mt-2 text-xs">
                            {cvData.professional_summary}
                          </p>
                        </div>

                        <div>
                          <h3 className="text-base font-semibold border-b pb-1">
                            Work Experience
                          </h3>
                          <div className="mt-4 space-y-4">
                            {cvData.work_experience.map((exp, index) => (
                              <div key={index}>
                                <div className="flex items-center justify-between">
                                  <div>
                                    <h4 className="text-sm font-medium">
                                      {exp.title}
                                    </h4>
                                    <p className="text-xs text-muted-foreground">
                                      {exp.company}
                                    </p>
                                  </div>
                                  <div className="text-right">
                                    <p className="text-xs">
                                      {exp.start_date} - {exp.end_date}
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                      {exp.location}
                                    </p>
                                  </div>
                                </div>
                                <p className="mt-2 whitespace-pre-line text-xs">
                                  {exp.description}
                                </p>
                                <div className="mt-2 flex flex-wrap gap-1.5">
                                  {exp.skills.map((skill, skillIndex) => (
                                    <Badge
                                      key={skillIndex}
                                      variant="outline"
                                      className="text-[10px]"
                                    >
                                      {skill}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h3 className="text-base font-semibold border-b pb-1">
                            Education
                          </h3>
                          <div className="mt-4 space-y-4">
                            {cvData.education.map((edu, index) => (
                              <div key={index}>
                                <div className="flex items-center justify-between">
                                  <div>
                                    <h4 className="text-sm font-medium">
                                      {edu.degree}
                                    </h4>
                                    <p className="text-xs text-muted-foreground">
                                      {edu.institution}
                                    </p>
                                  </div>
                                  <div className="text-right">
                                    <p className="text-xs">
                                      {edu.start_date} - {edu.end_date}
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                      {edu.location}
                                    </p>
                                  </div>
                                </div>
                                <p className="mt-1 text-xs">
                                  {edu.description}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2">
                          <div>
                            <h3 className="text-base font-semibold border-b pb-1">
                              Skills
                            </h3>
                            <div className="mt-2">
                              <h4 className="text-xs font-medium">
                                Technical Skills
                              </h4>
                              <p className="mt-1 text-xs">
                                {cvData.skills.technical}
                              </p>
                              <h4 className="mt-3 text-xs font-medium">
                                Soft Skills
                              </h4>
                              <p className="mt-1 text-xs">
                                {cvData.skills.soft}
                              </p>
                            </div>
                          </div>

                          <div>
                            <h3 className="text-base font-semibold border-b pb-1">
                              Languages
                            </h3>
                            <div className="mt-2 space-y-2">
                              {cvData.languages.map((lang, index) => (
                                <div
                                  key={index}
                                  className="flex justify-between"
                                >
                                  <span className="text-xs">
                                    {lang.language}
                                  </span>
                                  <span className="text-xs text-muted-foreground">
                                    {lang.proficiency}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            className="gap-1"
            onClick={() => router.back()}
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
          <Button onClick={handleSave} disabled={isSaving} className="gap-1">
            {isSaving ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Saving...
              </>
            ) : (
              <>
                Save CV
                <ArrowRight className="h-4 w-4" />
              </>
            )}
          </Button>
        </div>
      </div>
    </SidebarWrapper>
  );
}
