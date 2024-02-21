import { NextResponse } from "next/server";

export function middleware(request) {
  // get cookie
  let cookie = request.cookies.get("token");
  console.log("called..", request.url);
  if (request.nextUrl.pathname.startsWith("/auth")) {
    console.log(cookie);
    if (cookie?.value) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  } else {
    if (!cookie?.value) {
      return NextResponse.redirect(new URL("/auth/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/auth/:path*", "/categories", "/"],
};
