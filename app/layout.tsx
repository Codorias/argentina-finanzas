import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Argentina Finanzas | Joaquín Rodríguez Nuin — Asesor financiero",
  description: "Invertí desde Argentina hacia el mundo. Carteras globales con tu plata siempre en tus cuentas. Agente Productor CNV #2245. Asesoramiento humano para inversores minoristas, familias y pymes.",
  keywords: [
    "asesor financiero argentina",
    "invertir desde argentina",
    "cartera global",
    "cartera de retiro",
    "agente productor CNV",
    "Joaquín Rodríguez Nuin",
    "Argentina Finanzas",
    "inversión joven",
  ],
  authors: [{ name: "Joaquín Rodríguez Nuin" }],
  openGraph: {
    title: "Argentina Finanzas — Invertí desde Argentina, hacia el mundo",
    description: "Hasta el dólar se devalúa. Construí una cartera global con tu plata siempre en tus cuentas. Agente Productor CNV #2245.",
    type: "website",
    locale: "es_AR",
    siteName: "Argentina Finanzas",
  },
  twitter: {
    card: "summary_large_image",
    title: "Argentina Finanzas — Invertí desde Argentina, hacia el mundo",
    description: "Carteras globales. Tu plata, en tus cuentas. CNV #2245.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-neutral-900">{children}</body>
    </html>
  );
}
