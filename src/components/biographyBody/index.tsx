import { IoShield } from 'react-icons/io5'
import { RiScalesFill } from 'react-icons/ri'
import { HiShoppingBag } from 'react-icons/hi'
import { AiFillEdit } from 'react-icons/ai'
import { FaMedal } from 'react-icons/fa'
import { PiPathBold } from 'react-icons/pi'
import ContentChildhood from './contentChildhood'
import LegalScience from './legalScience'
import Heritage from './heritage'
import CulturalValues from './culturalValues'
import Awards from './awards'
import Completion from './completion'
import { HashLink } from 'react-router-hash-link';
import './styles.sass'

const BiographyBody = () => {
  return (
    <div className="biography-body">
        <div className="container">
            <div className="biography-body-container">
                <div className="biography-body-container-items">
                    <div className="biography-content">
                        <div className="content-heading">
                            <div className="heading-title">
                                <h4 className="title">“Луч света Нураты - освещает мой жизненный путь”</h4>
                            </div>
                        </div>
                        <ContentChildhood/>
                        <LegalScience/>
                        <Heritage/>
                        <CulturalValues/>
                        <Awards/>
                        <Completion/>
                    </div>
                </div>
                <div className="biography-body-container-navigation">
                    <div className="biography-navigation">
                        <div className="biography-navigation-title">
                            <h4 className="title">Навигация по статье</h4>
                        </div>
                        <div className="biography-navigation-container">
                            <div className="biography-navigation-container-item">
                                <HashLink to='/biography#childhood' scroll={(el) => el.scrollIntoView({ behavior: "smooth", block: "start" })} className="link"><IoShield width={24} /> <p className="text">Детствои военная юность</p></HashLink>
                            </div>
                            <div className="biography-navigation-container-item">
                                <HashLink to='/biography#legal' scroll={(el) => el.scrollIntoView({ behavior: "smooth", block: "start" })} className="link"><RiScalesFill fontSize={32} /> <p className="text">Возвращение и путь в юридическую науку</p></HashLink>
                            </div>
                            <div className="biography-navigation-container-item">
                                <HashLink to='/biography#heritage' scroll={(el) => el.scrollIntoView({ behavior: "smooth", block: "start" })} className="link"><HiShoppingBag  fontSize={32}/><p className="text">Прокурорская карьера и юридическое наследие</p></HashLink>
                            </div>
                            <div className="biography-navigation-container-item">
                                <HashLink to='/biography#culturalValues' scroll={(el) => el.scrollIntoView({ behavior: "smooth", block: "start" })} className="link"><AiFillEdit fontSize={32} /><p className="text">Поэт и хранитель культурных ценностей</p></HashLink>
                            </div>
                            <div className="biography-navigation-container-item">
                                <HashLink to='/biography#awards' scroll={(el) => el.scrollIntoView({ behavior: "smooth", block: "start" })} className="link"><FaMedal fontSize={24} /><p className="text">Награды и признание</p></HashLink>
                            </div>
                            <div className="biography-navigation-container-item">
                                <HashLink to='/biography#completion' scroll={(el) => el.scrollIntoView({ behavior: "smooth", block: "start" })} className="link"><PiPathBold fontSize={24} /><p className="text">Завершение великого жизненного пути</p></HashLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BiographyBody