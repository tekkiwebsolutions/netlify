import React from 'react'
import './SinglePostDetail.css'
import single_post from '../../img/single_post.png'
import Group55 from '../../img/Group55.png'


function SinglePostDetail(){

    return(
        
        <div className='SinglePostDetail'>
    <div className='SinglePostDetail_top_data'>
    <div className='SinglePostDetail_top_title'>   
    <h2>Lt. Col. Scheller Incarcerated and Sent to the Brig for Speaking Out against Weak US Generals for Surrendering Afghanistan, Stranding Americans and Arming Taliban Terrorists</h2>
    <div className='img_user_date'>
    <span className='publish_date'>Published September 27, 2021 at 9:34pm</span>
    <span className='by_user'>By Jim Hoft</span>
    </div>
    </div>
    <div className='SinglePostDetail_top_img'>
    <img src={single_post}/>
   </div>
    </div>
    
    <div className='column is-12 socialsharing_txt' style={{padding:'0px'}}>
    <div className='column is-2 social_sharing' style={{padding:'0px'}}><img src={Group55}/></div>
    <div className='column is-10 post_des' style={{padding:'0px'}}>
        <p>In late August, Marine Battalion Commander Lt. Col. Stuart Scheller took a blowtorch to the woke military leadership for their failures in Afghanistan that resulted in 13 US servicemen dying.</p>
        <p>Lt. Col. Stuart Scheller, a 17-year veteran, risked his career and pension when he posted a scathing rebuke of the senior military leaders who failed US servicemen serving in Afghanistan.</p>
        <p>On Monday Lt. Col. Stuart Scheller was arrested and sent to the brig.</p>
        <p>You are not allowed to speak out against Joe Biden. Even if you retire from your post earlier in the month.</p>
        <p>It is important to recollect that WhatsApp doesn’t provide how to stop the opposite parties from copying or screenshotting your messages. the corporate has not confirmed when the new feature is going to be available. an identical feature was popularized by Snapchat, and other messaging platforms like</p>
        <img style={{padding:'20px 0 30px 0'}} src={single_post}/>
        <p>On Monday Lt. Col. Stuart Scheller was arrested and sent to the brig.</p>
        <p>You are not allowed to speak out against Joe Biden. Even if you retire from your post earlier in the month.</p>
        <p>It is important to recollect that WhatsApp doesn’t provide how to stop the opposite parties from copying or screenshotting your messages. the corporate has not confirmed when the new feature is going to be available. an identical feature was popularized by Snapchat, and other messaging platforms like</p>
    </div>
    </div>
    </div>
    )
}
export default SinglePostDetail;