"use client";
import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";
import {
  FiTrendingUp,
  FiTrendingDown,
  FiUsers,
  FiBookOpen,
  FiShoppingCart,
  FiSearch,
  FiDownload,
  FiToggleLeft,
} from "react-icons/fi";
import { MdSignalCellularAlt, MdPeople, MdSchool } from "react-icons/md";
import Image from "next/image";

const RevenueDashboard = () => {
  const [activeTab, setActiveTab] = useState("Revenue");

  // Sample data for charts
  const performanceData = [
    { name: "1", revenue: 45000, clients: 30000 },
    { name: "2", revenue: 52000, clients: 35000 },
    { name: "3", revenue: 48000, clients: 32000 },
    { name: "4", revenue: 58000, clients: 38000 },
    { name: "5", revenue: 62000, clients: 42000 },
    { name: "6", revenue: 55000, clients: 36000 },
    { name: "7", revenue: 68000, clients: 45000 },
  ];

  const signalStats = [
    {
      icon: (
        <Image
          src={"/admin/sales.svg"}
          alt="logo"
          width={24}
          height={24}
          className="w-7 h-7 dark:invert"
        />
      ),
      title: "Gross Sales",
      value: "$250,000",
      change: "+23%",
      isPositive: true,
    },
    {
      icon: (
        <Image
          src={"/admin/net-sales.svg"}
          alt="logo"
          width={24}
          height={24}
          className="w-7 h-7 dark:invert"
        />
      ),
      title: "Net Sales (based on 25%)",
      value: "1,500",
      change: "+12.5%",
      isPositive: true,
    },
    {
      icon: (
        <Image
          src={"/admin/signal.svg"}
          alt="logo"
          width={24}
          height={24}
          className="w-7 h-7 dark:invert"
        />
      ),
      title: "New signal providers",
      value: "5,000",
      change: "-2.5%",
      isPositive: false,
    },
    {
      icon: (
        <Image
          src={"/admin/users.svg"}
          alt="logo"
          width={24}
          height={24}
          className="w-7 h-7 dark:invert"
        />
      ),
      title: "New Clients",
      value: "5,000",
      change: "+2.5%",
      isPositive: true,
    },
  ];

  const courseStats = [
    {
      icon: (
        <Image
          src={"/admin/sales.svg"}
          alt="logo"
          width={24}
          height={24}
          className="w-7 h-7 dark:invert"
        />
      ),
      title: "Gross Sales",
      value: "$250,000",
      change: "+23%",
      isPositive: true,
    },
    {
      icon: (
        <Image
          src={"/admin/net-sales.svg"}
          alt="logo"
          width={24}
          height={24}
          className="w-7 h-7 dark:invert"
        />
      ),
      title: "Net Sales (based on 25%)",
      value: "1,500",
      change: "+12.5%",
      isPositive: true,
    },
    {
      icon: (
        <Image
          src={"/admin/add-course.svg"}
          alt="logo"
          width={24}
          height={24}
          className="w-7 h-7 dark:invert"
        />
      ),
      title: "New uploaded courses",
      value: "2,000",
      change: "-2.5%",
      isPositive: false,
    },
    {
      icon: (
        <Image
          src={"/admin/briefcase.svg"}
          alt="logo"
          width={24}
          height={24}
          className="w-7 h-7 dark:invert"
        />
      ),
      title: "Course sold",
      value: "1,000",
      change: "+2.5%",
      isPositive: true,
    },
  ];

  const tableData = [
    {
      clientName: "Joey Key",
      subscribers: "1,250",
      totalRevenue: "245,500",
      revenueGenerated: "$45,500",
    },
    {
      clientName: "Joey Key",
      subscribers: "1,250",
      totalRevenue: "245,500",
      revenueGenerated: "$45,500",
    },
    {
      clientName: "Joey Key",
      subscribers: "1,250",
      totalRevenue: "245,500",
      revenueGenerated: "$45,500",
    },
    {
      clientName: "Joey Key",
      subscribers: "1,250",
      totalRevenue: "245,500",
      revenueGenerated: "$45,500",
    },
    {
      clientName: "Joey Key",
      subscribers: "1,250",
      totalRevenue: "245,500",
      revenueGenerated: "$45,500",
    },
    {
      clientName: "Joey Key",
      subscribers: "1,250",
      totalRevenue: "245,500",
      revenueGenerated: "$45,500",
    },
    {
      clientName: "Joey Key",
      subscribers: "1,250",
      totalRevenue: "245,500",
      revenueGenerated: "$45,500",
    },
    {
      clientName: "Joey Key",
      subscribers: "1,250",
      totalRevenue: "245,500",
      revenueGenerated: "$45,500",
    },
  ];

  const StatCard = ({
    icon,
    title,
    value,
    change,
    isPositive,
  }: {
    icon: React.ReactNode;
    title: string;
    value: string;
    change: string;
    isPositive: boolean;
  }) => (
    <div className="bg-card-foreground p-1 rounded-[12px]">
      <div className="bg-card rounded-lg h-full p-4 2xl:p-6 flex items-center justify-between border-gray-200 dark:border-gray-700">
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-300">
              {icon}
            </div>
          </div>
          <div className="text-xs 2xl:text-sm text-gray-600 dark:text-gray-400 mb-1">
            {title}
          </div>
          <div className="text-lg 2xl:text-2xl font-bold text-gray-900 dark:text-white mb-1">
            {value}
          </div>
        </div>
        <div
          className={`flex items-center text-[10px] 2xl:text-sm font-medium p-1.5 px-3 rounded-full ${
            isPositive ? "text-green-600" : "text-red-600"
          }
           ${
             isPositive
               ? "bg-green-50 dark:bg-green-900/20 "
               : "bg-red-50 dark:bg-red-900/20"
           }
          `}
        >
          {isPositive ? (
            <FiTrendingUp className="w-2.5 h-2.5 2xl:w-4 2xl:h-4 mr-1" />
          ) : (
            <FiTrendingDown className="w-2.5 h-2.5 2xl:w-4 2xl:h-4 mr-1" />
          )}
          {change}
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full bg-card min-h-full  rounded-[10px] border flex flex-col gap-2 2xl:gap-4 p-3 2xl:p-6 3xl:p-7">
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
            Revenue Dashboard
          </h1>{" "}
        </div>
      </div>

      <div className="">
        {/* Check your signals section */}
        <div className="mb-8">
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Check your signals
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              check your signals from here.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
            {signalStats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>
        </div>

        {/* Check your course sales section */}
        <div className="mb-8">
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Check your course sales
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              check your course sales from here.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
            {courseStats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>
        </div>

        {/* Performance Chart */}
        <div className="mb-8 bg-card-foreground rounded-[8px] p-4 2xl:p-6 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Performance
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                check your performance sales from here.
              </p>
            </div>
            <div className="flex items-center space-x-1 bg-card dark:bg-gray-700 rounded-full p-1">
              <button
                onClick={() => setActiveTab("Revenue")}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                  activeTab === "Revenue"
                    ? "bg-primary text-white"
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                Revenue
              </button>
              <button
                onClick={() => setActiveTab("Clients")}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                  activeTab === "Clients"
                    ? "bg-primary text-white"
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                Clients
              </button>
            </div>
          </div>

          <div className=" rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#9ca3af", fontSize: 12 }}
                  />
                  <YAxis hide />
                  <Area
                    type="monotone"
                    dataKey={activeTab === "Revenue" ? "revenue" : "clients"}
                    stroke="#3b82f6"
                    strokeWidth={2}
                    fill="url(#colorGradient)"
                    fillOpacity={0.6}
                  />
                  <defs>
                    <linearGradient
                      id="colorGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.4} />
                      <stop
                        offset="100%"
                        stopColor="#3b82f6"
                        stopOpacity={0.1}
                      />
                    </linearGradient>
                  </defs>
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Course Sales Table */}
        <div className="mb-8">
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Check your course sales
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              check your course sales from here.
            </p>
          </div>

          <div className=" border border-gray-200 dark:border-gray-700 bg-card-foreground p-4 2xl:p-6 rounded-[8px]">
            {/* Table Header */}
            <div className="  border-gray-200 dark:border-gray-700 mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search"
                      className="pl-10 pr-4 py-1.5 border border-gray-300 dark:border-gray-600 rounded-full bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="hidden md:flex items-center space-x-2">
                  <button className="flex items-center space-x-2 bg-card px-4 py-1.5 border border-gray-300 dark:border-gray-600 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition">
                    <FiDownload className="w-4 h-4" />
                    <span>Export</span>
                  </button>
                  <button className="flex items-center space-x-2 bg-card px-4 py-1.5 border border-gray-300 dark:border-gray-600 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition">
                    <FiToggleLeft className="w-4 h-4" />
                    <span>Toggle Columns</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-6 py-4 text-left text-sm text-nowrap font-semibold uppercase tracking-wider">
                      Client's Name
                    </th>
                    <th className="px-6 py-4 text-center text-sm text-nowrap font-semibold uppercase tracking-wider">
                      Subscribers
                    </th>
                    <th className="px-6 py-4 text-center text-sm text-nowrap font-semibold uppercase tracking-wider">
                      Total Revenue Generated
                    </th>
                    <th className="px-6 py-4 text-center text-sm text-nowrap font-semibold uppercase tracking-wider">
                      Revenue Generated Last 30 Days
                    </th>
                  </tr>
                </thead>
                <tbody className=" divide-y divide-gray-200 dark:divide-gray-700">
                  {tableData.map((row, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-50 dark:hover:bg-gray-700 bg-card"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                        {row.clientName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-900 dark:text-white">
                        {row.subscribers}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-900 dark:text-white">
                        {row.totalRevenue}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-900 dark:text-white">
                        {row.revenueGenerated}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenueDashboard;
