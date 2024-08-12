import PropTypes from "prop-types";
import "./AmazingMorning.css";

const AmazingMorning = ({ className = "" }) => {
  return (
    <section className={`amazing-morning ${className}`}>
      <div className="rectangle-parent4">
        <img className="rectangle-icon" alt="" src="/rectangle-14@2x.png" />
        <div className="employee" />
        <h1 className="get-a-chance-container">
          <p className="get-a-chance">Get a chance to have an</p>
          <p className="get-a-chance">Amazing morning</p>
        </h1>
        <div className="morning-description">
          <div className="we-are-giving-container">
            <p className="get-a-chance">
              We are giving you are one time opportunity to
            </p>
            <p className="get-a-chance">
              experience a better life with coffee.
            </p>
          </div>
        </div>
        <div className="rectangle-parent5">
          <div className="frame-child4" />
          <b className="order-now2">Order Now</b>
        </div>
      </div>
      <div className="coffee-bean-cup">
        <div className="bean-cup-image">
          <img className="coffee-bean-icon" alt="" src="/coffee-bean@2x.png" />
          <img className="cup-icon" loading="lazy" alt="" src="/cup@2x.png" />
        </div>
      </div>
    </section>
  );
};

AmazingMorning.propTypes = {
  className: PropTypes.string,
};

export default AmazingMorning;
