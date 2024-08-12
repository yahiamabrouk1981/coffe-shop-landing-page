import GroupComponent1 from "./GroupComponent1";
import PropTypes from "prop-types";
import "./WhyChooseUs.css";

const WhyChooseUs = ({ className = "" }) => {
  return (
    <section className={`why-choose-us ${className}`}>
      <div className="why-choose-us-description">
        <div className="different-description">
          <div className="different-reason">
            <div className="why-different">
              <h1 className="why-are-we">Why are we different?</h1>
            </div>
            <div className="we-dont-just">
              We don’t just make your coffee, we make your day!
            </div>
          </div>
        </div>
        <div className="frame-group">
          <GroupComponent1
            coffeeBeans1="/coffeebeans-1@2x.png"
            supremeBeans="Supreme Beans"
            beansThatProvides="Beans that provides"
            greatTaste="great taste"
          />
          <GroupComponent1
            propFlex="0.783"
            propBackgroundColor="#fff9f1"
            propBorder="1px solid rgba(249, 192, 106, 0.42)"
            propBackgroundColor1="#fff9f1"
            propBorder1="1px solid rgba(249, 192, 106, 0.42)"
            coffeeBeans1="/badge-1@2x.png"
            supremeBeans="High Quality"
            beansThatProvides="We provide the"
            greatTaste="highest quality"
          />
          <GroupComponent1
            propFlex="0.8679"
            propBackgroundColor="#fff9f1"
            propBorder="1px solid rgba(249, 192, 106, 0.42)"
            propBackgroundColor1="#fff9f1"
            propBorder1="1px solid rgba(249, 192, 106, 0.42)"
            coffeeBeans1="/coffeecup-1@2x.png"
            supremeBeans="Extraordinary "
            beansThatProvides="Coffee like you have"
            greatTaste="never tasted"
          />
          <GroupComponent1
            propFlex="1"
            propBackgroundColor="#fff9f1"
            propBorder="1px solid rgba(249, 192, 106, 0.42)"
            propBackgroundColor1="#fff9f1"
            propBorder1="1px solid rgba(249, 192, 106, 0.42)"
            coffeeBeans1="/bestprice-1@2x.png"
            supremeBeans="Affordable Price"
            beansThatProvides="Our Coffee prices are"
            greatTaste="easy to afford"
          />
        </div>
        <div className="great-ideas">
          <div className="great-coffee-description">
            <div className="great-ideas-start-container">
              <p className="great-ideas-start">
                Great ideas start with great coffee, Lets help you achieve that
              </p>
              <p className="get-started-today">
                <b>Get started today.</b>
              </p>
            </div>
            <div className="join-us-button">
              <div className="rectangle-parent3">
                <div className="frame-child3" />
                <b className="join-us">Join Us</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

WhyChooseUs.propTypes = {
  className: PropTypes.string,
};

export default WhyChooseUs;
