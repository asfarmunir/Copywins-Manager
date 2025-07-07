"use client";
import React, { useState } from "react";
import { FiChevronDown, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Image from "next/image";
import { MdDelete } from "react-icons/md";

const ManagementMembers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  const totalCodes = 12;

  // Add Member Modal State
  const [showAddMemberModal, setShowAddMemberModal] = useState(false);
  const [newMemberData, setNewMemberData] = useState({
    email: "",
    name: "",
    temporaryPassword: "",
    role: "",
  });

  // Sample data for management members
  const [members, setMembers] = useState([
    {
      id: 1,
      name: "Sandro",
      email: "sandro@example.com",
      role: "Super Admin",
    },
    {
      id: 2,
      name: "Sandro",
      email: "sandro@example.com",
      role: "Super Admin",
    },
    {
      id: 3,
      name: "Sandro",
      email: "sandro@example.com",
      role: "Super Admin",
    },
    {
      id: 4,
      name: "Sandro",
      email: "sandro@example.com",
      role: "Super Admin",
    },
    {
      id: 5,
      name: "Sandro",
      email: "sandro@example.com",
      role: "Super Admin",
    },
    {
      id: 6,
      name: "Sandro",
      email: "sandro@example.com",
      role: "Super Admin",
    },
    {
      id: 7,
      name: "Sandro",
      email: "sandro@example.com",
      role: "Super Admin",
    },
    {
      id: 8,
      name: "Sandro",
      email: "sandro@example.com",
      role: "Super Admin",
    },
  ]);

  const handleRemoveMember = (id: number) => {
    setMembers((prev) => prev.filter((member) => member.id !== id));
  };

  const handleResetPassword = (id: number) => {
    // Handle reset password logic
    console.log(`Reset password for member ${id}`);
  };

  const handleExport = () => {
    // Handle export logic
    console.log("Export data");
  };

  const handleToggleColumns = () => {
    // Handle toggle columns logic
    console.log("Toggle columns");
  };

  const handleCreateEmployee = () => {
    setShowAddMemberModal(true);
  };

  const handleAddMember = () => {
    // Add logic to create new member
    const newMember = {
      id: members.length + 1,
      name: newMemberData.name,
      email: newMemberData.email,
      role: newMemberData.role,
    };
    setMembers((prev) => [...prev, newMember]);
    setShowAddMemberModal(false);
    setNewMemberData({
      email: "",
      name: "",
      temporaryPassword: "",
      role: "",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setNewMemberData((prev) => ({
      ...prev,
      [field]: value,
    }));
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
            Management Members
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="mb-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
              View all members
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              You can see all members from here.
            </p>
          </div>

          {/* Total Codes and Create Button */}
          <div className="flex items-center gap-4">
            <div className="text-sm bg-card-foreground px-4 py-2 rounded-full border  text-gray-600 dark:text-gray-400">
              <span className="font-semibold">Total Codes:</span> {totalCodes}
            </div>
            <button
              onClick={handleCreateEmployee}
              className="bg-primary hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-semibold transition"
            >
              Create a employee
            </button>
          </div>
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
                onClick={handleExport}
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
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Export
              </button>

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

          {/* Members Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="text-left px-4 py-3 text-sm font-semibold rounded-l-lg">
                    <div className="flex items-center gap-2">
                      NAME
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
                      EMAIL
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
                      ROLE
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
                    ACTION
                  </th>
                </tr>
              </thead>
              <tbody className="bg-card">
                {members.map((member, index) => (
                  <tr
                    key={member.id}
                    className={`border-b border-gray-200 dark:border-gray-700 ${
                      index % 2 === 0
                        ? "bg-gray-50 dark:bg-gray-800/50"
                        : "bg-white dark:bg-gray-800"
                    }`}
                  >
                    <td className="px-4 py-3 text-sm text-gray-900 dark:text-white font-medium">
                      {member.name}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                      {member.email}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                      {member.role}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center  justify-end gap-2">
                        <button
                          onClick={() => handleRemoveMember(member.id)}
                          className="bg-red-100 hover:bg-red-200 text-red-600 px-3 py-1 rounded-full text-xs font-semibold transition"
                        >
                          Remove
                        </button>
                        <button
                          onClick={() => handleResetPassword(member.id)}
                          className="bg-gray-100 hover:bg-gray-200 text-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-300 px-3 py-1 rounded-full text-xs font-semibold transition"
                        >
                          Reset Password
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
        </div>
        <div className="flex items-center justify-between pt-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="bg-card-foreground rounded-full  font-semibold flex items-center gap-2 px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition"
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
                    ? "bg-card-foreground "
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
            className="bg-card-foreground rounded-full  font-semibold flex items-center gap-2 px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            Next
            <FiChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Add Member Modal */}
      {showAddMemberModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-card rounded-xl border shadow-xl w-full max-w-xl mx-4">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Add member
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  You can add members from here.
                </p>
              </div>
              <button
                onClick={() => setShowAddMemberModal(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-4">
              {/* Email Field */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter email"
                  value={newMemberData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-[8px] bg-card-foreground text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm"
                />
              </div>

              {/* Name Field */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter name"
                  value={newMemberData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-[8px] bg-card-foreground text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm"
                />
              </div>

              {/* Temporary Password Field */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Temporary password
                </label>
                <input
                  type="password"
                  placeholder="Enter temporary password"
                  value={newMemberData.temporaryPassword}
                  onChange={(e) =>
                    handleInputChange("temporaryPassword", e.target.value)
                  }
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-[8px] bg-card-foreground text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm"
                />
              </div>

              {/* Role Field */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Role
                </label>
                <div className="relative">
                  <select
                    value={newMemberData.role}
                    onChange={(e) => handleInputChange("role", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-[8px] bg-card-foreground text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm appearance-none"
                  >
                    <option value="">Choose role</option>
                    <option value="Super Admin">Super Admin</option>
                    <option value="Admin">Admin</option>
                    <option value="Manager">Manager</option>
                    <option value="Editor">Editor</option>
                  </select>
                  <FiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-end gap-3 p-6 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={() => setShowAddMemberModal(false)}
                className="px-6 py-2 w-full text-sm font-semibold text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full transition"
              >
                Cancel
              </button>
              <button
                onClick={handleAddMember}
                disabled={
                  !newMemberData.email ||
                  !newMemberData.name ||
                  !newMemberData.temporaryPassword ||
                  !newMemberData.role
                }
                className="px-6 py-2 w-full text-sm font-semibold text-white bg-primary hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed rounded-full transition"
              >
                Add member
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManagementMembers;
