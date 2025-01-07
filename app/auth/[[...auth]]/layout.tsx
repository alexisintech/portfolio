import { SignIn } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = await auth();

  if (!userId) {
    return <SignIn />;
  }

  return <div>{children}</div>;
}
