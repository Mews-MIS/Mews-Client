import NextAuth, { SignInCallback, JWTCallback, SessionCallback } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import UserAPI from "@api/UserAPI";

type User = {
  user: {
    email?: string;
    name?: string;
    image?: string;
  };
};

type Account = {
  provider?: string;
  id?: string;
};

type Profile = Record<string, unknown>;

type JWT = {
  email?: string;
  name?: string;
  [key: string]: any;
};

type Session = {
  user: {
    email?: string;
    name?: string;
  };
};

const callbacks = {
  signIn: async (params: User): Promise<SignInCallback> => {
    const user = params as User;
    const { name, email, image } = user.user;
    console.log("datadsfadsfadsfadsfadsfaf", user.user);
    try {
      const response = await UserAPI.googleLogin({
        userEmail: email,
        userName: name,
        imgUrl: "",
        introduction: "",
      });
      return "/";
    } catch (error) {
      // 오류 처리
      throw new Error("Unable to sign in");
    }
  },
  jwt: async (
    token: JWT,
    user: User,
    account: Account,
    profile: Profile,
    isNewUser: boolean
  ): Promise<JWTCallback> => {
    const newToken: JWT = {
      ...token,
    };

    if (user) {
      newToken.email = user.user.email;
      newToken.name = user.user.name;
    }

    return newToken;
  },
  session: async (session: Session, token: JWT): Promise<SessionCallback> => {
    debugger;
    const newSession: Session = {
      ...session,
      user: {
        ...session.user,
        email: token.email,
        name: token.name,
      },
    };

    return newSession;
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
