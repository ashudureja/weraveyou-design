import React from 'react'
import Hero from './Pages/Hero'
import LocomotiveScroll from 'locomotive-scroll';

import Landing from './HeroPartials2/Landing';
import NewsFeaturedSection from './HeroPartials2/News';
import TechFeaturedSection from './HeroPartials2/Tech';
import Video from './HeroPartials/Video';
import LatestVideosSection from './HeroPartials2/Video';
import MusicStylesSection from './HeroPartials2/Styles';
import AI from './HeroPartials2/AI';
import LatestEventsSection from './HeroPartials2/Events';
import MagazineSection from './HeroPartials2/Magazine';
import NewsletterSocialSection from './HeroPartials2/NewsLetter';
import Footer from './HeroPartials2/Footer';
import Ai from './HeroPartials2/AI2';
import WeRaveYouNavbar from './HeroPartials2/Navbar';

const locomotiveScroll = new LocomotiveScroll();


const App = () => {
  return (
    <>
    <WeRaveYouNavbar/>

  <Landing/>
  <NewsFeaturedSection/>
  <TechFeaturedSection/>
<LatestVideosSection/>
<MusicStylesSection/>
<Ai/>

<LatestEventsSection/>
<MagazineSection/>
<NewsletterSocialSection/>
<Footer/>
  </>
    
   
  )
}

export default App