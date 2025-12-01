import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

// ✅ TEMP: check environment variables
console.log("GOOGLE_CLIENT_ID =", process.env.GOOGLE_CLIENT_ID);
console.log("GOOGLE_CLIENT_SECRET =", process.env.GOOGLE_CLIENT_SECRET);
console.log("NEXTAUTH_URL =", process.env.NEXTAUTH_URL);
console.log("NEXTAUTH_SECRET =", process.env.NEXTAUTH_SECRET);

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  debug: true, // optional
});

export { handler as GET, handler as POST };
