import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import nurataImage from '../../assets/nurat.png'
import './styles.sass'

const NurataComponent: React.FC = () => {
  return (
    <div className='nurata'>
        <div className="container">
            <div className="nurata-container">
                <div className="nurata-title">
                    <h4 className="title">о нурате</h4>
                </div>
                <div className="nurata-items">
                <div className="nurata-item">
                    <div className="image">
                      <img src={nurataImage} alt="nurataImage" className='img' />
                    </div>
                  </div>
                  <div className="nurata-item">
                    <div className="nurata-item-content">
                      <div className="content-title">
                        <h3 className="title">Нурата - это,</h3>
                      </div>
                      <div className="content-subtitle">
                        <p className="subtitle">
                            древний комплекс в Центральной Азии. 
                        </p>
                      </div>
                      <div className="content-text">
                        <p className="text">Современные жители Нураты утверждают, что название города происходит от персидских слов "нур" (свет) и "ато" (одаренный), и они с гордостью рассказывают о небесном луче, который связывается с этим местом. Считается, что вода из источника Бешпанджа обладает целебными свойствами, хотя в нем обитает ядовитая рыба маринка.</p>
                      </div>
                      <div className="content-link">
                        <Link to='/' className='link'>Подробнее <FaArrowRight />                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NurataComponent