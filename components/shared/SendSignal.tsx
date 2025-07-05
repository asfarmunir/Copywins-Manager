"use client";
import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { X } from "lucide-react";

const TradingSignalSheet = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAction, setSelectedAction] = useState("");

  const [formData, setFormData] = useState({
    tradingPair: "BTC/USD",
    entryPrice: "42,500",
    targetPrice: "45,000",
    stopLoss: "41,000",
    leverage: "45,000",
    units: "",
    additionalNotes: "",
  });

  const handleInputChange = (field: any, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const ActionButton = ({
    action,
    color,
    isSelected,
    onClick,
  }: {
    action: string;
    color: string;
    isSelected: boolean;
    onClick: () => void;
  }) => (
    <button
      onClick={onClick}
      className={`flex-1 py-3 px-4 rounded-lg border-2 transition-all ${
        isSelected
          ? `border-${color}-500 bg-${color}-50 text-${color}-600`
          : "border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-600 dark:text-gray-400 hover:border-gray-300"
      }`}
    >
      <div className="flex items-center justify-center space-x-2">
        <div
          className={`w-4 h-4 rounded-full border-2 ${
            isSelected
              ? `border-${color}-500 bg-${color}-500`
              : "border-gray-300"
          }`}
        >
          {isSelected && (
            <div className="w-full h-full bg-white rounded-full scale-50"></div>
          )}
        </div>
        <span className="font-medium">{action}</span>
      </div>
    </button>
  );

  const handleSubmit = () => {
    console.log("Sending trading signal...", {
      ...formData,
      action: selectedAction,
    });
    // Handle form submission here
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button
          onClick={() => setIsOpen(true)}
          className="w-full bg-card-foreground  hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 py-2 2xl:py-2.5 px-4 rounded-full text-sm font-semibold transition-colors"
        >
          Send Trading Signal
        </button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg p-0 overflow-hidden">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 pb-4 border-b bg-card border-gray-100 dark:border-slate-800">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Signal mode
                </h2>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* Title and Description */}
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Trading signal
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm 3xl:text-base">
                Fill in the details for your trading signal
              </p>
            </div>

            {/* Trading Pair */}
            <div className="space-y-2">
              <label className="block text-sm 3xl:text-base font-semibold text-gray-700 dark:text-gray-300">
                Trading pair
              </label>
              <input
                type="text"
                value={formData.tradingPair}
                onChange={(e) =>
                  handleInputChange("tradingPair", e.target.value)
                }
                className="w-full px-4 py-3 bg-card border border-gray-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white"
                placeholder="BTC/USD"
              />
            </div>

            {/* Entry Price */}
            <div className="space-y-2">
              <label className="block text-sm 3xl:text-base font-semibold text-gray-700 dark:text-gray-300">
                Entry price
              </label>
              <input
                type="text"
                value={formData.entryPrice}
                onChange={(e) =>
                  handleInputChange("entryPrice", e.target.value)
                }
                className="w-full px-4 py-3 bg-card border border-gray-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white"
                placeholder="42,500"
              />
            </div>

            {/* Target Price */}
            <div className="space-y-2">
              <label className="block text-sm 3xl:text-base font-semibold text-gray-700 dark:text-gray-300">
                Target price
              </label>
              <input
                type="text"
                value={formData.targetPrice}
                onChange={(e) =>
                  handleInputChange("targetPrice", e.target.value)
                }
                className="w-full px-4 py-3 bg-card border border-gray-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white"
                placeholder="45,000"
              />
            </div>

            {/* Stop Loss */}
            <div className="space-y-2">
              <label className="block text-sm 3xl:text-base font-semibold text-gray-700 dark:text-gray-300">
                Stop loss
              </label>
              <input
                type="text"
                value={formData.stopLoss}
                onChange={(e) => handleInputChange("stopLoss", e.target.value)}
                className="w-full px-4 py-3 bg-card border border-gray-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white"
                placeholder="41,000"
              />
            </div>

            {/* Leverage */}
            <div className="space-y-2">
              <label className="block text-sm 3xl:text-base font-semibold text-gray-700 dark:text-gray-300">
                Leverage <span className="text-gray-400">(Optional)</span>
              </label>
              <input
                type="text"
                value={formData.leverage}
                onChange={(e) => handleInputChange("leverage", e.target.value)}
                className="w-full px-4 py-3 bg-card border border-gray-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white"
                placeholder="45,000"
              />
            </div>

            {/* Units */}
            <div className="space-y-2">
              <label className="block text-sm 3xl:text-base font-semibold text-gray-700 dark:text-gray-300">
                Units <span className="text-gray-400">(0,5-5)</span>
              </label>
              <input
                type="text"
                value={formData.units}
                onChange={(e) => handleInputChange("units", e.target.value)}
                className="w-full px-4 py-3 bg-card border border-gray-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white"
                placeholder="Enter units"
              />
            </div>

            {/* Action Buttons */}
            <div className="space-y-2">
              <label className="block text-sm 3xl:text-base font-semibold text-gray-700 dark:text-gray-300">
                Action
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 w-full  gap-3">
                <button
                  onClick={() => setSelectedAction("Buy")}
                  className={`w-full py-3 px-4 rounded-lg border-2 transition-all ${
                    selectedAction === "Buy"
                      ? "border-green-500 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400"
                      : "border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-600 dark:text-gray-400 hover:border-gray-300"
                  }`}
                >
                  <div className="flex items-center justify-center space-x-2">
                    <div
                      className={`w-4 h-4 rounded-full border-2 ${
                        selectedAction === "Buy"
                          ? "border-green-500 bg-green-500"
                          : "border-gray-300"
                      }`}
                    >
                      {selectedAction === "Buy" && (
                        <div className="w-full h-full bg-white rounded-full scale-50"></div>
                      )}
                    </div>
                    <span className="font-medium">Buy</span>
                  </div>
                </button>

                <button
                  onClick={() => setSelectedAction("Long")}
                  className={`w-full py-3 px-4 rounded-lg border-2 transition-all ${
                    selectedAction === "Long"
                      ? "border-green-500 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400"
                      : "border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-600 dark:text-gray-400 hover:border-gray-300"
                  }`}
                >
                  <div className="flex items-center justify-center space-x-2">
                    <div
                      className={`w-4 h-4 rounded-full border-2 ${
                        selectedAction === "Long"
                          ? "border-green-500 bg-green-500"
                          : "border-gray-300"
                      }`}
                    >
                      {selectedAction === "Long" && (
                        <div className="w-full h-full bg-white rounded-full scale-50"></div>
                      )}
                    </div>
                    <span className="font-medium">Long</span>
                  </div>
                </button>
                <button
                  onClick={() => setSelectedAction("Sell")}
                  className={`w-full py-3 px-4 rounded-lg border-2 transition-all ${
                    selectedAction === "Sell"
                      ? "border-red-500 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400"
                      : "border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-600 dark:text-gray-400 hover:border-gray-300"
                  }`}
                >
                  <div className="flex items-center justify-center space-x-2">
                    <div
                      className={`w-4 h-4 rounded-full border-2 ${
                        selectedAction === "Sell"
                          ? "border-red-500 bg-red-500"
                          : "border-gray-300"
                      }`}
                    >
                      {selectedAction === "Sell" && (
                        <div className="w-full h-full bg-white rounded-full scale-50"></div>
                      )}
                    </div>
                    <span className="font-medium">Sell</span>
                  </div>
                </button>

                <button
                  onClick={() => setSelectedAction("Short")}
                  className={`w-full py-3 px-4 rounded-lg border-2 transition-all ${
                    selectedAction === "Short"
                      ? "border-red-500 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400"
                      : "border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-600 dark:text-gray-400 hover:border-gray-300"
                  }`}
                >
                  <div className="flex items-center justify-center space-x-2">
                    <div
                      className={`w-4 h-4 rounded-full border-2 ${
                        selectedAction === "Short"
                          ? "border-red-500 bg-red-500"
                          : "border-gray-300"
                      }`}
                    >
                      {selectedAction === "Short" && (
                        <div className="w-full h-full bg-white rounded-full scale-50"></div>
                      )}
                    </div>
                    <span className="font-medium">Short</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Additional Notes */}
            <div className="space-y-2">
              <label className="block text-sm 3xl:text-base font-semibold text-gray-700 dark:text-gray-300">
                Additional notes
              </label>
              <textarea
                value={formData.additionalNotes}
                onChange={(e) =>
                  handleInputChange("additionalNotes", e.target.value)
                }
                rows={4}
                className="w-full px-4 py-3 bg-card border border-gray-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-gray-900 dark:text-white"
                placeholder="Any additional information"
              />
            </div>
          </div>

          {/* Footer Button */}
          <div className="p-6 pt-4 border-t border-gray-100 dark:border-slate-800">
            <button
              onClick={handleSubmit}
              disabled={!selectedAction}
              className={`w-full py-3 rounded-full text-xs 2xl:text-sm font-semibold transition-all ${
                selectedAction
                  ? "bg-primary hover:bg-blue-700 text-white"
                  : "bg-gray-200 dark:bg-slate-700 text-gray-400 cursor-not-allowed"
              }`}
            >
              Send trading signal
            </button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default TradingSignalSheet;
