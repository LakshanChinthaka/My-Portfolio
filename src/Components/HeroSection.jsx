"use client"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import ViewBtn from "./Button/ViweBtn";
import DownloadBtn from "./Button/DownloadBtn";



function HeroSection() {

    return (
        <>
            <section className="bg-white dark:bg-gray-900 xl:mt-0 lg:mt-[-60px] lg:pl-10 flex sm:justify-center ">
                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">

                    {/* Profile Image */}
                    <div

                        className="mt-[-20px] mb-5 justify-center ml-[120px] flex  md:ml-[150px] lg:hidden  lg:ml-[50px] md:mb-10  w-[200px] h-[200px]  md:w-[300px] md:h-[300px]  p-3   rounded-full ">
                        <img
                            src="/My-Profile-image.png"
                            className="ml-10 rounded-full flex justify-center object-cover relative z-10 opacity-95"
                            alt="profile-image">
                        </img>
                    </div>

                    <div className="mr-auto place-self-center lg:col-span-7 lg:mt-20">

                        <h1 className="text-gray-800 max-w-2xl xl:mt-[-50px]  mb-4  text-4xl font-extrabold  justify-center  text-center tracking-tight leading-none md:text-5xl xl:text-[57px] lg:text-[45px] flex   dark:text-white">I'm <h1 className="ml-3 text-[#fbb40c] animate-bounce">Lakshan Chinthaka.</h1></h1>

                        <h5 className="text-gray-800 flex justify-center max-w-2xl mb-4 text-xl lg:my-8 font-extrabold tracking-wide lg:text-center  md:text-5xl xl:text-[30px] lg:text-[25px]  dark:text-white ">Software Engineering</h5>

                        <p
                            className=" max-w-2xl space-y-10 mb-3 font-light leading-7 whitespace-pre-line text-gray-500 lg:tracking-wide lg:leading-8 lg:mb-8 text-pretty md:text-lg text-center lg:text-md dark:text-gray-400 ">Aspiring software engineering interns are eager to apply coding skills, contribute to innovative projects and gain practical
                            insights. Looking for a challenging role to learn from experienced professionals and contribute to real world projects.
                        </p>


                        <div className="flex justify-center py-8 md:py-3">

                            <a className="z-10" href="/project/Lakshan Chinthaka - CV.pdf" target="_Blank">
                                <DownloadBtn />
                            </a>

                            <a className="z-10">
                                <ViewBtn />
                            </a>
                        </div>

                    </div>

                    {/* Profile Image */}
                    <div className="xl:mt-[-10px] hidden lg:flex mt-7 lg:w-[300px] lg:h-[300px]  p-3 xl:w-[400px] xl:h-[400px]  lg:ml-[-100px] rounded-full ">
                        <img src="/My-Profile-image.png"
                            className="ml-16 rounded-full object-cover z-10 opacity-95"
                            alt="profile-image">
                        </img>
                    </div>

                    <div className="mt-3 relative lg:col-span-10 md:mt-10 flex justify-center lg:ml-[180px]  lg:justify-start gap-10 lg:mt-7 ">
                        <a href="www.linkedin.com/in/lakshan-chinthaka" target="_blank">

                            <FaLinkedin className=" relative z-10 w-[35px] h-[35px] lg:w-[37px] lg:h-20 fill-gray-800 hover:fill-blue-700 dark:fill-gray-500" />
                        </a>

                        <a href="https://github.com/LakshanChinthaka" target="_blank">

                            <FaGithub className="z-10 relative w-[35px] h-[35px] lg:w-[42px] lg:h-20 fill-gray-800 hover:fill-black dark:fill-gray-500" />
                        </a>
                        <a href="https://www.facebook.com/chinthaka.lakshan.100?mibextid=ZbWKwL" target="_black">
                            <FaFacebookSquare className="relative z-10 w-[35px] h-[35px] lg:w-[40px] lg:h-20 fill-gray-800 dark:fill-gray-500 hover:fill-blue-700" />
                        </a>
                        <a href="https://www.instagram.com/lakshan_chinthaka_/?fbclid=IwAR3h8REZIPazU6VuFL6N1ljQo1MEV8CWDKuoVDNAZY1tXFDLFcJExyrBihU" target="_black">
                            <FaInstagram className="z-10 relative w-[35px] h-[35px] lg:w-[40px] lg:h-20 fill-gray-800 hover:fill-pink-500 dark:fill-gray-500" />

                        </a>
                        {/* <div>
                        <IoLogoWhatsapp  className="w-[35px] h-[35px] lg:w-[45px] lg:h-20 fill-gray-800 hover:fill-green-500 dark:fill-gray-500" />
                    </div> */}

                    </div>


                </div>

            <img src="/bg.png"
                className='lg:mt-[-180px] lg:ml-[-40px] fixed   z-0 object-cover  opacity-20'
                alt="portfolio-background-image"
            />

            </section>

        </>
    )
}

export default HeroSection