"use client";
import React, { useState } from "react";
import {
  Search,
  MoreHorizontal,
  ChevronDown,
  ChevronLeftSquareIcon,
  ChevronLeft,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

const ManageSignals = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All signals");
  const [sortBy, setSortBy] = useState("Newer first");

  // Mock data for signals
  const signals = [
    {
      id: "SIG - 1234",
      asset: "BTC/USD",
      type: "Buy",
      entry: "$42,500",
      target: "$42,500",
      stopLoss: "$41,000",
      status: "Active",
    },
    {
      id: "SIG - 1234",
      asset: "BTC/USD",
      type: "Buy",
      entry: "$42,500",
      target: "$42,500",
      stopLoss: "$41,000",
      status: "Active",
    },
    {
      id: "SIG - 1234",
      asset: "BTC/USD",
      type: "Buy",
      entry: "$42,500",
      target: "$42,500",
      stopLoss: "$41,000",
      status: "Active",
    },
    {
      id: "SIG - 1234",
      asset: "BTC/USD",
      type: "Buy",
      entry: "$42,500",
      target: "$42,500",
      stopLoss: "$41,000",
      status: "Active",
    },
    {
      id: "SIG - 1234",
      asset: "BTC/USD",
      type: "Buy",
      entry: "$42,500",
      target: "$42,500",
      stopLoss: "$41,000",
      status: "Active",
    },
    {
      id: "SIG - 1234",
      asset: "BTC/USD",
      type: "Buy",
      entry: "$42,500",
      target: "$42,500",
      stopLoss: "$41,000",
      status: "Active",
    },
    {
      id: "SIG - 1234",
      asset: "BTC/USD",
      type: "Buy",
      entry: "$42,500",
      target: "$42,500",
      stopLoss: "$41,000",
      status: "Active",
    },
  ];

  return (
    <div className="w-full bg-card rounded-[10px]  h-full border flex flex-col gap-4 2xl:gap-6 p-3 2xl:p-4 3xl:p-5">
      {/* Breadcrumb */}
      <div className="flex items-center border-b pb-4 text-sm ">
        <Link
          href={"/signals"}
          className="hover:text-foreground flex font-semibold items-center cursor-pointer"
        >
          <ChevronLeft className=" inline-block" size={18} />
          Signals
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground 3xl:text-base font-medium">
          Manage signals
        </span>
        <div className="ml-auto">
          <button className="px-4 py-2 bg-card-foreground border rounded-md text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800">
            Manage plans
          </button>
        </div>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between xl:px-12">
        <div>
          <h1 className="text-lg 2xl:text-xl font-semibold">Manage signals</h1>
          <p className="text-gray-500 dark:text-gray-300 text-sm mt-1">
            Manage your trading signals
          </p>
        </div>
        {/* <button className="px-4 py-2 bg-primary text-white rounded-md text-sm font-medium hover:bg-primary/90">
          New signals
        </button> */}
      </div>

      {/* Search and Filters */}
      <div className="flex items-center justify-between gap-4 xl:px-12">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search signals"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-full bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
          />
        </div>

        <div className="flex items-center gap-3">
          {/* Status Filter */}
          <div className="relative">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="appearance-none bg-background border rounded-full px-3 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary cursor-pointer"
            >
              <option>All signals</option>
              <option>Active</option>
              <option>Inactive</option>
              <option>Completed</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
          </div>

          {/* Sort Filter */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-background border rounded-full px-3 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary cursor-pointer"
            >
              <option>Newer first</option>
              <option>Older first</option>
              <option>Most profitable</option>
              <option>Least profitable</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-card-foreground rounded-[10px] border p-1 xl:mx-12">
        <div className="bg-card rounded-[10px] overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="border-b border-gray-200 dark:border-gray-700">
                <TableHead className="text-gray-500 dark:text-gray-400 font-medium text-xs uppercase tracking-wider py-4 px-6">
                  ID
                </TableHead>
                <TableHead className="text-gray-500 dark:text-gray-400 font-medium text-xs uppercase tracking-wider py-4 px-6">
                  ASSET
                </TableHead>
                <TableHead className="text-gray-500 dark:text-gray-400 font-medium text-xs uppercase tracking-wider py-4 px-6">
                  TYPE
                </TableHead>
                <TableHead className="text-gray-500 dark:text-gray-400 font-medium text-xs uppercase tracking-wider py-4 px-6">
                  ENTRY
                </TableHead>
                <TableHead className="text-gray-500 dark:text-gray-400 font-medium text-xs uppercase tracking-wider py-4 px-6">
                  TARGET
                </TableHead>
                <TableHead className="text-gray-500 dark:text-gray-400 font-medium text-xs uppercase tracking-wider py-4 px-6">
                  STOP LOSS
                </TableHead>
                <TableHead className="text-gray-500 dark:text-gray-400 font-medium text-xs uppercase tracking-wider py-4 px-6">
                  STATUS
                </TableHead>
                <TableHead className="text-gray-500 dark:text-gray-400 font-medium text-xs uppercase tracking-wider py-4 px-6">
                  ACTION
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {signals.map((signal, index) => (
                <TableRow
                  key={index}
                  className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50/50 dark:hover:bg-gray-800/50"
                >
                  <TableCell className="py-4 px-6 text-sm font-medium text-foreground">
                    {signal.id}
                  </TableCell>
                  <TableCell className="py-4 px-6 text-sm text-foreground">
                    {signal.asset}
                  </TableCell>
                  <TableCell className="py-4 px-6">
                    <span
                      className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                        signal.type === "Buy"
                          ? "bg-green-500 text-white"
                          : "bg-red-500 text-white"
                      }`}
                    >
                      {signal.type}
                    </span>
                  </TableCell>
                  <TableCell className="py-4 px-6 text-sm text-foreground">
                    {signal.entry}
                  </TableCell>
                  <TableCell className="py-4 px-6 text-sm text-foreground">
                    {signal.target}
                  </TableCell>
                  <TableCell className="py-4 px-6 text-sm text-foreground">
                    {signal.stopLoss}
                  </TableCell>
                  <TableCell className="py-4 px-6">
                    <span
                      className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                        signal.status === "Active"
                          ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
                          : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400"
                      }`}
                    >
                      {signal.status}
                    </span>
                  </TableCell>
                  <TableCell className="py-4 px-6">
                    <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors">
                      <MoreHorizontal className="w-4 h-4 text-gray-500" />
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default ManageSignals;
