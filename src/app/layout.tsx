import type { Metadata } from "next";
import "./globals.css";
import "./footer.css";
import "./testimonials.css";

export const metadata: Metadata = {
  title: "Yellostone Tech — Official Apple & Nothing Distributor | Lahore, Pakistan",
  description:
    "Pakistan's premier authorized distributor for Apple and Nothing devices. Serving retailers, bulk buyers, and corporate partners across Punjab.",
  keywords:
    "Apple distributor Pakistan, Nothing phone Pakistan, iPhone wholesale Lahore, authorized Apple reseller Pakistan",
  openGraph: {
    title: "Yellostone Tech — Official Apple & Nothing Distributor",
    description: "Authorized distributor for Apple and Nothing in Pakistan.",
    type: "website",
    locale: "en_PK",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}