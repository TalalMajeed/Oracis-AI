"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
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
  Plus,
  Settings,
  Trash2
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function TeamManagement() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRole, setSelectedRole] = useState("all");

  // Mock team data
  const teamMembers = [
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@techcorp.example.com",
      role: "Admin",
      department: "HR",
      status: "Active",
      avatar: "/images/avatars/john-smith.jpg",
      lastActive: "2024-03-15T10:00:00Z",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah.johnson@techcorp.example.com",
      role: "Recruiter",
      department: "HR",
      status: "Active",
      avatar: "/images/avatars/sarah-johnson.jpg",
      lastActive: "2024-03-15T09:30:00Z",
    },
    {
      id: 3,
      name: "Michael Brown",
      email: "michael.brown@techcorp.example.com",
      role: "Interviewer",
      department: "Engineering",
      status: "Active",
      avatar: "/images/avatars/michael-brown.jpg",
      lastActive: "2024-03-15T09:00:00Z",
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily.davis@techcorp.example.com",
      role: "Recruiter",
      department: "HR",
      status: "Inactive",
      avatar: "/images/avatars/emily-davis.jpg",
      lastActive: "2024-03-14T16:00:00Z",
    },
  ];

  const filteredTeamMembers = teamMembers.filter((member) => {
    const matchesSearch = member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = selectedRole === "all" || member.role === selectedRole;
    return matchesSearch && matchesRole;
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
            </div>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-[#1d4ed8] flex items-center justify-center">
                    <Building2 size={16} className="text-white" />
                  </div>
                  <span className="hidden md:inline-block">Company</span>
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
          <h1 className="text-2xl font-bold">Team Management</h1>
          <Button className="bg-[#001230] hover:bg-[#1d4ed8]">
            <Plus className="mr-2 h-4 w-4" />
            Add Team Member
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {/* Filters */}
          <Card>
            <CardHeader>
              <CardTitle>Filters</CardTitle>
              <CardDescription>
                Filter team members
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <Input
                    placeholder="Search by name or email..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="w-full md:w-[200px]">
                  <Select
                    value={selectedRole}
                    onValueChange={setSelectedRole}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Roles</SelectItem>
                      <SelectItem value="Admin">Admin</SelectItem>
                      <SelectItem value="Recruiter">Recruiter</SelectItem>
                      <SelectItem value="Interviewer">Interviewer</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Team Members Table */}
          <Card>
            <CardHeader>
              <CardTitle>Team Members</CardTitle>
              <CardDescription>
                Manage your team members and their roles
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Member</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Last Active</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredTeamMembers.map((member) => (
                    <TableRow key={member.id}>
                      <TableCell>
                        <div className="flex items-center space-x-3">
                          <Image
                            src={member.avatar}
                            alt={member.name}
                            width={40}
                            height={40}
                            className="rounded-full"
                          />
                          <div>
                            <p className="font-medium">{member.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {member.email}
                            </p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{member.role}</TableCell>
                      <TableCell>{member.department}</TableCell>
                      <TableCell>
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            member.status === "Active"
                              ? "bg-green-100 text-green-800"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {member.status}
                        </span>
                      </TableCell>
                      <TableCell>
                        {new Date(member.lastActive).toLocaleString()}
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="h-8 w-8 p-0"
                          >
                            <Settings className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="h-8 w-8 p-0 text-red-500 hover:text-red-600"
                          >
                            <Trash2 className="h-4 w-4" />
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

// Missing components for icons
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