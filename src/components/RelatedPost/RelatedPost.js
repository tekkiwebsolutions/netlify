import React from 'react';
import './RelatedPost.css'
import post_img from  '../../img/post_im.png'

function RelatedPost(){

    return(

        
        <div className='RelatedPost'>
            <div className='RelatedPost_data'>
                <img src={post_img} />
                <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy </p>
                <div class="img_user_date"><span class="by_format">By</span><span class="user_format">User Admin</span><span class="date_format">October 7, 2021</span></div>
            </div>
            </div>
     
    )
}

export default RelatedPost