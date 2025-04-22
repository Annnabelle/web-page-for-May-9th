import React from 'react'
import Hero from '../../components/hero'
import { useParams } from 'react-router-dom'
import { NurataData } from '../../data/nurataInnerData'
import './styles.sass'

const NurataInner:React.FC = () => {
    const { id } = useParams<{ id: string }>()
    const data = NurataData.find(item => item.id === id)
  
    if (!data) return <p>Информация не найдена</p>
  return (
        <>
        <Hero/>
            <div className="nurata-inner">
                <div className="container">
                    <div className="nurata-inner-container">
                        <div className="item-title">
                            <h3 className="title">{data.title}</h3>
                        </div>
                        <div className="item-image">
                            <img src={data.image} alt="" className='img' />
                            <div className="item-image-description">
                                <p className="description">{data.imageDescription}</p>
                            </div>
                        </div>
                        {data.description.map((item) => (
                            <div className="item-description" key={item.id}>
                                <p className="description">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default NurataInner