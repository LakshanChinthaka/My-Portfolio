import React from 'react'

function DottedButton() {
    return (
        <div>
            <button className="rounded-2xl border-2 border-dashed border-black bg-white px-3 py-1 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">

                Hover me

            </button>
        </div>
    )
}

export default DottedButton 