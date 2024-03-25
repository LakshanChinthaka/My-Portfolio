import React from 'react';
import { FaLinkedin, FaGithub, FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

function Footer() {
    return (
        <div>
            <footer className="bg-gray-900 py-4 px-10 font-[sans-serif]">
                <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="/" className="hover:underline">Chincodex™</a>. All Rights Reserved.</span>
                    <ul className="flex space-x-4">
                        <li>
                            <a href="https://github.com/LakshanChinthaka" target="_blank">
                                <FaGithub className="w-[30px] h-[30px] lg:w-[42px] lg:h-20 fill-gray-800 hover:fill-black dark:fill-gray-500" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/lakshan-chinthaka" target="_blank">
                                <FaLinkedin className="w-[30px] h-[30px] lg:w-[37px] lg:h-20 fill-gray-800 hover:fill-blue-700 dark:fill-gray-500" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/chinthaka.lakshan.100?mibextid=ZbWKwL" target="_blank">
                                <FaFacebookSquare className="w-[30px] h-[30px] lg:w-[40px] lg:h-20 fill-gray-800 dark:fill-gray-500 hover:fill-blue-700" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/lakshan_chinthaka_/?fbclid=IwAR3h8REZIPazU6VuFL6N1ljQo1MEV8CWDKuoVDNAZY1tXFDLFcJExyrBihU" target="_blank">
                                <FaInstagram className="w-[30px] h-[30px] lg:w-[40px] lg:h-20 fill-gray-800 hover:fill-pink-500 dark:fill-gray-500" />
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
