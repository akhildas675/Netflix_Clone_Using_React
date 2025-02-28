import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="lists">
                    <ul>
                        <li>FAQ</li>
                        <li>Investor Relations</li>
                        <li>Privacy</li>
                        <li>Speed Test</li>
                    </ul>
                    <ul>
                        <li>Help Center</li>
                        <li>Jobs</li>
                        <li>Cookie Preferences</li>
                        <li>Legal Notices</li>
                    </ul>
                    <ul>
                        <li>Account</li>
                        <li>Ways to Watch</li>
                        <li>Corporate Information</li>
                        <li>Only on Netflix</li>
                    </ul>
                    <ul>
                        <li>Media Center</li>
                        <li>Terms of Use</li>
                        <li>Contact Us</li>
                    </ul>
                </div>

               
                <div className="language-selector">
                    <select>
                        <option>English</option>
                        <option>Hindi</option>
                    </select>
                </div>

             
                <div className="footer-text">
                    © 2024 Netflix Clone. All Rights Reserved.
                </div>
            </div>
        </div>
    );
}

export default Footer;
