"use client";
import React, { useState } from "react";
import {
  FiSearch,
  FiDownload,
  FiToggleLeft,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

const AllClients = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("All Clients");

  const clientData = [
    {
      name: "Jeremy Thierry",
      country: "CA",
      email: "Jojofootball@gmail.com",
      dateJoined: "06/08/2024 UTC - 12:19:36 PM",
    },
    {
      name: "Jeremy Thierry",
      country: "CA",
      email: "Jojofootball@gmail.com",
      dateJoined: "06/08/2024 UTC - 12:19:36 PM",
    },
    {
      name: "Jeremy Thierry",
      country: "CA",
      email: "Jojofootball@gmail.com",
      dateJoined: "06/08/2024 UTC - 12:19:36 PM",
    },
    {
      name: "Jeremy Thierry",
      country: "CA",
      email: "Jojofootball@gmail.com",
      dateJoined: "06/08/2024 UTC - 12:19:36 PM",
    },
    {
      name: "Jeremy Thierry",
      country: "CA",
      email: "Jojofootball@gmail.com",
      dateJoined: "06/08/2024 UTC - 12:19:36 PM",
    },
    {
      name: "Jeremy Thierry",
      country: "CA",
      email: "Jojofootball@gmail.com",
      dateJoined: "06/08/2024 UTC - 12:19:36 PM",
    },
    {
      name: "Jeremy Thierry",
      country: "CA",
      email: "Jojofootball@gmail.com",
      dateJoined: "06/08/2024 UTC - 12:19:36 PM",
    },
    {
      name: "Jeremy Thierry",
      country: "CA",
      email: "Jojofootball@gmail.com",
      dateJoined: "06/08/2024 UTC - 12:19:36 PM",
    },
    {
      name: "Jeremy Thierry",
      country: "CA",
      email: "Jojofootball@gmail.com",
      dateJoined: "06/08/2024 UTC - 12:19:36 PM",
    },
    {
      name: "Jeremy Thierry",
      country: "CA",
      email: "Jojofootball@gmail.com",
      dateJoined: "06/08/2024 UTC - 12:19:36 PM",
    },
    {
      name: "Jeremy Thierry",
      country: "CA",
      email: "Jojofootball@gmail.com",
      dateJoined: "06/08/2024 UTC - 12:19:36 PM",
    },
    {
      name: "Jeremy Thierry",
      country: "CA",
      email: "Jojofootball@gmail.com",
      dateJoined: "06/08/2024 UTC - 12:19:36 PM",
    },
    {
      name: "Jeremy Thierry",
      country: "CA",
      email: "Jojofootball@gmail.com",
      dateJoined: "06/08/2024 UTC - 12:19:36 PM",
    },
  ];

  return (
    <div className="w-full bg-card min-h-full rounded-[10px] border flex flex-col gap-2 2xl:gap-4 p-3 2xl:p-6 3xl:p-7">
      {/* Header */}
      <div className="w-full flex items-center border-b border-[#E3E3E4] dark:border-[#0F2430] pb-4 mb-1 justify-between">
        <div className="flex items-center gap-2">
          <Image
            src={"/logo.png"}
            alt="logo"
            width={30}
            height={30}
            priority
            className="md:hidden"
          />
          <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
            All Clients
          </h1>
        </div>
      </div>

      {/* Clients section */}
      <div className="mb-6 mt-3">
        <div className="mb-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="">
            <h2 className="text-lg 2xl:text-xl font-semibold text-gray-900 dark:text-white mb-1">
              Clients in your Business
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              You can see all accounts from here.
            </p>
          </div>

          {/* Total counts and tabs */}
          <div className="flex items-center gap-4 overflow-x-auto max-w-full text-nowrap pb-2 md:pb-0">
            <div className="text-xs 2xl:text-sm text-gray-600 dark:text-gray-400 bg-card-foreground rounded-full p-2 px-4 border">
              <span className="font-semibold">Total Clients: 10,000</span>
            </div>
            <div className="flex items-center space-x-1  bg-gray-100 dark:bg-gray-800 rounded-full p-1">
              <button
                onClick={() => setActiveFilter("All Clients")}
                className={`px-3 2xl:px-5 py-2 rounded-full text-xs 2xl:text-sm  transition ${
                  activeFilter === "All Clients"
                    ? "bg-card font-semibold "
                    : "text-gray-600 dark:text-gray-300 font-normal hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                All Clients
              </button>
              <button
                onClick={() => setActiveFilter("Signal Provider")}
                className={`px-3 2xl:px-5 py-2 rounded-full text-xs 2xl:text-sm transition ${
                  activeFilter === "Signal Provider"
                    ? "bg-card font-semibold "
                    : "text-gray-600 dark:text-gray-300 font-normal hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                Signal Provider
              </button>
            </div>
          </div>
        </div>

        <div className="bg-card-foreground rounded-[8px] border p-4 2xl:p-6">
          {/* Table controls */}
          <div className="flex items-center justify-between mb-4 2xl:mb-5">
            <div className="relative">
              <Image
                src="/admin/search.svg"
                alt="Search Icon"
                width={16}
                height={16}
                className="absolute dark:invert left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400"
              />
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-full bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <button className="flex items-center space-x-2 bg-white dark:bg-gray-700 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 transition text-sm">
                <FiDownload className="w-4 h-4" />
                <span>Export</span>
              </button>
              <button className="flex items-center space-x-2 bg-white dark:bg-gray-700 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 transition text-sm">
                <FiToggleLeft className="w-4 h-4" />
                <span>Toggle Columns</span>
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="bg-card-foreground rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-4 py-3 2xl:py-4 text-left text-xs font-semibold uppercase tracking-wider">
                      <div className="flex items-center gap-2">
                        NAME
                        <svg
                          className="w-3 h-3"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                        </svg>
                      </div>
                    </th>
                    <th className="px-4 py-3 2xl:py-4 text-center text-xs 3xl:text-sm font-semibold uppercase tracking-wider">
                      <div className="flex items-center justify-center gap-2">
                        COUNTRY
                        <svg
                          className="w-3 h-3"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                        </svg>
                      </div>
                    </th>
                    <th className="px-4 py-3 2xl:py-4 text-center text-xs 3xl:text-sm font-semibold uppercase tracking-wider">
                      <div className="flex items-center justify-center gap-2">
                        EMAIL
                        <svg
                          className="w-3 h-3"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                        </svg>
                      </div>
                    </th>
                    <th className="px-4 py-3 2xl:py-4 text-center text-xs 3xl:text-sm font-semibold uppercase tracking-wider">
                      <div className="flex items-center justify-center gap-2">
                        DATE JOINED
                        <svg
                          className="w-3 h-3"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                        </svg>
                      </div>
                    </th>
                    <th className="px-4 py-3 2xl:py-4 text-center text-xs 3xl:text-sm font-semibold uppercase tracking-wider">
                      <div className="flex items-center justify-center gap-2"></div>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                  {clientData.map((client, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-50 dark:hover:bg-gray-700"
                    >
                      <td className="px-4 py-3 whitespace-nowrap text-sm 3xl:text-base text-gray-900 dark:text-white">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                          {client.name}
                        </div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-center text-sm 3xl:text-base text-gray-900 dark:text-white">
                        <div className="flex items-center justify-center gap-2">
                          <div className="w-2 h-2 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                          {client.country}
                        </div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-center text-sm 3xl:text-base text-gray-900 dark:text-white">
                        {client.email}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-center text-sm 3xl:text-base text-gray-900 dark:text-white">
                        {client.dateJoined}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm 3xl:text-base text-gray-900 dark:text-white">
                        <Link
                          href={"/customers/details"}
                          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                        >
                          <div className="w-4 h-4 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center">
                            <span className="text-xs">i</span>
                          </div>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-6">
          <button className="flex bg-card-foreground border rounded-full items-center space-x-2 px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
            <FiChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          <div className="flex items-center space-x-2">
            <button className="px-3 py-1 text-sm md:text-base border bg-card-foreground rounded-full">
              1
            </button>
            <button className="px-3 py-1 text-sm md:text-base hidden md:block text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
              2
            </button>
            <button className="px-3 py-1 text-sm md:text-base hidden md:block text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
              3
            </button>
            <span className="px-2 text-sm md:text-base hidden md:block text-gray-600 dark:text-gray-400">
              ...
            </span>
            <button className="px-3 py-1 text-sm md:text-base hidden md:block text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
              8
            </button>
            <button className="px-3 py-1 text-sm md:text-base hidden md:block text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
              9
            </button>
            <button className="px-3 py-1 text-sm md:text-base hidden md:block text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
              10
            </button>
          </div>

          <button className="flex bg-card-foreground border rounded-full items-center space-x-2 px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
            <span>Next</span>
            <FiChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllClients;
