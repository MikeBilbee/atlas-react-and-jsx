// Footer.jsx
import linksData from '../assets/links.json';

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer>
			<ul>
				{linksData.map((link, index) => (
					<li key={index}>
						<a href={link.link} target="_blank" rel="noopener noreferrer">
							{link.label}
						</a>
					</li>
				))}
			</ul>
			<p>© {currentYear} Atlas School</p>
		</footer>
	);
};

export default Footer;