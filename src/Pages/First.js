import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

function First() {
    return (
        <>
            <Navbar />        
            This is react app.
            {/* <Link to="/second">Go to Second Page</Link> */}
            <Footer />

        </>
    )
}

export default First
