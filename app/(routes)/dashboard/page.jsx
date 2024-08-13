"use client";
import { useUser } from "@clerk/nextjs";
import React from "react";

export default function Dashboard() {
  const { isSignedIn } = useUser();

  if (!isSignedIn) {
    if (typeof window !== "undefined") {
      window.location.href = "/sign-in";
    }
    return null;
  }
  return <div>Dashboard</div>;
}
