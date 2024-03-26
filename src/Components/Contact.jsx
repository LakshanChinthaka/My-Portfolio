"use client"
import React from 'react'

function Contact() {
    return (
        <div>
            <section className="bg-white dark:bg-gray-900  z-40">
                <div className="py-3 mb-20 lg:py-2 px-4 mx-auto max-w-screen-md">
                    <div className="flex justify-center">

                        <h1 className="text-gray-800 relative  z-10 max-w-2xl xl:mt-[-50px]  mb-4  text-4xl font-extrabold  justify-center  text-center tracking-tight leading-none md:text-5xl xl:text-[50px] lg:text-[45px] flex   dark:text-white">Contact </h1>
                        <h1 className=" max-w-2xl xl:mt-[-50px]  mb-4  text-4xl font-extrabold  justify-center  text-center tracking-tight leading-none md:text-5xl xl:text-[50px] lg:text-[45px] flex  ml-3 text-[#fbb40c] animate-bounce relative z-10">me.</h1>
                    </div>
                    <p className="mb-8 lg:mb-16 lg:mt-10 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">If you are interested in getting my service or want to contact the me, please contact the me below..</p>
                    <form action="#" className="z-40 space-y-8 relative">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                            <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@example.com" required></input>
                        </div>
                        <div>
                            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                            <input type="text" id="subject" className="z-40 block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required></input>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                            <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                        </div>
                        <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Contact