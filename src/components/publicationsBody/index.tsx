import PublicationComponent from "./publicationComponent"
import publicationImageFirst from '../../assets/heritage.png'
import publicationImageSecond from '../../assets/nurataFirst.png'
import './styles.sass'

const PublicationsBody = () => {
  return (
    <div className='publications-page-body'>
        <div className="container">
            <div className="publications-page-body-container">
                <div className="publications-page-body-container-title">
                    <h3 className="title">Публикации</h3>
                </div>
                <div className="publications-page-body-container-content">
                    <PublicationComponent 
                        title="Книга о карьере" 
                        description="Автор: Рустам Муҳамедов. Мемуары прокурора и ветерана войны, описывающие путь от бедного детства до высоких должностей в правовой системе Узбекистана.
                        В книге затронута история службы в армии, учёба в юридической школе, работа в прокуратуре более 50 лет.
                        Рассказывается о борьбе за справедливость, преодолении трудностей, коррупции и становлении независимого законодательства.
                        Содержит автобиографические рассказы и вдохновляющие примеры для молодых юристов."  
                        linkText="Скачать книгу"
                        image={publicationImageSecond}
                        id='heavenlyRay'
                        link='../../assets/career.dox'
                    />
                    <PublicationComponent
                        title="Книга о войне" 
                        description="Автор: Рустам Муҳамедов.
                            Хроники участия автора во Второй мировой войне — с первых боёв в Бресте до освобождения Чехословакии.
                            Рассказано о героизме, лишениях, сражениях и роли миномётных частей в победе над фашизмом.
                            Затронуты человеческие судьбы, мужество советских солдат и послевоенное восстановление жизни.
                            Также описаны воспоминания о жизни после войны, включая работу в органах прокуратуры и государственные реформы."  
                        linkText="Скачать книгу"
                        image={publicationImageFirst}
                        className="row-reverse"
                        id='sacredFish'
                        link='../../assets/war.dox'
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default PublicationsBody