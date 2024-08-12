import PropTypes from "prop-types";
import "./FooterFeedbackContainer.css";

const FooterFeedbackContainer = ({ className = "" }) => {
  return (
    <section className={`footer-feedback-container ${className}`}>
      <div className="customer-review-parent">
        <div className="customer-review">
          <div className="review-heading">
            <h1 className="our-coffee-perfection">
              Our coffee perfection feedback
            </h1>
          </div>
          <div className="our-customers-has">
            Our customers has amazing things to say about us
          </div>
        </div>
        <div className="review-container">
          <div className="review-container-child" />
          <div className="customer-review-content">
            <div className="lorem-ipsum-is">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset.....
            </div>
            <h1 className="h1">“</h1>
          </div>
          <div className="reviewer-info">
            <div className="reviewer-name-container">
              <h2 className="jonny-thomas">Jonny Thomas</h2>
              <div className="reviewer-designation-container">
                <div className="project-manager">Project Manager</div>
              </div>
            </div>
          </div>
          <img
            className="review-container-item"
            loading="lazy"
            alt=""
            src="/group-42.svg"
          />
          <img
            className="review-image-icon"
            alt=""
            src="/rectangle-9-1@2x.png"
          />
          <img
            className="review-container-inner"
            loading="lazy"
            alt=""
            src="/group-43.svg"
          />
          <img
            className="coffee-blast-icon3"
            alt=""
            src="/coffee-blast-2@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

FooterFeedbackContainer.propTypes = {
  className: PropTypes.string,
};

export default FooterFeedbackContainer;
