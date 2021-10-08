import React from "react";
import logo from '../../img/logo.png'
import './nav.css'


function navbar(){

    return(
        <div>
        <header style={{'text-align':'center'}}>
        <img src={logo} alt="Kaldi" style={{ width: 'auto' }} />
        </header>

        <nav className="column is-12">
        <ul>
            <li><a href=''>HomePage</a></li>
            <li><a href=''>Trending Truths</a></li>
            <li><a href=''>About Us</a></li>
            <li><a href=''>Privacy Policy</a></li>
            <li><a href=''>Contact Us</a></li>
        </ul>
        </nav>
        </div>
    )
}

export default navbar