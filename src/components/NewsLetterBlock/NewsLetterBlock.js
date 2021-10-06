import React from "react";
import './NewsLetterBlock.css';

function NewsLetterBlock(){


    return(
    <div className='newsletter_div'>
        <h2>Get The Right News Now</h2>
        <p>By signing up to our newsletter, you agree to receive the Real News directly to your email inbox, and we acknowledge you are a True Patriot!</p>
        <form></form>
        <input type="email" name="newsletter" placeholder="Email" />
        <input type="submit" value="Submit" name='submit' />
         <span>By clicking "Submit" you acknowledge that you have read and agree to our Privacy Policy</span>    
    </div>
        
    )
}


export default  NewsLetterBlock