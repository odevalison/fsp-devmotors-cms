import { Header } from "@/components/header";
import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.scss";

const sora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevMotors - Oficina Dev especializada!",
  description:
    "Oficina Automotiva DevMotors em São Paulo, desde 2011 especializada em consertar carros de Desenvolvedores Web!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${sora.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
