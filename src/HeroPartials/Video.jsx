import React from 'react'

const Video = () => {
  return (
    <div className='h-[130vh] w-full bg-[#f7f3e7] flex flex-col overflow-hidden px-4 gap-2 pb-14'  >
        <div className=" px-4 pt-12  pb-15   border-b  border-black/40 border-dashed ">
           
          
              
              <h1 className=" !text-[15vw] font-black  text-center   ">
                Latest Videos
              </h1>
           
            {/* <div className="mt-8">
              <p className="text-sm font-medium leading-snug opacity-90  pb-4">
                X just revealed the location of every user on the platform, triggering chaos among foreign rage farmers and slop peddlers — the massive ranks of which have shaped our culture now for years
              </p>
            </div> */}
            </div>

           <div className='flex-1 relative mt-2'>
             <iframe
  width="100%"
  height="100%"
  src="https://www.youtube.com/embed/NKSiluO-Ez0"
  title="YouTube video"
  frameborder="0"
  allowfullscreen
></iframe>
             {/* <div className='absolute z-10 left-1/2 -translate-x-1/2 w-100 h-100 bg-white bottom-0'></div> */}
           </div>

    </div>
  )
}

export default Video