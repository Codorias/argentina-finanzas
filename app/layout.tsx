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
  title: "Joaquín Rodríguez | Argentina Finanzas",
  description: "Asesoría financiera profesional en planificación de jubilación, inversión y gestión de patrimonio. Estrategias personalizadas para construir tu futuro.",
  keywords: ["asesor financiero", "planificación financiera", "jubilación", "inversión", "patrimonio", "Argentina Finanzas"],
  authors: [{ name: "Joaquín Rodríguez" }],
  openGraph: {
    title: "Joaquín Rodríguez | Argentina Finanzas",
    description: "Construye tu patrimonio con estrategia y confianza.",
    type: "website",
    locale: "es_AR",
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
