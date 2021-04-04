import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const SocialIcons = ({ color }) => {
  return (
    <div className={`${color} text-3xl flex space-x-4 md:text-4xl`}>
      <a href="https://www.facebook.com/aleksandar.novakovic.904/" target='none'>
        <FaFacebook />
      </a>
      <a href="https://twitter.com/novakovic_30" target='none'>
        <FaTwitter />
      </a>
      <a href="https://www.instagram.com/novakovic_30/" target='none'>
        <FaInstagram />
      </a>
      <a href="https://www.linkedin.com/in/aleksandar-novakovic-06082b187/" target='none'>
        <FaLinkedin />
      </a>
      <a href="https://github.com/alekssandar30" target='none'>
        <FaGithub />
      </a>
    </div>
  );
};

export default SocialIcons;
