  
import React from 'react';
import { faGithub,faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer my-5 text-center text-white-50 mono-text ">

<div className="social">
          
                <a href="https://github.com/yeatun"
                   target="_blank" rel="noreferrer"  className="facebook social">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                <a href="https://www.linkedin.com/in/yeatun-pabel-29b002185/"  target="_blank" rel="noreferrer" className="twitter social">
                    
                    <FontAwesomeIcon  icon={faLinkedin} size="2x" />
                    </a>
            </div>
        
          {/* <a className="footer-name text-white-50" href="https://github.com/yeatun"><FontAwesomeIcon icon={faGithub} /><br /></a> */}
            
         

          
            <a className="footer-name " href="#"><small>Customized and Designed by kamrul,shoron and pabel</small></a>
        </div>
    );
};

export default Footer;