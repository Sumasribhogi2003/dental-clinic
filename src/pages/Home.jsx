import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/main.css';
import dentalImage from '../images/dental.jpeg';


const services = [
  { icon: "🦷", title: "General Dentistry" },
  { icon: "😃", title: "Cosmetic Dentistry" },
  { icon: "🧲", title: "Braces & Orthodontics" },
  { icon: "🩺", title: "Root Canal Treatment" },
  { icon: "🛠️", title: "Dental Implants" },
  { icon: "✨", title: "Teeth Whitening" },
];

const Home = () => (
  <div className="home-page">

    {/* Hero Section */}
    <section className="hero enhanced-hero">
  <div className="hero-text">
    <h1>Welcome to <span className="highlight">DentalCare</span></h1>
    <p>Bringing Confidence to Your Smile with Gentle, Personalized Care.</p>
    <Link to="/contact" className="btn">Book Your Appointment Today</Link>
  </div>
  <div className="hero-image">
<img src={dentalImage} alt="Happy patient with a bright smile" className="blinking-image" />
  </div>
</section>


    {/* Introduction */}
    {/* Brief Introduction */}
<section className="intro">
  <h2>Why Choose DentalCare?</h2>
  <p>
    At DentalCare, we are committed to providing exceptional dental care in a friendly, comfortable, and modern environment.
    Our experienced team uses the latest technology to offer a wide range of services — from preventive care and cleanings to 
    cosmetic enhancements and restorative treatments.
  </p>
  <p>
    Whether you're coming in for a routine check-up or a complete smile makeover, we tailor our services to meet your 
    individual needs. Our goal is to keep your smile healthy, bright, and confident for years to come.
  </p>
</section>


    {/* Services Overview */}
    <section className="overview">
      <h2>Our Services</h2>
      <ul className="services-list">
        {services.map((s, i) => (
          <li key={i}>
            <span className="service-icon">{s.icon}</span>
            <h4>{s.title}</h4>
          </li>
        ))}
      </ul>
    </section>

    {/* Call to Action */}
    <section className="cta">
      <h2>Ready to Transform Your Smile?</h2>
      <p>Schedule your appointment with us today and take the first step towards better oral health!</p>
      <Link to="/contact" className="btn">Get Started</Link>
    </section>

  </div>
);

export default Home;
