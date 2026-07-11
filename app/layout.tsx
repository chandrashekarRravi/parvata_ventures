import type { Metadata } from "next";
import CustomCursor from "@/components/ui/custom-cursor";
import "./globals.css";

export const metadata: Metadata = {
  title: "Parvata Global Ventures | Empowering Your Career Journey",
  description: "Redefining professional pathways with intentional design and global reach.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen bg-background text-on-background font-body-md selection:bg-primary selection:text-on-primary flex flex-col">
        {/* <CustomCursor /> */}
        {children}
      </body>
    </html>
  );
}
