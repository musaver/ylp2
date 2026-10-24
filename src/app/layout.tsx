import type { Metadata, Viewport } from "next";
import { site } from "@/content/site";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ScrollReveal } from "@/components/runtime/ScrollReveal";
import { ScrollToTop } from "@/components/runtime/ScrollToTop";
import "@/styles/framer.css";
import "@/styles/interactions.css";
import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: `%s | ${site.name}` },
  description: site.description,
  openGraph: { type: "website", siteName: site.name, images: [site.ogImage] },
  twitter: { card: "summary_large_image", images: [site.ogImage] },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" data-scroll-behavior="smooth">
      <body>
        <div id="main">
          {/* Framer's layout template: shared header and footer around every page. */}
          <div
            className="framer-dTYeb framer-1i7muly"
            data-layout-template="true"
            style={{ minHeight: "100vh", width: "auto" }}
          >
            <Header />
            {children}
            <Footer />
          </div>
          {/* Portal target for the "All pages" dropdown (see Header). */}
          <div id="template-overlay" />
        </div>
        <ScrollToTop />
        <ScrollReveal />
      </body>
    </html>
  );
}
