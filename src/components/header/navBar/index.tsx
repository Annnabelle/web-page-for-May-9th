import { NavLink } from "react-router-dom";


interface NavBarProps {
    burgerIsOpen: boolean;
    toggleMenu: (toOpen: boolean) => void;
    isNotMainPage: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ burgerIsOpen, toggleMenu }) => {
  const handleLinkClick = () => {
    toggleMenu(false);
  };

  return (
    <nav className={`nav ${burgerIsOpen ? "activeMenu" : ""}`}>
      <div className='navContainer'>
        <div className='navBox'>
          <div className='links'>
            <NavLink
               className={({ isActive }) => `navLink ${isActive ? 'active' : ''}`}
              to='/'
              onClick={handleLinkClick}
            >
              Главная
            </NavLink>
            <NavLink
               className={({ isActive }) => `navLink ${isActive ? 'active' : ''}`}
              to='/biography'
              onClick={handleLinkClick}
            >
              Биография
            </NavLink>
            <NavLink
               className={({ isActive }) => `navLink ${isActive ? 'active' : ''}`}
              to='/nurata'
              onClick={handleLinkClick}
            >
              О Нурате
            </NavLink>
            <NavLink
               className={({ isActive }) => `navLink ${isActive ? 'active' : ''}`}
              to='/vov'
              onClick={handleLinkClick}
            >
              В.О.В.
            </NavLink>
            <NavLink
                 className={({ isActive }) => `navLink ${isActive ? 'active' : ''}`}
                to='/career'
            >
              Карьера
            </NavLink>
            <NavLink
                 className={({ isActive }) => `navLink ${isActive ? 'active' : ''}`}
                to='/publications'
            >
              Публикации
            </NavLink>
            <NavLink
                 className={({ isActive }) => `navLink ${isActive ? 'active' : ''}`}
                to='/gallery'
            >
              Галерея
            </NavLink>
            <NavLink
                 className={({ isActive }) => `navLink ${isActive ? 'active' : ''}`}
                to='/museum'
            >
              Музей
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;