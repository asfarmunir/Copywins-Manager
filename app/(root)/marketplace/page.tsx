"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaUserGroup } from "react-icons/fa6";
import {
  FiSearch,
  FiChevronDown,
  FiUser,
  FiStar,
  FiUsers,
} from "react-icons/fi";

const Marketplace = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All categories");
  const [sortBy, setSortBy] = useState("Newest");
  const [showFilters, setShowFilters] = useState(false);

  const categories = ["All categories", "Sports", "Trading"];

  const courses = [
    {
      id: 1,
      title: "Web development course",
      description: "24/7 assistance with algebra, calculus, and statistics.",
      instructor: "Jane Smith",
      rating: 4.8,
      students: 6245,
      price: "$49",
      category: "Development",
      image: "/course1.jpg",
    },
    {
      id: 2,
      title: "Web development course",
      description: "24/7 assistance with algebra, calculus, and statistics.",
      instructor: "Jane Smith",
      rating: 4.9,
      students: 8245,
      price: "$59",
      category: "Development",
      image: "/course2.jpg",
    },
    {
      id: 3,
      title: "Web development course",
      description: "24/7 assistance with algebra, calculus, and statistics.",
      instructor: "Jane Smith",
      rating: 4.7,
      students: 5245,
      price: "$39",
      category: "Development",
      image: "/course3.jpg",
    },
    {
      id: 4,
      title: "Trading Masterclass",
      description: "Learn advanced trading strategies and market analysis.",
      instructor: "John Doe",
      rating: 4.6,
      students: 3245,
      price: "$79",
      category: "Trading",
      image: "/course4.jpg",
    },
    {
      id: 5,
      title: "Sports Analytics Course",
      description: "Data-driven insights for sports performance optimization.",
      instructor: "Mike Johnson",
      rating: 4.5,
      students: 2845,
      price: "$65",
      category: "Sports",
      image: "/course5.jpg",
    },
    {
      id: 6,
      title: "AI Bot Development",
      description: "Build intelligent bots for various applications.",
      instructor: "Sarah Wilson",
      rating: 4.8,
      students: 4125,
      price: "$89",
      category: "Bots",
      image: "/course6.jpg",
    },
  ];

  const filteredCourses = courses.filter((course) => {
    const matchesCategory =
      activeCategory === "All categories" || course.category === activeCategory;
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const CourseCard = ({ course }: any) => (
    <div className="bg-card rounded-[10px] border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-all duration-300 group">
      {/* Course Image */}
      <div className="h-48 bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20" />
        <div className="absolute top-3 left-3 bg-card-foreground text-xs px-2 py-1 rounded-full">
          {course.category}
        </div>
      </div>

      {/* Course Content */}
      <div className="p-4">
        <div className="flex items-center justify-between w-full">
          <h3 className="font-semibold text-base 2xl:text-lg mb-2 group-hover:text-primary transition-colors">
            {course.title}
          </h3>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center">
              <FiUser size={12} />
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {course.instructor}
            </span>
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
          {course.description}
        </p>

        {/* Instructor */}

        {/* Rating and Students */}
        <div className="flex items-center justify-start gap-3 mb-3">
          <div className="flex items-center gap-1 bg-yellow-50 rounded-full px-2 py-1 text-yellow-600 border border-yellow-300">
            <FiStar className="text-yellow-500 fill-current" size={16} />
            <span className="text-sm font-medium">{course.rating}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-700 dark:text-gray-400 bg-card-foreground px-2 py-1 rounded-full">
            <FaUserGroup size={14} />
            <span className="text-sm">{course.students.toLocaleString()}</span>
          </div>
        </div>

        {/* Price */}
        {/* <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-primary">{course.price}</span>
          <button className="bg-primary hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
            Enroll
          </button>
        </div> */}
      </div>
    </div>
  );

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

          <h2 className="text-lg 2xl:text-xl font-semibold">Markerplace</h2>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <FiSearch
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={16}
            />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 bg-card-foreground border border-gray-200 dark:border-gray-700 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <button className="bg-card-foreground border px-4 py-2 rounded-full text-sm font-semibold transition-colors">
            Start selling
          </button>
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
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
        </div>

        <div className="text-center z-10 px-6">
          <h2 className="text-2xl 2xl:text-3xl font-bold mb-2">
            Discover, Learn, and create with CopyWins
          </h2>
          <p className="text-sm 2xl:text-base opacity-90 mb-6">
            Access valuable resources to expand your knowledge
          </p>

          {/* Search Bar */}
          <div className="relative w-full max-w-xl mx-auto">
            <FiSearch
              className="absolute left-4 top-1/2 z-50 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search for courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-2 md:py-3 text-xs 2xl:text-sm 3xl:text-base bg-[#28303F99] backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/30"
            />
          </div>
        </div>
      </div>

      {/* Marketplace Section */}
      <div className="space-y-6 mt-6 max-w-6xl 3xl:max-w-7xl w-full mx-auto">
        <div className="flex md:items-center  gap-4 items-start justify-between">
          <div>
            <h3 className="text-lg 2xl:text-xl font-semibold">
              All marketplace
            </h3>
            <p className="text-gray-500 text-sm">
              Explore a marketplace built just for you
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden md:block    ">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-card-foreground border border-gray-200 dark:border-gray-700 rounded-full px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                <option>Newest</option>
                <option>Most Popular</option>
                <option>Highest Rated</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
              <FiChevronDown
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={16}
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="bg-card-foreground hover:bg-gray-100 dark:hover:bg-gray-700 px-4 py-2 rounded-full text-sm font-medium transition-colors"
            >
              Filters
            </button>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 bg-card-foreground p-1.5 rounded-full ">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 2xl:px-6 py-2 2xl:py-2.5 flex-1 font-semibold text-nowrap text-sm rounded-full capitalize transition-colors ${
                activeCategory === category
                  ? "bg-card text-foreground shadow-sm"
                  : "text-gray-600 dark:text-gray-400 hover:bg-card hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <Link href={`/marketplace/courseDetail`} key={course.id}>
              <CourseCard course={course} />
            </Link>
          ))}
        </div>

        {/* Load More Button */}
        <div className="flex justify-center pt-4">
          <button className="bg-card-foreground hover:bg-gray-100 dark:hover:bg-gray-700 text-foreground px-8 py-3 rounded-full text-sm font-semibold transition-colors">
            Load More Courses
          </button>
        </div>
      </div>

      {/* Call to Action Section */}
      <div
        className="relative max-w-6xl 3xl:max-w-7xl w-full mx-auto  bg-gradient-to-r from-purple-600 via-purple-700 to-blue-600 rounded-[10px] flex flex-col items-center justify-center text-white overflow-hidden mt-8"
        style={{
          backgroundImage: "url('/help_bg.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 opacity-20 ">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
        </div>

        <div className="text-center z-10 px-4 pt-16 pb-8">
          <h3 className="text-2xl 2xl:text-4xl font-bold mb-2">
            Share your knowledge
          </h3>
          <p className="text-sm 2xl:text-base opacity-90 mb-6 max-w-2xl">
            Join thousands of instructors and creators who are sharing their
            knowledge and earning income.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-purple-600 hover:bg-gray-100 px-6 xl:px-12 py-2 rounded-[8px] font-semibold transition-colors">
              Create a course
            </button>
            <button className="bg-black  text-white px-6 xl:px-12 py-2 rounded-[8px] font-semibold transition-colors border border-white/20">
              Develop an AI bot
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-8 gap-1 max-w-6xl 3xl:max-w-7xl w-full mx-auto bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-[10px] p-2">
          <div className="text-center bg-[#28303F99] rounded-lg w-full py-8">
            <h4 className="text-2xl text-white 2xl:text-3xl font-bold text-foreground mb-2">
              10,000+
            </h4>
            <p className=" font-medium">Courses Available</p>
          </div>
          <div className="text-center bg-[#28303F99] rounded-lg w-full py-8">
            <h4 className="text-2xl text-white 2xl:text-3xl font-bold text-foreground mb-2">
              2,500+
            </h4>
            <p className=" font-medium">Educational Bots</p>
          </div>
          <div className="text-center bg-[#28303F99] rounded-lg w-full py-8">
            <h4 className="text-2xl text-white 2xl:text-3xl font-bold text-foreground mb-2">
              1M+
            </h4>
            <p className=" font-medium">Active Learners</p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
    </div>
  );
};

export default Marketplace;
