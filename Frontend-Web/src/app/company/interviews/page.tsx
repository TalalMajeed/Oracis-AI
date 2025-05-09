"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Bell,
  Building2,
  FileText,
  MessageSquare,
  Plus,
  Search,
  Settings,
  X
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Interviews() {
  const router = useRouter();
  const [showNotifications, setShowNotifications] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  // Mock data
  const interviews = [
    {
      id: 1,
      candidate: {
        name: "John Doe",
        title: "Senior Frontend Developer",
        email: "john@example.com"
      },
      job: {
        title: "Senior Frontend Developer",
        department: "Engineering"
      },
      type: "Technical",
      status: "scheduled",
      date: "2024-03-20",
      time: "10:00 AM",
      duration: "60 min",
      interviewers: ["Sarah Smith", "Mike Johnson"]
    },
    {
      id: 2,
      candidate: {
        name: "Jane Smith",
        title: "Product Manager",
        email: "jane@example.com"
      },
      job: {
        title: "Product Manager",
        department: "Product"
      },
      type: "HR",
      status: "completed",
      date: "2024-03-19",
      time: "2:00 PM",
      duration: "45 min",
      interviewers: ["David Wilson"]
    },
    {
      id: 3,
      candidate: {
        name: "Mike Johnson",
        title: "UX Designer",
        email: "mike@example.com"
      },
      job: {
        title: "UX Designer",
        department: "Design"
      },
      type: "Portfolio Review",
      status: "cancelled",
      date: "2024-03-18",
      time: "11:30 AM",
      duration: "90 min",
      interviewers: ["Lisa Brown", "Tom Davis"]
    }
  ];

  const filteredInterviews = interviews.filter(interview => {
    const matchesSearch = interview.candidate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         interview.job.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || interview.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-[var(--background-color)]">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-[#001230] text-white backdrop-blur">
        <div className="container max-w-none flex h-14 items-center px-[30px]">
          <div className="flex items-center mr-4">
            <Link href="/company/dashboard" className="flex items-center space-x-2">
              <Image
                src="/images/logo-square-transparent.png"
                alt="Oracis Logo"
                width={32}
                height={32}
              />
              <span className="font-bold text-xl">Oracis AI</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium flex-1 justify-center">
          <Link
              href="/company/profile"
              className="transition-colors hover:text-[#1d4ed8]"
            >
              Profile
            </Link>
            
            <Link
              href="/company/dashboard"
              className="transition-colors hover:text-[#1d4ed8]"
            >
              Dashboard
            </Link>
            <Link
              href="/company/jobs"
              className="transition-colors hover:text-[#1d4ed8]"
            >
              Jobs
            </Link>
            <Link
              href="/company/candidates"
              className="transition-colors hover:text-[#1d4ed8]"
            >
              Candidates
            </Link>
            <Link
              href="/company/interviews"
              className="transition-colors hover:text-[#1d4ed8]"
            >
              Interviews
            </Link>
            <Link
              href="/company/contracts"
              className="transition-colors hover:text-[#1d4ed8]"
            >
              Contracts
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4 ml-auto">
            <div className="relative">
              <button 
                className="p-2 rounded-full hover:bg-[#0c2b5e] transition-colors"
                onClick={() => setShowNotifications(!showNotifications)}
              >
                <Bell size={20} />
                <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full text-xs flex items-center justify-center">3</span>
              </button>
              
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg z-50 text-gray-800">
                  <div className="p-3 border-b flex justify-between items-center">
                    <h3 className="font-semibold">Notifications</h3>
                    <button 
                      className="text-gray-500 hover:text-gray-700"
                      onClick={() => setShowNotifications(false)}
                    >
                      <X size={16} />
                    </button>
                  </div>
                  <div className="max-h-80 overflow-y-auto">
                    {/* Notification items */}
                  </div>
                </div>
              )}
            </div>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-[#0c2b5e] transition-colors">
                  <div className="w-10 h-10 rounded-full bg-[#1d4ed8] flex items-center justify-center">
                    <Building2 size={20} className="text-white" />
                  </div>
                  <span className="hidden md:inline-block text-base">Company</span>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>Company Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/company/profile" className="flex items-center w-full">
                    <Building2 className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/company/settings" className="flex items-center w-full">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/login" className="flex items-center w-full">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Interviews</h1>
          <Button
            className="bg-[#001230] hover:bg-[#1d4ed8]"
            asChild
          >
            <Link href="/company/interviews/schedule">
              <Plus className="mr-2 h-4 w-4" />
              Schedule Interview
            </Link>
          </Button>
        </div>

        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                  <Input
                    placeholder="Search interviews..."
                    className="pl-9"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full md:w-48">
                <Select
                  value={statusFilter}
                  onValueChange={setStatusFilter}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="scheduled">Scheduled</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                    <SelectItem value="cancelled">Cancelled</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Candidate</TableHead>
                  <TableHead>Job</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Date & Time</TableHead>
                  <TableHead>Duration</TableHead>
                  <TableHead>Interviewers</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredInterviews.map((interview) => (
                  <TableRow key={interview.id}>
                    <TableCell>
                      <div className="flex flex-col">
                        <Link
                          href={`/company/candidates/${interview.candidate.name}`}
                          className="font-medium text-[#1d4ed8] hover:underline"
                        >
                          {interview.candidate.name}
                        </Link>
                        <span className="text-sm text-gray-500">{interview.candidate.title}</span>
                        <span className="text-sm text-gray-500">{interview.candidate.email}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <Link
                          href={`/company/jobs/${interview.job.title}`}
                          className="font-medium text-[#1d4ed8] hover:underline"
                        >
                          {interview.job.title}
                        </Link>
                        <span className="text-sm text-gray-500">{interview.job.department}</span>
                      </div>
                    </TableCell>
                    <TableCell>{interview.type}</TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <span>{new Date(interview.date).toLocaleDateString()}</span>
                        <span className="text-sm text-gray-500">{interview.time}</span>
                      </div>
                    </TableCell>
                    <TableCell>{interview.duration}</TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {interview.interviewers.map((interviewer, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs"
                          >
                            {interviewer}
                          </span>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        interview.status === "scheduled" ? "bg-blue-100 text-blue-800" :
                        interview.status === "completed" ? "bg-green-100 text-green-800" :
                        "bg-red-100 text-red-800"
                      }`}>
                        {interview.status.charAt(0).toUpperCase() + interview.status.slice(1)}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          asChild
                        >
                          <Link href={`/company/interviews/${interview.id}`}>
                            <FileText className="h-4 w-4" />
                          </Link>
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          asChild
                        >
                          <Link href={`/company/messages?candidate=${interview.candidate.name}`}>
                            <MessageSquare className="h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

// Missing component for LogOut icon
const LogOut = (props:any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" y1="12" x2="9" y2="12" />
    </svg>
  );
}; 