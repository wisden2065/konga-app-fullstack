import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './SponsoredProdCard.css'
import { prodThumbnails } from '../../assets/images'
import { faNairaSign } from '@fortawesome/free-solid-svg-icons'
import Skeleton from 'react-loading-skeleton'

const SponsoredProdCar = ({name, img, price, isLoading}) => {

  if(isLoading){
    return(
      <a href="" className='sponsored-prod-card-cont'>
        <section className='prod-cont'>
            {
              <Skeleton width={100+ '%'} containerClassName='hell-no' height={200+'px'} />
            }
            <p>{<Skeleton />}</p>
            <div className='prod-prices'>
                <span className='discounted-price d-flex align-items-center'>
                      <b>{<Skeleton />}</b>
                </span>
                <span className='original-price d-flex align-items-center'>
                      <b>{<Skeleton />}</b>
                </span>
                <span className='saved'>
                    <Skeleton />
                </span>
            </div>
        </section>
      </a>
    )
  }

  return (
    <a href="" className='sponsored-prod-card-cont'>
        <section className='prod-cont'>
            <img src={img} alt='' />
            <div className='desc'>
              <p>{name}</p>
              <div className='prod-prices'>
                  <span className='discounted-price d-flex align-items-center'>
                        <FontAwesomeIcon icon={faNairaSign} />
                        <b>{price}</b>
                  </span>
                  <span className='original-price d-flex align-items-center'>
                        <FontAwesomeIcon icon={faNairaSign} />
                        <b>{price}</b>
                  </span>
                  <span className='saved'>
                      -45%
                  </span>
              </div>
            </div>
        </section>
      </a>
  )
}

export default SponsoredProdCar
