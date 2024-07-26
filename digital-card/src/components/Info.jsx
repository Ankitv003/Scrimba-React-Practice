import profilePic from "../assets/profile-pic.jpg";

const Info = () => {
  return (
    <div className="info">
      <img className="profile-pic" alt="profile-pic" src={profilePic} />
      <h1 className="name">Ankit Verma</h1>
      <h4 className="designation">Frontend Developer</h4>
      <a
        className="portfolio-link"
        href="https://ankit-verma-portfolio.netlify.app/"
        target="blank"
      >
        ankitverma.portfolio
      </a>
    </div>
  );
};

export default Info;
