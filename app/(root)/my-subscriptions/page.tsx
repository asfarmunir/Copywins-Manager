"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const MySubscriptionsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All categories");

  const signalProviders = [
    {
      id: 1,
      name: "CryptoKing",
      followers: "12,453 Followers",
      category: "Sports",
      categoryColor: "bg-primary",
      description: "Expert Trading signals with 85% accuracy rate",
      performance: "+12.5 last month",
      hasReview: true,
    },
    {
      id: 2,
      name: "CryptoKing",
      followers: "12,453 Followers",
      category: "Trading",
      categoryColor: "bg-orange-500",
      description: "Expert Trading signals with 85% accuracy rate",
      performance: "+12.5 last month",
      hasReview: false,
    },
    {
      id: 3,
      name: "CryptoKing",
      followers: "12,453 Followers",
      category: "Sports",
      categoryColor: "bg-primary",
      description: "Expert Trading signals with 85% accuracy rate",
      performance: "+12.5 last month",
      hasReview: false,
    },
    {
      id: 4,
      name: "CryptoKing",
      followers: "12,453 Followers",
      category: "Sports",
      categoryColor: "bg-primary",
      description: "Expert Trading signals with 85% accuracy rate",
      performance: "+12.5 last month",
      hasReview: true,
    },
    {
      id: 5,
      name: "CryptoKing",
      followers: "12,453 Followers",
      category: "Trading",
      categoryColor: "bg-orange-500",
      description: "Expert Trading signals with 85% accuracy rate",
      performance: "+12.5 last month",
      hasReview: false,
    },
    {
      id: 6,
      name: "CryptoKing",
      followers: "12,453 Followers",
      category: "Sports",
      categoryColor: "bg-primary",
      description: "Expert Trading signals with 85% accuracy rate",
      performance: "+12.5 last month",
      hasReview: false,
    },
  ];

  return (
    <div className="w-full bg-card h-full  rounded-[10px] border flex flex-col gap-2 2xl:gap-4 p-3 2xl:p-4 3xl:p-5">
      {/* Header */}

      <div className="w-full flex items-center border-b border-[#E3E3E4] dark:border-[#0F2430] pb-4 mb-1 justify-between">
        <h2 className="text-lg 2xl:text-xl font-semibold">My Subscriptions</h2>
        <Link
          href={"/my-subscriptions/manage"}
          className="border bg-card-foreground rounded-full px-4 py-2 text-[10px] md:text-sm font-medium"
        >
          Manage Subscriptions
        </Link>
      </div>

      {/* Signal Providers Section */}
      <div className="mb-6 mt-2 w-full max-w-6xl 3xl:max-w-7xl mx-auto ">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg 2xl:text-xl font-semibold mb-1">
              My signal providers
            </h2>
            <p className="text-gray-500 text-sm">
              Discover your signal providers from here.
            </p>
          </div>

          {/* Category Filter */}
          <div className="relative">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="appearance-none bg-card-foreground border border-[#E3E3E4] dark:border-slate-800 rounded-full px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option>All categories</option>
              <option>Sports</option>
              <option>Trading</option>
            </select>
            <FiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
          </div>
        </div>

        {/* Signal Providers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {signalProviders.map((provider) => (
            <div
              key={provider.id}
              className="bg-card-foreground rounded-[10px] border p-1.5 hover:shadow-md transition-shadow"
            >
              {/* Header */}
              <div className="mb-1 bg-card p-4 rounded-[10px] ">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-800 rounded flex items-center justify-center text-white text-sm font-semibold">
                      CK
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm">{provider.name}</h3>
                      <p className="text-gray-500 text-xs">
                        {provider.followers}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`${provider.categoryColor} text-white text-xs px-2 py-1 rounded-full`}
                  >
                    {provider.category}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 text-sm ">
                  {provider.description}
                </p>
              </div>

              {/* Performance */}
              <div className="text-center mb-2 bg-card p-4 rounded-[10px]">
                <p className="text-gray-500 text-xs mb-1">Performance</p>
                <p className="font-semibold text-sm 2xl:text-base">
                  {provider.performance}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 p-3">
                {provider.hasReview ? (
                  <button className="flex-1 bg-primary hover:bg-blue-600 text-white py-2 px-4 rounded-full text-sm font-medium transition-colors">
                    Review
                  </button>
                ) : (
                  <button className="flex-1 bg-card border border-[#E3E3E4] dark:border-slate-800 hover:bg-gray-50 dark:hover:bg-gray-800 py-2 px-4 rounded-full text-sm font-medium transition-colors">
                    Edit Review
                  </button>
                )}
                <button className="flex-1 bg-card border border-[#E3E3E4] dark:border-slate-800 hover:bg-gray-50 dark:hover:bg-gray-800 py-2 px-4 rounded-full text-sm font-medium transition-colors">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MySubscriptionsPage;
