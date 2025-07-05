"use client";
import Image from "next/image";
import React from "react";
import { FiX } from "react-icons/fi";

const RejectCourseDetails = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
      <div className="bg-card rounded-[10px] border border-gray-200 dark:border-gray-700 w-full max-w-lg 2xl:max-w-2xl mx-4 shadow-lg">
        {/* Header */}
        <div className="flex  mt-5  items-center flex-col justify-center gap-2 p-4 2xl:p-6 mb-3">
          <Image
            src="/admin/course.svg"
            alt="Warning Icon"
            width={54}
            height={54}
            className=""
          />

          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Confirm course Rejection?
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 ">
            Do not permit course to go live.
          </p>
        </div>

        {/* Footer */}
        <div className="p-4 2xl:p-6 border-t border-gray-200 dark:border-gray-700 flex gap-3">
          <button
            onClick={onClose}
            className=" flex-1 py-2 px-2 md:px-4 bg-card-foreground text-gray-700 dark:text-gray-300 rounded-full border font-semibold text-[10px] md:text-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              // Handle pause discount code logic here
              console.log("Pausing discount code");
            }}
            className="flex-1 py-2 px-2 md:px-4 bg-red-100 hover:bg-red-200 dark:bg-red-700/30 text-red-600 dark:text-red-300 rounded-full font-semibold text-[10px] md:text-sm transition-colors"
          >
            Reject course upload
          </button>
          <button
            onClick={() => {
              // Handle delete discount code logic here
              console.log("Deleting discount code");
            }}
            className="flex-1 hidden md:block py-2 px-2 md:px-4 bg-red-600 hover:bg-red-500 text-white rounded-full font-semibold text-[10px] md:text-sm transition-colors"
          >
            BlackList Client + Reject
          </button>
        </div>
      </div>
    </div>
  );
};

export default RejectCourseDetails;
