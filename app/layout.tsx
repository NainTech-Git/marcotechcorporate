import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Marcotech Corporate Services - Strategic Financial Advisory',
  description: 'Fast, secure, and global financial advisory services. 300+ clients across sectors. Expert M&A, project finance, and green energy solutions.',
  keywords: 'financial advisory, corporate services, M&A, project finance, green energy, risk assessment, portfolio management',
  authors: [{ name: 'Marcotech Corporate Services' }],
  openGraph: {
    title: 'Marcotech Corporate Services - Strategic Financial Advisory',
    description: 'Fast, secure, and global financial advisory services. 300+ clients across sectors.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marcotech Corporate Services - Strategic Financial Advisory',
    description: 'Fast, secure, and global financial advisory services. 300+ clients across sectors.',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}