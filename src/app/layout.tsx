import { Metadata } from "next";

import { manrope } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "PROTEMA - Your Partner in Providing Smart, Sustainable Nutrition for Happier, Healthier Pets.",
  description:
    "Welcome to Protema, the trusted brand for pet health products. We provide a variety of quality products for cats and dogs, with over 150,000 sales in the online marketplace. Keep your pets healthy with us.",
  icons: [{ rel: "icon", url: "/icon.ico" }],
  keywords: [
    "protema",
    "makanan peliharaan",
    "kesehatan peliharaan",
    "vitamin",
    "kucing",
    "anjing",
    "pet food",
    "cat",
    "dog",
    "milk",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  twitter: {
    title:
      "PROTEMA - Your Partner in Providing Smart, Sustainable Nutrition for Happier, Healthier Pets.",
    description:
      "Welcome to Protema, the trusted brand for pet health products. We provide a variety of quality products for cats and dogs, with over 150,000 sales in the online marketplace. Keep your pets healthy with us.",
    images: [
      {
        url: "https://protema.id/og_image.jpg",
        width: 1200,
        height: 630,
        alt: "PROTEMA - Your Partner in Providing Smart, Sustainable Nutrition for Happier, Healthier Pets.",
        secureUrl: "https://protema.id/og_image.jpg",
      },
    ],
    card: "summary_large_image",
  },
  openGraph: {
    title:
      "PROTEMA - Your Partner in Providing Smart, Sustainable Nutrition for Happier, Healthier Pets.",
    url: "https://protema.id",
    siteName: "PROTEMA",
    description:
      "Welcome to Protema, the trusted brand for pet health products. We provide a variety of quality products for cats and dogs, with over 150,000 sales in the online marketplace. Keep your pets healthy with us.",
    type: "website",
    images: [
      {
        url: "https://protema.id/og_image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        {/* google verification tag */}
        {/* <meta
          name="google-site-verification"
          content=""
        /> */}
      </head>

      <body className={` ${manrope.className} h-screen w-full bg-black`}>
        {children}
      </body>
    </html>
  );
}
