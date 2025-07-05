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

const CloseSignalSheet = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOutcome, setSelectedOutcome] = useState("Loss");
  const [messageTitle, setMessageTitle] = useState("");
  const [messageContent, setMessageContent] = useState("");

  const handleOutcomeSelect = (outcome: any) => {
    setSelectedOutcome(outcome);
  };

  const handleContinue = () => {
    // Handle the signal closure logic here
    console.log("Closing signal with:", {
      outcome: selectedOutcome,
      title: messageTitle,
      content: messageContent,
    });
    // Close the sheet after processing
    setIsOpen(false);
  };

  const OutcomeOption = ({
    value,
    label,
    color,
    isSelected,
    onClick,
  }: {
    value: string;
    label: string;
    color: string;
    isSelected: boolean;
    onClick: () => void;
  }) => (
    <div
      className={`flex items-center justify-between p-4 rounded-lg cursor-pointer transition-all ${
        isSelected
          ? "bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800"
          : "bg-card dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700"
      }`}
      onClick={onClick}
    >
      <span className={`font-medium ${color} font-semibold`}>{label}</span>
      <div
        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition ${
          isSelected
            ? "border-blue-500 bg-blue-500"
            : "border-gray-300 dark:border-gray-600"
        }`}
      >
        {isSelected && <div className="w-2 h-2 bg-white rounded-full"></div>}
      </div>
    </div>
  );

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button
          onClick={() => setIsOpen(true)}
          className=" md:px-3 text-nowrap md:py-1.5 w-full md:w-fit py-1.5 text-xs bg-card 2xl:text-sm  font-medium rounded-full "
        >
          Close Signal
        </button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg p-0 flex flex-col h-full">
        {/* Header */}
        <SheetHeader className="relative w-fit p-6 pb-4 border-b border-gray-100 dark:border-slate-800">
          <div className="flex items-center justify-between">
            <SheetTitle className="text-lg font-semibold text-gray-900 dark:text-white">
              Close Signal
            </SheetTitle>
          </div>
        </SheetHeader>

        {/* Content */}
        <div className="flex-1 flex flex-col p-6 space-y-6 overflow-y-auto no-scrollbar">
          {/* Header Section */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Mark Signal As Closed
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              We verify the accuracy of reported results to ensure signals are
              marked honestly as wins or losses.
            </p>
          </div>

          {/* Signal Outcome Section */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900 dark:text-white">
              Signal Outcome
            </h4>
            <div className="space-y-3">
              <OutcomeOption
                value="Win"
                label="Win"
                color="text-green-600 dark:text-green-400"
                isSelected={selectedOutcome === "Win"}
                onClick={() => handleOutcomeSelect("Win")}
              />
              <OutcomeOption
                value="Loss"
                label="Loss"
                color="text-red-600 dark:text-red-400"
                isSelected={selectedOutcome === "Loss"}
                onClick={() => handleOutcomeSelect("Loss")}
              />
              <OutcomeOption
                value="Void"
                label="Void"
                color="text-yellow-600 dark:text-yellow-400"
                isSelected={selectedOutcome === "Void"}
                onClick={() => handleOutcomeSelect("Void")}
              />
            </div>
          </div>

          {/* Message Title */}
          <div className="space-y-3">
            <label className="block font-semibold text-gray-900 dark:text-white">
              Message title
            </label>
            <input
              type="text"
              placeholder="Enter message title"
              value={messageTitle}
              onChange={(e) => setMessageTitle(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-900 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            />
          </div>

          {/* Message Content */}
          <div className="space-y-3 flex-1">
            <label className="block font-semibold text-gray-900 dark:text-white">
              Message Content
            </label>
            <textarea
              placeholder="Describe broadcast message...."
              value={messageContent}
              onChange={(e) => setMessageContent(e.target.value)}
              rows={8}
              className="w-full px-4 py-3 border border-gray-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none bg-white dark:bg-slate-900 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 pt-4 border-t border-gray-100 dark:border-slate-800">
          <button
            onClick={handleContinue}
            className="w-full py-3 bg-primary text-white rounded-full font-semibold hover:bg-blue-700 transition-colors"
          >
            Continue
          </button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CloseSignalSheet;
