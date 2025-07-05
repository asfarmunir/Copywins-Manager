"use client";
import React from "react";
import { FiX } from "react-icons/fi";

const EditClientModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = React.useState("personal");
  const [formData, setFormData] = React.useState({
    email: "Example@gmail.com",
    name: "John Doe",
    mobile: "+995 XXX XXX XXX",
    username: "Jeronimo",
    couponCode: "091100",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleUpdate = () => {
    // Handle update logic here
    console.log("Updating client information", formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
      <div className="bg-card rounded-[10px] border border-gray-200 dark:border-gray-700 w-full max-w-lg 2xl:max-w-2xl mx-4 shadow-lg">
        {/* Header */}
        <div className="flex items-center justify-between p-4 2xl:p-6 border-b border-gray-200 dark:border-gray-700">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Edit client information
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              You can edit client information from here.
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
              onClick={() => setActiveTab("personal")}
              className={`px-4 py-2 rounded-full text-sm w-full font-semibold transition-colors ${
                activeTab === "personal"
                  ? "bg-card text-gray-900 dark:text-white"
                  : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              Personal info
            </button>
            <button
              onClick={() => setActiveTab("address")}
              className={`px-4 py-2 rounded-full text-sm w-full font-semibold transition-colors ${
                activeTab === "address"
                  ? "bg-card text-gray-900 dark:text-white"
                  : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              Address
            </button>
          </div>
        </div>

        {/* Content */}
        {activeTab === "personal" ? (
          <div className="px-4 2xl:px-6 pb-4">
            <div className="space-y-6">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="w-full p-3 bg-card-foreground rounded-lg text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Example@gmail.com"
                />
              </div>

              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="w-full p-3 bg-card-foreground rounded-lg text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="John Doe"
                />
              </div>

              {/* Mobile number */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Mobile number
                </label>
                <input
                  type="tel"
                  value={formData.mobile}
                  onChange={(e) => handleInputChange("mobile", e.target.value)}
                  className="w-full p-3 bg-card-foreground rounded-lg text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="+995 XXX XXX XXX"
                />
              </div>

              {/* Username */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Username
                </label>
                <input
                  type="text"
                  value={formData.username}
                  onChange={(e) =>
                    handleInputChange("username", e.target.value)
                  }
                  className="w-full p-3 bg-card-foreground rounded-lg text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Jeronimo"
                />
              </div>

              {/* Coupon code */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Coupon code
                </label>
                <input
                  type="text"
                  value={formData.couponCode}
                  onChange={(e) =>
                    handleInputChange("couponCode", e.target.value)
                  }
                  className="w-full p-3 bg-card-foreground rounded-lg text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="091100"
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="px-4 2xl:px-6 pb-4">
            <div className="space-y-6">
              {/* Address tab content - you can add address fields here */}
              <div className="text-center py-8">
                <p className="text-gray-500 dark:text-gray-400">
                  Address information will be displayed here
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="p-4 2xl:p-6 border-t border-gray-200 dark:border-gray-700">
          <div className="flex space-x-3">
            <button
              onClick={onClose}
              className="flex-1 py-2 px-4 bg-card-foreground text-gray-700 dark:text-gray-300 rounded-full border font-semibold text-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleUpdate}
              className="flex-1 py-2 px-4 bg-primary hover:bg-blue-600 text-white rounded-full font-semibold text-sm transition-colors"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditClientModal;
