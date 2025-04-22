import React from 'react'
import './styles.sass'
import NurataBodyComponent from './nurataComponent'
import nurataFirst from '../../assets/nurataFirst.png'
import nurataSecond from '../../assets/nurataSecond.png'
import nurataThird from '../../assets/nurataThird.png'
import nurataForth from '../../assets/nurataForth.png'


const NurataPageBody = () => {
  return (
    <div className='nurata-page-body'>
        <div className="container">
            <div className="nurata-page-body-container">
                <div className="nurata-page-body-container-title">
                    <h3 className="title">о нурате</h3>
                </div>
                <div className="nurata-page-body-container-content">
                    <NurataBodyComponent 
                        title="Небесный луч Нураты" 
                        description="На стыке скалистых гор Нуратау и восточной окраины пустыни Кызылкум на севере Навоийской области есть город Нурата. Здесь расположен культовый комплекс Чашма (источник), он же Нур-булак. Комплекс этот является одним из самых древних и почитаемых сакральных мест Центральной Азии. «Когда пророк Мухаммад в ночь вознесения поднимался на небеса, он увидел внизу сияющий луч. Ангелы сказали, ......"  
                        linkTo={`/nurata/${1}`}
                        link="Подробнее"
                        image={nurataFirst}
                        id='heavenlyRay'
                    />
                    <NurataBodyComponent
                        title="Священная рыба маринка" 
                        description="В Нурате паломники пьют воду прямо из арыков, несмотря на большое количество обитающей в них рыбы — маринки. Считается, что из-за высокого содержания хлора и серебра эту воду можно пить даже некипяченой. Более того, ей приписываются целебные свойства. В недавнем прошлом водой источника Бешпанджа пытались лечить все недуги, включая психические расстройства и укусы бешеных животных."  
                        linkTo={`/nurata/${2}`}
                        link="Подробнее"
                        image={nurataSecond}
                        className="row-reverse"
                        id='sacredFish'
                    />
                    <NurataBodyComponent
                        title="Мечети комплекса «Чашма»" 
                        description="Культовый комплекс Чашма, помимо колодца Бешпанджа, включает в себя две мечети. Первая — это построенная в XVI веке мечеть Панджвакта, где совершаются ежедневные пятикратные молитвы. Вторая — пятничная мечеть Чилустун с сорока колоннами; она является реконструкцией мечети IX века. Над источником на холм......"  
                        linkTo={`/nurata/${3}`}
                        link="Подробнее"
                        image={nurataThird}
                        id='mosques'
                    />
                    <NurataBodyComponent
                        title="Мавзолей Айтеке-би Байбекулы" 
                        description="В Нурате рядом с кладбищем Сейиткул аулие находится построенный в 2012 году мавзолей Айтеке-би Байбекулы из рода Алчин (1644-1700) — знаменитого законоучителя казахского народа, воспитанника эмира Жалантоса. Хотя, по другим данным, Айтеке-би похоронен в 75 километрах от Ташкента, вблизи города Чиназ, открытие его мавзолея в Нурате стало заметной вехой в политическом сближении...."  
                        linkTo={`/nurata/${4}`}
                        link="Подробнее"
                        image={nurataForth}
                        className="row-reverse"
                        id='mausoleum'
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default NurataPageBody