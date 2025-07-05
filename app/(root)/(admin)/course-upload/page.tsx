"use client";
import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Image from "next/image";
import RejectCourseDetails from "@/components/shared/admin/RejectCourse";

const CoursesPendingReview = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tableData = [
    {
      clientNumber: "345687",
      clientName: "Jeremy Thierry",
      program: "Sports",
      allowCourseUpload: "Yes",
      status: "No",
    },
    {
      clientNumber: "345687",
      clientName: "Jeremy Thierry",
      program: "Sports",
      allowCourseUpload: "Yes",
      status: "No",
    },
    {
      clientNumber: "345687",
      clientName: "Jeremy Thierry",
      program: "Sports",
      allowCourseUpload: "Yes",
      status: "No",
    },
    {
      clientNumber: "345687",
      clientName: "Jeremy Thierry",
      program: "Sports",
      allowCourseUpload: "Yes",
      status: "No",
    },
    {
      clientNumber: "345687",
      clientName: "Jeremy Thierry",
      program: "Sports",
      allowCourseUpload: "Yes",
      status: "No",
    },
    {
      clientNumber: "345687",
      clientName: "Jeremy Thierry",
      program: "Sports",
      allowCourseUpload: "Yes",
      status: "No",
    },
    {
      clientNumber: "345687",
      clientName: "Jeremy Thierry",
      program: "Sports",
      allowCourseUpload: "Yes",
      status: "No",
    },
    {
      clientNumber: "345687",
      clientName: "Jeremy Thierry",
      program: "Sports",
      allowCourseUpload: "Yes",
      status: "No",
    },
    {
      clientNumber: "345687",
      clientName: "Jeremy Thierry",
      program: "Sports",
      allowCourseUpload: "Yes",
      status: "No",
    },
    {
      clientNumber: "345687",
      clientName: "Jeremy Thierry",
      program: "Sports",
      allowCourseUpload: "Yes",
      status: "No",
    },
    {
      clientNumber: "345687",
      clientName: "Jeremy Thierry",
      program: "Sports",
      allowCourseUpload: "Yes",
      status: "No",
    },
    {
      clientNumber: "345687",
      clientName: "Jeremy Thierry",
      program: "Sports",
      allowCourseUpload: "Yes",
      status: "No",
    },
    {
      clientNumber: "345687",
      clientName: "Jeremy Thierry",
      program: "Sports",
      allowCourseUpload: "Yes",
      status: "No",
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
            Courses - Pending Review
          </h1>
        </div>
      </div>

      {/* Pending to course marketplace section */}
      <div className="mb-6 mt-3">
        <div className="mb-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="">
            <h2 className="text-lg 2xl:text-xl font-semibold text-gray-900 dark:text-white mb-1">
              Pending to course marketplace
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              you see all pending courses from here.
            </p>
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
                className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-full bg-card text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
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
                      <div className="flex items-center gap-1">
                        CLIENT NUMBER
                        <svg
                          className="w-3 h-3"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                        </svg>
                      </div>
                    </th>
                    <th className="px-4 py-3 2xl:py-4 text-left text-xs 3xl:text-sm font-semibold uppercase tracking-wider">
                      <div className="flex items-center gap-1">
                        CLIENT NAME
                        <svg
                          className="w-3 h-3"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                        </svg>
                      </div>
                    </th>
                    <th className="px-4 py-3 2xl:py-4 text-left text-xs 3xl:text-sm font-semibold uppercase tracking-wider">
                      <div className="flex items-center gap-1">
                        PROGRAM
                        <svg
                          className="w-3 h-3"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                        </svg>
                      </div>
                    </th>
                    <th className="px-4 py-3 2xl:py-4 text-right text-xs 3xl:text-sm font-semibold uppercase tracking-wider">
                      <div className="flex items-center justify-end gap-1">
                        ALLOW COURSE UPLOAD
                        <svg
                          className="w-3 h-3"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                        </svg>
                      </div>
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
                        <div className="flex items-center gap-2">
                          {row.clientNumber}
                        </div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                        <div className="flex items-center gap-2">
                          {row.clientName}
                        </div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                        <div className="flex items-center gap-2">
                          {row.program}
                        </div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                        <div className="flex items-center justify-end gap-2">
                          <div className="flex items-center gap-1">
                            <button className="px-4 md:w-20 text-center xl:w-36 py-2 text-xs rounded-full bg-green-100 text-green-800 dark:bg-green-700/20 dark:text-green-200">
                              Yes
                            </button>
                            <button
                              onClick={() => setIsModalOpen(true)}
                              className="px-4 md:w-20 text-center xl:w-36 py-2 text-xs rounded-full bg-red-100 text-red-800 dark:bg-red-700/40 dark:text-red-200"
                            >
                              No
                            </button>
                          </div>
                        </div>
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
      <RejectCourseDetails
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default CoursesPendingReview;
