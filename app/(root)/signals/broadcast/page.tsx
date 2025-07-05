"use client";
import { FiUsers } from "react-icons/fi";
import Link from "next/link";
import React from "react";
import PostBroadcast from "@/components/shared/Broadcast";

// Follower Statistics Card Component
const FollowerStatCard = ({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) => {
  return (
    <div className="bg-card-foreground rounded-[10px] border p-1">
      <div className="bg-card p-6 rounded-[10px]">
        <div className="flex items-start  mb-4">
          <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
            {icon}
          </div>
        </div>
        <div className="text-start">
          <p className="text-3xl font-bold text-foreground mb-1">{value}</p>
          <p className="text-gray-500 dark:text-gray-300 text-sm">{label}</p>
        </div>
      </div>
    </div>
  );
};

const BroadcastPage = () => {
  // Mock data for follower statistics
  const followerStats = [
    {
      icon: <FiUsers className="w-5 h-5" />,
      value: "247",
      label: "Total followers",
    },
    {
      icon: <FiUsers className="w-5 h-5" />,
      value: "203",
      label: "Active Followers",
    },
    {
      icon: <FiUsers className="w-5 h-5" />,
      value: "203",
      label: "New followers",
    },
  ];

  return (
    <div className="w-full bg-card h-full rounded-[10px] border flex flex-col items-center gap-4 2xl:gap-6 p-3 2xl:p-4 3xl:p-5">
      {/* Header */}
      <div className="w-full flex items-center justify-between border-b border-[#E3E3E4] dark:border-[#0F2430] pb-4">
        <h1 className="text-lg 2xl:text-xl font-semibold">Post a broadcast</h1>
        <div className="flex items-center gap-4">
          <Link
            href={"/signals/manage"}
            className="px-4 py-2 bg-card-foreground border rounded-full text-sm 3xl:text-base font-medium hover:bg-gray-50 dark:hover:bg-gray-800"
          >
            Manage signals
          </Link>
          <button className="px-4 py-2 bg-card-foreground border rounded-full text-sm 3xl:text-base font-medium hover:bg-gray-50 dark:hover:bg-gray-800">
            Manage plans
          </button>
        </div>
      </div>

      <div className=" w-full  space-y-6 max-w-6xl 3xl:max-w-7xl py-4 mx-auto">
        {/* Follower Statistics */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold mb-1">
                Follower statistics
              </h2>
              <p className="text-gray-500 dark:text-gray-300 text-sm">
                Discover your follower statistics from here.
              </p>
            </div>

            <PostBroadcast />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4 ">
            {followerStats.map((stat, index) => (
              <FollowerStatCard key={index} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BroadcastPage;
