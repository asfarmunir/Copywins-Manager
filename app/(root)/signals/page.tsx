"use client";
import CloseSignalSheet from "@/components/shared/CloseSignal";
import { Check, LucideBellRing } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FiClock, FiUsers, FiTrendingUp } from "react-icons/fi";

// Signal Statistics Card Component
const StatCard = ({
  icon,
  value,
  label,
  change,
  changeType = "positive",
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
  change: string;
  changeType?: "positive" | "negative";
}) => {
  return (
    <div className="bg-card-foreground rounded-[10px] border p-1">
      <div className="bg-card p-4 rounded-[10px]">
        <div className="flex items-center justify-between mb-3">
          <div className="w-8 h-8 rounded-md bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
            {icon}
          </div>
          <span
            className={`text-sm font-medium ${
              changeType === "positive" ? "text-green-500" : "text-red-500"
            }`}
          >
            {change}
          </span>
        </div>
        <div>
          <p className="text-2xl font-bold text-foreground">{value}</p>
          <p className="text-gray-500  dark:text-gray-300 text-sm">{label}</p>
        </div>
      </div>
    </div>
  );
};

// Upcoming Signal Card Component
const UpcomingSignalCard = ({
  pair,
  type,
  timeLeft,
  scheduledTime,
  entry,
  target,
  stop,
  status = "waiting",
}: {
  pair: string;
  type: "Buy" | "Sell";
  timeLeft: string;
  scheduledTime: string;
  entry: string;
  target: string;
  stop: string;
  status?: "waiting" | "sent";
}) => {
  return (
    <div className="bg-card-foreground rounded-[10px] border p-1">
      <div className="bg-card p-2 md:p-4 rounded-[10px] space-y-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row gap-1 items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="font-semibold text-foreground">{pair}</span>
            <span
              className={`px-2 py-1 rounded-full text-xs font-medium ${
                type === "Buy"
                  ? "bg-green-500 text-white"
                  : "bg-red-500 text-white"
              }`}
            >
              {type}
            </span>
          </div>
          <div className="text-right flex items-center gap-2">
            <div className="flex items-center text-gray-500  dark:text-gray-300 text-sm">
              <FiClock className="w-4 h-4 mr-1" />
              {timeLeft}
            </div>
            <p className="text-xs 3xl:text-sm text-gray-400">
              Scheduled: <span className="font-semibold">{scheduledTime}</span>
            </p>
          </div>
        </div>

        {/* Price Levels */}
        <div className="grid bg-card-foreground w-full p-1 rounded-[10px] grid-cols-6 gap-1">
          {/* Entry - full width on small, 2 cols on medium (1/3 of 6) */}
          <div className="text-center col-span-6 md:col-span-2 bg-card p-2 md:p-5 rounded-tl-lg rounded-bl-lg">
            <p className="text-xs text-gray-500 dark:text-gray-300 mb-1">
              Entry
            </p>
            <p className="font-semibold text-xs md:text-sm">{entry}</p>
          </div>

          {/* Target - 3 cols on small (1.5 of 3), 2 cols on medium */}
          <div className="text-center bg-card p-2 col-span-3 md:col-span-2 md:p-5 rounded">
            <p className="text-xs text-gray-500 dark:text-gray-300 mb-1">
              Target
            </p>
            <p className="font-semibold text-xs md:text-sm text-green-500">
              {target}
            </p>
          </div>

          {/* Stop - 3 cols on small (1.5 of 3), 2 cols on medium */}
          <div className="text-center bg-card p-2 col-span-3 md:col-span-2 md:p-5 rounded-tr-lg rounded-br-lg">
            <p className="text-xs text-gray-500 dark:text-gray-300 mb-1">
              Stop
            </p>
            <p className="font-semibold text-xs md:text-sm text-red-500">
              {stop}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex  gap-1 items-center justify-between pt-2">
          <div className="flex items-center gap-1.5 bg-card-foreground p-2 px-2 md:px-4 rounded-full text-gray-500  dark:text-gray-300 ">
            <LucideBellRing size={16} />
            <p className="text-xs md:text-sm  font-semibold ">
              Waiting for confirmation
            </p>
          </div>
          <div className="flex space-x-2 ">
            {status === "waiting" ? (
              <>
                <button className="px-2.5  py-1.5 text-xs md:text-sm  rounded-full hover:bg-gray-50 dark:hover:bg-gray-800">
                  Edit
                </button>
                <button className="px-2.5  py-1.5 text-xs md:text-sm bg-primary text-white rounded-full hover:bg-blue-600">
                  Send now
                </button>
              </>
            ) : (
              <>
                <CloseSignalSheet />

                <button className="px-4 md:px-3 py-0 md:py-1.5 w-full md:w-fit text-xs md:text-sm bg-primary/20  border border-primary text-primary  dark:text-white font-semibold rounded-full cursor-not-allowed">
                  <Check className="inline-block mr-1" size={16} />
                  Sent
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Top Performing Signal Item Component
const TopSignalItem = ({
  pair,
  type,
  change,
  engagement,
  followers,
}: {
  pair: string;
  type: "Buy" | "Sell";
  change: string;
  engagement: string;
  followers: string;
}) => {
  const isPositive = !change.startsWith("-");

  return (
    <div className="flex flex-col bg-card  items-center  border justify-between p-3 2xl:p-4 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors">
      <div className="flex items-center justify-between w-full mb-2">
        <div className="flex items-center space-x-3 w-full ">
          <span className="font-medium text-foreground">{pair}</span>
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${
              type === "Buy"
                ? "bg-green-600 text-white"
                : "bg-red-500 text-white"
            }`}
          >
            {type}
          </span>
        </div>
        <span
          className={`font-medium ${
            isPositive ? "text-green-500" : "text-red-500"
          }`}
        >
          {change}
        </span>
      </div>

      <div className="flex w-full  justify-between mb-3   items-center space-x-4 text-sm">
        <p className="text-xs text-gray-500">Subscriber engagement</p>
        <div className="flex items-center">
          <span className="text-xs">{engagement}</span>
        </div>
      </div>
      <div className="w-full mb-4 bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mr-2">
        <div
          className="bg-gray-900 dark:bg-primary/80 0 h-1.5 rounded-full"
          style={{ width: engagement }}
        ></div>
      </div>

      <div className="flex items-start w-full text-gray-500">
        <FiUsers className="w-4 h-4 mr-1" />
        <span className="text-xs">
          {followers} subscribers followed this signal
        </span>
      </div>
    </div>
  );
};

const SignalsPage = () => {
  const [activeTab, setActiveTab] = useState("Popular");
  const [upcomingTab, setUpcomingTab] = useState("Scheduled");

  const tabs = ["Popular", "Recent"];
  const upcomingTabs = ["Scheduled", "Drafts", "View calendar"];

  // Mock data for statistics
  const statistics = [
    {
      icon: <FiUsers className="w-4 h-4 " />,
      value: "2,853",
      label: "Total followers",
      change: "+12.5%",
      changeType: "positive" as const,
    },
    {
      icon: <span className="text-lg">$</span>,
      value: "$14,325",
      label: "Monthly Revenue",
      change: "+12.5%",
      changeType: "positive" as const,
    },
    {
      icon: <FiTrendingUp className="w-4 h-4 " />,
      value: "78.3%",
      label: "Signal success rate",
      change: "-8.2%",
      changeType: "negative" as const,
    },
  ];

  // Mock data for upcoming signals
  const upcomingSignals = [
    {
      pair: "BTC/USD",
      type: "Buy" as const,
      timeLeft: "2h 15m",
      scheduledTime: "Today, 10:00 UTC",
      entry: "$42,500 - $43,200",
      target: "$45,000",
      stop: "$41,000",
      status: "sent" as const,
    },
    {
      pair: "BTC/USD",
      type: "Buy" as const,
      timeLeft: "2h 15m",
      scheduledTime: "Today, 10:00 UTC",
      entry: "$42,500 - $43,200",
      target: "$45,000",
      stop: "$41,000",
      status: "waiting" as const,
    },
    {
      pair: "BTC/USD",
      type: "Buy" as const,
      timeLeft: "2h 15m",
      scheduledTime: "Today, 10:00 UTC",
      entry: "$42,500 - $43,200",
      target: "$45,000",
      stop: "$41,000",
      status: "waiting" as const,
    },
  ];

  // Mock data for top performing signals
  const topSignals = [
    {
      pair: "BTC/USD",
      type: "Buy" as const,
      change: "+12.5%",
      engagement: "95%",
      followers: "2,453",
    },
    {
      pair: "BTC/USD",
      type: "Sell" as const,
      change: "-8.2%",
      engagement: "96%",
      followers: "2,453",
    },
    {
      pair: "BTC/USD",
      type: "Buy" as const,
      change: "+12.5%",
      engagement: "95%",
      followers: "2,453",
    },
    {
      pair: "BTC/USD",
      type: "Sell" as const,
      change: "-8.2%",
      engagement: "95%",
      followers: "2,453",
    },
    {
      pair: "BTC/USD",
      type: "Buy" as const,
      change: "+12.5%",
      engagement: "95%",
      followers: "2,453",
    },
    {
      pair: "BTC/USD",
      type: "Buy" as const,
      change: "+12.5%",
      engagement: "95%",
      followers: "2,453",
    },
  ];

  return (
    <div className="w-full bg-card rounded-[10px] border flex flex-col gap-4 2xl:gap-6 p-3 2xl:p-4 3xl:p-5">
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

          <h1 className="text-lg 2xl:text-xl font-semibold">Signals</h1>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href={"/signals/manage"}
            className="px-2 md:px-4 py-2 bg-card-foreground border rounded-full text-xs md:text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800"
          >
            Manage signals
          </Link>
          <button className="px-2 md:px-4 py-2 bg-card-foreground border rounded-full text-xs md:text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800">
            Manage plans
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-6xl 3xl:max-w-7xl w-full mx-auto">
        {/* Left Column - Statistics and Upcoming Signals */}
        <div className="md:col-span-3 space-y-6">
          {/* Signal Statistics */}
          <div className="space-y-4">
            <div>
              <h2 className="text-lg font-semibold mb-1">Signal Statistics</h2>
              <p className="text-gray-500  dark:text-gray-300 text-sm">
                Discover your signal statistics from here.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {statistics.map((stat, index) => (
                <StatCard key={index} {...stat} />
              ))}
            </div>
          </div>

          {/* Upcoming Signals */}
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row items-start gap-3 md:items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold mb-1">Upcoming signals</h2>
                <p className="text-gray-500  dark:text-gray-300 text-sm">
                  Signals scheduled for release
                </p>
              </div>
              <div className="flex items-center  w-full md:w-fit space-x-1 bg-card-foreground rounded-full p-1">
                {upcomingTabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setUpcomingTab(tab)}
                    className={`px-3 py-2 rounded-full flex-1 md:flex-none text-sm font-medium transition ${
                      upcomingTab === tab
                        ? "bg-card text-foreground shadow-sm"
                        : "text-gray-500  dark:text-gray-300 hover:text-foreground"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              {upcomingSignals.map((signal, index) => (
                <UpcomingSignalCard key={index} {...signal} />
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Top Performing Signals */}
        <div className="space-y-4 md:col-span-2 ">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1 bg-card-foreground rounded-full w-full p-1">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-2 rounded-full flex-1 text-sm font-semibold transition ${
                    activeTab === tab
                      ? "bg-card text-foreground shadow-sm"
                      : "text-gray-500  dark:text-gray-300 hover:text-foreground"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-card-foreground rounded-[10px] border p-3 2xl:p-4">
            <div>
              <h2 className="text-lg font-semibold mb-1">
                Top Performing signals
              </h2>
              <p className="text-gray-500  dark:text-gray-300 text-sm">
                Your Most Successful Signals
              </p>
            </div>
            <div className=" space-y-2.5 mt-4 rounded-[10px]  divide-gray-200 dark:divide-gray-700">
              {topSignals.map((signal, index) => (
                <TopSignalItem key={index} {...signal} />
              ))}
            </div>
            <div className="p-3 text-center">
              <button className="text-primary text-sm font-medium hover:underline">
                See more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignalsPage;
