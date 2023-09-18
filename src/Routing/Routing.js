
import Home from '../Components/Home'
import {
    Routes,
    Route
} from 'react-router-dom'
import Fitenss from '../Components/Fitness'
import Bollywood from '../Components/Bollywood'
import Technology from '../Components/Technology'
import Hollywood from '../Components/Hollywood'
import Food from '../Components/Food'
import CategoryDetail from '../Components/CategoryDetail'
import Footer from '../Components/Footer'
<<<<<<< HEAD
=======
import { Context } from '../Data'
>>>>>>> f8a4aabfcf6644fce44a4331f78b43ee25c75894


const Routing = () => {
    return (
        <>
<<<<<<< HEAD
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/bollywood" element={<Bollywood />} />
                <Route path="/technology" element={< Technology />} />
                <Route path="/hollywood" element={<Hollywood />} />
                <Route path="/fitness" element={<Fitenss />} />
                <Route path="/food" element={<Food />} />
                <Route path="/details/:id" element={<CategoryDetail />} />
            </Routes>
            <Footer />
=======
            <Context>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/bollywood" element={<Bollywood />} />
                    <Route path="/technology" element={< Technology />} />
                    <Route path="/hollywood" element={<Hollywood />} />
                    <Route path="/fitness" element={<Fitenss />} />
                    <Route path="/food" element={<Food />} />
                    <Route path="/details/:id" element={<CategoryDetail />} />
                </Routes>
                <Footer />
            </Context>
>>>>>>> f8a4aabfcf6644fce44a4331f78b43ee25c75894
        </>
    )
}

export default Routing