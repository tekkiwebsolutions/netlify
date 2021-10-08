import React from 'react';
import './PrevNextPost.css';

function PrevNextPost(){
    return(
        <div className='prev_next'>
            <div className='prev_next_left'>
            <h2>Previous Post</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and </p>
            </div>
            <div className='prev_next_left prev_right'>
            <h2>Next Post</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
        
        </div>
    )
}
export default PrevNextPost;
