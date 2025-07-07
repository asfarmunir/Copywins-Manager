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
import { moderation, navlinks, others } from "@/lib/constants";
import { ThemeToggle } from "./ToggleTheme";
const tabLinks = [
  {
    title: "revenue",
    icons: "home",
    href: "/",
  },
  {
    title: "orders",
    icons: "cart",
    href: "/orders",
  },
  {
    title: "customers",
    icons: "users",
    href: "/customers",
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
              src={"/admin/" + link.icons + ".svg"}
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
                    src={"/admin/" + link.icons + ".svg"}
                    alt="icon"
                    width={16}
                    className="2xl:w-[20px] 3xl:w-[24px] dark:invert"
                    height={16}
                    priority
                  />
                  {link.title}
                </Link>
              ))}
              <p className="px-2 text-sm mt-3 2xl:text-[15x] 3xl:text-base font-semibold mb-1 uppercase">
                Moderations
              </p>
              {moderation.map((link, index) => (
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
                    src={"/admin/" + link.icons + ".svg"}
                    alt="icon"
                    width={16}
                    className="2xl:w-[20px] 3xl:w-[24px] dark:invert"
                    height={16}
                    priority
                  />
                  {link.title}
                </Link>
              ))}
              <p className="px-2 text-sm mt-3 2xl:text-[15x] 3xl:text-base font-semibold mb-1 uppercase">
                Others
              </p>
              {others.map((link, index) => (
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
                    src={"/admin/" + link.icons + ".svg"}
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

            <div className=" mt-auto space-y-2  ">
              <ThemeToggle />

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

              <div className="  rounded-[10px] w-full border-2  border-[#E3E3E4] dark:border-card-foreground  px-4 py-3 flex items-center justify-start gap-4">
                <h3 className="text-sm 2xl:text-base font-bold 3xl:text-lg">
                  <span className="text-[#007DFC]">Proudly</span> Powered by
                </h3>
                <div className="flex items-center justify-center bg-card-foreground border-2 p-2 rounded-[10px]">
                  <Image
                    src={"/admin/proppicks.svg"}
                    alt="logo"
                    width={140}
                    height={140}
                    priority
                    className="  3xl:w-[55px] 2xl:w-[35px] w-[20px] dark:hidden "
                  />
                </div>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Tabbar;
