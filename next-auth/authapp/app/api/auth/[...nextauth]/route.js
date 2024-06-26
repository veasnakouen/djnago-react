import { connectMongoDb } from "@/lib/mongodb";
import User from "@/models/user";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},

      async authorize(credentials) {
        const { email, password } = credentials;
        try {
          await connectMongoDb();
          const user = await User.findOne({ email });
          console.log(user);
          if (!user) {
            return null;
          }
          //check password with password in db
          const passwordMatch = await bcrypt.compare(password, user.password);

          if (!passwordMatch) {
            return null;
          }
          return user;
        } catch (error) {
          console.log("Error :", error);
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secrete: process.env.NEXTAUTH_SECRET,
  // page that we use for login
  pages: {
    signIn: "/",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
