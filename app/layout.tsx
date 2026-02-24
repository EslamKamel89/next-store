import "@/assets/styles/globals.css";
import { Constants } from "@/lib/constants";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: `%s | ${Constants.APP_NAME}`,
    default: Constants.APP_NAME,
  },
  description: Constants.APP_DESCRIPTION,
  metadataBase: Constants.SERVER_URL,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
