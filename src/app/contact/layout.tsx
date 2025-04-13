import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact",
    description: "SealPRO Caulking Solutions contact information. Contact includes phone, email and social media contact.",
  };

  export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      {children}
    );
  }