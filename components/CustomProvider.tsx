"use client";
import { SessionProvider } from "next-auth/react";

interface CustomProviderProps {
  children: React.ReactNode;
}
const CustomProvider = ({ children }: CustomProviderProps) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default CustomProvider;
