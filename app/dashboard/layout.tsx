"use client";

import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState("");
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  const toggleSidebar = () => {
    setIsSidebarVisible((prev) => !prev);
  };

  return (
    <main className="relative min-h-screen justify-between lg:flex">
      <div
        className={`absolute z-10 w-[40%] lg:sticky lg:w-1/6 ${isSidebarVisible ? "" : "hidden"}`}
      >
        <Sidebar theme={theme} />
      </div>
      <div
        className={`${isSidebarVisible ? "absolute right-0 w-[60%] lg:sticky lg:w-5/6" : "w-full"}`}
      >
        <Navbar
          setTheme={setTheme}
          theme={theme}
          toggleSidebar={toggleSidebar}
        />
        <div className="mx-4 py-6">{children}</div>
      </div>
    </main>
  );
}
