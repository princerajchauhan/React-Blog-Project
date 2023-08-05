import React from "react";
import { Link } from "react-router-dom";

const TopPost = ({ img_url, description, id }) => {
    return (
        <>
            <div className="leftDiv">
                <div className="leftImage">
                    <img src={img_url} alt="not found" />
                </div>
                <Link to={`/details/${id}`} style={{textDecoration:'none'}} className="linkPara"><p style={{ fontWeight: 500 }}>{description.split(' ').slice(0, 15).join(' ')}</p></Link>
                {/* <p style={{ fontWeight: 500 }}>{description.split(' ').slice(0, 15).join(' ')}</p> */}
            </div>

        </>
    )
}

export default TopPost