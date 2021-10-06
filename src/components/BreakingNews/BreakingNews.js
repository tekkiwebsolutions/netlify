import React from "react";
import './BreakingNews.css';
import twitter from '../../img/twitter.png';
import twitter_icon from '../../img/twitter_icon.png';
import post_img from '../../img/post_img.png';


function BreakingNew(){

    return(
        <>
           <div className='twitter_row'>
                        <div className='twitter_div'>
                        <img src={twitter_icon} />
                       <div className='twitter_title_email'>
                        <span className='title_bold'>Breitbart News</span>
                        <span>@BreitbartNews</span>
                        </div>
                        <img className='twitter_image' src={twitter} />
                         </div>
         
                         <p>Former acting ICE director slams Mayorkas for 'hiding' border data: 'They're ashamed of the numbers'</p>
                         <img className='twiter_post_img' src={post_img} />
                         <div className='twitter_date_time'><span>3:24 AM</span> <span>Oct 05, 2021 </span></div>
                         <div className='twitter_like'><span>449</span> <span>266</span><span>Copy link to tweet</span></div>
                         <a href=''>Tweet your reply</a>
               
            </div>             
       </>
    )
}
export default BreakingNew