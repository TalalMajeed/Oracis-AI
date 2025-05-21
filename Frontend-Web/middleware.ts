import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const { pathname } = request.nextUrl;

  // Check if the path is a dashboard route
  if (pathname.startsWith("/dashboard")) {
    if (!token) {
      // Redirect to login if no token is present
      return NextResponse.redirect(new URL("/login", request.url));
    }

    // Get user data from localStorage (this will be handled client-side)
    // The actual user type check will be done in the components
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
