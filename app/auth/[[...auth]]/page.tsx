"use client";

import { SignIn, UserButton } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { useAuth } from "@clerk/nextjs";

export default function Home() {
  const { isLoaded } = useAuth();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return <UserButton />;
}
