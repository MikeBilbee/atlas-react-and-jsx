// AboutMe.jsx
import profilePicture from '../assets/profile-picture.jpg'; 

const AboutMe = () => {
	return (
		<div className="about-me">
			<img src={profilePicture} alt="Mike" />
			<h1>About Me</h1>
			<p>
				Name: Mike Bilbee <br />
				Specialization: Full-Stack Web Development <br />
				Trimester: T5 <br />
				Favorite Languages/Technologies: JavaScript, React, Python <br />
				Post-Graduation Goals: I would like to launch my own Brand and Business <br />
				Hobbies: Video and Tabletop Gaming, Graphic Design, Music <br />
			</p>
		</div>
	);
};

export default AboutMe;