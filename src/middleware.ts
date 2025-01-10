import createMiddleware from "next-intl/middleware";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
export default createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "fa"],

  // Used when no locale matches
  defaultLocale: "en",
  alternateLinks: false,
  localeDetection: false,
  localePrefix: "as-needed",
  pathnames: { // shortened for conciseness
    "/": { "en": "/", fa: "/" },
    "/blog": { "en": "/blog", "fr": "/blog", "es": "/blog" }

  },

});
// export function middleware(request: NextRequest) {
//   console.log(
//     "%c request.nextUrl.pathname",
//     request.nextUrl.origin + "/en" + request.nextUrl.pathname,
//     !(
//       request.nextUrl.pathname.startsWith("/en") ||
//       request.nextUrl.pathname.startsWith("/fa")
//     )
//   );
//   if (
//     !(
//       request.nextUrl.pathname.startsWith("/en") ||
//       request.nextUrl.pathname.startsWith("/fa")
//     )
//   ) {
//     return NextResponse.redirect(
//       request.nextUrl.origin + "/en" + request.nextUrl.pathname
//     );
//   }
//   return NextResponse.next();
// }

export const config = {

  // Match only internationalized pathnames
  matcher: ["/",  "/((?!api|_next|_vercel|.*\\..*).*)"],
};
