import NextAuth, { SessionStrategy } from "next-auth";
import { CredentialInput, CredentialsConfig } from "next-auth/providers/credentials";
import  CredentialsProvider  from "next-auth/providers/credentials"; // تغییر در اینجا
import User from "@/models/User";
import { verifyPassword } from "@/utils/auth/auth";
import { connectDB } from "@/utils/connectDB";
import { NextApiRequest, NextApiResponse } from "next";

// interfaces
interface AuthOptions {
  session: {
    strategy: SessionStrategy;
  };
  providers: CredentialsConfig<Record<string, CredentialInput>>[];
}

const authOptions: AuthOptions = {
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      async authorize(credentials: Record<string, string>) {
        if (!credentials) {
          return null;
        }

        const { email, password } = credentials;

        try {
          await connectDB();
        } catch (error) {
          return null;
        }

        if (!email || !password) {
          return null;
        }
        const user = await User.findOne({ email });

        if (!user) {
          return null;
        }

        const isValid = await verifyPassword(password, user.password);

        if (!isValid) {
          return null;
        }

        return { email };
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export default handler;

export { handler as GET, handler as POST };
