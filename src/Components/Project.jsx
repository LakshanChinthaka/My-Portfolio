import { FiBarChart } from "react-icons/fi";
import { FaBook } from "react-icons/fa";
import { SiAnswer } from "react-icons/si";
import { FaCartShopping } from "react-icons/fa6";
import { AnimatePresence, motion } from "framer-motion";
import { useWindowSize } from "@/Utils/useWindowsSize";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";

const VerticalAccordion = () => {
  const [open, setOpen] = useState(items[0].id);

  return (
    <section className="p-4 bg-gray-900 h-screen mt-20 mb-5 ">

      <div className="mr-auto flex justify-center md:ml-20 lg:mt-0 mb-5">
        <h1 className="text-gray-800 max-w-2xl xl:mt-[-50px]  mb-4  text-4xl font-extrabold  text-center tracking-tight leading-none md:text-4xl xl:text-[50px] lg:text-[40px] flex   dark:text-white">My <h1 className="ml-3 text-[#fbb40c] animate-bounce">Work.</h1></h1>
      </div>


      <div className="flex flex-col lg:flex-row h-fit lg:h-[550px] mt-5 w-full max-w-6xl mx-auto shadow cursor-pointer overflow-hidden">
        {items.map((item) => {
          return (
            <>
              <Panel
                key={item.id}
                open={open}
                setOpen={setOpen}
                id={item.id}
                Icon={item.Icon}
                title={item.title}
                imgSrc={item.imgSrc}
                description={item.description}
              />
            </>
          );
        })}
      </div>
    </section>
  );
};

const Panel = ({ open, setOpen, id, Icon, title, imgSrc, description, githubUrl }) => {
  const { width } = useWindowSize();
  const isOpen = open === id;

  return (
    <>
      <button
        className="bg-gray-400 hover:bg-primary-100 transition-colors p-3 border-[1px]  border-gray-500 flex flex-row-reverse lg:flex-col justify-end items-center gap-4 relative group"
        onClick={() => setOpen(id)}
      >

        <span
          style={{
            writingMode: "vertical-lr",
          }}
          className="hidden lg:block text-xl font-light rotate-180"
        >
          {title}
        </span>
        <span className="block lg:hidden text-xl font-light">{title}</span>
        <div className="w-6 lg:w-full aspect-square bg-indigo-600 text-white grid place-items-center">
          <Icon />
        </div>
        <span className="w-4 h-4 bg-primary-700 group-hover:bg-yellow-400 transition-colors  lg:border-b-0 lg:border-[1px]  rotate-45 absolute bottom-0 lg:bottom-[50%] right-[50%] lg:right-0 translate-y-[50%] translate-x-[50%] z-20" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={`panel-${id}`}
            variants={width && width > 1024 ? panelVariants : panelVariantsSm}
            initial="closed"
            animate="open"
            exit="closed"
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="w-full h-full overflow-hidden relative bg-black flex items-end"
          >
            <motion.div
              variants={descriptionVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="px-4 py-2 bg-black/40 backdrop-blur-sm text-white"
            >
              <p>{description}</p>

            </motion.div>


          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default VerticalAccordion;

const panelVariants = {
  open: {
    width: "100%",
    height: "100%",
  },
  closed: {
    width: "0%",
    height: "100%",
  },
};

const panelVariantsSm = {
  open: {
    width: "100%",
    height: "200px",
  },
  closed: {
    width: "100%",
    height: "0px",
  },
};

const descriptionVariants = {
  open: {
    opacity: 1,
    y: "0%",
    transition: {
      delay: 0.125,
    },
  },
  closed: { opacity: 0, y: "100%" },
};

const items = [
  {
    id: 1,
    title: "Lerning Management System",
    Icon: FaBook,
    imgSrc:
      "/project/image_1.png",
    description:
      "This project is a comprehensive web application built using Spring Boot, React, and various technologies to provide a robust platform for managing student data, assignments, and educational resources.",
    githubUrl: "https://github.com/LakshanChinthaka/Ecommerce-django-bootstrap.git",
  },
  {
    id: 2,
    title: "Q & A Platform",
    Icon: SiAnswer,
    imgSrc:
      "/project/queationproject.jpg",
    description:
      "Welcome to our Question and Answer Platform! This platform is designed to facilitate asking questions, sharing knowledge, and engaging with a community of learners and experts..",
    githubUrl: "https://github.com/LakshanChinthaka/Ecommerce-django-bootstrap.git",
  },
  {
    id: 3,
    title: "Point of Sale System (Back-end)",
    Icon: FaCartShopping,
    imgSrc:
      "https://www.split.io/wp-content/uploads/BLOG-SpringBoot@2x.png",
    description:
      "The Spring Boot POS (Point of Sale) system is a robust and efficient solution designed to streamline the sales and transaction processes for businesses of all sizes. Built on the powerful Spring Boot framework, this POS system offers reliability, scalability, and flexibility to meet the diverse needs of modern businesses..",
    githubUrl: "https://github.com/LakshanChinthaka/Ecommerce-django-bootstrap.git",
  },
  {
    id: 4,
    title: "E-commerce Web Application",
    Icon: FiBarChart,
    imgSrc:
      "https://cdn.pixabay.com/photo/2019/06/19/07/13/email-4284157_960_720.png",
    description:
      "Welcome to our Django-powered e-commerce platform, where we've seamlessly integrated PayPal to provide secure and convenient payment processing for our customers. Our platform combines the flexibility and power of Django with the reliability and ease of PayPal to create a robust online shopping experience..",
    githubUrl: "https://github.com/LakshanChinthaka/Ecommerce-django-bootstrap.git",
  },
  {
    id: 5,
    title: "My Portfolio",
    Icon: CgProfile,
    imgSrc:
      "/project/portfolio.jpg",
    description:
      "A software engineering portfolio is a concise yet comprehensive collection of my work that showcases my expertise, skills, and accomplishments in the field of software development.",
    githubUrl: "https://github.com/LakshanChinthaka/Ecommerce-django-bootstrap.git",
  },
];