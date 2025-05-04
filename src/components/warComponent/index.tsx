import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import warImage from '../../assets/war.png'
import './styles.sass'

const WarComponent: React.FC = () => {
  return (
    <div className='war'>
        <div className="container">
            <div className="war-container">
                <div className="war-title">
                    <h4 className="title">Война</h4>
                </div>
                <div className="war-items">
                <div className="war-item">
                    <div className="war-item-content">
                      <div className="content-title">
                        <h3 className="title">Великая Отечественная война</h3>
                      </div>
                      <div className="content-subtitle">
                        <p className="subtitle">
                        Рустам Мухамедов, прошел всю Великую Отечественную войну в 228-м стрелковом полку, участвовав в освобождении многих стран.
                        </p>
                      </div>
                      <div className="content-text">
                        <p className="text">Он участвовал в битвах на Западном, Брянском, 2-м и 4-м Украинских фронтах, помогая освобождать Украину, Молдавию, Румынию, Чехословакию и Польшу. Рустам описал свои воспоминания о войне в книге на узбекском языке под названием "Незабываемые кровавые и славные боевые дороги.</p>
                      </div>
                      <div className="content-link">
                        <Link to='/vov' className='link'>Подробнее <FaArrowRight />                        </Link>
                      </div>
                    </div>
                  </div>
                    <div className="war-item">
                        <div className="image">
                      <img src={warImage} alt="warImage" className='img' />
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WarComponent