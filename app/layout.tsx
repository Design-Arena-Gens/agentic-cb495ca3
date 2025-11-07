import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Google My Business কল অপটিমাইজেশন গাইড",
  description: "পর্দা ব্যবসার জন্য GMB বিজ্ঞাপন অপটিমাইজেশন",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
