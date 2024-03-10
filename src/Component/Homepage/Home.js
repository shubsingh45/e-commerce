import React from 'react'
import Hero from './Hero';
import Popular from './Popular';
import Offer from './Offer';
import NewCollection from './New-Collection';
import NewsLater from './NewsLater';


 const Home = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offer/>
      <NewCollection/>
      <NewsLater/>
    </div>
  )
}
export default Home
