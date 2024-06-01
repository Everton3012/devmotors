import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { Header } from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevMotors - Sua oficina especializada",
  description: "Oficina de carros em São Paulo",
  keywords: [
    "DevMotors",
    "oficina",
    "oficina de carros",
    "carros",
    "manutenção de carros",
    "troca de oléo",
  ],
  openGraph: {
    title: "DevMotors - Sua oficina especializada",
    images: [`${process.env.NEXT_PUBLIC_URL}/logo.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
