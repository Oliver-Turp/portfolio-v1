import Header from "@/components/header/Header";

import "./globals.css";

export const metadata = {
  title: "Oliver Turp | ",
  description: "Page description here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
