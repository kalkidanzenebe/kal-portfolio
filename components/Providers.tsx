"use client";

import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import SamsungThemeTip from "@/components/SamsungThemeTip";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <Navbar />
      {children}
      <SamsungThemeTip />
    </ThemeProvider>
  );
}
