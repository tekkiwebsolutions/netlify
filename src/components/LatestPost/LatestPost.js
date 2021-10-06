import React from "react";
import './LatestPost.css';
import post_img from '../../img/post_img.png';

function LatestPost(){

    return(
      
      <> 
      <div className='lastest_post'>
      <div style={{padding: '0'}}>
      <ul>
     <li>
     <img src={post_img} />
      <div className="latest_post_content">
      <button>News</button>
      <h2>Lorem Ipsum is simply text dummy text of the printing and type setting</h2>
      <div className="date_user">
      <span>Oct 10 2021</span>
      <p>by Admin</p>
      </div>
      </div>  
     </li>
     <li>
     <img src={post_img} />
      <div className="latest_post_content">
      <button>News</button>
      <h2>Lorem Ipsum is simply text dummy text of the printing and type setting</h2>
      <div className="date_user">
      <span>Oct 10 2021</span>
      <p>by Admin</p>
      </div>
      </div>  
     </li>
     </ul>
     </div>
     </div>
     </> 
    )
}
export default LatestPost;