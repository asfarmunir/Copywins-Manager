"use client";
import Image from "next/image";
import React, { useState } from "react";

const NotificationsPage = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [activeUserTab, setActiveUserTab] = useState("Buyer");

  const tabs = [
    { name: "All", count: 4 },
    { name: "Trading", count: 4 },
    { name: "Sports", count: 4 },
    { name: "System", count: 4 },
  ];

  const userTabs = ["Buyer", "Signal Provider"];

  const notifications = [
    {
      id: 1,
      user: "George Chichua",
      action: "added",
      type: "New Trading Signal available",
      details: "EUR/USD: Buy at 1.0850, TP: 1.0900, SL: 1.0825",
      time: "16 Dec at 6:43 pm",
      category: "trading",
      icon: "🔶",
    },
    {
      id: 2,
      user: "George Chichua",
      action: "added",
      type: "Sports Signal Hit",
      details:
        "Your NBA Signal for lakers vs Warriors over 220.5 points was successful!",
      time: "16 Dec at 6:43 pm",
      category: "sports",
    },
    {
      id: 3,
      user: "George Chichua",
      action: "added",
      type: "New Trading Signal available",
      details: "EUR/USD: Buy at 1.0850, TP: 1.0900, SL: 1.0825",
      time: "16 Dec at 6:43 pm",
      category: "trading",
      icon: "🔶",
    },
    {
      id: 4,
      user: "George Chichua",
      action: "added",
      type: "Sports Signal Hit",
      details:
        "Your NBA Signal for lakers vs Warriors over 220.5 points was successful!",
      time: "16 Dec at 6:43 pm",
      category: "sports",
    },
    {
      id: 5,
      user: "George Chichua",
      action: "added",
      type: "Sports Signal Hit",
      details:
        "Your NBA Signal for lakers vs Warriors over 220.5 points was successful!",
      time: "16 Dec at 6:43 pm",
      category: "sports",
    },
    {
      id: 6,
      user: "George Chichua",
      action: "added",
      type: "New Trading Signal available",
      details: "EUR/USD: Buy at 1.0850, TP: 1.0900, SL: 1.0825",
      time: "16 Dec at 6:43 pm",
      category: "trading",
      icon: "🔶",
    },
  ];

  const filteredNotifications =
    activeTab === "All"
      ? notifications
      : notifications.filter(
          (notif) => notif.category.toLowerCase() === activeTab.toLowerCase()
        );

  return (
    <div className="w-full bg-card  rounded-[10px] min-h-full border flex flex-col gap-2 2xl:gap-4 p-3 2xl:p-4 3xl:p-5">
      {/* Header */}
      <div className="w-full flex items-center justify-between border-b border-[#E3E3E4] dark:border-[#0F2430] pb-4">
        <div className="flex items-center gap-2">
          <Image
            src={"/logo.png"}
            alt="logo"
            width={35}
            height={35}
            priority
            className="md:hidden"
          />

          <h2 className="text-lg 2xl:text-xl font-semibold">Notifications</h2>
        </div>
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 bg-card-foreground border hidden md:block rounded-full text-sm 3xl:text-base font-medium hover:bg-gray-50 dark:hover:bg-gray-800">
            Buyer
          </button>
          <button className="px-4 py-2 bg-card-foreground border rounded-full text-sm 3xl:text-base font-medium hover:bg-gray-50 dark:hover:bg-gray-800">
            Signal Provider
          </button>
        </div>
      </div>

      <div className="max-w-6xl 3xl:max-w-7xl w-full  mx-auto py-3 md:py-6">
        {/* Notifications Header */}
        <div className="bg-card rounded-lg  border-gray-200 dark:border-gray-700 mb-6">
          <div className="flex items-center justify-between p-6 mb-4 border-gray-200 dark:border-gray-700">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                Your signal notifications
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Stay updated on your sports and trading signals
              </p>
            </div>
            <button className="bg-gray-100 hidden md:block dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 px-4 py-2 rounded-full text-sm font-medium transition-colors">
              Mark as all read
            </button>
          </div>

          {/* Filter Tabs */}
          <div className="bg-card-foreground rounded-[10px] p-2 overflow-hidden">
            <div className="px-6 pt-6 pb-4 border-b bg-card-foreground border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-6">
                {tabs.map((tab) => (
                  <button
                    key={tab.name}
                    onClick={() => setActiveTab(tab.name)}
                    className={`flex items-center gap-2 pb-2 border-b-2 transition ${
                      activeTab === tab.name
                        ? "border-blue-500 text-primary dark:text-blue-400"
                        : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                    }`}
                  >
                    <span className="font-medium text-xs xl:text-base">
                      {tab.name}
                    </span>
                    {tab.name === "All" ? (
                      <span className="w-5 h-5 bg-green-500 dark:bg-green-800 text-white text-xs rounded-full flex items-center justify-center">
                        {tab.count}
                      </span>
                    ) : (
                      <span className="text-sm text-gray-400 bg-card w-5 h-4 rounded-full flex items-center justify-center">
                        {tab.count}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Notifications List */}
            <div className=" space-y-2 divide-gray-100 dark:divide-gray-700">
              {filteredNotifications.map((notification) => (
                <div
                  key={notification.id}
                  className="p-6 hover:bg-gray-50 rounded-[10px] bg-card dark:hover:bg-gray-700/50 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      {/* Avatar */}
                      <div className="relative">
                        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">
                          GC
                        </div>
                        {notification.icon && (
                          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center text-xs">
                            {notification.icon}
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex flex-col items-start md:flex-row md:items-center gap-1 mb-1">
                          <span className="font-semibold text-gray-900 dark:text-white">
                            {notification.user}
                          </span>
                          <span className="text-gray-500 dark:text-gray-400 text-sm">
                            {notification.action}
                          </span>
                          <span className="font-medium text-gray-900 dark:text-white text-sm">
                            {notification.type}
                          </span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                          {notification.details}
                        </p>
                        <p className="text-gray-400 dark:text-gray-500 text-xs">
                          {notification.time}
                        </p>
                      </div>
                    </div>

                    {/* Unread Indicator */}
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationsPage;
