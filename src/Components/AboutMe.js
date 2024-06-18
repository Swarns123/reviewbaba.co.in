import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <div className="about-me">
      <h1 className="name">Swarnendu Saha</h1>
      <div className="details">
        <p>Age: <span className="detail">26 yrs</span></p>
        <p>Parents: <span className="detail">Chitralekha S, Shyam DS</span></p>
        <p>Hobby: <span className="detail">I love to make my loved ones happy.</span></p>
        <p>Goal: <span className="detail">I wish to become the best version of myself.</span></p>
        <p><span style={{ fontSize: '1.4em'}} className="detail">STAY TUNED, REVIEWBABA WILL BE LAUNCHED SOON.</span></p>
      </div>
    </div>
  );
};

export default AboutMe;
