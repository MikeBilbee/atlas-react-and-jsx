// src/components/AboutMe.jsx
import Headshot from "../assets/headshot.jpg"

const AboutMe = () => {
  return (
    <div className="about-me">
      <img src={Headshot} /> 
      <p>
        My name is Mike, and I'm a Full Stack student currently at the end of my 5th trimester. 
        I enjoy working with React, Sql, and TypeScript. After I graduate, I'd love to open my own Gaming Store. 
        When I'm not studying or coding, you can find me playing games and making art.
      </p>
    </div>
  );
};

export default AboutMe;