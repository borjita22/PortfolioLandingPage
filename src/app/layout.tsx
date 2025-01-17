import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const agdasimaFont = localFont({
  src: "./fonts/Agdasima-Regular.ttf",
  variable: "--font-new-font",  // Variable personalizada
  weight: "400",  // Puedes ajustar el peso según lo que necesites
  style: "normal",  // O "italic", dependiendo de la fuente
});

// Define the metadata separately
export const metadata: Metadata = {
  title: "BorchDev",
  description: "Description of BorchDev",
};

// Define the viewport separately
export const viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 1.0,
  userScalable: "no",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${agdasimaFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
