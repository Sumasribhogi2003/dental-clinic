import React from 'react';
import '../styles/main.css';

const About = () => (
  <div className="about-page">
    {/* Hero Section */}
    <section className="about-hero">
      <h1>About DentalCare</h1>
      <p>
        Creating beautiful smiles since 2015. We're passionate about making dental care comfortable and accessible.
      </p>
    </section>

    <div className="about-cards-grid">
  <div className="about-section">
    <div className="about-icon">🏥</div>
    <div>
      <h2>Our Story</h2>
      <p>
        Founded in 2015, DentalCare began with a simple mission — to deliver trusted, quality dental services in a
        warm and welcoming environment. Since then, we’ve grown into one of the most recommended dental clinics in
        the region.
      </p>
    </div>
  </div>

  <div className="about-section">
    <div className="about-icon">🦷</div>
    <div>
      <h2>Meet Dr. Smiley Tooth</h2>
      <p>
        <strong>Dr. Smiley Tooth, BDS, MDS</strong> is our lead dentist with over 15 years of experience in cosmetic
        and restorative dentistry. She believes in gentle, effective treatment tailored to each individual’s needs.
      </p>
    </div>
  </div>

  <div className="about-section">
    <div className="about-icon">🎯</div>
    <div>
      <h2>Our Mission</h2>
      <p>
        We strive to make every patient feel at ease, offering compassionate care and the latest dental technologies.
        Your oral health is our top priority.
      </p>
    </div>
  </div>
</div>

  </div>
);

export default About;
