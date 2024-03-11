import React from 'react'
import './FooterStyles.css'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

function Footer() {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='top'>
                    <h3>DURÃO TRAVEL</h3>
                    <div className='social'>
                        <a href='https://github.com/NunoDurao'>
                            <FaGithub className='icon' />
                        </a>
                        <a href='https://www.linkedin.com/in/nuno-f-durao/'>
                            <FaLinkedin className='icon' />
                        </a>
                    </div>
                </div>
                <div className='bottom'>
                    <div className='left'>
                        <ul>
                            <li>About</li>
                            <li>Partnerships</li>
                            <li>Careers</li>
                            <li>Newsletter</li>
                            <li>Advertising</li>
                        </ul>
                    </div>
                    <div className='right'>
                        <ul>
                            <li>Contact</li>
                            <li>Terms</li>
                            <li>Policy</li>
                            <li>Privacy</li>
                            <li>Pricing</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
