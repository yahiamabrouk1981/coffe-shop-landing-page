import Header from "../components/Header";
import Content from "../components/Content";
import CoffeeStyle from "../components/CoffeeStyle";
import WhyChooseUs from "../components/WhyChooseUs";
import AmazingMorning from "../components/AmazingMorning";
import GroupComponent2 from "../components/GroupComponent2";
import FooterFeedbackContainer from "../components/FooterFeedbackContainer";
import FooterContainer from "../components/FooterContainer";
import "./BeanSceneCoffeeLandingpage.css";

const BeanSceneCoffeeLandingpage = () => {
  return (
    <div className="bean-scene-coffee-landingpage">
      <section className="rectangle-parent">
        <div className="frame-child" />
        <img className="fotter-image-icon" alt="" src="/fotter-image@2x.png" />
      </section>
      <img className="coffee-image-icon" alt="" src="/coffee-image@2x.png" />
      <img
        className="coffee-blast-icon"
        loading="lazy"
        alt=""
        src="/coffee-blast@2x.png"
      />
      <Header />
      <Content />
      <CoffeeStyle />
      <WhyChooseUs />
      <AmazingMorning />
      <GroupComponent2 />
      <FooterFeedbackContainer />
      <img className="coffee-blast-icon1" alt="" src="/coffee-blast-3@2x.png" />
      <FooterContainer />
    </div>
  );
};

export default BeanSceneCoffeeLandingpage;
