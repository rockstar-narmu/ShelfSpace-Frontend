import React from "react";
import "../styles/header.css"

const Header = () => {
  return (
    <div className="header">
      <div className="prime">
        Never miss a New Release or exclusive content - Join our Prime Subscription
      </div>

      <div className="social-media">
        <img src="/assets/icons/facebook.png" alt="Facebook" height="25" width="25" />
        <img src="/assets/icons/instagram.png" alt="Instagram" height="25" width="25" />
        <img src="/assets/icons/twitter.png" alt="Twitter" height="25" width="25" />
        <img src="/assets/icons/youtube.png" alt="YouTube" height="25" width="25" />
        <img src="/assets/icons/tiktok.png" alt="TikTok" height="25" width="25" />
        <img src="/assets/icons/pinterest.png" alt="Pinterest" height="25" width="25" />
      </div>
    </div>
  );
};

export default Header;
