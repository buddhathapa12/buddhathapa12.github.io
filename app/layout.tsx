import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Buddha Thapa | Bioinformatics & Software Systems",
  description:
    "Portfolio and blog for Buddha Thapa, focused on bioinformatics engineering, data workflows, and software systems.",
  metadataBase: new URL("https://buddhathapa12.github.io"),
  openGraph: {
    title: "Buddha Thapa | Bioinformatics & Software Systems",
    description:
      "Portfolio and blog for Buddha Thapa, focused on bioinformatics engineering, data workflows, and software systems.",
    url: "https://buddhathapa12.github.io",
    siteName: "Buddha Thapa",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Buddha Thapa | Bioinformatics & Software Systems",
    description:
      "Portfolio and blog for Buddha Thapa, focused on bioinformatics engineering, data workflows, and software systems.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-100">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
