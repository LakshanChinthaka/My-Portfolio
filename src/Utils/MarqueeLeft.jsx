"use client"
import React from 'react'
import { motion } from "framer-motion";


function MarqueeLeft() {

    const sliderVariantsLeft = {
        initial: {
            x: "100%",
        },
        animate: {
            x: "-100%",
            transition: {
                duration: 5,
                repeat: Infinity,

                ease: "linear",
            },
        },
    };

    const sliderVariantsRight = {
        initial: {
            x: "-100%",
        },
        animate: {
            x: "100%",
            transition: {
                duration: 5,
                repeat: Infinity,

                ease: "linear",
            },
        },
    };


    return (
        <>
            <div className="overflow-hidden mb-20 bg-gray-900">
                <motion.h1
                    className="text-gray-400  opacity-20 whitespace-nowrap font-bold"
                    variants={sliderVariantsLeft}
                    initial="initial"
                    animate="animate"
                    style={{ fontSize: '130px' }}
                >
                    Lakshan Chinthaka
                </motion.h1>

                <motion.h1
                    className="text-gray-400 whitespace-nowrap font-bold opacity-20 mt-[-50px]"
                    variants={sliderVariantsRight}
                    initial="initial"
                    animate="animate"
                    style={{ fontSize: '130px' }}
                >
                    Software Developer
                </motion.h1>

            </div>
        </>

    )
}

export default MarqueeLeft 