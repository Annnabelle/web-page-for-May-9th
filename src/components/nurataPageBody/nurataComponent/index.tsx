import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'

type NurataComponentTypes = {
  title: string,
  description: string, 
  linkTo: string, 
  link: string,
  image: string,
  className?: string,
  id: string
}

const NurataBodyComponent: React.FC<NurataComponentTypes> = ({title, description, linkTo, link, image, className,id}) => {
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
                <Link to={linkTo} className='link'><p className="text">{link}</p> <FaArrowRight fontSize={28}/></Link>
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

export default NurataBodyComponent