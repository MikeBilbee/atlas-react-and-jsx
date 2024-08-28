// OpenLink.jsx
import openIcon from '../assets/open.svg';

const OpenLink = ({ link }) => {
	return (
		<a href={link} target="_blank" rel="noopener noreferrer">
			<img src={openIcon} alt="Open Link" />
		</a>
	);
};

export default OpenLink;