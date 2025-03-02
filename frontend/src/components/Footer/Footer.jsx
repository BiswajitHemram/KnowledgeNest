import React from "react";
import { pageLogo } from "../../assets/logo";
import { FaTwitter, FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="p mt-20 bg-[#101828] p-3 py-10 text-[16px] text-[#EAECF0] lg:px-20 2xl:container 2xl:mx-auto">
      <div className="flex flex-col gap-10 md:flex-row">
        <div>
          <img src={pageLogo} alt="" className="mb-8 w-[80px]" />
          <p>Top learning experiences that create more talent in the world.</p>
        </div>
        <div className="self-center md:flex md:w-full md:justify-between md:self-auto lg:justify-evenly">
          <ol>
            <li className="mb-4 font-semibold text-[#98A2B3]">Product</li>
            <li className="mb-2 font-medium">Overview</li>
            <li className="mb-2 font-medium">Feature</li>
            <li className="mb-2 font-medium">Solutions</li>
            <li className="mb-2 font-medium">Tutorials</li>
            <li className="mb-2 font-medium">Pricing</li>
          </ol>
          <ol>
            <li className="mt-7 mb-4 font-semibold text-[#98A2B3] md:mt-0">
              Company
            </li>
            <li className="mb-2 font-medium">About us</li>
            <li className="mb-2 font-medium">Careers</li>
            <li className="mb-2 font-medium">Press</li>
            <li className="mb-2 font-medium">News</li>
          </ol>
          <ol>
            <li className="mt-7 mb-4 font-semibold text-[#98A2B3] md:mt-0">
              Social
            </li>
            <li className="mb-2 font-medium">Twitter</li>
            <li className="mb-2 font-medium">LinkedIn</li>
            <li className="mb-2 font-medium">GitHub</li>
            <li className="mb-2 font-medium">Dribbble</li>
          </ol>
          <ol>
            <li className="mt-7 mb-4 font-semibold text-[#98A2B3] md:mt-0">
              Legal
            </li>
            <li className="mb-2 font-medium">Terms</li>
            <li className="mb-2 font-medium">Privacy</li>
            <li className="mb-2 font-medium">Cookies</li>
            <li className="mb-2 font-medium">Contact</li>
          </ol>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-5 text-[#98A2B3] md:flex-row md:justify-between">
        <p className="order-2 md:order-1">
          © {new Date().getFullYear()} Ed-Circle. All rights reserved.
        </p>
        <div className="order-1 flex justify-center gap-10 text-2xl md:order-2">
          <FaTwitter />
          <FaLinkedin />
          <FaFacebook />
          <FaGithub />
        </div>
      </div>
    </div>
  );
}
