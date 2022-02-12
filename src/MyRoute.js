import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// import App from './App';
// import First from './Pages/First'
// import Second from './Pages/Second'
import Cart from './Pages/Cart'
import Home from './Pages/Home'
import Signin from './Pages/Signin'
import Signup from './Pages/Signup'
import Data from './Hooks/Data'
import FetchData from './Hooks/FetchData'
import Main from './Hooks/Main'

const MyRoute = () => {
    return (
        <Router>
            <Routes>
                {/* <Route path="/" element={<App/>} />
                <Route path="/first" element={<First />} />
                <Route path="/second" element={<Second />} /> */}

                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/cart" element={<Cart />} />

                {/* hooks */}
                <Route path="/showdata" element={<Data />} />
                <Route path="/fetchdata" element={<FetchData />} />
                <Route path="/text" element={<Main />} />
            </Routes>
        </Router>
    )
}

export default MyRoute
