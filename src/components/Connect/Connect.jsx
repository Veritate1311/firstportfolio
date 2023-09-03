import React from 'react';
import './Connect.css';
import { FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Connect = () => {
  return (
    <div  id="connect" className="connect-container">
      <h2>Let's Connect</h2>

      {/* Social Media Icons */}
      <div className="social-icons" >
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={32} color="#0077B5" />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={32} color="#E4405F" />
        </a>
        <a href="mailto:vasusingh.1331@gmail.com">
          <FaEnvelope size={32} color="#D44638" />
        </a>
      </div>

      <form className="feedback-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message"></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Connect;
