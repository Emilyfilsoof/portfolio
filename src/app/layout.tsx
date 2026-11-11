import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import Grain from '@/components/Grain';
import Cursor from '@/components/Cursor';
import Intro from '@/components/Intro';
import SectionTint from '@/components/SectionTint';
import { profile } from '@/data/profile';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.emilyfilsoof.com'),
  title: {
    default: `${profile.shortName} | ${profile.role}`,
    template: `%s | ${profile.shortName}`,
  },
  description: profile.intro,
  openGraph: {
    title: `${profile.shortName} | ${profile.role}`,
    description: profile.intro,
    url: '/',
    siteName: profile.shortName,
    locale: 'en_GB',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
};

/*
 * Runs before first paint. The intro plays once per visit: if it played in the
 * last 30 minutes, or the visitor lands on an application page (where the hero
 * is the introduction), the page is marked so the plate never shows.
 */
const introGate = `(function(){try{var d=document.documentElement,k='ef-intro',n=Date.now(),t=Number(localStorage.getItem(k))||0;if(location.pathname.indexOf('/signifly')===0||n-t<18e5){d.setAttribute('data-intro','skip')}localStorage.setItem(k,String(n))}catch(e){}})();`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: introGate }} />
        <link rel="preload" href="/fonts/archivo-latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/space-mono-400.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <Intro />
        <Grain />
        <Cursor />
        <SectionTint />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
