import type { Metadata } from "next";
import "./globals.css";
import "./campaign.css";

export const metadata: Metadata = {
  title: "Lowassa Edward Lekor Lormuje | Kampeni ya PST 2026/27",
  description:
    "Wasifu, maono na vipaumbele vya kampeni ya Lowassa Edward Lekor Lormuje kwa nafasi ya Makamu wa Rais wa Chama cha Wafamasia Tanzania.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="sw"><body>{children}</body></html>;
}
