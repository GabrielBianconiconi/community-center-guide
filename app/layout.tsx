import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Community Center Guide",
  description: "Checklist for completing the Community Center in Year 1.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
