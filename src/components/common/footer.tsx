import { Company, Solution, WhatweDo } from "@/app/utils/constants";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="bg-footerPurple text-white px-10 py-6">
        <div className="flex flex-col md:flex-row gap-6 md:gap-0 flex-1 items-start justify-between">
          <div className="flex-1 md:mr-10">
            <div className="relative w-[188px] h-[72px]">
              <Image src={"/tobams-logo.png"} alt="tobams_logo" fill />
            </div>
            <p className="text-base">
              Tobams Group is an innovative consultancy firm reshaping the
              future of tech talent development in Africa, specializing in
              talent acquisition, internships, and skill development with a
              global perspective.
            </p>
            <div className="flex gap-3 mt-4">
              <div className="bg-white rounded-full md:h-[30px] h-[25px] w-[25px] md:w-[30px] relative">
                <Image
                  src={"/linkedin.png"}
                  alt="linkedin_logo"
                  fill
                  className="p-1"
                />
              </div>
              <div className="bg-white rounded-full md:h-[30px] h-[25px] w-[25px] md:w-[30px] relative">
                <Image
                  src={"/instagram.png"}
                  alt="linkedin_logo"
                  fill
                  className="p-1"
                />
              </div>
              <div className="bg-white rounded-full md:h-[30px] h-[25px] w-[25px] md:w-[30px] relative">
                <Image
                  src={"/X.png"}
                  alt="linkedin_logo"
                  fill
                  className="p-1"
                />
              </div>
            </div>
          </div>
          <div className="flex-1">
            <p className="mb-2">What We Do</p>
            <ul className="text-sm">
              {WhatweDo.map((item, index) => (
                <li key={index} className="mb-1">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1">
            <p className="mb-2">Company</p>
            <ul className="text-sm">
              {Company.map((item, index) => (
                <li key={index} className="mb-1 hover:underline">
                  <Link href={"#"}>{item}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1">
            <p className="mb-2">Solutions</p>
            <ul className="text-sm">
              {Solution.map((item, index) => (
                <li key={index} className="mb-1">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="bg-[#1F131C] md:m-2 flex flex-col-reverse md:flex-row gap-10 p-5 relative max-md:mt-4 rounded-lg">
          <div className="relative md:w-[80%]">
            <p className="max-md:mb-2">Registered Office</p>
            <div className="flex flex-col md:flex-row items-start justify-between text-sm">
              <div className="flex-1 md:p-1 max-md:mb-5">
                <p className="text-secondary">United Kingdom</p>
                <p className="md:w-4/5 w-full">
                  07451196 (Registered by Company House) <br />
                  Vine Cottages, 215 North Street, Romford, Essex, United
                  Kingdom, RM1 4QA
                </p>
              </div>
              {/* <hr className="rotate-90 bg-white h-1 absolute top-0 bottom-0" /> */}
              <div className="border border-white/10 top-0 bottom-0 absolute left-1/2 hidden md:block" />
              <div className="flex-1 md:p-1 md:ml-10">
                <p className="text-secondary">Nigeria</p>
                <p className="md:w-[90%] w-full">
                  RC 1048722 (Registered by the Corporate Affairs Commission){" "}
                  <br /> 4, Muaz Close, Angwar-Rimi
                </p>
              </div>
            </div>
          </div>
          <div className="border border-white/10 top-5 bottom-5 absolute right-[25%] hidden md:block" />
          <div className="md:w-[20%]">
            <p className="mb-2">Contact Information</p>
            <div className="flex items-center text-sm gap-3 mb-2">
              <Mail className="text-secondary w-5 h-5" />
              theteam@tobamsgroup.com
            </div>
            <div className="flex items-center text-sm gap-3">
              <Phone className="text-secondary w-5 h-5" />
              +447886600748
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center justify-between text-sm text-white p-3 max-md:text-center">
          Copyright &copy; Tobams Group. {currentYear}. All rights reserved.
          <ul className="flex gap-4 items-center max-md:flex-wrap max-md:my-4">
            <li className="hover:underline max-md:flex-1 max-md:w-full">
              <Link href={"#"}>Terms and Conditions</Link>
            </li>
            <li className="hover:underline max-md:flex-1 max-md:w-full">
              <Link href={"#"}>Privacy Policy</Link>
            </li>
            <li className="hover:underline max-md:flex-1 max-md:min-w-full">
              <Link href={"#"}>Cookies Policy</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
