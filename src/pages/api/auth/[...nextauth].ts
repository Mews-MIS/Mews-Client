import { NextApiHandler } from "next";
import NextAuth, { InitOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { JWT } from "next-auth/jwt";

interface User {
  name?: string;
  email?: string;
  image?: string;
}

interface Token extends JWT {
  accessToken?: string;
}

interface Session {
  user?: User;
  accessToken?: string;
}

const authHandler: NextApiHandler = async (req, res) => {
  const options: InitOptions = {
    providers: [
      GoogleProvider({
        clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
        clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
      }),
    ],
    callbacks: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      async jwt(token: Token, _user: User, account: any, _profile: any, _isNewUser: boolean) {
        // JWT 토큰을 생성할 때, 사용자 정보를 저장합니다.
        const newToken = { ...token, accessToken: account?.accessToken };
        return newToken;
      },
      async session(session: Session, token: Token) {
        // 세션에 사용자 정보를 저장합니다.
        const newSession = { ...session, accessToken: token.accessToken };
        return newSession;
      },
    },
    session: {
      jwt: true,
    },
    jwt: {},
  };

  await NextAuth(req, res, options);
};

export default authHandler;
