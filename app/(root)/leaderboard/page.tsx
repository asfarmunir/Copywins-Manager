"use client";
import { Verified, VerifiedIcon } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import {
  FiSearch,
  FiTrendingUp,
  FiUsers,
  FiZap,
  FiBarChart,
} from "react-icons/fi";
import { MdVerifiedUser } from "react-icons/md";

const SignalProvidersLeaderboard = () => {
  const [activeTab, setActiveTab] = useState("Sports");

  const stats = [
    {
      icon: (
        <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-800/20 flex items-center justify-center">
          <MdVerifiedUser className="w-4 h-4 text-green-500" />
        </div>
      ),
      value: "247",
      label: "Verified Providers",
      img: "/verified.svg",
    },
    {
      icon: (
        <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-800/20 flex items-center justify-center">
          <FiUsers className="w-4 h-4 text-primary" />
        </div>
      ),
      value: "203",
      label: "Active users",
      img: "/active.svg",
    },
    {
      icon: (
        <div className="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-800/20 flex items-center justify-center">
          <FiZap className="w-4 h-4 text-orange-500" />
        </div>
      ),
      value: "203",
      label: "Signal Sent",
      img: "/sent.svg",
    },
    {
      icon: (
        <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-800/20 flex items-center justify-center">
          <FiBarChart className="w-4 h-4 text-purple-500" />
        </div>
      ),
      value: "203",
      label: "Avg. Win rate",
      img: "/avg.svg",
    },
  ];

  const leaderboardData = [
    {
      rank: 1,
      name: "CryptoKing",
      verified: true,
      followers: "12,453 Followers",
      winRate: "85.5%",
      streak: "8 Wins",
      change: "+2",
      isPopular: true,
    },
    {
      rank: 2,
      name: "CryptoKing",
      verified: true,
      followers: "12,453 Followers",
      winRate: "85.5%",
      streak: "8 Wins",
      change: "+2",
      isPopular: true,
    },
    {
      rank: 3,
      name: "CryptoKing",
      verified: true,
      followers: "12,453 Followers",
      winRate: "85.5%",
      streak: "8 Wins",
      change: "+2",
      isPopular: true,
    },
    {
      rank: 4,
      name: "CryptoKing",
      verified: true,
      followers: "12,453 Followers",
      winRate: "85.5%",
      streak: "8 Wins",
      change: "+2",
      isPopular: true,
    },
  ];

  const getRankColor = (rank: any) => {
    switch (rank) {
      case 1:
        return "bg-yellow-500";
      case 2:
        return "bg-gray-400";
      case 3:
        return "bg-orange-500";
      default:
        return "bg-gray-300";
    }
  };

  return (
    <div className="w-full bg-card  rounded-[10px] border flex flex-col gap-2 2xl:gap-4 p-3 2xl:p-4 3xl:p-5">
      <div className="w-full flex items-center border-b border-[#E3E3E4] dark:border-[#0F2430] pb-4 justify-between">
        <div className="flex items-center gap-2">
          <Image
            src={"/logo.png"}
            alt="logo"
            width={35}
            height={35}
            priority
            className="md:hidden"
          />

          <h2 className="text-lg 2xl:text-xl font-semibold">Leaderboard</h2>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative hidden md:block  pr-4">
            <input
              type="text"
              placeholder="Search traders"
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
        </div>
      </div>
      {/* Header Section */}
      <div className="flex items-center flex-col md:flex-row gap-8 justify-between max-w-5xl 2xl:max-w-6xl 3xl:max-w-7xl w-full mx-auto ">
        <div className="flex-1 pt-6 md:pt-0">
          <h1 className="text-2xl 2xl:text-3xl font-bold mb-1 md:mb-2">
            Discover top <span className="text-primary">Signal</span> Providers
          </h1>
          <h2 className="text-2xl md:text-lg 2xl:text-xl font-semibold mb-4">
            in one place
          </h2>
          <p className="text-gray-500 text-sm 2xl:text-base mb-6 max-w-lg">
            Find and follow the best performing signal providers for sports
            betting and trading, all verified and ranked.
          </p>
          <button className="bg-primary hover:bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors">
            Find providers
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 w-full md:w-fit">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-card-foreground p-0.5 w-full rounded-[10px]"
            >
              <div className="bg-card rounded-[10px] border p-3 md:pr-8 2xl:pr-16 text-start">
                {/* <div className="flex justify-start mb-3">{stat.icon}</div> */}
                <Image
                  src={stat.img}
                  alt={stat.label}
                  width={28}
                  height={28}
                  className="mb-3"
                />
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-gray-500 text-sm">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-5xl 2xl:max-w-6xl  3xl:max-w-7xl w-full mx-auto mt-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-4">
          <div>
            <h3 className="text-lg 2xl:text-xl font-semibold mb-2">
              Signal provider leaderboards
            </h3>
            <p className="text-gray-500 text-sm mb-4">
              Discover your signal provider leaderboards from here.
            </p>
          </div>

          <div className="flex gap-4 mb-6 border-b w-full md:w-fit border-gray-200 dark:border-gray-700">
            {["Sports", "Trading"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 w-full md:w-fit -mb-px text-sm font-medium border-b-2 transition-colors ${
                  activeTab === tab
                    ? "border-primary text-primary font-semibold"
                    : "border-transparent text-gray-500 hover:text-primary"
                }`}
                style={{ outline: "none" }}
                type="button"
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Leaderboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Top Performance */}
          <div className="bg-card-foreground rounded-[10px] border p-1">
            <div className="flex items-center justify-center bg-card p-3 mb-1">
              <h4 className="font-semibold">Top Performance</h4>
            </div>

            <div className="space-y-1">
              {leaderboardData.map((trader, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-card rounded-md hover:bg-card transition-colors"
                >
                  <div
                    className={`
                  ${
                    trader.rank === 1
                      ? "border-yellow-500"
                      : trader.rank === 2
                      ? "border-gray-400"
                      : trader.rank === 3
                      ? "border-orange-500"
                      : "border-gray-300"
                  }
                  pl-2 border-l-4
                  
                  `}
                  >
                    <div
                      className={` w-6 h-6 2xl:w-9 2xl:h-9  rounded-full ${getRankColor(
                        trader.rank
                      )} flex items-center justify-center text-white text-xs font-bold`}
                    >
                      {trader.rank}
                    </div>
                  </div>

                  <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center text-white text-xs font-semibold">
                    CK
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-sm">
                        {trader.name}
                      </span>
                      {trader.verified && (
                        <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                          <div className="w-2 h-1 bg-white rounded-full"></div>
                        </div>
                      )}
                    </div>
                    <div className="text-gray-500 text-xs">
                      {trader.followers}
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="font-semibold text-sm">
                      {trader.winRate}
                    </div>
                    <div className="text-gray-500 text-xs">Win rate</div>
                  </div>
                </div>
              ))}
            </div>
            <button className=" w-full bg-card rounded-full p-3 border mt-2 font-semibold cursor-pointer text-sm hover:underline">
              View top 25
            </button>
          </div>

          <div className="bg-card-foreground rounded-[10px] border p-1">
            <div className="flex items-center justify-center bg-card p-3 mb-1">
              <h4 className="font-semibold">Most Consistent</h4>
            </div>

            <div className="space-y-1">
              {leaderboardData.map((trader, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-card rounded-md hover:bg-card transition-colors"
                >
                  <div
                    className={`
                  ${
                    trader.rank === 1
                      ? "border-yellow-500"
                      : trader.rank === 2
                      ? "border-gray-400"
                      : trader.rank === 3
                      ? "border-orange-500"
                      : "border-gray-300"
                  }
                  pl-2 border-l-4
                  
                  `}
                  >
                    <div
                      className={` w-6 h-6 2xl:w-9 2xl:h-9  rounded-full ${getRankColor(
                        trader.rank
                      )} flex items-center justify-center text-white text-xs font-bold`}
                    >
                      {trader.rank}
                    </div>
                  </div>

                  <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center text-white text-xs font-semibold">
                    CK
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-sm">
                        {trader.name}
                      </span>
                      {trader.verified && (
                        <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                          <div className="w-2 h-1 bg-white rounded-full"></div>
                        </div>
                      )}
                    </div>
                    <div className="text-gray-500 text-xs">
                      {trader.followers}
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="font-semibold text-sm">{trader.streak}</div>
                    <div className="text-gray-500 text-xs">Streak</div>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full bg-card rounded-full p-3 border mt-2 font-semibold cursor-pointer text-sm hover:underline">
              View top 25
            </button>
          </div>

          {/* Trending */}
          <div className="bg-card-foreground rounded-[10px] border p-1">
            <div className="flex items-center justify-center bg-card p-3 mb-1">
              <h4 className="font-semibold">Trending</h4>
            </div>

            <div className="space-y-1">
              {leaderboardData.map((trader, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-card rounded-md hover:bg-card transition-colors"
                >
                  <div
                    className={`
                  ${
                    trader.rank === 1
                      ? "border-yellow-500"
                      : trader.rank === 2
                      ? "border-gray-400"
                      : trader.rank === 3
                      ? "border-orange-500"
                      : "border-gray-300"
                  }
                  pl-2 border-l-4
                  
                  `}
                  >
                    <div
                      className={` w-6 h-6 2xl:w-9 2xl:h-9  rounded-full ${getRankColor(
                        trader.rank
                      )} flex items-center justify-center text-white text-xs font-bold`}
                    >
                      {trader.rank}
                    </div>
                  </div>

                  <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center text-white text-xs font-semibold">
                    CK
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-sm">
                        {trader.name}
                      </span>
                      {trader.verified && (
                        <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                          <div className="w-2 h-1 bg-white rounded-full"></div>
                        </div>
                      )}
                    </div>
                    <div className="text-gray-500 text-xs">
                      {trader.followers}
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="font-semibold text-sm text-green-500">
                      {trader.change}
                    </div>
                    <div className="text-gray-500 text-xs">Change</div>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full bg-card rounded-full p-3 border mt-2 font-semibold cursor-pointer text-sm hover:underline">
              View top 25
            </button>
          </div>

          {/* Most Popular */}
          <div className="bg-card-foreground rounded-[10px] border p-1">
            <div className="flex items-center justify-center bg-card p-3 mb-1">
              <h4 className="font-semibold">Most Popular</h4>
            </div>

            <div className="space-y-1">
              {leaderboardData.map((trader, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-card rounded-md hover:bg-card transition-colors"
                >
                  <div
                    className={`
                  ${
                    trader.rank === 1
                      ? "border-yellow-500"
                      : trader.rank === 2
                      ? "border-gray-400"
                      : trader.rank === 3
                      ? "border-orange-500"
                      : "border-gray-300"
                  }
                  pl-2 border-l-4
                  
                  `}
                  >
                    <div
                      className={` w-6 h-6 2xl:w-9 2xl:h-9  rounded-full ${getRankColor(
                        trader.rank
                      )} flex items-center justify-center text-white text-xs font-bold`}
                    >
                      {trader.rank}
                    </div>
                  </div>

                  <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center text-white text-xs font-semibold">
                    CK
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-sm">
                        {trader.name}
                      </span>
                      {trader.verified && (
                        <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                          <div className="w-2 h-1 bg-white rounded-full"></div>
                        </div>
                      )}
                    </div>
                    <div className="text-gray-500 text-xs">
                      {trader.followers}
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="font-semibold text-sm">12,453</div>
                    <div className="text-gray-500 text-xs">Followers</div>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full bg-card rounded-full p-3 border mt-2 font-semibold cursor-pointer text-sm hover:underline">
              View top 25
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignalProvidersLeaderboard;
