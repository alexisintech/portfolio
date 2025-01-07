import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});
export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider afterSignOutUrl="/auth">
      <html lang="en" className={montserrat.className}>
        <body className="min-h-screen text-orange-100 bg-stone-950">
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
