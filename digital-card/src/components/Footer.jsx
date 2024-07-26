import facebook from "../assets/Facebook-Icon.png";
import github from "../assets/GitHub-Icon.png";
import instagram from "../assets/Instagram-Icon.png";
import twitter from "../assets/Twitter-Icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <a href="#">
        <img src={facebook} alt="facebook" />
      </a>
      <a href="#">
        <img src={instagram} alt="instagram" />
      </a>
      <a href="#">
        <img src={twitter} alt="twitter" />
      </a>
      <a href="#">
        <img src={github} alt="github" />
      </a>
    </div>
  );
};

export default Footer;
