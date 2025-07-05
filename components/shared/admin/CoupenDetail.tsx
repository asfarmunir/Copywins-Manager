"use client";
import React from "react";
import { FiX } from "react-icons/fi";

const DiscountDetailsModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
      <div className="bg-card rounded-[10px] border border-gray-200 dark:border-gray-700 w-full max-w-lg 2xl:max-w-2xl mx-4 shadow-lg">
        {/* Header */}
        <div className="flex items-center justify-between p-4 2xl:p-6 border-b border-gray-200 dark:border-gray-700">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              More information on this discount
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

        {/* Content */}
        <div className="px-4 2xl:px-6 pb-4 pt-4">
          <div className="space-y-6">
            {/* Start Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Start Date
              </label>
              <div className="w-full text-sm 3xl:text-base p-3 bg-card-foreground rounded-lg text-gray-900 dark:text-white border">
                Jan 24, 2025
              </div>
            </div>

            {/* End Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                End Date
              </label>
              <div className="w-full text-sm 3xl:text-base p-3 bg-card-foreground rounded-lg text-gray-900 dark:text-white border">
                Feb 24, 2025
              </div>
            </div>

            {/* Order Created */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Order Created
              </label>
              <div className="w-full text-sm 3xl:text-base p-3 bg-card-foreground rounded-lg text-gray-900 dark:text-white border">
                Jan 22, 2025 at 1:30pm EST
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 2xl:p-6 border-t border-gray-200 dark:border-gray-700 flex gap-3">
          <button
            onClick={onClose}
            className="hidden md:block flex-1 py-3 px-2 md:px-4 bg-card-foreground text-gray-700 dark:text-gray-300 rounded-full border font-semibold text-[10px] md:text-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              // Handle pause discount code logic here
              console.log("Pausing discount code");
            }}
            className="flex-1 py-3 px-2 md:px-4 bg-red-100 hover:bg-red-200 dark:bg-red-700/30 text-red-600 dark:text-red-300 rounded-full font-semibold text-[10px] md:text-sm transition-colors"
          >
            Pause Discount Code
          </button>
          <button
            onClick={() => {
              // Handle delete discount code logic here
              console.log("Deleting discount code");
            }}
            className="flex-1 py-3 px-2 md:px-4 bg-red-500 hover:bg-red-600 text-white rounded-full font-semibold text-[10px] md:text-sm transition-colors"
          >
            Delete discount code
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiscountDetailsModal;
