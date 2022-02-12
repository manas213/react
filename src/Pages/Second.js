import React from 'react'
import {Link} from 'react-router-dom'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

function Second() {
    return (
        <>
            <Navbar />
            This is second react app.
            {/* <Link to="/first">Go to First Page</Link> */}
            <Footer />

        </>
    )
}

export default Second