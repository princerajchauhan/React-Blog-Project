import { useEffect } from 'react'
import './Nav.css'
import { NavLink } from 'react-router-dom'


const Navbar = () => {

    useEffect(() => {
        const hamburger = document.querySelector('.hamburger')
        const navMenu = document.querySelector('.nav-menu')


        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('hamActive')
            navMenu.classList.toggle('hamActive')
            // console.log("Clicked", hamburger.classList)
        })
        
        document.querySelectorAll('.nav-item').forEach(n => {
            n.addEventListener('click', () => {
                hamburger.classList.remove('hamActive')
                navMenu.classList.remove('hamActive')
                console.log("Click")
            })
        })

    })

    return (
        <div style={{ width: '85%', margin: 'auto' }}>
            <div className='header'>
                <div className="logo">
                    <span className='verticalText'>The</span>
                    <h1> Siren</h1>
                </div>
                <nav>
                    <ul className='nav-menu'>
                        <li className='nav-item'><NavLink to="/" className='linkClass'>Home</NavLink></li>
                        <li className='nav-item'><NavLink to="/bollywood" className='linkClass'>Bollywood</NavLink></li>
                        <li className='nav-item'><NavLink to="/technology" className='linkClass'>Technology</NavLink></li>
                        <li className='nav-item'><NavLink to="/hollywood" className='linkClass'>Hollywood</NavLink></li>
                        <li className='nav-item'><NavLink to="/fitness" className='linkClass'>Fitness</NavLink></li>
                        <li className='nav-item'><NavLink to="/food" className='linkClass'>Food</NavLink></li>
                    </ul>

                    <div className="hamburger">
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>

                </nav>
            </div>
        </div>
    )
}

export default Navbar