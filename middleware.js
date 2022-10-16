import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

// export async function middleware(req) {
//   const url = req.nextUrl.clone()
//   url.pathname = '/Login'
//   if (req.nextUrl.pathname === "/Deals") {
//     const session = await getToken({
//       req,
//       secret: process.env.JWT_SECRET,
//       secureCookie: process.env.NODE_ENV === "production",
//     });
//     console.log(session)
//     // You could also check for any property on the session object,
//     // like role === "admin" or name === "John Doe", etc.
//     if (!session) return NextResponse.redirect(url);
//     // If user is authenticated, continue.
//   }
// }


// export async function middleware(req) {
//   const { pathname, origin } = req.nextUrl;

//   if (pathname === '/Deals') {
//     const session = await getToken({
//       req,
//       secret: process.env.JWT_SECRET,
//       secureCookie: process.env.NODE_ENV === 'production',
//     });
//     if (!session) return NextResponse.redirect(`${origin}/Login`);
//   }
// }
import { withAuth } from "next-auth/middleware"

// More on how NextAuth.js middleware works: https://next-auth.js.org/configuration/nextjs#middleware
export default withAuth({
  callbacks: {
    authorized({ req, token }) {
      // // `/admin` requires admin role
      // if (req.nextUrl.pathname === "/admin") {
      //   return token?.userRole === "admin"
      // }
      // `/me` only requires the user to be logged in
      return !!token
    },
  },
})

export const config = { matcher: ["/PostForm"] }