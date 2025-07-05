"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";

const ManageSubscriptionsPage = () => {
  const cancellationReasons = [
    "Too expensive",
    "Not getting useful signals",
    "Poor performance",
    "Found a better provider",
    "Temporary break, will subscribe again",
    "Other reason",
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Active Subscriptions");
  const [selectedReason, setSelectedReason] = useState("");

  const subscriptions = [
    {
      id: 1,
      name: "CryptoKing",
      followers: "12,453 Followers",
      description: "Expert Trading signals with 85% accuracy rate",
      billing: "$49.99 / Monthly",
      nextPayment: "May, 15 2024",
      notifications: "Email, Push",
      status: "Active",
    },
    {
      id: 2,
      name: "CryptoKing",
      followers: "12,453 Followers",
      description: "Expert Trading signals with 85% accuracy rate",
      billing: "$49.99 / Monthly",
      nextPayment: "May, 15 2024",
      notifications: "Email, Push",
      status: "Active",
    },
  ];

  return (
    <div className="w-full bg-card rounded-[10px]  min-h-full  border flex flex-col p-6">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm 3xl:text-base text-gray-500 mb-6 pb-6 border-b">
        <span className="hover:text-gray-700 cursor-pointer">
          My subscriptions
        </span>
        <span className="mx-2">›</span>
        <span className="text-gray-800 dark:text-gray-200">
          Manage subscriptions
        </span>
      </div>

      {/* Header */}
      <div className="flex items-center flex-col md:flex-row justify-between gap-4 mb-4 md:mb-0">
        <div className="md:mb-6">
          <h1 className="text-xl 2xl:text-2xl font-semibold mb-1">
            Manage subscriptions
          </h1>
          <p className="text-gray-500 text-sm">
            Manage your subscriptions from here.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex items-center  justify-between w-full md:w-fit">
          <div className="flex items-center space-x-1 bg-card-foreground rounded-full w-full p-1">
            <button
              onClick={() => setActiveTab("Active Subscriptions")}
              className={`px-4 py-2 text-nowrap rounded-full flex-1 text-sm font-semibold transition ${
                activeTab === "Active Subscriptions"
                  ? "bg-card text-foreground shadow-sm"
                  : "text-gray-500 dark:text-gray-300 hover:text-foreground"
              }`}
            >
              Active Subscriptions
            </button>
            <button
              onClick={() => setActiveTab("Cancelled")}
              className={`px-3 xl:px-9 py-2 text-nowrap rounded-full flex-1 text-sm font-semibold transition ${
                activeTab === "Cancelled"
                  ? "bg-card text-foreground shadow-sm"
                  : "text-gray-500 dark:text-gray-300 hover:text-foreground"
              }`}
            >
              Cancelled
            </button>
          </div>
        </div>
      </div>

      {/* Subscriptions List */}
      <div className="grid grid-cols-1 md:grid-cols-2 mt-3 gap-4">
        {subscriptions.map((subscription) => (
          <div
            key={subscription.id}
            className="bg-card-foreground rounded-[10px] border p-1"
          >
            {/* Provider Info */}
            <div className="flex items-start bg-card justify-between mb-1 p-5">
              <div className="">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-800 rounded flex items-center justify-center text-white text-sm font-semibold">
                    CK
                  </div>
                  <div>
                    <h3 className="font-semibold text-base">
                      {subscription.name}
                    </h3>
                    <p className="text-gray-500 text-sm">
                      {subscription.followers}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 mt-4 dark:text-gray-300 text-sm ">
                  {subscription.description}
                </p>
              </div>
              <span className="bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-200 text-xs 2xl:text-sm px-3 py-1 rounded-full font-medium">
                {subscription.status}
              </span>
            </div>

            {/* Description */}

            {/* Subscription Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-1 mb-1">
              <div className=" bg-card flex items-center flex-col justify-center p-4">
                <p className="text-gray-500 text-xs mb-1">Billing</p>
                <p className="font-semibold text-sm">{subscription.billing}</p>
              </div>
              <div className=" bg-card flex items-center flex-col justify-center p-4">
                <p className="text-gray-500 text-xs mb-1">Next Payment</p>
                <p className="font-semibold text-sm">
                  {subscription.nextPayment}
                </p>
              </div>
              <div className=" bg-card flex items-center flex-col justify-center p-4">
                <p className="text-gray-500 text-xs mb-1">Notifications</p>
                <p className="font-semibold text-sm">
                  {subscription.notifications}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 justify-end p-4">
              <Link
                href={"/my-subscriptions/profiles"}
                className="bg-card border border-[#E3E3E4] dark:border-slate-800 hover:bg-gray-50 dark:hover:bg-gray-800 py-2 px-4 md:px-12 rounded-full text-sm font-semibold transition-colors"
              >
                Manage
              </Link>

              <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogTrigger asChild>
                  <button className="bg-red-500 dark:bg-red-500/80 hover:bg-red-600 text-white py-2 px-4 md:px-12 rounded-full text-sm font-semibold transition-colors">
                    Cancel
                  </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-2xl p-3">
                  <DialogHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <DialogTitle className="text-lg font-semibold">
                      Cancel Subscription
                    </DialogTitle>
                  </DialogHeader>

                  {/* Provider Info */}
                  <div className="flex items-center justify-between p-5 md:p-6 2xl:p-9 bg-gray-50 dark:bg-gray-800 rounded-lg mb-4 ">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-800 rounded flex items-center justify-center text-white text-sm font-semibold">
                        CK
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm">CryptoKing</h3>
                        <p className="text-gray-500 text-xs">Premium Monthly</p>
                      </div>
                    </div>
                    <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-medium">
                      $49.99 / Monthly
                    </span>
                  </div>

                  {/* Warning Banner */}
                  <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-5  mb-2">
                    <div className="flex items-start gap-2">
                      <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">!</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-orange-800 dark:text-orange-200 mb-1">
                          Confirm Cancellation
                        </h4>
                      </div>
                    </div>
                    <p className="text-orange-700 dark:text-orange-300 text-sm">
                      Your access to all signals and features will end on May
                      15, 2024.
                    </p>
                  </div>

                  {/* Cancellation Reasons */}
                  <div className="mb-1 p-3">
                    <h4 className="font-medium mb-4">
                      Please tell us why you're cancelling
                    </h4>
                    <div className="space-y-1">
                      {cancellationReasons.map((reason, index) => (
                        <label
                          key={index}
                          className="flex items-center bg-card p-3  rounded-[10px] gap-3 cursor-pointer"
                        >
                          <input
                            type="radio"
                            name="cancellation-reason"
                            value={reason}
                            checked={selectedReason === reason}
                            onChange={(e) => setSelectedReason(e.target.value)}
                            className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 focus:ring-2"
                          />
                          <span className="text-sm text-gray-700 dark:text-gray-300">
                            {reason}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4 mb-4">
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="flex-1 bg-card border border-[#E3E3E4] dark:border-slate-800 hover:bg-gray-50 dark:hover:bg-gray-800 py-2 px-4 rounded-full text-sm font-medium transition-colors"
                    >
                      Keep Subscription
                    </button>
                    <button
                      onClick={() => {
                        // Handle cancellation logic here
                        console.log(
                          "Cancelling subscription with reason:",
                          selectedReason
                        );
                        setIsModalOpen(false);
                      }}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full text-sm font-medium transition-colors"
                    >
                      Continue
                    </button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageSubscriptionsPage;
