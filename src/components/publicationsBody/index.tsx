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
                        title="Мемуары прокурора" 
                        description="Автор: Рустам Муҳамедов. Мемуары прокурора и ветерана войны, описывающие путь от бедного детства до высоких должностей в правовой системе Узбекистана.
                        В книге затронута история службы в армии, учёба в юридической школе, работа в прокуратуре более 50 лет.
                        Рассказывается о борьбе за справедливость, преодолении трудностей, коррупции и становлении независимого законодательства.
                        Содержит автобиографические рассказы и вдохновляющие примеры для молодых юристов."  
                        linkText="Скачать книгу"
                        image={publicationImageSecond}
                        id='heavenlyRay'
                        link='https://fast-api.mukhamedov.uz/download/%D0%A0_%D0%9C%D1%83%D1%85%D0%B0%D0%BC%D0%B5%D0%B4%D0%BE%D0%B2_%D0%90%D0%B4%D0%BE%D0%BB%D0%B0%D1%82%D0%B3%D0%B0_%D1%82%D0%B8%D0%BA%D0%B8%D0%BB%D0%B3%D0%B0%D0%BD_%D1%85%D0%B0%D1%91%D1%82_1_318_%D0%B1%D0%B1_%D0%BE%D1%85%D0%B8%D1%80%D0%B8%D0%B3%D0%B0%D1%87%D0%B0.docx'
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
                        link='https://fast-api.mukhamedov.uz/download/%D0%A0%D1%83%D1%81%D1%82%D0%B0%D0%BC_%D0%9C%D1%83%D1%85%D0%B0%D0%BC%D0%B5%D0%B4%D0%BE%D0%B2_%D0%A3%D0%BD%D1%83%D1%82%D0%B8%D0%BB%D0%BC%D0%B0%D1%81_%D2%9B%D0%BE%D0%BD%D0%BB%D0%B8_%D0%B2%D0%B0_%D1%88%D0%BE%D0%BD%D0%BB%D0%B8_%D0%B9%D1%9E%D0%BB%D0%BB%D0%B0%D1%80.doc'
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default PublicationsBody