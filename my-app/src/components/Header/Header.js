import React from 'react'
import './Header.css'

export default function Header() {
    return (
        <header className="header">
            <nav className="header-menu">
                <a href="#">Home</a>
                <a href="#">About Us</a>
                <a href="#">Contact Us</a>
            </nav>
            <div className="social-media-icon">
                social media icons
            </div>
        </header>
    )
}
