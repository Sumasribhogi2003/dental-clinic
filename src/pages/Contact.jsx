import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://jsonplaceholder.typicode.com/posts', form);
      setSubmitted(true);
    } catch (err) {
      alert("Submission failed. Try again.");
    }
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>

      {submitted ? <p>Thank you for contacting us!</p> : (
        <form onSubmit={handleSubmit}>
          <input name="name" required placeholder="Name" onChange={handleChange} />
          <input name="email" type="email" required placeholder="Email" onChange={handleChange} />
          <input name="subject" required placeholder="Subject" onChange={handleChange} />
          <textarea name="message" required placeholder="Message" onChange={handleChange}></textarea>
          <button type="submit">Submit</button>
        </form>
      )}

      <div className="contact-details">
        <h2>Get in Touch</h2>
        <p><strong>Phone:</strong> +91 9876543210</p>
        <p><strong>Email:</strong> info@dentalcare.com</p>
        <p><strong>Address:</strong> ABC Street, Hyderabad, India</p>
        <iframe
          title="Clinic Location"
          src="https://maps.google.com/maps?q=Hyderabad&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%" height="300" frameBorder="0" allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
