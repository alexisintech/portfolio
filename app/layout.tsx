import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en" className={montserrat.className}>
        <body className="min-h-screen text-orange-100 bg-stone-950">
          {children}
        </body>
      </html>
  );
}
