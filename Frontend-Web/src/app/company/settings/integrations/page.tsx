"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Bell,
  Building2,
  CheckCircle2,
  Github,
  Linkedin,
  Mail,
  Settings,
  Slack,
  Zap
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Integrations() {
  const [showNotifications, setShowNotifications] = useState(false);

  // Mock integrations data
  const integrations = {
    connected: [
      {
        id: 1,
        name: "GitHub",
        icon: Github,
        description: "Connect your GitHub repositories for automated job posting",
        status: "Connected",
        lastSync: "2024-03-15T10:30:00",
      },
      {
        id: 2,
        name: "LinkedIn",
        icon: Linkedin,
        description: "Sync your LinkedIn company page and job postings",
        status: "Connected",
        lastSync: "2024-03-15T09:15:00",
      },
    ],
    available: [
      {
        id: 3,
        name: "Slack",
        icon: Slack,
        description: "Get notifications and updates in your Slack workspace",
        status: "Available",
      },
      {
        id: 4,
        name: "Gmail",
        icon: Mail,
        description: "Connect your Gmail account for email notifications",
        status: "Available",
      },
    ],
  };

  // Mock API keys
  const apiKeys = [
    {
      id: 1,
      name: "Production API Key",
      key: "••••••••••••••••••••••••••••••••",
      created: "2024-02-01",
      lastUsed: "2024-03-15",
      status: "Active",
    },
    {
      id: 2,
      name: "Development API Key",
      key: "••••••••••••••••••••••••••••••••",
      created: "2024-02-15",
      lastUsed: "2024-03-10",
      status: "Active",
    },
  ];

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
          <h1 className="text-2xl font-bold">Integrations & API</h1>
          <Button className="bg-[#001230] hover:bg-[#1d4ed8]">
            <Zap className="mr-2 h-4 w-4" />
            New Integration
          </Button>
        </div>

        <Tabs defaultValue="integrations" className="space-y-6">
          <TabsList>
            <TabsTrigger value="integrations">Integrations</TabsTrigger>
            <TabsTrigger value="api">API Keys</TabsTrigger>
          </TabsList>

          <TabsContent value="integrations" className="space-y-6">
            {/* Connected Integrations */}
            <div>
              <h2 className="text-lg font-semibold mb-4">Connected Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {integrations.connected.map((integration) => (
                  <Card key={integration.id}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <integration.icon className="h-6 w-6" />
                          <CardTitle className="text-lg">{integration.name}</CardTitle>
                        </div>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          <CheckCircle2 className="mr-1 h-3 w-3" />
                          {integration.status}
                        </span>
                      </div>
                      <CardDescription>
                        {integration.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Last synced: {new Date(integration.lastSync).toLocaleString()}
                      </p>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline">Configure</Button>
                      <Button variant="outline" className="text-red-500 hover:text-red-600">
                        Disconnect
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>

            {/* Available Integrations */}
            <div>
              <h2 className="text-lg font-semibold mb-4">Available Integrations</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {integrations.available.map((integration) => (
                  <Card key={integration.id}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <integration.icon className="h-6 w-6" />
                          <CardTitle className="text-lg">{integration.name}</CardTitle>
                        </div>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          {integration.status}
                        </span>
                      </div>
                      <CardDescription>
                        {integration.description}
                      </CardDescription>
                    </CardHeader>
                    <CardFooter>
                      <Button className="w-full">Connect</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="api" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>API Keys</CardTitle>
                <CardDescription>
                  Manage your API keys for programmatic access
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {apiKeys.map((key) => (
                    <div
                      key={key.id}
                      className="flex items-center justify-between p-4 border rounded-lg"
                    >
                      <div>
                        <h3 className="font-medium">{key.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          Created: {new Date(key.created).toLocaleDateString()}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Last used: {new Date(key.lastUsed).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="font-mono text-sm">{key.key}</span>
                        <div className="flex items-center space-x-2">
                          <Button variant="outline" size="sm">
                            Copy
                          </Button>
                          <Button variant="outline" size="sm" className="text-red-500 hover:text-red-600">
                            Revoke
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button>
                  <Zap className="mr-2 h-4 w-4" />
                  Generate New API Key
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>API Documentation</CardTitle>
                <CardDescription>
                  Learn how to integrate with our API
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Our API provides programmatic access to Oracis AI's features. Use it to automate your hiring process, sync data, and build custom integrations.
                </p>
                <Button variant="outline" className="w-full">
                  View API Documentation
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
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