import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import EmailInput from "./EmailInput";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsArrowDownCircleFill } from "react-icons/bs";


function HeroSection() {
    return (
        <section class="bg-white dark:bg-gray-900 xl:mt-0 lg:mt-[-60px] lg:pl-10">
            <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">

                  {/* Profile Image */}
                  <div class="mt-[-20px] mb-5 justify-center ml-[100px] sm:hidden flex  w-[200px] h-[200px]  p-3   rounded-full ">
                    <img src="/My-Profile-image.png"
                        className="ml-16 rounded-full object-cover opacity-95"
                        alt="profile-image">
                    </img>
                </div>

                <div class="mr-auto place-self-center lg:col-span-7 lg:mt-20">
                 
                    <h1 class="text-gray-800 max-w-2xl xl:mt-[-50px]  mb-4  text-4xl font-extrabold  text-center tracking-tight leading-none md:text-5xl xl:text-[57px] lg:text-[45px] flex   dark:text-white">I'm <h1 className="ml-3 text-[#fbb40c] animate-bounce">Lakshan Chinthaka.</h1></h1>
                    
                    <h5 class="text-gray-800 max-w-2xl mb-4 text-xl lg:my-8 font-extrabold tracking-wide lg:text-center  md:text-5xl xl:text-[30px] lg:text-[25px] flex dark:text-white ">Aspiring software engineering interns</h5>
                    
                    <p class=" max-w-2xl space-y-10 mb-3 font-light leading-7 text-gray-500 lg:tracking-wide lg:leading-8 lg:mb-8 text-pretty md:text-lg text-center lg:text-md dark:text-gray-400 ">Aspiring software engineering interns are eager to apply coding skills, contribute to innovative projects and gain practical
                        insights. Looking for a challenging role to learn from experienced professionals and contribute to real world projects.</p>

                     <div className="mt-[-25px] mb-3 lg:mb-0">
                        <EmailInput/>
                     </div>
{/* 
                    <a href="#" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                        Get started
                        <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                    
                    <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                        Speak to Sales
                   
                    </a> */}
                </div>

                {/* Profile Image */}
                <div class="xl:mt-[-10px] hidden lg:flex mt-7 lg:w-[300px] lg:h-[300px]  p-3 xl:w-[400px] xl:h-[400px]  lg:ml-[-100px] rounded-full ">
                    <img src="/My-Profile-image.png"
                        className="ml-16 rounded-full object-cover opacity-95"
                        alt="profile-image">
                    </img>
                </div>

                <div className="md:mt-[-60px] mt-3 lg:col-span-10 justify-center lg:ml-[130px] lg:justify-start flex gap-10 lg:mt-7 ">
                    <FaLinkedin className="w-[35px] h-[35px] lg:w-[37px] lg:h-20 fill-gray-800 hover:fill-primary-700" />
                    <FaGithub className="w-[35px] h-[35px] lg:w-[42px] lg:h-20 fill-gray-800 hover:fill-primary-700" />
                    <FaFacebookSquare className="w-[35px] h-[35px] lg:w-[40px] lg:h-20 fill-gray-800 hover:fill-primary-700" />
                    <FaInstagram className="w-[35px] h-[35px] lg:w-[40px] lg:h-20 fill-gray-800 hover:fill-primary-700" />
                    <IoLogoWhatsapp className="w-[35px] h-[35px] lg:w-[45px] lg:h-20 fill-gray-800 hover:fill-primary-700" />

                </div>


            </div>

            {/* <div className="flex justify-center">
            <BsArrowDownCircleFill className="w-[40px] h-[40px] animate-bounce cursor-pointer justify-end fill-primary-700"/>
            </div> */}

        </section>
    )
}

export default HeroSection