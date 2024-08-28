// SocialLinks.jsx
import linkedinIcon from '../assets/linkedin.svg';
import githubIcon from '../assets/github.svg';

const SocialLinks = () => {
  const linkedinProfileUrl = 'https://www.linkedin.com/in/mikebilbee/';

  const githubRepoUrl = 'https://github.com/MikeBilbee/atlas-react-and-jsx';

  return (
    <div className="social-links">
      <a href={linkedinProfileUrl} target="_blank" rel="noopener noreferrer">
        <img src={linkedinIcon} alt="LinkedIn" />
      </a>
      <a href={githubRepoUrl} target="_blank" rel="noopener noreferrer">
        <img src={githubIcon} alt="GitHub" />
      </a>
    </div>
  );
};

export default SocialLinks;