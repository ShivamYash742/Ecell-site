import React from "react";
import logo from "../public/logo.png";
import instagramLogo from "../public/instagram.png";
import linkedinLogo from "../public/linkedin.png";
import facebookLogo from "../public/facebook.png";

const Footer = () => {
    return (
        <footer className="bg-black text-white p-8">
            <div className="container mx-auto px-4 ">
                <div className="flex flex-wrap justify-around items-center pb-12 gap-5">
                
                    <div className="">
                        <img
                            src={logo}
                            alt="Logo"
                            className=""
                            width={80}
                            height={80}
                        />
                    </div>

                    <div className="flex-col">
                        <h4 className="font-bold">Contact Us</h4>
                        <h6>eCell MSIT, Maharaja Surajmal Institute of Technology , </h6>
                        <h6> C-4 Janakpuri , New Delhi - 110059</h6>
                    </div>

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

                <div className="text-center mt-8 text-xl">
                    <p>
                        &copy; {new Date().getFullYear()} eCell MSIT. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
