"use client";
import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import Image from "next/image";

const UserManagement = () => {
  const [profileData, setProfileData] = useState({
    fullName: "John Doe",
    lastName: "Bianco",
    username: "Jeronimo",
    email: "George.Proppicks@gmail.com",
    phoneNumber: "+995 XXX XXX XXX",
    address: "Brooklyn Avenue 179",
    country: "USA",
    city: "New York",
    state: "NY",
    zipCode: "01440",
  });

  const [profileImage, setProfileImage] = useState("");

  const handleInputChange = (field: string, value: string) => {
    setProfileData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleImageUpload = () => {
    // Handle image upload logic
    console.log("Upload image");
  };

  const handleSetNewPassword = () => {
    // Handle set new password logic
    console.log("Set new password");
  };

  const handleEnable2FA = () => {
    // Handle enable 2FA logic
    console.log("Enable 2FA");
  };

  const handleUpdateProfile = () => {
    // Handle update profile logic
    console.log("Update profile:", profileData);
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
            User management
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-8 bg-card-foreground p-4 2xl:p-6 rounded-[8px] border border-gray-200 dark:border-gray-700">
        {/* Customize Profile Section */}
        <div>
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
              Customize your profile
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              You can see all your information from here.
            </p>
          </div>

          {/* Profile Image Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between gap-4">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                GC
              </div>
              <button
                onClick={handleImageUpload}
                className="bg-card border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white px-4 py-3 rounded-[8px] text-sm font-semibold transition"
              >
                Upload Image
              </button>
            </div>
          </div>

          {/* Form Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                Full name
              </label>
              <input
                type="text"
                value={profileData.fullName}
                onChange={(e) => handleInputChange("fullName", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-[8px] bg-card text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm"
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                Last name
              </label>
              <input
                type="text"
                value={profileData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-[8px] bg-card text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm"
              />
            </div>

            {/* Username */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                Username
              </label>
              <input
                type="text"
                value={profileData.username}
                onChange={(e) => handleInputChange("username", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-[8px] bg-card text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm"
              />
            </div>

            {/* Enter Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                Enter Email
              </label>
              <input
                type="email"
                value={profileData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-[8px] bg-card text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                Phone number
              </label>
              <input
                type="tel"
                value={profileData.phoneNumber}
                onChange={(e) =>
                  handleInputChange("phoneNumber", e.target.value)
                }
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-[8px] bg-card text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm"
              />
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                Address
              </label>
              <input
                type="text"
                value={profileData.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-[8px] bg-card text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm"
              />
            </div>

            {/* Country */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                Country
              </label>
              <div className="relative">
                <select
                  value={profileData.country}
                  onChange={(e) => handleInputChange("country", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-card text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm appearance-none"
                >
                  <option value="USA">USA</option>
                  <option value="Canada">Canada</option>
                  <option value="UK">UK</option>
                  <option value="Germany">Germany</option>
                  <option value="France">France</option>
                </select>
                <FiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
              </div>
            </div>

            {/* City */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                City
              </label>
              <div className="relative">
                <select
                  value={profileData.city}
                  onChange={(e) => handleInputChange("city", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-card text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm appearance-none"
                >
                  <option value="New York">New York</option>
                  <option value="Los Angeles">Los Angeles</option>
                  <option value="Chicago">Chicago</option>
                  <option value="Houston">Houston</option>
                  <option value="Phoenix">Phoenix</option>
                </select>
                <FiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
              </div>
            </div>

            {/* State */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                State
              </label>
              <input
                type="text"
                value={profileData.state}
                onChange={(e) => handleInputChange("state", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-[8px] bg-card text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm"
              />
            </div>

            {/* Zip Code */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                Zip code
              </label>
              <input
                type="text"
                value={profileData.zipCode}
                onChange={(e) => handleInputChange("zipCode", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-[8px] bg-card text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm"
              />
            </div>
          </div>
        </div>

        {/* Security Section */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-primary">Security</h3>

          {/* Change Password */}
          <div className="flex items-start sm:items-center gap-3 flex-col sm:flex-row justify-between p-4 bg-card rounded-lg border border-gray-200 dark:border-gray-700">
            <div>
              <h4 className="text-base font-semibold text-primary">Security</h4>

              <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                Change your password
              </h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                You can change your password here
              </p>
            </div>
            <button
              onClick={handleSetNewPassword}
              className="bg-primary hover:bg-blue-700 w-full sm:w-fit text-white px-4 py-2 rounded-full text-sm font-semibold transition"
            >
              Set a new password
            </button>
          </div>

          {/* Enable 2FA */}
          <div className="flex items-start sm:items-center gap-3 flex-col sm:flex-row justify-between p-4 bg-card rounded-lg border border-gray-200 dark:border-gray-700">
            <div>
              <h4 className="text-base font-semibold text-primary">
                Enable 2FA
              </h4>
              <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                Secure your account with 2FA
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Make sure to have google authenticator setup.
              </p>
            </div>
            <button
              onClick={handleEnable2FA}
              className="bg-primary hover:bg-blue-700 w-full sm:w-fit text-white px-4 py-2 rounded-full text-sm font-semibold transition"
            >
              Enable 2FA
            </button>
          </div>
        </div>

        {/* Update Profile Button */}
        <div className="flex justify-end pt-4">
          <button
            onClick={handleUpdateProfile}
            className="bg-primary hover:bg-blue-700 text-white px-8 py-3 rounded-full text-sm font-semibold transition"
          >
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
