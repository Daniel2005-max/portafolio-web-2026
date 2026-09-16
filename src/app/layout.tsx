import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Daniel Giraldo | Digital Growth & Visual Design",
  description: "Portafolio profesional de Daniel Giraldo - Estratega de Crecimiento & Diseñador Visual",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-slate-900 min-h-screen flex items-center justify-center p-2 md:p-6 overflow-x-hidden antialiased`}>
        {children}
      </body>
    </html>
  );
}
