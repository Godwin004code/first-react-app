import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import Card from '../UI/Card/Card'
import './Blogpost.css'
import Sea from '../../sea.jpg'
import Data from '../../data/blog.json'


export default function Blogpost(props) {
    
    const [post, setPost ] = useState({})

    // const {PostIdNum} = useParams()

    // useEffect(() => {
    //     const post = Data.data.find(post => post.id ===parseInt(PostIdNum))

    //     console.log(post);
    //     setPost(post)
    // }, post)
    return (
        <>
            <div className="blog-post-container">
                <Card style={{width: '90%'}}>
                <div className="blog-header">
                    <div className="blog-category"> Featured </div>
                    <div className="post-title"> dele </div>
                    <span className="posted-by">posted on December 14, 2021 by Ife Blogging Tips</span>
                </div>
                <div className="post-image-container">
                    <img src={Sea} alt="blog-image" />
                </div>
                <div className="post-content">
                    <h3>Post Title</h3>
                    <p>Lorem Tpsum</p>
                </div>
                
                </Card>
            </div>
        </>
    )
}
