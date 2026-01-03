import { useState } from "react";

const CloseBtn = ({ toggleMenu }) => (
  <button onClick={toggleMenu} className="navbar__close-btn">
    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.778.808l1.414 1.414L11.414 10l7.778 7.778-1.414 1.414L10 11.414l-7.778 7.778-1.414-1.414L8.586 10 .808 2.222 2.222.808 10 8.586 17.778.808z"
        fill="#FFF"
        fillRule="evenodd"
      />
    </svg>
  </button>
);

const MenuBtn = ({ toggleMenu }) => {
  return (
    <button onClick={toggleMenu} className="navbar__menu-btn">
      <svg width="24" height="16" xmlns="http://www.w3.org/2000/svg">
        <g fill="#FFF" fillRule="evenodd">
          <path d="M0 0h24v2H0zM0 7h24v2H0zM0 14h24v2H0z" />
        </g>
      </svg>
    </button>
  );
};

const NavList = ({ isActive, toggleMenu }) => (
  <div className={`navbar__lists-wrapper ${isActive ? "active" : ""}`}>
    <div className="close-btn-wrapper">
      <NavBrand />
      <CloseBtn toggleMenu={toggleMenu} />
    </div>
    <ul className="navbar__lists">
      {["About", "Careers", "Events", "Products", "Support"].map((item) => (
        <li className="navbar-item">
          <a className="navbar-links" href="">
            {item}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const NavBrand = () => (
  <div className="navbar__brand">
    <a href="" className="navbar__brand-title">
      loopstudios
    </a>
  </div>
);

const Navbar = ({ isActive, toggleMenu }) => (
  <nav className="navbar">
    <NavBrand />
    <MenuBtn toggleMenu={toggleMenu} />
    <NavList isActive={isActive} toggleMenu={toggleMenu} />
  </nav>
);

function Header() {
  const [isActive, setIsActive] = useState(false);
  const toggleMenu = () => setIsActive(!isActive);

  return (
    <header>
      <Navbar isActive={isActive} toggleMenu={toggleMenu} />
    </header>
  );
}

export default Header;
