import React, { useState } from 'react'
import './Navbar.css'
import { FaSearch } from "react-icons/fa"
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    const submit = (e) => {
        e.preventDefault();
        alert("Search")
    }
    const [search, setsearch ] = useState(false)

    const openSearch = () => {
        setsearch(true)
    } 
    const searchClass = search ? 'searchInput show-search' : 'searchInput'
    return (
        <>
        <div className="nav">
            <ul className="nav-menu">
                <li><NavLink to="">Home</NavLink></li>
                <li><NavLink to="/post">Posts</NavLink></li>
                <li><NavLink to="/contact">Contact Us</NavLink></li>
                <li><NavLink to="/about">About Us</NavLink></li>
                
            </ul>
            <div className="search">
                <form onSubmit={submit}>
            <input type="text" placeholder="Search" className={searchClass} />
        <FaSearch onClick={openSearch} className="search-icon" />        </form>
        </div>
        </div>
        
        </>
       
    )
}
