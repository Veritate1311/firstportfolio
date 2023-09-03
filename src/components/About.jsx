import React from 'react';
import styled from 'styled-components';
import Background from '../assets/Background.jpg'; 
import Myimg from '../assets/Myimg.png';
const AboutWrapper = styled.div`
  background-image: url(${Background});
  background-size: cover;
  color: white;
  background-repeat: no-repeat;
  padding: 4rem 0;
  text-align: center;
  width: 100vw;
  height: 100vh;
`;


const AnimatedPhoto = styled.img`
  border-radius: 50%;`;

const About = () => {
  return (
    <AboutWrapper>
      
      <AnimatedPhoto src={Myimg} alt="Your Name" />
      <p>I'm an ML engineer and also familiar with web development.</p>
    </AboutWrapper>
  );
};

export default About;
