import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://saranaalmasentosa.com"),
  title: "CV SARANA ALMA SENTOSA - Mitra Bisnis Terpercaya",
  description: "CV SARANA ALMA SENTOSA adalah perusahaan terpercaya yang bergerak di bidang pengadaan barang dan jasa dengan kualitas terbaik dan harga kompetitif. Solusi lengkap untuk kebutuhan bisnis Anda.",
  keywords: ["CV SARANA ALMA SENTOSA", "pengadaan barang", "jasa konsultasi", "bisnis terpercaya", "Probolinggo", "Jawa Timur", "supplier barang", "layanan bisnis"],
  authors: [{ name: "CV SARANA ALMA SENTOSA" }],
  icons: {
    icon: "/company-logo.png",
  },
  openGraph: {
    title: "CV SARANA ALMA SENTOSA - Mitra Bisnis Terpercaya",
    description: "Perusahaan terpercaya di bidang pengadaan barang dan jasa dengan kualitas terbaik untuk kebutuhan bisnis Anda",
    url: "https://saranaalmasentosa.com",
    siteName: "CV SARANA ALMA SENTOSA",
    type: "website",
    images: [
      {
        url: "/company-logo.png",
        width: 1200,
        height: 630,
        alt: "CV SARANA ALMA SENTOSA Logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "CV SARANA ALMA SENTOSA - Mitra Bisnis Terpercaya",
    description: "Solusi pengadaan barang dan jasa berkualitas tinggi untuk kebutuhan bisnis Anda",
    images: ["/company-logo.png"]
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="facebook-domain-verification" content="du98ivqpz8a6keujoax2d3o87anhzt" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
