import React from "react";
import './JustTitlePostDate.css'

function JustTitlePostDate(){

    return(
        <div className='column is-12 JustPostTitleDate' style={{padding: '0px'}}>
            <h1>Cinnamon Rolls Recipe: How I Baked Them</h1>
            <div className='justPostDate'>
                <span>14th</span>
                <span>November</span>
                <span>2019</span>
            </div>
        </div>
    )
}
export default JustTitlePostDate;