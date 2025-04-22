import awardsImage from '../../../assets/awards.png'

const Awards = () => {
  return (
    <div className="awards" id='awards'>
        <div className="awards-container">
            <div className="awards-title">
                <h4 className="title">Награды и признание</h4>
            </div>
            <div className="awards-description">
                <p className="description">По решению 2-й Сессии Верховного Совета республики от 20 июня 1990 года была создана комиссия по подготовке проекта Первой Конституции Республики Узбекистан. В составе рабочей группы Р. Мухамедов принимал участие в разработке Основного Закона страны, и по его предложению были внесены 7 статей по вопросам семьи в раздел «Гражданское общество». Рустам Мухамедов проделал большую работу по созданию и укреплению законности независимого Узбекистана и ее пропаганде среди широкого населения. Он принимал участие в создании учебников и учебных пособий по правоведению для вузов республики. Ученым-цивилистом написан ряд монографий по вопросам семьи, брака, воспитания подрастающего поколения, сохранению традиций и семейных ценностей.</p>
            </div>
            <div className="awards-image">
                <img src={awardsImage} alt="AwardsImage" className='img' />
                <div className="awards-image-description">
                    <p className="description">Подпись, 19хх год.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Awards