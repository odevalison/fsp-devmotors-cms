import { Header } from "@/components/header";
import SubmenuProvider from "@/contexts/submenu";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.scss";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

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
      <body className={`${poppins.className}`}>
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
