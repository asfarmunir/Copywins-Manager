"use client";
import React, { useState } from "react";
import { FiSearch, FiChevronDown } from "react-icons/fi";
import Image from "next/image";
import { MdDelete } from "react-icons/md";

const ContentModeration = () => {
  const [activeTab, setActiveTab] = useState("Comments");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const tabs = ["Comments", "Posts", "Messages", "Reviews"];

  const moderationData = [
    {
      id: 1,
      user: "sandro carossela",
      handle: "@UWSMC",
      timestamp: "16 Dec at 6:43 pm",
      content: "This is a great product, I love it!",
      status: "Positive",
      selected: true,
    },
    {
      id: 2,
      user: "sandro carossela",
      handle: "@UWSMC",
      timestamp: "16 Dec at 6:43 pm",
      content: "This is a great product, I love it!",
      status: "Question",
      selected: false,
    },
    {
      id: 3,
      user: "sandro carossela",
      handle: "@UWSMC",
      timestamp: "16 Dec at 6:43 pm",
      content: "This is a great product, I love it!",
      status: "Report",
      selected: false,
    },
  ];

  const postsData = [
    {
      id: 1,
      user: "sandro carossela",
      handle: "@UWSMC",
      timestamp: "16 Dec at 6:43 pm",
      title: "New Product Launch",
      content:
        "We're excited to announce our latest product line that will revolutionize the industry...",
      status: "Published",
      selected: true,
    },
    {
      id: 2,
      user: "sandro carossela",
      handle: "@UWSMC",
      timestamp: "16 Dec at 6:43 pm",
      title: "Company Update - Q2 2025",
      content:
        "This quarter has been exceptional with growth across all departments. We've seen a 25% increase in...",
      status: "Draft",
      selected: false,
    },
    {
      id: 3,
      user: "sandro carossela",
      handle: "@UWSMC",
      timestamp: "16 Dec at 6:43 pm",
      title: "Customer Testimonials",
      content:
        "Hear what our customers are saying about our services and how we've helped them achieve their goals...",
      status: "Flagged",
      selected: false,
    },
  ];

  const messagesData = [
    {
      id: 1,
      user: "sandro carossela",
      handle: "@UWSMC",
      timestamp: "16 Dec at 6:43 pm",
      content:
        "I'm interested in your enterprise plan. Could someone from sales contact me to discuss options?",
      status: "New",
      selected: true,
    },
    {
      id: 2,
      user: "sandro carossela",
      handle: "@UWSMC",
      timestamp: "16 Dec at 6:43 pm",
      content:
        "Thank you for your quick response. I've scheduled the demo for next Tuesday.",
      status: "Replied",
      selected: false,
    },
    {
      id: 3,
      user: "sandro carossela",
      handle: "@UWSMC",
      timestamp: "16 Dec at 6:43 pm",
      content:
        "Click here to claim your prize! You've won $1,000,000 in our lottery!",
      status: "Spam",
      selected: false,
    },
  ];

  const reviewsData = [
    {
      id: 1,
      user: "sandro carossela",
      handle: "@UWSMC",
      timestamp: "16 Dec at 6:43 pm",
      product: "Premium Headphones X3",
      content:
        "We're excited to announce our latest product line that will revolutionize the industry...",
      rating: 4,
      status: "Approved",
      selected: true,
    },
    {
      id: 2,
      user: "sandro carossela",
      handle: "@UWSMC",
      timestamp: "16 Dec at 6:43 pm",
      product: "Premium Headphones X3",
      content:
        "We're excited to announce our latest product line that will revolutionize the industry...",
      rating: 4,
      status: "Pending",
      selected: false,
    },
    {
      id: 3,
      user: "sandro carossela",
      handle: "@UWSMC",
      timestamp: "16 Dec at 6:43 pm",
      product: "Premium Headphones X3",
      content:
        "We're excited to announce our latest product line that will revolutionize the industry...",
      rating: 4,
      status: "Rejected",
      selected: false,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Positive":
        return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400";
      case "Question":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400";
      case "Report":
        return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400";
      case "Published":
        return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400";
      case "Draft":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400";
      case "Flagged":
        return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400";
      case "New":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400";
      case "Replied":
        return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400";
      case "Spam":
        return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400";
      case "Approved":
        return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400";
      case "Pending":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400";
      case "Rejected":
        return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400";
    }
  };

  const handleSelectItem = (id: number) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    let currentData;
    if (activeTab === "Posts") {
      currentData = postsData;
    } else if (activeTab === "Messages") {
      currentData = messagesData;
    } else if (activeTab === "Reviews") {
      currentData = reviewsData;
    } else {
      currentData = moderationData;
    }

    if (selectedItems.length === currentData.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(currentData.map((item) => item.id));
    }
  };

  const selectedCount = selectedItems.length;

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
            Content moderation
          </h1>
        </div>
      </div>

      {/* Manage Content Section */}
      <div className="mb-6">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
              Manage content
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Manage content from here.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex items-center w-full md:w-fit  bg-card-foreground rounded-full p-0.5 gap-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 md:px-4 py-2 flex-1 rounded-full text-xs md:text-sm transition ${
                  activeTab === tab
                    ? "bg-card font-semibold text-gray-900 dark:text-white"
                    : "text-gray-600 dark:text-gray-300 font-normal hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Content List */}
        <div className="bg-card-foreground rounded-lg border p-2 md:p-4 mt-4 2xl:p-6 space-y-4">
          {/* Controls */}
          <div className="hidden md:flex items-center justify-between mb-6">
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
            <div className="flex items-center gap-3">
              <button
                onClick={handleSelectAll}
                className="text-sm text-gray-600 bg-card border rounded-full py-2 px-4 font-semibold dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                Select all
              </button>

              {selectedCount > 0 && (
                <button className="flex items-center gap-1 bg-red-100 hover:bg-red-200 text-red-600 px-4 py-2 rounded-full text-sm font-semibold">
                  <MdDelete className="text-lg" />
                  Delete Selected ({selectedCount})
                </button>
              )}

              <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                <MdDelete className="text-lg inline-block mr-1" />
                Delete all
              </button>

              <button className="flex items-center bg-card border px-4 py-2 rounded-full font-semibold gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm">
                All types
                <FiChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Content List */}
          {(() => {
            let currentData;
            if (activeTab === "Posts") {
              currentData = postsData;
            } else if (activeTab === "Messages") {
              currentData = messagesData;
            } else if (activeTab === "Reviews") {
              currentData = reviewsData;
            } else {
              currentData = moderationData;
            }

            return currentData.map((item) => (
              <div
                key={item.id}
                className="flex items-start flex-col md:flex-row gap-4 p-4 bg-card rounded-lg border hover:shadow-sm transition-shadow"
              >
                <div className=" w-full flex items-start gap-4">
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(item.id)}
                    onChange={() => handleSelectItem(item.id)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 mt-1"
                  />

                  <div className="">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center text-white font-semibold text-sm">
                        SC
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold   capitalize text-gray-900 dark:text-white text-sm">
                            {item.user}
                          </span>
                          <span className="text-gray-500 dark:text-gray-400 text-sm">
                            {item.handle}
                          </span>
                        </div>
                        <div className="text-gray-600 dark:text-gray-400 text-sm mb-1">
                          {item.timestamp}
                        </div>
                      </div>
                    </div>

                    {/* Product name for Reviews */}
                    {activeTab === "Reviews" && "product" in item && (
                      <div className="mt-2 mb-1">
                        <p className="text-gray-900 dark:text-white font-medium text-sm">
                          Product: {(item as any).product}
                        </p>
                        {/* Star Rating */}
                        <div className="flex items-center gap-1 mt-1 mb-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <span
                              key={star}
                              className={`text-lg ${
                                star <= ((item as any).rating || 0)
                                  ? "text-yellow-400"
                                  : "text-gray-300 dark:text-gray-600"
                              }`}
                            >
                              ★
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Title for Posts */}
                    {activeTab === "Posts" && "title" in item && (
                      <h3 className="text-gray-900 dark:text-white font-semibold text-sm 2xl:text-base mt-2 mb-1">
                        {(item as any).title}
                      </h3>
                    )}

                    <p className="text-gray-900 mt-2 dark:text-white text-sm 2xl:text-base">
                      {item.content}
                    </p>
                  </div>
                </div>

                <div className="flex items-end  w-full md:w-fit justify-end md:flex-col gap-3">
                  <p
                    className={`px-3 xl:px-10 py-2 rounded-full text-xs font-semibold ${getStatusColor(
                      item.status
                    )}`}
                  >
                    {item.status}
                  </p>

                  <div className="flex gap-2 items-center">
                    {activeTab === "Posts" && (
                      <>
                        <button className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-xs font-semibold border-2 bg-card border-card-foreground  rounded-full px-4 xl:px-8 py-2 flex items-center gap-1">
                          View
                        </button>
                        <button className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-xs font-semibold border-2 bg-card border-card-foreground  rounded-full px-4 xl:px-8 py-2 flex items-center gap-1">
                          Edit
                        </button>
                      </>
                    )}
                    {activeTab === "Messages" && (
                      <button className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-xs font-semibold border-2 bg-card border-card-foreground  rounded-full px-4 xl:px-8 py-2 flex items-center gap-1">
                        Reply
                      </button>
                    )}
                    <button className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-xs font-semibold border-2 bg-card border-card-foreground  rounded-full px-4 xl:px-8 py-2 flex items-center gap-1">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ));
          })()}
        </div>
      </div>
    </div>
  );
};

export default ContentModeration;
