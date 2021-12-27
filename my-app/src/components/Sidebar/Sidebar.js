import React, {useEffect, useState} from 'react'
import Card from '../UI/Card/Card'
import './Sidebar.css'
import Sea from '../../sea.jpg'
import Data from '../../data/blog.json'
import { NavLink } from 'react-router-dom'

export default function Sidebar() {

    const [ posts, setPosts] = useState([])

    useEffect(() => {
        const posts = Data.data
        setPosts(posts)
    }, [posts])

    const styles = {
        marginBottom: '20px',
        padding: '20px',
        boxSizing: 'border-box'
    }
    return (
        <div className="sidebar-container">
            <Card style={styles}>
                <div className="card-header">
                    <span> About Us </span>
                </div>
                    <div className="profile-image-container">
                    <img src={Sea} alt="sidebar-image" />
                    </div>
                <div className="card-body">
                    <p className="personal-bio">
                        My name is Godwin Alugbin, I am a web developer, Front-end development to be precise....
                    </p>
                </div>
            </Card>
            <Card style={styles}>
                <div className="card-header">
                    <span> Social network </span>
                </div>
            </Card>

            <Card style={styles}>
                <div className="card-header">
                    <span> recent posts </span>
                </div>
                <div className="recent-posts">
                   {
                       posts.map(post => {
                           return (
                               <NavLink to={`/post/${post.id}`} key={post.id}>
                                    <div className="post">
                                    <h3>{post.blogTitle}</h3>
                                    <span>{post.postedOn}</span>
                                    </div>
                               </NavLink>
                           )
                       })
                   }
                </div>

                
            </Card>
        </div>
    )
}
