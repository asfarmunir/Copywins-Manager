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
import { X, ChevronDown } from "lucide-react";
import { motion, useMotionValue, animate } from "framer-motion";

const PostBroadcast = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const [formData, setFormData] = useState({
    broadcastType: "",
    messageTitle: "",
    expertise: "Sports",
    messageContent: "",
    urgencyLevel: "High",
    pick: "",
    odds: "",
    confidenceLevel: 2,
    tradingPair: "",
    entryPrice: "",
    targetPrice: "",
    stopLoss: "",
    leverage: "",
    units: "",
    action: "Long/Buy",
    additionalNotes: "",
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
    if (currentStep === 1) {
      setCurrentStep(2);
    }
  };

  const handlePrevious = () => {
    if (currentStep === 2) {
      setCurrentStep(1);
    }
  };

  const Step1Content = () => (
    <div className="space-y-6 h-full flex flex-col ">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Compose message</h3>
        <p className="text-gray-500 text-sm">
          Create your broadcast in this section
        </p>
      </div>

      <div className="space-y-6 flex-1 overflow-y-auto pr-4">
        {/* Broadcast Type */}
        <div>
          <label className="block text-sm font-semibold mb-3">
            Broadcast Type
          </label>
          <div className="relative">
            <button
              type="button"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-slate-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-left flex items-center justify-between bg-card"
            >
              <span
                className={
                  formData.broadcastType ? "text-foreground" : "text-gray-500"
                }
              >
                {formData.broadcastType || "Select broadcast type"}
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
                  className={`px-4 py-3 hover:bg-gray-50 dark:hover:bg-slate-800 cursor-pointer ${
                    formData.broadcastType === "Signal Alert"
                      ? "bg-gray-100 dark:bg-slate-700"
                      : ""
                  }`}
                  onClick={() => {
                    handleInputChange("broadcastType", "Signal Alert");
                    setDropdownOpen(false);
                  }}
                >
                  Signal Alert
                </div>
                <div
                  className={`px-4 py-3 hover:bg-gray-50 dark:hover:bg-slate-800 cursor-pointer ${
                    formData.broadcastType === "Market Update"
                      ? "bg-gray-100 dark:bg-slate-700"
                      : ""
                  }`}
                  onClick={() => {
                    handleInputChange("broadcastType", "Market Update");
                    setDropdownOpen(false);
                  }}
                >
                  Market Update
                </div>
                <div
                  className={`px-4 py-3 hover:bg-gray-50 dark:hover:bg-slate-800 cursor-pointer ${
                    formData.broadcastType === "Educational Content"
                      ? "bg-gray-100 dark:bg-slate-700"
                      : ""
                  }`}
                  onClick={() => {
                    handleInputChange("broadcastType", "Educational Content");
                    setDropdownOpen(false);
                  }}
                >
                  Educational Content
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Message Title */}
        <div>
          <label className="block text-sm font-semibold mb-3">
            Message title
          </label>
          <input
            type="text"
            placeholder="Enter message title"
            value={formData.messageTitle}
            onChange={(e) => handleInputChange("messageTitle", e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 dark:border-slate-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-card"
          />
        </div>

        {/* Select your Expertise */}
        <div>
          <label className="block text-sm font-semibold mb-3">
            Select your Expertise
          </label>
          <div className="space-y-3">
            {/* Trading Option */}
            <div
              className={`flex items-center justify-between p-4 border rounded-lg cursor-pointer transition ${
                formData.expertise === "Trading"
                  ? "border-primary bg-blue-50 dark:bg-blue-900/20"
                  : "border-gray-200 dark:border-slate-800 bg-card hover:border-gray-300"
              }`}
              onClick={() => handleInputChange("expertise", "Trading")}
            >
              <span className="text-sm font-medium">Trading</span>
              <div
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  formData.expertise === "Trading"
                    ? "border-primary bg-primary"
                    : "border-gray-300"
                }`}
              >
                {formData.expertise === "Trading" && (
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                )}
              </div>
            </div>

            {/* Sports Option */}
            <div
              className={`flex items-center justify-between p-4 border rounded-lg cursor-pointer transition ${
                formData.expertise === "Sports"
                  ? "border-primary bg-blue-50 dark:bg-blue-900/20"
                  : "border-gray-200 dark:border-slate-800 bg-card hover:border-gray-300"
              }`}
              onClick={() => handleInputChange("expertise", "Sports")}
            >
              <span className="text-sm font-medium">Sports</span>
              <div
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  formData.expertise === "Sports"
                    ? "border-primary bg-primary"
                    : "border-gray-300"
                }`}
              >
                {formData.expertise === "Sports" && (
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Message Content */}
        <div>
          <label className="block text-sm font-semibold mb-3">
            Message Content
          </label>
          <textarea
            placeholder="Describe broadcast message..."
            value={formData.messageContent}
            onChange={(e) =>
              handleInputChange("messageContent", e.target.value)
            }
            rows={6}
            className="w-full px-4 py-3 border border-gray-300 dark:border-slate-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none bg-card"
          />
        </div>

        {/* Urgency Level */}
        <div>
          <label className="block text-sm font-semibold mb-3">
            Urgency Level
          </label>
          <div className="space-y-3">
            {/* Low Option */}
            <div
              className={`flex items-center justify-between p-4 border rounded-lg cursor-pointer transition ${
                formData.urgencyLevel === "Low"
                  ? "border-green-500 bg-green-50 dark:bg-green-900/20"
                  : "border-gray-200 dark:border-slate-800 bg-card hover:border-gray-300"
              }`}
              onClick={() => handleInputChange("urgencyLevel", "Low")}
            >
              <span className="text-sm font-semibold text-green-600 dark:text-green-400">
                Low
              </span>
              <div
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  formData.urgencyLevel === "Low"
                    ? "border-green-500 bg-green-500"
                    : "border-gray-300"
                }`}
              >
                {formData.urgencyLevel === "Low" && (
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                )}
              </div>
            </div>

            {/* Normal Option */}
            <div
              className={`flex items-center justify-between p-4 border rounded-lg cursor-pointer transition ${
                formData.urgencyLevel === "Normal"
                  ? "border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20"
                  : "border-gray-200 dark:border-slate-800 bg-card hover:border-gray-300"
              }`}
              onClick={() => handleInputChange("urgencyLevel", "Normal")}
            >
              <span className="text-sm font-semibold text-yellow-600 dark:text-yellow-400">
                Normal
              </span>
              <div
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  formData.urgencyLevel === "Normal"
                    ? "border-yellow-500 bg-yellow-500"
                    : "border-gray-300"
                }`}
              >
                {formData.urgencyLevel === "Normal" && (
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                )}
              </div>
            </div>

            {/* High Option */}
            <div
              className={`flex items-center justify-between p-4 border rounded-lg cursor-pointer transition ${
                formData.urgencyLevel === "High"
                  ? "border-red-500 bg-red-50 dark:bg-red-900/20"
                  : "border-gray-200 dark:border-slate-800 bg-card hover:border-gray-300"
              }`}
              onClick={() => handleInputChange("urgencyLevel", "High")}
            >
              <span className="text-sm font-semibold text-red-600 dark:text-red-400">
                High
              </span>
              <div
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  formData.urgencyLevel === "High"
                    ? "border-red-500 bg-red-500"
                    : "border-gray-300"
                }`}
              >
                {formData.urgencyLevel === "High" && (
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={handleContinue}
        className="w-full py-2 bg-primary text-white rounded-full font-semibold hover:bg-primary transition"
      >
        Continue
      </button>
    </div>
  );
  const Step2Content = () => {
    const [confidenceLevel, setConfidenceLevel] = useState(2);

    const handleConfidenceChange = (e: any) => {
      setConfidenceLevel(parseInt(e.target.value));
    };

    return (
      <div className="space-y-6 h-full flex flex-col">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Betting pick</h3>
          <p className="text-gray-500 text-sm">
            Fill in the details for your sports betting pick.
          </p>
        </div>

        <div className="space-y-6 flex-1 overflow-y-auto pr-4">
          {/* Your pick */}
          <div>
            <label className="block text-sm font-semibold mb-3">
              Your pick
            </label>
            <textarea
              placeholder="Enter your pick or parlay here.."
              value={formData.pick || ""}
              onChange={(e) => handleInputChange("pick", e.target.value)}
              rows={6}
              className="w-full px-4 py-3 border border-gray-300 dark:border-slate-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none bg-card"
            />
          </div>

          {/* Odds */}
          <div>
            <label className="block text-sm font-semibold mb-3">Odds</label>
            <input
              type="text"
              placeholder="Enter odds"
              value={formData.odds || ""}
              onChange={(e) => handleInputChange("odds", e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-slate-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-card"
            />
          </div>

          {/* Confidence Level */}
          <div>
            <label className="block text-sm font-semibold mb-3">
              Confidence Level ({confidenceLevel}/10)
            </label>
            <div className="relative">
              <input
                type="range"
                min="1"
                max="10"
                value={confidenceLevel}
                onChange={handleConfidenceChange}
                className="w-full h-2 bg-gray-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer slider"
                style={{
                  background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${
                    (confidenceLevel - 1) * 11.11
                  }%, #e5e7eb ${(confidenceLevel - 1) * 11.11}%, #e5e7eb 100%)`,
                }}
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>1</span>
                <span>10</span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-3">
          <button
            onClick={handlePrevious}
            className="flex-1 py-2 border border-gray-300 dark:border-slate-700 text-gray-700 dark:text-gray-300 rounded-full font-semibold hover:bg-gray-50 dark:hover:bg-slate-800 transition"
          >
            Previous
          </button>
          <button
            onClick={() => setCurrentStep(3)}
            className="flex-1 py-2 bg-primary text-white rounded-full font-semibold hover:bg-primary transition"
          >
            Continue
          </button>
        </div>
      </div>
    );
  };
  const Step3Content = () => {
    return (
      <div className="space-y-6 h-full flex flex-col">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Trading signal</h3>
          <p className="text-gray-500 text-sm">
            Fill in the details for your trading signal.
          </p>
        </div>

        <div className="space-y-6 flex-1 overflow-y-auto pr-4">
          {/* Trading pair */}
          <div>
            <label className="block text-sm font-semibold mb-3">
              Trading pair
            </label>
            <input
              type="text"
              placeholder="BTC/USD"
              value={formData.tradingPair || ""}
              onChange={(e) => handleInputChange("tradingPair", e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-slate-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-card"
            />
          </div>

          {/* Entry price */}
          <div>
            <label className="block text-sm font-semibold mb-3">
              Entry price
            </label>
            <input
              type="text"
              placeholder="42,500"
              value={formData.entryPrice || ""}
              onChange={(e) => handleInputChange("entryPrice", e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-slate-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-card"
            />
          </div>

          {/* Target price */}
          <div>
            <label className="block text-sm font-semibold mb-3">
              Target price
            </label>
            <input
              type="text"
              placeholder="45,000"
              value={formData.targetPrice || ""}
              onChange={(e) => handleInputChange("targetPrice", e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-slate-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-card"
            />
          </div>

          {/* Stop loss */}
          <div>
            <label className="block text-sm font-semibold mb-3">
              Stop loss
            </label>
            <input
              type="text"
              placeholder="41,000"
              value={formData.stopLoss || ""}
              onChange={(e) => handleInputChange("stopLoss", e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-slate-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-card"
            />
          </div>

          {/* Leverage (Optional) */}
          <div>
            <label className="block text-sm font-semibold mb-3">
              Leverage (Optional)
            </label>
            <input
              type="text"
              placeholder="45,000"
              value={formData.leverage || ""}
              onChange={(e) => handleInputChange("leverage", e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-slate-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-card"
            />
          </div>

          {/* Units (0.5-5) (Optional) */}
          <div>
            <label className="block text-sm font-semibold mb-3">
              Units (0.5-5) (Optional)
            </label>
            <input
              type="text"
              placeholder="Enter units"
              value={formData.units || ""}
              onChange={(e) => handleInputChange("units", e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-slate-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-card"
            />
          </div>

          {/* Action */}
          <div>
            <label className="block text-sm font-semibold mb-3">Action</label>
            <div className="flex gap-4">
              <div
                className={`flex-1 p-4 border rounded-lg cursor-pointer text-center transition ${
                  formData.action === "Long/Buy"
                    ? "border-green-500 bg-green-50 dark:bg-green-900/20"
                    : "border-gray-200 dark:border-slate-800 bg-card hover:border-gray-300"
                }`}
                onClick={() => handleInputChange("action", "Long/Buy")}
              >
                <span
                  className={`text-sm 2xl:text-base font-semibold ${
                    formData.action === "Long/Buy"
                      ? "text-green-600 dark:text-green-400"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Long/Buy
                </span>
              </div>
              <div
                className={`flex-1 p-4 border rounded-lg cursor-pointer text-center transition ${
                  formData.action === "Short/Sell"
                    ? "border-red-500 bg-red-50 dark:bg-red-900/20"
                    : "border-gray-200 dark:border-slate-800 bg-card hover:border-gray-300"
                }`}
                onClick={() => handleInputChange("action", "Short/Sell")}
              >
                <span
                  className={`text-sm 2xl:text-base font-semibold ${
                    formData.action === "Short/Sell"
                      ? "text-red-600 dark:text-red-400"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Short/Sell
                </span>
              </div>
            </div>
          </div>

          {/* Additional notes */}
          <div>
            <label className="block text-sm font-semibold mb-3">
              Additional notes
            </label>
            <textarea
              placeholder="Any additional information"
              value={formData.additionalNotes || ""}
              onChange={(e) =>
                handleInputChange("additionalNotes", e.target.value)
              }
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 dark:border-slate-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none bg-card"
            />
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-3">
          <button
            onClick={() => setCurrentStep(2)}
            className="flex-1 py-2 border border-gray-300 dark:border-slate-700 text-gray-700 dark:text-gray-300 rounded-full font-semibold hover:bg-gray-50 dark:hover:bg-slate-800 transition"
          >
            Previous
          </button>
          <button
            onClick={() => {
              // Handle form submission here
              console.log("Form submitted:", formData);
              setIsOpen(false);
              // Reset form if needed
              setCurrentStep(1);
            }}
            className="flex-1 py-2 bg-primary text-white rounded-full font-semibold hover:bg-primary transition"
          >
            Broadcast
          </button>
        </div>
      </div>
    );
  };

  const ProgressBar = () => (
    <div className="mb-6">
      <div className="relative h-2 w-full rounded-full bg-gray-200 dark:bg-slate-700 overflow-hidden">
        <motion.div
          className="top-0 left-0 h-full bg-primary z-50"
          style={{
            scaleX: progressWidth,
            originX: 0,
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
          className="px-4 py-2 bg-primary text-white rounded-full text-sm  3xl:text-base font-semibold hover:bg-blue-600"
        >
          Post a broadcast
        </button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg p-4">
        <SheetHeader className="relative mb-3 w-fit">
          <div className="flex items-center justify-between">
            <SheetTitle className="text-lg font-semibold">
              Post a broadcast
            </SheetTitle>
          </div>
        </SheetHeader>

        <ProgressBar />
        <div className="mt-6 h-[84svh] 2xl:h-[89svh]  ">
          {currentStep === 1 && <Step1Content />}
          {currentStep === 2 && <Step2Content />}
          {currentStep === 3 && <Step3Content />}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default PostBroadcast;
