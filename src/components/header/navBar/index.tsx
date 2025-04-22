import { Link } from "react-router-dom";


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
            <Link
              className='navLink'
              to='/'
              onClick={handleLinkClick}
            >
              Главная
            </Link>
            <Link
              className='navLink'
              to='/biography'
              onClick={handleLinkClick}
            >
              Биография
            </Link>
            <Link
              className='navLink'
              to='/nurata'
              onClick={handleLinkClick}
            >
              О Нурате
            </Link>
            <Link
              className='navLink'
              to='/news'
              onClick={handleLinkClick}
            >
              В.О.В.
            </Link>
            <Link
                className='navLink'
                to='/resources'
            >
              Карьера
            </Link>
            <Link
                className='navLink'
                to='/resources'
            >
              Публикации
            </Link>
            <Link
                className='navLink'
                to='/resources'
            >
              Галерея
            </Link>
            <Link
                className='navLink'
                to='/resources'
            >
              Музей
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;