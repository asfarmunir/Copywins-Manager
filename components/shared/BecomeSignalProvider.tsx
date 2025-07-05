"use client";
import React, { useState, useEffect } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { X, ChevronDown, Upload, Flame } from "lucide-react";
import Image from "next/image";
import { motion, useMotionValue, animate } from "framer-motion";
import { TbFlameFilled } from "react-icons/tb";

const BecomeSignalProvider = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const totalSteps = 6;

  const [formData, setFormData] = useState({
    planName: "",
    yearsOfExperience: "",
    signalsPerWeek: "",
    areaOfExpertise: "Sports",
    notableAchievements: "",
    subscriptionPrice: "250.00",
    offerFreeTrial: true,
    affiliateProgram: "disable",
    agreeTerms: false, // Added for terms agreement
    bio: "", // Added for bio input
    xProfile: "", // Added for X/Twitter profile link
    instagramProfile: "", // Added for Instagram profile link
    linkedinProfile: "", // Added for LinkedIn profile link
  });
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const progressWidth = useMotionValue(0);

  // Animate progress when currentStep changes
  useEffect(() => {
    const newProgress = (currentStep - 1) / (totalSteps - 1);
    animate(progressWidth, newProgress, {
      duration: 0.5,
      ease: "easeInOut",
    });
  }, [currentStep, progressWidth]);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleContinue = () => {
    if (currentStep === 1 && selectedIndustry) {
      setCurrentStep(2);
    } else if (currentStep === 2) {
      setCurrentStep(3);
    } else if (currentStep === 3) {
      setCurrentStep(4);
    } else if (currentStep === 4) {
      setCurrentStep(5);
    } else if (currentStep === 5) {
      setCurrentStep(6);
    }
  };

  const handlePrevious = () => {
    if (currentStep === 2) {
      setCurrentStep(1);
    } else if (currentStep === 3) {
      setCurrentStep(2);
    } else if (currentStep === 4) {
      setCurrentStep(3);
    } else if (currentStep === 5) {
      setCurrentStep(4);
    } else if (currentStep === 6) {
      setCurrentStep(5);
    }
  };
  const Step1Content = () => (
    <div className="space-y-6 h-full flex flex-col">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Select your industry</h3>
        <p className="text-gray-500 text-sm">
          Select the area where you have more expertise and would like to offer
          signals
        </p>
      </div>

      <div className="space-y-4 flex-1">
        {/* Trading Option */}
        <div
          className={`relative border rounded-lg p-4 cursor-pointer transition ${
            selectedIndustry === "trading"
              ? "border-primary bg-blue-50 dark:bg-blue-900/20"
              : "border-gray-200 dark:border-slate-800 bg-card hover:border-gray-300"
          }`}
          onClick={() => setSelectedIndustry("trading")}
        >
          <div className="flex flex-col">
            <div className="flex items-center mb-2 justify-between space-x-3">
              <Image
                src="/trading.svg"
                alt="Trading Icon"
                width={48}
                height={48}
                className="w-12 h-12 rounded-full bg-gray-200"
              />
              <p className="bg-orange-500 text-white text-xs font-semibold px-2 py-2 rounded-full">
                <TbFlameFilled className="inline-block w-4 h-4 mr-1" />

                <span>Recent win 2 min ago</span>
              </p>
            </div>

            <h4 className="font-semibold">Trading</h4>
            <p className="text-gray-500 dark:text-gray-300 text-sm">
              Copy strategies from top traders
            </p>
            <div className="bg-card-foreground p-3 flex justify-between items-center rounded-full mt-2">
              <div className="flex items-center space-x-2">
                <span className="text-green-500 bg-green-50 dark:bg-green-900 rounded-full p-1 px-2 text-sm font-semibold">
                  83%
                </span>
                <span className="text-sm">Success rate</span>
              </div>
              <div
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  selectedIndustry === "trading"
                    ? "border-primary bg-primary"
                    : "border-gray-300"
                }`}
              >
                {selectedIndustry === "trading" && (
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Sports Option */}
        <div
          className={`relative border rounded-lg p-4 cursor-pointer transition ${
            selectedIndustry === "sports"
              ? "border-primary bg-blue-50 dark:bg-blue-900/20"
              : "border-gray-200 dark:border-slate-800 bg-card hover:border-gray-300"
          }`}
          onClick={() => setSelectedIndustry("sports")}
        >
          <div className="flex flex-col">
            <div className="flex items-center mb-2 justify-between space-x-3">
              <Image
                src="/sports.svg"
                alt="sports Icon"
                width={48}
                height={48}
                className="w-12 h-12 rounded-full bg-gray-200"
              />
              <p className="bg-orange-500 text-white text-xs font-semibold px-2 py-2 rounded-full">
                <TbFlameFilled className="inline-block w-4 h-4 mr-1" />

                <span>Recent win 2 min ago</span>
              </p>
            </div>

            <h4 className="font-semibold">Sports</h4>
            <p className="text-gray-500 dark:text-gray-300 text-sm">
              Copy strategies from top traders
            </p>
            <div className="bg-card-foreground p-3 flex justify-between items-center rounded-full mt-2">
              <div className="flex items-center space-x-2">
                <span className="text-green-500 bg-green-50 dark:bg-green-900 rounded-full p-1 px-2 text-sm font-semibold">
                  83%
                </span>
                <span className="text-sm">Success rate</span>
              </div>
              <div
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  selectedIndustry === "sports"
                    ? "border-primary bg-primary"
                    : "border-gray-300"
                }`}
              >
                {selectedIndustry === "sports" && (
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={handleContinue}
        disabled={!selectedIndustry}
        className={`w-full py-2 rounded-full dark:disabled:bg-slate-900 font-semibold transition ${
          selectedIndustry
            ? "bg-primary text-white hover:bg-primary"
            : "bg-gray-200 text-gray-400 cursor-not-allowed"
        }`}
      >
        Continue
      </button>
    </div>
  );

  const Step2Content = () => (
    <div className="space-y-6 h-full flex flex-col">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Your experience</h3>
        <p className="text-gray-500 text-sm">
          Tell us about your experience in {selectedIndustry}
        </p>
      </div>

      <div className="space-y-4 flex-1 overflow-y-auto">
        {/* Plan Name */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Plan Name <span className="text-gray-400">(Make this unique)</span>
          </label>
          <input
            type="text"
            placeholder="e.g CryptoKing Arena"
            value={formData.planName}
            onChange={(e) => handleInputChange("planName", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 dark:border-slate-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-card"
          />
        </div>

        {/* Years of Experience */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Years of experience
          </label>
          <input
            type="text"
            placeholder="e.g 5"
            value={formData.yearsOfExperience}
            onChange={(e) =>
              handleInputChange("yearsOfExperience", e.target.value)
            }
            className="w-full px-3 py-2 border border-gray-300 dark:border-slate-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-card"
          />
        </div>

        {/* Signals per week */}
        <div>
          <label className="block text-sm font-medium mb-2">
            How many signals per week
          </label>
          <input
            type="text"
            placeholder="e.g 5"
            value={formData.signalsPerWeek}
            onChange={(e) =>
              handleInputChange("signalsPerWeek", e.target.value)
            }
            className="w-full px-3 py-2 border border-gray-300 dark:border-slate-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-card"
          />
        </div>

        {/* Areas of expertise */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Areas of expertise
          </label>
          <div className="relative">
            <button
              type="button"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-slate-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-left flex items-center justify-between bg-card"
            >
              <span
                className={
                  formData.areaOfExpertise ? "text-foreground" : "text-gray-500"
                }
              >
                {formData.areaOfExpertise || "Select your expertise"}
              </span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {dropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-card border border-gray-300 dark:border-slate-900 rounded-lg shadow-lg z-10">
                <div
                  className={`px-3 py-2 hover:bg-gray-50 dark:hover:bg-slate-800 cursor-pointer ${
                    formData.areaOfExpertise === "Sports"
                      ? "bg-gray-100 dark:bg-slate-700"
                      : ""
                  }`}
                  onClick={() => {
                    handleInputChange("areaOfExpertise", "Sports");
                    setDropdownOpen(false);
                  }}
                >
                  Sports
                </div>
                <div
                  className={`px-3 py-2 hover:bg-gray-50 dark:hover:bg-slate-800 cursor-pointer ${
                    formData.areaOfExpertise === "Trading"
                      ? "bg-gray-100 dark:bg-slate-700"
                      : ""
                  }`}
                  onClick={() => {
                    handleInputChange("areaOfExpertise", "Trading");
                    setDropdownOpen(false);
                  }}
                >
                  Trading
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Notable achievements */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Notable achievements{" "}
            <span className="text-gray-400">(Optional)</span>
          </label>
          <textarea
            placeholder="Describe your achievements (will display in bio)"
            value={formData.notableAchievements}
            onChange={(e) =>
              handleInputChange("notableAchievements", e.target.value)
            }
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 dark:border-slate-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none bg-card"
          />
        </div>
      </div>

      <div className="flex space-x-3 mt-auto">
        <button
          onClick={handlePrevious}
          className="flex-1 py-3 border border-gray-300 dark:border-slate-900 rounded-full font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:bg-card transition"
        >
          Previous
        </button>
        <button
          onClick={handleContinue}
          className="flex-1 py-2 bg-primary text-white rounded-full font-medium hover:bg-primary transition"
        >
          Continue
        </button>
      </div>
    </div>
  );

  const Step3Content = () => (
    <div className="space-y-6 h-full flex flex-col">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Set your subscription pricing</h3>
        <p className="text-gray-500 text-sm">
          Set the monthly subscription price for your signal service.
        </p>
      </div>

      <div className="space-y-6 flex-1 overflow-y-auto pr-4">
        {/* Monthly Subscription Price */}
        <div>
          <label className="block text-sm font-medium mb-3">
            Monthly Subscription Price
          </label>
          <div className="relative">
            <div className="flex items-center bg-primary text-white rounded-l-lg px-4 py-3 text-lg font-semibold absolute left-0 top-0 bottom-0 z-10">
              $
            </div>
            <input
              type="text"
              value={formData.subscriptionPrice}
              onChange={(e) =>
                handleInputChange("subscriptionPrice", e.target.value)
              }
              className="w-full pl-16 pr-3 py-3 border border-gray-300 dark:border-slate-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-card text-lg font-semibold"
            />
          </div>
        </div>

        {/* Free Trial Option */}
        <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-slate-800 rounded-lg bg-card">
          <div className="flex items-center space-x-3">
            <span className="text-sm font-medium">
              Offer a 7 day free trial?
            </span>
            <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs px-2 py-1 rounded-full font-medium">
              Recommended
            </span>
          </div>
          <button
            onClick={() =>
              handleInputChange("offerFreeTrial", !formData.offerFreeTrial)
            }
            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition ${
              formData.offerFreeTrial
                ? "border-primary bg-primary"
                : "border-gray-300"
            }`}
          >
            {formData.offerFreeTrial && (
              <div className="w-2 h-2 bg-white rounded-full"></div>
            )}
          </button>
        </div>

        {/* Potential Monthly Earnings */}
        <div>
          <h4 className="font-semibold mb-4">Potential monthly earnings</h4>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-slate-800 rounded-lg">
              <div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  with 10 subscribers
                </div>
                <div className="text-2xl font-bold">
                  $
                  {(parseFloat(formData.subscriptionPrice) * 10 * 0.7).toFixed(
                    2
                  )}
                </div>
              </div>
              <div className="text-xs text-gray-500">
                After platform fees{" "}
                <span className="inline-block w-3 h-3 rounded-full bg-gray-400 text-white text-center leading-3">
                  i
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-slate-800 rounded-lg">
              <div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  with 50 subscribers
                </div>
                <div className="text-2xl font-bold">
                  $
                  {(parseFloat(formData.subscriptionPrice) * 50 * 0.7).toFixed(
                    2
                  )}
                </div>
              </div>
              <div className="text-xs text-gray-500">
                After platform fees{" "}
                <span className="inline-block w-3 h-3 rounded-full bg-gray-400 text-white text-center leading-3">
                  i
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-slate-800 rounded-lg">
              <div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  with 100 subscribers
                </div>
                <div className="text-2xl font-bold">
                  $
                  {(parseFloat(formData.subscriptionPrice) * 100 * 0.7).toFixed(
                    2
                  )}
                </div>
              </div>
              <div className="text-xs text-gray-500">
                After platform fees{" "}
                <span className="inline-block w-3 h-3 rounded-full bg-gray-400 text-white text-center leading-3">
                  i
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Affiliate Program */}
        <div>
          <h4 className="font-semibold mb-4">
            Do you want to be apart of the affiliate program?
          </h4>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-slate-800 rounded-lg bg-card">
              <div className="flex items-center space-x-3">
                <span className="text-sm font-medium">
                  Turn on referrals to expand your reach.
                </span>
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs px-2 py-1 rounded-full font-medium">
                  Recommended
                </span>
              </div>
              <button
                onClick={() => handleInputChange("affiliateProgram", "enable")}
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition ${
                  formData.affiliateProgram === "enable"
                    ? "border-primary bg-primary"
                    : "border-gray-300"
                }`}
              >
                {formData.affiliateProgram === "enable" && (
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                )}
              </button>
            </div>

            <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-slate-800 rounded-lg bg-card">
              <span className="text-sm font-medium">
                Disable - affiliates won't be able to refer you
              </span>
              <button
                onClick={() => handleInputChange("affiliateProgram", "disable")}
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition ${
                  formData.affiliateProgram === "disable"
                    ? "border-primary bg-primary"
                    : "border-gray-300"
                }`}
              >
                {formData.affiliateProgram === "disable" && (
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                )}
              </button>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            This is a subject to 10% affiliate fee - You get 70% after all fees.
          </p>
        </div>

        {/* Withdrawals Notice */}
        <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-white text-xs font-bold">!</span>
            </div>
            <div>
              <h5 className="font-semibold text-orange-800 dark:text-orange-200 mb-1">
                Withdrawals
              </h5>
              <p className="text-sm text-orange-700 dark:text-orange-300">
                By registering, you agree to have your payouts securely
                processed and your KYC verification handled by Stripe, ensuring
                safe and smooth transactions.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex space-x-3 mt-auto">
        <button
          onClick={handlePrevious}
          className="flex-1 py-3 border border-gray-300 dark:border-slate-900 rounded-full font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:bg-card transition"
        >
          Previous
        </button>
        <button
          onClick={handleContinue}
          className="flex-1 py-2 bg-primary text-white rounded-full font-medium hover:bg-primary transition"
        >
          Complete
        </button>
      </div>
    </div>
  );
  const Step4Content = () => (
    <div className="space-y-6 h-full flex flex-col">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Terms and Conditions</h3>
        <p className="text-gray-500 text-sm">
          Please read our terms and conditions carefully before using our
          service.
        </p>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="bg-gray-50 dark:bg-slate-800 rounded-lg p-6 space-y-6">
          <div className="text-center space-y-2">
            <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
              Signal provider contract
            </h4>
            <p className="text-sm text-gray-500">
              Effective Date: April 18, 2025
            </p>
          </div>

          <div className="space-y-4 text-sm">
            <div>
              <h5 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">
                User Responsibilities:
              </h5>
              <p className="text-gray-600 dark:text-gray-400">
                Users must not engage in any unlawful activities, including but
                not limited to hacking, phishing, or distributing malware.
              </p>
            </div>

            <div>
              <h5 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Prohibited Conduct:
              </h5>
              <p className="text-gray-600 dark:text-gray-400">
                All content provided by the service, including text, images, and
                logos, are the property of the company and may not be used
                without permission.
              </p>
            </div>

            <div>
              <h5 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Intellectual Property:
              </h5>
              <p className="text-gray-600 dark:text-gray-400">
                All content and materials on this platform are the property of
                CopyWins and are protected by intellectual property laws. You
                may not copy, distribute, or create derivative works without our
                written permission. Use of our services does not grant you any
                ownership rights to our content.
              </p>
            </div>

            <div>
              <h5 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Termination:
              </h5>
              <p className="text-gray-600 dark:text-gray-400">
                <span className="text-primary dark:text-blue-400 underline">
                  Users are responsible for maintaining the confidentiality of
                  their account information and for all activities that occur
                  under their account.
                </span>
              </p>
            </div>

            <div>
              <h5 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Limitation of Liability:
              </h5>
              <p className="text-gray-600 dark:text-gray-400">
                All content provided by the service, including text, images, and
                logos, are the property of the company and may not be used
                without permission.
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center mt-4 space-x-3">
          <button
            onClick={() =>
              handleInputChange("agreeTerms", !formData.agreeTerms)
            }
            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition ${
              formData.agreeTerms
                ? "border-primary bg-primary"
                : "border-gray-300"
            }`}
          >
            {formData.agreeTerms && (
              <div className="w-2 h-2 bg-white rounded-full"></div>
            )}
          </button>
          <span className="text-sm font-medium">
            I agree and sign to this document.
          </span>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex space-x-3">
          <button
            onClick={handlePrevious}
            className="flex-1 py-3 border border-gray-300 dark:border-slate-900 rounded-full font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:bg-card transition"
          >
            Previous
          </button>
          <button
            onClick={handleContinue}
            disabled={!formData.agreeTerms}
            className={`flex-1 py-3 rounded-full font-medium transition ${
              formData.agreeTerms
                ? "bg-primary text-white hover:bg-primary"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );

  const Step5Content = () => {
    const [dragOver, setDragOver] = useState(false);
    const [profileImage, setProfileImage] = useState(null);

    const handleDragOver = (e) => {
      e.preventDefault();
      setDragOver(true);
    };

    const handleDragLeave = (e) => {
      e.preventDefault();
      setDragOver(false);
    };

    const handleDrop = (e) => {
      e.preventDefault();
      setDragOver(false);
      const files = e.dataTransfer.files;
      if (files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => setProfileImage(e.target.result);
        reader.readAsDataURL(files[0]);
      }
    };

    const handleImageUpload = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => setProfileImage(e.target.result);
        reader.readAsDataURL(file);
      }
    };

    return (
      <div className="space-y-6 h-full flex flex-col">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Complete your profile</h3>
          <p className="text-gray-500 text-sm">
            Add details to help subscribers learn more about you and your
            trading style.
          </p>
        </div>

        <div className="space-y-6 flex-1 overflow-y-auto">
          {/* Cover Image Upload */}
          <div>
            <div
              className={`relative border-2 border-dashed rounded-lg p-8 text-center transition ${
                dragOver
                  ? "border-primary bg-blue-50 dark:bg-blue-900/20"
                  : "border-gray-300 dark:border-slate-700 bg-gray-50 dark:bg-slate-800"
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              {profileImage ? (
                <div className="relative">
                  <img
                    src={profileImage}
                    alt="Cover"
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  <button
                    onClick={() => setProfileImage(null)}
                    className="absolute top-2 right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs hover:bg-red-600"
                  >
                    ×
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                    <Upload color="white" />
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-400 font-medium mb-2">
                      Drag and drop your cover image here
                    </p>
                    <label className="inline-block">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                      <span className="bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-300 dark:hover:bg-slate-600 transition">
                        Choose a image
                      </span>
                    </label>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Profile Avatar and Upload */}
          <div className="flex items-center justify-between space-x-4">
            <div className="w-16 h-16 bg-[#5EA259] rounded-full flex items-center justify-center text-white text-xl font-bold">
              GC
            </div>
            <label className="bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-gray-300 px-5 py-3 rounded-lg cursor-pointer hover:bg-gray-300 dark:hover:bg-slate-600 transition">
              <input type="file" accept="image/*" className="hidden" />
              Upload Image
            </label>
          </div>

          {/* Bio */}
          <div>
            <label className="block text-sm font-semibold mb-2">Bio</label>
            <textarea
              placeholder="Describe yourself..."
              value={formData.bio || ""}
              onChange={(e) => handleInputChange("bio", e.target.value)}
              rows={4}
              className="w-full px-4 py-4 border border-gray-300 dark:border-slate-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none bg-card"
            />
          </div>

          {/* Social Media Links */}
          <div>
            <label className="block text-sm font-semibold mb-4">
              Social media links (optional)
            </label>
            <div className="space-y-3">
              {/* X/Twitter */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="X profile URL"
                  value={formData.xProfile || ""}
                  onChange={(e) =>
                    handleInputChange("xProfile", e.target.value)
                  }
                  className="w-full pl-4 pr-10 py-3 border border-gray-300 dark:border-slate-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-card"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-gray-400"
                  >
                    <path
                      d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>

              {/* Instagram */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Instagram profile URL"
                  value={formData.instagramProfile || ""}
                  onChange={(e) =>
                    handleInputChange("instagramProfile", e.target.value)
                  }
                  className="w-full pl-4 pr-10 py-3 border border-gray-300 dark:border-slate-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-card"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-gray-400"
                  >
                    <path
                      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Linkedin profile URL"
                  value={formData.linkedinProfile || ""}
                  onChange={(e) =>
                    handleInputChange("linkedinProfile", e.target.value)
                  }
                  className="w-full pl-4 pr-10 py-3 border border-gray-300 dark:border-slate-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-card"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-gray-400"
                  >
                    <path
                      d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex space-x-3 mt-auto">
          <button
            onClick={handlePrevious}
            className="flex-1 py-3 border border-gray-300 dark:border-slate-900 rounded-full font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:bg-card transition"
          >
            Previous
          </button>
          <button
            onClick={handleContinue}
            className="flex-1 py-2 bg-primary text-white rounded-full font-medium hover:bg-primary transition"
          >
            Continue
          </button>
        </div>
      </div>
    );
  };

  const Step6Content = () => {
    const [agreeToTerms, setAgreeToTerms] = useState(false);

    return (
      <div className="space-y-6 h-full flex flex-col">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Review your Application</h3>
          <p className="text-gray-500 text-sm">
            Verify your identity to gain full access to all platform features.
          </p>
        </div>

        <div className="space-y-6 flex-1 overflow-y-auto">
          {/* Profile Section */}
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-[#5EA259] rounded-full flex items-center justify-center text-white text-xl font-bold">
              GC
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <h4 className="font-semibold text-lg">George Chichua</h4>
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs px-2 py-1 rounded-full font-medium">
                  Verified
                </span>
              </div>
              <p className="text-gray-500 text-sm">@Jeroninmo</p>
            </div>
          </div>

          {/* Monthly Subscription Price */}
          <div>
            <h4 className="font-semibold mb-3">Monthly subscription price</h4>
            <div className="bg-gray-50 dark:bg-slate-800 rounded-lg p-4">
              <div className="text-3xl font-bold">
                ${formData.subscriptionPrice}
                <span className="text-lg font-normal text-gray-500">
                  /Month
                </span>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div>
            <h4 className="font-semibold mb-3">Bio</h4>
            <div className="bg-gray-50 dark:bg-slate-800 rounded-lg p-4">
              <p className="text-gray-700 dark:text-gray-300">
                {formData.bio ||
                  "I'm the best trader in the world, come with me guys and you will earn much more that you except."}
              </p>
            </div>
          </div>

          {/* Expertise */}
          <div>
            <h4 className="font-semibold mb-3">Expertise</h4>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">
                Trading Trading
              </span>
              <span className="bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">
                Cryptocurrency
              </span>
              <span className="bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">
                Technical Analysis
              </span>
              <span className="bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">
                Risk Management
              </span>
            </div>
          </div>

          {/* Terms Agreement */}
          <div className="flex items-start space-x-3">
            <button
              onClick={() => setAgreeToTerms(!agreeToTerms)}
              className={`w-5 h-5 rounded border-2 flex items-center justify-center transition mt-0.5 ${
                agreeToTerms ? "border-primary bg-primary" : "border-gray-300"
              }`}
            >
              {agreeToTerms && (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M10 3L4.5 8.5L2 6"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
            <span className="text-sm text-gray-700 dark:text-gray-300">
              I agree to the{" "}
              <span className="text-primary underline cursor-pointer">
                terms and conditions & platform fee
              </span>
            </span>
          </div>

          {/* Stripe Notice */}
          <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs font-bold">i</span>
              </div>
              <div>
                <h5 className="font-semibold text-orange-800 dark:text-orange-200 mb-1">
                  You will receive a email from Stripe
                </h5>
                <p className="text-sm text-orange-700 dark:text-orange-300">
                  Keep an eye on your inbox—Stripe will be sending you an email
                  to finalize your payout details, and KYC.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3 mt-auto">
          <button
            onClick={handlePrevious}
            className="flex-1 py-3 border border-gray-300 dark:border-slate-900 rounded-full font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:bg-card transition"
          >
            Previous
          </button>
          <button
            onClick={() => {
              // Handle application submission here
              console.log("Submitting application...", formData);
            }}
            disabled={!agreeToTerms}
            className={`flex-1 py-3 rounded-full font-medium transition ${
              agreeToTerms
                ? "bg-primary text-white hover:bg-primary"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            Submit application
          </button>
        </div>
      </div>
    );
  };

  const ProgressBar = () => (
    <div className="mb-6">
      <div className="relative h-2 w-full rounded-full bg-gray-200 dark:bg-slate-700 overflow-hidden">
        <motion.div
          className=" top-0 left-0 h-full bg-primary z-50"
          style={{
            scaleX: progressWidth,
            originX: 0, // Makes the animation grow from left to right
          }}
        />
      </div>
    </div>
  );

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button
          onClick={() => setIsOpen(true)}
          className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-primary transition"
        >
          Become a Signal Provider
        </button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg p-4 ">
        <SheetHeader className="relative mb-5  w-fit ">
          <div className="flex items-center justify-between">
            <SheetTitle className="text-lg font-semibold">
              Become a signal provider
            </SheetTitle>
          </div>
        </SheetHeader>

        <ProgressBar />
        <div className="mt-6 h-[84svh] 2xl:h-[89svh]  ">
          {currentStep === 1 && <Step1Content />}
          {currentStep === 2 && <Step2Content />}
          {currentStep === 3 && <Step3Content />}
          {currentStep === 4 && <Step4Content />}
          {currentStep === 5 && <Step5Content />}
          {currentStep === 6 && <Step6Content />}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default BecomeSignalProvider;
