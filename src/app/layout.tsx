import type { Metadata } from 'next';
import './globals.css';
import { schoolInfo } from '@/lib/data';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: {
    default: schoolInfo.name,
    template: `%s | ${schoolInfo.name}`,
  },
  description: 'Fahad Memorial Int\'l School - Where Knowledge Meets Discipline.',
  icons: {
    icon: [
        { url: '/favicon.ico' },
        { url: 'https://firebasestorage.googleapis.com/v0/b/studio-6593612663-293d1.firebasestorage.app/o/favicon-32x32.png?alt=media&token=ce6507af-a0bd-4e19-be8a-81ded8552d42', sizes: '32x32', type: 'image/png' },
    ]
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Garamond:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
