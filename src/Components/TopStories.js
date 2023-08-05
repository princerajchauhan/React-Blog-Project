import React from "react";
import { Link } from "react-router-dom";

const TopStories = ({ title, description, imgUrl, category, id }) => {
    return (
        <>
            <div className="rightDiv">
                <div className="source">
                    {category}
                </div>
                <div className="image">
                    <Link to={`/details/${id}`} style={{ textDecoration: 'none' }} className='linkClass'><img src={imgUrl} alt="not found" /></Link>
                </div>
                <div className="rightSide">
                    <Link to={`/details/${id}`} style={{ textDecoration: 'none' }}><h3 data-text={title.split(' ').slice(0, 5).join(' ')}>{title.split(' ').slice(0, 5).join(' ')}</h3></Link>
                    <p>{description.split(' ').slice(0, 40).join(' ')}...</p>
                </div>
            </div>
        </>
    )
}

export default TopStories