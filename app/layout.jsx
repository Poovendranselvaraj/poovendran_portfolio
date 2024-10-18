import { Outfit } from "next/font/google";
import "./globals.css";

//components
import Header from "@/components/Header";
import Footer from "@/components/Footer";

//theme provider
import { ThemeProvider } from "@/components/ThemeProvider";

// Load Google font
const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Poovendran S | Full Stack Developer Portfolio",
  description: "Poovendran S, Full Stack Developer specializing in React, Node.js, and MongoDB. Explore my projects, skills, and achievements.",
  keywords: "Poovendran S, Full Stack Developer, React, Node.js, MongoDB, Portfolio,Poovendran Selvaraj",
};

// Root Layout Component
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Poovendran S, Full Stack Developer specializing in React, Node.js, and MongoDB. Explore my projects, skills, and achievements." />
        <meta name="keywords" content="Poovendran S, Full Stack Developer, React, Node.js, MongoDB, Portfolio,Poovendran Selvaraj" />
      </head>
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
