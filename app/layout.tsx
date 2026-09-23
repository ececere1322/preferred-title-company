import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Preferred Title Company LLC | New Jersey Title & Closing",
  description: "Personal title and closing support across all 21 New Jersey counties. Connect with Preferred Title Company LLC for your next move.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
