import React from 'react'
import './TextTitleDate.css'
import Rectangle from '../../img/Rectangle.png'
import single_post from '../../img/single_post.png'
import Group55 from '../../img/Group55.png'

function TextTitleDate(){
    return (
        <div className='text_title_date'>
            <h2>Lorem Ipsum is simply dummy text of the printing and typesetting</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting indu stry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the </p>
        <div className='img_user_date'>
        <img src={Rectangle} />
        <span className='by_format'>By</span>
        <span className='user_format'>User Admin</span>
        <span className='date_format'>October 7, 2021</span>
        </div>
        <img src={single_post}/>
        <div className='column is-12 socialsharing_txt' style={{padding:'0px'}}>
        <div className='column is-2 social_sharing' style={{padding:'0px'}}><img src={Group55}/></div>
        <div className='column is-10 post_des' style={{padding:'0px'}}>
            <p>In late August, Marine Battalion Commander Lt. Col. Stuart Scheller took a blowtorch to the woke military leadership for their failures in Afghanistan that resulted in 13 US servicemen dying.</p>
            <p>Lt. Col. Stuart Scheller, a 17-year veteran, risked his career and pension when he posted a scathing rebuke of the senior military leaders who failed US servicemen serving in Afghanistan.</p>
            <p>On Monday Lt. Col. Stuart Scheller was arrested and sent to the brig.</p>
            <p>You are not allowed to speak out against Joe Biden. Even if you retire from your post earlier in the month.</p>
            <p>It is important to recollect that WhatsApp doesn’t provide how to stop the opposite parties from copying or screenshotting your messages. the corporate has not confirmed when the new feature is going to be available. an identical feature was popularized by Snapchat, and other messaging platforms like</p>
        </div>
        </div>
        </div>
    )
}
export default TextTitleDate;