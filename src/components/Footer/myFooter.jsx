import React from 'react';
import './Footer.css';

const CustomFooter = () => {
  return (
    <footer className="footer">
      <div className="footer_container container">
        <h1 className="footer_title">Vasudha</h1>
        <ul className="footer_list">
          <li>
            <a href="#" className="footer_link">
              About
            </a>
          </li>
          <li>
            <a href="#" className="footer_link">
              Skills
            </a>
          </li>
          <li>
            <a href="#" className="footer_link">
              Connect
            </a>
          </li>
        </ul>
        <span className="footer_copy">
          &copy; {new Date().getFullYear()} Vasudha
        </span>
      </div>
    </footer>
  );
};

export default CustomFooter;
