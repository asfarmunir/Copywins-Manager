"use client";
import React, { useState } from "react";
import { ChevronDown, Check, CreditCard, Download } from "lucide-react";

const SubscriptionProfilePage = () => {
  const [activeTab, setActiveTab] = useState("Details");
  const [billingCycle, setBillingCycle] = useState("Monthly");
  const [autoRenewal, setAutoRenewal] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const tabs = ["Details", "Billing", "Notifications"];

  const features = [
    "Real time trading signals",
    "Daily market analysis",
    "Entry, take profit & stop loss levels",
    "Priority support",
  ];

  const billingHistory = [
    { date: "April 15, 2024", amount: "$49.99", status: "Paid" },
    { date: "April 15, 2024", amount: "$49.99", status: "Paid" },
    { date: "April 15, 2024", amount: "$49.99", status: "Paid" },
    { date: "April 15, 2024", amount: "$49.99", status: "Paid" },
    { date: "April 15, 2024", amount: "$49.99", status: "Paid" },
    { date: "April 18, 2024", amount: "$49.99", status: "Paid" },
    { date: "April 15, 2024", amount: "$49.99", status: "Paid" },
  ];

  return (
    <div className=" bg-card min-h-full">
      {/* Breadcrumb */}
      <div className="bg-card border-b border-gray-200 dark:border-gray-700 px-6 py-4">
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
          <span className="hover:text-gray-700 dark:hover:text-gray-300 cursor-pointer">
            My subscriptions
          </span>
          <span className="mx-2">›</span>
          <span className="text-gray-800 dark:text-gray-200">Sub profile</span>
        </div>
      </div>

      <div className="max-w-6xl 3xl:max-w-7xl mx-auto p-3 md:p-6">
        {/* Provider Header */}
        <div className="bg-card-foreground rounded-lg border border-gray-200 dark:border-gray-700 p-2 mb-6">
          <div className="flex items-start flex-col md:flex-row justify-between px-2 md:px-4 pt-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center text-white text-xl font-bold">
                CK
              </div>
              <div>
                <div className="flex items-center gap-4">
                  <h1 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1">
                    CryptoKing
                  </h1>
                  <div className="flex gap-2">
                    <span className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-sm font-medium">
                      Active
                    </span>
                    <span className="bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 px-3 py-1 rounded-full text-sm font-medium">
                      Trading
                    </span>
                  </div>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                  12,453 Followers
                </p>
              </div>
            </div>
            <div className="flex gap-3 w-full md:w-fit">
              <button className="  hover:bg-gray-200 w-full md:w-fit bg-card rounded-full dark:hover:bg-gray-600 px-4 py-2  text-sm font-medium transition-colors">
                View provider
              </button>
              <button className="bg-red-600 w-full md:w-fit hover:bg-red-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
                Cancel Subscription
              </button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-2  pt-6 border-t border-gray-200 dark:border-gray-700">
            <div className="text-center bg-card p-4 rounded-[10px]">
              <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm mb-1">
                Billing
              </p>
              <p className="font-semibold text-xs sm:text-base text-gray-900 dark:text-white">
                $49.99 / Monthly
              </p>
            </div>
            <div className="text-center bg-card p-4 rounded-[10px]">
              <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm mb-1">
                Next Payment
              </p>
              <p className="font-semibold text-xs sm:text-base text-gray-900 dark:text-white">
                May, 15 2024
              </p>
            </div>
            <div className="text-center bg-card p-4 rounded-[10px]">
              <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm mb-1">
                Notifications
              </p>
              <p className="font-semibold text-xs sm:text-base text-gray-900 dark:text-white">
                Email Push
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-card rounded-lg  border-gray-200 dark:border-gray-700">
          {/* Section Header */}
          <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-gray-200 dark:border-gray-700">
            <div className="md:p-6 ">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Subscription Details
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Information about your current subscription plan
              </p>
            </div>
            <div className="flex items-center justify-between mb-4 w-full md:w-fit md:mb-0">
              <div className="flex items-center  space-x-1 bg-card-foreground rounded-full w-full p-1">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 xl:px-9 py-2 rounded-full flex-1 text-sm font-semibold transition ${
                      activeTab === tab
                        ? "bg-card text-foreground shadow-sm"
                        : "text-gray-500 dark:text-gray-300 hover:text-foreground"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === "Details" && (
              <div className="space-y-8">
                {/* Current Plan */}
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      Current Plan
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      Premium monthly
                    </p>
                  </div>
                  <button className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 px-4 py-2 rounded-full text-sm font-medium transition-colors">
                    Change Plan
                  </button>
                </div>

                {/* Billing Cycle */}
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      Billing Cycle
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      Monthly
                    </p>
                  </div>
                  <div className="relative">
                    <select
                      value={billingCycle}
                      onChange={(e) => setBillingCycle(e.target.value)}
                      className="bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-full px-4 py-2 pr-8 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="Monthly">Monthly</option>
                      <option value="Yearly">Yearly</option>
                    </select>
                    <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* Included Features */}
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Included Features
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                    your features
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                          <Check className="w-3 h-3 text-green-600 dark:text-green-400" />
                        </div>
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Auto Renewal */}
                <div className="flex items-center justify-between pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      Auto renewal
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      Your subscription will automatically renew on May 15, 2024
                    </p>
                  </div>
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={autoRenewal}
                      onChange={(e) => setAutoRenewal(e.target.checked)}
                      className="sr-only"
                    />
                    <div
                      onClick={() => setAutoRenewal(!autoRenewal)}
                      className={`w-12 h-6 flex items-center  rounded-full cursor-pointer transition-colors ${
                        autoRenewal
                          ? "bg-blue-600"
                          : "bg-gray-300 dark:bg-gray-600"
                      }`}
                    >
                      <div
                        className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform ${
                          autoRenewal ? "translate-x-6" : "translate-x-0.5"
                        } `}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "Billing" && (
              <div className="space-y-8">
                {/* Payment Method Section */}
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      Payment method
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      Manage your payment details
                    </p>
                  </div>
                  <button className="bg-gray-100 hidden md:block dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 px-4 py-2 rounded-full text-sm font-medium transition-colors">
                    Add new payment method
                  </button>
                </div>

                {/* Payment Method Card */}
                <div className="flex items-center justify-between p-4 bg-card-foreground rounded-lg border border-gray-200 dark:border-gray-600">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-8 bg-white rounded border border-gray-200 flex items-center justify-center">
                      <CreditCard className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">
                        Visa **** 4224
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Expires 05/26
                      </p>
                    </div>
                  </div>
                  <button className="bg-card hover:bg-gray-200 dark:hover:bg-gray-500 px-4 xl:px-8 py-2 rounded-full text-sm font-medium transition-colors">
                    Edit
                  </button>
                </div>

                {/* Billing History Section */}
                <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                        Billing History
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">
                        View your past payments
                      </p>
                    </div>
                  </div>

                  {/* Table Header */}
                  <div className="grid grid-cols-4 gap-4 px-4 py-3 bg-card-foreground rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                    <div className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase text-center tracking-wider">
                      DATE
                    </div>
                    <div className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase text-center tracking-wider">
                      AMOUNT
                    </div>
                    <div className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase text-center tracking-wider">
                      STATUS
                    </div>
                    <div className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase text-center tracking-wider">
                      RECEIPT
                    </div>
                  </div>

                  {/* Table Rows */}
                  <div className="bg-card rounded-b-lg border border-t-0 border-gray-200 dark:border-gray-600">
                    {billingHistory.map((payment, index) => (
                      <div
                        key={index}
                        className={`grid grid-cols-4 gap-4 px-4 py-4 ${
                          index !== billingHistory.length - 1
                            ? "border-b border-gray-100 dark:border-gray-700"
                            : ""
                        }`}
                      >
                        <div className="text-sm text-center text-gray-900 dark:text-white">
                          {payment.date}
                        </div>
                        <div className="text-sm text-center font-medium text-gray-900 dark:text-white">
                          {payment.amount}
                        </div>
                        <div className=" mx-auto">
                          <span className="inline-flex  justify-center items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300">
                            {payment.status}
                          </span>
                        </div>
                        <div className=" mx-auto">
                          <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                            <Download className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "Notifications" && (
              <div className="space-y-8">
                {/* Email Notifications */}
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      Email notifications
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      Receive signal alerts via email
                    </p>
                  </div>
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={emailNotifications}
                      onChange={(e) => setEmailNotifications(e.target.checked)}
                      className="sr-only"
                    />
                    <div
                      onClick={() => setEmailNotifications(!emailNotifications)}
                      className={`w-12 h-6 flex items-center rounded-full cursor-pointer transition-colors ${
                        emailNotifications
                          ? "bg-blue-600"
                          : "bg-gray-300 dark:bg-gray-600"
                      }`}
                    >
                      <div
                        className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform ${
                          emailNotifications
                            ? "translate-x-6"
                            : "translate-x-0.5"
                        }`}
                      />
                    </div>
                  </div>
                </div>

                {/* Push Notifications */}
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      Push notifications
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      Receive signal alerts on your devices
                    </p>
                  </div>
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={pushNotifications}
                      onChange={(e) => setPushNotifications(e.target.checked)}
                      className="sr-only"
                    />
                    <div
                      onClick={() => setPushNotifications(!pushNotifications)}
                      className={`w-12 h-6 flex items-center rounded-full cursor-pointer transition-colors ${
                        pushNotifications
                          ? "bg-blue-600"
                          : "bg-gray-300 dark:bg-gray-600"
                      }`}
                    >
                      <div
                        className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform ${
                          pushNotifications
                            ? "translate-x-6"
                            : "translate-x-0.5"
                        }`}
                      />
                    </div>
                  </div>
                </div>

                {/* SMS Notifications */}
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      SMS notifications
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      Receive urgent signals via text message
                    </p>
                  </div>
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={smsNotifications}
                      onChange={(e) => setSmsNotifications(e.target.checked)}
                      className="sr-only"
                    />
                    <div
                      onClick={() => setSmsNotifications(!smsNotifications)}
                      className={`w-12 h-6 flex items-center rounded-full cursor-pointer transition-colors ${
                        smsNotifications
                          ? "bg-blue-600"
                          : "bg-gray-300 dark:bg-gray-600"
                      }`}
                    >
                      <div
                        className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform ${
                          smsNotifications ? "translate-x-6" : "translate-x-0.5"
                        }`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionProfilePage;
