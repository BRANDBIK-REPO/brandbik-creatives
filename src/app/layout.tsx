import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from 'next/font/google';
import { IBM_Plex_Sans_Arabic } from 'next/font/google';
import LayoutShell from "@/components/LayoutShell";
import ReduxProvider from "@/redux/Provider";
import { LanguageProvider } from "@/contexts/LanguageContext";
import FontProvider from "@/components/FontProvider";
// Load Poppins font with required weights
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // add the weights you need
  style: ['normal', 'italic'], // optional
  display: 'swap',             // best for SEO and performance
});

// Load IBM Plex Sans Arabic font
const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  display: 'swap',
});

 
export const metadata: Metadata = {
  title: "Brandbik",
  description: "We build bold brands and digital experiences.",
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'Brandbik',
    description: 'We build bold brands and digital experiences.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brandbik',
    description: 'We build bold brands and digital experiences.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Brandbik",
              "url": "https://www.brandbik.com",
              "logo": "https://www.brandbik.com/images/brandbik-icon.png"
            }),
          }}
        />
      </head>
      <body>
        <LanguageProvider>
          <FontProvider 
            poppinsClass={poppins.className} 
            ibmPlexSansArabicClass={ibmPlexSansArabic.className}
          >
            {/* ReduxProvider wraps LayoutShell to provide Redux store */}
            <ReduxProvider>
              <LayoutShell>{children}</LayoutShell>
            </ReduxProvider>
          </FontProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
