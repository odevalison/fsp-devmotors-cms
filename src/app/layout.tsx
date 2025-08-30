import { Header } from "@/components/header";
import SubmenuProvider from "@/contexts/submenu";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevMotors - Oficina Dev especializada",
  description:
    "Oficina Automotiva Dev Motors São Paulo, desde 2011 especializada em consertar carros de Desenvolvedores Web!",
  keywords: [
    "oficina",
    "manutenção",
    "oficina de carros",
    "carros",
    "manutenção de carros",
    "oficina automotiva",
  ],
  openGraph: {
    title: "Dev Motors - Oficina Dev especializada",
    images: [`${process.env.NEXT_PUBLIC_URL}/oficina-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className}`}>
        <SubmenuProvider>
          <Header />
          {children}

          <p style={{ textAlign: "center", marginTop: 34, marginBottom: 24 }}>
            Todos direitos reservados - Dev Motors @
            {`${new Date().getFullYear()}`}
          </p>
        </SubmenuProvider>
      </body>
    </html>
  );
}
