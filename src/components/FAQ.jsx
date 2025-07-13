import React, { useState } from 'react';
import '../styles/main.css'; 

const FAQ = () => {
  const [active, setActive] = useState(null);
  const toggle = index => setActive(active === index ? null : index);

  const faqs = [
    { q: "Do you accept insurance?", a: "Yes, we accept most major insurances including dental coverage." },
    { q: "What are your working hours?", a: "Our clinic operates from Monday to Friday: 9am to 5pm and Saturdays from 10am to 2pm." },
    { q: "How do I book an appointment?", a: "You can book an appointment online through our Contact page or call us directly." },
    { q: "Do you offer emergency dental services?", a: "Yes, we provide same-day emergency care based on availability." },
    { q: "What treatments do you offer?", a: "We provide general dentistry, root canals, implants, braces, cosmetic treatments, and more." },
    { q: "Is parking available at your clinic?", a: "Yes, we have free on-site parking for all patients." },
    { q: "Do you treat children?", a: "Absolutely! We offer pediatric dental services with gentle care." },
  ];

  return (
    <div className="faq-section">
      <h2>FAQs</h2>
      {faqs.map((item, i) => (
        <div key={i}>
          <h4 onClick={() => toggle(i)}>{item.q}</h4>
          {active === i && <p>{item.a}</p>}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
