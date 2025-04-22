import { IoShield } from 'react-icons/io5'
import { HashLink } from 'react-router-hash-link'
import './styles.sass'
import { GiRainbowStar } from 'react-icons/gi'
import { FaFish } from 'react-icons/fa'
import { MdMosque } from 'react-icons/md'
import { PiMosqueFill } from 'react-icons/pi'

const NurataNavigation = () => {
  return (
    <div className='nurata-navigation'>
        <div className="nurata-navigation-container">
            <div className="nurata-navigation-item heading">
                <h4 className="title">Навигация по статье</h4>
            </div>
            <div className="nurata-navigation-item">
                <HashLink to='/nurata#heavenlyRay' scroll={(el) => el.scrollIntoView({ behavior: "smooth", block: "start" })} className="link"><GiRainbowStar width={24} /> <p className="text">Небесный луч Нураты</p></HashLink>
            </div>
            <div className="nurata-navigation-item">
                <HashLink to='/nurata#sacredFish' scroll={(el) => el.scrollIntoView({ behavior: "smooth", block: "start" })} className="link"><FaFish  width={24} /> <p className="text">Священная рыба маринка</p></HashLink>
            </div>
            <div className="nurata-navigation-item">
                <HashLink to='/nurata#mosques' scroll={(el) => el.scrollIntoView({ behavior: "smooth", block: "start" })} className="link"><MdMosque width={24} /> <p className="text">Мечети комплекса «Чашма»</p></HashLink>
            </div>
            <div className="nurata-navigation-item">
                <HashLink to='/nurata#mausoleum' scroll={(el) => el.scrollIntoView({ behavior: "smooth", block: "start" })} className="link"><PiMosqueFill width={24} /> <p className="text">Мавзолей Айтеке-би Байбекулы</p></HashLink>
            </div>
        </div>
    </div>
  )
}

export default NurataNavigation