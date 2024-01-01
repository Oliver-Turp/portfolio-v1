import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

import "./globals.css";

export const metadata = {
  title: "Page Title Here",
  description: "Page description here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
