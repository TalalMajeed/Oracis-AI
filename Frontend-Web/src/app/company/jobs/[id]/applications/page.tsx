"use client";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent
} from "@/components/ui/card";
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
    Calendar,
    FileText,
    MessageSquare,
    Search
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function JobApplications({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  // Mock data
  const jobDetails = {
    id: params.id,
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "Islamabad, Remote",
    type: "Full-time",
    totalApplications: 24
  };

  const applications = [
    {
      id: 1,
      candidate: {
        name: "John Doe",
        email: "john@example.com",
        location: "Islamabad, Pakistan",
        experience: "5 years"
      },
      status: "pending",
      appliedDate: "2024-03-15",
      lastUpdated: "2024-03-15",
      matchScore: 85
    },
    {
      id: 2,
      candidate: {
        name: "Jane Smith",
        email: "jane@example.com",
        location: "Lahore, Pakistan",
        experience: "7 years"
      },
      status: "reviewed",
      appliedDate: "2024-03-14",
      lastUpdated: "2024-03-16",
      matchScore: 92
    },
    {
      id: 3,
      candidate: {
        name: "Mike Johnson",
        email: "mike@example.com",
        location: "Karachi, Pakistan",
        experience: "4 years"
      },
      status: "interviewed",
      appliedDate: "2024-03-13",
      lastUpdated: "2024-03-17",
      matchScore: 78
    }
  ];

  const filteredApplications = applications.filter(application => {
    const matchesSearch = application.candidate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         application.candidate.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || application.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleStatusChange = (applicationId: number, newStatus: string) => {
    // TODO: Implement status update logic
    console.log(`Updating application ${applicationId} to ${newStatus}`);
  };

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
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold">Applications for {jobDetails.title}</h1>
              <p className="text-gray-500 mt-1">
                {jobDetails.department} • {jobDetails.location} • {jobDetails.type}
              </p>
            </div>
            <Button
              variant="outline"
              onClick={() => router.back()}
            >
              Back to Jobs
            </Button>
          </div>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                    <Input
                      placeholder="Search applications..."
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
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="reviewed">Reviewed</SelectItem>
                      <SelectItem value="interviewed">Interviewed</SelectItem>
                      <SelectItem value="rejected">Rejected</SelectItem>
                      <SelectItem value="hired">Hired</SelectItem>
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
                    <TableHead>Match Score</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Applied Date</TableHead>
                    <TableHead>Last Updated</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredApplications.map((application) => (
                    <TableRow key={application.id}>
                      <TableCell>
                        <div className="flex flex-col">
                          <Link
                            href={`/company/candidates/${application.id}`}
                            className="font-medium text-[#1d4ed8] hover:underline"
                          >
                            {application.candidate.name}
                          </Link>
                          <span className="text-sm text-gray-500">{application.candidate.email}</span>
                          <span className="text-sm text-gray-500">
                            {application.candidate.location} • {application.candidate.experience}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <div className="w-16 bg-gray-200 rounded-full h-2.5">
                            <div
                              className="bg-blue-600 h-2.5 rounded-full"
                              style={{ width: `${application.matchScore}%` }}
                            ></div>
                          </div>
                          <span className="ml-2 text-sm">{application.matchScore}%</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Select
                          value={application.status}
                          onValueChange={(value) => handleStatusChange(application.id, value)}
                        >
                          <SelectTrigger className="w-32">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="pending">Pending</SelectItem>
                            <SelectItem value="reviewed">Reviewed</SelectItem>
                            <SelectItem value="interviewed">Interviewed</SelectItem>
                            <SelectItem value="rejected">Rejected</SelectItem>
                            <SelectItem value="hired">Hired</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell>{new Date(application.appliedDate).toLocaleDateString()}</TableCell>
                      <TableCell>{new Date(application.lastUpdated).toLocaleDateString()}</TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            asChild
                          >
                            <Link href={`/company/candidates/${application.id}`}>
                              <FileText className="h-4 w-4" />
                            </Link>
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            asChild
                          >
                            <Link href={`/company/interviews/schedule?candidate=${application.id}&job=${jobDetails.id}`}>
                              <Calendar className="h-4 w-4" />
                            </Link>
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            asChild
                          >
                            <Link href={`/company/messages?candidate=${application.id}`}>
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
        </div>
      </main>
    </div>
  );
} 