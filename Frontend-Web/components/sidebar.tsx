"use client";

import type React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  BarChart2,
  Briefcase,
  FileText,
  Home,
  LogOut,
  MessageSquare,
  Search,
  Settings,
  User,
  Users,
  Zap,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface SidebarWrapperProps {
  children: React.ReactNode;
  userType: "candidate" | "employer";
}

export function SidebarWrapper({ children, userType }: SidebarWrapperProps) {
  const pathname = usePathname();

  const candidateNavItems = [
    {
      title: "Dashboard",
      href: "/candidate",
      icon: Home,
    },
    {
      title: "AI Recommender",
      href: "/candidate/ai-recommender",
      icon: Zap,
    },
    {
      title: "Search Jobs",
      href: "/candidate/search",
      icon: Search,
    },
    {
      title: "My Profile",
      href: "/dashboard/candidate/profile",
      icon: User,
    },
    {
      title: "CV Builder",
      href: "/dashboard/candidate/cv-builder",
      icon: FileText,
    },
    {
      title: "Messages",
      href: "/dashboard/candidate/messages",
      icon: MessageSquare,
    },
    {
      title: "Settings",
      href: "/dashboard/candidate/settings",
      icon: Settings,
    },
  ];

  const employerNavItems = [
    {
      title: "Dashboard",
      href: "/dashboard/employer",
      icon: Home,
    },
    {
      title: "AI Finder",
      href: "/dashboard/employer/ai-finder",
      icon: Zap,
    },
    {
      title: "Search Candidates",
      href: "/dashboard/employer/search",
      icon: Search,
    },
    {
      title: "Job Postings",
      href: "/dashboard/employer/jobs",
      icon: Briefcase,
    },
    {
      title: "Analytics",
      href: "/dashboard/employer/analytics",
      icon: BarChart2,
    },
    {
      title: "Team",
      href: "/dashboard/employer/team",
      icon: Users,
    },
    {
      title: "Messages",
      href: "/dashboard/employer/messages",
      icon: MessageSquare,
    },
    {
      title: "Settings",
      href: "/dashboard/employer/settings",
      icon: Settings,
    },
  ];

  const navItems =
    userType === "candidate" ? candidateNavItems : employerNavItems;
  const userName = userType === "candidate" ? "John Doe" : "Acme Corp";
  const userRole =
    userType === "candidate" ? "Software Engineer" : "Technology";

  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <Sidebar>
          <SidebarHeader className="border-b border-border">
            <div className="flex items-center gap-2 px-2">
              <div className="flex h-10 w-10 items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="Oracis AI Logo"
                  width={40}
                  height={40}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-semibold">Oracis AI</span>
                <span className="text-xs text-muted-foreground">
                  {userType === "candidate"
                    ? "Candidate Portal"
                    : "Employer Portal"}
                </span>
              </div>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Navigation</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {navItems.map((item) => (
                    <SidebarMenuItem key={item.href}>
                      <SidebarMenuButton
                        asChild
                        isActive={pathname === item.href}
                        tooltip={item.title}
                      >
                        <Link href={item.href}>
                          <item.icon className="h-4 w-4" />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter className="border-t border-border p-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="w-full justify-start p-2">
                  <Avatar className="h-8 w-8 mr-2">
                    <AvatarImage src={`/placeholder.svg?height=32&width=32`} />
                    <AvatarFallback>
                      {userName
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col items-start text-left">
                    <span className="text-sm font-medium">{userName}</span>
                    <span className="text-xs text-muted-foreground">
                      {userRole}
                    </span>
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem asChild>
                  <Link href={`/${userType}/profile`}>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href={`/${userType}/settings`}>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarFooter>
        </Sidebar>
        <div className="flex-1 overflow-auto">
          <div className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b border-border bg-background px-6">
            <SidebarTrigger />
            <div className="ml-auto flex items-center gap-4">
              <Button variant="outline" size="sm">
                Upgrade Plan
              </Button>
              <Button size="sm">
                {userType === "candidate" ? "Create CV" : "Post Job"}
              </Button>
            </div>
          </div>
          <main className="p-6">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
