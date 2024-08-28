// Greeting.jsx
import dayImage from '../assets/day.svg';
import eveningImage from '../assets/evening.svg';
import nightImage from '../assets/night.svg';

const Greeting = () => {
  const currentHour = new Date().getHours();

  let greetingText, imageSrc;

  if (currentHour >= 6 && currentHour < 12) {
    greetingText = 'Good Morning!';
    imageSrc = dayImage;
  } else if (currentHour >= 12 && currentHour < 17) {
    greetingText = 'Good Afternoon!';
    imageSrc = dayImage;
  } else if (currentHour >= 17 && currentHour < 21) {
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