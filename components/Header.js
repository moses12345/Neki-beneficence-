import React,{useState} from 'react'
import Image from 'next/image'
import {FlagIcon, HomeIcon, PlayIcon, SearchIcon } from '@heroicons/react/solid'
import Headericon from './Headericon'

export default function Header() {
    const [search, setsearch] = useState(null)
    const name =["asd","wew","sasd","wewqw","adsd","wqqwe","sdsd","dsdwe","cewd","dwdwwq"]
    function searchthe(){
        return name.filter(n=>n[0] === search)
    }
    console.log("thisj is serch result :",searchthe())
    return (
        <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
             {/* LEFT */}
             <Image src="https://links.papareact.com/5me" width ={40} height ={40} layout="fixed" />
             <div className="flex m1-2 items-center rounded-full bg-gray-100 p-2 space-x-20">
                 <SearchIcon className="h-6 "/>
                 <input value={search} onChange={(e)=>setsearch(e.target.value)} className="flex ml-2 items-center bg-transparent outline-none" type="text" placeholder="search" />
             </div>

             {/* CENTER  */}
             <div className="flex ml-2 justify-center flex-grow">
                 <div className="flex space-x-10 md:space-x-200">
                     <Headericon Icon={HomeIcon}/>
                     <Headericon Icon={FlagIcon}/>
                     <Headericon Icon={PlayIcon}/>         
                 </div>
             </div>

             {/* RIGHT */}

        </div>
    )
}


