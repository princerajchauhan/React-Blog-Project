import React, { useContext, useEffect, useState } from 'react'
// import axios from 'axios '
import './Home.css'
import Latest from './Latest'
import Data from '../Data'
import TopStories from './TopStories'
import TopPost from './TopPost'
import Navbar from './Navbar'
import Adv from '../Advertisement'


const Home = () => {
    useEffect(() => {
        document.title = `Blog Machine`
    })
    const context = useContext(Data)
    const advert = useContext(Adv)

    const [topImage, setTopImage] = useState(context.sort(() => Math.random() - Math.random()).slice(0, 3))
    useEffect(() => {
        const setId = setInterval(() => {
            setTopImage(context.sort(() => Math.random() - Math.random()).slice(0, 3))
            // console.log(topImage)
            // console.log(new Date().getSeconds())
        }, 5000)
        return (() => {
            clearInterval(setId)
            // console.log('clear')
        })
    })


    const [newContext] = useState(context.sort(() => Math.random() - Math.random()).slice(0, 3))

    const [topContext] = useState(context.sort(() => Math.random() - Math.random()).slice(0, 10))

    const [letfTop] = useState(context.sort(() => Math.random() - Math.random()).slice(0, 5))

    return (
        <>
            <Navbar />
            <div style={{ width: '85%', margin: 'auto' }}>

                {/* ******************* Top 3 Images *************************** */}
                <div className='mainDiv'>
                    <div className="firstTop">
                        <img src={topImage[0].img_url} alt="" />
                        <div className='firstTopPara'>
                            <p className='topTitle'>{topImage[0].title.split(' ').slice(0, 8).join(' ')}</p>
                            <p>{topImage[0].description.split(' ').slice(0, 30).join(' ')}...</p>
                        </div>
                    </div>
                    <div className="leftImg">
                        <div className="secondTop">
                            <img src={topImage[1].img_url} alt="" />
                            <div className='firstTopPara'>
                                <p className='topTitle'>{topImage[1].title.split(' ').slice(0, 3).join(' ')}</p>
                                <p>{topImage[1].description.split(' ').slice(0, 10).join(' ')}...</p>
                            </div>
                        </div>
                        <div className="thirdTop">
                            <img src={topImage[2].img_url} alt="" />
                            <div className='firstTopPara'>
                                <p className='topTitle'>{topImage[2].title.split(' ').slice(0, 3).join(' ')}</p>
                                <p>{topImage[2].description.split(' ').slice(0, 10).join(' ')}...</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ margin: '20px auto' }}>

                    {/* **************** The Latest Section ******************** */}
                    <h1 className='latest'>The Latest</h1>
                    <div className="latestComp">
                        {
                            newContext.map((item, index) => {
                                return (
                                    <Latest imgUrl={item.img_url} description={item.description} title={item.title} id={item.id} key={index} />
                                )
                            })
                        }
                    </div>


                    {/* **************** Top Stories Section ******************** */}
                    <h1 className='latest'>Top Stories</h1>

                    <div className="topStoriesComp">
                        <div className="rightStories">
                            {
                                topContext.map((element, index) => {
                                    return (
                                        <TopStories imgUrl={element.img_url} description={element.description} title={element.title} category={element.category} id={element.id} key={index} />
                                    )
                                })
                            }
                        </div>

                        <div className="leftStories">
                            <h1 className='latestTop'>Top Posts</h1>
                            {
                                letfTop.map((element, index) => {
                                    return (
                                        <TopPost img_url={element.img_url} description={element.description} id={element.id} key={index} />
                                    )
                                })
                            }


                            {/* ************** ADVERTISEMENT ******************* */}
                            <div className="advertisement">
                                <p data-text="Advertisement">Advertisement</p>
                                {
                                    advert.sort(() => Math.random() - Math.random()).slice(0, 3).map((element, index) => {
                                        return (
                                            <div className="adv" key={index}>
                                                <img src={element.img_url} alt='Not found' />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Home