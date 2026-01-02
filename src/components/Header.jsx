import { useState } from "react";

function Header() {
  const [isActive, setIsActive] = useState(false);
  const toggleMenu = () => setIsActive(!isActive);

  const CloseBtn = () => (
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

  const MenuBtn = () => {
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

  const NavList = () => (
    <div className={`navbar__lists-wrapper ${isActive ? "active" : ""}`}>
      <div className="close-btn-wrapper">
        <NavBrand />
        <CloseBtn />
      </div>
      <ul className="navbar__lists">
        <li className="navbar-item">
          <a className="navbar-links" href="">
            About
          </a>
        </li>
        <li className="navbar-item">
          <a className="navbar-links" href="">
            Careers
          </a>
        </li>
        <li className="navbar-item">
          <a className="navbar-links" href="">
            Events
          </a>
        </li>
        <li className="navbar-item">
          <a className="navbar-links" href="">
            Products
          </a>
        </li>
        <li className="navbar-item">
          <a className="navbar-links" href="">
            Support
          </a>
        </li>
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

  const Navbar = () => (
    <nav className="navbar">
      <NavBrand />
      <MenuBtn />
      <NavList />
    </nav>
  );

  return (
    <header>
      <Navbar />
    </header>
  );
}

export default Header;

