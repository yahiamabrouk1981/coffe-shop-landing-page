import { useMemo } from "react";
import PropTypes from "prop-types";
import "./GroupComponent.css";

const GroupComponent = ({
  className = "",
  typeImage,
  cappuccino,
  propMinWidth,
}) => {
  const cappuccinoStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={`coffee-type-cards-parent ${className}`}>
      <div className="coffee-type-cards">
        <div className="coffee-type-cards-child" />
        <img
          className="type-image-icon"
          loading="lazy"
          alt=""
          src={typeImage}
        />
        <div className="type-details">
          <div className="coffee-name">
            <div className="type-name">
              <b className="cappuccino" style={cappuccinoStyle}>
                {cappuccino}
              </b>
            </div>
            <div className="coffee-50">Coffee 50% | Milk 50%</div>
            <div className="monday-wrapper">
              <b className="monday">$8.50</b>
            </div>
          </div>
        </div>
      </div>
      <div className="frame-wrapper">
        <div className="rectangle-parent1">
          <div className="frame-child1" />
          <b className="order-now1">Order Now</b>
        </div>
      </div>
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
  typeImage: PropTypes.string,
  cappuccino: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
};

export default GroupComponent;
