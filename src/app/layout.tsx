import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Покана за абитуриентски бал — Георги Янков",
  description:
    'Покана за абитуриентски бал на Георги Янков — 16 май, 19:00 ч., Ресторант "Каменец"',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bg">
      <body>{children}</body>
    </html>
  );
}
