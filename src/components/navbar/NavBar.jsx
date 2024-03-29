import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { BsPerson } from 'react-icons/bs'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-scroll'
import './NavbarStyles.css'

function Navbar() {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)

    return (
        <div name='home' className={nav ? 'navbar navbar-bg' : 'navbar'}>
            <div className={nav ? 'logo dark' : 'logo'}>
                <h2>Durão Travel</h2>
            </div>
            <ul className='nav-menu'>
            <Link to='home' smooth={true} duration={500}><li>Home</li></Link>
            <Link to='destinations' smooth={true} duration={500}><li>Destinations</li></Link>
            <Link to='travel' smooth={true} duration={500}><li>Travel</li></Link>
            <Link to='book' smooth={true} duration={500}><li>Book</li></Link>
            <Link to='views' smooth={true} duration={500}><li>Views</li></Link>
            </ul>
            <div className='nav-icons'>
                <BiSearch className='icon' style={{ marginRight: '1rem' }} />
                <BsPerson className='icon' />
            </div>
            <div className='hamburger' onClick={handleNav}>
                {!nav ? (<HiOutlineMenuAlt4 className='icon' />) : <AiOutlineClose style={{color:'#000'}} className='icon' />}

            </div>
            <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
                <ul>
                    <li>Home</li>
                    <li>Destinations</li>
                    <li>Travel</li>
                    <li>Book</li>
                    <li>Views</li>
                </ul>
                <div className='mobile-menu-bottom'></div>
                <div className='menu-icons'>
                    <button>Search</button>
                    <button>Account</button>
                </div>
                <div className='social-icons'>
                <a href='https://github.com/NunoDurao'>
                    <FaGithub className='icon' />
                    </a>
                    <a href='https://www.linkedin.com/in/nuno-f-durao/'>
                    <FaLinkedin className='icon' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Navbar;