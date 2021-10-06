import React from "react";
import './SingleAd.css';
import ad from '../../img/ad.png'


function SingleAd (){

    return(
        <div className="column is-12 banner">
            <img src={ad}  />
        </div>
    )
}

export default SingleAd