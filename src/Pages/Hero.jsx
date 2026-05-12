import React from 'react'
import Main from '../HeroPartials/Main'
import Stories from '../HeroPartials/Stories'
import BlackFriday from '../HeroPartials/BlackFriday'
import LatestNews from '../HeroPartials/LatestNews'
import Magazine from '../HeroPartials/Magazine'

import Video from '../HeroPartials/Video'
import Interviews from '../HeroPartials/Interviews'
import Footer from '../HeroPartials/Footer'
import MusicStyles from '../HeroPartials/MusicStyles'
import Advertise from '../HeroPartials/Advertise'

const Hero = () => {
  return (
    <div>
        <Main/>
        <Stories/>
        <BlackFriday/>
        <LatestNews/>
        <Magazine/>
        <Video/>
       
       <Interviews/>
       {/* <MusicStyles/> */}
       <Advertise/>
       <Footer/>
        
    </div>
  )
}

export default Hero