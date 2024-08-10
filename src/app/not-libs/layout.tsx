import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Not libs form",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
