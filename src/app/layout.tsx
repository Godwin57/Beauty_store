import type { Metadata } from "next";
import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Beauty shop",
    description: "Beauty: The one stop store for8 female beauty products",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="relative font-Open-sans">
                <div className="absolute top-[100px] w-[98vw]">
                    <Header />
                </div>
                <div className="mt-[-100px]">{children}</div>
                <Footer />
            </body>
        </html>
    );
}
