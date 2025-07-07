"use client";
import React, { useState } from "react";
import { FiChevronDown, FiEye, FiEyeOff } from "react-icons/fi";
import Image from "next/image";
import { MdDelete, MdDragIndicator } from "react-icons/md";
import { FiArrowUp, FiArrowDown } from "react-icons/fi";

const LeaderboardSettings = () => {
  const [activeTab, setActiveTab] = useState("Ranking criteria");
  const [weeklyRankings, setWeeklyRankings] = useState("Weekly rankings");
  const [allCategories, setAllCategories] = useState("All Categories");
  const [minimumTradeCount, setMinimumTradeCount] = useState(10);
  const [minimumAccountAge, setMinimumAccountAge] = useState(30);
  const [excludeSuspiciousAccounts, setExcludeSuspiciousAccounts] =
    useState(true);

  // Featured Providers state
  const [searchTerm, setSearchTerm] = useState("");
  const [autoFlagSuspicious, setAutoFlagSuspicious] = useState(true);
  const [hideFlaggedProviders, setHideFlaggedProviders] = useState(true);
  const [requireManualApproval, setRequireManualApproval] = useState(true);
  const [showAddProviderModal, setShowAddProviderModal] = useState(false);
  const [providerSearchTerm, setProviderSearchTerm] = useState("");

  const [featuredProviders, setFeaturedProviders] = useState([
    {
      id: 1,
      name: "Joey Key",
      category: "Forex",
      featured: true,
      visible: true,
    },
    {
      id: 2,
      name: "Joey Key",
      category: "Forex",
      featured: true,
      visible: false,
    },
    {
      id: 3,
      name: "Joey Key",
      category: "Forex",
      featured: true,
      visible: true,
    },
    {
      id: 4,
      name: "Joey Key",
      category: "Forex",
      featured: true,
      visible: false,
    },
    {
      id: 5,
      name: "Joey Key",
      category: "Forex",
      featured: true,
      visible: true,
    },
    {
      id: 6,
      name: "Joey Key",
      category: "Forex",
      featured: true,
      visible: false,
    },
    {
      id: 7,
      name: "Joey Key",
      category: "Forex",
      featured: false,
      visible: true,
    },
  ]);

  const tabs = ["Ranking criteria", "Featured providers"];

  const [rankingCriteria, setRankingCriteria] = useState([
    {
      id: 1,
      name: "Total Return",
      enabled: true,
      weight: 30,
      direction: "desc",
    },
    {
      id: 2,
      name: "Win Rate",
      enabled: true,
      weight: 30,
      direction: "desc",
    },
    {
      id: 3,
      name: "Risk-Adjusted Return",
      enabled: true,
      weight: 30,
      direction: "desc",
    },
    {
      id: 4,
      name: "Consistency",
      enabled: true,
      weight: 30,
      direction: "desc",
    },
    {
      id: 5,
      name: "Activity Level",
      enabled: true,
      weight: 30,
      direction: "desc",
    },
  ]);

  const handleWeightChange = (id: number, newWeight: number) => {
    setRankingCriteria((prev) =>
      prev.map((criteria) =>
        criteria.id === id ? { ...criteria, weight: newWeight } : criteria
      )
    );
  };

  const handleToggleCriteria = (id: number) => {
    setRankingCriteria((prev) =>
      prev.map((criteria) =>
        criteria.id === id
          ? { ...criteria, enabled: !criteria.enabled }
          : criteria
      )
    );
  };

  const handleDirectionToggle = (id: number) => {
    setRankingCriteria((prev) =>
      prev.map((criteria) =>
        criteria.id === id
          ? {
              ...criteria,
              direction: criteria.direction === "desc" ? "asc" : "desc",
            }
          : criteria
      )
    );
  };

  const handleDeleteCriteria = (id: number) => {
    setRankingCriteria((prev) => prev.filter((criteria) => criteria.id !== id));
  };

  const handleToggleFeatured = (id: number) => {
    setFeaturedProviders((prev) =>
      prev.map((provider) =>
        provider.id === id
          ? { ...provider, featured: !provider.featured }
          : provider
      )
    );
  };

  const handleToggleVisible = (id: number) => {
    setFeaturedProviders((prev) =>
      prev.map((provider) =>
        provider.id === id
          ? { ...provider, visible: !provider.visible }
          : provider
      )
    );
  };

  const handleDeleteProvider = (id: number) => {
    setFeaturedProviders((prev) =>
      prev.filter((provider) => provider.id !== id)
    );
  };

  const handleAddProvider = () => {
    // Add logic to add new provider
    setShowAddProviderModal(false);
    setProviderSearchTerm("");
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
            Leaderboard Settings
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="mb-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
              {activeTab === "Ranking criteria"
                ? "Leaderboard Ranking Criteria"
                : "Featured Providers"}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {activeTab === "Ranking criteria"
                ? "Set and prioritize criteria for weekly and monthly rankings."
                : "Manually feature providers and manage visibility on leaderboards."}
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex items-center w-full md:w-fit  bg-card-foreground rounded-full p-0.5 gap-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 md:px-4 py-2 flex-1 rounded-full text-nowrap text-xs md:text-sm transition ${
                  activeTab === tab
                    ? "bg-card font-semibold text-gray-900 dark:text-white"
                    : "text-gray-600 dark:text-gray-300 font-normal hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="">
          {activeTab === "Ranking criteria" && (
            <>
              <div className="bg-card-foreground rounded-lg border p-4 md:p-6 space-y-6">
                {/* Controls Section */}
                <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                  <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                      Ranking Criteria & Weights
                    </h3>
                  </div>

                  <div className="flex flex-col md:flex-row gap-3 items-start md:items-center">
                    {/* Weekly Rankings Dropdown */}
                    <div className="relative">
                      <select
                        value={weeklyRankings}
                        onChange={(e) => setWeeklyRankings(e.target.value)}
                        className="appearance-none bg-card border border-gray-300 dark:border-gray-600 rounded-full px-4 py-2 pr-8 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="Weekly rankings">Weekly rankings</option>
                        <option value="Monthly rankings">
                          Monthly rankings
                        </option>
                        <option value="Quarterly rankings">
                          Quarterly rankings
                        </option>
                      </select>
                      <FiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                    </div>

                    {/* All Categories Dropdown */}
                    <div className="relative">
                      <select
                        value={allCategories}
                        onChange={(e) => setAllCategories(e.target.value)}
                        className="appearance-none bg-card border border-gray-300 dark:border-gray-600 rounded-full px-4 py-2 pr-8 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="All Categories">All Categories</option>
                        <option value="Trading">Trading</option>
                        <option value="Sports">Sports</option>
                        <option value="Crypto">Crypto</option>
                      </select>
                      <FiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                    </div>

                    {/* Add Criterion Button */}
                    <button className="bg-card border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white px-4 py-2 rounded-full text-sm font-semibold transition">
                      Add criterion
                    </button>
                  </div>
                </div>

                {/* Ranking Criteria List */}
                <div className="space-y-2">
                  {rankingCriteria.map((criteria) => (
                    <div
                      key={criteria.id}
                      className="flex items-center gap-4 p-4 bg-card rounded-lg border hover:shadow-sm transition-shadow"
                    >
                      {/* Drag Handle */}
                      <div className="flex items-center">
                        <MdDragIndicator className="w-5 h-5 text-gray-400 cursor-move" />
                      </div>

                      {/* Checkbox */}
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          checked={criteria.enabled}
                          onChange={() => handleToggleCriteria(criteria.id)}
                          className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-primary dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                      </div>

                      {/* Criteria Name */}
                      <div className="flex-1">
                        <span className="text-sm 2xl:text-base font-semibold text-gray-900 dark:text-white">
                          {criteria.name}
                        </span>
                      </div>

                      {/* Direction Toggle */}
                      <div className="flex items-center">
                        <button
                          onClick={() => handleDirectionToggle(criteria.id)}
                          className="p-2 bg-card-foreground rounded-full  dark:hover:text-gray-300 transition"
                        >
                          {criteria.direction === "desc" ? (
                            <FiArrowDown className="w-4 h-4" />
                          ) : (
                            <FiArrowUp className="w-4 h-4" />
                          )}
                        </button>
                      </div>

                      {/* Weight Input */}
                      <div className="hidden md:flex items-center gap-2">
                        <input
                          type="number"
                          value={criteria.weight}
                          onChange={(e) =>
                            handleWeightChange(
                              criteria.id,
                              parseInt(e.target.value) || 0
                            )
                          }
                          className="w-16 px-2 py-1 text-sm text-center border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                          min="0"
                          max="100"
                        />
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          %
                        </span>
                      </div>

                      {/* Info Icon */}
                      <div className="hidden md:flex items-center">
                        <button className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </button>
                      </div>

                      {/* Delete Button */}
                      <div className="flex items-center">
                        <button
                          onClick={() => handleDeleteCriteria(criteria.id)}
                          className="p-1 text-red-400 bg-red-50 dark:bg-red-700/20 border border-red-400 rounded-full hover:text-red-600 transition"
                        >
                          <MdDelete className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-card-foreground mt-4 rounded-lg border p-4 md:p-6 space-y-6">
                {/* Additional Settings */}
                <div className="mt-2">
                  <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-4">
                    Additional Settings
                  </h3>

                  <div className="space-y-3">
                    {/* Minimum Trade Count */}
                    <div className="bg-card rounded-[8px] p-4 flex items-center justify-between">
                      <div>
                        <h4 className="text-sm 2xl:text-base font-semibold text-gray-900 dark:text-white">
                          Minimum trade count
                        </h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Set minimum trade count to client
                        </p>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="number"
                          value={minimumTradeCount}
                          onChange={(e) =>
                            setMinimumTradeCount(parseInt(e.target.value) || 0)
                          }
                          className="w-20 px-3 py-2 text-sm text-center border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                          min="0"
                        />
                      </div>
                    </div>

                    {/* Minimum Account Age */}
                    <div className="bg-card rounded-[8px] p-4 flex items-center justify-between">
                      <div>
                        <h4 className="text-sm 2xl:text-base font-semibold text-gray-900 dark:text-white">
                          Minimum Account Age (days)
                        </h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Set minimum account days
                        </p>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="number"
                          value={minimumAccountAge}
                          onChange={(e) =>
                            setMinimumAccountAge(parseInt(e.target.value) || 0)
                          }
                          className="w-20 px-3 py-2 text-sm text-center border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                          min="0"
                        />
                      </div>
                    </div>

                    {/* Exclude Suspicious Accounts */}
                    <div className="bg-card rounded-[8px] p-4 flex items-center justify-between">
                      <div>
                        <h4 className="text-sm 2xl:text-base font-semibold text-gray-900 dark:text-white">
                          Exclude Suspicious Accounts
                        </h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Send as a email to their inbox
                        </p>
                      </div>
                      <div className="flex items-center">
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={excludeSuspiciousAccounts}
                            onChange={(e) =>
                              setExcludeSuspiciousAccounts(e.target.checked)
                            }
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Save Button */}
              <div className="flex justify-end pt-6">
                <button className="bg-primary hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm 2xl:text-base font-semibold transition">
                  Save settings
                </button>
              </div>
            </>
          )}

          {activeTab === "Featured providers" && (
            <>
              <div className="bg-card-foreground rounded-lg border p-4 md:p-6 space-y-6">
                {/* Search and Add Provider Section */}
                <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                  <div className="relative flex-1 max-w-md">
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
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-full bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    />
                  </div>

                  <button
                    onClick={() => setShowAddProviderModal(true)}
                    className="bg-card border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white px-4 py-2 rounded-full text-sm font-semibold transition"
                  >
                    Add Featured Provider
                  </button>
                </div>

                {/* Providers Table */}
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-primary text-white">
                        <th className="text-left px-4 py-3 text-sm font-semibold rounded-l-lg">
                          <div className="flex items-center gap-2">
                            PROVIDER NAME
                            <button className="text-white hover:text-gray-200">
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                                />
                              </svg>
                            </button>
                          </div>
                        </th>
                        <th className="text-left px-4 py-3 text-sm font-semibold">
                          <div className="flex items-center gap-2">
                            CATEGORY
                            <button className="text-white hover:text-gray-200">
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                                />
                              </svg>
                            </button>
                          </div>
                        </th>
                        <th className="text-left px-4 py-3 text-sm font-semibold">
                          <div className="flex items-center gap-2">
                            FEATURED
                            <button className="text-white hover:text-gray-200">
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                                />
                              </svg>
                            </button>
                          </div>
                        </th>
                        <th className="text-left px-4 py-3 text-sm font-semibold">
                          <div className="flex items-center gap-2">
                            VISIBLE
                            <button className="text-white hover:text-gray-200">
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                                />
                              </svg>
                            </button>
                          </div>
                        </th>
                        <th className="text-left px-4 py-3 text-sm font-semibold rounded-r-lg">
                          ACTIONS
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-card">
                      {featuredProviders.map((provider, index) => (
                        <tr
                          key={provider.id}
                          className={`border-b border-gray-200 dark:border-gray-700 ${
                            index % 2 === 0
                              ? "bg-gray-50 dark:bg-gray-800/50"
                              : "bg-white dark:bg-gray-800"
                          }`}
                        >
                          <td className="px-4 py-3 text-sm text-gray-900 dark:text-white font-medium">
                            {provider.name}
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                            {provider.category}
                          </td>
                          <td className="px-4 py-3">
                            <button
                              onClick={() => handleToggleFeatured(provider.id)}
                              className={`${
                                provider.featured
                                  ? "text-yellow-500 hover:text-yellow-600"
                                  : "text-gray-300 hover:text-yellow-500"
                              } transition-colors`}
                            >
                              <svg
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                              </svg>
                            </button>
                          </td>
                          <td className="px-4 py-3">
                            <button
                              onClick={() => handleToggleVisible(provider.id)}
                              className={`${
                                provider.visible
                                  ? "text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100"
                                  : "text-gray-300 hover:text-gray-600 dark:text-gray-600 dark:hover:text-gray-400"
                              } transition-colors`}
                            >
                              {provider.visible ? (
                                <FiEye className="w-5 h-5" />
                              ) : (
                                <FiEyeOff className="w-5 h-5" />
                              )}
                            </button>
                          </td>
                          <td className="px-4 py-3">
                            <button
                              onClick={() => handleDeleteProvider(provider.id)}
                              className="p-1 text-red-400 bg-red-50 dark:bg-red-700/20 border border-red-400 rounded-full hover:text-red-600 transition"
                            >
                              <MdDelete className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Suspicious Rank Settings */}
              <div className="bg-card-foreground mt-4 rounded-lg border p-4 md:p-6 space-y-6">
                <div className="mt-2">
                  <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-4">
                    Suspicious Rank Settings
                  </h3>

                  <div className="space-y-3">
                    {/* Auto-Flag Suspicious Performance */}
                    <div className="bg-card rounded-[8px] p-4 flex items-center justify-between">
                      <div>
                        <h4 className="text-sm 2xl:text-base font-semibold text-gray-900 dark:text-white">
                          Auto-Flag Suspicious Performance
                        </h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Send as a email to their inbox
                        </p>
                      </div>
                      <div className="flex items-center">
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={autoFlagSuspicious}
                            onChange={(e) =>
                              setAutoFlagSuspicious(e.target.checked)
                            }
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                        </label>
                      </div>
                    </div>

                    {/* Hide Flagged Providers */}
                    <div className="bg-card rounded-[8px] p-4 flex items-center justify-between">
                      <div>
                        <h4 className="text-sm 2xl:text-base font-semibold text-gray-900 dark:text-white">
                          Hide Flagged Providers
                        </h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Send as a email to their inbox
                        </p>
                      </div>
                      <div className="flex items-center">
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={hideFlaggedProviders}
                            onChange={(e) =>
                              setHideFlaggedProviders(e.target.checked)
                            }
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                        </label>
                      </div>
                    </div>

                    {/* Require Manual Approval for Top 10 */}
                    <div className="bg-card rounded-[8px] p-4 flex items-center justify-between">
                      <div>
                        <h4 className="text-sm 2xl:text-base font-semibold text-gray-900 dark:text-white">
                          Require Manual Approval for Top 10
                        </h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Send as a email to their inbox
                        </p>
                      </div>
                      <div className="flex items-center">
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={requireManualApproval}
                            onChange={(e) =>
                              setRequireManualApproval(e.target.checked)
                            }
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Save Button */}
              <div className="flex justify-end pt-6">
                <button className="bg-primary hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm 2xl:text-base font-semibold transition">
                  Save settings
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Add Featured Provider Modal */}
      {showAddProviderModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-card rounded-xl border shadow-xl w-full max-w-3xl mx-4">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Add Featured Provider
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Search and add a provider to feature on the leaderboard.
                </p>
              </div>
              <button
                onClick={() => setShowAddProviderModal(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-3">
                  Search Provider
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search providers"
                    value={providerSearchTerm}
                    onChange={(e) => setProviderSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 border-2 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm"
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <div className="border-2 border-dashed border-primary/20 rounded p-2">
                      <svg
                        className="w-4 h-4 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-end gap-3 p-6 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={() => setShowAddProviderModal(false)}
                className="px-6 py-2 text-sm w-full font-semibold text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full transition"
              >
                Cancel
              </button>
              <button
                onClick={handleAddProvider}
                className="px-6 py-2 text-sm w-full font-semibold text-white bg-primary hover:bg-blue-700 rounded-full transition"
              >
                Add provider
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeaderboardSettings;
