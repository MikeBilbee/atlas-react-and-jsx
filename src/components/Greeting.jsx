// src/components/Greeting.jsx
import dayImage from '../assets/day.svg';
import eveningImage from '../assets/evening.svg';
import nightImage from '../assets/night.svg';

const Greeting = () => {
	const now = new Date();
	const hour = now.getHours();

	let greetingText;
	let imageSrc;

	if (hour >= 6 && hour < 12) {
		greetingText = 'Good Morning!';
		imageSrc = dayImage;
	} else if (hour >= 12 && hour < 17) {
		greetingText = 'Good Afternoon!';
		imageSrc = dayImage;
	} else if (hour >= 17 && hour < 21) {
		greetingText = 'Good Evening!';
		imageSrc = eveningImage;
	} else {
		greetingText = 'Good Night!';
		imageSrc = nightImage;
	}

	return (
		<h1 className="greeting">
			<img src={imageSrc} alt={greetingText} />
			{greetingText}
		</h1>
	);
};

export default Greeting;
