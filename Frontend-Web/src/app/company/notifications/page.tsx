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
  Bell,
  Building2,
  Calendar,
  Check,
  FileText,
  MessageSquare,
  Settings,
  Trash2,
  X
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Notifications() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("all");

  // Mock data for notifications
  const notifications = [
    {
      id: 1,
      type: "application",
      title: "New Application Received",
      message: "John Doe applied for Senior Frontend Developer position",
      timestamp: "2024-03-15T10:00:00Z",
      read: false,
      link: "/company/candidates/1",
    },
    {
      id: 2,
      type: "interview",
      title: "Interview Scheduled",
      message: "Interview with Sarah Smith for Product Manager position is scheduled for tomorrow",
      timestamp: "2024-03-15T09:30:00Z",
      read: true,
      link: "/company/interviews/1",
    },
    {
      id: 3,
      type: "message",
      title: "New Message",
      message: "You have a new message from Michael Brown regarding the Backend Developer position",
      timestamp: "2024-03-15T09:00:00Z",
      read: false,
      link: "/company/messages/1",
    },
    {
      id: 4,
      type: "contract",
      title: "Contract Signed",
      message: "Emily Johnson has signed the contract for UI/UX Designer position",
      timestamp: "2024-03-14T16:00:00Z",
      read: true,
      link: "/company/contracts/1",
    },
    {
      id: 5,
      type: "system",
      title: "System Update",
      message: "New features have been added to the platform. Check out the latest updates!",
      timestamp: "2024-03-14T14:00:00Z",
      read: false,
      link: "/company/settings",
    },
  ];

  const filteredNotifications = notifications.filter((notification) => {
    const matchesSearch = notification.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      notification.message.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType === "all" || notification.type === selectedType;
    return matchesSearch && matchesType;
  });

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "application":
        return <FileText className="h-5 w-5" />;
      case "interview":
        return <Calendar className="h-5 w-5" />;
      case "message":
        return <MessageSquare className="h-5 w-5" />;
      case "contract":
        return <FileText className="h-5 w-5" />;
      case "system":
        return <Bell className="h-5 w-5" />;
      default:
        return <Bell className="h-5 w-5" />;
    }
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
          <h1 className="text-2xl font-bold">Notifications</h1>
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="flex items-center">
              <Check className="mr-2 h-4 w-4" />
              Mark All as Read
            </Button>
            <Button variant="outline" className="flex items-center text-red-500 hover:text-red-600">
              <Trash2 className="mr-2 h-4 w-4" />
              Clear All
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Filters */}
          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle>Filters</CardTitle>
              <CardDescription>
                Filter your notifications
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Search</label>
                <Input
                  placeholder="Search notifications..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Type</label>
                <Select
                  value={selectedType}
                  onValueChange={setSelectedType}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="application">Applications</SelectItem>
                    <SelectItem value="interview">Interviews</SelectItem>
                    <SelectItem value="message">Messages</SelectItem>
                    <SelectItem value="contract">Contracts</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Notifications List */}
          <Card className="md:col-span-3">
            <CardHeader>
              <CardTitle>All Notifications</CardTitle>
              <CardDescription>
                Your recent notifications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredNotifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-4 rounded-lg border ${
                      notification.read ? "bg-white" : "bg-blue-50"
                    }`}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`p-2 rounded-full ${
                        notification.read ? "bg-gray-100" : "bg-blue-100"
                      }`}>
                        {getNotificationIcon(notification.type)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium">{notification.title}</h3>
                          <span className="text-sm text-muted-foreground">
                            {new Date(notification.timestamp).toLocaleString()}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          {notification.message}
                        </p>
                        <div className="flex items-center space-x-2 mt-2">
                          <Button
                            variant="link"
                            className="h-auto p-0 text-sm"
                            asChild
                          >
                            <Link href={notification.link}>
                              View Details
                            </Link>
                          </Button>
                          {!notification.read && (
                            <Button
                              variant="link"
                              className="h-auto p-0 text-sm"
                            >
                              Mark as Read
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
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