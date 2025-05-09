"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent
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
  Plus,
  Search,
  Settings,
  X
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Contracts() {
  const router = useRouter();
  const [showNotifications, setShowNotifications] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");

  // Mock data
  const contracts = [
    {
      id: 1,
      candidate: {
        name: "John Doe",
        title: "Senior Frontend Developer",
        avatar: "J"
      },
      job: {
        title: "Senior Frontend Developer",
        department: "Engineering"
      },
      type: "Full-time",
      status: "active",
      startDate: "2024-04-01",
      endDate: "2025-03-31",
      salary: "$90,000",
      currency: "USD",
      location: "Remote",
      documents: 3
    },
    {
      id: 2,
      candidate: {
        name: "Jane Smith",
        title: "Product Manager",
        avatar: "J"
      },
      job: {
        title: "Product Manager",
        department: "Product"
      },
      type: "Contract",
      status: "pending",
      startDate: "2024-04-15",
      endDate: "2024-10-14",
      salary: "$85/hour",
      currency: "USD",
      location: "Hybrid",
      documents: 2
    },
    {
      id: 3,
      candidate: {
        name: "Mike Johnson",
        title: "UX Designer",
        avatar: "M"
      },
      job: {
        title: "UX Designer",
        department: "Design"
      },
      type: "Part-time",
      status: "expired",
      startDate: "2023-10-01",
      endDate: "2024-03-31",
      salary: "$45/hour",
      currency: "USD",
      location: "On-site",
      documents: 4
    }
  ];

  const filteredContracts = contracts.filter(contract => {
    const matchesSearch = contract.candidate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         contract.job.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || contract.status === statusFilter;
    const matchesType = typeFilter === "all" || contract.type === typeFilter;
    return matchesSearch && matchesStatus && matchesType;
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
          <h1 className="text-2xl font-bold">Contracts</h1>
          <Button
            className="bg-[#001230] hover:bg-[#1d4ed8]"
            asChild
          >
            <Link href="/company/contracts/create">
              <Plus className="mr-2 h-4 w-4" />
              Create Contract
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
                    placeholder="Search contracts..."
                    className="pl-9"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <Select
                  value={statusFilter}
                  onValueChange={setStatusFilter}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="expired">Expired</SelectItem>
                  </SelectContent>
                </Select>
                <Select
                  value={typeFilter}
                  onValueChange={setTypeFilter}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="Full-time">Full-time</SelectItem>
                    <SelectItem value="Part-time">Part-time</SelectItem>
                    <SelectItem value="Contract">Contract</SelectItem>
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
                  <TableHead>Status</TableHead>
                  <TableHead>Duration</TableHead>
                  <TableHead>Salary</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Documents</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredContracts.map((contract) => (
                  <TableRow key={contract.id}>
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-[#1d4ed8] flex items-center justify-center text-white">
                          {contract.candidate.avatar}
                        </div>
                        <div>
                          <Link
                            href={`/company/candidates/${contract.candidate.name}`}
                            className="font-medium text-[#1d4ed8] hover:underline"
                          >
                            {contract.candidate.name}
                          </Link>
                          <p className="text-sm text-gray-500">{contract.candidate.title}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <Link
                          href={`/company/jobs/${contract.job.title}`}
                          className="font-medium text-[#1d4ed8] hover:underline"
                        >
                          {contract.job.title}
                        </Link>
                        <p className="text-sm text-gray-500">{contract.job.department}</p>
                      </div>
                    </TableCell>
                    <TableCell>{contract.type}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        contract.status === "active" ? "bg-green-100 text-green-800" :
                        contract.status === "pending" ? "bg-yellow-100 text-yellow-800" :
                        "bg-red-100 text-red-800"
                      }`}>
                        {contract.status.charAt(0).toUpperCase() + contract.status.slice(1)}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">
                        <div>{new Date(contract.startDate).toLocaleDateString()}</div>
                        <div className="text-gray-500">to</div>
                        <div>{new Date(contract.endDate).toLocaleDateString()}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="font-medium">{contract.salary}</div>
                      <div className="text-sm text-gray-500">{contract.currency}</div>
                    </TableCell>
                    <TableCell>{contract.location}</TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <FileText className="h-4 w-4 text-gray-500 mr-1" />
                        <span>{contract.documents}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          asChild
                        >
                          <Link href={`/company/contracts/${contract.id}`}>
                            <FileText className="h-4 w-4" />
                          </Link>
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          asChild
                        >
                          <Link href={`/company/contracts/${contract.id}/edit`}>
                            <Edit className="h-4 w-4" />
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

const Edit = (props:any) => {
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
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
      <path d="m15 5 4 4" />
    </svg>
  );
}; 