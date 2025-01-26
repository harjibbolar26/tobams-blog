import { IBlogPost } from "@/app/utils/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { format } from "date-fns";

interface BlogCardProps {
  blog: IBlogPost;
}

export const dateFormat = (isoDate: string) => {
  return format(new Date(isoDate), "dd MMM yyyy");
};

const BlogCard = ({ blog }: BlogCardProps) => {
  return (
    <div>
      <div className="group relative flex flex-col overflow-hidden rounded-lg border bg-white h-[400px]">
        <div className="relative h-[200px] overflow-hidden">
          <div className="absolute left-4 top-4 z-10">
            <span className="inline-flex items-center rounded-md bg-white/90 px-2 py-1 text-xs font-medium text-gray-700">
              {blog.tags}
            </span>
          </div>
          <Image
            src={blog.cover_image || "/hero.jpg"}
            alt={blog.title}
            width={400}
            height={200}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-1 flex-col justify-between p-6 overflow-hidden">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-900 overflow-hidden text-ellipsis line-clamp-2">
              <Link href={`/${blog.slug}-${blog.id}`}>
                <span className="absolute inset-0" />
                {blog.title}
              </Link>
            </h3>
            <p className="mt-3 text-sm leading-6 text-gray-600 overflow-hidden text-ellipsis line-clamp-2">
              {blog.description}
            </p>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <div className="flex space-x-1 text-sm text-gray-500">
              {/* <span>{blog.created_at.split("T")[0]}</span> */}
              <span>{dateFormat(blog.created_at)}</span>
              <span aria-hidden="true">|</span>
              <span>
                {blog.reading_time_minutes}{" "}
                {blog.reading_time_minutes === 1 ? "min" : "mins"} read
              </span>
            </div>
            <Link
              href={`/${blog.slug}-${blog.id}`}
              className="text-sm font-medium text-primary hover:text-primary/10 border-b border-b-primary pb-[1px]"
            >
              View post
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
