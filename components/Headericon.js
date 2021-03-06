import React from 'react'

function Headericon({Icon}) {
    return (
        <div className="flex items-center cursor-pointer md:px-10 sm:h-14 md:hover:bg-gray-100 rounded-xl active:border-b-2 active:border-blue-500 ">
            <Icon className="h-5 text-center group-hover:text-blue-500 "/>
        </div>
    )
}

export default Headericon