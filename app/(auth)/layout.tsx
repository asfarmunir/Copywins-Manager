"use client";
import { ThemeToggle } from "@/components/shared/ToggleTheme";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={`relative 
      
         
        max-h-svh w-full overflow-y-hidden`}
      style={{
        backgroundImage: "url('/admin/auth-bg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* <Image
        src="/admin/auth-bg.webp"
        alt="Background"
        width={1200}
        height={1200}
        className="object-cover w-full h-full "
        priority
      /> */}

      {children}
      <div className="absolute xl:w-56 left-1/2 transform -translate-x-1/2 md:left-4 md:transform-none bottom-4">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Layout;
