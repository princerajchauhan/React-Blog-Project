import React from "react";
import loading from "./loadingball.gif"

const Spinner = () => {
    return (
        <div style={{textAlign:'center'}}>
            <img src={loading} alt="loading" className="my-3" />
        </div>
    )
}

export default Spinner