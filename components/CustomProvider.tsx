"use client";
import { SessionProvider } from "next-auth/react";
import React from "react";

interface CustomProviderProps {
  children: React.ReactNode;
}
const CustomProvider = ({ children }: CustomProviderProps) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default CustomProvider;
