import './ProdDealCard.css'
import { faNairaSign } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { prodThumbnails } from '../../assets/images'


const ProdDealCard = () => {
  return (
      <a href="" className='prod-deal-card-cont'>
        <section className='prod-cont'>
            <img src={prodThumbnails.starlink} alt='' />
            <div className='prod-desc'>
                    <h3 className='prod-name'>Starlink Standard Actuated Kit</h3>
                    <div className='price'>
                        <span className='discounted-price price d-flex align-items-center'>
                            <FontAwesomeIcon icon={faNairaSign}/> 230,000
                        </span>
                        <span className='original-price price d-flex align-items-center'>
                            <FontAwesomeIcon icon={faNairaSign}/> 230,000
                        </span>
                        <span className='discount price d-flex flex-0'>-40%</span>
                    </div>
                    <div>
                        <span className='saved d-flex align-items-center'>
                            You save 
                            <FontAwesomeIcon icon={faNairaSign} /> 300,00
                        </span>
                    </div>
                </div>
        </section>
      </a>
  )
}

export default ProdDealCard
