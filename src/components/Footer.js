import React from 'react'
import { Link } from 'gatsby'

import logo_a from '../img/footer_logo.png'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer" style={{ background: '#0b0d17' }}>
        <div className="content has-text-centered">
          <img
            src={logo_a}
            alt="Kaldi"
            style={{ width: '250px', height: 'auto' }}
          />
        </div>
        <div className="content has-text-centered" >
          <div className="container" style={{ background: '#0b0d17' }}>
            <div style={{ maxWidth: '100vw' }} >
              <div className="column is-12">
                <section className="menu footer_menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                      Opinion
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/">
                      About Us
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/">
                      Contact Us
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/">
                      Privacy Policy 
                      </Link>
                    </li>
        
                  </ul>
                </section>
              </div>
              </div>

              <div className="column is-12 copyright_social"  style={{ padding: '0px' }}>
              <div className="column is-8 copy_right" style={{ padding: '15px 0 0 0' }}>
              <span>© Copyright © 2021 Red Right Times.</span>
              </div>

              <div className="column is-4 social" style={{ padding: '15px 0px 0px 0px', 'text-align': 'right' }}>
                <a title="facebook" href="https://facebook.com">
                 <img
                   src={facebook}
                   alt="Facebook"
                   style={{ width: '1em', height: '1em' }}
                 />
               </a>
               <a title="twitter" href="https://twitter.com">
                 <img
                   className="fas fa-lg"
                   src={twitter}
                   alt="Twitter"
                   style={{ width: '1em', height: '1em' }}
                 />
               </a>
               <a title="instagram" href="https://instagram.com">
                 <img
                   src={instagram}
                   alt="Instagram"
                   style={{ width: '1em', height: '1em' }}
                 />
               </a>
               <a title="vimeo" href="https://vimeo.com">
                 <img
                   src={vimeo}
                   alt="Vimeo"
                   style={{ width: '1em', height: '1em' }}
                 />
               </a>
             </div>
             </div>
 
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
