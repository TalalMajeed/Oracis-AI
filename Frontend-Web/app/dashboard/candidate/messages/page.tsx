"use client"

import type React from "react"

import { useState } from "react"
import { SidebarWrapper } from "@/components/sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, AtSign, Clock, File, Paperclip, Plus, Search, Send, Smile, User } from "lucide-react"

export default function CandidateMessages() {
  const [selectedChat, setSelectedChat] = useState<string | null>("1")
  const [messageText, setMessageText] = useState("")

  const handleSendMessage = () => {
    if (messageText.trim()) {
      // In a real app, this would send the message to the backend
      setMessageText("")
    }
  }

  return (
    <SidebarWrapper userType="candidate">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Messages</h1>
          <p className="text-muted-foreground">Communicate with employers and manage your conversations</p>
        </div>

        <div className="grid h-[calc(100vh-220px)] gap-6 md:grid-cols-3">
          <Card className="md:col-span-1">
            <CardHeader className="p-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Conversations</CardTitle>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search messages..." className="pl-8" />
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <Tabs defaultValue="all">
                <div className="border-b px-4">
                  <TabsList className="w-full justify-start rounded-none border-b-0 p-0">
                    <TabsTrigger
                      value="all"
                      className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-primary"
                    >
                      All
                    </TabsTrigger>
                    <TabsTrigger
                      value="unread"
                      className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-primary"
                    >
                      Unread
                    </TabsTrigger>
                    <TabsTrigger
                      value="archived"
                      className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-primary"
                    >
                      Archived
                    </TabsTrigger>
                  </TabsList>
                </div>
                <TabsContent value="all" className="m-0">
                  <div className="max-h-[calc(100vh-350px)] overflow-auto">
                    <div
                      className={`flex cursor-pointer items-center gap-3 border-b p-4 transition-colors hover:bg-muted/50 ${
                        selectedChat === "1" ? "bg-muted" : ""
                      }`}
                      onClick={() => setSelectedChat("1")}
                    >
                      <Avatar className="h-10 w-10">
                        <AvatarImage src="/placeholder.svg?height=40&width=40" />
                        <AvatarFallback>TC</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium">TechCorp Inc.</p>
                          <span className="text-xs text-muted-foreground">2h ago</span>
                        </div>
                        <p className="line-clamp-1 text-xs text-muted-foreground">
                          Thanks for your application! We'd like to schedule an interview...
                        </p>
                      </div>
                    </div>
                    <div
                      className={`flex cursor-pointer items-center gap-3 border-b p-4 transition-colors hover:bg-muted/50 ${
                        selectedChat === "2" ? "bg-muted" : ""
                      }`}
                      onClick={() => setSelectedChat("2")}
                    >
                      <Avatar className="h-10 w-10">
                        <AvatarImage src="/placeholder.svg?height=40&width=40" />
                        <AvatarFallback>IS</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <p className="text-sm font-medium">InnovateSoft</p>
                            <Badge className="h-1.5 w-1.5 rounded-full bg-primary p-0" />
                          </div>
                          <span className="text-xs text-muted-foreground">Yesterday</span>
                        </div>
                        <p className="line-clamp-1 text-xs text-muted-foreground">
                          Hi John, following up on our conversation about the Full Stack position...
                        </p>
                      </div>
                    </div>
                    <div
                      className={`flex cursor-pointer items-center gap-3 border-b p-4 transition-colors hover:bg-muted/50 ${
                        selectedChat === "3" ? "bg-muted" : ""
                      }`}
                      onClick={() => setSelectedChat("3")}
                    >
                      <Avatar className="h-10 w-10">
                        <AvatarImage src="/placeholder.svg?height=40&width=40" />
                        <AvatarFallback>DH</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium">DesignHub</p>
                          <span className="text-xs text-muted-foreground">2d ago</span>
                        </div>
                        <p className="line-clamp-1 text-xs text-muted-foreground">
                          We've reviewed your portfolio and are impressed with your work...
                        </p>
                      </div>
                    </div>
                    <div
                      className={`flex cursor-pointer items-center gap-3 border-b p-4 transition-colors hover:bg-muted/50 ${
                        selectedChat === "4" ? "bg-muted" : ""
                      }`}
                      onClick={() => setSelectedChat("4")}
                    >
                      <Avatar className="h-10 w-10">
                        <AvatarImage src="/placeholder.svg?height=40&width=40" />
                        <AvatarFallback>DS</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium">DataSystems</p>
                          <span className="text-xs text-muted-foreground">1w ago</span>
                        </div>
                        <p className="line-clamp-1 text-xs text-muted-foreground">
                          Thank you for your interest in our Backend Developer position...
                        </p>
                      </div>
                    </div>
                    <div
                      className={`flex cursor-pointer items-center gap-3 border-b p-4 transition-colors hover:bg-muted/50 ${
                        selectedChat === "5" ? "bg-muted" : ""
                      }`}
                      onClick={() => setSelectedChat("5")}
                    >
                      <Avatar className="h-10 w-10">
                        <AvatarImage src="/placeholder.svg?height=40&width=40" />
                        <AvatarFallback>CT</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium">CloudTech</p>
                          <span className="text-xs text-muted-foreground">2w ago</span>
                        </div>
                        <p className="line-clamp-1 text-xs text-muted-foreground">
                          We received your application for the DevOps Engineer position...
                        </p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="unread" className="m-0">
                  <div className="max-h-[calc(100vh-350px)] overflow-auto">
                    <div
                      className={`flex cursor-pointer items-center gap-3 border-b p-4 transition-colors hover:bg-muted/50 ${
                        selectedChat === "2" ? "bg-muted" : ""
                      }`}
                      onClick={() => setSelectedChat("2")}
                    >
                      <Avatar className="h-10 w-10">
                        <AvatarImage src="/placeholder.svg?height=40&width=40" />
                        <AvatarFallback>IS</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <p className="text-sm font-medium">InnovateSoft</p>
                            <Badge className="h-1.5 w-1.5 rounded-full bg-primary p-0" />
                          </div>
                          <span className="text-xs text-muted-foreground">Yesterday</span>
                        </div>
                        <p className="line-clamp-1 text-xs text-muted-foreground">
                          Hi John, following up on our conversation about the Full Stack position...
                        </p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="archived" className="m-0">
                  <div className="flex h-32 items-center justify-center text-sm text-muted-foreground">
                    No archived conversations
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <Card className="flex flex-col md:col-span-2">
            {selectedChat ? (
              <>
                <CardHeader className="flex flex-row items-center gap-4 p-4">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/placeholder.svg?height=40&width=40" />
                    <AvatarFallback>TC</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <CardTitle className="text-lg">TechCorp Inc.</CardTitle>
                    <CardDescription>Regarding: Senior Frontend Developer Position</CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <User className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Search className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 overflow-auto p-0">
                  <div className="flex flex-col gap-4 p-4">
                    <div className="flex items-center justify-center">
                      <span className="text-xs text-muted-foreground">May 12, 2025</span>
                    </div>
                    <div className="flex gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" />
                        <AvatarFallback>TC</AvatarFallback>
                      </Avatar>
                      <div className="max-w-[80%] rounded-lg bg-muted p-3">
                        <p className="text-sm">
                          Hi John, thank you for your application for the Senior Frontend Developer position at TechCorp
                          Inc. We were impressed with your experience and skills.
                        </p>
                        <div className="mt-1 flex items-center justify-end gap-1 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          <span>10:24 AM</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" />
                        <AvatarFallback>TC</AvatarFallback>
                      </Avatar>
                      <div className="max-w-[80%] rounded-lg bg-muted p-3">
                        <p className="text-sm">
                          We'd like to schedule an interview with you to discuss the position further. Are you available
                          sometime next week? Please let us know your availability.
                        </p>
                        <div className="mt-1 flex items-center justify-end gap-1 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          <span>10:26 AM</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end gap-3">
                      <div className="max-w-[80%] rounded-lg bg-primary p-3 text-primary-foreground">
                        <p className="text-sm">
                          Hello! Thank you for considering my application. I'm very interested in the position and would
                          love to schedule an interview.
                        </p>
                        <div className="mt-1 flex items-center justify-end gap-1 text-xs text-primary-foreground/80">
                          <Clock className="h-3 w-3" />
                          <span>11:42 AM</span>
                        </div>
                      </div>
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                    </div>
                    <div className="flex justify-end gap-3">
                      <div className="max-w-[80%] rounded-lg bg-primary p-3 text-primary-foreground">
                        <p className="text-sm">
                          I'm available Monday through Wednesday next week between 10 AM and 4 PM (PST). Would any of
                          those times work for you?
                        </p>
                        <div className="mt-1 flex items-center justify-end gap-1 text-xs text-primary-foreground/80">
                          <Clock className="h-3 w-3" />
                          <span>11:43 AM</span>
                        </div>
                      </div>
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                    </div>
                    <div className="flex items-center justify-center">
                      <span className="text-xs text-muted-foreground">Today</span>
                    </div>
                    <div className="flex gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" />
                        <AvatarFallback>TC</AvatarFallback>
                      </Avatar>
                      <div className="max-w-[80%] rounded-lg bg-muted p-3">
                        <p className="text-sm">
                          Great! Let's schedule the interview for Tuesday at 2 PM (PST). We'll be conducting a technical
                          interview followed by a discussion with the team lead.
                        </p>
                        <div className="mt-1 flex items-center justify-end gap-1 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          <span>9:15 AM</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" />
                        <AvatarFallback>TC</AvatarFallback>
                      </Avatar>
                      <div className="max-w-[80%] space-y-2 rounded-lg bg-muted p-3">
                        <p className="text-sm">
                          I've attached the interview details and some information about what to expect. Please review
                          it before the interview.
                        </p>
                        <div className="flex items-center gap-2 rounded-md border bg-background p-2">
                          <File className="h-8 w-8 text-blue-500" />
                          <div className="flex-1">
                            <p className="text-xs font-medium">Interview_Details.pdf</p>
                            <p className="text-xs text-muted-foreground">245 KB</p>
                          </div>
                          <Button variant="ghost" size="icon" className="h-7 w-7">
                            <ArrowRight className="h-3.5 w-3.5" />
                          </Button>
                        </div>
                        <div className="mt-1 flex items-center justify-end gap-1 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          <span>9:18 AM</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end gap-3">
                      <div className="max-w-[80%] rounded-lg bg-primary p-3 text-primary-foreground">
                        <p className="text-sm">
                          Thanks for the information! Tuesday at 2 PM works perfectly for me. I'll review the document
                          and prepare for the interview.
                        </p>
                        <div className="mt-1 flex items-center justify-end gap-1 text-xs text-primary-foreground/80">
                          <Clock className="h-3 w-3" />
                          <span>10:05 AM</span>
                        </div>
                      </div>
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                    </div>
                    <div className="flex justify-end gap-3">
                      <div className="max-w-[80%] rounded-lg bg-primary p-3 text-primary-foreground">
                        <p className="text-sm">
                          Is there anything specific I should prepare or any technologies I should brush up on before
                          the interview?
                        </p>
                        <div className="mt-1 flex items-center justify-end gap-1 text-xs text-primary-foreground/80">
                          <Clock className="h-3 w-3" />
                          <span>10:07 AM</span>
                        </div>
                      </div>
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-4">
                  <div className="flex w-full items-center gap-2">
                    <Button variant="ghost" size="icon" className="h-9 w-9 shrink-0">
                      <Paperclip className="h-5 w-5" />
                    </Button>
                    <div className="relative flex-1">
                      <Input
                        placeholder="Type a message..."
                        className="pr-20"
                        value={messageText}
                        onChange={(e) => setMessageText(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" && !e.shiftKey) {
                            e.preventDefault()
                            handleSendMessage()
                          }
                        }}
                      />
                      <div className="absolute right-2 top-1/2 flex -translate-y-1/2 items-center gap-1">
                        <Button variant="ghost" size="icon" className="h-7 w-7">
                          <Smile className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-7 w-7">
                          <AtSign className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <Button
                      size="icon"
                      className="h-9 w-9 shrink-0"
                      onClick={handleSendMessage}
                      disabled={!messageText.trim()}
                    >
                      <Send className="h-5 w-5" />
                    </Button>
                  </div>
                </CardFooter>
              </>
            ) : (
              <div className="flex h-full flex-col items-center justify-center p-8">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                  <MessageSquare className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="mt-4 text-lg font-medium">No conversation selected</h3>
                <p className="mt-2 text-center text-sm text-muted-foreground">
                  Select a conversation from the list or start a new one to begin messaging.
                </p>
                <Button className="mt-4 gap-1">
                  <Plus className="h-4 w-4" />
                  New Conversation
                </Button>
              </div>
            )}
          </Card>
        </div>
      </div>
    </SidebarWrapper>
  )
}

function MessageSquare(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  )
}
