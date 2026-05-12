import React from 'react'

const Footer = () => {
  return (
    <div className='h-screen overflow-hidden w-full bg-[url("https://cdn.prod.website-files.com/66715118c4748bd61331f714/667e48db2e1eb1ae0df324b0_snd-etc-footer-img.jpg")] relative'>
        <img className='absolute inset-0'src="./footer/footer.jpg" ></img>
         <div className='inset-0 absolute bg-black/70'></div>
        <div className='top-0 z-10 left-0  absolute flex w-full justify-between text-[#ff0028] !text-[1vw]'>
            <h3 className='!text-[2.5vw]'>ABOUT</h3>
            <h3 className='!text-[2.5vw]'>CONTACT</h3>
            <h3 className='!text-[2.5vw]'>CARRERS</h3>
            <h3 className='!text-[2.5vw]'>NEWS</h3>

        </div>

        <h1 className='absolute bottom-7 left-1/2 -translate-x-1/2 text-[#ff0028] z-10 text-[32.5vw]!'>WERAVEYOU</h1>
    </div>
  )
}

export default Footer