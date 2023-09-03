import React from 'react';
import styled from 'styled-components';
import signatureImage from '../assets/Sign.jpg';
import { Link } from 'react-scroll'; // Import Link from react-scroll

const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #121212; 
  padding: 1rem 2rem;
  color: white;
`;

const Navigation = styled.nav`
  ul {
    list-style: none;
    display: flex;
  }
  li {
    margin-right: 20px; 
    &:hover {
      cursor: pointer;
    }
  }
`;

const Signature = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;  

const Navbar = () => {
  return (
    <NavbarWrapper>
      <div>
        <Signature src={signatureImage} alt="My Signature" />
      </div>
      <Navigation>
        <ul>
          <li>
            <Link to="about" smooth={true} duration={100}>
              About
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={100}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="connect" smooth={true} duration={100}>
              Connect
            </Link>
          </li>
        </ul>
      </Navigation>
    </NavbarWrapper>
  );
};

export default Navbar;
