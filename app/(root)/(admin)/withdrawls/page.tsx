"use client";
import React, { useState } from "react";
import {
  FiChevronLeft,
  FiChevronRight,
  FiDownload,
  FiToggleLeft,
} from "react-icons/fi";
import Image from "next/image";

const SignalProvidersPendingPayouts = () => {
  const [activeFilter, setActiveFilter] = useState("All Pending");

  const filters = ["All Pending", "Scheduled", "Completed"];

  const tableData = [
    {
      clientName: "Jeremy thiery",
      category: "Forex",
      subscribers: "1,472",
      totalPayouts: "4",
      payoutAmount: "$10,000",
      action: "Force Payout",
    },
    {
      clientName: "Jeremy thiery",
      category: "Forex",
      subscribers: "1,472",
      totalPayouts: "4",
      payoutAmount: "$10,000",
      action: "Force Payout",
    },
    {
      clientName: "Jeremy thiery",
      category: "Forex",
      subscribers: "1,472",
      totalPayouts: "4",
      payoutAmount: "$10,000",
      action: "Force Payout",
    },
    {
      clientName: "Jeremy thiery",
      category: "Forex",
      subscribers: "1,472",
      totalPayouts: "4",
      payoutAmount: "$10,000",
      action: "Force Payout",
    },
    {
      clientName: "Jeremy thiery",
      category: "Forex",
      subscribers: "1,472",
      totalPayouts: "4",
      payoutAmount: "$10,000",
      action: "Force Payout",
    },
    {
      clientName: "Jeremy thiery",
      category: "Forex",
      subscribers: "1,472",
      totalPayouts: "4",
      payoutAmount: "$10,000",
      action: "Force Payout",
    },
    {
      clientName: "Jeremy thiery",
      category: "Forex",
      subscribers: "1,472",
      totalPayouts: "4",
      payoutAmount: "$10,000",
      action: "Force Payout",
    },
    {
      clientName: "Jeremy thiery",
      category: "Forex",
      subscribers: "1,472",
      totalPayouts: "4",
      payoutAmount: "$10,000",
      action: "Force Payout",
    },
    {
      clientName: "Jeremy thiery",
      category: "Forex",
      subscribers: "1,472",
      totalPayouts: "4",
      payoutAmount: "$10,000",
      action: "Force Payout",
    },
    {
      clientName: "Jeremy thiery",
      category: "Forex",
      subscribers: "1,472",
      totalPayouts: "4",
      payoutAmount: "$10,000",
      action: "Force Payout",
    },
    {
      clientName: "Jeremy thiery",
      category: "Forex",
      subscribers: "1,472",
      totalPayouts: "4",
      payoutAmount: "$10,000",
      action: "Force Payout",
    },
    {
      clientName: "Jeremy thiery",
      category: "Forex",
      subscribers: "1,472",
      totalPayouts: "4",
      payoutAmount: "$10,000",
      action: "Force Payout",
    },
    {
      clientName: "Jeremy thiery",
      category: "Forex",
      subscribers: "1,472",
      totalPayouts: "4",
      payoutAmount: "$10,000",
      action: "Force Payout",
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
            Signal Providers Pending Payouts
          </h1>
        </div>
      </div>

      {/* Pending Payouts section */}
      <div className="mb-6 mt-3">
        <div className="mb-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="">
            <h2 className="text-lg 2xl:text-xl font-semibold text-gray-900 dark:text-white mb-1">
              Pending Payouts
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              You can see all pending payouts from here.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex items-center gap-4 overflow-x-auto max-w-full text-nowrap pb-2 md:pb-0">
            <div className="flex items-center space-x-1 bg-gray-100 dark:bg-gray-800 rounded-full p-1">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-3 2xl:px-5 py-2 rounded-full text-xs 2xl:text-sm transition ${
                    activeFilter === filter
                      ? "bg-card font-semibold"
                      : "text-gray-600 dark:text-gray-300 font-normal hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  {filter}
                </button>
              ))}
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
                      CLIENT NAME
                      <span className="ml-2">↕</span>
                    </th>
                    <th className="px-4 py-3 2xl:py-4 text-center text-xs 3xl:text-sm font-semibold uppercase tracking-wider">
                      CATEGORY
                      <span className="ml-2">↕</span>
                    </th>
                    <th className="px-4 py-3 2xl:py-4 text-center text-xs 3xl:text-sm font-semibold uppercase tracking-wider">
                      SUBSCRIBERS
                      <span className="ml-2">↕</span>
                    </th>
                    <th className="px-4 py-3 2xl:py-4 text-center text-xs 3xl:text-sm font-semibold uppercase tracking-wider">
                      TOTAL PAYOUTS
                      <span className="ml-2">↕</span>
                    </th>
                    <th className="px-4 py-3 2xl:py-4 text-center text-xs 3xl:text-sm font-semibold uppercase tracking-wider">
                      PAYOUT AMOUNT
                      <span className="ml-2">↕</span>
                    </th>
                    <th className="px-4 py-3 2xl:py-4 text-center text-xs 3xl:text-sm font-semibold uppercase tracking-wider">
                      {/* Action column */}
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                  {tableData.map((row, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-50 dark:hover:bg-gray-700"
                    >
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                        {row.clientName}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-center text-sm text-gray-900 dark:text-white">
                        {row.category}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-center text-sm text-gray-900 dark:text-white">
                        {row.subscribers}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-center text-sm text-gray-900 dark:text-white">
                        {row.totalPayouts}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-center text-sm text-gray-900 dark:text-white">
                        {row.payoutAmount}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-center text-sm text-gray-900 dark:text-white">
                        <button className="bg-card-foreground px-3 p-1 rounded-full border text-xs 2xl:text-sm">
                          {row.action}
                        </button>
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

export default SignalProvidersPendingPayouts;
