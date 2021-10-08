import React from 'react';
import './SingleAuthorPost.css'
import Rectangle from '../../img/Rectangle.png'

function SingleAuthorPost(){
    return(
        <div className='SingleAuthorPost_txt'>
            <img src={Rectangle}/>
            <div className='SingleAuthorPost_title_txt'>
                <h2>Lorem Ispume</h2>
                <p>It is important to recollect that WhatsApp doesn’t provide how to stop the opposite parties from copying or screenshotting your messages.</p>
            </div>

        </div>
    )
}
export default SingleAuthorPost;