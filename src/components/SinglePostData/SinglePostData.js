import React from 'react'
import '../TextTitleDate/TextTitleDate.css'
import './SinglePostData.css'
import Rectangle from '../../img/Rectangle.png'
import single_post from '../../img/single_post.png'


function SinglePostData(){
    return (
         <div className='text_title_date'>
            <h2>Lorem Ipsum is simply dummy text of the printing and typesetting</h2>
        <div className='img_user_date'>
        <img src={Rectangle} />
        <span className='by_format'>By</span>
        <span className='user_format'>User Admin</span>
        <span className='date_format'>October 7, 2021</span>
        </div>
        <img src={single_post}/>
        <div className='column is-12 single_post_data_txt' style={{padding:'0px'}}>
        <p>is entering its nineteenth season as a top-rated naval drama, but despite the show’s popularity, it’s come with its fair share of drama on set, leading to a handful of stars quitting and never looking back. You can rest assured that, at least for now, Mark Harmon will be staying on the show as Special Agent Leroy Jethro Gibbs. (You’ll have to determine whether that’s a good or bad thing after you read through this list!) But as for everyone else in the cast, it seems to be up for debate who stays and who goes.</p>
        <p>is entering its nineteenth season as a top-rated naval drama, but despite the show’s popularity, it’s come with its fair share of drama on set, leading to a handful of stars quitting and never looking back. You can rest assured that, at least for now, Mark Harmon will be staying on the show as Special Agent Leroy Jethro Gibbs. (You’ll have to determine whether that’s a good or bad thing after you read through this list!) But as for everyone else in the cast, it seems to be up for debate who stays and who goes.</p>
        <p>is entering its nineteenth season as a top-rated naval drama, but despite the show’s popularity, it’s come with its fair share of drama on set, leading to a handful of stars quitting and never looking back. You can rest assured that, at least for now, Mark Harmon will be staying on the show as Special Agent Leroy Jethro Gibbs. (You’ll have to determine whether that’s a good or bad thing after you read through this list!) But as for everyone else in the cast, it seems to be up for debate who stays and who goes.</p>
        <p>is entering its nineteenth season as a top-rated naval drama, but despite the show’s popularity, it’s come with its fair share of drama on set, leading to a handful of stars quitting and never looking back. You can rest assured that, at least for now, Mark Harmon will be staying on the show as Special Agent Leroy Jethro Gibbs. (You’ll have to determine whether that’s a good or bad thing after you read through this list!) But as for everyone else in the cast, it seems to be up for debate who stays and who goes.</p>
        <img src={single_post} style={{padding: '30px 0px 20px 0px'}}/>
        <p>is entering its nineteenth season as a top-rated naval drama, but despite the show’s popularity, it’s come with its fair share of drama on set, leading to a handful of stars quitting and never looking back. You can rest assured that, at least for now, Mark Harmon will be staying on the show as Special Agent Leroy Jethro Gibbs. (You’ll have to determine whether that’s a good or bad thing after you read through this list!) But as for everyone else in the cast, it seems to be up for debate who stays and who goes.</p>        
        </div>
        </div>
      
      
    )
}
export default SinglePostData;