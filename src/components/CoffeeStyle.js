import GroupComponent from "./GroupComponent";
import PropTypes from "prop-types";
import "./CoffeeStyle.css";

const CoffeeStyle = ({ className = "" }) => {
  return (
    <section className={`coffee-style ${className}`}>
      <div className="coffee-style-description">
        <div className="enjoy-description">
          <div className="enjoy-blend">
            <div className="enjoy-coffee">
              <h1 className="enjoy-a-new">Enjoy a new blend of coffee style</h1>
            </div>
            <div className="explore-all-flavours">
              Explore all flavours of coffee with us. There is always a new cup
              worth experiencing
            </div>
          </div>
        </div>
        <div className="frame-parent">
          <GroupComponent
            typeImage="/rectangle-7@2x.png"
            cappuccino="Cappuccino"
          />
          <GroupComponent
            typeImage="/rectangle-9@2x.png"
            cappuccino="Chai Latte"
            propMinWidth="104px"
          />
          <GroupComponent
            typeImage="/rectangle-11@2x.png"
            cappuccino="Macchiato"
            propMinWidth="106px"
          />
          <GroupComponent
            typeImage="/rectangle-13@2x.png"
            cappuccino="Expresso"
            propMinWidth="93px"
          />
        </div>
      </div>
    </section>
  );
};

CoffeeStyle.propTypes = {
  className: PropTypes.string,
};

export default CoffeeStyle;
