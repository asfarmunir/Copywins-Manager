"use client";
import React, { useState } from "react";
import { FiX } from "react-icons/fi";

interface CreateDiscountModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateDiscountModal: React.FC<CreateDiscountModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    startDate: "48",
    endDate: "$12,400",
    percentage: "",
    dollarAmount: "",
    usagePerClient: "",
  });

  const [discountType, setDiscountType] = useState<"percentage" | "dollar">(
    "percentage"
  );

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleCreate = () => {
    // Handle form submission logic here
    console.log("Creating discount code:", formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white dark:bg-gray-800 rounded-[8px] p-6 w-full max-w-lg mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex border-b pb-5 items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Create a new discount code
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
              You can create a new discount code from here.
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 p-1"
          >
            <FiX className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <div className="space-y-4">
          {/* Start date */}
          <div>
            <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
              Start date
            </label>
            <input
              type="text"
              value={formData.startDate}
              onChange={(e) => handleInputChange("startDate", e.target.value)}
              className="w-full px-4 py-2.5 bg-gray-100 dark:bg-gray-700 border rounded-[8px] text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white dark:focus:bg-gray-600"
            />
          </div>

          {/* End date */}
          <div>
            <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
              End date
            </label>
            <input
              type="text"
              value={formData.endDate}
              onChange={(e) => handleInputChange("endDate", e.target.value)}
              className="w-full px-4 py-2.5 bg-gray-100 dark:bg-gray-700 border rounded-[8px] text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white dark:focus:bg-gray-600"
            />
          </div>

          {/* Discount type toggle */}
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              Percentage (%)
            </span>
            <div className="flex items-center">
              <button
                onClick={() =>
                  setDiscountType(
                    discountType === "percentage" ? "dollar" : "percentage"
                  )
                }
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  discountType === "percentage"
                    ? "bg-primary"
                    : "bg-gray-200 dark:bg-gray-600"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    discountType === "percentage"
                      ? "translate-x-6"
                      : "translate-x-1"
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Percentage input */}
          {discountType === "percentage" && (
            <div>
              <input
                type="text"
                placeholder="Enter percentage"
                value={formData.percentage}
                onChange={(e) =>
                  handleInputChange("percentage", e.target.value)
                }
                className="w-full px-4 py-2.5 bg-gray-100 dark:bg-gray-700 border rounded-[8px] text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white dark:focus:bg-gray-600"
              />
            </div>
          )}

          {/* Set Dollar amount */}
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              Set Dollar amount
            </span>
            <div className="flex items-center">
              <button
                onClick={() =>
                  setDiscountType(
                    discountType === "dollar" ? "percentage" : "dollar"
                  )
                }
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  discountType === "dollar"
                    ? "bg-primary"
                    : "bg-gray-200 dark:bg-gray-600"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    discountType === "dollar"
                      ? "translate-x-6"
                      : "translate-x-1"
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Dollar amount input */}
          {discountType === "dollar" && (
            <div>
              <input
                type="text"
                placeholder="Enter amount"
                value={formData.dollarAmount}
                onChange={(e) =>
                  handleInputChange("dollarAmount", e.target.value)
                }
                className="w-full px-4 py-2.5 bg-gray-100 dark:bg-gray-700 border rounded-[8px] text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white dark:focus:bg-gray-600"
              />
            </div>
          )}

          {/* Usage per client */}
          <div>
            <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
              Usage per client
            </label>
            <input
              type="text"
              placeholder="Enter usage"
              value={formData.usagePerClient}
              onChange={(e) =>
                handleInputChange("usagePerClient", e.target.value)
              }
              className="w-full px-4 py-2.5 bg-gray-100 dark:bg-gray-700 border rounded-[8px] text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white dark:focus:bg-gray-600"
            />
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex items-center border-t pt-4 gap-3 mt-8">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full font-semibold text-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition"
          >
            Cancel
          </button>
          <button
            onClick={handleCreate}
            className="flex-1 px-4 py-2 bg-primary text-white rounded-full font-semibold text-sm hover:bg-primary/90 transition"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateDiscountModal;
