import PropTypes from "prop-types";
import "./Header.css";

const Header = ({ className = "" }) => {
  return (
    <section className={`header ${className}`}>
      <div className="overlay" />
      <header className="brand-navigation">
        <div className="brand">
          <a className="bean-scene">Bean Scene</a>
        </div>
        <nav className="navigation">
          <nav className="page-links">
            <a className="home">Home</a>
            <a className="menu">Menu</a>
            <a className="about-us">About Us</a>
            <a className="contact-us">Contact Us</a>
          </nav>
        </nav>
        <div className="user-actions">
          <div className="sign-in-button">
            <a className="sign-in">Sign In</a>
          </div>
          <div className="rectangle-group">
            <div className="frame-item" />
            <a className="singup">SingUp</a>
          </div>
        </div>
      </header>
      <div className="hero">
        <div className="hero-heading">
          <div className="weve-got-your">
            We’ve got your morning covered with
          </div>
          <h1 className="coffee">Coffee</h1>
          <div className="it-is-best-container">
            <p className="it-is-best">
              It is best to start your day with a cup of coffee. Discover the
            </p>
            <p className="it-is-best">
              best flavours coffee you will ever have. We provide the best
            </p>
            <p className="it-is-best">for our customers.</p>
          </div>
        </div>
        <div className="rectangle-container">
          <div className="frame-inner" />
          <b className="order-now">Order Now</b>
        </div>
      </div>
    </section>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
