"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { X } from "lucide-react"

interface SearchFiltersProps {
  type: "job" | "candidate"
}

export function SearchFilters({ type }: SearchFiltersProps) {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([])
  const [matchScore, setMatchScore] = useState([70])

  const handleAddSkill = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && e.currentTarget.value) {
      if (!selectedSkills.includes(e.currentTarget.value)) {
        setSelectedSkills([...selectedSkills, e.currentTarget.value])
      }
      e.currentTarget.value = ""
    }
  }

  const handleRemoveSkill = (skill: string) => {
    setSelectedSkills(selectedSkills.filter((s) => s !== skill))
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-4">Filters</h3>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="search">
              {type === "job" ? "Job Title, Keywords, or Company" : "Name, Title, or Skills"}
            </Label>
            <Input
              id="search"
              placeholder={
                type === "job" ? "e.g. Software Engineer, React, Google" : "e.g. John Doe, Frontend Developer, React"
              }
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Input id="location" placeholder="City, State, or Remote" />
          </div>

          {type === "job" && (
            <div className="space-y-2">
              <Label htmlFor="job-type">Job Type</Label>
              <Select defaultValue="all">
                <SelectTrigger id="job-type">
                  <SelectValue placeholder="Select job type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="full-time">Full-time</SelectItem>
                  <SelectItem value="part-time">Part-time</SelectItem>
                  <SelectItem value="contract">Contract</SelectItem>
                  <SelectItem value="internship">Internship</SelectItem>
                  <SelectItem value="remote">Remote</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}

          {type === "candidate" && (
            <div className="space-y-2">
              <Label htmlFor="experience">Experience Level</Label>
              <Select defaultValue="all">
                <SelectTrigger id="experience">
                  <SelectValue placeholder="Select experience level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="entry">Entry Level</SelectItem>
                  <SelectItem value="mid">Mid Level</SelectItem>
                  <SelectItem value="senior">Senior Level</SelectItem>
                  <SelectItem value="executive">Executive</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="skills">
              <AccordionTrigger>Skills</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="add-skill">Add Skills</Label>
                    <Input id="add-skill" placeholder="Type a skill and press Enter" onKeyDown={handleAddSkill} />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedSkills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="pl-2">
                        {skill}
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-auto p-0 pl-1"
                          onClick={() => handleRemoveSkill(skill)}
                        >
                          <X className="h-3 w-3" />
                        </Button>
                      </Badge>
                    ))}
                    {selectedSkills.length === 0 && (
                      <span className="text-sm text-muted-foreground">No skills added yet</span>
                    )}
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {type === "job" && (
              <AccordionItem value="salary">
                <AccordionTrigger>Salary Range</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <Select defaultValue="any">
                      <SelectTrigger>
                        <SelectValue placeholder="Select salary range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="any">Any Salary</SelectItem>
                        <SelectItem value="30k-50k">$30,000 - $50,000</SelectItem>
                        <SelectItem value="50k-80k">$50,000 - $80,000</SelectItem>
                        <SelectItem value="80k-100k">$80,000 - $100,000</SelectItem>
                        <SelectItem value="100k-150k">$100,000 - $150,000</SelectItem>
                        <SelectItem value="150k+">$150,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </AccordionContent>
              </AccordionItem>
            )}

            <AccordionItem value="ai-match">
              <AccordionTrigger>AI Match Score</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label>Minimum Match Score</Label>
                      <span className="text-sm">{matchScore[0]}%</span>
                    </div>
                    <Slider value={matchScore} onValueChange={setMatchScore} max={100} step={5} />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-base">AI Features</Label>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="ai-profile" />
                        <label
                          htmlFor="ai-profile"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Use my profile for AI matching
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="ai-recommendations" defaultChecked />
                        <label
                          htmlFor="ai-recommendations"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Show AI recommendations
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <div className="flex gap-2">
        <Button className="flex-1">Apply Filters</Button>
        <Button variant="outline">Reset</Button>
      </div>
    </div>
  )
}
