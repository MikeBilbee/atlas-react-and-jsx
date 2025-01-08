// src/components/OpenLink.jsx
import openImage from '../assets/open.svg';

const OpenLink = ({ link }) => {
	const handleClick = () => {
		window.open(link, '_blank', 'noopener noreferrer');
	};

	return (
		<a href="#" onClick={handleClick}>
			<img src={openImage} alt="Open Link" />
		</a>
	);
};

export default OpenLink;
