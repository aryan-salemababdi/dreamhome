import NextAuth, { SessionStrategy } from "next-auth";
import { CredentialInput, CredentialsConfig } from "next-auth/providers/credentials";
import  CredentialsProvider from "next-auth/providers/credentials";
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
          // throw new Error("no credentials to log in as");
          return null
        }

        const { email, password } = credentials;

        try {
          await connectDB();
        } catch (error) {
          // throw new Error("مشکلی در سرور رخ داده است");
          return null
        }

        if (!email || !password){
          // throw new Error("لطفا اطلاعات معتبر وارد کنید");
          return null
        }
        const user = await User.findOne({ email });

        if (!user) {
          // throw new Error("لطفا ابتدا حساب کاربری ایجاد کنید");
          return null
        }

        const isValid = await verifyPassword(password, user.password);

        if (!isValid) {
          // throw new Error("ایمیل یا رمز عبور اشتباه است");
          return null
        }

        return {email} || null;
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export default authOptions;

export { handler as GET, handler as POST };
