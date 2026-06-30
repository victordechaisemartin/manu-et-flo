import { createServerClient } from "@supabase/ssr";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  let supabaseResponse = NextResponse.next({ request: req });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return req.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => req.cookies.set(name, value));
          supabaseResponse = NextResponse.next({ request: req });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  // getUser() verifies the JWT with the Supabase Auth server on every call.
  // getSession() only reads cookies and can serve stale/tampered data.
  const { data: { user } } = await supabase.auth.getUser();

  const isAuthPage  = req.nextUrl.pathname.startsWith("/auth");
  const isAdminPage = req.nextUrl.pathname.startsWith("/admin");

  if (!user && !isAuthPage) {
    const url = req.nextUrl.clone();
    url.pathname = "/auth";
    return NextResponse.redirect(url);
  }

  if (user && isAuthPage) {
    const url = req.nextUrl.clone();
    url.pathname = "/announcements";
    return NextResponse.redirect(url);
  }

  // /admin routes pass through here for authenticated users.
  // Non-admins hitting /admin are redirected by app/admin/layout.tsx.
  void isAdminPage;

  return supabaseResponse;
}

export const config = {
  // Exclude _next internals, favicon, and any file with an extension
  // (images, manifest.json, fonts, etc.) so static assets in /public
  // are always served without an auth check.
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico|json|woff|woff2|ttf|otf)$).*)"],
};
