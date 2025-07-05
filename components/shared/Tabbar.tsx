"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Menu } from "lucide-react";
import { navlinks } from "@/lib/constants";
import { ThemeToggle } from "./ToggleTheme";
const tabLinks = [
  {
    title: "feed",
    icons: "feed",
    href: "/",
  },

  {
    title: "Signals",
    icons: "signal-mobile",
    href: "/signals",
  },
  {
    title: "leaders",
    icons: "leaders",
    href: "/leaders",
  },
];

const Tabbar = () => {
  const pathname = usePathname();
  return (
    <div
      className={`
    w-full  px-2  relative z-10  bg-card  py-2  pb-4 flex  items-center justify-between
     
  `}
    >
      {tabLinks.map((link, index) => {
        return (
          <Link
            key={index}
            href={link.href}
            className="flex flex-col flex-1 items-center"
          >
            <Image
              src={"/icons/" + link.icons + ".svg"}
              alt="Logo"
              width={index === 1 ? 20 : 28} // Larger width for index 1
              height={30}
              priority
              className={`mx-auto dark:invert ${
                index === 2 ? "w-[26px] " : "w-[21px]  "
              }
              ${index === 1 ? " mb-1" : ""}
              `}
            />
            <p className="font-semibold py-1 text-xs capitalize">
              {link.title}
            </p>
          </Link>
        );
      })}

      <Sheet>
        <SheetTrigger className="flex flex-col flex-1 items-center">
          <Menu size={20} />
          <p className="font-semibold py-1 text-xs capitalize">more</p>
        </SheetTrigger>
        <SheetContent side={"left"} className="">
          <div
            className={`relative   overflow-y-auto no-scrollbar h-[95svh] rounded-[10px]   transition-all duration-300 
         w-full ease-in-out 
           flex flex-col gap-2   `}
          >
            <Image
              src={"/logo-dark.png"}
              alt="logo"
              width={140}
              height={140}
              priority
              className=" mx-auto 3xl:w-[160px] 2xl:w-[140px] w-[120px] dark:hidden "
            />
            <Image
              src={"/logo-light.png"}
              alt="logo"
              width={140}
              height={140}
              priority
              className=" mx-auto 3xl:w-[160px] 2xl:w-[140px] w-[120px] hidden dark:block"
            />

            <div className="flex flex-col gap-1 mt-2 ">
              <p className="px-2 text-sm 2xl:text-[15x] 3xl:text-base font-semibold mb-1 uppercase">
                Menu
              </p>
              {navlinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.link}
                  className={`inline-flex  text-sm 2xl:text-[15px] 3xl:text-base  capitalize   rounded-full 
                ${
                  pathname === link.link
                    ? "bg-card py-2 font-semibold"
                    : " py-2"
                }
                items-center gap-2 justify-start px-4 2xl:px-5  `}
                >
                  <Image
                    src={"/icons/" + link.icons + ".svg"}
                    alt="icon"
                    width={16}
                    className="2xl:w-[20px] 3xl:w-[24px] dark:invert"
                    height={16}
                    priority
                  />
                  {link.title}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-1 my-2 ">
              <p className="px-2 text-sm 2xl:text-[15x] 3xl:text-base font-semibold mb-1 uppercase">
                Signal provider
              </p>

              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger
                    className={` border-none text-sm 2xl:text-[15px] 3xl:text-base capitalize   rounded-full 
                
                items-center gap-3 justify-start px-4 2xl:px-5  `}
                  >
                    <Image
                      src={"/icons/" + "signals" + ".svg"}
                      alt="icon"
                      width={16}
                      className="2xl:w-[20px] 3xl:w-[24px] dark:invert"
                      height={16}
                      priority
                    />
                    Signal
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 pl-8">
                    <Link href={"/signals"} className=" hover:font-semibold">
                      Dashboard
                    </Link>
                    <Link href={"/"} className=" hover:font-semibold">
                      Post a broadcast
                    </Link>
                    <Link href={"/"} className=" hover:font-semibold">
                      Message Group
                    </Link>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div className=" mt-auto space-y-2  ">
              <ThemeToggle />
              <div className="  rounded-[10px] w-full bg-card-foreground border p-4">
                <h2 className="text-sm 2xl:text-base font-semibold 3xl:text-lg">
                  Share Your Expertise
                </h2>
                <p className="text-xs 2xl:text-sm mb-3 3xl:text-base">
                  Share and earn money
                </p>
                <button className="text-xs 2xl:text-sm 3xl:text-base  w-full text-center py-2.5 rounded-full    bg-[#CDD1E7] dark:bg-purple-800/30 font-semibold">
                  Become a Seller
                </button>
              </div>
              <div className="  rounded-[10px] w-full bg-card-foreground border p-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {/* <div className=" w-12 h-10 rounded-md bg-primary "></div> */}
                  <div>
                    <h2 className="text-sm 2xl:text-base font-semibold 3xl:text-lg">
                      Asfar Munir Asfi
                    </h2>
                    <p className="text-xs 2xl:text-sm  3xl:text-base">
                      Zaeem@proppicks.com
                    </p>
                  </div>
                </div>
                <button>
                  <Image
                    src={"/icons/logout.svg"}
                    alt="icon"
                    width={16}
                    className="2xl:w-[20px] dark:invert"
                    height={16}
                    priority
                  />
                </button>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Tabbar;
