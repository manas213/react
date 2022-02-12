import React from 'react'
import Carousel from '../Components/Carousel'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Products from '../Components/Products'
import Recommendation from '../Components/Recommendation'

const Home = () => {
    return (
        <>
            <Navbar />
            <Carousel />
            <Products />
            <Recommendation />
            <Footer />
        </>
    )
}

export default Home
