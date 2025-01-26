"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { ChevronDown, Menu, UserCircle, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { NavigationMenuItem } from "@radix-ui/react-navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { navItems } from "@/app/utils/constants";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <header className="fixed top-0 left-0 right-0 z-50 w-full border-b bg-white">
        <div className="flex justify-between items-center md:px-10 px-3 my-2 w-full h-10">
          <div className="relative md:h-[60px] h-[42px] md:w-[165px] w-[123px]">
            <Image
              src={"/tobams-logo.png"}
              alt="logo"
              fill
              //   width={165}
              //   height={60}
            />
          </div>
          {/* <div className="relative w">
          </div> */}
          {/* Hi */}
          <div className="hidden md:flex items-center gap-2">
            <Button
              size="sm"
              className="bg-primary hover:bg-primary/90 text-white"
            >
              <UserCircle className="h-5 w-5 mr-2" />
              Account
              <ChevronDown />
            </Button>
            <Button size="sm" className="bg-secondary hover:bg-secondary/90">
              Take Assessment
            </Button>
          </div>
          <div className="block md:hidden my-auto">
            <DropdownMenu open={menuOpen} onOpenChange={setMenuOpen}>
              <DropdownMenuTrigger>
                <div className="p-1 h-fit w-fit cursor-pointer bg-primary text-white rounded-lg">
                  {menuOpen ? <X /> : <Menu />}
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {navItems.map((item, index) => (
                  <DropdownMenuItem key={index} className="cursor-pointer">
                    {item}
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuLabel className="flex bg-primary text-white cursor-pointer">
                  <UserCircle className="h-5 w-5 mr-2" />
                  Account
                </DropdownMenuLabel>
                {/* <DropdownMenuSeparator /> */}
                <hr />
                <DropdownMenuLabel className="flex bg-primary text-white cursor-pointer">
                  Assessment
                </DropdownMenuLabel>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <hr className="bg-primary h-[1px] hidden md:block" />
        <div className="py-1 hidden md:flex">
          <NavigationMenu className="items-center justify-center mx-auto">
            <NavigationMenuList className="gap-1">
              {navItems.map((item, index) => (
                <NavigationMenuItem
                  key={index}
                  className="hover:border-b-2 hover:border-b-black hover:bg-none transition-all duration-300"
                >
                  <NavigationMenuTrigger>{item}</NavigationMenuTrigger>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
