import React from 'react'
import { ArrowRight, MessageSquare, ThumbsUp, CornerDownRight } from 'lucide-react';

const LatestNews = () => {
  
const tech = [
  {
    title: "Stock vs Third-Party Plugins: What Actually Matters?",
    image: "https://weraveyou.com/wp-content/uploads/2025/11/black-friday-music-deals.jpg"
  },
  {
    title: "Exotic Music Production (EMP) Black Friday & Cyber Monday Deals – Bundles, Sample Packs, Presets & Templates",
    image: "https://weraveyou.com/wp-content/uploads/2025/11/stock-vs-third-party.jpg"
  },
  {
    title: "This Best-Selling Plugin of 2025, Is Now Up to 50% Off This Black Friday",
    image: "https://weraveyou.com/wp-content/uploads/2025/11/exotic-music-production.jpg"
  },
  {
     title: "Black Friday Music Deals – Live Tracker (updated daily)",
  image: "https://weraveyou.com/wp-content/uploads/2025/11/BF-2025-Horizontal_02.png",
  }
];



  return (
    <div className='min-h-screen w-full px-4 relative bg-[#f7f3e7]'>
        <img className=' absolute w-full left-0 opacity-20  invert top-[55%] -translate-y-1/2' src="./home/strip.png"></img>
        <div className=" px-4 pt-12  pb-15  border-b  border-black/40 border-dashed ">
           
          
              
              <h1 className=" !text-[15vw] font-black  text-center   ">
                FEATURED TECH 
              </h1>
           
            {/* <div className="mt-8">
              <p className="text-sm font-medium leading-snug opacity-90  pb-4">
                X just revealed the location of every user on the platform, triggering chaos among foreign rage farmers and slop peddlers — the massive ranks of which have shaped our culture now for years
              </p>
            </div> */}
          </div>
          <div className='grid grid-cols-2   '> 
            {tech.map((item,index)=>{
                return (
                    <div className={`h-140 w-full  flex flex-col items-center justify-between relative ${index===0 || index===1 ? "border-b" : ""}  ${index===0 || index===2 ? "border-r" : ""}  py-4 ${index===0 || index===2 ? "pr-4" : ""} ${index===1 || index===3 ? "pl-4" : ""}  border-dashed  `}>
                       <div className='h-[95%]'>
                         <img  className='h-[80%] w-full object-cover' src={item.image}></img>
                        <h3 className='text-black !text-[2.5vw] mt-2 '>{item.title}</h3>
                       </div>
                        <div className=' flex items-center justify-between w-full '>
                            <span className='text-black'>Read More</span>
                            <ArrowRight className="w-5 h-5 text-black flex-shrink-0 mt-1 ml-2" />
                        </div>
                    </div>
                )
            })}

          </div>
    </div>
  )
}

export default LatestNews