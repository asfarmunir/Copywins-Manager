"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { HiOutlineMail } from "react-icons/hi";

import Image from "next/image";
import { useState } from "react";
import { FiUser, FiCalendar, FiMapPin, FiMoreHorizontal } from "react-icons/fi";
import { MdVerified } from "react-icons/md";
import { IoGlobeOutline } from "react-icons/io5";
import { HiOutlineChatBubbleLeftEllipsis } from "react-icons/hi2";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const ProfileDialog = () => {
  const [tab, setTab] = useState("posts");
  return (
    <Dialog>
      <DialogTrigger className="text-primary hover:underline">
        View Profile
      </DialogTrigger>
      <DialogContent className="max-w-[90%] 3xl:max-w-[80%] max-h-[95svh] md:max-h-[90svh] overflow-hidden   rounded-lg">
        <DialogHeader className=" pt-5 px-4 2xl:px-6">
          <DialogTitle className="text-left text-xl font-bold pb-4 border-b">
            Profile
          </DialogTitle>
        </DialogHeader>

        <div className=" flex flex-col md:flex-row w-full  ">
          <div className=" w-full md:w-[30%] pb-6 md:pb-0">
            <div className="flex flex-col  items-center">
              <div className=" w-full h-28 md:h-40">
                <Image
                  src={"/profile-bg.svg"}
                  alt="Profile"
                  width={1000}
                  height={400}
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </div>
              <div className="flex flex-col -mt-12  items-center">
                <div className=" w-20 md:w-28 h-20 md:h-20 rounded-full border-2 border-white dark:border-slate-800 bg-primary"></div>
                <h2 className="text-xl font-semibold inline-flex items-center gap-3">
                  Sandro Carossela
                  <MdVerified color="green" />
                </h2>
                <p className="text-gray-500 text-xs md:text-sm">@UWSMC</p>
              </div>
              <div className="flex gap-2 my-3">
                <button className="px-6 py-2 bg-primary text-white rounded-full text-xs md:text-sm">
                  Follow
                </button>
                <button className="px-4 py-2 bg-card     border rounded-full text-xs md:text-sm">
                  Subscribe
                </button>
                <button className="px-4 py-2 bg-card     border rounded-full text-xs md:text-sm">
                  Leave a tip
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="flex justify-center  items-center gap-7 my-4">
              <div className="flex flex-col items-center">
                <span className="font-bold text-base md:text-lg 2xl:text-xl">
                  142
                </span>{" "}
                <span className="text-gray-500 text-xs md:text-base 2xl:text-base">
                  Posts
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-bold text-base md:text-lg 2xl:text-xl">
                  32K
                </span>{" "}
                <span className="text-gray-500 text-xs md:text-base 2xl:text-base">
                  Followers
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-bold text-base md:text-lg 2xl:text-xl">
                  117
                </span>{" "}
                <span className="text-gray-500 text-xs md:text-base 2xl:text-base">
                  Following
                </span>
              </div>
            </div>

            {/* Location and Join Date */}
            <div className="flex items-center justify-center  gap-4 text-sm 2xl:text-base text-gray-600 dark:text-slate-100">
              <div className="flex items-center gap-1">
                <FiMapPin size={14} />
                <span>View, York, USA</span>
              </div>
              <div className="flex items-center gap-1">
                <FiCalendar size={14} />
                <span>Joined Jan 2022</span>
              </div>
            </div>
          </div>
          <div className="  p-2 md:p-4 2xl:px-6  w-full  md:w-[70%] overflow-y-auto  h-[45svh] md:h-[85svh] no-scrollbar  ">
            <nav className="flex gap-1 md:gap-4 ">
              <button
                className={`  rounded-full px-4 text-xs 2xl:text-sm   text-nowrap
                ${
                  tab === "posts"
                    ? "bg-card border p-2  dyark:bg-card font-semibold"
                    : "text-gray-500 dark:text-slate-200"
                }
                `}
                onClick={() => setTab("posts")}
              >
                Posts
              </button>
              <button
                className={` rounded-full hidden md:block text-xs 2xl:text-sm px-4
                    ${
                      tab === "Client Reviews"
                        ? "bg-card  py-2 dark:bg-card font-semibold"
                        : "text-gray-500 dark:text-slate-200"
                    }
                    `}
                onClick={() => setTab("Client Reviews")}
              >
                Client Reviews
              </button>
              <button
                className={`  rounded-full px-4 text-xs 2xl:text-sm   text-nowrap
                    ${
                      tab === "Premium content"
                        ? "bg-card border  py-2 dark:bg-card font-semibold"
                        : "text-gray-500 dark:text-slate-200"
                    }
                    `}
                onClick={() => setTab("Premium content")}
              >
                Premium content
              </button>
              <button
                className={`  rounded-full px-4 text-xs 2xl:text-sm   text-nowrap
                    ${
                      tab === "Signal history"
                        ? "bg-card border  py-2 dark:bg-card font-semibold"
                        : "text-gray-500 dark:text-slate-200"
                    }
                    `}
                onClick={() => setTab("Signal history")}
              >
                Signal history
              </button>
              <button
                className={`rounded-full px-4 text-xs 2xl:text-sm   text-nowrap
                    ${
                      tab === "About"
                        ? "bg-card bord ery p-2 dark:bg-card font-semibold"
                        : "text-gray-500 dark:text-slate-200"
                    }
                    `}
                onClick={() => setTab("About")}
              >
                About
              </button>
            </nav>

            {tab === "posts" && (
              <div className="mt-4 space-y-6">
                {Array.from({ length: 3 }, (_, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-[10px] border p-4"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-md bg-[#0C9DFF] flex items-center justify-center ">
                          <p className=" font-semibold text-white">SC</p>
                        </div>{" "}
                        <div>
                          <h3 className="font-semibold text-sm mb-0.5 capitalize">
                            sandro carossela · @UWSMC
                          </h3>
                          <p className="text-gray-500 text-xs">
                            16 Dec at 6:43 pm
                          </p>
                        </div>
                        <span className="inline-flex items-center px-2 py-1 rounded-full bg-[#28A745] text-white text-xs font-normal">
                          Verified
                        </span>
                      </div>
                      <button className="text-gray-500 hover:text-gray-700">
                        <FiMoreHorizontal />
                      </button>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm">
                        Known as "The Wolf of All Streets," Scott Melker
                        provides regular market updates, technical analysis, and
                        interviews with key industry figures.
                      </p>
                    </div>
                    <div className=" w-full h-[330px] 2xl:h-[400px] 3xl:h-[480px] rounded-[10px] bg-white">
                      <Image
                        src={"/authBg1.webp"}
                        alt="featured"
                        width={500}
                        height={200}
                        className="rounded-[10px] object-cover w-full h-full"
                      />
                    </div>
                    <div className="flex items-center justify-between border-t border-[#E3E3E4] dark:border-[#0F2430] pt-4 mt-4 mb-2">
                      <button className="flex items-center space-x-3 text-gray-500 hover:text-red-500 text-sm">
                        <Image
                          src={"/icons/heart.svg"}
                          alt="like"
                          width={20}
                          height={20}
                          className="dark:invert "
                        />
                        <Image
                          src={"/icons/comment.svg"}
                          alt="like"
                          width={20}
                          height={20}
                          className="dark:invert "
                        />
                      </button>
                      <button className="flex items-center space-x-3 text-gray-500 dark:text-slate-100 hover:text-blue-500 text-sm">
                        <span>1 Like</span>
                        <span>·</span>
                        <span>3 Comments</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {tab === "Client Reviews" && (
              <div className=" h-full flex-1 flex flex-col items-center justify-center bg-card rounded-[10px] border p-4 mt-4">
                <p>No reviews available yet.</p>
              </div>
            )}
            {tab === "Premium content" && (
              <div className=" h-full flex-1 flex flex-col items-center justify-center bg-card rounded-[10px] border p-4 mt-4">
                <p>No premium content available yet.</p>
              </div>
            )}

            {tab === "About" && (
              <div className="mt-4 space-y-6">
                <div className="bg-card rounded-[10px] border p-4 2xl:p-6">
                  <h3 className="font-semibold text-lg 2xl:text-xl mb-4">
                    About Sergio Marquina
                  </h3>
                  <p className="text-sm 2xl:text-base text-gray-600 dark:text-slate-200">
                    Sergio Marquina, known as "The Professor," is a renowned
                    financial analyst and educator with over 15 years of
                    experience in the industry. He specializes in technical
                    analysis and market trends, providing valuable insights to
                    traders and investors. <br /> <br />
                    I'm a full-time trader and financial analyst with over 8
                    years of experience in the markets. My journey began in
                    Trading trading before expanding into cryptocurrencies and
                    traditional stocks.
                  </p>
                </div>
                <div className="bg-card rounded-[10px] border p-4 2xl:p-6">
                  <h3 className="font-semibold text-lg 2xl:text-xl mb-4">
                    Contact Information
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="p-2 bg-card-foreground rounded-full">
                        <HiOutlineMail className="text-lg text-gray-600 dark:text-slate-200" />
                      </span>

                      <span className="text-sm 2xl:text-base text-gray-600 dark:text-slate-200">
                        abc@gmail.com
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="p-2 bg-card-foreground rounded-full">
                        <IoGlobeOutline className="text-lg text-gray-600 dark:text-slate-200" />
                      </span>

                      <span className="text-sm 2xl:text-base text-gray-600 dark:text-slate-200">
                        www.uwsmc.com
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="p-2 bg-card-foreground rounded-full">
                        <HiOutlineChatBubbleLeftEllipsis className="text-lg text-gray-600 dark:text-slate-200" />
                      </span>

                      <span className="text-sm 2xl:text-base text-gray-600 dark:text-slate-200">
                        Available for consultations
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-card rounded-[10px] border p-4 2xl:p-6">
                  <h3 className="font-semibold text-lg 2xl:text-xl mb-4">
                    Experties and Specializations
                  </h3>
                  <div className="flex items-center gap-3">
                    {[
                      "Technical Analysis",
                      "Market Trends",
                      "Risk Management",
                      "Trading Psychology",
                    ].map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-2 bg-gray-50 dark:bg-slate-700 rounded-full text-sm 2xl:text-base"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
            {tab === "Signal history" && (
              <div className=" w-full mt-4 p-4 bg-card border rounded-[10px]">
                <Table>
                  <TableCaption>Signals and Results.</TableCaption>
                  <TableHeader className=" bg-card-foreground">
                    <TableRow>
                      <TableHead className=" text-center text-foreground">
                        Assets
                      </TableHead>
                      <TableHead className=" text-center text-foreground">
                        Type
                      </TableHead>
                      <TableHead className=" text-center text-foreground">
                        Entry
                      </TableHead>
                      <TableHead className=" text-center text-foreground">
                        Exit
                      </TableHead>
                      <TableHead className=" text-center text-foreground">
                        Result
                      </TableHead>
                      <TableHead className=" text-center text-foreground">
                        Date
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {Array.from({ length: 10 }, (_, index) => (
                      <TableRow key={index}>
                        <TableCell className=" text-center ">BTC/USD</TableCell>
                        <TableCell className=" text-center ">Long</TableCell>
                        <TableCell className=" text-center ">12,434$</TableCell>
                        <TableCell className=" text-center ">13,563$</TableCell>
                        <TableCell className=" text-center ">
                          <p className="text-green-500 dark:bg-green-800/20  bg-green-50 w-fit mx-auto rounded-full px-5 py-2">
                            +9.1%
                          </p>
                        </TableCell>
                        <TableCell className=" text-center ">
                          May 15,2025
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
