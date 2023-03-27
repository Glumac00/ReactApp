import logo from "./../assets/logo.png";

const Header = () => {
  return (
    <header className="Header">
      <img className="Header__logo" src={logo} alt="Logo" />
      <div className="Header__navigation">
        <div>
          <ul className="Header__list">
            <a href="./../../AboutMe.html" className="Header__list__item">
              About me
            </a>
            <a href="./../../Projects.html" className="Header__list__item">
              Projects
            </a>
          </ul>
        </div>
        <div className="Header__navigation__initials">A.G.</div>
      </div>
    </header>
  );
};

export default Header;
