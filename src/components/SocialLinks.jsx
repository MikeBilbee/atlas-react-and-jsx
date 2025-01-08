// src/components/SocialLinks.jsx
import linkedinImage from '../assets/linkedin.svg';
import githubImage from '../assets/github.svg';

const SocialLinks = () => {
  const linkedinProfileUrl = 'https://www.linkedin.com/in/mikebilbee/';

  const githubRepoUrl = 'https://github.com/MikeBilbee/atlas-react-and-jsx';

  return (
    <div className="social-links">
      <a href={linkedinProfileUrl} target="_blank" rel="noopener noreferrer">
        <img src={linkedinImage} alt="LinkedIn" />
      </a>
      <a href={githubRepoUrl} target="_blank" rel="noopener noreferrer">
        <img src={githubImage} alt="GitHub" />
      </a>
    </div>
  );
};

export default SocialLinks;
