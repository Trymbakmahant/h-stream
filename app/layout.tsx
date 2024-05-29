import Head from "next/head";
import { Inter } from "next/font/google";
import "./globals.css";
import RainbowkitProvider from "./RainbowkitProvider";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>H-Stream</title>
        <meta name="description" content="Your page description" />
        {/* Other metadata tags */}
      </Head>
      <body className={inter.className}>
        <RainbowkitProvider>{children}</RainbowkitProvider>
      </body>
    </html>
  );
}
