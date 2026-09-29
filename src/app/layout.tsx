import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

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
      <body className={`${inter.className} bg-slate-900 min-h-[100dvh] w-full md:flex md:items-center md:justify-center p-0 md:p-5 lg:p-6 overflow-x-hidden antialiased`}>
        {children}
      </body>
    </html>
  );
}
