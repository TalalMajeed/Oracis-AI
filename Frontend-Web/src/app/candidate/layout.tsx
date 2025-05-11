"use client";

import { Bell, Eye, LogOut, MessageSquare, Settings, Star, User, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function CandidateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showNotifications, setShowNotifications] = useState(false);

  // Mock profile data
  const profile = {
    name: "Alex Johnson",
    notifications: [
      {
        id: 1,
        type: "message",
        content: "You have a new message from TechCorp",
        time: "2 hours ago",
      },
      {
        id: 2,
        type: "view",
        content: "Your profile was viewed by 3 companies",
        time: "Yesterday",
      },
      {
        id: 3,
        type: "match",
        content: "New job match found: UI Developer at WebSolutions",
        time: "2 days ago",
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen bg-[var(--background-color)]">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-[#001230] text-white backdrop-blur">
        <div className="container max-w-none flex h-14 items-center px-[30px]">
          <div className="flex items-center mr-4">
            <Link href="/candidate/dashboard" className="flex items-center space-x-2">
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
              href="/candidate/dashboard"
              className="transition-colors hover:text-[#1d4ed8]"
            >
              Dashboard
            </Link>
            <Link
              href="/candidate/jobs"
              className="transition-colors hover:text-[#1d4ed8]"
            >
              Find Jobs
            </Link>
            <Link
              href="/candidate/profile"
              className="transition-colors hover:text-[#1d4ed8]"
            >
              My Profile
            </Link>
            <Link
              href="/candidate/messages"
              className="transition-colors hover:text-[#1d4ed8]"
            >
              Messages
            </Link>
            <Link
              href="/candidate/contracts"
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
                <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full text-xs flex items-center justify-center">
                  {profile.notifications.length}
                </span>
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
                    {profile.notifications.map(notification => (
                      <div key={notification.id} className="p-3 border-b hover:bg-gray-100">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 mr-3">
                            {notification.type === "message" && <MessageSquare size={16} className="text-blue-500" />}
                            {notification.type === "view" && <Eye size={16} className="text-green-500" />}
                            {notification.type === "match" && <Star size={16} className="text-yellow-500" />}
                          </div>
                          <div>
                            <p className="text-sm">{notification.content}</p>
                            <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="p-2 text-center border-t">
                    <Link href="/candidate/notifications" className="text-sm text-[#1d4ed8] hover:underline">
                      View all notifications
                    </Link>
                  </div>
                </div>
              )}
            </div>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-[#1d4ed8] flex items-center justify-center">
                    <span className="text-white font-medium">{profile.name.charAt(0)}</span>
                  </div>
                  <span className="hidden md:inline-block">{profile.name}</span>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
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

      <main className="flex-1 container mx-auto px-4 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[var(--primary-color)] text-white py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © 2025 Oracis AI. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link
                href="/privacy-policy"
                className="text-gray-400 hover:text-white text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white text-sm"
              >
                Terms of Service
              </Link>
              <Link
                href="/support"
                className="text-gray-400 hover:text-white text-sm"
              >
                Support
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 