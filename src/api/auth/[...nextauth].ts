import Nextauth from "@pages/api/auth/[...nextauth]";
import GoogleProvider from "next-auth/providers/google";

export default Nextauth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
});
