
import contentChildhood from '../../../assets/chronology.png'

const ContentChildhood = () => {
  return (
    <div className='childhood' id='childhood'>
        <div className="childhood-container">
            <div className="childhood-items">
                <div className="childhood-items-title">
                    <h4 className="title">Детство и военная юность</h4>
                </div>
                <div className="childhood-items-description">
                    <p className="description"><span className="description-strong">Рустам Мухамедов</span> родился 15 декабря 1922 года в городе Нурата Самаркандской (ныне Навоийской) области. Он рано лишился родителей и вместе со старшим братом воспитывался в интернате. Вместе с ним же добровольцем пошел в ряды Советской Армии. Война застала обоих в Белоруссии и сразу же разлучила. Брат, Истам Мухамедов, погиб в первые дни войны, под Брестом, а Рустам продолжал службу в 228 стрелковом полку 55 стрелковой дивизии. Окончив ускоренные курсы – командира батареи «Катюши», Рустам Мухамедов прошел всю войну, до самой победы, принимая участие в боях Западного, Брянского, 2-го и 4-го Украинских фронтов за освобождение Украины, Молдавии, Румынии Чехословакии и Польши.</p>
                </div>
            </div>
            <div className="childhood-items">
                <div className="childhood-items-image">
                    <img src={contentChildhood} alt="contentChildhood" className='img' />
                </div>
                <div className="childhood-items-description">
                    <p className="description">Рустам Мухамедов, после окончания школы</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContentChildhood