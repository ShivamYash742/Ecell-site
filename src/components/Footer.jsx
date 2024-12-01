import React from "react";
import logo from "../assets/ecellmsitLogo.jpeg";
import instagramLogo from "../assets/instagram.png";
import linkedinLogo from "../assets/linkedin.png";
import facebookLogo from "../assets/facebook.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-8">
      <div className="container mx-auto px-4 ">
        <div className="flex flex-wrap justify-around items-center pb-12 gap-5">
          {/* Company Logo */}
          <div className="">
            <img
              src={logo}
              alt="Company Logo"
              className=""
              width={80}
              height={80}
            />
          </div>

          {/* Main Office Address */}
          <div className="">
            <h4 className="font-bold">Main Office</h4>
            <p>eCell MSIT, Maharaja Surajmal Institute of Technology , </p>
            <p> C-4 Janakpuri , New Delhi - 110059</p>
          </div>

          {/* Useful Links */}
          <div className="">
            <h4 className="font-bold">Useful Links</h4>
            <ul>
              <li>
                <a href="/about" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="">
            <h4 className="font-bold">Socials</h4>
            <div className="flex space-x-4 items-center justify-start">
              <a
                href="https://www.instagram.com/ecellmsit/"
                className="hover:text-gray-400"
                target="blank"
              >
                <img src={instagramLogo} alt="" width={25} height={25} />
              </a>
              <a
                href="https://in.linkedin.com/company/ecellmsit"
                className="hover:text-gray-400"
                target="blank"
              >
                <img src={linkedinLogo} alt="" width={15} height={15} />
              </a>
              <a
                href="https://www.facebook.com/ecellmsit/"
                className="hover:text-gray-400"
                target="blank"
              >
                <img src={facebookLogo} alt="" width={20} height={20} />
              </a>
            </div>
          </div>
        </div>

        {/* All Rights Reserved */}
        <div className="text-center mt-8">
          <p>
            &copy; {new Date().getFullYear()} eCell MSIT. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
