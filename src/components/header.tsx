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
          <a className="header__nav__item" href="/Varijable">
            Varijable
          </a>
          <a className="header__nav__item" href="/Petlje">
            Petlje
          </a>
          <a className="header__nav__item" href="/Vjezba2604">
            Vjezba 26.04
          </a>
          <a className="header__nav__item" href="/Vjezba2804">
            Vjezba 28.04
          </a>
          <a className="header__nav__item" href="/Vjezba0305">
            Vjezba 3.5
          </a>
          <a className="header__nav__item" href="/Breweries">
            Breweries
          </a>
          <a className="header__nav__item" href="/Europe">
            Europe
          </a>
          <a className="header__nav__item" href="/Africa">
            Africa
          </a>
          <a className="header__nav__item" href="/Chat">
            Chat
          </a>
          <a className="header__nav__item" href="/Vjezba1505">
            Vjezba 1505
          </a>
          <a className="header__nav__item" href="/ToDoList">
            To Do List
          </a>
          <a className="header__nav__item" href="/ParcijalniIspit">
            Parcijalni Ispit
          </a>
        </nav>
        <div className="header__nav__item">AG</div>
      </div>
    </header>
  );
};

export default Header;
