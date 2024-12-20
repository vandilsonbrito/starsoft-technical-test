import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.sass";
import ReactQueryProvider from "@/utils/providers/ReactQueryProvider";  
import ReduxProvider from "@/utils/providers/ReduxProvider";

const poppins = Poppins({ weight: ["400", "500", "600", "700"], subsets: ["latin"] });

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
};

export const metadata: Metadata = {
  title: "Starsoft",
  description: "Starsoft NFTs Marketplace",
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;

}>) {
  return (
    <html lang="pt-br">
      <body className={`${poppins.className} antialiased`}>
        <ReduxProvider>  
            <ReactQueryProvider >
                {children} 
            </ReactQueryProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
