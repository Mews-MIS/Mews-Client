import { useSession, signIn, signOut } from "next-auth/react";

export default function LoginButton() {
  const { data: session } = useSession();
  if (session) {
    // eslint-disable-next-line react/button-has-type
    return <button onClick={() => signOut()}>Sign out</button>;
  }
  // eslint-disable-next-line react/button-has-type
  return <button onClick={() => signIn("google")}>Sign in</button>;
}
