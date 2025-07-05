"use client";
import React, { useState } from "react";
import {
  FiEdit3,
  FiSearch,
  FiToggleLeft,
  FiFilter,
  FiChevronLeft,
  FiChevronRight,
  FiMoreHorizontal,
  FiTrendingUp,
  FiTrendingDown,
  FiDollarSign,
  FiUsers,
  FiCheckCircle,
} from "react-icons/fi";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import EditClientModal from "@/components/shared/admin/EditClientInfo";

const ClientProfile = () => {
  const [activeTab, setActiveTab] = useState("Sales");
  const [searchTerm, setSearchTerm] = useState("");
  const [timeFilter, setTimeFilter] = useState("D");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tabs = ["Sales", "Purchases", "Notes", "Payouts", "E-Mails", "Courses"];
  const timeFilters = ["D", "M", "Y", "All", "Custom"];

  const clientData = [
    {
      name: "Jeremy Thierry",
      category: "Forex",
      status: "Active",
      orderReceived: "06/08/2024 UTC - 12:19:36 PM",
    },
    {
      name: "Jeremy Thierry",
      category: "Forex",
      status: "Inactive",
      orderReceived: "06/08/2024 UTC - 12:19:36 PM",
    },
    {
      name: "Jeremy Thierry",
      category: "Forex",
      status: "Course Sale",
      orderReceived: "06/08/2024 UTC - 12:19:36 PM",
    },
    {
      name: "Jeremy Thierry",
      category: "Forex",
      status: "Inactive",
      orderReceived: "06/08/2024 UTC - 12:19:36 PM",
    },
    {
      name: "Jeremy Thierry",
      category: "Forex",
      status: "Inactive",
      orderReceived: "06/08/2024 UTC - 12:19:36 PM",
    },
    {
      name: "Jeremy Thierry",
      category: "Forex",
      status: "Inactive",
      orderReceived: "06/08/2024 UTC - 12:19:36 PM",
    },
    {
      name: "Jeremy Thierry",
      category: "Forex",
      status: "Not Recurring",
      orderReceived: "06/08/2024 UTC - 12:19:36 PM",
    },
    {
      name: "Jeremy Thierry",
      category: "Forex",
      status: "",
      orderReceived: "06/08/2024 UTC - 12:19:36 PM",
    },
    {
      name: "Jeremy Thierry",
      category: "Forex",
      status: "",
      orderReceived: "06/08/2024 UTC - 12:19:36 PM",
    },
    {
      name: "Jeremy Thierry",
      category: "Forex",
      status: "Inactive",
      orderReceived: "06/08/2024 UTC - 12:19:36 PM",
    },
    {
      name: "Jeremy Thierry",
      category: "Forex",
      status: "Not Recurring",
      orderReceived: "06/08/2024 UTC - 12:19:36 PM",
    },
    {
      name: "Jeremy Thierry",
      category: "Forex",
      status: "Inactive",
      orderReceived: "06/08/2024 UTC - 12:19:36 PM",
    },
    {
      name: "Jeremy Thierry",
      category: "Forex",
      status: "Active",
      orderReceived: "06/08/2024 UTC - 12:19:36 PM",
    },
    {
      name: "Jeremy Thierry",
      category: "Forex",
      status: "Inactive",
      orderReceived: "06/08/2024 UTC - 12:19:36 PM",
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
      title: "Total Earned",
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
      title: "Net Tips Earned",
      value: "1,500",
      change: "+12.5%",
      isPositive: true,
    },
    {
      icon: (
        <Image
          src={"/admin/withdraw.svg"}
          alt="logo"
          width={24}
          height={24}
          className="w-7 h-7 dark:invert"
        />
      ),
      title: "Total Withdrawls",
      value: "2,000",
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
      title: "Total Subscribers",
      value: "1,000",
      change: "+2.5%",
      isPositive: true,
    },
  ];
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "Inactive":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      case "Course Sale":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      case "Not Recurring":
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

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
    <div className="w-full bg-card min-h-full rounded-[10px] border flex flex-col gap-2 2xl:gap-4 p-3 2xl:p-6 3xl:p-7">
      {/* Breadcrumb */}
      <div className="flex items-center border-b border-[#E3E3E4] dark:border-[#0F2430]  pb-4 text-sm text-gray-600 dark:text-gray-400 mb-2">
        <span className="hover:text-gray-900 dark:hover:text-white cursor-pointer">
          All Clients
        </span>
        <FiChevronRight className="w-4 h-4 mx-2" />
        <span>Clients Profile</span>
      </div>

      {/* Client Header */}
      <div className="w-full flex items-center bg-card-foreground rounded-[12px] p-4 2xl:p-6 mb-4 justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-start md:items-center gap-4 flex-col md:flex-row">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                <span className="text-lg font-semibold text-gray-600 dark:text-gray-300">
                  K
                </span>
              </div>
              <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
                Kobjorn Pongjantharasasion
              </h1>
            </div>

            <div className="flex items-center flex-wrap gap-2 mt-1">
              <span className="text-sm bg-card rounded-full border px-3 py-2">
                P27371
              </span>
              <span className="text-sm bg-card rounded-full border px-3 py-2">
                Sports
              </span>
              <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-2 rounded-full text-sm flex items-center gap-1">
                <FiCheckCircle className="inline-block mr-0.5 text-lg" />
                Contract Signed
              </span>
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-2 rounded-full text-sm flex items-center gap-1">
                <FiCheckCircle className="inline-block mr-0.5    text-lg" />
                Signal Provider
              </span>
            </div>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <button className="text-gray-600 bg-card border dark:text-gray-400 hover:text-gray-900 dark:hover:text-white rounded-full flex items-center gap-1 px-3 py-2 text-sm font-semibold">
            Actions
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Client Information Section */}
      <div className="mb-6">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-4">
          <div>
            <h2 className="text-lg 2xl:text-xl font-semibold text-gray-900 dark:text-white mb-1">
              Client Information
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              You can see all client info from here.
            </p>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap items-center gap-2 text-xs 2xl:text-sm">
            <div className="bg-card-foreground font-semibold rounded-full px-3 py-2 border">
              <span className="text-gray-600 dark:text-gray-400">
                Total earnings:{" "}
              </span>
              <span className=" text-gray-900 dark:text-white">$10,000</span>
            </div>
            <div className="bg-card-foreground font-semibold rounded-full px-3 py-2 border">
              <span className="text-gray-600 dark:text-gray-400">
                Total spend:{" "}
              </span>
              <span className=" text-gray-900 dark:text-white">$10,000</span>
            </div>
            <div className=" rounded-full bg-blue-100 dark:bg-blue-700/20 px-3 py-2 border">
              <span className="text-blue-600 dark:text-blue-400 font-semibold">
                Win rate 72%
              </span>
            </div>
            <div className="bg-red-100 dark:bg-red-700/20 rounded-full px-3 py-2 border">
              <span className="text-orange-600 dark:text-red-400 font-semibold">
                Time Flagged: 15
              </span>
            </div>
            <div className="bg-red-100 dark:bg-red-700/20 rounded-full px-3 py-2 border">
              <span className="text-orange-600 dark:text-red-400 font-semibold">
                Revoke Signal Capability
              </span>
            </div>
            <div className="bg-red-100 dark:bg-red-700/20 rounded-full px-3 py-2 border">
              <span className="text-orange-600 dark:text-red-400 font-semibold">
                Blacklist Client
              </span>
            </div>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
          {/* Contact Information */}
          <div className="bg-card-foreground rounded-[8px] border p-1">
            <div className="flex items-center justify-between mb-4 px-3 pt-4">
              <div className="flex items-center gap-2">
                <Image
                  src="/admin/contact.svg"
                  alt="Contact Icon"
                  width={24}
                  height={24}
                  className="w-8 h-8 2xl:w-10 2xl:h-10  bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center"
                />
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Contact Information
                </h3>
              </div>
              <button onClick={() => setIsModalOpen(true)}>
                <Image
                  src="/admin/edit.svg"
                  alt="Contact Icon"
                  width={24}
                  height={24}
                  className="w-6 h-6 2xl:w-8 2xl:h-8 "
                />
              </button>
            </div>
            <div className="space-y-3 text-sm bg-card p-4 rounded-[8px]">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Email:</span>
                <span className="text-gray-900 dark:text-white">
                  kung.kobjorn@gmail.com
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Phone:</span>
                <span className="text-gray-900 dark:text-white">
                  8581552754
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">
                  Address:
                </span>
                <span className="text-gray-900 dark:text-white">Newnham</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">
                  Address 2:
                </span>
                <span className="text-gray-900 dark:text-white">-</span>
              </div>
            </div>
          </div>

          {/* Location & Language */}
          <div className="bg-card-foreground rounded-[8px] border p-1">
            <div className="flex items-center justify-between mb-4 px-3 pt-4">
              <div className="flex items-center w-full gap-2">
                <Image
                  src="/admin/language.svg"
                  alt="Contact Icon"
                  width={24}
                  height={24}
                  className="w-8 h-8 2xl:w-10 2xl:h-10  bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center"
                />
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Location & Language
                </h3>
                <p className="bg-card ml-auto  text-gray-700 dark:text-gray-300 p-2 rounded-full text-xs 2xl:text-sm">
                  EN
                </p>
              </div>
            </div>
            <div className="space-y-3 text-sm bg-card p-4 rounded-[8px] ">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">State:</span>
                <span className="text-gray-900 dark:text-white">
                  kung.kobjorn@gmail.com
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">ZIP:</span>
                <span className="text-gray-900 dark:text-white">802460</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">
                  Country:
                </span>
                <span className="text-gray-900 dark:text-white">NA</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">
                  Time Zone:
                </span>
                <span className="text-gray-900 dark:text-white">GMT +11</span>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-card-foreground rounded-[8px] border p-1">
            <div className="flex items-center justify-between mb-4 px-3 pt-4">
              <div className="flex items-center gap-2">
                <Image
                  src="/admin/activity.svg"
                  alt="Contact Icon"
                  width={24}
                  height={24}
                  className="w-8 h-8 2xl:w-10 2xl:h-10  bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center"
                />
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Recent Activity
                </h3>
              </div>
              <button>
                <Image
                  src="/admin/edit.svg"
                  alt="Contact Icon"
                  width={24}
                  height={24}
                  className="w-6 h-6 2xl:w-8 2xl:h-8 "
                />
              </button>{" "}
            </div>
            <div className="space-y-3 text-sm bg-card p-4 rounded-[8px] ">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">
                  Verified Date:
                </span>
                <span className="text-gray-900 dark:text-white">
                  2024-06-02 @ 02:05 AM
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">
                  Registration:
                </span>
                <span className="text-gray-900 dark:text-white">
                  2024-02-07
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="mb-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-4">
            <div>
              <h2 className="text-lg 2xl:text-xl font-semibold text-gray-900 dark:text-white mb-1">
                Client total sales
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                You can see all signal sales from here.
              </p>
            </div>

            <div className="flex items-center bg-card-foreground rounded-full p-0.5 gap-2">
              {timeFilters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setTimeFilter(filter)}
                  className={`px-3 2xl:px-5 py-2 rounded-full text-xs 2xl:text-sm  transition ${
                    timeFilter === filter
                      ? "bg-card font-semibold "
                      : "text-gray-600 dark:text-gray-300 font-normal hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
            {courseStats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>
        </div>

        {/* Data Table Section */}
        <div className="flex flex-wrap items-center gap-2 mb-4 bg-card-foreground w-fit rounded-full p-1">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 2xl:px-5 py-2 rounded-full text-xs 2xl:text-sm  transition ${
                activeTab === tab
                  ? "bg-card font-semibold "
                  : "text-gray-600 dark:text-gray-300 font-normal hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="bg-card-foreground rounded-[8px] border p-4 2xl:p-6">
          {/* Tabs */}

          {/* Table controls */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
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
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-2 bg-white dark:bg-gray-700 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 transition text-sm">
                <FiToggleLeft className="w-4 h-4" />
                <span>Toggle Columns</span>
              </button>
              <button className="flex items-center gap-2 bg-white dark:bg-gray-700 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 transition text-sm">
                <FiFilter className="w-4 h-4" />
                <span>Filter Category Type</span>
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
                    </th>
                    <th className="px-4 py-3 2xl:py-4 text-center text-xs font-semibold uppercase tracking-wider">
                      CATEGORY
                    </th>
                    <th className="px-4 py-3 2xl:py-4 text-center text-xs font-semibold uppercase tracking-wider">
                      STATUS
                    </th>
                    <th className="px-4 py-3 2xl:py-4 text-center text-xs font-semibold uppercase tracking-wider">
                      ORDER RECEIVED
                    </th>
                    <th className="px-4 py-3 2xl:py-4 text-center text-xs font-semibold uppercase tracking-wider">
                      {/* Actions */}
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                  {clientData.map((client, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-50 dark:hover:bg-gray-700"
                    >
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                          {client.name}
                        </div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-center text-sm text-gray-900 dark:text-white">
                        <div className="flex items-center justify-center gap-2">
                          <div className="w-2 h-2 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                          {client.category}
                        </div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-center text-sm">
                        {client.status && (
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                              client.status
                            )}`}
                          >
                            {client.status}
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-center text-sm text-gray-900 dark:text-white">
                        {client.orderReceived}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-center text-sm">
                        <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
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
            <button className="px-3 py-1 text-sm border bg-card-foreground rounded-full">
              1
            </button>
            <button className="px-3 hidden md:block  py-1 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
              2
            </button>
            <button className="px-3 py-1 hidden md:block text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
              3
            </button>
            <span className="px-2 hidden md:block text-sm text-gray-600 dark:text-gray-400">
              ...
            </span>
            <button className="px-3 py-1 hidden md:block text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
              8
            </button>
            <button className="px-3 py-1 hidden md:block text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
              9
            </button>
            <button className="px-3 py-1 hidden md:block text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
              10
            </button>
          </div>

          <button className="flex bg-card-foreground border rounded-full items-center space-x-2 px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
            <span>Next</span>
            <FiChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
      <EditClientModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default ClientProfile;
