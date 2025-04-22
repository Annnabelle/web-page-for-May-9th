import heritageImage from '../../../assets/heritage.png'
const Heritage = () => {
  return (
    <div className="heritage" id='heritage'>
        <div className="heritage-container">
            <div className="heritage-title">
                <h4 className="title">Прокурорская карьера и юридическое наследие</h4>
            </div>
            <div className="heritage-description">
                <p className="description">В 1950-1955 годах Рустам Мухамедович работает помощником прокурора и прокурором в Денауском и Шерабадском районах Сурхандарьинской области, а с 1955 по 1961г. - начальником отдела Республиканской прокуратуры Каракалпакской АССР и Межрайонным прокурором города Турткуля. В 1961-1965 годах - Прокурором Каракалпакской Автономной Республики. Затем, в 1965 году возглавил прокуратуру Хорезмской области, где проработал 10 лет.</p>
            </div>
            <div className="heritage-image">
                <img src={heritageImage} alt="heritageImage" className='img' />
                <div className="heritage-image-description">
                    <p className="description">Подпись, 19хх год.</p>
                </div>
            </div>
            <div className="heritage-description">
                <p className="description">По окончании конституционного срока Рустам Мухамедов был назначен Начальником отдела в Прокуратуру Республики Узбекистан. Он проработал на этой должности с мая 1975 по май 1992 года обеспечивал соблюдение прав граждан при рассмотрении гражданских дел в судах. Этот период он также посвятил обобщению накопленного за несколько десятилетий большого опыта, который лег в основу кандидатской диссертации в области гражданского права.</p>
            </div>
        </div>
    </div>
  )
}

export default Heritage