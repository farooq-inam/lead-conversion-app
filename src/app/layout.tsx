import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Horizon Tech — Official Apple & Nothing Distributor | Lahore, Pakistan",
  description:
    "Pakistan's premier authorized distributor for Apple and Nothing devices. Serving retailers, bulk buyers, and corporate partners across Punjab. Get genuine products, warranty support, and exclusive trade pricing.",
  keywords:
    "Apple distributor Pakistan, Nothing phone Pakistan, iPhone wholesale Lahore, authorized Apple reseller Pakistan, corporate phone supply",
  openGraph: {
    title: "Horizon Tech — Official Apple & Nothing Distributor",
    description: "Authorized distributor for Apple and Nothing in Pakistan. Wholesale, bulk orders, and B2B partnerships.",
    type: "website",
    locale: "en_PK",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}