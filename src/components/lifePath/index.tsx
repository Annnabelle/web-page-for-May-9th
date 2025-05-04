import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import lifePathImage from '../../assets/chronology.png'
import './styles.sass'

const LifePath: React.FC = () => {
  return (
    <div className='life-path'>
        <div className="container">
            <div className="life-path-container">
                <div className="life-path-title">
                    <h4 className="title">Жизненный путь</h4>
                </div>
                <div className="life-path-items">
                  <div className="life-path-item">
                    <div className="life-path-item-content">
                      <div className="content-title">
                        <h3 className="title">Рустам Мухамедов</h3>
                      </div>
                      <div className="content-subtitle">
                        <p className="subtitle">
                          <span className='subtitle-strong'>Рустам Мухамедов</span> (1922-2012) - ветеран Великой Отечественной войны, выдающийся юрист и преданный хранитель культурных ценностей. 
                        </p>
                      </div>
                      <div className="content-text">
                        <p className="text">В детстве потеряв родителей, он прошел через войну и стал героем. После возвращения домой, он успешно закончил юридическую школу и начал блестящую карьеру прокурора, разрабатывая законодательные акты и учебники. </p>
                      </div>
                      <div className="content-link">
                        <Link to='/biography  ' className='link'>Подробнее <FaArrowRight />                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="life-path-item">
                    <div className="image">
                      <img src={lifePathImage} alt="lifepathImage" className='img' />
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LifePath