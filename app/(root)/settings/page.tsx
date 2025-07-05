"use client";
import React, { useState } from "react";
import { FiUser, FiBell, FiShield, FiCamera, FiUpload } from "react-icons/fi";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("Profile");
  const [profileData, setProfileData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    bio: "Crypto enthusiast and experienced trader",
    coverImage: null,
    profileImage: null,
  });

  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    pushNotifications: true,
    smsNotifications: true,
    browserNotifications: true,
    marketingEmails: true,
    securityAlerts: true,
    productUpdates: true,
    newsletterFrequency: "Daily",
  });

  const [securitySettings, setSecuritySettings] = useState({
    twoFactorAuth: false,
    loginNotifications: true,
    sessionTimeout: "30 minutes",
  });

  const sidebarTabs = [
    { id: "Profile", label: "Profile", icon: FiUser },
    { id: "Notifications", label: "Notifications", icon: FiBell },
    { id: "Security", label: "Security", icon: FiShield },
  ];

  const handleImageUpload = (type, event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileData((prev) => ({
          ...prev,
          [type]: e.target.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNotificationToggle = (setting) => {
    setNotificationSettings((prev) => ({
      ...prev,
      [setting]: !prev[setting],
    }));
  };

  const handleSecurityToggle = (setting) => {
    setSecuritySettings((prev) => ({
      ...prev,
      [setting]: !prev[setting],
    }));
  };

  const renderProfileTab = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg 2xl:text-xl font-semibold mb-2">
          Profile Information
        </h2>
        <p className="text-gray-500 text-sm mb-6">
          Update your account details and preferences
        </p>
      </div>

      {/* Cover Image Section */}
      <div className="space-y-4">
        <h3 className="font-medium">Cover Image</h3>
        <div className="relative">
          <div className="w-full h-32 bg-card-foreground rounded-lg overflow-hidden relative">
            {profileData.coverImage ? (
              <img
                src={profileData.coverImage}
                alt="Cover"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                <FiCamera size={24} />
              </div>
            )}
            <label className="absolute top-2 right-2 bg-card hover:bg-card-foreground p-2 rounded-full cursor-pointer transition-colors">
              <FiUpload size={16} />
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageUpload("coverImage", e)}
                className="hidden"
              />
            </label>
          </div>
        </div>
      </div>

      {/* Profile Image Section */}
      <div className="space-y-4">
        <h3 className="font-medium">Profile Picture</h3>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="w-16 h-16 bg-card-foreground rounded-full overflow-hidden flex items-center justify-center">
              {profileData.profileImage ? (
                <img
                  src={profileData.profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <FiUser size={24} className="text-gray-400" />
              )}
            </div>
            <label className="absolute -bottom-1 -right-1 bg-card hover:bg-card-foreground p-1.5 rounded-full cursor-pointer transition-colors border-2 border-card">
              <FiCamera size={12} />
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageUpload("profileImage", e)}
                className="hidden"
              />
            </label>
          </div>
          <div>
            <p className="text-sm font-medium">Upload a new profile picture</p>
            <p className="text-xs text-gray-500">JPG, PNG or GIF (max 5MB)</p>
          </div>
        </div>
      </div>

      {/* Form Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">First Name</label>
          <input
            type="text"
            value={profileData.firstName}
            onChange={(e) =>
              setProfileData((prev) => ({ ...prev, firstName: e.target.value }))
            }
            className="w-full p-3 bg-card-foreground border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none text-xs 2xl:text-sm focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Last Name</label>
          <input
            type="text"
            value={profileData.lastName}
            onChange={(e) =>
              setProfileData((prev) => ({ ...prev, lastName: e.target.value }))
            }
            className="w-full p-3 bg-card-foreground border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none text-xs 2xl:text-sm focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Email Address</label>
        <input
          type="email"
          value={profileData.email}
          onChange={(e) =>
            setProfileData((prev) => ({ ...prev, email: e.target.value }))
          }
          className="w-full p-3 bg-card-foreground border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none text-xs 2xl:text-sm focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Phone Number</label>
        <input
          type="tel"
          value={profileData.phone}
          onChange={(e) =>
            setProfileData((prev) => ({ ...prev, phone: e.target.value }))
          }
          className="w-full p-3 bg-card-foreground border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none text-xs 2xl:text-sm focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Bio</label>
        <textarea
          value={profileData.bio}
          onChange={(e) =>
            setProfileData((prev) => ({ ...prev, bio: e.target.value }))
          }
          rows={4}
          className="w-full p-3 bg-card-foreground border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none text-xs 2xl:text-sm focus:ring-2 focus:ring-blue-500 resize-none"
          placeholder="Tell us about yourself..."
        />
      </div>

      <div className="flex justify-end">
        <button className="bg-primary hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold transition-colors">
          Update Profile
        </button>
      </div>
    </div>
  );

  const renderNotificationsTab = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg 2xl:text-xl font-semibold mb-2">
          Notification Preferences
        </h2>
        <p className="text-gray-500 text-sm mb-6">
          Configure how and when you want to be notified
        </p>
      </div>

      {/* Notification Methods */}
      <div className="space-y-4">
        <h3 className="font-medium">Notification Methods</h3>
        <div className="space-y-4">
          {[
            {
              key: "emailNotifications",
              label: "Email notifications",
              desc: "Receive signal alerts via email",
            },
            {
              key: "pushNotifications",
              label: "Push notifications",
              desc: "Receive signal alerts on your devices",
            },
            {
              key: "smsNotifications",
              label: "SMS notifications",
              desc: "Receive urgent signals via text message",
            },
            {
              key: "browserNotifications",
              label: "Browser notifications",
              desc: "Receive notifications in your browser",
            },
          ].map((item) => (
            <div
              key={item.key}
              className="flex items-center justify-between p-4 bg-card-foreground rounded-lg"
            >
              <div>
                <p className="font-medium text-sm">{item.label}</p>
                <p className="text-gray-500 text-xs">{item.desc}</p>
              </div>
              <button
                onClick={() => handleNotificationToggle(item.key)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  notificationSettings[item.key] ? "bg-primary" : "bg-gray-300"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    notificationSettings[item.key]
                      ? "translate-x-6"
                      : "translate-x-1"
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Notification Types */}
      <div className="space-y-4">
        <h3 className="font-medium">Notification Types</h3>
        <div className="space-y-4">
          {[
            {
              key: "marketingEmails",
              label: "Marketing Emails",
              desc: "Receive emails about new products, features, and more.",
            },
            {
              key: "securityAlerts",
              label: "Security Alerts",
              desc: "Receive notifications about security issues and alerts.",
            },
            {
              key: "productUpdates",
              label: "Product Updates",
              desc: "Receive notifications about product updates and changes.",
            },
          ].map((item) => (
            <div
              key={item.key}
              className="flex items-center justify-between p-4 bg-card-foreground rounded-lg"
            >
              <div>
                <p className="font-medium text-sm">{item.label}</p>
                <p className="text-gray-500 text-xs hidden md:block">
                  {item.desc}
                </p>
              </div>
              <button
                onClick={() => handleNotificationToggle(item.key)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  notificationSettings[item.key] ? "bg-primary" : "bg-gray-300"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    notificationSettings[item.key]
                      ? "translate-x-6"
                      : "translate-x-1"
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Frequency */}
      <div className="space-y-4">
        <h3 className="font-medium">Newsletter Frequency</h3>
        <div className="space-y-2">
          {["Daily", "Weekly", "Monthly", "Never"].map((frequency) => (
            <label
              key={frequency}
              className="flex items-center space-x-3 p-3 bg-card-foreground rounded-lg cursor-pointer hover:bg-opacity-80"
            >
              <input
                type="radio"
                name="newsletter"
                value={frequency}
                checked={notificationSettings.newsletterFrequency === frequency}
                onChange={(e) =>
                  setNotificationSettings((prev) => ({
                    ...prev,
                    newsletterFrequency: e.target.value,
                  }))
                }
                className="w-4 h-4 text-primary"
              />
              <span className="text-sm">{frequency}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="flex justify-end">
        <button className="bg-primary hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
          Save Preferences
        </button>
      </div>
    </div>
  );
  const renderSecurityTab = () => (
    <div className="space-y-6">
      {/* Change Password Section */}
      <div className="space-y-4">
        <div>
          <h2 className="text-lg 2xl:text-xl font-semibold mb-2">
            Change Password
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Update your password to keep your account secure.
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Current Password
          </label>
          <div className="relative">
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 bg-card-foreground border border-gray-200 dark:border-gray-700 xl:px-4 text-xs 2xl:text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">New password</label>
          <div className="relative">
            <input
              type="password"
              placeholder="Enter your new password"
              className="w-full p-3 bg-card-foreground border border-gray-200 dark:border-gray-700 xl:px-4 text-xs 2xl:text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Confirm password
          </label>
          <div className="relative">
            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full p-3 bg-card-foreground border border-gray-200 dark:border-gray-700 xl:px-4 text-xs 2xl:text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex justify-end">
          <button className="bg-primary hover:bg-blue-700 text-white px-6 py-2.5 capitalize  rounded-full text-sm 3xl:text-base font-semibold transition-colors">
            Update password
          </button>
        </div>
      </div>

      {/* Security Settings Section */}
      <div className="space-y-4">
        <div>
          <h2 className="text-lg 2xl:text-xl font-semibold mb-2">
            Security Settings
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Manage your security preferences to keep your account safe.
          </p>
        </div>

        {/* Two-Factor Authentication */}
        <div className="flex bg-card-foreground items-center justify-between p-4 rounded-[10px]">
          <div className="">
            <h3 className="font-semibold text-sm">Two-Factor Authentication</h3>
            <p className="text-gray-500 text-sm hidden md:block">
              Add an extra layer of security to your account by requiring a
              verification code in addition to your password.
            </p>
          </div>
          <button
            onClick={() => handleSecurityToggle("twoFactorAuth")}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              securitySettings.twoFactorAuth ? "bg-primary" : "bg-gray-300"
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                securitySettings.twoFactorAuth
                  ? "translate-x-6"
                  : "translate-x-1"
              }`}
            />
          </button>
        </div>

        {/* Login Alerts */}
        <div className="flex bg-card-foreground items-center justify-between p-4 rounded-[10px]">
          <div className="">
            <h3 className="font-semibold text-sm">Login Alerts</h3>
            <p className="text-gray-500 text-sm hidden md:block">
              Receive alerts when someone logs into your account from a new
              device or location.
            </p>
          </div>
          <button
            onClick={() => handleSecurityToggle("loginNotifications")}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              securitySettings.loginNotifications ? "bg-primary" : "bg-gray-300"
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                securitySettings.loginNotifications
                  ? "translate-x-6"
                  : "translate-x-1"
              }`}
            />
          </button>
        </div>

        {/* Session Timeout */}
        <div className="flex bg-card-foreground items-center justify-between p-4 rounded-[10px]">
          <div className="">
            <h3 className="font-semibold text-sm">Session Timeout</h3>
            <p className="text-gray-500 text-sm hidden md:block">
              Automatically log out after a period of inactivity for enhanced
              security.
            </p>
          </div>
          <button
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors bg-primary`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6`}
            />
          </button>
        </div>

        <div className="flex justify-end">
          <button className="bg-primary hover:bg-blue-700 text-white px-6 py-2.5 capitalize  rounded-full text-sm 3xl:text-base font-semibold transition-colors">
            Save security settings
          </button>
        </div>
      </div>

      {/* Recent Security Activity Section */}
      <div className="space-y-4">
        <div>
          <h2 className="text-lg 2xl:text-xl font-semibold mb-2">
            Recent Security Activity
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            manage your security activity
          </p>
        </div>

        {/* Password Changed */}
        <div className="flex bg-card-foreground items-center justify-between p-4 rounded-[10px]">
          <div className="">
            <h3 className="font-semibold text-sm">Password Changed</h3>
            <p className="text-gray-500 text-sm">
              Your password was changed on April 12, 2025
            </p>
          </div>
          <span className="text-sm text-gray-500">New York, USA</span>
        </div>

        {/* New Login */}
        <div className="flex bg-card-foreground items-center justify-between p-4 rounded-[10px]">
          <div className="">
            <h3 className="font-semibold text-sm">New Login</h3>
            <p className="text-gray-500 text-sm">
              New login from Chrome on Windows on April 10, 2025
            </p>
          </div>
          <span className="text-sm text-gray-500">San Francisco, USA</span>
        </div>

        <div className="flex justify-end">
          <button className="bg-primary hover:bg-blue-700 text-white px-6 py-2.5 capitalize  rounded-full text-sm 3xl:text-base font-semibold transition-colors">
            Save security settings
          </button>
        </div>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case "Profile":
        return renderProfileTab();
      case "Notifications":
        return renderNotificationsTab();
      case "Security":
        return renderSecurityTab();
      default:
        return renderProfileTab();
    }
  };

  return (
    <div className="w-full bg-card  rounded-[10px] border flex flex-col gap-2 2xl:gap-4 p-3 2xl:p-4 3xl:p-5">
      {/* Header */}
      <div className="w-full flex items-center justify-between border-b border-[#E3E3E4] dark:border-[#0F2430] pb-4">
        <h1 className="text-lg 2xl:text-xl font-semibold">Settings</h1>
      </div>
      <div className="w-full bg-card flex flex-col lg:flex-row gap-0 min-h-[600px]">
        {/* Sidebar */}
        <div className="w-full lg:w-64 xl:w-80 bg-card-foreground rounded-[10px] p-2 lg:mr-2 mb-4 lg:mb-0">
          <div className="space-y-1">
            {sidebarTabs.map((tab) => {
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center space-x-3 px-3 py-3 rounded-[8px] text-left transition-colors ${
                    activeTab === tab.id
                      ? "bg-card text-foreground shadow-sm"
                      : "text-gray-600 dark:text-slate-300 hover:bg-card hover:text-foreground"
                  }`}
                >
                  <span className="text-sm font-medium">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-card-foreground rounded-[10px] p-2">
          <div className="bg-card rounded-[10px] p-4 2xl:p-6 h-full">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
