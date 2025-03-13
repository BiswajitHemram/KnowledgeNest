import React from "react";
import { pageLogo } from "../../assets/logo";
import { FaTwitter, FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

const footerLinks = [
  {
    title: "Product",
    links: [
      { name: "Overview", path: "overview" },
      { name: "Feature", path: "#" },
      { name: "Solutions", path: "#" },
      { name: "Tutorials", path: "#" },
      { name: "Pricing", path: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About us", path: "#" },
      { name: "Careers", path: "#" },
      { name: "Press", path: "#" },
      { name: "News", path: "#" },
    ],
  },
  {
    title: "Social",
    links: [
      { name: "Twitter", path: "#" },
      { name: "LinkedIn", path: "#" },
      { name: "GitHub", path: "#" },
      { name: "Dribbble", path: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Terms", path: "#" },
      { name: "Privacy", path: "#" },
      { name: "Cookies", path: "#" },
      { name: "Contact", path: "#" },
    ],
  },
];

const socialIcons = [
  { icon: <FaTwitter />, path: "#" },
  { icon: <FaLinkedin />, path: "#" },
  { icon: <FaFacebook />, path: "#" },
  { icon: <FaGithub />, path: "#" },
];

export default function Footer() {
  return (
    <footer className="mt-20 bg-[#101828] p-6 py-10 text-[16px] text-[#EAECF0] lg:px-20 2xl:container 2xl:mx-auto">
      <div className="flex flex-col gap-10 md:flex-row">
        <div>
          <img src={pageLogo} alt="Logo" className="mb-8 w-[80px]" />
          <p>Top learning experiences that create more talent in the world.</p>
        </div>

        <div className="self-center md:flex md:w-full md:justify-between lg:justify-evenly">
          {footerLinks.map((section, index) => (
            <ol key={index}>
              <li className="mb-4 font-semibold text-[#98A2B3]">
                {section.title}
              </li>
              {section.links.map((link, idx) => (
                <li key={idx} className="mb-2 font-medium">
                  <Link to={link.path} className="hover:underline">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ol>
          ))}
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-5 text-[#98A2B3] md:flex-row md:justify-between">
        <p className="order-2 md:order-1">
          © {new Date().getFullYear()} Ed-Circle. All rights reserved.
        </p>
        <div className="order-1 flex justify-center gap-6 text-2xl md:order-2">
          {socialIcons.map((social, idx) => (
            <a
              key={idx}
              href={social.path}
              className="transition duration-300 hover:text-white"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
