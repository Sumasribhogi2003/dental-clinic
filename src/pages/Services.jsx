import React, { useState } from 'react';
import '../styles/main.css';

const serviceList = [
  { title: "Cleaning", desc: "Professional dental cleaning to prevent gum disease.", icon: "🪥", details: "Our cleaning includes plaque removal, polishing, and guidance on daily oral hygiene to maintain a healthy smile." },
  { title: "Fillings", desc: "Restores decayed or damaged teeth.", icon: "🦷", details: "We use composite tooth-colored materials for fillings, ensuring your smile stays natural and seamless." },
  { title: "Root Canal", desc: "Relieves pain by treating infected pulp.", icon: "🩺", details: "A safe and effective procedure to clean, disinfect, and seal infected tooth roots, preserving your natural teeth." },
  { title: "Braces", desc: "Corrects alignment and bite issues.", icon: "🧲", details: "We offer a variety of orthodontic solutions including traditional metal braces, clear ceramic, and invisible aligners." },
  { title: "Implants", desc: "Replaces missing teeth permanently.", icon: "🛠️", details: "Durable titanium posts fused with your jawbone, topped with crowns to restore function and aesthetics." },
  { title: "Teeth Whitening", desc: "Brightens teeth and removes stains.", icon: "✨", details: "We provide both in-clinic whitening procedures and custom take-home kits for a visibly brighter smile." },
];

const Services = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="services-page">
      <h1 className="section-title">Our Dental Services</h1>
      <p className="section-subtitle">Explore our comprehensive range of dental treatments for every age and need.</p>

      <div className="services-grid">
        {serviceList.map((s, i) => (
          <div key={i} className="service-card" onClick={() => setSelected(i)}>
            <h3>{s.icon} {s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected !== null && (
        <div className="modal">
          <div className="modal-content">
            <h2>{serviceList[selected].icon} {serviceList[selected].title}</h2>
            <p>{serviceList[selected].details}</p>
            <button onClick={() => setSelected(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
