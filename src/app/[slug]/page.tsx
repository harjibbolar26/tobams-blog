"use client";

import React from "react";
import Image from "next/image";
import { notFound, useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import BlogCard, { dateFormat } from "@/components/common/blogCard";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { IBlogPost, IBlogPostDetails } from "@/app/utils/types";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";

const BlogDetails = ({ params }: { params: Promise<{ slug: string }> }) => {
  const router = useRouter();
  const { slug } = React.use(params);
  const blogId = slug.split("-").pop();
  if (!blogId) {
    notFound();
  }

  const {
    data: blog,
    isLoading,
    isError,
  } = useQuery<IBlogPostDetails>({
    queryKey: ["blogDetails"],
    queryFn: async () => {
      const blogUrl = process.env.NEXT_PUBLIC_BLOG_URL;
      if (!blogUrl) {
        console.error(
          "Environment variable NEXT_PUBLIC_BLOG_URL is not defined."
        );
        throw new Error("BLOG_URL is not defined");
      }
      const response = await axios.get(`${blogUrl}/${blogId}`);
      // console.log(response.data);
      return response.data;
    },
    enabled: !!blogId,
  });

  const { data: allBlogs } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const blogUrl = process.env.NEXT_PUBLIC_BLOG_URL;
      if (!blogUrl) {
        console.error(
          "Environment variable NEXT_PUBLIC_BLOG_URL is not defined."
        );
        throw new Error("BLOG_URL is not defined");
      }
      const response = await axios.get(blogUrl);
      console.log(response.data);
      return response.data;
    },
  });

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  if (isError) {
    return <div className="mt-24">Error loading blog details</div>;
  }

  return (
    <div className="mt-3 md:mt-24 p-5">
      {isLoading ? (
        <div className="border-[2px] border-secondary-1 rounded-xl p-4 w-full relative space-y-3 mt-10">
          <Skeleton className="w-full  h-8 bg-[#ddd]" />
          <Skeleton className="w-full  h-4 bg-[#ddd]" />
          <Skeleton className="w-full h-[60vh] bg-[#ddd]" />
          <Skeleton className="w-full  h-8 bg-[#ddd]" />
          <Skeleton className="w-full  h-4 bg-[#ddd]" />
        </div>
      ) : (
        <article className="container w-full py-12 mx-auto">
          <div className="space-y-4">
            <Badge className="mb-4 bg-[#151515]/20 text-primary">
              {blog && blog.tags?.join(", ")}
            </Badge>

            <h1 className="text-xl sm:text-2xl md:text-4xl font-bold tracking-tight lg:text-5xl">
              {blog?.title}
            </h1>

            <div className="text-sm text-muted-foreground">
              {dateFormat(blog?.created_at || "")}
              {/* ·{" "}
              {blog?.reading_time_minutes}{" "}
              {blog?.reading_time_minutes === 1 ? "min" : "mins"} {""}
              read */}
            </div>
          </div>

          <div className="relative mt-8 h-60 sm:h-80 md:h-[500px] overflow-hidden rounded-lg shadow-md">
            <Image
              src={blog?.cover_image || "/hero.jpg"}
              alt={blog?.title || "blog"}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div
            className="prose prose-gray mx-auto mt-12 max-w-none dark:prose-invert overflow-auto hide-scrollbar px-3 sm:px-6 md:px-10"
            dangerouslySetInnerHTML={{ __html: blog?.body_html || "" }}
          />

          <div className="my-2 md:my-8">
            <div className="mx-auto flex justify-center items-center">
              <Link
                href={"/"}
                className="text-center text-primary text-sm font-bold mb-10 mt-6 mx-auto hover:underline hover:text-primary/80"
              >
                More articles
              </Link>
            </div>
            <div className="">
              <div className="mx-auto max-w-2xl lg:max-w-none">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {/* Assuming `posts` is an array of blog posts */}
                  {allBlogs
                    ?.sort(() => 0.5 - Math.random())
                    .slice(0, 3)
                    .map((blog: IBlogPost) => (
                      <BlogCard key={blog.id} blog={blog} />
                    ))}
                </div>
              </div>
              <div className="flex items-center justify-center mx-auto mt-8 mb-4">
                <Button
                  variant={"ghost"}
                  className="border border-primary hover:bg-primary hover:text-white transition-colors duration-300"
                  onClick={() => {
                    router.push("/");
                  }}
                >
                  Explore More
                </Button>
              </div>
            </div>
          </div>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
