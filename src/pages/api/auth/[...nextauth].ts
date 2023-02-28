import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: "73486084466-4p63srioq1av2h9gq41m0fu40i7hu2pi.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],

  callbacks: {
    jwt: async ({ token, user, account }) => {
      user && (token.user = user);
      console.log(account);
      return token;
    },
    session: async ({ session, token }) => {
      session.user = token.user;
      return session;
    },
  },
});
