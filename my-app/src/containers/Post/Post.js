import React from 'react'
import Card from '../../components/UI/Card/Card'
import './Post.css'
import Blogpost from '../../components/blogpost/Blogpost'
import Sidebar from '../../components/Sidebar/Sidebar'

export default function Post(props) {

    console.log(props);

    return (
        <section className="container">
            <Blogpost {...props} />
            <Sidebar />
        </section>
    )
}
