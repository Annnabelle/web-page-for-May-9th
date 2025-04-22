import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "./navBar";
import "./styles.sass";

const Header = () => {
  const location = useLocation();

  const isNotMainPage =
    location.pathname === "/about" ||
    location.pathname === "/products" ||
    location.pathname === "/news" ||
    location.pathname === "/projects" ||
    /^\/news\/\d+$/.test(location.pathname) ||
    /^\/article\/\d+$/.test(location.pathname);

  const [burgerIsOpen, setBurgerIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const toggleMenu = (toOpen: boolean) => {
    setBurgerIsOpen(toOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${burgerIsOpen ? "activeHeader" : ""} ${scrolled ? "scrolledHeaderBg" : ""}`}>
      <div className="container">
        <div className="headerItem">
          <span
            className={`mobileOverlay ${burgerIsOpen ? "activeMenu" : ""}`}
            onClick={(e) => toggleMenu(false)}
          ></span>
          <NavBar
            burgerIsOpen={burgerIsOpen}
            toggleMenu={toggleMenu}
            isNotMainPage={isNotMainPage}
          />
          <div
            className="burgerBtnContainer"
            onClick={() => toggleMenu(!burgerIsOpen)}
          >
            <div className={`burgerBtn ${burgerIsOpen ? "active" : ""}`}>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

