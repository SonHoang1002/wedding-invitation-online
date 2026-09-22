import type { Metadata } from "next";
import { Inter, Cinzel } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel" });

export const metadata: Metadata = {
  title: "Thiệp Cưới Online",
  description: "Nền tảng tạo thiệp cưới online mượt mà",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${inter.variable} ${cinzel.variable} font-sans bg-[#0a0b0b] text-[#f3eee8] antialiased`}>
        {children}
      </body>
    </html>
  );
}
