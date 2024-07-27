"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import MoonIcon from "./icons/moon-icon";
import SunIcon from "./icons/sun-icon";
import PlaceholderIcon from "./icons/placeholder-icon";


export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return (
    <PlaceholderIcon className="w-8 h-8 lg:w-11 lg:h-11" />
  );

  if (resolvedTheme === "dark") {
    return (
      <MoonIcon className="w-8 h-8 lg:w-11 lg:h-11" onClick={() => setTheme('light')} />
    );
  }

  if (resolvedTheme === "light") {
    return (
      <SunIcon className="w-8 h-8 lg:w-11 lg:h-11" onClick={() => setTheme('dark')} />
    );
  }
}

