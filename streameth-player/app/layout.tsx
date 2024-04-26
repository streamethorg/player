import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const BASE_IMAGE = "https://streameth.org/streameth_banner.png";

export const metadata: Metadata = {
  title: "StreamETH",
  description: "The complete solution to host your hybrid or virtual event.",
  metadataBase: new URL("https://streameth.org"),
  openGraph: {
    title: "StreamETH",
    siteName: "StreamETH",
    description: "The complete solution to host your hybrid or virtual event.",
    images: {
      url: BASE_IMAGE,
      alt: "StreamETH Logo",
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "StreamETH",
    description: "The complete solution to host your hybrid or virtual event.",
    images: {
      url: BASE_IMAGE,
      alt: "StreamETH Logo",
    },
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
