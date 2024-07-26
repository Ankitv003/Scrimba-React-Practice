import Email from "../assets/Mail.png";
import LinkedIn from "../assets/linkedin.png";
const MainContent = () => {
  return (
    <div className="main-content">
      <div className="btn-group">
        <button className="email">
          <img src={Email} alt="Email" /> Email
        </button>
        <button className="linkedin">
          <img src={LinkedIn} alt="LinkedIn" />
          LinkedIn
        </button>
      </div>
      <div className="main-info">
        <h3 className="about-me">About</h3>
        <p>
          I`m a very ambitious front-end developer looking for a role in an
          established IT company with the opportunity to work with the latest
          technologies on challenging and diverse projects.
          <br />
          I`m quiet confident, naturally curious, and perpetually working on
          improving my chops one design problem at a time.
        </p>
        <h3 className="interests">Interests</h3>
        <p>
          If I need to define myself in one sentence that would be a fitness
          enthusiast, coder, a sports fanatic, adrenaline junkie , and
          tech-obsessed!!!
        </p>
      </div>
    </div>
  );
};

export default MainContent;
