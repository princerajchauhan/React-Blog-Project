import React, { useEffect, useContext, useState } from 'react'
import Data from '../Data'
import Latest from './Latest'
import TopStories from './TopStories'
import TopPost from './TopPost'
import Navbar from './Navbar'
import Adv from '../Advertisement'

const Food = () => {
    window.scrollTo(0,0)

    const context = useContext(Data)
    const advert = useContext(Adv)

    useEffect(() => {
        document.title = `Blog Machine - Food`
    })

    const [topthree] = useState(context.sort(() => Math.random() - Math.random()).filter(item => item.category === 'Food').slice(0, 3))

    const [topContext] = useState(context.sort(() => Math.random() - Math.random()).filter(item => item.category === 'Food').slice(0, 10))

    const [letfTop] = useState(context.sort(() => Math.random() - Math.random()).filter(item => item.category === 'Food').slice(0, 5))

    return (
        <>
            <Navbar />
            <div style={{ width: '85%', margin: '20px auto' }}>
                <h1>Food</h1>
                <div className="topComp">
                    {
                        topthree.map((item, index) => {
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
                                advert.sort(() => Math.random() - Math.random()).filter(item => item.category === 'FoodAdv').slice(0, 3).map((element, index) => {
                                    return (
                                        <div className="adv" key={index}>
                                            <img src={element.img_url} alt='Not found'/>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Food