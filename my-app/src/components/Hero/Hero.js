import React from 'react'
import './Hero.css'
import Card from '../UI/Card/Card'
import Logo from '../Logo/Logo'
import './Hero.css'
import Navbar from '../Navbar/Navbar'

export default function Hero(props) {
    return (
        <div>
            
            <Card>
            <div style={{padding: '50px 0'}}>
            <Logo />
            </div>
            <Navbar />
            </Card>
        </div>
    )
}
