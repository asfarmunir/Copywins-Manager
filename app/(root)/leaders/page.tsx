"use client";
import BecomeSignalProvider from "@/components/shared/BecomeSignalProvider";
import Image from "next/image";
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";

// Mock data for charts
const generateChartData = (trend = "up", color = "#28A745") => {
  const data = [];
  let value = 100;
  for (let i = 0; i < 100; i++) {
    const change =
      trend === "up"
        ? Math.random() * 4 - 1
        : trend === "down"
        ? Math.random() * 2 - 3
        : Math.random() * 3 - 1.5;
    value += change;
    data.push({
      name: i,
      value: Math.max(0, Math.min(140, value)),
    });
  }
  return data;
};

const TraderCard = ({
  name,
  avatar,
  status,
  yearReturn,
  winRate,
  trades,
  monthlyReturn,
  buttonText,
  buttonVariant = "subscribe",
  chartTrend = "up",
  chartColor = "#28A745",
  showMonthlyOnly = false,
}: {
  name: string;
  avatar: string;
  status: string;
  yearReturn?: number;
  winRate?: number;
  trades?: string;
  monthlyReturn: string | number;
  buttonText: string;
  buttonVariant?: "subscribe" | "subscribed" | "default";
  chartTrend?: "up" | "down" | "neutral";
  chartColor?: string;
  showMonthlyOnly?: boolean;
}) => {
  const chartData = generateChartData(chartTrend, chartColor);

  return (
    <div className="bg-card-foreground rounded-[10px] border p-1 hover:shadow-md transition-shadow">
      <div className=" bg-card p-2 rounded-[10px] ">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-md bg-black flex items-center justify-center">
              <p className="font-semibold text-white text-sm">{avatar}</p>
            </div>
            <div>
              <h3 className="font-semibold text-sm">{name}</h3>
              <p className="text-gray-500 dark:text-gray-200 text-xs">
                {status}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <span className="inline-flex items-center px-2 py-1 rounded-full bg-[#28A745] text-white text-xs font-normal">
              Verified
            </span>
            <span className="inline-flex items-center px-2 py-1 rounded-full bg-orange-100 text-orange-500 dark:bg-orange-700/40 text-xs font-normal">
              Master
            </span>
          </div>
        </div>

        {/* Chart */}
        {!showMonthlyOnly && (
          <div className="h-24 mb-4   dark:from-gray-800 dark:to-gray-900 rounded-lg p-2">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke={chartColor}
                  strokeWidth={2}
                  dot={false}
                  activeDot={{ r: 3 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}

        {/* Stats */}
        {showMonthlyOnly ? null : (
          <div className="grid grid-cols-3 bg-card-foreground p-1 rounded-[8px] gap-1  text-center">
            <div className=" bg-card py-2">
              <p className="text-gray-500 dark:text-gray-200  text-xs">
                1Y Return
              </p>
              <p className="font-semibold text-sm text-green-500">
                +{yearReturn}%
              </p>
            </div>
            <div className=" bg-card py-2">
              <p className="text-gray-500 dark:text-gray-200 text-xs">
                Win rate
              </p>
              <p className="font-semibold text-sm">{winRate}%</p>
            </div>
            <div className=" bg-card py-2">
              <p className="text-gray-500 dark:text-gray-200 text-xs">Trades</p>
              <p className="font-semibold text-sm">{trades}</p>
            </div>
          </div>
        )}
      </div>

      {/* Monthly return and button */}
      <div className="flex items-center p-2 pt-4 justify-between">
        {!showMonthlyOnly && (
          <p className="text-sm text-gray-600 dark:text-slate-100">
            <span className="font-semibold">${monthlyReturn}</span>
            <span className="text-gray-500 dark:text-gray-200">/month</span>
          </p>
        )}
        {!showMonthlyOnly && (
          <button
            className={`px-4 py-1.5 rounded-full  text-xs font-normal transition ${
              buttonVariant === "subscribe"
                ? "bg-blue-600 font-semibold text-white "
                : buttonVariant === "subscribed"
                ? "bg-gray-200 text-gray-700 hover:bg-gray-300 border"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200 border"
            }`}
          >
            {buttonText}
          </button>
        )}
      </div>
      {showMonthlyOnly && (
        <div className="flex items-center justify-between bg-card-foreground px-4 pb-4 rounded-[8px]">
          <p className="text-green-500  font-bold">+{monthlyReturn}%</p>
          <p className="text-gray-500 dark:text-gray-200 text-xs">
            Rank Change: +23
          </p>
        </div>
      )}
    </div>
  );
};

const LeadersPage = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const tabs = ["All", "Trading", "Sports"];

  const exploreTraders = [
    {
      name: "CryptoKing",
      avatar: "CK",
      status: "Cryptospecialist",
      yearReturn: 124.5,
      winRate: 79,
      trades: "1,245",
      monthlyReturn: "849.0",
      buttonText: "Subscribe",
      buttonVariant: "subscribe",
      chartTrend: "up",
      chartColor: "#FF6B6B",
    },
    {
      name: "CryptoKing",
      avatar: "CK",
      status: "Cryptospecialist",
      yearReturn: 124.5,
      winRate: 79,
      trades: "1,245",
      monthlyReturn: "849.0",
      buttonText: "Subscribe",
      buttonVariant: "subscribe",
      chartTrend: "up",
      chartColor: "#4285F4",
    },
    {
      name: "CryptoKing",
      avatar: "CK",
      status: "Cryptospecialist",
      yearReturn: 124.5,
      winRate: 79,
      trades: "1,245",
      monthlyReturn: "849.0",
      buttonText: "Subscribed",
      buttonVariant: "subscribed",
      chartTrend: "up",
      chartColor: "#FF9500",
    },
    {
      name: "CryptoKing",
      avatar: "CK",
      status: "Cryptospecialist",
      yearReturn: 124.5,
      winRate: 79,
      trades: "1,245",
      monthlyReturn: "449.0",
      buttonText: "Subscribe",
      buttonVariant: "subscribe",
      chartTrend: "down",
      chartColor: "#4285F4",
    },
    {
      name: "CryptoKing",
      avatar: "CK",
      status: "Cryptospecialist",
      yearReturn: 124.5,
      winRate: 79,
      trades: "1,245",
      monthlyReturn: "849.0",
      buttonText: "Subscribe",
      buttonVariant: "subscribe",
      chartTrend: "neutral",
      chartColor: "#FF9500",
    },
    {
      name: "CryptoKing",
      avatar: "CK",
      status: "Cryptospecialist",
      yearReturn: 124.5,
      winRate: 79,
      trades: "1,245",
      monthlyReturn: "449.0",
      buttonText: "Subscribe",
      buttonVariant: "subscribe",
      chartTrend: "up",
      chartColor: "#4285F4",
    },
  ];

  const risingStars = [
    {
      name: "CryptoKing",
      avatar: "CK",
      status: "Cryptospecialist",
      monthlyReturn: "16.8",
      buttonText: "Subscribe",
      buttonVariant: "subscribe",
      chartTrend: "up",
      chartColor: "#28A745",
    },
    {
      name: "CryptoKing",
      avatar: "CK",
      status: "Cryptospecialist",
      monthlyReturn: "16.8",
      buttonText: "Subscribe",
      buttonVariant: "subscribe",
      chartTrend: "up",
      chartColor: "#4285F4",
    },
    {
      name: "CryptoKing",
      avatar: "CK",
      status: "Cryptospecialist",
      monthlyReturn: "16.8",
      buttonText: "Subscribe",
      buttonVariant: "subscribe",
      chartTrend: "up",
      chartColor: "#FF9500",
    },
  ];

  const topPerformers = [
    {
      name: "CryptoKing",
      avatar: "CK",
      status: "Cryptospecialist",
      yearReturn: 124.5,
      winRate: 79,
      trades: "1,245",
      monthlyReturn: "849.0",
      buttonText: "Subscribe",
      buttonVariant: "subscribe",
      chartTrend: "up",
      chartColor: "#28A745",
    },
    {
      name: "CryptoKing",
      avatar: "CK",
      status: "Cryptospecialist",
      yearReturn: 124.5,
      winRate: 79,
      trades: "1,245",
      monthlyReturn: "849.0",
      buttonText: "Subscribe",
      buttonVariant: "subscribe",
      chartTrend: "up",
      chartColor: "#FF9500",
    },
    {
      name: "CryptoKing",
      avatar: "CK",
      status: "Cryptospecialist",
      yearReturn: 124.5,
      winRate: 79,
      trades: "1,245",
      monthlyReturn: "849.0",
      buttonText: "Subscribe",
      buttonVariant: "subscribe",
      chartTrend: "up",
      chartColor: "#28A745",
    },
  ];

  return (
    <div className="w-full bg-card  rounded-[10px] border flex flex-col gap-2 2xl:gap-4 p-3 2xl:p-4 3xl:p-5">
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

          <h2 className="text-lg 2xl:text-xl font-semibold">Leaders</h2>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative hidden md:block border-r pr-4">
            <input
              type="text"
              placeholder="Search traders"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 pr-4 py-2 bg-card-foreground border-[#E3E3E4] dark:border-slate-800 rounded-full border focus:outline-none focus:ring-2 focus:ring-primary text-sm 3xl:text-base w-64"
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <Image
                src="/icons/search.svg"
                alt="Search Icon"
                width={16}
                height={16}
                className="dark:invert"
              />
            </span>
          </div>
          <BecomeSignalProvider />
        </div>
      </div>

      <div className=" w-full  mx-auto max-w-6xl  3xl:max-w-7xl">
        <div className="space-y-4  ">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-3">
              <h2 className="2xl:text-lg font-semibold">Explore Traders</h2>
              <p className="text-gray-500 dark:text-gray-200 text-sm">
                Discover top-performing traders to follow and copy their trades
              </p>
            </div>
            <div className="flex items-center  w-full md:w-fit space-x-1 bg-card-foreground rounded-full p-1">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 2xl:w-24 flex-1 py-2 rounded-full text-sm font-medium transition ${
                    activeTab === tab
                      ? "bg-card text-foreground shadow-sm"
                      : "text-gray-500 dark:text-gray-200 hover:text-foreground"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 2xl:gap-6">
            {exploreTraders.map((trader, index) => (
              //@ts-ignore
              <TraderCard key={index} {...trader} />
            ))}
          </div>
        </div>

        <div className="space-y-4 p-4 2xl:px-9">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-3">
              <h2 className="2xl:text-lg font-semibold">
                Explore Traders Monthly Rising Stars
              </h2>
              <p className="text-gray-500 dark:text-gray-200 text-sm">
                Traders with exceptional month-over-month growth
              </p>
            </div>
            <button className=" w-full sm:w-fit bg-card-foreground px-4 py-2 rounded-full  text-sm font-semibold">
              Explore rising stars
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 2xl:gap-6">
            {risingStars.map((trader, index) => (
              //@ts-ignore

              <TraderCard key={index} {...trader} showMonthlyOnly={true} />
            ))}
          </div>
        </div>
        <div className="space-y-4 p-4 2xl:px-9">
          <div className="flex  flex-col md:flex-row items-center justify-between">
            <div className="mb-3">
              <h2 className="2xl:text-lg font-semibold">Explore Traders</h2>
              <p className="text-gray-500 dark:text-gray-200 text-sm">
                Traders with exceptional long-term consistency
              </p>
            </div>
            <button className=" w-full capitalize sm:w-fit bg-card-foreground px-4 py-2 rounded-full  text-sm font-semibold">
              Explore top performers
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 2xl:gap-6">
            {topPerformers.map((trader, index) => (
              //@ts-ignore
              <TraderCard key={index} {...trader} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadersPage;
