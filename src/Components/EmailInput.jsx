"use client"
import React from 'react'

function EmailInput() {
    return (
        <div>
         <div className="bg-white mt-12 flex px-1 py-1.5 rounded-full sm:w-4/5 mx-auto overflow-hidden">
            <input type='email' placeholder='Enter your email' className="w-full font-light outline-none bg-gray-200 rounded-full  pl-4 text-sm mr-2" />
            <button type='button'
              className="bg-primary-700 hover:bg-primary-800 transition-all text-white font-bold text-sm rounded-full px-6 py-2.5">Send</button>
          </div>
    </div >
  )
}

export default EmailInput