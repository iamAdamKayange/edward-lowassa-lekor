import type { Metadata } from "next";
import "./globals.css";
import "./campaign.css";

export const metadata: Metadata = {
  title: "Edward Lowassa | Official Campaign 2026/27",
  description:
    "Meet Edward Lowassa, explore his vision and priorities for Vice President of the Pharmaceutical Society of Tanzania.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
