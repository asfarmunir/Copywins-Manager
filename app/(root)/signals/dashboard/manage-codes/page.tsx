"use client";
import React, { useState } from "react";
import {
  Search,
  MoreHorizontal,
  ChevronDown,
  ChevronLeft,
  Download,
  X,
  Calendar,
} from "lucide-react";

const DiscountCodes = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("Newer first");
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [discountType, setDiscountType] = useState("percentage");

  const [formData, setFormData] = useState({
    startDate: "Jan 24, 2025",
    endDate: "Jan 24, 2025",
    discountName: "",
    percentage: "",
    dollarAmount: "",
    maxTimesAllowed: "",
    maxAmountAllowed: "",
  });

  const handleInputChange = (field: any, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleCreateDiscount = () => {
    // Handle discount creation logic here
    console.log("Creating discount with data:", formData);
    setShowCreateModal(false);
  };

  // Mock data for discount codes
  const discountCodes = [
    {
      code: "Launch",
      description: "30% OFF, One Time Use",
      type: "Percentage",
      amount: "30%",
      usageLimit: "Unlimited",
      ordersCreated: 30,
      validation: 150,
    },
    {
      code: "Launch",
      description: "30% OFF, One Time Use",
      type: "Percentage",
      amount: "30%",
      usageLimit: "Unlimited",
      ordersCreated: 30,
      validation: 150,
    },
    {
      code: "Launch",
      description: "30% OFF, One Time Use",
      type: "Percentage",
      amount: "30%",
      usageLimit: "Unlimited",
      ordersCreated: 30,
      validation: 150,
    },
    {
      code: "Launch",
      description: "30% OFF, One Time Use",
      type: "Percentage",
      amount: "30%",
      usageLimit: "Unlimited",
      ordersCreated: 30,
      validation: 150,
    },
    {
      code: "Launch",
      description: "30% OFF, One Time Use",
      type: "Percentage",
      amount: "30%",
      usageLimit: "Unlimited",
      ordersCreated: 30,
      validation: 150,
    },
    {
      code: "Launch",
      description: "30% OFF, One Time Use",
      type: "Percentage",
      amount: "30%",
      usageLimit: "Unlimited",
      ordersCreated: 30,
      validation: 150,
    },
    {
      code: "Launch",
      description: "30% OFF, One Time Use",
      type: "Percentage",
      amount: "30%",
      usageLimit: "Unlimited",
      ordersCreated: 30,
      validation: 150,
    },
  ];

  return (
    <div className="w-full bg-card rounded-lg h-full border border-gray-200 dark:border-gray-700 flex flex-col gap-4 lg:gap-6 p-3 lg:p-4 xl:p-5">
      {/* Breadcrumb */}
      <div className="flex items-center border-b border-gray-200 dark:border-gray-700 pb-4 text-sm">
        <a
          href="#"
          className="hover:text-gray-900 dark:hover:text-gray-100 flex font-semibold items-center cursor-pointer text-gray-500 dark:text-gray-400"
        >
          Signal Provider
        </a>
        <span className="mx-2 text-gray-500 dark:text-gray-400">/</span>
        <span className="text-gray-900 dark:text-gray-100 text-base font-medium">
          Discount codes
        </span>
        <div className="ml-auto">
          <button className="px-4 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-md text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700">
            Withdraw money
          </button>
        </div>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between xl:px-12">
        <div>
          <h1 className="text-lg lg:text-xl font-semibold text-gray-900 dark:text-gray-100">
            Discount codes
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
            You can see your discount codes from here.
          </p>
        </div>
        <button
          onClick={() => setShowCreateModal(true)}
          className="px-4 py-2 bg-primary text-white rounded-full text-sm font-semibold hover:bg-blue-700"
        >
          Create a discount
        </button>
      </div>

      {/* Search and Filters */}
      <div className="bg-card-foreground p-3 md:p-6 rounded-[10px] w-full max-w-7xl mx-auto">
        <div className="flex items-center justify-between gap-4 ">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search signals"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 md:py-3 border border-gray-200 dark:border-gray-600 rounded-full bg-white dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
            />
          </div>

          <div className="flex items-center gap-3">
            <div className="text-sm  bg-card p-2 xl:px-5 rounded-full text-gray-600 dark:text-gray-400">
              Total codes:{" "}
              <span className="font-medium text-gray-900 dark:text-gray-100">
                12
              </span>
            </div>

            <button className="flex  bg-card p-2 xl:px-5 rounded-full items-center gap-2 px-3 py-2 border border-gray-200 dark:border-gray-600 text-sm hover:bg-gray-50 dark:hover:bg-gray-800">
              <Download className="w-4 h-4" />
              Export
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="bg-card-foreground rounded-xl border border-gray-200 dark:border-gray-600 p-1  mt-4 xl:mt-6">
          <div className="bg-card rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-gray-500 dark:text-gray-400 font-medium text-xs uppercase tracking-wider py-4 px-6 text-left">
                      CODE
                    </th>
                    <th className="text-gray-500 dark:text-gray-400 font-medium text-xs uppercase tracking-wider py-4 px-6 text-left">
                      DESCRIPTION
                    </th>
                    <th className="text-gray-500 dark:text-gray-400 font-medium text-xs uppercase tracking-wider py-4 px-6 text-left">
                      TYPE
                    </th>
                    <th className="text-gray-500 dark:text-gray-400 font-medium text-xs uppercase tracking-wider py-4 px-6 text-left">
                      AMOUNT
                    </th>
                    <th className="text-gray-500 dark:text-gray-400 font-medium text-xs uppercase tracking-wider py-4 px-6 text-left">
                      USAGE LIMIT
                    </th>
                    <th className="text-gray-500 dark:text-gray-400 font-medium text-xs uppercase tracking-wider py-4 px-6 text-left">
                      ORDERS CREATED
                    </th>
                    <th className="text-gray-500 dark:text-gray-400 font-medium text-xs uppercase tracking-wider py-4 px-6 text-left">
                      VALIDATION
                    </th>
                    <th className="text-gray-500 dark:text-gray-400 font-medium text-xs uppercase tracking-wider py-4 px-6 text-left">
                      ACTION
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {discountCodes.map((discount, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50/50 dark:hover:bg-gray-800/50"
                    >
                      <td className="py-4 px-6 text-sm font-medium text-gray-900 dark:text-gray-100">
                        {discount.code}
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-600 dark:text-gray-400">
                        {discount.description}
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-900 dark:text-gray-100">
                        {discount.type}
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-900 dark:text-gray-100">
                        {discount.amount}
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-900 dark:text-gray-100">
                        {discount.usageLimit}
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-900 dark:text-gray-100">
                        {discount.ordersCreated}
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-900 dark:text-gray-100">
                        {discount.validation}
                      </td>
                      <td className="py-4 px-6">
                        <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors">
                          <MoreHorizontal className="w-4 h-4 text-gray-500" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-card rounded-xl shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center bg-card-foreground justify-between p-6 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                Create a new discount code
              </h2>
              <button
                onClick={() => setShowCreateModal(false)}
                className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6">
              {/* Date Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Start Date
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={formData.startDate}
                      onChange={(e) =>
                        handleInputChange("startDate", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-card-foreground text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Jan 24, 2025"
                    />
                    <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    End date
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={formData.endDate}
                      onChange={(e) =>
                        handleInputChange("endDate", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-card-foreground text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Jan 24, 2025"
                    />
                    <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  </div>
                </div>
              </div>

              {/* Discount Order Created */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Discount Order Created
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={formData.discountName}
                    onChange={(e) =>
                      handleInputChange("discountName", e.target.value)
                    }
                    className="w-full px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-card-foreground text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter Discount Name"
                  />
                  <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
              </div>

              {/* Discount Type Toggle */}
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Percentage (%)
                  </label>
                  {/* <div className="flex items-center">
                    <button
                      onClick={() =>
                        setDiscountType(
                          discountType === "percentage"
                            ? "dollar"
                            : "percentage"
                        )
                      }
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        discountType === "percentage"
                          ? "bg-blue-600"
                          : "bg-gray-200 dark:bg-gray-700"
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
                  </div> */}
                </div>
                <input
                  type="text"
                  value={formData.percentage}
                  onChange={(e) =>
                    handleInputChange("percentage", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-md bg-card-foreground text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter amount"
                />
              </div>

              {/* Set Dollar Amount */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Set Dollar amount
                </label>
                <input
                  type="text"
                  value={formData.dollarAmount}
                  onChange={(e) =>
                    handleInputChange("dollarAmount", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-md bg-card-foreground text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter amount"
                />
              </div>

              {/* Max amount of times allowed */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Max amount of times allowed
                </label>
                <input
                  type="text"
                  value={formData.maxTimesAllowed}
                  onChange={(e) =>
                    handleInputChange("maxTimesAllowed", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-md bg-card-foreground text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter amount"
                />
              </div>

              {/* Max amount of times allowed (second field) */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Max amount of times allowed
                </label>
                <input
                  type="text"
                  value={formData.maxAmountAllowed}
                  onChange={(e) =>
                    handleInputChange("maxAmountAllowed", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-md bg-card-foreground text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter Amount"
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-end gap-3 p-6 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={() => setShowCreateModal(false)}
                className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full text-xs 2xl:text-sm font-medium"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateDiscount}
                className="px-4 py-2 bg-primary text-white rounded-full font-semibold text-xs 2xl:text-sm hover:bg-blue-700"
              >
                Create Discount code
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DiscountCodes;
