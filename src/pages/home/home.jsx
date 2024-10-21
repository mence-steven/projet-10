import React from 'react';
import { Link } from 'react-router-dom';
import ImageBank from "../../assets/argentBankLogo.png";
import ImageChat from "../../assets/icon-chat.png";
import ImageMoney from "../../assets/icon-money.png";
import ImageSecurity from "../../assets/icon-security.png";
import ImageTree from "../../assets/bank-tree.jpeg";
import './home.scss';

function Home() {
  return (
    <>
      <nav className="main-nav">
        <Link className="main-nav-logo" to={"/"}>
          <img
            className="main-nav-logo-image"
            src={ImageBank}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          <Link className="main-nav-item" to="/signin">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        </div>
      </nav>

      <main>      
        <div className="hero">
        <div className="hero"
        style={{
          backgroundImage: `url(${ImageTree})`,
        }}></div>
          <section className="hero-content">
            <h2 className="sr-only">Promoted Content</h2>
            <p className="subtitle">No fees.</p>
            <p className="subtitle">No minimum deposit.</p>
            <p className="subtitle">High interest rates.</p>
            <p className="text">Open a savings account with Argent Bank today!</p>
          </section>
        </div>

        <section className="features">
          <h2 className="sr-only">Features</h2>
          <div className="feature-item">
            <img src={ImageChat} alt="Chat Icon" className="feature-icon" />
            <h3 className="feature-item-title">You are our #1 priority</h3>
            <p>
              Need to talk to a representative? You can get in touch through our
              24/7 chat or through a phone call in less than 5 minutes.
            </p>
          </div>

          <div className="feature-item">
            <img src={ImageMoney} alt="Money Icon" className="feature-icon" />
            <h3 className="feature-item-title">More savings means higher rates</h3>
            <p>
              The more you save with us, the higher your interest rate will be!
            </p>
          </div>

          <div className="feature-item">
            <img src={ImageSecurity} alt="Security Icon" className="feature-icon" />
            <h3 className="feature-item-title">Security you can trust</h3>
            <p>
              We use top of the line encryption to make sure your data and money
              is always safe.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;