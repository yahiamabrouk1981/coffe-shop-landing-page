import PropTypes from "prop-types";
import "./GroupComponent2.css";

const GroupComponent2 = ({ className = "" }) => {
  return (
    <section className={`group-section ${className}`}>
      <img className="frame-child5" alt="" src="/rectangle-141@2x.png" />
      <div className="newsletter-image" />
      <div className="subscription-form">
        <div className="subscribe-heading">
          <h1 className="subscribe-to-get">Subscribe to get the Latest News</h1>
        </div>
        <div className="dont-miss-out">
          Don’t miss out on our latest news, updates, tips and special offers
        </div>
      </div>
      <div className="email-input">
        <div className="rectangle-parent6">
          <div className="frame-child6" />
          <div className="email-field">
            <div className="enter-your-mail">Enter your mail</div>
          </div>
          <div className="rectangle-parent7">
            <div className="frame-child7" />
            <b className="suscribe">Suscribe</b>
          </div>
        </div>
      </div>
    </section>
  );
};

GroupComponent2.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent2;
