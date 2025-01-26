import React from "react";
import { Button } from "../ui/button";

const Newsletter = () => {
  return (
    <div className="bg-primary/10 p-4 sm:p-8 md:p-12 m-5 md:m-10 rounded-md">
      <p className="font-bold text-lg md:text-2xl mb-3 md:mb-2">
        Sign Up for Our Newsletter
      </p>
      <p className="mb-6 md:mb-2">
        Subscribe to receive our latest company updates
      </p>
      <div className="flex flex-col md:flex-row items-start md:items-center w-full gap-3 md:gap-8">
        <input
          type="text"
          name="search"
          placeholder="Enter your email"
          className="bg-transparent border border-primary/50 p-2 w-full focus:outline-none rounded-md text-sm"
        />
        <Button className="bg-primary p-1 px-2">Subscribe</Button>
      </div>
    </div>
  );
};

export default Newsletter;
