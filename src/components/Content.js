import PropTypes from "prop-types";
import "./Content.css";

const Content = ({ className = "" }) => {
  return (
    <section className={`content ${className}`}>
      <div className="coffee-blast-learn-more">
        <div className="coffee-blast-parent">
          <img
            className="coffee-blast-icon2"
            alt=""
            src="/coffee-blast-1@2x.png"
          />
          <div className="group-div">
            <div className="rectangle-div" />
            <a className="learn-more">Learn More</a>
          </div>
        </div>
        <div className="coffee-description-parent">
          <div className="coffee-description">
            <div className="discover-the-best-coffee-parent">
              <h1 className="discover-the-best">Discover the best coffee</h1>
              <div className="bean-scene-is">
                Bean Scene is a coffee shop that provides you with quality
                coffee that helps boost your productivity and helps build your
                mood. Having a cup of coffee is good, but having a cup of real
                coffee is greater. There is no doubt that you will enjoy this
                coffee more than others you have ever tasted.
              </div>
            </div>
          </div>
          <img
            className="mask-group-icon"
            loading="lazy"
            alt=""
            src="/mask-group@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
