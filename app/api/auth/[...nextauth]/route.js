import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { signIn } from "next-auth/react";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: "",
    }),
  ],
  async session({ session }) {},
  async signIn({ profile }) {},
});

export { handler as GET, handler as POST };
