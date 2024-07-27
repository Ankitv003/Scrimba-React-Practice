import worldMap from "../assets/world-image.png";

const Navbar = () => {
  return (
    <nav className="nav">
      <img src={worldMap} alt="globe" />
      <h1>my travel journal</h1>
    </nav>
  );
};

export default Navbar;
