import { useMemo } from "react";
import PropTypes from "prop-types";
import "./GroupComponent1.css";

const GroupComponent1 = ({
  className = "",
  propFlex,
  propBackgroundColor,
  propBorder,
  propBackgroundColor1,
  propBorder1,
  coffeeBeans1,
  supremeBeans,
  beansThatProvides,
  greatTaste,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      flex: propFlex,
      backgroundColor: propBackgroundColor,
      border: propBorder,
    };
  }, [propFlex, propBackgroundColor, propBorder]);

  const rectangleDivStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
      border: propBorder1,
    };
  }, [propBackgroundColor1, propBorder1]);

  return (
    <div className={`rectangle-parent2 ${className}`} style={groupDivStyle}>
      <div className="frame-child2" style={rectangleDivStyle} />
      <div className="feature-icons">
        <img
          className="coffee-beans-1-icon"
          loading="lazy"
          alt=""
          src={coffeeBeans1}
        />
      </div>
      <div className="feature-name">
        <h3 className="supreme-beans">{supremeBeans}</h3>
        <div className="feature-description">
          <div className="beans-that-provides-container">
            <p className="beans-that-provides">{beansThatProvides}</p>
            <p className="beans-that-provides">{greatTaste}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

GroupComponent1.propTypes = {
  className: PropTypes.string,
  coffeeBeans1: PropTypes.string,
  supremeBeans: PropTypes.string,
  beansThatProvides: PropTypes.string,
  greatTaste: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propBackgroundColor: PropTypes.any,
  propBorder: PropTypes.any,
  propBackgroundColor1: PropTypes.any,
  propBorder1: PropTypes.any,
};

export default GroupComponent1;
