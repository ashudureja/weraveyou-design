import React from 'react'

const Main = () => {
  return (
    <div className='min-h-screen py-20 gap-15 w-full flex flex-col items-center  relative overflow-hidden '>
      <div className='absolute flex justify-center gap-100 font-[signature] w-full left-1/2 -translate-x-1/2 bottom-63 z-10 text-[8vw] text-white text-center'>
      <div className='ml-15 text-shadow-lg'>Stay</div>
      <div>Groovy</div></div>
      <div className='w-full absolute p-2 top-0 left-0 z-10 flex justify-between items-center text-[#ff0028]'>
        {/* <h3>WERAVEYOU</h3> */}
        <img className='h-10' src="https://weraveyou.com/wp-content/uploads/2023/08/weraveyou2018_mobile1.png"></img>
        <h3>MENU</h3>
      </div>
      <img className='h-full w-full top-0 left-0 object-cover absolute' src="./footer/footer.jpg" alt="background"></img>
      <div className='inset-0 absolute bg-black/70'></div>
      
      {/* Rotating Vinyl */}
     
      
      
        <h1 className='max-w-7xl z-10 text-[#ff0028] text-shadow-lg !text-[7.4vw] text-center'>
          " Discover the Latest News, Features, Music, and Editorials within the Electronic Music Culture "
        </h1>
   
       <img 
        className='z-10 h-[30rem]  rotating-vinyl' 
        src="./cd4.png"
        alt="vinyl"
      />

      <style jsx>{`
        .rotating-vinyl {
          animation: rotate 5s linear infinite;
        }
        
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  )
}

export default Main