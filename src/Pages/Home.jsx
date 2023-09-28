import React from 'react'
import Header from '../Components/Header'
import Section_1 from '../Components/Section_1'
import Service from '../Pages/Service'
import Contact from '../Pages/Contact'
import Footer from "../Components/Footer"
// import Video from '../Components/Video'
const Home = () => {
  return (
    <div>
        <Header />
        <Section_1 />
        <Service />
        <Contact />
        <Footer />
        {/* <Video /> */}
    </div>
  )
}

export default Home