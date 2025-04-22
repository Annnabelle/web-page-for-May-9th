import culturalValues from '../../../assets/culturalValues.png'

const CulturalValues = () => {
  return (
    <div className='culturalValues' id='culturalValues'>
        <div className="culturalValues-container">
            <div className="culturalValues-items">
                <div className="culturalValues-items-title">
                    <h4 className="title">Поэт и хранитель культурных ценностей</h4>
                </div>
                <div className="culturalValues-items-description">
                    <p className="description">В связи с образованием Центра по проблемам укрепления законности и повышения квалификации работников прокуратуры и, учитывая высокий профессионализм и большой опыт в качестве ученого-практика, Рустаму Мухамедову, несмотря на пенсионный возраст, было поручено возглавить кафедру гражданского права. Работая в этой должности, он плодотворно передавал свой богатый опыт правоведа молодым следственно-прокурорским работникам,
                    и внес значимый вклад в дело подготовки кадров для молодой республики - Независимого Узбекистана.</p>
                </div>
            </div>
            <div className="culturalValues-items">
                <div className="culturalValues-items-image">
                    <img src={culturalValues} alt="culturalValues" className='img' />
                  <div className="culturalValues-items-description">
                      <p className="description">На кафедре гражданского права</p>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CulturalValues