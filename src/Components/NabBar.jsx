"use client"
import React from 'react'
import Image from 'next/image'

function NabBar() {
    return (
        <div>
            <nav className="bg-white  border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="/" className="flex relative z-40 items-center space-x-3 rtl:space-x-reverse">
                        <Image src="/logo.png" 
                        className="relative h-[80px] w-[260px] opacity-90" 
                        alt="chincodex portfolio website internship software engineer personal portfolio sri lanka Logo"
                        width={260}
                        height={80}
                        ></Image>
                    </a>

                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"> 

                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default NabBar