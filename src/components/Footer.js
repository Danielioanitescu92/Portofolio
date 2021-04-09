import './Footer.css';

import cv from '../assets/cv-gray.png'
import email from '../assets/email-gray.png'
import linkedin from '../assets/linkedin-gray.png'
import github from '../assets/github-gray.png'

import lightcv from '../assets/cv.png'
import lightemail from '../assets/email.png'
import lightlinkedin from '../assets/linkedin.png'
import lightgithub from '../assets/github.png'

const Footer = () => {
    return (
        <footer className={ localStorage.getItem(`lightTheme`) ? "lightFooter" : "footer" } >
            <a href="https://drive.google.com/file/d/1mbI65X5qbwnLZN1lFL2uryGIpDDlzO8t/view">
                <img src={localStorage.getItem(`lightTheme`) ? lightcv : cv} className="icon" alt="cv" />
            </a>
            <div className="footer-info">
                <a href="mailto:daniel.ioanitescu@gmail.com">
                    <img src={localStorage.getItem(`lightTheme`) ? lightemail : email} className="icon" alt="email" />
                </a>
                <a href="https://www.linkedin.com/in/daniel-ioanitescu-b08b2a195/">
                    <img src={localStorage.getItem(`lightTheme`) ? lightlinkedin : linkedin} className="icon" alt="linkedin" />
                </a>
                <a href="https://github.com/Danielioanitescu92">
                    <img src={localStorage.getItem(`lightTheme`) ? lightgithub : github} className="icon" alt="github" />
                </a>
            </div>
        </footer>
    );
}

export default Footer;
