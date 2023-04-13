import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import UserAPI from "@api/UserAPI";
import { setCookie } from "nookies";

const callbacks = {
  signIn: async (params: any): Promise<any> => {
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
  async session({ session }: { session: any }) {
    // Send properties to the client, like an access_token from a provider.
    const { user } = session;
    const response = await UserAPI.googleLogin({
      userEmail: user.email,
      userName: user.name,
      imgUrl: user.image,
      introduction: "",
    });

    const token = response.atk;
    const userId = response.id;

    setCookie(null, "access_token", token, {
      maxAge: 30 * 24 * 60 * 60, // 30일간 유지
    });

    return {
      ...session,
      userId,
      accessToken: token,
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
  secret: process.env.NEXTAUTH_SECRET,
};

// @ts-ignore
export default (req: any, res: any) => NextAuth(req, res, options);
