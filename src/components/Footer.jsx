// src/components/Footer.jsx
import linksData from '../assets/links.json';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <ul>
        {linksData.map((linkItem) => (
          <li key={linkItem.label}>
            <a href={linkItem.link} target="_blank" rel="noopener noreferrer">
              {linkItem.label}
            </a>
          </li>
        ))}
      </ul>
      <p>© {currentYear} Atlas School</p>
    </footer>
  );
};

export default Footer;