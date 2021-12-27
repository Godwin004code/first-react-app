import React from 'react'
import Img from '../../../BlogImages/drop-3698073_1920.jpg'
import Card from '../../../components/UI/Card/Card'

export default function RecentPost() {
    return (
        <div>
             <div style={{width: '70%'}}>

<Card style={{marginBottom: '20px'}}>
<div className="post-img-container">
    <img src={Img} alt="Post img" style={{width: '100%'}} />
</div>
<div style={{textAlign: 'center'}}>
    <span>Featured</span>
    <h2>Why do I hate React so much?</h2>
    <span>posted on December 23, 2021</span>
    <p>
        I feel it is personal hatred, just learning it because it is trending..
    </p>
    <button>Read More</button>
</div>
</Card>



</div>
        </div>
    )
}
