
import { Link } from 'react-router-dom'
import warImage from '../../assets/army.png'
import nurataGallery from '../../assets/nurataGallery.png'
import prosecutors from '../../assets/prosecutors.png'
import vietnam from '../../assets/vietnam.png'
import family from '../../assets/family.png'
import ninthMay10 from '../../assets/ninthMay10.jpg'
import oneHundreed2 from '../../assets/oneHundreed2.jpg'
import './styles.sass'

const GalleryBody = () => {
  return (
    <div className='gallery-body'>
        <div className="container">
            <div className="gallery-body-container">
                <div className="gallery-body-container-title">
                    <h3 className="title">Галерея</h3>
                </div>
                <div className="gallery-body-container-items">
                    <div className="gallery-body-container-items-item">
                        <Link to='/gallery-inner/1' className='link'>
                            <div className="item-image">
                                <img src={warImage} alt="warImage" className='img'/>
                            </div>
                            <div className="item-description">
                                <p className="description">Армия</p>
                            </div>
                        </Link>
                    </div>
                    <div className="gallery-body-container-items-item">
                        <Link to='/gallery-inner/2' className='link'>
                            <div className="item-image">
                                <img src={nurataGallery} alt="nurataGallery" className='img'/>
                            </div>
                            <div className="item-description">
                                <p className="description">Нурата</p>
                            </div>
                        </Link>
                    </div>
                    <div className="gallery-body-container-items-item">
                        <Link to='/gallery-inner/3' className='link'>
                            <div className="item-image">
                                <img src={prosecutors} alt="prosecutors" className='img'/>
                            </div>
                            <div className="item-description">
                                <p className="description">Прокуратура</p>
                            </div>
                        </Link>
                    </div>
                    <div className="gallery-body-container-items-item">
                        <Link to='/gallery-inner/4' className='link'>
                            <div className="item-image">
                                <img src={vietnam} alt="vietnam" className='img'/>
                            </div>
                            <div className="item-description">
                                <p className="description">Вьетнам</p>
                            </div>
                        </Link>
                    </div>
                    <div className="gallery-body-container-items-item">
                        <Link to='/gallery-inner/5' className='link'>
                            <div className="item-image">
                                <img src={family} alt="family" className='img'/>
                            </div>
                            <div className="item-description">
                                <p className="description">В кругу семьи</p>
                            </div>
                        </Link>
                    </div>
                    <div className="gallery-body-container-items-item">
                        <Link to='/gallery-inner/6' className='link'>
                            <div className="item-image">
                                <img src={ninthMay10} alt="ninthMay10" className='img'/>
                            </div>
                            <div className="item-description">
                                <p className="description">Празднование 9го мая</p>
                            </div>
                        </Link>
                    </div>
                    <div className="gallery-body-container-items-item">
                        <Link to='/gallery-inner/7' className='link'>
                            <div className="item-image">
                                <img src={oneHundreed2} alt="oneHundreed1" className='img'/>
                            </div>
                            <div className="item-description">
                                <p className="description">Празднование 100 летия</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GalleryBody