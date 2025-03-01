import React from 'react';
import './Website.css';

const Website = () => {
  return (
    <div className="website">
      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <img src="/cow.png" alt="Sahiwal Cow" className="hero-image" />
          <div className="hero-text">
            <h1>Swarn Kalash Enterprise</h1>
            <h2>Premium Sahiwal Cow Milk – A2 Protein for a Healthier Life!</h2>
          </div>
        </div>
      </header>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <h2>Why Choose Sahiwal Cow Milk?</h2>
        <div className="benefits">
          <div className="benefit-card">
            <div className="benefit-icon">🌿</div>
            <div className="benefit-content">
              <h3>Pure A2 Protein</h3>
              <p>Supports digestion and overall well-being</p>
            </div>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">💪</div>
            <div className="benefit-content">
              <h3>Nutrient Rich</h3>
              <p>High in Vitamin B12, Calcium, and Vitamin A</p>
            </div>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">👶</div>
            <div className="benefit-content">
              <h3>Family Friendly</h3>
              <p>Great for kids' brain development and strong bones</p>
            </div>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">🏡</div>
            <div className="benefit-content">
              <h3>Ethically Sourced</h3>
              <p>From happy, well-fed cows in a hygienic environment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="products">
        <h2>Our Products</h2>
        <div className="product-list">
          <div className="product">
            <span className="emoji">🥛</span>
            <h3>Pure A2 Sahiwal Cow Milk</h3>
            <p>Premium quality milk rich in nutrients and easy to digest</p>
          </div>
          <div className="product">
            <span className="emoji">🥛</span>
            <h3>Chaach (Buttermilk)</h3>
            <p>A refreshing probiotic drink</p>
          </div>
          <div className="product">
            <span className="emoji">🧈</span>
            <h3>Pure Desi Ghee</h3>
            <p>Traditionally made, nutrient-rich, and full of flavor</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2>Location & Contact</h2>
        <div className="contact-info">
          <p>📍 Village Shikaar Pur, New Delhi (Just 20 minutes from Dwarka Sec-12)</p>
          <div className="contact-numbers">
            <p>📞 Manoj: +91 9005566559</p>
            <p>📞 Sher Singh: +91 9871680851</p>
          </div>
        </div>
      </section>

      <footer>
        <p>Choose Swarn Kalash Enterprise – Where purity meets tradition!</p>
      </footer>
    </div>
  );
};

export default Website; 