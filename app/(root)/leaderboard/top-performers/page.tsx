import React from "react";
import { FiSearch, FiChevronRight } from "react-icons/fi";

const TopPerformersPage = () => {
  const performers = [
    {
      rank: 1,
      name: "CryptoKing",
      followers: "12,453 Followers",
      verified: true,
      winRate: "85.5%",
      profit: "24.7%",
      signals: "342",
    },
    {
      rank: 2,
      name: "CryptoKing",
      followers: "12,453 Followers",
      verified: true,
      winRate: "85.5%",
      profit: "24.7%",
      signals: "342",
    },
    {
      rank: 3,
      name: "CryptoKing",
      followers: "12,453 Followers",
      verified: true,
      winRate: "85.5%",
      profit: "24.7%",
      signals: "342",
    },
    {
      rank: 4,
      name: "CryptoKing",
      followers: "12,453 Followers",
      verified: true,
      winRate: "85.5%",
      profit: "24.7%",
      signals: "342",
    },
    {
      rank: 5,
      name: "CryptoKing",
      followers: "12,453 Followers",
      verified: true,
      winRate: "85.5%",
      profit: "24.7%",
      signals: "342",
    },
    {
      rank: 6,
      name: "CryptoKing",
      followers: "12,453 Followers",
      verified: true,
      winRate: "85.5%",
      profit: "24.7%",
      signals: "342",
    },
    {
      rank: 7,
      name: "CryptoKing",
      followers: "12,453 Followers",
      verified: true,
      winRate: "85.5%",
      profit: "24.7%",
      signals: "342",
    },
    {
      rank: 8,
      name: "CryptoKing",
      followers: "12,453 Followers",
      verified: true,
      winRate: "85.5%",
      profit: "24.7%",
      signals: "342",
    },
    {
      rank: 9,
      name: "CryptoKing",
      followers: "12,453 Followers",
      verified: true,
      winRate: "85.5%",
      profit: "24.7%",
      signals: "342",
    },
    {
      rank: 10,
      name: "CryptoKing",
      followers: "12,453 Followers",
      verified: true,
      winRate: "85.5%",
      profit: "24.7%",
      signals: "342",
    },
    {
      rank: 11,
      name: "CryptoKing",
      followers: "12,453 Followers",
      verified: true,
      winRate: "85.5%",
      profit: "24.7%",
      signals: "342",
    },
    {
      rank: 12,
      name: "CryptoKing",
      followers: "12,453 Followers",
      verified: true,
      winRate: "85.5%",
      profit: "24.7%",
      signals: "342",
    },
    {
      rank: 4,
      name: "CryptoKing",
      followers: "12,453 Followers",
      verified: true,
      winRate: "85.5%",
      profit: "24.7%",
      signals: "342",
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
        return "bg-transparent text-gray-600 dark:text-gray-400";
    }
  };

  const getRankStyle = (rank: any) => {
    if (rank <= 3) {
      return `${getRankColor(rank)} text-white font-bold`;
    }
    return "text-gray-600 dark:text-gray-400 font-medium";
  };

  return (
    <div className="w-full bg-card rounded-[10px] border flex flex-col p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span>Leaderboard</span>
          <FiChevronRight className="w-4 h-4" />
          <span className="text-gray-900 dark:text-white">Top performers</span>
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 bg-card-foreground border border-[#E3E3E4] dark:border-slate-800 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm w-64"
          />
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        </div>
      </div>

      {/* Title and Description */}
      <div className="flex items-center justify-between mb-8 mt-4 max-w-6xl 3xl:max-w-7xl w-full mx-auto">
        <div className="">
          <h1 className="text-xl 2xl:text-2xl font-semibold mb-2">
            Top performing signal providers
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>Find elite trading signals from top analysts</span>
          </div>
        </div>
        <div className="flex items-center text-xs 2xl:text-sm 3xl:text-base gap-2 bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-full">
          <span>Tracked weekly</span>
          <span>•</span>
          <span>Updated 1 hour ago</span>
        </div>
      </div>

      {/* Table */}
      <div className="space-y-1 bg-card-foreground rounded-[10px] border p-1 max-w-6xl 3xl:max-w-7xl w-full mx-auto">
        {performers.map((performer, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-4 bg-card hover:bg-card-foreground rounded-[10px] transition-colors cursor-pointer border-b border-gray-100 dark:border-gray-800 last:border-b-0"
          >
            {/* Rank */}
            <div className="w-8">
              {performer.rank <= 3 ? (
                <div
                  className={`w-8 h-8 rounded-full ${getRankColor(
                    performer.rank
                  )} flex items-center justify-center text-white text-xs font-bold`}
                >
                  {performer.rank}
                </div>
              ) : (
                <span className="text-gray-600 dark:text-gray-400 font-medium text-sm">
                  {performer.rank}
                </span>
              )}
            </div>

            {/* Avatar and Name */}
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center text-white text-xs font-semibold">
                CK
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-sm">
                    {performer.name}
                  </span>
                  {performer.verified && (
                    <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                      <svg
                        className="w-2.5 h-2.5 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  )}
                </div>
                <div className="text-gray-500 text-xs">
                  {performer.followers}
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-12">
              {/* Win Rate */}
              <div className="text-center">
                <div className="font-semibold text-sm">{performer.winRate}</div>
                <div className="text-gray-500 text-xs">Win rate</div>
              </div>

              {/* Profit */}
              <div className="text-center">
                <div className="font-semibold text-sm">{performer.profit}</div>
                <div className="text-gray-500 text-xs">Profit</div>
              </div>

              {/* Signals */}
              <div className="text-center">
                <div className="font-semibold text-sm">{performer.signals}</div>
                <div className="text-gray-500 text-xs">Signals</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPerformersPage;
