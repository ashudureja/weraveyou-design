import React from 'react'
import { ArrowRight, MessageSquare, ThumbsUp, CornerDownRight } from 'lucide-react';

const BlackFriday = () => {
    const deals = [
  {
    title: "Cyber Monday Best Music Deals",
    date: "December 01, 2025",
    image: "https://weraveyou.com/wp-content/uploads/2021/11/cyber-monday-plugin-deals-1536x864.jpg"
  },
  {
    title: "Black Friday Music Deals – Live Tracker (updated daily)",
    date: "November 27, 2025",
    image: "https://weraveyou.com/wp-content/uploads/2025/11/black-friday-music-deals.jpg"
  },
  
  {
    title: "Celemony Melodyne Black Friday Sale is Here",
    date: "November 24, 2025",
    image: "https://weraveyou.com/wp-content/uploads/2025/11/melodyne.jpg"
  },
  {
    title: "This Best-Selling Plugin of 2025, Is Now Up to 50% Off This Black Friday",
    date: "November 24, 2025",
    image: "https://weraveyou.com/wp-content/uploads/2025/11/BF-2025-Horizontal_02.png",
   
  }
];
  return (
    <div className='min-h-screen w-full bg-black px-4 pb-8'>
        <div className=" px-4 pt-12  pb-15   border-b  border-white/40 border-dashed ">
           
          
              
              <h1 className=" !text-[15vw] font-black text-[#ff0028] text-center   ">
                BLACK FRIDAY SALES
              </h1>
           
            <div className="mt-8">
              <p className="text-sm text-[#ff0028] text-center pb-4">
               "For music producers"
              </p>
            </div>
          </div>

          <div className='w-full grid grid-cols-4 gap-4 '>
            {deals.map((item,index)=>{
                return (
                    <div className={`flex-1 p-3 flex flex-col justify-between h-130 ${index!==deals.length-1?"border-r border-white/30 border-dashed":""}`}>
                        <div className='h-[90%]'>
                            <img className='h-[70%] w-full object-cover' src={item.image}></img>
                        <h3 className='text-white mt-2 !text-[2vw]'>{item.title}</h3>
                        </div>
                        <div className='w-full flex items-center justify-between'>
                            <span className='text-[#ff0028] uppercase'>{item.date}</span>
                            <ArrowRight className="w-5 h-5 text-[#ff0028] flex-shrink-0 mt-1 ml-2" />
                        </div>
                    </div>
                )
            })}

          </div>
        
    </div>
  )
}

export default BlackFriday