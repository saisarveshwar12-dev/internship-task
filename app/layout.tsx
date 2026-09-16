import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'WEBoin — Creative Technology Agency',
  description: 'WEBoin is a creative technology studio designing and building memorable digital experiences through high-impact UI/UX design, web development, branding, and digital strategy.',
  keywords: ['creative technology agency', 'UI/UX design', 'web development', 'branding studio', 'digital agency'],
  authors: [{ name: 'WEBoin' }],
  openGraph: {
    title: 'WEBoin — Creative Technology Agency',
    description: 'We turn ambitious ideas into digital experiences people remember.',
    url: 'https://weboin.com',
    siteName: 'WEBoin',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WEBoin — Creative Technology Agency',
    description: 'We turn ambitious ideas into digital experiences people remember.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background text-brand-text antialiased selection:bg-brand-violet selection:text-white">
        {children}
      </body>
    </html>
  );
}
