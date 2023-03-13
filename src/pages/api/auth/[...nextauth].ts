import NextAuth, { SignInCallback, JWTCallback, SessionCallback } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import UserAPI from "@api/UserAPI";
import { setCookie } from "nookies";

const callbacks = {
  signIn: async (params: any): Promise<SignInCallback> => {
    const { email, name, image } = params.user;
    try {
      const response = await UserAPI.googleLogin({
        userEmail: email,
        userName: name,
        imgUrl: image,
        introduction: "",
      });

      const token = response.atk;
      setCookie(null, "access_token", token, {
        maxAge: 30 * 24 * 60 * 60, // 30일간 유지
      });

      return true;
    } catch (error) {
      // 오류 처리
      throw new Error("Unable to sign in");
    }
  },
  async session({ session, token }) {
    // Send properties to the client, like an access_token from a provider.
    return {
      ...session,
      accessToken: token.accessToken,
      response: session.response,
    };
  },
};

const options = {
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks,
};

// @ts-ignore
export default (req: any, res: any) => NextAuth(req, res, options);
