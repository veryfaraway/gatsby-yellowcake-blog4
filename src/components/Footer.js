import React from 'react'
// import InstagramFeed from './InstagramFeed'
import Helmet from "react-helmet"
import './Footer.css'

export default () => (
  <div>
    {/* 
    <h2 className="taCenter">
      Follow us{' '}
      <a href="https://instagram.com/thrivegoldcoast/">@thrivegoldcoast</a>
    </h2>
    <br />
    <InstagramFeed count="8" />
    */}
    <footer className="footer">
      <div className="InstagramFeed">
        <Helmet>
          <script src="https://ads-partners.coupang.com/g.js" />
          <script>{`new PartnersCoupang.G({ "id":234828 });`}</script>
        </Helmet>
      </div>
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} All rights reserved. Crafted by{' '}
          <a href="https://thriveweb.com.au/">Thrive</a>.
        </span>
      </div>
    </footer>
  </div>
)
