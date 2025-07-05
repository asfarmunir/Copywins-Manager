"use client";
import WithdrawMoneyModal from "@/components/shared/WithdrawFunds";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  FiDollarSign,
  FiUsers,
  FiTrendingUp,
  FiCalendar,
  FiShare2,
} from "react-icons/fi";

const SignalProviderDashboard = () => {
  const [activeTab, setActiveTab] = useState("Profit history");

  const dashboardStats = [
    {
      icon: <FiDollarSign className="w-5 h-5" />,
      value: "$10,700",
      label: "Available balance",
    },
    {
      icon: <FiDollarSign className="w-5 h-5" />,
      value: "$2,400",
      label: "Last month profit",
    },
    {
      icon: <FiUsers className="w-5 h-5" />,
      value: "110",
      label: "Active Followers",
    },
    {
      icon: <FiTrendingUp className="w-5 h-5" />,
      value: "$7,200",
      label: "This months signal sales",
    },
    {
      icon: <FiCalendar className="w-5 h-5" />,
      value: "$2,400",
      label: "This months tips",
    },
  ];

  const monthlyData = [
    { month: "Jan", value: 1300 },
    { month: "Feb", value: 2600 },
    { month: "Mar", value: 1200 },
    { month: "Apr", value: 1800 },
    { month: "May", value: 1400 },
  ];

  const recentTransactions = [
    {
      name: "Alex Johnson",
      date: "46 Dec at 6:43 pm",
      amount: "$29.99",
      status: "Completed",
    },
    {
      name: "Alex Johnson",
      date: "46 Dec at 6:43 pm",
      amount: "$29.99",
      status: "Completed",
    },
    {
      name: "Alex Johnson",
      date: "46 Dec at 6:43 pm",
      amount: "$29.99",
      status: "Completed",
    },
    {
      name: "Alex Johnson",
      date: "46 Dec at 6:43 pm",
      amount: "$29.99",
      status: "Completed",
    },
  ];

  const maxValue = Math.max(...monthlyData.map((item) => item.value));

  return (
    <div className="w-full bg-card min-h-full  rounded-[10px] border flex flex-col gap-2 2xl:gap-4 p-3 2xl:p-4 3xl:p-5">
      <div className="w-full flex items-center border-b border-[#E3E3E4] dark:border-[#0F2430] pb-4 mb-1 justify-between">
        <div className="flex items-center gap-2">
          <Image
            src={"/logo.png"}
            alt="logo"
            width={30}
            height={30}
            priority
            className="md:hidden
            w-[26px] h-[26px] md:w-[30px] md:h-[30px] 
            "
          />
          <h1 className="text-base md:text-xl font-semibold text-gray-900 dark:text-white">
            Signal provider
          </h1>{" "}
        </div>
        <div className="flex items-center gap-1 md:gap-4">
          <Link href={"/signals/dashboard/manage-codes"}>
            <button className="px-2  md:px-4 py-2 md:text-sm text-[10px] font-semibold text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              Create a discount
            </button>
          </Link>
          {/* <button className="px-2 hidden md:block md:px-4 py-2 md:text-sm text-xs font-semibold bg-card-foreground rounded-full transition-colors">
            Withdraw money
          </button> */}
          <WithdrawMoneyModal />
        </div>
      </div>

      <div className="max-w-6xl 3xl:max-w-7xl  w-full md:mx-auto">
        {/* Total Statistics Section */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                Total Statistics
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Your complete performance overview at a glance
              </p>
            </div>
            <button className="flex items-center justify-center gap-2 px-4 py-2 mt-4 md:mt-0 text-sm font-semibold text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              <FiShare2 className="w-4 h-4" />
              Share my public link
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
            {dashboardStats.map((stat, index) => (
              <div
                key={index}
                className="bg-card dark:bg-card-foreground rounded-lg border border-gray-200 dark:border-gray-700 p-6"
              >
                <div className="flex items-center justify-center w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-lg mb-4 text-gray-600 dark:text-gray-400">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
              Profit summary
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Review your available profits before withdrawal
            </p>
          </div>
          <div className="flex items-center space-x-1 bg-card-foreground rounded-full p-1 mt-4 sm:mt-0">
            {["Profit history", "Follower growth"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 xl:px-10 py-2 rounded-full flex-1 text-sm font-semibold transition whitespace-nowrap ${
                  activeTab === tab
                    ? "bg-card text-gray-900 dark:text-white shadow-sm"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-2 md:gap-6">
          {/* Profit Summary */}
          <div className="lg:col-span-3 bg-card dark:bg-card-foreground rounded-lg border border-gray-200 dark:border-gray-700 p-6">
            {/* Chart */}
            <div className="h-72 flex items-end justify-between gap-2 bg-gray-50 dark:bg-card rounded-lg   p-4">
              <div className="flex-1 flex items-end justify-center">
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-4">
                  $0
                </div>
              </div>
              {monthlyData.map((item, index) => (
                <div key={index} className="flex-1  flex flex-col items-center">
                  <div
                    className="w-full bg-blue-500 rounded-t-sm mb-4 transition-all duration-300 hover:bg-primary"
                    style={{
                      height: `${(item.value / maxValue) * 200}px`,
                      minHeight: "20px",
                    }}
                  ></div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 font-medium">
                    {item.month}
                  </div>
                </div>
              ))}
              <div className="flex-1 flex items-end justify-center">
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-4">
                  $2600
                </div>
              </div>
            </div>

            {/* Chart Labels */}
            <div className="flex justify-between items-center mt-4 text-xs text-gray-500 dark:text-gray-400">
              <span>Overview</span>
              <div className="flex gap-4">
                <span>$650</span>
                <span>$1300</span>
                <span>$1950</span>
                <span>$2600</span>
              </div>
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="bg-card-foreground col-span-2 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                Recent Transactions
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                See your recent transactions.
              </p>
            </div>

            <div className="space-y-1.5">
              {recentTransactions.map((transaction, index) => (
                <div
                  key={index}
                  className="flex bg-card p-1.5 rounded-lg items-center gap-2"
                >
                  <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center text-sm font-medium text-gray-600 dark:text-gray-400">
                    CK
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      {transaction.name}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 truncate">
                      {transaction.date}
                    </div>
                  </div>
                  <div className="flex flex-col md:items-center md:flex-row gap-1 md:gap-3 items-end">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      {transaction.amount}
                    </div>
                    <div className="text-xs bg-card-foreground px-3 py-1.5 font-semibold rounded-full border">
                      {transaction.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full mt-6 text-sm font-semibold bg-card p-3 border rounded-full transition-colors">
              See more sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignalProviderDashboard;
