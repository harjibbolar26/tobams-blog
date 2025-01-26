"use client";

import React, { useState } from "react";
import BlogCard from "./blogCard";
import { Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { IBlogPost } from "@/app/utils/types";
import { Skeleton } from "../ui/skeleton";

const MainBlog = () => {
  const [visibleBlogs, setVisibleBlogs] = useState(6);
  const [showAll, setShowAll] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [filterMethod, setFilterMethod] = useState("");

  const {
    data: blogs,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const response = await axios.get("https://dev.to/api/articles");
      console.log(response.data);
      return response.data;
    },
  });

  const handleLoadMore = () => {
    setVisibleBlogs(blogs.length);
    setShowAll(true);
  };

  const handleShowLess = () => {
    setVisibleBlogs(6);
    setShowAll(false);
  };

  const filteredBlogs = blogs?.filter((blog: IBlogPost) => {
    if (filterMethod === "title") {
      return blog.title.toLowerCase().includes(searchInput.toLowerCase());
    } else if (filterMethod === "tag") {
      return blog.tag_list?.some((tag) =>
        tag.toLowerCase().includes(searchInput.toLowerCase())
      );
    }
    return true;
  });

  return (
    <div className="bg-bgPurple/10 w-full h-full p-6">
      <p className="text-primary text-2xl md:text-4xl text-center mb-8">
        Stay Updated with the Latest trends in Tobams Group
      </p>
      <div className="flex items-center justify-center gap-5 md:w-2/3 mx-auto mb-8">
        <div className="flex justify-between items-center gap-3 mx-auto bg-white shadow-sm w-full rounded-md p-1 text-sm focus-within:border focus-within:border-primary">
          <input
            type="text"
            name="search"
            placeholder="Search"
            className="bg-transparent border border-none p-1 w-full focus:outline-none"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            disabled={!filterMethod}
            title={!filterMethod ? "Select a filter method" : ""}
          />
          <Search />
        </div>
        <Select onValueChange={(value) => setFilterMethod(value)}>
          <SelectTrigger className="w-[180px] bg-white">
            <SelectValue placeholder="Filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="title">Title</SelectItem>
            <SelectItem value="tag">Tag</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 mt-12">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {isLoading
              ? Array.from({ length: 6 }).map((_, index) => (
                  <div
                    className="border-[2px] border-secondary-1 rounded-xl p-4 w-full relative space-y-3"
                    key={index}
                  >
                    <Skeleton className="w-full h-64 bg-[#ddd]" />
                    <Skeleton className="w-full  h-8 bg-[#ddd]" />
                    <Skeleton className="w-full  h-4 bg-[#ddd]" />
                  </div>
                ))
              : filteredBlogs &&
                filteredBlogs
                  .slice(0, visibleBlogs)
                  .map((blog: IBlogPost) => (
                    <BlogCard key={blog.id} blog={blog} />
                  ))}
          </div>
        </div>
        {filteredBlogs && (
          <div className="flex items-center justify-center mx-auto mt-8 mb-4">
            {showAll ? (
              <Button
                variant={"ghost"}
                className="border border-primary hover:bg-primary hover:text-white transition-colors duration-300"
                onClick={handleShowLess}
              >
                Show Less
              </Button>
            ) : (
              visibleBlogs < filteredBlogs.length && (
                <Button
                  variant={"ghost"}
                  className="border border-primary hover:bg-primary hover:text-white transition-colors duration-300"
                  onClick={handleLoadMore}
                >
                  Load More
                </Button>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MainBlog;
