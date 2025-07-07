"use client";
import React, { useState } from "react";
import { FiChevronDown, FiCalendar } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

const CreateBroadcast = () => {
  const [broadcastData, setBroadcastData] = useState({
    title: "",
    message: "",
    userGroups: "",
    scheduleDate: "",
  });

  const [notifications, setNotifications] = useState({
    dashboard: true,
    appPush: true,
    email: true,
  });

  const [activeTab, setActiveTab] = useState("create");

  const handleInputChange = (field: string, value: string) => {
    setBroadcastData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleNotificationToggle = (
    type: "dashboard" | "appPush" | "email"
  ) => {
    setNotifications((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  const handleSendBroadcast = () => {
    // Handle send broadcast logic
    console.log("Sending broadcast:", broadcastData, notifications);
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
            Create broadcast
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row  max-w-3xl mt-6 mx-auto w-full gap-6">
        {/* Left Section - Broadcast Message */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                Broadcast Message
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Create a broadcast to send to platform
              </p>
            </div>
            <Link
              href="/create-broadcast/history"
              className="bg-card-foreground border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white px-2 md:px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition"
            >
              Past Broadcasts
            </Link>
          </div>

          <div className="space-y-6">
            <div className="bg-card-foreground p-4 2xl:p-6 rounded-[8px] border space-y-4">
              {/* Title Field */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Title
                </label>
                <input
                  type="text"
                  placeholder="Enter broadcast title"
                  value={broadcastData.title}
                  onChange={(e) => handleInputChange("title", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-[8px] bg-card text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm"
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Message
                </label>
                <textarea
                  placeholder="Enter your broadcast message"
                  value={broadcastData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-[8px] bg-card text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm resize-none"
                />
              </div>
            </div>

            {/* Notification Settings */}

            <div className="bg-card-foreground p-4 2xl:p-6 rounded-[8px] border space-y-4">
              <div className="space-y-4">
                {/* Dashboard Notification */}
                <div className="flex items-center justify-between p-4 bg-card rounded-lg border border-gray-200 dark:border-gray-700">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                      Dashboard Notification
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Show on client dashboard
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={notifications.dashboard}
                      onChange={() => handleNotificationToggle("dashboard")}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                  </label>
                </div>

                {/* App Push Notification */}
                <div className="flex items-center justify-between p-4 bg-card rounded-lg border border-gray-200 dark:border-gray-700">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                      App Push Notification
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Send as push notification to mobile app
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={notifications.appPush}
                      onChange={() => handleNotificationToggle("appPush")}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                  </label>
                </div>

                {/* Email Notification */}
                <div className="flex items-center justify-between p-4 bg-card rounded-lg border border-gray-200 dark:border-gray-700">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                      Email Notification
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Send as email in their inbox
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={notifications.email}
                      onChange={() => handleNotificationToggle("email")}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                  </label>
                </div>
              </div>
            </div>

            {/* Select User Groups */}
            <div className="bg-card-foreground p-4 2xl:p-6 rounded-[8px] border space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Select user groups
                </label>
                <div className="relative">
                  <select
                    value={broadcastData.userGroups}
                    onChange={(e) =>
                      handleInputChange("userGroups", e.target.value)
                    }
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-[8px] bg-card text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm appearance-none"
                  >
                    <option value="">Select user groups</option>
                    <option value="all">All Users</option>
                    <option value="premium">Premium Users</option>
                    <option value="free">Free Users</option>
                    <option value="signal-providers">Signal Providers</option>
                    <option value="traders">Traders</option>
                  </select>
                  <FiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                </div>
              </div>

              {/* Schedule (Optional) */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Schedule (optional)
                </label>
                <div className="relative">
                  <input
                    type="datetime-local"
                    placeholder="Schedule for later"
                    value={broadcastData.scheduleDate}
                    onChange={(e) =>
                      handleInputChange("scheduleDate", e.target.value)
                    }
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-[8px] bg-card text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm"
                  />
                  <FiCalendar className="absolute bg-card pb-3 p-2 right-3 top-1/2 transform -translate-y-1/2 w-9 h-9 text-gray-500 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Send Button */}
            <div className="flex justify-end pt-4">
              <button
                onClick={handleSendBroadcast}
                disabled={
                  !broadcastData.title ||
                  !broadcastData.message ||
                  !broadcastData.userGroups
                }
                className="bg-primary hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-8 py-3 rounded-full text-sm font-semibold transition"
              >
                Send broadcast
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBroadcast;
