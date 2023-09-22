import {
  NextRequest,
  NextFetchEvent,
  userAgent,
  NextResponse,
} from "next/server";

export const config = {
  matcher: ["/((?!_next|api/auth).*)(.+)"],
};

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  const ua = userAgent(req);
  if (ua?.isBot) {
    return new Response("Plz don't be a bot. Be human.", { status: 403 });
  }
  // if (!req.cookies.has("carrotsession")) {
  //   return NextResponse.redirect(`${req.nextUrl.origin}/enter`);
  // }
  if (req.nextUrl.pathname.startsWith("/api")) {
    if (!req.url.includes("/enter") && !req.cookies.get("carrotsession")) {
      console.log("carrotsession");
      NextResponse.redirect(`${req.nextUrl.origin}/enter`);
    }
  }

  return NextResponse.next();
}
