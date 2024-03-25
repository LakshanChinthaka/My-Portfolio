"use client"
import { motion, useScroll } from "framer-motion"
import { SiSpringboot, SiMysql, SiTailwindcss } from "react-icons/si";
import { FaReact, FaJava, FaCss3Alt } from "react-icons/fa";
import { TiHtml5 } from "react-icons/ti";
import { FaAws } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";



function About() {

    return (

        <section
            className="bg-white dark:bg-gray-900 xl:mt-0  lg:pl-10 ">

            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-3">

                <h5 className="text-gray-800 max-w-2xl lg:mt-20 mb-4 text-xl lg:my-8 ml-[0px] font-extrabold tracking-wide lg:text-center lg:tracking-wide lg:leading-8 md:text-2xl xl:text-[30px] lg:text-[25px] flex dark:text-white ">My Story <br /> Experience <br /> Expertise</h5>


                {/* 3D Man */}
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: -100 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate="visible"
                    transition={{
                        duration: "1",
                        delay: "1"
                    }}
                    className="mt-[-20px] lg:ml-[-300px]  mb-5  p-3 rounded-full ">

                    <img src="https://static.vecteezy.com/system/resources/previews/024/785/833/non_2x/3d-male-character-presenting-to-the-left-free-png.png"
                        className="xl:w-[550px] xl:h-[550px] lg:w-[480px] lg:h-[500px] md:w-[400px] md:h-[400px] w-[300px] h-[300px]"
                        alt="3d-man" />

                </motion.div>

                <div className="mr-auto place-self-center md:ml-20 lg:mr-[350px] lg:mt-0">

                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: -100 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            duration: "1",
                            delay: "1"
                        }}
                    >

                        <h1 className="text-gray-800 max-w-2xl xl:mt-[-50px]  mb-4  text-4xl font-extrabold  text-center tracking-tight leading-none md:text-4xl xl:text-[50px] lg:text-[40px] flex   dark:text-white">My <h1 className="ml-3 text-[#fbb40c] animate-bounce">Story.</h1></h1>

                        <h5 className="text-gray-800 max-w-2xl mb-4 text-xl lg:my-8 font-extrabold tracking-wide lg:text-center  md:text-5xl xl:text-[30px] lg:text-[25px] flex dark:text-white "> Exploring Experience, Expertise</h5>

                    </motion.div>


                    <motion.p
                        variants={{
                            hidden: { opacity: 0, x: 100 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            duration: "1",
                            delay: "1"
                        }}
                        className=" max-w-2xl whitespace-pre-line space-y-10 mb-3 font-light text-gray-500 lg:tracking-wide leading-7 lg:leading-8 lg:mb-8 text-md text-pretty md:text-lg text-left  lg:text-md dark:text-gray-400 ">
                        I completed <span style={{ color: '#1d9ed8', fontSize: '22px' }}>HND in Software Engineering</span> and possess proficient knowledge of back-end technologies such as <span style={{ color: '#1d9ed8', fontSize: '22px' }}>Spring Boot</span>, <span style={{ color: '#1d9ed8', fontSize: '22px' }}>MySQL</span>,
                        as well as front-end technologies including <span style={{ color: '#1d9ed8', fontSize: '22px' }}>HTML</span> , <span style={{ color: '#1d9ed8', fontSize: '22px' }}>Tailwind CSS </span> , <span style={{ color: '#1d9ed8', fontSize: '22px' }}>Javascript </span>, <span style={{ color: '#1d9ed8', fontSize: '22px' }}>React.Js </span> and also I have experience in <span style={{ color: '#1d9ed8', fontSize: '22px' }}>AWS EC2 </span>,<span style={{ color: '#1d9ed8', fontSize: '22px' }}> RDS </span>and
                        <span style={{ color: '#1d9ed8', fontSize: '22px' }}> Firebase</span>. In addition, a <span style={{ color: '#1d9ed8', fontSize: '22px' }}>fast learner </span>with the <span style={{ color: '#1d9ed8', fontSize: '22px' }}>ability to quickly grasp new concepts </span>,<span style={{ color: '#1d9ed8', fontSize: '22px' }}>Problem solving </span>and <span style={{ color: '#1d9ed8', fontSize: '22px' }}>work collaboratively with teams</span>, with strong
                        <span style={{ color: '#1d9ed8', fontSize: '22px' }}> Time Management </span>
                        These qualities can be used effectively in a software engineering environment .
                    </motion.p>


                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 100 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            duration: "1",
                            delay: "1"
                        }}

                        className=" md:mt-[-60px] mt-8 mb-5  justify-start lg:ml-0 flex gap-3 lg:mt-7 ">
                        <FaJava className="dark:fill-gray-500 w-[35px] h-[35px] lg:w-[37px] lg:h-20 fill-gray-800 hover:fill-red-500" />
                        <SiSpringboot className="dark:fill-gray-500 w-[35px] h-[35px] lg:w-[45px] lg:h-20 fill-gray-800 hover:fill-green-600" />
                        <SiMysql className="dark:fill-gray-500 w-[35px] h-[35px] lg:w-[55px] lg:h-20 fill-gray-800 hover:fill-primary-700" />
                        <FaReact className="dark:fill-gray-500 w-[35px] h-[35px] lg:w-[45px] lg:h-20 fill-gray-800 hover:fill-blue-700" />
                        <IoLogoJavascript className="dark:fill-gray-500 w-[35px] h-[35px] lg:w-[45px] lg:h-20 fill-gray-800 hover:fill-yellow-500  " />
                        <SiTailwindcss className="dark:fill-gray-500 w-[35px] h-[35px] lg:w-[50px] lg:h-20 fill-gray-800 hover:fill-primary-600" />
                        <FaCss3Alt className="dark:fill-gray-500 w-[35px] h-[35px] lg:w-[36px] lg:h-20 fill-gray-800 hover:fill-blue-700" />
                        <TiHtml5 className="dark:fill-gray-500 w-[35px] h-[35px] lg:w-[55px] lg:h-20 fill-gray-800 hover:fill-orange-500" />
                        <FaAws className="dark:fill-gray-500 w-[35px] h-[35px] lg:w-[50px] lg:h-20 fill-gray-800 hover:fill-primary-700" />
                        <SiFirebase className="dark:fill-gray-500 w-[35px] h-[35px] lg:w-[45px] lg:h-20 mt-[-5px] fill-gray-800 hover:fill-yellow-400" />
                    </motion.div>

                </div>

            </div>

            {/* <div className="flex justify-center">
            <BsArrowDownCircleFill className="w-[40px] h-[40px] animate-bounce cursor-pointer justify-end fill-primary-700"/>
            </div> */}

        </section>
    )
}

export default About