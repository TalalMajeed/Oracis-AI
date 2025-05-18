"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth-context";
import { Loader2 } from "lucide-react";

export default function DashboardRouter() {
  const router = useRouter();
  const { user, isAuthenticated } = useAuth();

  useEffect(() => {
    // If user is authenticated, redirect based on role
    if (isAuthenticated && user) {
      if (user.role === "candidate") {
        router.push("/dashboard/candidate");
      } else if (user.role === "employer") {
        router.push("/dashboard/employer");
      } else {
        // If role is not recognized, show an error or redirect to a generic page
        console.error("Unknown user role:", user.role);
        // For now, we'll redirect to home
        router.push("/");
      }
    } else if (!isAuthenticated) {
      // If not authenticated, redirect to login
      router.push("/login");
    }
  }, [user, isAuthenticated, router]);

  // Show a loading state while redirecting
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
        <p className="text-lg">Redirecting to your dashboard...</p>
      </div>
    </div>
  );
}
