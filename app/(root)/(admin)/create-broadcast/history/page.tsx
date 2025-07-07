"use client";
import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

const PastBroadcasts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  // Sample data for past broadcasts
  const [broadcasts] = useState([
    {
      id: 1,
      title: "New feature release",
      date: "2024-01-15",
      status: "Sent",
    },
    {
      id: 2,
      title: "New feature release",
      date: "2024-01-14",
      status: "Scheduled",
    },
    {
      id: 3,
      title: "New feature release",
      date: "2024-01-13",
      status: "Scheduled",
    },
    {
      id: 4,
      title: "New feature release",
      date: "2024-01-12",
      status: "Scheduled",
    },
    {
      id: 5,
      title: "New feature release",
      date: "2024-01-11",
      status: "Scheduled",
    },
    {
      id: 6,
      title: "New feature release",
      date: "2024-01-10",
      status: "Scheduled",
    },
  ]);

  const handleToggleColumns = () => {
    // Handle toggle columns logic
    console.log("Toggle columns");
  };

  const handlePreview = (id: number) => {
    // Handle preview logic
    console.log(`Preview broadcast ${id}`);
  };

  const getStatusBadge = (status: string) => {
    if (status === "Sent") {
      return (
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
          Sent
        </span>
      );
    } else if (status === "Scheduled") {
      return (
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400">
          Scheduled
        </span>
      );
    }
    return null;
  };

  const renderPaginationNumbers = () => {
    const pages = [];

    // Always show page 1
    pages.push(1);

    // Show current page and surrounding pages
    if (currentPage > 3) {
      pages.push("...");
    }

    for (
      let i = Math.max(2, currentPage - 1);
      i <= Math.min(currentPage + 1, totalPages - 1);
      i++
    ) {
      if (i !== 1 && i !== totalPages) {
        pages.push(i);
      }
    }

    // Show ellipsis before last page if needed
    if (currentPage < totalPages - 2) {
      pages.push("...");
    }

    // Always show last page if it's not page 1
    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className="w-full bg-card min-h-full rounded-[10px] border flex flex-col gap-4 p-3 md:p-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-2">
        <Link
          href="/admin/create-broadcast"
          className="hover:text-gray-900 dark:hover:text-white transition"
        >
          Create broadcast
        </Link>
        <span className="text-gray-400">›</span>
        <span className="text-gray-900 dark:text-white font-medium">
          Past broadcast
        </span>
      </div>

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
            Past Broadcasts
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="mb-6">
        {/* Header Section */}
        <div className="mb-6">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            You can see past broadcasts from here.
          </p>
        </div>

        {/* Controls Section */}
        <div className="bg-card-foreground rounded-lg border p-4 md:p-6 space-y-6">
          {/* Search and Action Buttons */}
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <div className="relative flex-1 max-w-md">
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
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-full bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleToggleColumns}
                className="flex items-center gap-2 bg-card border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white px-4 py-2 rounded-full text-sm font-semibold transition"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 0v10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
                  />
                </svg>
                Toggle Columns
              </button>
            </div>
          </div>

          {/* Broadcasts Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="text-left px-4 py-3 text-sm font-semibold rounded-l-lg">
                    <div className="flex items-center gap-2">
                      TITLE
                      <button className="text-white hover:text-gray-200">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                          />
                        </svg>
                      </button>
                    </div>
                  </th>
                  <th className="text-left px-4 py-3 text-sm font-semibold">
                    <div className="flex items-center gap-2">
                      DATE
                      <button className="text-white hover:text-gray-200">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                          />
                        </svg>
                      </button>
                    </div>
                  </th>
                  <th className="text-left px-4 py-3 text-sm font-semibold">
                    <div className="flex items-center gap-2">
                      STATUS
                      <button className="text-white hover:text-gray-200">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                          />
                        </svg>
                      </button>
                    </div>
                  </th>
                  <th className="text-right px-4 py-3 text-sm font-semibold rounded-r-lg">
                    ACTIONS
                  </th>
                </tr>
              </thead>
              <tbody className="bg-card">
                {broadcasts.map((broadcast, index) => (
                  <tr
                    key={broadcast.id}
                    className={`border-b border-gray-200 dark:border-gray-700 ${
                      index % 2 === 0
                        ? "bg-gray-50 dark:bg-gray-800/50"
                        : "bg-white dark:bg-gray-800"
                    }`}
                  >
                    <td className="px-4 py-3 text-sm text-gray-900 dark:text-white font-medium">
                      {broadcast.title}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                      {new Date(broadcast.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </td>
                    <td className="px-4 py-3">
                      {getStatusBadge(broadcast.status)}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-end">
                        <button
                          onClick={() => handlePreview(broadcast.id)}
                          className="bg-gray-100 hover:bg-gray-200 text-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-300 px-3 py-1 rounded-full text-xs font-semibold transition"
                        >
                          Preview
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between pt-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="bg-card-foreground rounded-full font-semibold flex items-center gap-2 px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            <FiChevronLeft className="w-4 h-4" />
            Previous
          </button>

          <div className="flex items-center gap-2">
            {renderPaginationNumbers().map((page, index) => (
              <button
                key={index}
                onClick={() => typeof page === "number" && setCurrentPage(page)}
                disabled={page === "..."}
                className={`w-8 h-8 flex items-center justify-center text-sm rounded-full transition ${
                  page === currentPage
                    ? "bg-card-foreground"
                    : page === "..."
                    ? "text-gray-400 cursor-default"
                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="bg-card-foreground rounded-full font-semibold flex items-center gap-2 px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            Next
            <FiChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PastBroadcasts;
