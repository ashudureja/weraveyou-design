import React from 'react'

const Magazine = () => {
  return (
    <div className='h-screen w-full bg-[#ff0028] flex relative' >
         <img className='top-1/2 -translate-y-1/2 absolute h-100 ' src="./home/strip.png"></img>
        <div className='flex-1'>
            <div className='relative mt-30'>
               
                <img className='absolute -top-10 left-10 h-160' src="https://weraveyou.com/wp-content/uploads/2025/12/weraveyou_magazinelanding_mockup01_november2025.png"></img>
            </div>
        </div>
        <div className='flex-1 flex flex-col items-center py-40 z-10'>
           <div>
             <h3>WE RAVE YOU </h3>
            <h2 className='text-[16vw]!'>Magazine</h2>
             <p className='text-left! mt-10 text-[25px]! !text-black text-shadow-sm' >YOUNA:COVER STORY</p>
             <p className='mt-2 text-[22px]!'>Daft punks continues to step out from behind <br/> the masks.</p>
             <div className='flex gap-4 mt-4'>
                <button className='!text-white shadow-brand bg-black cursor-pointer px-6 py-4 rounded-xl '><span className='text-[14px]!'>DISCOVER THE MAGAZINE</span></button>
                <button className='!text-white cursor-pointer bg-black px-6 py-4 rounded-xl shadow-brand'><span className='text-[14px]!'>READ ONLINE</span></button>
             </div>
           </div>

           <div className='mt-10 w-full bg-amber-300'>
           
           </div>
        </div>
    </div>
  )
}

export default Magazine