import React from 'react'
import Header from '../../components/Header/Header'
import Card from '../../components/UI/Card/Card'
import Img from '../../BlogImages/drop-3698073_1920.jpg'
import './style.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import RecentPost from './RecentPost/RecentPost'

export default function Home(props) {

    const galleryHeight = 450
    const galleryStyle = {
        height: galleryHeight +'px',
        overflow: 'hidden'
    }

    const sideHeight = galleryHeight / 3

    return (
        <div>
            <Card>
                <div className="gallery-post" style={galleryStyle}>
                <section style={{width: '70%'}}>
                    <div style={{width: '100%'}}>
                        <img src={Img} alt="Image" style={{width: '100%'}} />
                    </div>
                </section>
                <section style={{width: '30%'}} className={'side-image-container'}>
                    <div style={{height: sideHeight +'px'}}>
                    <img src={Img} alt="Image" style={{width: '100%'}} />
                    </div>
                    <div style={{height: sideHeight +'px'}}>
                    <img src={Img} alt="Image" style={{width: '100%'}} />
                    </div>
                    <div style={{height: sideHeight +'px'}}>
                    <img src={Img} alt="Image" style={{width: '100%'}} />
                    </div>
                </section>
                </div>
            </Card>

            <section className="home-container">
               <RecentPost />
                <Sidebar />
            </section>
        </div>
    )
}
