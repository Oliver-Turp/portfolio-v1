import { NextResponse } from "next/server";
import setup from "@/components/maintenance/setup.json";

export function middleware(req) {
  const maintenanceMode = setup.maintenanceMode;

  // If URL is /errors/maintenance-mode, reject it with 404 using the not-found default page
  if (req.nextUrl.pathname === "/errors/maintenance-mode") {
    return NextResponse.error({ status: 404 });
  }

  if (maintenanceMode) {
    // redirect to /errors/maintenance-mode as status 503 but KEEP EXISTING URL
    return NextResponse.rewrite(
      new URL("/errors/maintenance-mode", req.nextUrl.origin),
      { status: 307 }
    );
  } else {
    return NextResponse.next();
  }
}

export const config = {
  matcher: [
    {
      source: "/((?!api|_next/static|_next/image|favicon.ico).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};
