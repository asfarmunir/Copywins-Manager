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

const WithdrawMoneyModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button
          onClick={() => setIsOpen(true)}
          className=" border rounded-full px-2 md:px-4 py-2 bg-card-foreground font-semibold  dark:hover:text-white text-[10px] md:text-sm"
        >
          Withdrawal Status
        </button>
      </SheetTrigger>
      <SheetContent className="w-full   sm:max-w-lg p-0">
        {/* Header */}
        <div className="flex   items-center justify-between p-5 border-b border-gray-200 dark:border-slate-700">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            Withdraw money
          </h2>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Title and Description */}
          <div className="space-y-2">
            <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">
              Withdraw affiliate earnings.
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Withdrawals are processed through Stripe based on the setup you
              configure.
            </p>
          </div>

          {/* Next Auto Payout Date */}
          <div className="bg-card border rounded-lg p-4">
            <div className="text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-3">
              Next auto payout Date
            </div>
            <div className="text-xl bg-card-foreground py-4 rounded-lg px-5 font-semibold text-gray-900 dark:text-gray-100">
              April 30, 2025
            </div>
          </div>

          {/* Last Payout */}
          <div className="bg-card border rounded-lg p-4">
            <div className="text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-3">
              Last Payout
            </div>
            <p className="text-xs 3xl:text-sm text-gray-600 dark:text-gray-400 mb-4">
              Your most recent payout from CopyWins as a reward for your hard
              work.
            </p>

            <div className="text-xl flex items-center justify-between bg-card-foreground py-4 rounded-lg px-5 font-semibold text-gray-900 dark:text-gray-100">
              <div>
                <div className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  380$
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  March 30, 2025
                </div>
              </div>
              <button className=" text-green-700 font-semibold bg-green-100 dark:bg-green-900/50 rounded-full px-4 py-1.5 text-xs 2xl:text-sm dark:text-green-400  hover:text-green-700 dark:hover:text-green-300 transition">
                Withdraw
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-100 dark:border-slate-800">
          <button
            onClick={() => setIsOpen(false)}
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-xs 2xl:text-sm text-white font-medium rounded-full mt-auto transition"
          >
            Exit
          </button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default WithdrawMoneyModal;
