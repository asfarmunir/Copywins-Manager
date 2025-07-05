"use client";
import TradingSignalSheet from "@/components/shared/SendSignal";
import { LucideSendHorizontal } from "lucide-react";
import React, { useState } from "react";
import {
  FiSend,
  FiPaperclip,
  FiSmile,
  FiMoreHorizontal,
  FiUsers,
  FiBarChart,
  FiCalendar,
  FiClock,
} from "react-icons/fi";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

const TradingChat = () => {
  const [selectedGroup, setSelectedGroup] = useState("Trading signals");
  const [message, setMessage] = useState("");
  const [activeTab, setActiveTab] = useState("Messages");

  const groups = [
    {
      name: "Trading signals",
      status: "Active now",
      time: "12:11 AM",
      hasNotification: true,
    },
    {
      name: "Market analysis",
      status: "2 new messages",
      time: "12:11 AM",
      hasNotification: false,
    },
    {
      name: "Crypto news",
      status: "Last active: 2h ago",
      time: "12:11 AM",
      hasNotification: false,
    },
  ];

  const messages = [
    {
      id: 1,
      sender: "George Chichua",
      role: "Signal provider",
      content:
        "Remember to always use proper risk management with these signals",
      time: "9:46 PM",
      reads: 3,
      date: "Yesterday 9:46 AM",
      isDateHeader: true,
    },
    {
      id: 2,
      sender: "George Chichua",
      role: "Trading signal",
      isSignal: true,
      signal: {
        pair: "BTC/USD",
        type: "Buy",
        duration: "2h 15m",
        scheduled: "Today, 10:00 UTC",
        entry: "$42,500 - $43,200",
        target: "$45,000",
        stop: "$41,000",
      },
      time: "9:46 PM",
      reads: 3,
      date: "Today 12:30 AM",
      isDateHeader: true,
    },
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      console.log("Sending message:", message);
      setMessage("");
    }
  };

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex min-h-full bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      <div className="w-80 bg-card border-r border-gray-200 dark:border-gray-700 flex flex-col">
        {/* Sidebar Header */}
        <div className="p-4 xl:py-[1.35rem] border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Message Group
          </h2>
        </div>

        {/* Groups Section */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="mb-4">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">
              Groups
            </h3>
            <div className="space-y-1">
              {groups.map((group, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedGroup(group.name)}
                  className={`flex items-center p-2 rounded-lg cursor-pointer transition-colors ${
                    selectedGroup === group.name
                      ? "bg-card-foreground"
                      : "hover:bg-gray-50 dark:hover:bg-gray-700"
                  }`}
                >
                  <div className="w-12 h-12 bg-gray-200 dark:bg-gray-600 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                      {group.name[0]}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                        {group.name}
                      </p>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {group.time}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                        {group.status}
                      </p>
                      {group.hasNotification && (
                        <IoCheckmarkDoneSharp color="blue" />
                      )}
                      {!group.hasNotification && (
                        <IoCheckmarkDoneSharp color="gray" />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Post Broadcast Button */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <TradingSignalSheet />
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="bg-card border-b border-gray-200 dark:border-gray-700 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-200 dark:bg-gray-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                  T
                </span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Trading signals
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  128 Members | 20 Online
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1 bg-card-foreground  rounded-full p-1">
                {["Messages", "Analytics", "Members"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      activeTab === tab
                        ? "bg-white dark:bg-gray-600 text-gray-900 dark:text-white shadow-sm"
                        : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto bg-card p-4 space-y-6">
          {messages.map((msg) => (
            <div key={msg.id}>
              {msg.isDateHeader && (
                <div className="text-center mb-4">
                  <span className="text-xs text-gray-500 dark:text-gray-400 bg-card-foreground  px-3 py-1 rounded-full">
                    {msg.date}
                  </span>
                </div>
              )}

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-medium">GC</span>
                </div>

                <div className="flex-1 max-w-2xl">
                  <div className="flex items-center space-x-2 mb-2.5">
                    <span className="font-medium text-gray-900 dark:text-white">
                      {msg.sender}
                    </span>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        msg.role === "Signal provider"
                          ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                          : "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400"
                      }`}
                    >
                      {msg.role}
                    </span>
                  </div>

                  {msg.isSignal ? (
                    <div className="bg-card-foreground rounded-lg p-1.5 border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center bg-card p-3 rounded-lg justify-between mb-1.5">
                        <div className="flex items-center space-x-2">
                          <span className="font-semibold text-gray-900 dark:text-white">
                            {msg.signal.pair}
                          </span>
                          <span className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 px-2 py-1 rounded text-xs font-medium">
                            {msg.signal.type}
                          </span>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                          <div className="flex items-center space-x-1">
                            <FiClock className="w-4 h-4" />
                            <span>{msg.signal.duration}</span>
                          </div>
                          <span>Scheduled: {msg.signal.scheduled}</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-1.5">
                        <div className="text-center bg-card p-4 rounded-lg">
                          <div className="text-xs text-gray-500 dark:text-gray-400 font-semibold 2xl:text-sm mb-1">
                            Entry
                          </div>
                          <div className="font-semibold 3xl:text-lg text-gray-900 dark:text-white">
                            {msg.signal.entry}
                          </div>
                        </div>
                        <div className="text-center bg-card p-4 rounded-lg">
                          <div className="text-xs text-gray-500 dark:text-gray-400 font-semibold 2xl:text-sm mb-1">
                            Target
                          </div>
                          <div className="font-semibold 3xl:text-lg text-green-600 dark:text-green-400">
                            {msg.signal.target}
                          </div>
                        </div>
                        <div className="text-center bg-card p-4 rounded-lg">
                          <div className="text-xs text-gray-500 dark:text-gray-400 font-semibold 2xl:text-sm mb-1">
                            Stop
                          </div>
                          <div className="font-semibold 3xl:text-lg text-red-600 dark:text-red-400">
                            {msg.signal.stop}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-card-foreground rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                      <p className="text-gray-900 dark:text-white">
                        {msg.content}
                      </p>
                    </div>
                  )}

                  <div className="flex items-center justify-end space-x-2 mt-2 text-xs text-gray-500 dark:text-gray-400">
                    <span>{msg.time}</span>
                    <div className="flex items-center space-x-1">
                      <FiUsers className="w-3 h-3" />
                      <span>{msg.reads}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="bg-card border-t border-gray-200 dark:border-gray-700 p-4">
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-2">
              <button className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 rounded-lg">
                <span className="text-sm font-medium">Signal mode</span>
              </button>
              <button className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 rounded-lg">
                <FiPaperclip className="w-5 h-5" />
              </button>

              <button className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 rounded-lg">
                <FiMoreHorizontal className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 flex items-center space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Message"
                className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-full bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 rounded-lg">
                <FiSmile className="w-6 h-6" />
              </button>
              <button
                onClick={handleSendMessage}
                className=" p-2 flex items-center justify-center bg-primary text-white rounded-full hover:bg-blue-600 transition-colors"
              >
                <LucideSendHorizontal className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradingChat;
