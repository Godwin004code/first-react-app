import React from 'react'
import Logo from '../../Logo/Logo'
import './Card.css'

export default function Card(props) {
    return (
        <div className="card" {...props}>
         {props.children}
        </div>
    )
}
