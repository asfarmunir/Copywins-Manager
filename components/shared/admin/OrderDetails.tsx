"use client";
import React from "react";
import { FiTrash2, FiX } from "react-icons/fi";

const OrderDetailsModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = React.useState("details");
  // Sample affiliate data
  const affiliateData = {
    name: "John Smith",
    email: "john.smith@example.com",
    totalShare: "25%",
    shareAmount: "$36.13",
  };

  const handleRemoveAffiliate = () => {
    // Handle remove affiliate logic here
    console.log("Removing affiliate from order");
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
      <div className="bg-card rounded-[10px] border border-gray-200 dark:border-gray-700 w-full max-w-lg 2xl:max-w-2xl mx-4 shadow-lg">
        {/* Header */}
        <div className="flex items-center justify-between p-4 2xl:p-6 border-b border-gray-200 dark:border-gray-700">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              More information on this order
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              You can see more info from here
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            <FiX className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="px-4 2xl:px-6 pt-4">
          <div className="flex items-center space-x-1 bg-card-foreground rounded-full p-1 mb-6">
            <button
              onClick={() => setActiveTab("details")}
              className={`px-4 py-2 rounded-full text-sm w-full font-semibold transition-colors ${
                activeTab === "details"
                  ? "bg-card text-gray-900 dark:text-white"
                  : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              Order Details
            </button>
            <button
              onClick={() => setActiveTab("history")}
              className={`px-4 py-2 rounded-full text-sm w-full font-semibold transition-colors ${
                activeTab === "history"
                  ? "bg-card text-gray-900 dark:text-white"
                  : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              Linked Affiliate
            </button>
          </div>
        </div>

        {/* Content */}
        {activeTab === "details" ? (
          <div className="px-4 2xl:px-6 pb-4">
            <div className="space-y-6">
              {/* Clients Total Orders */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Clients Total Orders
                </label>
                <div className="w-full p-3 bg-card-foreground rounded-lg text-gray-900 dark:text-white border">
                  48
                </div>
              </div>

              {/* Clients Active Subscriptions */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Clients Active Subscriptions
                </label>
                <div className="w-full p-3 bg-card-foreground rounded-lg text-gray-900 dark:text-white border">
                  4
                </div>
              </div>

              {/* Total Client Spend */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Total Client Spend
                </label>
                <div className="w-full p-3 bg-card-foreground rounded-lg text-gray-900 dark:text-white border">
                  $12,400
                </div>
              </div>

              {/* Discount Used */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Discount Used (%)
                </label>
                <div className="w-full p-3 bg-card-foreground rounded-lg text-gray-900 dark:text-white border">
                  Hawaiii13
                </div>
              </div>

              {/* Order Created */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Order Created
                </label>
                <div className="w-full p-3 bg-card-foreground rounded-lg text-gray-900 dark:text-white border">
                  Sept 14, 2025 at 1:30pm EST
                </div>
              </div>

              {/* Order Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Order Type
                </label>
                <div className="w-full p-3 bg-card-foreground rounded-lg text-gray-900 dark:text-white border">
                  Subscription
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6 px-4 2xl:px-6 pb-4">
            {/* Linked Affiliate Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Linked Affiliate
              </label>
              <div className="w-full p-3 bg-card-foreground rounded-lg border text-gray-900 dark:text-white">
                {affiliateData.name}
              </div>
            </div>

            {/* Affiliate Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Affiliate Email
              </label>
              <div className="w-full p-3 bg-card-foreground rounded-lg border text-gray-900 dark:text-white">
                {affiliateData.email}
              </div>
            </div>

            {/* Total Share Percentage */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Total Share (%)
              </label>
              <div className="w-full p-3 bg-card-foreground rounded-lg border text-gray-900 dark:text-white">
                {affiliateData.totalShare}
              </div>
            </div>

            {/* Share Amount */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Share Amount
              </label>
              <div className="w-full p-3 bg-card-foreground rounded-lg border text-gray-900 dark:text-white">
                {affiliateData.shareAmount}
              </div>
            </div>

            {/* Remove Affiliate Button */}
            <div className="pt-4">
              <button
                onClick={handleRemoveAffiliate}
                className="w-full flex items-center justify-center space-x-2 py-3 px-4 bg-red-500 hover:bg-red-600 text-white rounded-full font-semibold transition-colors"
              >
                <FiTrash2 className="w-4 h-4" />
                <span>Remove Affiliate from Order</span>
              </button>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="p-4 2xl:p-6 border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={onClose}
            className="w-full py-3 px-4 bg-card-foreground text-gray-700 dark:text-gray-300 rounded-full border font-semibold text-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsModal;
