"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { moderation, navlinks, others } from "@/lib/constants";
import { ThemeToggle } from "./ToggleTheme";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <>
      <div
        className={`relative bg-card   overflow-y-auto no-scrollbar rounded-[10px] border  transition-all duration-300 
         w-[24%] ease-in-out 2xl:w-[24%]
           hidden sm:flex flex-col gap-2 2xl:gap-4 p-3 2xl:p-5 3xl:p-7 `}
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
                    ? "bg-card-foreground py-3 font-semibold"
                    : " py-2.5"
                }
                items-center gap-3 justify-start px-4 2xl:px-5  `}
            >
              <Image
                src={"/admin/" + link.icons + ".svg"}
                alt="icon"
                width={16}
                className="2xl:w-[24px] 3xl:w-[26px] dark:invert"
                height={16}
                priority
              />
              {link.title}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-1 my-2 ">
          <p className="px-2 text-sm 2xl:text-[15x] 3xl:text-base font-semibold mb-1 uppercase">
            Moderations
          </p>

          {moderation.map((link, index) => (
            <Link
              key={index}
              href={link.link}
              className={`inline-flex  text-sm 2xl:text-[15px] 3xl:text-base  capitalize   rounded-full 
                ${
                  pathname === link.link
                    ? "bg-card-foreground py-3 font-semibold"
                    : " py-2.5"
                }
                items-center gap-3 justify-start px-4 2xl:px-5  `}
            >
              <Image
                src={"/admin/" + link.icons + ".svg"}
                alt="icon"
                width={16}
                className="2xl:w-[24px] 3xl:w-[26px] dark:invert"
                height={16}
                priority
              />
              {link.title}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-1 my-2 ">
          <p className="px-2 text-sm 2xl:text-[15x] 3xl:text-base font-semibold mb-1 uppercase">
            Others
          </p>

          {others.map((link, index) => (
            <Link
              key={index}
              href={link.link}
              className={`inline-flex  text-sm 2xl:text-[15px] 3xl:text-base  capitalize   rounded-full 
                ${
                  pathname === link.link
                    ? "bg-card-foreground py-3 font-semibold"
                    : " py-2.5"
                }
                items-center gap-3 justify-start px-4 2xl:px-5  `}
            >
              <Image
                src={"/admin/" + link.icons + ".svg"}
                alt="icon"
                width={16}
                className="2xl:w-[24px] 3xl:w-[26px] dark:invert"
                height={16}
                priority
              />
              {link.title}
            </Link>
          ))}
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
            <button className="text-xs 2xl:text-sm 3xl:text-base  w-full text-center py-2.5 rounded-full    bg-[#CDD1E7] dark:bg-primary/30 font-semibold">
              Become a Seller
            </button>
          </div>
          <div className="  rounded-[10px] w-full bg-card-foreground border p-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 2xl:w-12 h-8 2xl:h-12 text-white rounded-[8px] font-semibold bg-primary flex items-center justify-center">
                <p>GK</p>
              </div>
              <div>
                <h2 className="text-sm 2xl:text-base font-semibold 3xl:text-lg">
                  Asfar Munir Asfi
                </h2>
                <p className="text-xs 2xl:text-sm  3xl:text-base">
                  Zaeem@proppicks.com
                </p>
              </div>
            </div>
            <Link href={"/login"}>
              <Image
                src={"/icons/logout.svg"}
                alt="icon"
                width={16}
                className="2xl:w-[20px] dark:invert"
                height={16}
                priority
              />
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="flex sm:hidden items-center p-2 justify-between">
        <Image
          src={"/logo-dark.png"}
          alt="logo"
          width={140}
          height={140}
          priority
          className="  dark:hidden "
        />
        <Image
          src={"/logo-light.png"}
          alt="logo"
          width={140}
          height={140}
          priority
          className=" hidden dark:block"
        />
        <Sheet>
          <SheetTrigger>
            <Menu />
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
      </div> */}
    </>
  );
};

export default Sidebar;
