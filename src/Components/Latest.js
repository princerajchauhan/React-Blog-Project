import React from 'react'
import './Latest.css'
import { Link } from 'react-router-dom'

const Latest = ({ imgUrl, title, description, id }) => {

    return (
        <>
            <div className="latestDiv">
            <Link to={`/details/${id}`} style={{ textDecoration: 'none' }} className='linkClass'><img src={imgUrl} alt="" /></Link>
                <div className="content">
                    <Link to={`/details/${id}`} style={{ textDecoration: 'none' }}><h3 data-text={title}>{title.split(' ').slice(0, 5).join(' ')}...</h3></Link>
                    <p>{description.split(' ').slice(0, 40).join(' ')}...</p>
                </div>
            </div>
        </>
    )
}

export default Latest
