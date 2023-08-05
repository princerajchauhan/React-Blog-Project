import React, { useContext, useState } from "react";
import Data from "../Data";
import { useParams, Link, useNavigate } from "react-router-dom";
import './Details.css'
import admin from './admin.png'

const CategoryDetail = () => {
    window.scrollTo(0, 0)

    const context = useContext(Data)
    const navigate = useNavigate()

    const [moreImage] = useState(context.sort(() => Math.random() - Math.random()).slice(0, 3))

    const id = parseInt(useParams().id)


    return (
        <div style={{ width: '85%', margin: 'auto' }}>
            <button onClick={() => navigate(-1)} className="goBackBtn"><i className="fa-solid fa-arrow-left"></i> Back</button>
            <div className="headDetail">
                <div className="logo logo1">
                    <span className='verticalText'>The</span>
                    <h1> Siren</h1>
                </div>
                <button className="detailBtn">Get Started</button>
            </div>

            <div className="topDiv">
                <div className="likeShare">
                    <div className="icons">
                        <i className="fa-solid fa-thumbs-up"></i> <span> Like</span>
                    </div>
                    <div className="icons">
                        <i className="fa-solid fa-share-from-square"></i> <span> Share</span>
                    </div>
                </div>

                <div className="detailSide">
                    {
                        context.filter(item => item.id === id).map((item, index) => {

                            // <h1>{context[id].id} {context[id].title}</h1>
                            return (
                                <span key={index}>
                                    <h1> {item.title}</h1>
                                    <div className="staticContent">

                                        <div className="admin">
                                            <img src={admin} alt=" Not found" />
                                            <div>
                                                <p> Prince Raj Chauhan </p>
                                                <span style={{ fontWeight: 600, fontSize: 14, color: 'gray' }}>31 July 2023</span>
                                            </div>
                                        </div>
                                        <div className="fontIcons">
                                            <i className="fa-brands fa-square-facebook"></i>
                                            <i className="fa-brands fa-square-twitter"></i>
                                            <i className="fa-brands fa-instagram"></i>
                                            <i className="fa-brands fa-youtube"></i>
                                        </div>
                                    </div>

                                    <div className="detailcontent">
                                        <img src={item.img_url} alt="" />
                                        <p>{item.description}</p>
                                    </div>

                                    <div className="bottomLike">
                                        <div className="icons">
                                            <i className="fa-solid fa-thumbs-up"></i> Like
                                        </div>
                                        <div className="admin">
                                            <img src={admin} alt=" Not found" />
                                            <div>
                                                <p style={{ letterSpacing: 1 }}>WRITTEN BY</p>
                                                <p style={{ fontSize: 18, fontWeight: 500, margin: '8px 0' }}>
                                                    Prince Raj Chauhan
                                                </p>
                                                <span style={{ fontWeight: 600, fontSize: 14, color: 'gray' }}>31 July 2023</span>
                                            </div>
                                        </div>
                                    </div>
                                </span>
                            )
                        })
                    }
                </div>
            </div>

            <div style={{ marginTop: '70px 0', backgroundColor: 'white' }}>

                <h1 style={{ margin: '70px 0', fontWeight: '600' }}>More From The Siren</h1>
                <div className="topComp">
                    {
                        moreImage.map((element, index) => {
                            return (
                                <div className="latestDiv" key={index}>
                                    <Link to={`/details/${element.id}`} style={{ textDecoration: 'none' }} className='linkClass'><img src={element.img_url} alt="" /></Link>
                                    <div className="content">
                                        <Link to={`/details/${element.id}`} style={{ textDecoration: 'none' }}><h3 data-text={element.title}>{element.title.split(' ').slice(0, 5).join(' ')}...</h3></Link>
                                        <p>{element.description.split(' ').slice(0, 40).join(' ')}...</p>
                                    </div>
                                </div >
                            )
                        })
                    }
                </div>
            </div>

        </div >
    )
}

export default CategoryDetail