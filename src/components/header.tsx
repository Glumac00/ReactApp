import logo from "./../assets/Logo.png";

const Header = () => {
  return (
    <header className="header">
      <div>
        <img className="header__logo" src={logo} alt="Logo" />
      </div>
      <div className="header__actions">
        <nav className="header__nav">
          <a className="header__nav__item" href="/Home">
            Home
          </a>
          <a className="header__nav__item" href="/Exe">
            Exercises
          </a>
          <a className="header__nav__item" href="/Ispit">
            Ispit
          </a>
          <a className="header__nav__item" href="/Mlinar">
            Mlinar
          </a>
        </nav>
        <div className="header__nav__item">AG</div>
      </div>
    </header>
  );
};

export default Header;
