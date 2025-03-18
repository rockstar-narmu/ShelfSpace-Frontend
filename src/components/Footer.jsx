import React from 'react';
import '../styles/footer.css'; // Import your CSS

const Footer = () => {
  return (
    <div className="footer">
      <div className="miss">
        <p className="dont-miss">Don't Miss Out!</p>

        <div className="vip">
          <p>
            Join our Prime Subscription for direct contact with authors, exclusive
            <br /> contents, new releases, latest news and more!
          </p>
          <label htmlFor="email">Email address:*</label> {/* htmlFor for accessibility */}
          <div className="mail-box">
            <img src="/assets/icons/gmail.png" alt="gmail" height="42" width="42" />
            <input
              type="email"
              id="email" // Add ID to match htmlFor
              placeholder="Enter your email address"
              className="email"
              required
            />
            <br />
            <br />
          </div>
          <label htmlFor="phone">Phone number:*</label> {/* htmlFor for accessibility */}
          <div className="phone-box">
            <img src="/assets/icons/phone.png" alt="phone" height="42" width="42" />
            <input
              type="number"
              id="phone" // Add ID to match htmlFor
              placeholder="Enter your phone number"
              className="phone"
              required
            />
          </div>

          <button type="submit" className="subscribe">
            SUBSCRIBE
          </button>
        </div>
      </div>

      <div className="footer-right">
        <div className="other-links">
          <div className="company">
            <p>Company</p>
            <ul>
              <li>About Us</li>
              <li>Career</li>
              <li>Blog</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div className="customer-service">
            <p>Customer Service</p>
            <ul>
              <li>Payment</li>
              <li>Shipping</li>
              <li>FAQ</li>
              <li>Redeem Rewards</li>
            </ul>
          </div>

          <div className="policies">
            <p>Policies</p>
            <ul>
              <li>Privacy Policies</li>
              <li>Terms of Use</li>
              <li>Secure Shipping</li>
              <li>Copyright Policy</li>
            </ul>
          </div>
        </div>

        <div className="logo-media">
          <img src="/assets/logos/logo.png" alt="logo" height="100" width="140" className="footer-logo" />
          <div className="medias">
            <p>Follow us on:</p>
            <div className="media-icons">
              <img src="/assets/icons/facebook.png" alt="facebook" height="25" width="25" />
              <img src="/assets/icons/instagram.png" alt="instagram" height="25" width="25" />
              <img src="/assets/icons/twitter.png" alt="twitter" height="25" width="25" />
              <img src="/assets/icons/youtube.png" alt="youtube" height="25" width="25" />
              <img src="/assets/icons/tiktok.png" alt="tiktok" height="25" width="25" />
              <img src="/assets/icons/pinterest.png" alt="pinterest" height="25" width="25" />
            </div>
          </div>
        </div>
        <p className="copyrights">&copy; Copyright 2025 Shelfspace. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;