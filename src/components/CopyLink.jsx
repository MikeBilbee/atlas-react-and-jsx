// CopyLink.jsx
import copyIcon from '../assets/copy.svg';

const CopyLink = ({ link }) => {
	const handleCopy = () => {
		navigator.clipboard.writeText(link)
			.then(() => {
				console.log('Link copied to clipboard!');
			})
			.catch((err) => {
				console.error('Failed to copy link: ', err);
			});
	};

	return (
		<img 
			src={copyIcon} 
			alt="Copy Link" 
			className="copy"
			onClick={handleCopy} 
			style={{ cursor: 'pointer' }}
		/>
	);
};

export default CopyLink;