"use client";
import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Image from "next/image";
import CreateDiscountModal from "@/components/shared/admin/AddDiscountCode";
import DiscountDetailsModal from "@/components/shared/admin/CoupenDetail";

const DiscountCodes = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isDiscountDetailsOpen, setIsDiscountDetailsOpen] = useState(false);

  const discountData = [
    {
      code: "Launch",
      description: "30% OFF, One Time Use",
      type: "Percentage",
      amount: "30%",
      usageLimit: "Unlimited",
      ordersCreated: 30,
      validation: 150,
    },
    {
      code: "Launch",
      description: "30% OFF, One Time Use",
      type: "Percentage",
      amount: "30%",
      usageLimit: "Unlimited",
      ordersCreated: 30,
      validation: 150,
    },
    {
      code: "Launch",
      description: "30% OFF, One Time Use",
      type: "Percentage",
      amount: "30%",
      usageLimit: "Unlimited",
      ordersCreated: 30,
      validation: 150,
    },
    {
      code: "Launch",
      description: "30% OFF, One Time Use",
      type: "Percentage",
      amount: "30%",
      usageLimit: "Unlimited",
      ordersCreated: 30,
      validation: 150,
    },
    {
      code: "Launch",
      description: "30% OFF, One Time Use",
      type: "Percentage",
      amount: "30%",
      usageLimit: "Unlimited",
      ordersCreated: 30,
      validation: 150,
    },
    {
      code: "Launch",
      description: "30% OFF, One Time Use",
      type: "Percentage",
      amount: "30%",
      usageLimit: "Unlimited",
      ordersCreated: 30,
      validation: 150,
    },
    {
      code: "Launch",
      description: "30% OFF, One Time Use",
      type: "Percentage",
      amount: "30%",
      usageLimit: "Unlimited",
      ordersCreated: 30,
      validation: 150,
    },
    {
      code: "Launch",
      description: "30% OFF, One Time Use",
      type: "Percentage",
      amount: "30%",
      usageLimit: "Unlimited",
      ordersCreated: 30,
      validation: 150,
    },
    {
      code: "Launch",
      description: "30% OFF, One Time Use",
      type: "Percentage",
      amount: "30%",
      usageLimit: "Unlimited",
      ordersCreated: 30,
      validation: 150,
    },
    {
      code: "Launch",
      description: "30% OFF, One Time Use",
      type: "Percentage",
      amount: "30%",
      usageLimit: "Unlimited",
      ordersCreated: 30,
      validation: 150,
    },
    {
      code: "Launch",
      description: "30% OFF, One Time Use",
      type: "Percentage",
      amount: "30%",
      usageLimit: "Unlimited",
      ordersCreated: 30,
      validation: 150,
    },
    {
      code: "Launch",
      description: "30% OFF, One Time Use",
      type: "Percentage",
      amount: "30%",
      usageLimit: "Unlimited",
      ordersCreated: 30,
      validation: 150,
    },
    {
      code: "Launch",
      description: "30% OFF, One Time Use",
      type: "Percentage",
      amount: "30%",
      usageLimit: "Unlimited",
      ordersCreated: 30,
      validation: 150,
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
            Discount Codes
          </h1>
        </div>
      </div>

      {/* View all discount codes section */}
      <div className="mb-6 mt-3">
        <div className="mb-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="">
            <h2 className="text-lg 2xl:text-xl font-semibold text-gray-900 dark:text-white mb-1">
              View all discount codes
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              You can see all discount codes from here.
            </p>
          </div>

          {/* Total count and create button */}
          <div className="flex items-center gap-4">
            <div className="text-xs 2xl:text-sm text-gray-600 dark:text-gray-400 bg-card-foreground rounded-full p-2 px-4 border">
              <span className="font-semibold">Total Codes: 12</span>
            </div>
            <button
              onClick={() => setIsCreateModalOpen(true)}
              className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-primary/90 transition"
            >
              Create a discount code
            </button>
          </div>
        </div>

        <div className="bg-card-foreground rounded-[8px] border p-4 2xl:p-6">
          {/* Search */}
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
                className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-full bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm w-64"
              />
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
                        CODE
                        <div className="flex flex-col">
                          <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-b-[4px] border-l-transparent border-r-transparent border-b-white/70"></div>
                          <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-t-[4px] border-l-transparent border-r-transparent border-t-white/70 mt-[1px]"></div>
                        </div>
                      </div>
                    </th>
                    <th className="px-4 py-3 2xl:py-4 text-center text-xs font-semibold uppercase tracking-wider">
                      <div className="flex items-center justify-center gap-2">
                        DESCRIPTION
                        <div className="flex flex-col">
                          <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-b-[4px] border-l-transparent border-r-transparent border-b-white/70"></div>
                          <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-t-[4px] border-l-transparent border-r-transparent border-t-white/70 mt-[1px]"></div>
                        </div>
                      </div>
                    </th>
                    <th className="px-4 py-3 2xl:py-4 text-center text-xs font-semibold uppercase tracking-wider">
                      <div className="flex items-center justify-center gap-2">
                        TYPE
                        <div className="flex flex-col">
                          <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-b-[4px] border-l-transparent border-r-transparent border-b-white/70"></div>
                          <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-t-[4px] border-l-transparent border-r-transparent border-t-white/70 mt-[1px]"></div>
                        </div>
                      </div>
                    </th>
                    <th className="px-4 py-3 2xl:py-4 text-center text-xs font-semibold uppercase tracking-wider">
                      <div className="flex items-center justify-center gap-2">
                        AMOUNT
                        <div className="flex flex-col">
                          <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-b-[4px] border-l-transparent border-r-transparent border-b-white/70"></div>
                          <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-t-[4px] border-l-transparent border-r-transparent border-t-white/70 mt-[1px]"></div>
                        </div>
                      </div>
                    </th>
                    <th className="px-4 py-3 2xl:py-4 text-center text-xs font-semibold uppercase tracking-wider">
                      <div className="flex items-center justify-center gap-2">
                        USAGE LIMIT
                        <div className="flex flex-col">
                          <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-b-[4px] border-l-transparent border-r-transparent border-b-white/70"></div>
                          <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-t-[4px] border-l-transparent border-r-transparent border-t-white/70 mt-[1px]"></div>
                        </div>
                      </div>
                    </th>
                    <th className="px-4 py-3 2xl:py-4 text-center text-xs font-semibold uppercase tracking-wider">
                      <div className="flex items-center justify-center gap-2">
                        ORDERS CREATED
                        <div className="flex flex-col">
                          <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-b-[4px] border-l-transparent border-r-transparent border-b-white/70"></div>
                          <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-t-[4px] border-l-transparent border-r-transparent border-t-white/70 mt-[1px]"></div>
                        </div>
                      </div>
                    </th>
                    <th className="px-4 py-3 2xl:py-4 text-center text-xs font-semibold uppercase tracking-wider">
                      <div className="flex items-center justify-center gap-2">
                        VALIDATION
                        <div className="flex flex-col">
                          <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-b-[4px] border-l-transparent border-r-transparent border-b-white/70"></div>
                          <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-t-[4px] border-l-transparent border-r-transparent border-t-white/70 mt-[1px]"></div>
                        </div>
                      </div>
                    </th>
                    <th className="px-4 py-3 2xl:py-4 text-center text-xs font-semibold uppercase tracking-wider">
                      <div className="flex items-center justify-center gap-2">
                        <div className="flex flex-col">
                          <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-b-[4px] border-l-transparent border-r-transparent border-b-white/70"></div>
                          <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-t-[4px] border-l-transparent border-r-transparent border-t-white/70 mt-[1px]"></div>
                        </div>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                  {discountData.map((row, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-50 dark:hover:bg-gray-700"
                    >
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                        {row.code}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-center text-sm text-gray-900 dark:text-white">
                        {row.description}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-center text-sm text-gray-900 dark:text-white">
                        {row.type}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-center text-sm text-gray-900 dark:text-white">
                        {row.amount}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-center text-sm text-gray-900 dark:text-white">
                        {row.usageLimit}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-center text-sm text-gray-900 dark:text-white">
                        {row.ordersCreated}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-center text-sm text-gray-900 dark:text-white">
                        {row.validation}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                        <button
                          onClick={() => setIsDiscountDetailsOpen(true)}
                          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                        >
                          <div className="w-4 h-4 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center">
                            <span className="text-xs">i</span>
                          </div>
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
            <button className="px-3 py-1 text-sm md:text-base bg-card-foreground rounded-full">
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
      <CreateDiscountModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
      />
      <DiscountDetailsModal
        isOpen={isDiscountDetailsOpen}
        onClose={() => setIsDiscountDetailsOpen(false)}
      />
    </div>
  );
};

export default DiscountCodes;
