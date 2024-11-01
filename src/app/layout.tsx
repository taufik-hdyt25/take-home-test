import Sidebar from '@/components/Sidebar';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Providers from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="grid grid-cols-[240px_1fr]">
            <div className="h-screen overflow-y-auto gradient-bg-sidebar w-[240px] ">
              <Sidebar />
            </div>
            <div className="h-screen overflow-y-auto">{children}</div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
