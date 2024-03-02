import type { Metadata } from 'next';
import { ReactNode } from 'react';
import './globals.css';
import { yekan } from '@/utils/fonts';
import Layout from '@/components/Molecule/Layout/Layout';
import NextAuthProvider from '@/providers/NextAuthProvider';

export const metadata: Metadata = {
  title: 'DreamHome',
  description: 'Real estate company',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className={yekan.className}>
        <NextAuthProvider>
          <Layout>
            {children}
          </Layout>
        </NextAuthProvider>
      </body>
    </html>
  )
}
