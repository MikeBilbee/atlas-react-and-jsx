// src/components/CopyLink.jsx
import copyImage from '../assets/copy.svg';

const CopyLink = ({ link }) => {
	const handleClick = async () => {
		try {
			await navigator.clipboard.writeText(link);
			console.log('Link copied to clipboard:', link); 
		} catch (err) {
			console.error('Failed to copy link: ', err);
		}
	};

	return (
		<img
			src={copyImage}
			alt="Copy Link"
			className="copy"
			onClick={handleClick}
		/>
	);
};

export default CopyLink;
