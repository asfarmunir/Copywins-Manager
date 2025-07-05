import React, { useState } from "react";
import { X, Copy, Check } from "lucide-react";

const ShareLinkModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [activeTab, setActiveTab] = useState("Your link");
  const [linkCopied, setLinkCopied] = useState(false);
  const [codeCopied, setCodeCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText("https://example.com/ref/user123");
    setLinkCopied(true);
    setTimeout(() => setLinkCopied(false), 2000);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText("USER123");
    setCodeCopied(true);
    setTimeout(() => setCodeCopied(false), 2000);
  };

  const socialButtons = [
    { name: "Twitter", icon: "𝕏", bgColor: "bg-black" },
    { name: "LinkedIn", icon: "in", bgColor: "bg-primary" },
    { name: "Facebook", icon: "f", bgColor: "bg-blue-500" },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl w-full max-w-4xl mx-auto shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Share link
          </h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
          >
            <X size={20} className="text-gray-500" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="px-6 pt-4">
          <div className="flex bg-gray-100 dark:bg-gray-700 rounded-full p-1">
            {["Your link", "Discount Code"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-2 px-4 text-sm font-medium rounded-full transition-colors ${
                  activeTab === tab
                    ? "bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm"
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {activeTab === "Your link" ? (
            <div className="space-y-6">
              {/* Link Section */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Link
                </label>
                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-full px-8 py-2">
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      https://example.com/ref/user123
                    </span>
                  </div>
                  <button
                    onClick={handleCopyLink}
                    className="bg-primary hover:bg-blue-700 text-white px-8 py-2 rounded-full text-sm font-semibold transition-colors flex items-center gap-2"
                  >
                    {linkCopied ? "Copied" : "Copy"}
                  </button>
                </div>
              </div>

              {/* Social Media Section */}
              <div>
                <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 my-3">
                  Share on social media
                </h3>
                <div className="flex gap-3">
                  {socialButtons.map((social) => (
                    <button
                      key={social.name}
                      className={`${social.bgColor} text-white w-10 h-10 rounded-full flex items-center justify-center hover:opacity-90 transition-opacity`}
                      title={social.name}
                    >
                      <span className=" font-bold text-2xl">{social.icon}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Discount Code Section */}
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <h3 className="text-sm 3xl:text-base font-semibold text-gray-900 dark:text-white mb-1">
                  Referral Discount Code
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  Share this code with friends to make them save 5%
                </p>

                <div>
                  <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">
                    Code
                  </label>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-full px-6 py-2">
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        USER123
                      </span>
                    </div>
                    <button
                      onClick={handleCopyCode}
                      className="p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors"
                      title="Copy code"
                    >
                      {codeCopied ? (
                        <Check size={16} className="text-green-600" />
                      ) : (
                        <Copy size={16} className="text-gray-500" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 pb-6">
          <button
            onClick={onClose}
            className="w-full bg-gray-100 mt-4 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 py-3 px-4 rounded-full border text-sm font-semibold transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

// Demo component to show the modal
const Modal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className=" border hidden md:block rounded-full px-2 md:px-4 py-2 bg-card-foreground font-semibold dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-xs md:text-sm"
      >
        Share Link
      </button>

      <ShareLinkModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default Modal;
