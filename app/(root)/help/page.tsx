"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FiSearch, FiChevronDown, FiChevronUp } from "react-icons/fi";

const Help = () => {
  const [activeCategory, setActiveCategory] = useState("All questions");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("FAQ");
  const [expandedFAQ, setExpandedFAQ] = useState(
    "How does the affiliate program work?"
  );

  const categories = [
    "All questions",
    "Account & Profile",
    "Billing & Payments",
    "Features & Usage",
    "Troubleshooting",
    "Mobile & Apps",
  ];

  const faqs = [
    {
      id: "affiliate-program",
      question: "How does the affiliate program work?",
      answer:
        "Once you sign up for our affiliate program, you'll receive a unique referral link. Share this link with your audience, and whenever someone signs up or makes a purchase through it, you'll earn a commission. You can track your referrals and earnings in your affiliate dashboard.",
    },
    {
      id: "earnings",
      question: "How much can I learn?",
      answer:
        "Your earnings depend on your referral activity and the commission structure. Most affiliates earn between $50-$500 per month, with top performers earning significantly more.",
    },
    {
      id: "payment",
      question: "When and how do I get paid?",
      answer:
        "Payments are processed monthly, typically within the first week of each month. You can receive payments via PayPal, bank transfer, or crypto depending on your preference and minimum threshold requirements.",
    },
    {
      id: "cookie-duration",
      question: "How long does the referral cookie last?",
      answer:
        "Our referral cookies last for 30 days, meaning you'll receive credit for any conversions that happen within 30 days of someone clicking your referral link.",
    },
    {
      id: "social-media",
      question: "Can I promote the affiliate program on social media?",
      answer:
        "Yes, you can promote on social media platforms following our guidelines. Make sure to disclose your affiliate relationship and comply with each platform's advertising policies.",
    },
  ];

  const toggleFAQ = (faqId: any) => {
    setExpandedFAQ(expandedFAQ === faqId ? null : faqId);
  };

  return (
    <div className="w-full bg-card  rounded-[10px] border flex flex-col gap-2 2xl:gap-4 p-3 2xl:p-4 3xl:p-5">
      {/* Header */}
      <div className="w-full flex items-center justify-between border-b border-[#E3E3E4] dark:border-[#0F2430] pb-4">
        <div className="flex items-center gap-2">
          <Image
            src={"/logo.png"}
            alt="logo"
            width={35}
            height={35}
            priority
            className="md:hidden"
          />

          <h2 className="text-lg 2xl:text-xl font-semibold">Help</h2>
        </div>
      </div>

      {/* Hero Section */}
      <div
        className="relative max-w-6xl 3xl:max-w-7xl w-full mx-auto h-52 2xl:h-64 bg-gradient-to-r from-purple-600 via-purple-700 to-blue-600 rounded-[10px] flex flex-col items-center justify-center text-white overflow-hidden"
        style={{
          backgroundImage: "url('/help_bg.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="text-center z-10">
          <h2 className="text-2xl 2xl:text-3xl font-bold mb-2">
            How can we help you?
          </h2>
          <p className="text-sm 2xl:text-base opacity-90 mb-6">
            Find answers to your questions or browse our video tutorials
          </p>

          {/* Search Bar */}
          <div className="relative w-full max-w-xl mx-auto">
            <FiSearch
              className="absolute z-50 left-8 md:left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-2 md:py-3 text-xs 2xl:text-sm 3xl:text-base bg-[#28303F99] backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/30"
            />
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="space-y-1 max-w-6xl 3xl:max-w-7xl w-full mx-auto">
        <div className="flex md:items-center flex-col md:flex-row    gap-4 items-start py-4 justify-between">
          <div>
            <h3 className="text-lg 2xl:text-xl font-semibold">
              Frequently Asked Questions
            </h3>
            <p className="text-gray-500 text-sm">
              Search our help center or browse common topics
            </p>
          </div>
          <div className="flex items-center space-x-1 bg-card-foreground rounded-full w-full md:w-fit p-1">
            <button
              className={`px-3 xl:px-12 py-2 rounded-full text-nowrap flex-1 text-sm font-semibold transition ${
                activeTab === "FAQ"
                  ? "bg-card text-foreground shadow-sm"
                  : "text-gray-500 dark:text-gray-300 hover:text-foreground"
              }`}
            >
              FAQ
            </button>
            <button
              className={`px-3 py-2 rounded-full text-nowrap flex-1 text-sm font-semibold transition ${
                activeTab === "Video Tutorials"
                  ? "bg-card text-foreground shadow-sm"
                  : "text-gray-500 dark:text-gray-300 hover:text-foreground"
              }`}
            >
              Video Tutorials
            </button>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 bg-card-foreground p-3 rounded-[10px] 2xl:p-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4  2xl:px-6 py-2 2xl:py-2.5 font-semibold flex-1 text-nowrap text-sm rounded-full capitalize transition-colors ${
                activeCategory === category
                  ? "bg-card text-foreground "
                  : "text-gray-600 dark:text-gray-400 hover:bg-card-foreground hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-1 bg-card-foreground rounded-[10px] border p-1 max-w-6xl 3xl:max-w-7xl w-full mx-auto">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-card rounded-[10px] overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-opacity-80 transition-colors"
              >
                <span className="font-medium text-sm 2xl:text-base">
                  {faq.question}
                </span>
                {expandedFAQ === faq.id ? (
                  <FiChevronUp
                    className="text-gray-500 flex-shrink-0 ml-2"
                    size={20}
                  />
                ) : (
                  <FiChevronDown
                    className="text-gray-500 flex-shrink-0 ml-2"
                    size={20}
                  />
                )}
              </button>

              {expandedFAQ === faq.id && (
                <div className="px-4 pb-4">
                  <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-gray-600 dark:text-gray-300 text-sm 2xl:text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Full FAQ Button */}
        <div className="flex justify-center pt-4">
          <button className="bg-primary hover:bg-blue-700 text-white px-8 py-2  rounded-full text-xs 2xl:text-sm font-semibold transition-colors">
            Full FAQ
          </button>
        </div>
      </div>
    </div>
  );
};

export default Help;
