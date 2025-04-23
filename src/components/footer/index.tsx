import { FiFacebook, FiLinkedin } from 'react-icons/fi'
import { IoMailOpenOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import './styles.sass'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="container">
            <div className="footer-container">
                <div className="footer-items">
                    <div className="footer-content">
                        <div className="footer-content-heading">
                            <div className="footer-content-heading-container">
                                <div className="footer-content-heading-container-title">
                                    <h4 className="title">Рустам Мухамедов</h4>
                                </div>
                                <div className="footer-content-heading-container-subtitle">
                                    <p className="subtitle">Сайт Биография</p>
                                </div>
                            </div>
                            <div className="footer-content-heading-text">
                                <p className="text">Солдат. Прокурор. Ученый-правовед. Педагог. Хранитель культуры. Награжденный ветеран.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-items">
                    <div className="footer-items-links">
                        <Link to='/' className='link'>Главная</Link>
                        <Link to='/biography' className='link'>Биография</Link>
                        <Link to='/nurata' className='link'>О Нурате</Link>
                        <Link to='/vov' className='link'>В.О.В.</Link>
                        <Link to='/career' className='link'>Карьера</Link>
                        <Link to='/publications' className='link'>Публикации</Link>
                        <Link to='/gallery' className='link'>Галерея</Link>
                        <Link to='/museum' className='link'>Музей</Link>
                    </div>
                </div>
                <div className="footer-items">
                    <div className="footer-items-contacts">
                        <div className="footer-items-contacts-title">
                            <h5 className="title">Свяжитесь с нами</h5>
                        </div>
                        <div className="footer-items-contacts-icons">
                            <Link to='/' className='footer-items-contacts-icons-links'><FiFacebook /></Link>
                            <Link to ='/' className='footer-items-contacts-icons-links'><FiLinkedin/></Link>
                            <Link to ='/' className='footer-items-contacts-icons-links'><IoMailOpenOutline /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer