import { FaArrowRight } from 'react-icons/fa'

type PublicationComponentTypes = {
  title: string,
  description: string,
  link: string,
  image?: string,
  className?: string,
  id: string,
  linkText: string
}

const PublicationComponent: React.FC<PublicationComponentTypes> = ({title, description,  link, linkText, image, className,id}) => {
  return (
    <div className="nurata-component" id={id}>
      <div className={`nurata-component-container ${className}`}>
        <div className="nurata-component-container-items">
            <div className="nurata-component-container-items-content">
              <div className="content-title">
                <h4 className="title">{title}</h4>
              </div>
              <div className="content-description">
                <p className="description">{description}</p>
              </div>
              <div className="content-link">
                <a href={link} download className="link" target="_blank" rel="noopener noreferrer">
                    <p className="text">{linkText}</p> <FaArrowRight fontSize={28} />
                </a>
              </div>
            </div>
        </div>
        <div className="nurata-component-container-items">
          <div className="nurata-component-container-items-image">
            <img src={image} alt="" className='img' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PublicationComponent