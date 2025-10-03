import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './SponsoredProdCard.css'
import { prodThumbnails } from '../../assets/images'
import { faNairaSign } from '@fortawesome/free-solid-svg-icons'

const SponsoredProdCar = ({name, img, price}) => {

  return (
    <a href="" className='sponsored-prod-card-cont'>
        <section className='prod-cont'>
            <img src={img} alt='' />
            <p>{name}</p>
            <div className='prod-prices'>
                <span className='discounted-price d-flex align-items-center'>
                      <FontAwesomeIcon icon={faNairaSign} />
                      <b>{price}</b>
                </span>
                <span className='original-price d-flex align-items-center'>
                      <FontAwesomeIcon icon={faNairaSign} />
                      <b>123,000</b>
                </span>
                <span className='saved'>
                    -45%
                </span>
            </div>
        </section>
      </a>
  )
}

export default SponsoredProdCar
