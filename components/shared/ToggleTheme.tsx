// components/theme-toggle.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="outline" size="icon" disabled>
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      </Button>
    );
  }

  return (
    <div className="bg-[#F5F5F5] flex items-center  dark:bg-background rounded-full p-0.5 border border-[#E3E3E4] dark:border-[#071D27]">
      <Button
        className={`
            ${
              theme === "light"
                ? "bg-white dark:bg-[#122B37] dark:border-none  border border-[#E3E3E4]"
                : "bg-transparent"
            }
             text-black w-full  dark:text-slate-100 rounded-full px-3 py-1 3xl:py-2  shadow-none inline-flex items-center gap-1 justify-center`}
        onClick={() => setTheme("light")}
      >
        <Sun className="h-[1.2rem] w-[1.2rem]" />
        Light
      </Button>
      <Button
        className={`
            ${
              theme === "dark"
                ? "bg-white dark:bg-[#122B37] dark:border-none  border border-[#E3E3E4]"
                : "bg-transparent"
            }
             text-black w-full dark:text-slate-100 rounded-full px-3 py-1 3xl:py-2 shadow-none inline-flex items-center gap-1 justify-center`}
        onClick={() => setTheme("dark")}
      >
        <Moon className="h-[1.2rem] w-[1.2rem]" />
        Dark
      </Button>
    </div>
  );
}
