import PropTypes from "prop-types";
import "./FooterContainer.css";

const FooterContainer = ({ className = "" }) => {
  return (
    <section className={`footer-container ${className}`}>
      <div className="footer-content">
        <div className="footer-brand">
          <img className="pngwing-1-icon" alt="" src="/pngwing-1@2x.png" />
        </div>
        <div className="footer-brand-info">
          <h1 className="bean-scene1">Bean Scene</h1>
          <div className="footer-description">
            <div className="lorem-ipsum-is1">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </div>
            <div className="social-media-icons">
              <img
                className="social-media-icons-child"
                loading="lazy"
                alt=""
                src="/group-50.svg"
              />
              <img
                className="social-media-icons-child"
                loading="lazy"
                alt=""
                src="/group-51.svg"
              />
              <img
                className="social-media-icons-child"
                loading="lazy"
                alt=""
                src="/group-52.svg"
              />
              <img
                className="social-media-icons-child"
                loading="lazy"
                alt=""
                src="/group-53.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-navigation-container">
        <div className="navigation-links">
          <b className="about">About</b>
          <div className="menu-features-news-container">
            <p className="features">Menu</p>
            <p className="features">Features</p>
            <p className="features">{`News & Blogs`}</p>
            <p className="features">{`Help & Supports`}</p>
          </div>
        </div>
        <div className="navigation-links">
          <b className="company">Company</b>
          <div className="menu-features-news-container">
            <p className="features">How we work</p>
            <p className="features">Terms of service</p>
            <p className="features">Pricing</p>
            <p className="features">FAQ</p>
          </div>
        </div>
      </div>
      <div className="contact-info-container">
        <div className="contact-info">
          <img
            className="pngwing-2-icon"
            loading="lazy"
            alt=""
            src="/pngwing-2@2x.png"
          />
        </div>
        <div className="contact-details">
          <b className="contact-us1">Contact Us</b>
          <div className="address-container">
            <div className="akshya-nagar-1st">
              Akshya Nagar 1st Block 1st Cross, Rammurthy nagar,
              Bangalore-560016
            </div>
            <div className="contact-details-container">
              <div className="contact-links">+1 202-918-2132</div>
              <div className="beanscenemailcom">beanscene@mail.com</div>
              <div className="wwwbeanscenecom">www.beanscene.com</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FooterContainer.propTypes = {
  className: PropTypes.string,
};

export default FooterContainer;
