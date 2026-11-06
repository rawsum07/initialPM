import type { Metadata } from "next";
import "./globals.css";
import "./workspace.css";
import "./game.css";
import "./profile-dna.css";
import "./landing-dna.css";

export const metadata: Metadata = { title: "You Are The PM Now", description: "An interactive product management simulator." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
