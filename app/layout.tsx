import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Minh Anh & Tuấn Anh | Wedding Invitation",
  description: "Thiệp cưới online của Minh Anh và Tuấn Anh",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="vi"><body>{children}</body></html>;
}
