 import React from 'react'
 import "../../App.css"
 import HeroSection from '../HeroSection/HeroSection';
 import Navbar from '../Navbar/Navbar';
 import Cards from '../Cards/Cards';
 import Footer from '../Footer/Footer';
 
 const Home = () => {
   return (
     <div>
        <Navbar />
       <HeroSection />
       <Cards />
       <Footer />
     </div>
   )
 }
 
 export default Home
 